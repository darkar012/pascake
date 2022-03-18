

const user__name = document.getElementById("user__name");

const user = {
    username: "Lina",
    age: 19,
    gender: "female",
    email: "peraltalinam13@gmail.com"
};

console.log("Información de usuario:" + "Nombre: " + user.username + ", " + "Edad: " + user.age + ", " + "Género: " + user.gender + ", " + "Correo: " + user.email);

user__name.innerHTML = "¡Bienvenida "+ user.username + "!";


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
    stock: 4,
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
    stock: 8,
},
{
    name: "Alfajores de chocolate",
    price: 10000,
    description: "x4",
    categorie: "desserts",
    stock: 12,
}
];

console.log(products[0]);