'use client';

import { fetchImages } from "@/api/imageUploadManager";
// import { ImagesParallaxScroll } from "@/app/homeUi/projectsGridScroll"; disabled temporarily until image parallax is fixed
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProjectsPage() {
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

    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((imageName, index) => (
                    <div key={index} className="relative w-full h-auto">
                        <Image
                            className="projects-image"
                            src={imageName}
                            alt={`Image ${index}`}
                            layout="responsive"
                            width={500}
                            height={500}
                            objectFit="cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
