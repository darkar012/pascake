
//punto 1
//pintar el username en la web
const user__name = document.getElementById("user__name");
const deserts = document.getElementById("user__name");

//objeto user
const user = {
    username: "Lina",
    age: 19,
    gender: "female",
    email: "peraltalinam13@gmail.com"
};

//leer el objeto user en la consola
console.log("Información de usuario:" + "Nombre: " + user.username + ", " + "Edad: " + user.age + ", " + "Género: " + user.gender + ", " + "Correo: " + user.email);

//modificar el h4 del html con la info del js
user__name.innerHTML = "¡Bienvenida "+ user.username + "!";

//punto 2
//arreglo de productos
const products = [
{
    name: "Cheesecake de moras",
    price: 30000,
    description: "x6 porciones",
    categorie: "cakes",
    image: "./img/cake1.png",
    stock: 3,
},
{
    name: "Fantasía cake",
    price: 32000,
    description: "x8 porciones",
    categorie: "cakes",
    image: "./img/cake2.png",
    stock: 2,
},
{
    name: "Torta de chocolate",
    price: 38000,
    description: "x8 porciones",
    categorie: "cakes",
    image: "./img/cake3.png",
    stock: 4,
},
{
    name: "Brownies cheesecake",
    price: 30000,
    description: "x6",
    categorie: "desserts",
    image: "./img/dess1.png",
    stock: 6,
},
{
    name: "Rollitos de canela",
    price: 16000,
    description: "x4",
    categorie: "desserts",
    image: "./img/dess2.png",
    stock: 0,
},
{
    name: "Alfajores de chocolate",
    price: 10000,
    description: "x4",
    categorie: "desserts",
    image: "./img/dess3.png",
    stock: 12,
},
{
    name: "Cheesecake de frutos rojos",
    price: 30000,
    description: "x6 porciones",
    categorie: "cakes",
    image: "./img/sobre1.png",
    stock: 6,
},
{
    name: "Torta de chocolate con arequipe",
    price: 36000,
    description: "x8 porciones",
    categorie: "cakes",
    image: "./img/sobre2.png",
    stock: 7,
},
{
    name: "Cheesecake de brownie",
    price: 34000,
    description: "x6 porciones",
    categorie: "cakes",
    image: "./img/sobre3.png",
    stock: 2,
},
{
    name: "Pie de fresas",
    price: 38000,
    description: "x8 porciones",
    categorie: "cakes",
    image: "./img/sobre4.png",
    stock: 4,
},
{
    name: "Pan con almendras",
    price: 8000,
    description: "x6 porciones",
    categorie: "breads",
    image: "./img/bread1.jpg",
    stock: 6,
},
{
    name: "Pan brownie",
    price: 8000,
    description: "x6 porciones",
    categorie: "breads",
    image: "./img/bread2.jpg",
    stock: 4,
},
{
    name: "Pan con nueces",
    price: 8000,
    description: "x6 porciones",
    categorie: "breads",
    image: "./img/bread3.jpg",
    stock: 8,
}
];

//punto 3
//condicionales: for para recorrer el arreglo de productos y  e if encontrar los que tienen precio igual o mayor a 30000

console.log("Productos con precio igual o mayor a 30000: "); 
  for (let index = 0; index < products.length; index++) {
      if (products[index].price >= 30000) {
          console.log(products[index].name);
      }
  }

  //productos sin stock
  console.log("Productos sin stock: "); 
  for (let index = 0; index < products.length; index++) {
      if (products[index].stock <= 0) {
          console.log(products[index].name);
      }
  }


const shopBakery = document.getElementById("bakery");
function shop(){
    shopBakery.innerHTML= "";

    for (let index = 0; index < products.length; index++) {
        shopBakery.appendChild(paint(products[index]));
    } 
}

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

    container.appendChild(image);
    container.appendChild(name);
    container.appendChild(price);

    return container;
}

shop();
  
