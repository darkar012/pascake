import { db, auth } from '../src/functions/app';
import { onAuthStateChanged } from "firebase/auth";
import { getFirebaseCart, createFirebaseCart } from "./functions/cart";
import { addProductToCart } from "../utils/index";
import { getMyLocalCart, currencyFormat } from "../utils/index";
import { doc } from 'firebase/firestore';


const cartSection = document.getElementById("cart");
const totalSection = document.getElementById("total");
const shoppingBtn = document.getElementById("shopping_btn");

let cart = [];
let userLogged = undefined;

function loadCart(cart) {

    let total = 0;
    cart.forEach(product => {
        renderProduct(product);
        total += parseInt(product.price);
    });

    totalSection.innerText = "Total a pagar: " + currencyFormat(total);
    
};

async function removeProduct(productId) {
    const newCart = cart.filter(product => product.id !== productId);

    cart = newCart;

    if (userLogged) {
        await createFirebaseCart(db, userLogged.uid, newCart);
    }

    addProductToCart(newCart);

    cartSection.innerHTML = "";

    loadCart(newCart);
}


function renderProduct(product) {
    const productCart = document.createElement("li");

    productCart.className = "product";
    productCart.innerHTML = `

    <img src="${product.img}" class="product_image">
    <h2 class="product_name">${product.name}</h2>
    <h3 class="product_description">${currencyFormat(product.price)} ${product.description}</h3>
    <button class="product_delete">Eliminar producto</button>
    `;

    cartSection.appendChild(productCart);
    

   
    productCart.addEventListener("click", e => {
        if (e.target.tagName === "BUTTON") {
            console.log("remove it!");
            removeProduct(product.id);
        }
   })
};

shoppingBtn.addEventListener("click", e => {
    window.location.href = ("../checkout.html");
})

onAuthStateChanged(auth, async (user) => {
    
    if (user) {

        userLogged = user;
        cart = await getFirebaseCart(db, userLogged.uid);

    } else {
        cart = getMyLocalCart();

    }

    loadCart(cart);

});