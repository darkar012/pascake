import { db, auth } from "../app";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { getProducts } from "./allProducts";
import { getFirebaseCart, createFirebaseCart } from "../src/cart"
import { createFirebaseCart } from "../src/cart"

const shopBakery = document.getElementById("bakery");
const categoryFilter = document.getElementById("category");
const orderFilter = document.getElementById("order");

let userLogged = undefined;
let products = [];
let cart = [];
//console.log(cart);


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
        '<button class="product_cart" disabled>Producto añadido</button >' :
        '<button class="product_cart">Añadir al carrito</button>';

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

    const productCartButton = product.querySelector(".product_cart");


    productCartButton.addEventListener("click", async (e) => {
        e.preventDefault();

        cart.push(item);
        addProductToCart();

        if (userLogged) {
            await createFirebaseCart(db, userLogged.uid, cart);
        }

        productCartButton.setAttribute("disabled", true);
        productCartButton.innerText = "Producto añadido";

    });

}

async function addProductToCart() {
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


onAuthStateChanged(auth, async (user) => {
    //console.log(user);
    if (user) {

        userLogged = user;
        cart = await getFirebaseCart(db, userLogged.uid);
       // console.log(cart);
    } else {
        cart = getMyCart();

    }

    loadProducts();

});


/*

function filterBy(){
    const newCategory = categoryFilter.value;
    const newOrder = orderFilter.value;

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
    
    productSection.innerHTML = "";
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

onAuthStateChanged(auth, async (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      userLogged = user;
      cart = await getFirebaseCart(db, userLogged.uid);
      // ...
    } else {
        cart = getMyLocalCart();
      // User is signed out
      // ...
    }

    loadProducts();

  });
  */