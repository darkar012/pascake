//get images from DOM
const enlaces  = document.querySelectorAll('.ul .a');
const lightbox = document.querySelector('.lightbox');
const grow  = document.querySelector('.big');
const close   = document.querySelector('.close');

import { db } from "../app";
import { getProducts } from "./allProducts";

const shopBakery = document.getElementById("bakery");


async function loadProducts(){
  const firebaseProducts =  await getProducts(db);
  firebaseProducts.forEach(product =>{
    renderProduct(product);
});
                                    
}


function renderProduct(item){
    console.log(item);
    const product = document.createElement("a");
    const coverImage = item.img.length ? item.img[0] : "https://cdn.dribbble.com/users/55871/screenshots/2158022/media/95f08ed3812af28b93fa534fb5d277b3.jpg";
    product.className ="product"; 
    product.setAttribute("href", `./product.html?id%=${item.id}`);


    product.innerHTML = `
    
        <div class="dessert"> 
            <img src="${coverImage}" alt="" class="dessert__img">
            <h3 class="dessert__caption">${item.name}</h3>
            <p class="dessert__description">$${item.price} ${item.description}</p>
            <button class="btn btn__align">Añadir</button>
        </div>
    
   
    `;
 
    shopBakery.appendChild(product);

}


loadProducts();

/*
function shop(){
    shopBakery.innerHTML= "";

    for (let index = 0; index < products.length; index++) {
        shopBakery.appendChild(paint(products[index]));
    } 
}

/*

function paint(products){

    //container
    let container = document.createElement("div");
    container.className = "dessert";

    //images
    let image = document.createElement("img");
    image.className = "dessert__img"
    image.src = products.image;

    //product name
    let name = document.createElement("h3");
    name.className = "dessert__title";
    name.innerHTML = products.name;

    //product description
    let price = document.createElement("p");
    price.className = "dessert__description";
    price.innerHTML = "$" + products.price + " " + products.description;


    // shipping cart btn
    let cart = document.createElement("button");
    cart.className = "btn";
    cart.innerHTML = "Agregar";


    container.appendChild(image);
    container.appendChild(name);
    container.appendChild(price);
    container.appendChild(cart);

    return container;
}

shop();


//loop each image
enlaces.forEach(( everyLink , i )=>{
    enlaces[i].addEventListener('click', ( e )=>{
        e.preventDefault();
        //ruta de cada imagen, cuando se le haga click en la imagen chiquita pasa la ruta a la del lightbox (la grande)
        let link = everyLink.querySelector('.img').src;
        console.log(link);
        let title = e.target.alt;
        console.log(title);
       

        lightbox.classList.add('true')
        grow.setAttribute('src', link);

        /*openLightbox();*/
       // create(title);
        
//})
//})


/*
//close elements
close.addEventListener('click', ()=>{
    lightbox.classList.remove('true');
    lightbox.removeChild(lightbox.lastElementChild);
})



/*
//create p with the product name
function create(name){
    const productName = document.createElement("p");
    productName.className="description";
    productName.innerHTML= name;
    console.log(productName);
    lightbox.appendChild(productName);
};
*/
