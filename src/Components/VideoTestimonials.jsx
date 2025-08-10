import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VideoTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      quote: "Their team delivered exceptional results that exceeded our expectations.",
      video: "testimonial1.mp4",
      image: "client1.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "InnovateCo",
      quote: "The quality of work and attention to detail was outstanding.",
      video: "testimonial2.mp4",
      image: "client2.jpg"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      company: "BrandWorks",
      quote: "We saw measurable results within weeks of launching our new site.",
      video: "testimonial3.mp4",
      image: "client3.jpg"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const nextTestimonial = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setIsPlaying(false);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setIsPlaying(false);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: (direction) => ({
      x: direction > 0 ? -500 : 500,
      opacity: 0,
      transition: { duration: 0.5 }
    })
  };

  return (
    <section className="relative py-16 px-6 bg-[#23194f] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          CLIENT <span className="text-[#d5fff7]">SUCCESS</span>
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-12 text-gray-300">
          Hear what our clients say about working with us
        </p>

        <div className="relative h-[600px] rounded-xl overflow-hidden">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={testimonials[activeIndex].id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
            >
              {/* Video Background */}
              <div className="absolute inset-0">
                <video
                  src={testimonials[activeIndex].video}
                  className="w-full h-full object-cover brightness-50"
                  poster={testimonials[activeIndex].image}
                  muted
                  loop
                  autoPlay={isPlaying}
                />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end">
                <div className="p-8 md:p-12 w-full">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="max-w-3xl mx-auto text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold mb-6">
                      "{testimonials[activeIndex].quote}"
                    </div>
                    <div className="text-xl font-semibold">{testimonials[activeIndex].name}</div>
                    <div className="text-[#d5fff7]">{testimonials[activeIndex].company}</div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
            <button
              onClick={prevTestimonial}
              className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 transition"
            >
              {isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </button>
            
            <button
              onClick={nextTestimonial}
              className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;