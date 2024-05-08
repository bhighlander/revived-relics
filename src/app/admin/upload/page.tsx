'use client'

import { storage } from '@/app/firebaseConfig';
import { ref, uploadBytesResumable, UploadTaskSnapshot } from "firebase/storage";
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';

export default function ImageUpload() {
  const router = useRouter();
  const [image, setImage] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = (e: { preventDefault: any; }) => {
    e.preventDefault();
    if (!image) {
      setError('Please select an image to upload');
      return;
    }
    const storageRef = ref(storage, `images/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot: UploadTaskSnapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      error => {
        console.error(error.message);
      },
      () => {
        console.log("Upload complete");
      }
    );
    router.push('projects');
  };

  return (
    <div>
      <input type='file' onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
