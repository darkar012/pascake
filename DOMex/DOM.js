const form = document.getElementById("submit");

const itemImage = document.getElementById("form__item__img");
const itemName = document.getElementById("form__item__name");
const itemDescription = document.getElementById("form__item__description");
const itemPrice = document.getElementById("form__item__price");
const itemCategorie = document.getElementById("item__dropDownList");


form.addEventListener("submit",  e=>{
e.preventDefault;

console.log(form.itemName, form.itemPrice, form.itemDescription);

})

