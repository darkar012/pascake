
//punto 1
//pintar el username en la web
const user__name = document.getElementById("user__name");

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
    stock: 3,
},
{
    name: "Fantasía cake",
    price: 32000,
    description: "x8 porciones",
    categorie: "cakes",
    stock: 2,
},
{
    name: "Torta de chocolate",
    price: 38000,
    description: "x8 porciones",
    categorie: "cakes",
    stock: 4,
},
{
    name: "Brownies cheesecake",
    price: 30000,
    description: "x6",
    categorie: "desserts",
    stock: 6,
},
{
    name: "Rollitos de canela",
    price: 16000,
    description: "x4",
    categorie: "desserts",
    stock: 0,
},
{
    name: "Alfajores de chocolate",
    price: 10000,
    description: "x4",
    categorie: "desserts",
    stock: 12,
}
];

//punto 3
//condicionales: for para recorrer el arreglo de productos y  e if encontrar los que tienen prceio igual o mayor a 30000

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

  

  
