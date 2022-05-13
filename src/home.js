import { db } from "../app";
import { getProducts } from "./allProducts";
import { getFirebaseCart, createFirebaseCart } from "../src/cart"

const shopBakery = document.getElementById("bakery");
const categoryFilter = document.getElementById("category"); 

let products = [];

async function loadProducts(){
  const firebaseProducts =  await getProducts(db);
  firebaseProducts.forEach(product =>{
    renderProduct(product);
});
        products = firebaseProducts;                            
}


function renderProduct(item){
    //console.log(item);
    const product = document.createElement("a");


    product.className ="product"; 
    product.setAttribute("href", `./product.html?id=${item.id}`);
    const coverImage = item.img.length ? item.img[0] : "https://cdn.dribbble.com/users/55871/screenshots/2158022/media/95f08ed3812af28b93fa534fb5d277b3.jpg";
    
    //cart
    const isProductAddedToCart = cart.some((productCart) => productCart.id === item.id);
    const productButtonCart = isProductAddedToCart ?
    '<button class="product__cart" disabled>Producto añadido</button>':
    '<button class="product__cart">Añadir al carrito</button>';

    product.innerHTML = `
    
        <div class="dessert"> 
            <img src="${coverImage}" alt="" class="dessert__img">
            <h3 class="dessert__caption">${item.name}</h3>
            <p class="dessert__description">$${item.price} ${item.description}</p>
             ${productButtonCart}
        </div>`;
 
    shopBakery.appendChild(product);
                                
}


function filterBy(){
    
    const newCategory = categoryFilter.value;
    let filteredProducts =[];

    if (newCategory !== "") {
         filteredProducts = products.filter((product) => product.category === newCategory); 
    } else {
        filteredProducts = products;
    }

    shopBakery.innerHTML=""; 
    filteredProducts.forEach(product=> {
        renderProduct(product);
    });
    
}

categoryFilter.addEventListener("change",e=>{
    filterBy();
});

loadProducts();
