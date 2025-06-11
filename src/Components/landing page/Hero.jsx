import React, { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Sample images – replace these with your own imports
import img1 from '/public/c1.jpg';
import img2 from '/public/c2.jpg';
import img3 from '/public/c3.jpg';
import img4 from '/public/l1.jpg';
import img5 from '/public/l2.jpg';
import img6 from '/public/l3.jpg';




const images = [img1, img2, img3 , img4, img5, img6];


const Hero = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

      useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change speed here if needed
    return () => clearInterval(interval);
  }, []);
   
    return (
        <div className="relative mt-[92px] w-full h-[650px]  overflow-hidden  shadow-lg ">
      <img src={images[current]} alt={`Slide ${current}`} className="w-full h-full object-cover transition duration-1000 ease-in-out" />

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        <FaChevronLeft size={20} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${index === current ? 'bg-white' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};
export default Hero
