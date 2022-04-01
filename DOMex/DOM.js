const form = document.getElementById("forms");

const itemImage = document.getElementById("form__item__img");
const itemName = document.getElementById("form__item__name");
const itemDescription = document.getElementById("form__item__description");
const itemPrice = document.getElementById("form__item__price");
const itemStock = document.getElementById("form__item__Stock");
const itemCategorie = document.getElementById("item__dropDownList");
const itemSubmit = document.getElementById("form__item__Btn");

form.addEventListener("submit",  ev =>{
ev.preventDefault;

if(itemName.value === '' || itemDescription.value ==='' || itemPrice.value === ''){
    alert("Hay campos sin llenar. Por favor llena los campos");
} else { 

    const products = {
        name: itemName.value,
        description: itemDescription.value,
        price: itemPrice.value,
        stock: itemStock.value
    }
}

});

