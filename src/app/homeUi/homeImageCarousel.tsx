'use client'

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
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "25px",
    focusOnSelect: true,
    arrows: false,
    lazyLoad: 'progressive' as LazyLoadTypes,
    beforeChange: (_: any, next: React.SetStateAction<number>) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "1px"
        }
      }
    ]
  };

  return (

    // try removing all the divs to see if the slider can be forced to cutoff the images to the sides on mobile

    <div className="home-container flex justify-center items-start size-full">
      <div className="slider-container w-4/5 mt-10">
        <Slider {...settings} className="slider">
          {images?.map((img, idx) => (
            <div key={idx} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
              <Image
                className="carousel-image"
                src={img}
                alt={`Slide ${idx + 1}`}
                width={800}
                height={450}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
