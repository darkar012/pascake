//get images from DOM
const enlaces  = document.querySelectorAll('.ul .a');
const lightbox = document.querySelector('.lightbox');
const grow  = document.querySelector('.big');
const close   = document.querySelector('.close');

import { db } from "../app";
import { getProducts } from "./allProducts";

/*
//products arrays
const products = [
    {
        name: "Cheesecake de moras",
        price: 30000,
        description: "x6 porciones",
        categorie: "cakes",
       // image: "",
        stock: 3,
    },
    {
        name: "Fantasía cake",
        price: 32000,
        description: "x8 porciones",
        categorie: "cakes",
       // image: "./img/cake2.png",
        stock: 2,
    },
    {
        name: "Torta de chocolate",
        price: 38000,
        description: "x8 porciones",
        categorie: "cakes",
        //image: "./img/cake3.png",
        stock: 4,
    },
    {
        name: "Brownies cheesecake",
        price: 30000,
        description: "x6",
        categorie: "desserts",
       // image: "./img/dess1.png",
        stock: 6,
    },
    {
        name: "Rollitos de canela",
        price: 16000,
        description: "x4",
        categorie: "desserts",
       // image: "./img/dess2.png",
        stock: 0,
    },
    {
        name: "Alfajores de chocolate",
        price: 10000,
        description: "x4",
        categorie: "desserts",
      //  image: "./img/dess3.png",
        stock: 12,
    },
    {
        name: "Torta de chocolate con arequipe",
        price: 36000,
        description: "x8 porciones",
        categorie: "cakes",
      //  image: "./img/sobre2.png",
        stock: 7,
    },
    {
        name: "Cheesecake de brownie",
        price: 34000,
        description: "x6 porciones",
        categorie: "cakes",
       // image: "./img/sobre3.png",
        stock: 2,
    },
    {
        name: "Pie de fresas",
        price: 38000,
        description: "x8 porciones",
        categorie: "cakes",
       // image: "./img/sobre4.png",
        stock: 4,
    },
    {
        name: "Pan con almendras",
        price: 9000,
        description: "x6 porciones",
        categorie: "breads",
      //  image: "./img/bread1.jpg",
        stock: 6,
    },
    {
        name: "Pan brownie",
        price: 9000,
        description: "x6 porciones",
        categorie: "breads",
      //  image: "./img/bread2.jpg",
        stock: 4,
    },
    {
        name: "Pan con nueces",
        price: 9000,
        description: "x6 porciones",
        categorie: "breads",
      //  image: "./img/bread3.jpg",
        stock: 8,
    }
    ];
*/

const shopBakery = document.getElementById("bakery");


async function loadProducts(){
  const firebaseProducts =  await getProducts(db);
  firebaseProducts.forEach(product =>{
    renderProduct(product);
});
                                    
}


function renderProduct(item){
    const product = document.createElement("a");
    const coverImage = item.images?item.images[0]: "https://cdn.dribbble.com/users/55871/screenshots/2158022/media/95f08ed3812af28b93fa534fb5d277b3.jpg";
    product.className ="product"; 
    product.setAttribute("href", `./product.html?id%=${item.id}`);


    product.innerHTML = `
    <div class="container_bakery"></div>
    <img src="${coverImage}" alt="" class="desert__img">
    <div class="desert">
         <h3 class="desert__caption">${item.name}</h3>
         <p class="desert__description">$${item.price} ${item.description}</p>
         <button class="btn">Añadir</button>
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
    container.className = "desert";

    //images
    let image = document.createElement("img");
    image.className = "desert__img"
    image.src = products.image;

    //product name
    let name = document.createElement("h3");
    name.className = "desert__title";
    name.innerHTML = products.name;

    //product description
    let price = document.createElement("p");
    price.className = "desert__description";
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
