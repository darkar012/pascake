import { db, storage } from '../src/functions/app';
import { addProduct, uploadImages } from "../src/functions/addProducts";

const form = document.getElementById("forms");


const itemImage = form.img;
const itemName = form.name;
const itemDescription = form.description;
const itemPrice = form.price;
const itemStock = form.stock;
const itemCategory = form.category;
const itemVegan = form.vegano;
const itemSugar = form.azucar;
const itemSubmit = form.btn;



const $form__item__img = document.querySelector("#form__item__img"),
     $imagenPrevisualizacion = document.querySelector("#imagenPrevisualizacion");

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
        const vegano = form.vegano.value;
        const azucar = form.azucar.value;

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
            category,
            vegano,
            azucar
        }

        await addProduct(db, newProducts);
        alert("Producto añadido éxitosamente");

    }



});

$form__item__img.addEventListener("change", () => {
    // Los archivos seleccionados, pueden ser muchos o uno
    const archivos = $form__item__img.files;
    // Si no hay archivos salimos de la función y quitamos la imagen
    if (!archivos || !archivos.length) {
      $imagenPrevisualizacion.src = "";
      return;
    }
    // Ahora tomamos el primer archivo, el cual vamos a previsualizar
    const primerArchivo = archivos[0];
    // Lo convertimos a un objeto de tipo objectURL
    const objectURL = URL.createObjectURL(primerArchivo);
    // Y a la fuente de la imagen le ponemos el objectURL
    $imagenPrevisualizacion.src = objectURL;
  });
