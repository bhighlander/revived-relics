import { storage } from "@/app/firebaseConfig";
import { ref, listAll, getDownloadURL, deleteObject } from "firebase/storage";

const fetchImages = async () => {
    const storageRef = ref(storage, 'images/');
    const result = await listAll(storageRef);

    const urlPromises = result.items.map((imageRef) => getDownloadURL(imageRef));

    return Promise.all(urlPromises);
};

const deleteImage = async (imageName: any) => {
    const imageRef = ref(storage, `${imageName}`);
    await deleteObject(imageRef);
    return `${imageName} deleted successfully.`;
};

export { fetchImages, deleteImage };
