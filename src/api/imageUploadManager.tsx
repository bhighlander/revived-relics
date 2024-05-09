import { storage } from "@/app/firebaseConfig";
import { ref, listAll, getDownloadURL, deleteObject, getMetadata } from "firebase/storage";

const fetchImages = async () => {
    const storageRef = ref(storage, 'images/');
    const result = await listAll(storageRef);

    const urlPromises = result.items.map((imageRef) => getDownloadURL(imageRef));

    return Promise.all(urlPromises);
};

const fetchRecentImages = async () => {
    const storageRef = ref(storage, 'images/');
    const result = await listAll(storageRef);
  
    // Get metadata for each image
    const metadataPromises = result.items.map((imageRef) => getMetadata(imageRef));
  
    // Wait for all metadata to be fetched
    const metadataArray = await Promise.all(metadataPromises);
  
    // Sort images by their creation date in descending order
    const sortedImages = metadataArray.sort((a, b) => {
      const timeCreatedA = typeof a.timeCreated === 'number' ? a.timeCreated : Date.parse(a.timeCreated);
      const timeCreatedB = typeof b.timeCreated === 'number' ? b.timeCreated : Date.parse(b.timeCreated);
      return timeCreatedB - timeCreatedA;
    });
  
    // Get download URLs for the first 5 images
    const urlPromises = sortedImages.slice(0, 5).map((metadata) => getDownloadURL(ref(storage, metadata.fullPath)));
  
    return Promise.all(urlPromises);
  };

const deleteImage = async (imageName: any) => {
    const imageRef = ref(storage, `${imageName}`);
    await deleteObject(imageRef);
    return `${imageName} deleted successfully.`;
};

export { fetchImages, deleteImage, fetchRecentImages };
