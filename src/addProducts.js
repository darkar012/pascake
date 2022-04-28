import { addDoc, collection } from "firebase/firestore";


async function addProduct(db,product) {

    try {
        await addDoc (collection (db, "products"), product);
        console.log("product added successfully!");
    } catch (e) {
        console.log(e);
    }

}

async function uploadImages(storage, img = []){
    
    const uploadedImages = img.map(
        image => {
        console.log(image)
        });    
        
}

export{addProduct, uploadImages}


