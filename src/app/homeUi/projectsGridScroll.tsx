'use client'

import { useEffect, useState } from "react";
import { ParallaxScroll } from "./parallax-scroll";
import { fetchImages } from "@/api/imageUploadManager";

export function ImagesParallaxScroll() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchNewImages = async () => {
      try {
        const imageUrls = await fetchImages();
        setImages(imageUrls);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchNewImages(); 
  }, []);

  return <ParallaxScroll images={images} />;
}
