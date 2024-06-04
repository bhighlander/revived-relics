'use client';

import React, { useEffect, useState } from "react";
import Slider, { LazyLoadTypes } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { fetchRecentImages } from "@/api/imageUploadManager";

export default function HomeCarousel() {
  const [imageIndex, setImageIndex] = useState(0);
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
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    lazyLoad: 'progressive' as LazyLoadTypes,
    beforeChange: (_: any, next: React.SetStateAction<number>) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: true
        }
      }
    ]
  };

  return (
    <div className="w-5/6 mx-auto">
      <Slider {...settings} className="slider">
        {images?.map((img, idx) => (
          <div key={idx} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <Image
              className="w-full h-auto"
              src={img}
              alt={`Slide ${idx + 1}`}
              width={800}
              height={450}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
