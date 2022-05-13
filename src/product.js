import {db} from '../app'
import { doc, getDoc } from "firebase/firestore";
 
const productInfoSection = document.getElementById("productInfo");
const productAssetsSection = document.getElementById("productAssets");

function getParam(param){
    const url= window.location.search;
    const searchParams = new URLSearchParams(url);
    const productId = searchParams.get(param);
    return productId;
}

async function getProduct(){
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


    productInfoSection.innerHTML = `
    <h1 class="product__name">${product.name}</h1>
    <p class="product__description">${product.description}</p>
    <h3 class="product__price">$${product.price}</h3>
    <button class="product__cart"> Añadir al carrito</button>`;

    console.log(product);
}

getProduct();