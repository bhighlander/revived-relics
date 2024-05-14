'use client'

import React, { useEffect, useState } from "react";
import Slider, { LazyLoadTypes } from "react-slick";
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
    adaptiveHeight: true,
    infinite: true,
    swipeToSlide: true,
    focusOnSelect: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '25%',
    arrows: false,
    lazyLoad: 'progressive' as LazyLoadTypes,
    beforeChange: (_: any, next: React.SetStateAction<number>) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="mx-auto border-2 border-blue-500 size-11/12 flex flex-box">
      <div className="border-2 border-red-500 w-full h-fit">
        <Slider {...settings}>
          {images?.map((img, idx) => (
            <div key={idx} className= {idx === imageIndex ? "slide activeSlide" : "slide"}>
              <Image src={img} alt={`Slide ${idx + 1}`} width={500} height={500} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
