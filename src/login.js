
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";


 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth();

 //modificar nombre
 const loginForm = document.getElementById("logIn");

 loginForm.addEventListener("submit", e => {
    e.preventDefault();

    const email = loginForm.email.value;
    const password = loginForm.password.value;

    login(email, password);
});


async function login(email, password) {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        alert(`Bienvenido, usuario ${user.email}`);
    } catch(e) {
        alert("Correo o contraseña inválida :(");
    }
}