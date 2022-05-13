import { db } from "../app";
import { getProducts } from "./allProducts";
import { getFirebaseCart, createFirebaseCart } from "../src/cart"

const shopBakery = document.getElementById("bakery");
const categoryFilter = document.getElementById("category");

let products = [];
let cart = getMyCart();
console.log(cart);


async function loadProducts() {
    const firebaseProducts = await getProducts(db);
    firebaseProducts.forEach(product => {
        renderProduct(product);
    });
    products = firebaseProducts;
}


function renderProduct(item) {
    //console.log(item);
    const product = document.createElement("a");

    const isProductAddedToCart = cart.some((productCart) => productCart.id === item.id);
    const productButtonCart = isProductAddedToCart ?
    '<button class="product_cart" disabled>Producto añadido</button >':
    '<button class="product_cart">Añadir al carrito</button>';

    console.log(isProductAddedToCart);


    product.className = "product";
    product.setAttribute("href", `./product.html?id=${item.id}`);
    const coverImage = item.img.length ? item.img[0] : "https://cdn.dribbble.com/users/55871/screenshots/2158022/media/95f08ed3812af28b93fa534fb5d277b3.jpg";


    product.innerHTML = `
    
        <div class="dessert"> 
            <img src="${coverImage}" alt="" class="dessert__img">
            <h3 class="dessert__caption">${item.name}</h3>
            <p class="dessert__description">$${item.price} ${item.description}</p>
            ${productButtonCart}
        </div>`;

    shopBakery.appendChild(product);

    const productCartButton = product.querySelector(".product__cart");
    //console.log(productCartButton);

    productCartButton.addEventListener("click", e => {
        e.preventDefault();

        cart.push(item);
        addProductToCart();
        productCartButton.setAttribute("disabled", true);

    });

}

function addProductToCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function getMyCart() {
    const myCart = localStorage.getItem("cart");
    return myCart ? JSON.parse(myCart) : [];
}

function filterBy() {

    const newCategory = categoryFilter.value;
    let filteredProducts = [];

    if (newCategory !== "") {
        filteredProducts = products.filter((product) => product.category === newCategory);
    } else {
        filteredProducts = products;
    }

    shopBakery.innerHTML = "";
    filteredProducts.forEach(product => {
        renderProduct(product);
    });

}

categoryFilter.addEventListener("change", e => {
    filterBy();
});

loadProducts();
