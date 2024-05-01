'use client'

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { GET } from "./../admin/upload/api/image/route"
import cyber1 from "../../assets/cyber1.jpg"
import cyber2 from "../../assets/cyber2.jpg"
import cyber4 from "../../assets/cyber4.jpg"
import Image from "next/image";

// temporarily implementing hardcoded images until api is fixed
const images = [cyber1, cyber2, cyber4];

export default function HomeCarousel() {

  const [imageIndex, setImageIndex] = useState(0)

  // temporarily disabling images state until api is fixed
  // const [images, setImages] = useState([]);

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '25%',
    beforeChange: (_: any, next: React.SetStateAction<number>) => setImageIndex(next)
  };

  return (
    <div style={{ width: '70%', margin: '0 auto', height: '50vh' }}> {/* Updated styles */}
      <Slider {...settings}>
        {images?.map((img, idx) => (
          <div key={idx} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <Image src={img} alt={`Slide ${idx + 1}`} width={500} height={500} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
