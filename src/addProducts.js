import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"

async function addProduct(db, product) {

    try {
        await addDoc(collection(db, "products"), product);
        console.log("product added successfully!");
    } catch (e) {
        console.log(e);
    }

}
async function imageUploadReference(storage, image) {
    const storageRef = ref(storage, `prducts/images/${image.name}`);
    return await uploadBytes(storageRef, image);
}


async function uploadImages(storage, img = []) {

    const uploadedImages = img.map(
        async (image)=> {
            //console.log(image)
            const imageReference = await imageUploadReference(storage, image);
            return getDownloadURL(ref(storage, imageReference.ref.fullPath));
        });
        return uploadedImages;
    


}

export { addProduct, uploadImages }


