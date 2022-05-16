import { auth} from "../src/functions/app";
import { signOut } from "firebase/auth";
import { onAuthStateChanged, getAuth } from "firebase/auth";


const yesBtn = document.getElementById("yes__btn");
const noBtn = document.getElementById("no__btn");


yesBtn.addEventListener("click", e => {
    
    onAuthStateChanged(auth, (user) => {
        if (user) {
    
            const uid = user.uid;
            const auth = getAuth();

            signOut(auth).then(() => {
                window.location.href = ("./login.html");
            }).catch((e) => {
                       console.log(e);
            });
     
        } else {

            window.location.href = ("./login.html"); 
           // alert("No hay ninguna cuenta con sesión iniciada");
        }
    });

});


noBtn.addEventListener("click", e => {
    window.location.href = ("./home.html");
})