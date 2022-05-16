
import {auth,db} from "./functions/app";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { doc,setDoc } from "firebase/firestore";


// Initialize Firebase
const createUserForm = document.getElementById("singUpForm");

createUserForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = createUserForm.name.value;
    const lastName = createUserForm.lastname.value;
    const email = createUserForm.email.value;
    const password = createUserForm.password.value;
    const admin = createUserForm.admin.value;
    const userInfo = {name,lastName,email,password,admin};

    const newUser = await createUser(userInfo.email, userInfo.password);
    await addUserToDatabase(newUser.uid, userInfo);

});

async function createUser(email, password) {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        //alert(`Bienvenido, usuario ${user.email}`);
        return user;
        
    } catch (e) {

        if (e.code === "auth/weak-password") {
            alert("Tu contraseña debe tener al menos 6 caracteres");
        }

        if (e.code === "auth/email-already-in-use") {
            alert("Este correo ya se encuentra en uso");
        }
    }
}

async function addUserToDatabase(userId, userInfo = {}) {
    try {
        await setDoc(doc(db, "users", userId), userInfo);
        window.location.href = "./login.html";
    } catch (e) {
        console.log(e);
    }
}
