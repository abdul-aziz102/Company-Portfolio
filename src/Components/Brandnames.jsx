import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Brandnames = () => {
  const brands = [
    "image-8.png",
    "image-9.png", 
    "image-10.png",
    "image-11.png",
    "image-12-1.png"
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === brands.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? brands.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-[#d5fff7] text-[#23194f] w-full py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-[#23194f] text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12">
          Our <span className="text-sky-700">Trusted Brands</span>
        </h1>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-5 gap-8">
          {brands.map((brand, index) => (
            <div key={index} className="flex justify-center items-center">
              <img 
                src={brand} 
                alt={`Brand ${index + 1}`} 
                className="max-h-20 object-contain bg-[#23194f] brightness-95 hover:brightness-110 transition duration-300"
              />
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="flex items-center justify-center">
            {/* Left Arrow */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 z-10 p-2 text-white hover:text-yellow-400"
              aria-label="Previous brand"
            >
              <FiChevronLeft size={24} />
            </button>

            {/* Carousel Image */}
            <div className="w-full flex justify-center">
              <img
                src={brands[currentIndex]}
                alt={`Brand ${currentIndex + 1}`}
                className="max-h-20 object-contain mx-12"
              />
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-0 z-10 p-2 text-white hover:text-yellow-400"
              aria-label="Next brand"
            >
              <FiChevronRight size={24} />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {brands.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full ${
                  currentIndex === index ? 'bg-yellow-400' : 'bg-gray-500'
                }`}
                aria-label={`Go to brand ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brandnames;
