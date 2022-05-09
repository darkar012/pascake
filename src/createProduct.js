import { db, storage } from '../app';
import { addProduct, uploadImages } from "./addProducts";

const form = document.getElementById("forms");


const itemImage = form.img;
const itemName = form.name;
const itemDescription = form.description;
const itemPrice = form.price;
const itemStock = form.stock;
const itemCategory = form.category;
const itemSubmit = form.btn;


form.addEventListener("submit", async (ev) => {
    ev.preventDefault();

    if (itemName.value === '' || itemDescription.value === '' || itemPrice.value === '') {
        alert("Hay campos sin llenar. Por favor llena los campos");
    } else {


        const img = form.img.files;
        const name = form.name.value;
        const description = form.description.value;
        const price = form.price.value;
        const stock = form.stock.value;
        const category = form.category.value;

        let gallery = [];

        if (img.length) {
            //upload images to firebase
            const uploadedImages = await uploadImages(storage, [...img]);
            gallery = await Promise.all(uploadedImages)

        }

        const newProducts = {
            img: gallery,
            name,
            description,
            price,
            stock,
            category
        }

        await addProduct(db, newProducts);

    }

    

});

