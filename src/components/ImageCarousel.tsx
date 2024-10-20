"use client";
import React, { useState, useEffect } from "react";

const ImageCarousel: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    { src: "/logobig.png", text: "Halo" },
    { src: "/logobig.png", text: "Witam" },
    { src: "/image3.png", text: "Cześć" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-16">
      <img
        src={images[currentImageIndex].src}
        alt={`Slide ${currentImageIndex + 1}`}
        className="w-full h-auto"
      />
      <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
        {images[currentImageIndex].text}
      </div>
    </div>
  );
};

export default ImageCarousel;
