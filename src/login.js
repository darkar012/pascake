
import { auth } from "./functions/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


// Initialize Firebase
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = loginForm.email.value;
    const password = loginForm.password.value;

    await login(email, password);

});


async function login(email, password) {
    console.log(email, password);
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
       // alert(`Bienvenido, usuario ${user.email}`);
        window.location.href = "../home.html";

    } catch (e) {
        console.log(e);
        alert("Correo o contraseña inválida :(");
    }

}