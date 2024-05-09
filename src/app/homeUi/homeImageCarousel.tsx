'use client'

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { fetchRecentImages } from "@/api/imageUploadManager";


export default function HomeCarousel() {
  const [imageIndex, setImageIndex] = useState(0)
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchNewImages = async () => {
      try {
        const imageUrls = await fetchRecentImages();
        setImages(imageUrls);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchNewImages(); 
  }, []);

  const settings = {
    infinite: true,
    swipeToSlide: true,
    focusOnSelect: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '25%',
    beforeChange: (_: any, next: React.SetStateAction<number>) => setImageIndex(next)
  };

  return (
    <div style={{ marginTop: 100 }}>
      <div style={{ width: '70%', margin: '0 auto', height: '50vh' }}>
        <Slider {...settings}>
          {images?.map((img, idx) => (
            <div key={idx} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
              <Image src={img} alt={`Slide ${idx + 1}`} width={500} height={500} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
