const form = document.getElementById("forms");

const itemImage = form.img;
const itemName = form.name;
const itemDescription = form.description;
const itemPrice = form.price;
const itemStock = form.stock;
const itemCategory = form.category;
const itemSubmit = form.btn;

form.addEventListener("submit",  ev =>{
ev.preventDefault();

if(itemName.value === '' || itemDescription.value ==='' || itemPrice.value === ''){
    alert("Hay campos sin llenar. Por favor llena los campos");
} else { 

    const products = {
        name: itemName.value,
        description: itemDescription.value,
        price: itemPrice.value,
        stock: itemStock.value
    }

    console.log(products);
}

});

