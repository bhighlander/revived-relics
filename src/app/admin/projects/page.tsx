'use client'

import { useEffect, useState } from "react";
import { fetchImages } from "../../../api/imageUploadManager";
import Image from "next/image";
import { DeleteProjectButton } from "../adminComponents/deleteProjectButton";


export default function AllProjectsPage() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchAllImages = async () => {
      try {
        const imageUrls = await fetchImages(); // Fetch all images
        setImages(imageUrls);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchAllImages(); 
  }, []);

  const handleDelete = (imageName: string) => {
    setImages((prevImages) => prevImages.filter((image) => image !== imageName));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All projects</h1>
      <div className="grid grid-cols-3 gap-4">
        {images.map((imageName, index) => (
          <div key={index} className="max-w-xs">
            <Image
              src={imageName}
              alt={`Image ${index}`}
              width={150}
              height={(150 * 70) / 50}
            />
            <DeleteProjectButton imageName={imageName} onDelete={handleDelete} />
          </div>
        ))}
      </div>
    </div>
  );
}
