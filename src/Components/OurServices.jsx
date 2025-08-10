'use client';
import { useMediaQuery } from 'react-responsive';
import { MoveUpRight } from 'lucide-react';
import React, { useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Add this

const images = [
  {
    id: 1,
    src: 'https://aeb.hxy.temporary.site/appearlsnew/wp-content/uploads/2025/06/Rectangle-191-1.png',
    alt: 'BRANDING & DESIGN',
    route: '/branding-design',
  },
  {
    id: 2,
    src: 'https://aeb.hxy.temporary.site/appearlsnew/wp-content/uploads/2025/06/html-system-websites-concept.png',
    alt: 'WEBSITE DEVELOPMENT',
    route: '/web-development',
  },
  {
    id: 3,
    src: 'https://aeb.hxy.temporary.site/appearlsnew/wp-content/uploads/2025/06/futuristic-conceptual-photo-startup-concepts-rocket-takeoff-released-from-mobile-phone-space-mission-moon-symbol-success.png',
    alt: 'SEO & DIGITAL MARKETING',
    route: '/seo-digital-marketing',
  },
  {
    id: 4,
    src: 'https://aeb.hxy.temporary.site/appearlsnew/wp-content/uploads/2025/06/image.png',
    alt: 'RESOURCE OUTSOURCING',
    route: '/resource-outsourcing',
  },
  {
    id: 5,
    src: 'https://aeb.hxy.temporary.site/appearlsnew/wp-content/uploads/2025/06/computer-programming-often-shortened-programming-is-process-original-formulation-computing-problem-executable-computer-programs-such-as-analysis-developing-algorithms-verificatio.png',
    alt: 'DEVOPS',
    route: '/devops',
  },
];

const VisionMissionSlider = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const [activeImage, setActiveImage] = useState(null);
  const [opacity, setOpacity] = useState(0);
  const [scale, setScale] = useState(0.5);
  const timeoutRef = useRef(null);

  const navigate = useNavigate(); // ✅ Hook for navigation

  const handleImageHover = useCallback(
    (image) => {
      if (activeImage !== image) {
        setActiveImage(image);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setOpacity(1);
          setScale(1);
        }, 50);
      } else {
        setOpacity(1);
        setScale(1);
      }
    },
    [activeImage]
  );

  const handleMouseLeave = useCallback(() => {
    setOpacity(0);
    setScale(0.5);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveImage(null);
    }, 300);
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center justify-center py-20 relative overflow-hidden bg-[#d5fff7] text-[#23194f]">
      <div className="absolute inset-0 z-1"></div>
      <div className="relative w-full max-w-4xl px-4 z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-[#23194f] mb-12 text-center tracking-tight">
          OUR <span className='text-sky-700'>SERVICES</span> 
        </h1>
        
        <div
          className="relative w-full min-h-fit bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 shadow-2xl"
          onMouseLeave={handleMouseLeave}
        >
          {images.map((image) => (
            <div
              key={image.id}
              className="p-6 cursor-pointer relative flex items-center text-[#23194f] justify-between group hover:bg-white/5 transition-colors duration-300"
              onMouseEnter={() => handleImageHover(image)}
              onClick={() => {
                handleImageHover(image);
                navigate(image.route); // ✅ Navigate on click
              }}
            >
              {!isDesktop && (
                <img
                  src={image.src}
                  className="w-32 h-20 object-cover rounded-md"
                  alt={image.alt}
                />
              )}
              <h2
                className={`hover:text-[#23194f] text-[#23194f] uppercase md:text-5xl sm:text-3xl text-xl font-semibold py-4 leading-[100%] relative transition-all duration-300 ${
                  activeImage?.id === image.id
                    ? 'mix-blend-difference z-20 text-[#23194f]'
                    : 'text-[#23194f]'
                }`}
              >
                {image.alt}
              </h2>
              <button
                className={`p-3 rounded-full transition-all duration-300 ease-out ${
                  activeImage?.id === image.id
                    ? 'mix-blend-difference z-20 bg-[#23194f] text-white'
                    : 'text-black group-hover:text-white'
                }`}
              >
                <MoveUpRight className="w-6 h-6" />
              </button>
              <div
                className={`h-[2px] bg-[#23194f] absolute bottom-0 left-0 transition-all duration-500 ease-out ${
                  activeImage?.id === image.id ? 'w-full' : 'w-0'
                }`}
              />
            </div>
          ))}

          {isDesktop && activeImage && (
            <div 
              className="fixed top-24 right-12 z-20 transition-all duration-300"
              style={{
                opacity: opacity,
                transform: `scale(${scale})`,
              }}
            >
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="w-[320px] h-[420px] rounded-xl object-cover border-2 border-white/30 shadow-2xl"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VisionMissionSlider;
