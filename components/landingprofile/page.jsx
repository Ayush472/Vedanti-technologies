"use client";
import React, { useState } from "react";
import Slider from "react-slick";
// import img from "../../assets/Images/industry.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LandingProfile.css"; // Import your CSS file for custom styling
import slide1 from "../../assets/Images/slide1.jpeg";
import slide2 from "../../assets/Images/slide2.jpeg";
import slide3 from "../../assets/Images/slide3.jpeg";
import Image from "next/image";
import 'animate.css';

const items = [
  {
    title: "Effective Electrical",
    description: " Solutions ",
    image: slide1,
    color: "#06826f",
  },
  {
    title: "Industrial Electrical &",
    description: "  Electronics Goods.  ",
    image: slide2,
    color: "#e84949",
  },
  {
    title: "Empowering",
    description: "You Safely ",
    image: slide3,
    color: "#b1bf35",
  },
];

const LandingProfile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="relative">
            <div className="text-5xl		font-bold	">
              <div
                className="absolute left-1/4 top-1/3 transition-opacity duration-500 ease-in-out animate__slideInLeft"
                style={{ color: item.color }}
              >
                <h1 className="animate__slideInLeft">{item.title}</h1>
                <h1 className="animate__slideInLeft">{item.description}</h1>
              </div>
              <div className="image-wrapper" style={{ height: "500px" }}>
                <Image
                  src={item.image}
                  alt={item.title}
                  height="auto"
                  objectFit="cover"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LandingProfile;
