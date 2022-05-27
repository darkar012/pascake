import { db, auth } from '../src/functions/app'
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from 'firebase/auth';
import { getFirebaseCart, createFirebaseCart} from '../src/functions/cart';
import { getMyLocalCart, addProductToCart, currencyFormat } from '../utils';

const productInfoSection = document.getElementById("productInfo");
const productAssetsSection = document.getElementById("productAssets");
const btnBuy = document.getElementById("btn");


let userLogged = undefined;
let cart = [];

function getParam(param) {
    const url = window.location.search;
    const searchParams = new URLSearchParams(url);
    const productId = searchParams.get(param);
    return productId;
}

async function getProduct() {
    const productId = getParam("id");
    const docRef = doc(db, "products", productId);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();

    const product = {
        ...data,
        id: productId,
    }

    renderProduct(product);

}

function renderProduct(product) {

    productAssetsSection.innerHTML = `<img class="product__mainImage" id="mainImage" src="${product.img[0]}">`;

    const isProductAddedToCart = cart.some((productCart) => productCart.id === product.id);
    const productButtonCart = isProductAddedToCart ?
        '<button class="product_cart" disabled>Producto añadido</button >' :
        '<button class="product_cart">Añadir al carrito</button>';

    productInfoSection.innerHTML = `
    <div class="product__container">
    <h1 class="product__name">${product.name}</h1>
    <p class="product__description color">${currencyFormat(product.price)} ${product.description}</p>
    <p class="product__description">Vegano: ${product.vegano}</p>
    <p class="product__description">Azúcar: ${product.azucar}</p>
    ${productButtonCart}
    </div>
    `;

    const productCartButon = document.querySelector(".product_cart");
    productCartButon.addEventListener("click", (e) => {
        cart.push(product);
        addProductToCart(cart);

        if (userLogged) {
            createFirebaseCart(db,userLogged.uid,cart);
        }
 
        productCartButon.setAttribute("disabled", true);
        productCartButon.innerText = "Producto añadido";
    });

    // console.log(product);
}

btnBuy.addEventListener("click", (e) => {
   window.location.href = ("./index.html");
});


onAuthStateChanged(auth, async (user) => {
    //console.log(user);
    if (user) {

        userLogged = user;
        cart = await getFirebaseCart(db, userLogged.uid);
        // console.log(cart);
    } else {
        cart = getMyLocalCart();

    }

    getProduct();
});

