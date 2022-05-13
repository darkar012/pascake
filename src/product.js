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
    <div class="product__container">
    <h1 class="product__name">${product.name}</h1>
    <p class="product__description">$${product.price} ${product.description}</p>
    <button class="btn"> Añadir al carrito</button>
    </div>
    `;
   
    console.log(product);
}

getProduct();