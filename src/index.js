import { db, auth } from "../src/functions/app";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { getProducts } from "../src/functions/allProducts";
import { getFirebaseCart, createFirebaseCart } from "../src/functions/cart"
import { addProductToCart, getMyLocalCart, currencyFormat } from "../utils"

const shopBakery = document.getElementById("bakery");
const categoryFilter = document.getElementById("category");
const orderFilter = document.getElementById("order");
const veganFilter = document.getElementById("veganism");
const sugarFilter = document.getElementById("sugars");
const btnCustome = document.getElementById("customeBtn");



let userLogged = undefined;
let products = [];
let cart = [];


async function loadProducts() {

    const firebaseProducts = await getProducts(db);
    shopBakery.innerHTML = "";
    firebaseProducts.forEach(product => {
        renderProduct(product);
    });
    products = firebaseProducts;
}


function renderProduct(item) {

    const product = document.createElement("a");
    product.className = "product";

    product.setAttribute("href", `./product.html?id=${item.id}`);
    const coverImage = item.img.length ? item.img[0] : "https://cdn.dribbble.com/users/55871/screenshots/2158022/media/95f08ed3812af28b93fa534fb5d277b3.jpg";

    const isProductAddedToCart = cart.some((productCart) => productCart.id === item.id);
    const productButtonCart = isProductAddedToCart ?
        '<button class="product_cart" disabled>Producto añadido</button >' :
        '<button class="product_cart">Añadir al carrito</button>';


    product.innerHTML = `
    
        <div class="dessert"> 
            <img src="${coverImage}" alt="" class="dessert__img">
            <h3 class="dessert__caption">${item.name}</h3>
            <p class="dessert__description">${currencyFormat(item.price)} ${item.description}</p>
            ${productButtonCart}
        </div>`;

    shopBakery.appendChild(product);

    const productCartButton = product.querySelector(".product_cart");


    productCartButton.addEventListener("click", async (e) => {
        e.preventDefault();

        cart.push(item);
        addProductToCart(cart);

        if (userLogged) {
            await createFirebaseCart(db, userLogged.uid, cart);
        }

        productCartButton.setAttribute("disabled", true);
        productCartButton.innerText = "Producto añadido";

    });

}


function filterBy() {
    const newCategory = categoryFilter.value;
    const newOrder = orderFilter.value;
    //const newVegan= veganFilter.value;

    let filteredProducts = [];


    if (newCategory !== "") {
        filteredProducts = products.filter((product) => product.category === newCategory);
    } else {
        filteredProducts = products;
    }

    if (newOrder === "asc") {
        filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
    }

    if (newOrder === "desc") {
        filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
    }

    shopBakery.innerHTML = "";
    filteredProducts.forEach(product => {
        renderProduct(product);
    });
}

categoryFilter.addEventListener("change", e => {
    filterBy();
});

orderFilter.addEventListener("change", e => {
    filterBy();
});


//if user is logged
onAuthStateChanged(auth, async (user) => {
    if (user) {

        userLogged = user;
        cart = await getFirebaseCart(db, userLogged.uid);

    } else {
        cart = getMyLocalCart();

    }

    loadProducts();

});


btnCustome.addEventListener("click", (e) => {
    window.location.href= "https://linaperalta.github.io/pascakeP5/index.html";
});


