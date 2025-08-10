import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const VisionMissionSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "OUR VISION",
      content: "Our vision is to be the trusted technology partner for small to mid-sized enterprises seeking next generation IT support, infrastructure services, and digital transformation. In addition, we aspire to transform how businesses utilize information technology, ensuring seamless integration and strategic alignment.",
      image: "/vission.jpeg" // Replace with your image path
    },
    {
      title: "OUR MISSION", 
      content: "Our mission is to empower businesses, industries, and individuals by delivering tailored managed IT services, robust cloud services, proactive cybersecurity solutions, and cutting edge software development all under one trusted roof. Furthermore, we leverage data analytics and cloud migration expertise to drive growth.",
      image: "/mission.png" // Replace with your image path
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="bg-[#d5fff7] text-[#23194f] py-16 md:py-24 relative overflow-hidden">
      <div className=" mx-auto px-4 shadow-blue-200 rounded-md ">
        <h1 className="text-3xl md:text-5xl font-bold mb-12 text-center text-[#23194f]">
          OUR <span className='text-sky-700'>PHILOSOPHY</span>
        </h1>

        <div className="relative max-w-5xl mx-auto">
          {/* Slider Content */}
          <div className="flex   transition-transform duration-500">
            {slides.map((slide, index) => (
              <div 
                key={index}
                className={`flex flex-col text-[#23194f]  md:flex-row w-full flex-shrink-0 px-4 ${currentSlide === index ? 'block' : 'hidden'}`}
              >
                {/* Image Section */}
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    className="w-full h-64 md:h-96 object-cover rounded-lg  text-[#23194f]"
                  />
                </div>

                {/* Text Section */}
                <div className="md:w-1/2">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#23194f]">
                    {slide.title}
                  </h2>
                  <p className="text-lg leading-relaxed">
                    {slide.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 md:-ml-4 bg-[#23194f] text-white p-2 rounded-full hover:bg-[#23194f] transition-all"
          >
            <FiChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 md:-mr-4 bg-[#23194f] text-white p-2 rounded-full hover:bg-[#23194f]transition-all"
          >
            <FiChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index ? 'bg-[#23194f] w-6' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionSlider;