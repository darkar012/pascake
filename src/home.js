import { db, auth } from "../src/functions/app";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { getProducts } from "../src/functions/allProducts";
import { getFirebaseCart, createFirebaseCart } from "../src/functions/cart"
import { createFirebaseCart } from "../src/functions/cart"
import { addProductToCart, getMyLocalCart, currencyFormat } from "../utils"

const shopBakery = document.getElementById("bakery");
const categoryFilter = document.getElementById("category");
const orderFilter = document.getElementById("order");
const veganFilter = document.getElementById("veganism");
const sugarFilter = document.getElementById("sugars");

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
    const newVeganism = veganFilter.value;
    const newSugars = sugarFilter.value;

    let filteredCategory = [];
    let filteredProducts = [];
    let filteredVegan = [];
    let filteredSugar = [];

    if (newCategory !== "") {
        filteredCategory = products.filter((product) => product.category === newCategory);
    } else {
        filteredCategory = products;
    }

    if (newOrder === "asc") {
        filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
    }

    if (newOrder === "desc") {
        filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
    }

    if (newVeganism !== "") {
        filteredVegan = products.filter((product) => product.vegano === newVeganism);
    } else {
        filteredVegan = products;
    }

    if (newSugars !== "") {
        filteredSugar = products.filter((product) => product.azucar === newSugars);
    } else {
        filteredSugar = products;
    }



    shopBakery.innerHTML = "";

    filteredCategory.forEach(product => {
        renderProduct(product);
    });



    filteredProducts.forEach(product=> {
        renderProduct(product);
    });


    filteredVegan.forEach(product => {
        renderProduct(product);
    });


    filteredSugar.forEach(product => {
        renderProduct(product);
    });
}

categoryFilter.addEventListener("change", e => {
    filterBy();
});

orderFilter.addEventListener("change", e => {
    filterBy();
});

veganFilter.addEventListener("change", e => {
    filterBy();
});

sugarFilter.addEventListener("change", e => {
    filterBy();
});


//const filteredArray = filteredCategory.filter(value => filteredVegan.includes(value));



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


