import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.DB_FIREBASE_API_KEY,
  authDomain: process.env.DB_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.DB_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.DB_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.DB_FIREBASE_APP_ID,
  measurementId: process.env.DB_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const storage = getStorage();
const storageRef = ref(storage)

export { app, storage, storageRef }
