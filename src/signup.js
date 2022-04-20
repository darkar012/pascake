
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";


 // Initialize Firebase
 //const app = initializeApp(firebaseConfig);
 const auth = getAuth();

 const createUserForm = document.getElementById("singUp");
 
 createUserForm.addEventListener("submit", e => {
 e.preventDefault();

 const name = createUserForm.name.value;
 const lastname = createUserForm.lastname.value;
 const email = createUserForm. email.value;
 const password = createUserForm.password.value;

  createUser(name,lastname, email, password);

 });

    async function createUser(name, email, password) {
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            alert(`Bienvenido, usuario ${user.email}`);
        } catch(e) {
     
         if(e.code === "auth/weak-password") {
             alert("Tu contraseña debe tener al menos 6 caracteres");
         }
     
         if(e.code === "auth/email-already-in-use") {
             alert("Este correo ya se encuentra en uso");
         }
        }
     }
