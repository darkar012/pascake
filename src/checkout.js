import { db, auth } from "../src/functions/app";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import {getFirebaseCart} from "../src/functions/cart"
import { currencyFormat } from "../utils";

let fullTotal = 0;
let userId;

const totalPrice = document.getElementById("total_price");
const buy = document.getElementById("cart__btn");
const name = document.getElementById("name");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const phone= document.getElementById("phone");
const place = document.getElementById("place");
const date = document.getElementById("date");
const payment = document.getElementById("form__item__dropDownList");


function getCartData(data,id) {

let total = 0;

data.forEach( item => {
    total += parseInt(item.price);
    
});
asignData(total,id);

}

function asignData(total,id){
   fullTotal = total;
   userId = id;

   totalPrice.innerText = (currencyFormat(total));
  
}

onAuthStateChanged(auth, async (user) => {
    if (user) {

        userLogged = user;
        cart = await getFirebaseCart(db, userLogged.uid);

    } else {

    }
    getCartData(cart,userLogged.uid);

});


buy.addEventListener("click", e => {
    alert("¡Compra éxitosa! \n" + "Name: "+ name.value + " " +lastName.value + "\nEmail: " + email.value + "\nPhone: " + phone.value + "\nMétodo de pago: " + payment.value + "\nDirección: " + place.value + "\nFecha de entrega: " + date.value);
})
