
import { async } from "@firebase/util";
import { getdb, getApp, initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//import {getFirestore, doc, adDoc} from "firebase/firestore";
import { doc, getFirestore, setDoc } from "firebase/firestore";


// Initialize Firebase

//const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(getApp());
console.log(db);
const createUserForm = document.getElementById("singUpForm");

createUserForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = createUserForm.name.value;
    const lastname = createUserForm.lastname.value;
    const email = createUserForm.email.value;
    const password = createUserForm.password.value;

    const userInfo = {
        name,
        lastname,
        email,
        password
    };

    const newUser = await createUser(auth, userInfo.email, userInfo.password);
    await addUserToDatabase(db, newUser.uid, userInfo);

    createUser(name, lastname, email, password);

});

async function createUser(email, password) {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        alert(`Bienvenido, usuario ${user.email}`);
    } catch (e) {

        if (e.code === "auth/weak-password") {
            alert("Tu contraseña debe tener al menos 6 caracteres");
        }

        if (e.code === "auth/email-already-in-use") {
            alert("Este correo ya se encuentra en uso");
        }
    }
}

async function addUserToDatabase(db, userId, userInfo = {}) {
    try {
        await setDoc(doc(db, "users", userId), userInfo);
    } catch (e) {
        console.log(e);
    }
}
