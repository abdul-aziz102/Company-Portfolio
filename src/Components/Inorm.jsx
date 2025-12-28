import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const VisionMissionSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      title: "OUR VISION",
      content: "Our vision is to be the trusted technology partner for small to mid-sized enterprises seeking next generation IT support, infrastructure services, and digital transformation. In addition, we aspire to transform how businesses utilize information technology, ensuring seamless integration and strategic alignment.",
      image: "/vission.jpeg",
      icon: "👁️",
      gradient: "from-yellow-500/20 via-black/50 to-yellow-500/10"
    },
    {
      title: "OUR MISSION", 
      content: "Our mission is to empower businesses, industries, and individuals by delivering tailored managed IT services, robust cloud services, proactive cybersecurity solutions, and cutting edge software development all under one trusted roof. Furthermore, we leverage data analytics and cloud migration expertise to drive growth.",
      image: "/mission.png",
      icon: "🎯",
      gradient: "from-yellow-500/10 via-black/50 to-yellow-500/20"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide, isAutoPlaying]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 }
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.2
      }
    })
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-yellow-500/10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(255,215,0,0.1) 0%, transparent 70%)`,
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              left: `${(i * 20) % 100}%`,
              top: `${(i * 15) % 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + i * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-200">
              OUR
            </span>
            <motion.span 
              className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-500"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(255,215,0,0.3)",
                  "0 0 40px rgba(255,215,0,0.5)",
                  "0 0 20px rgba(255,215,0,0.3)"
                ]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity 
              }}
            >
              PHILOSOPHY
            </motion.span>
          </h1>
          <motion.p
            className="text-lg md:text-xl text-yellow-300/80 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Guiding principles that shape our approach to technology and innovation
          </motion.p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-[600px] md:h-[500px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                <div className={`h-full bg-gradient-to-br ${slides[currentSlide].gradient} backdrop-blur-sm rounded-3xl overflow-hidden border border-yellow-500/20`}>
                  <div className="grid md:grid-cols-2 h-full">
                    {/* Image Section */}
                    <motion.div
                      className="relative overflow-hidden"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                      
                      <motion.img
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].title}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8 }}
                      />
                      
                      {/* Overlay content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                        <motion.div
                          className="inline-flex items-center gap-3 bg-black/50 backdrop-blur-sm rounded-full px-6 py-3 border border-yellow-500/30"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <span className="text-2xl">{slides[currentSlide].icon}</span>
                          <span className="text-yellow-300 font-semibold">
                            {slides[currentSlide].title.replace('OUR ', '')}
                          </span>
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Text Section */}
                    <motion.div
                      className="p-8 md:p-12 flex flex-col justify-center"
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <div className="mb-6">
                        <motion.div
                          className="inline-flex items-center gap-3 mb-4"
                          variants={itemVariants}
                        >
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-300 flex items-center justify-center">
                            <span className="text-2xl">{slides[currentSlide].icon}</span>
                          </div>
                          <motion.h2
                            className="text-3xl md:text-4xl font-black"
                            variants={itemVariants}
                            style={{
                              background: "linear-gradient(90deg, #FFFFFF, #FFD700)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              backgroundClip: "text"
                            }}
                          >
                            {slides[currentSlide].title}
                          </motion.h2>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                          <div className="h-1 w-16 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full mb-6" />
                        </motion.div>
                      </div>

                      <motion.p
                        className="text-lg md:text-xl leading-relaxed text-yellow-100/90 mb-8"
                        variants={itemVariants}
                      >
                        {slides[currentSlide].content}
                      </motion.p>

                      <motion.div
                        className="mt-auto"
                        variants={itemVariants}
                      >
                        <div className="flex items-center gap-4">
                          <div className="text-yellow-400 text-sm font-semibold">
                            Slide {currentSlide + 1} of {slides.length}
                          </div>
                          <button
                            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                            className="flex items-center gap-2 text-yellow-400/80 hover:text-yellow-400 text-sm transition-colors"
                          >
                            <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-500' : 'bg-red-500'}`} />
                            {isAutoPlaying ? 'Auto-playing' : 'Paused'}
                          </button>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-8 z-20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/50 backdrop-blur-sm border border-yellow-500/30 flex items-center justify-center group hover:bg-black/70 transition-all">
              <FiChevronLeft className="text-yellow-400 text-2xl group-hover:text-yellow-300 transition-colors" />
            </div>
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-8 z-20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/50 backdrop-blur-sm border border-yellow-500/30 flex items-center justify-center group hover:bg-black/70 transition-all">
              <FiChevronRight className="text-yellow-400 text-2xl group-hover:text-yellow-300 transition-colors" />
            </div>
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-10 space-x-3">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className="relative"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className={`w-3 h-3 rounded-full ${
                    currentSlide === index 
                      ? 'bg-yellow-400' 
                      : 'bg-yellow-400/30'
                  }`}
                  animate={currentSlide === index ? {
                    scale: [1, 1.3, 1],
                    boxShadow: [
                      "0 0 0px rgba(255,215,0,0)",
                      "0 0 10px rgba(255,215,0,0.8)",
                      "0 0 0px rgba(255,215,0,0)"
                    ]
                  } : {}}
                  transition={{ 
                    duration: 2,
                    repeat: currentSlide === index ? Infinity : 0
                  }}
                />
                {currentSlide === index && (
                  <motion.div
                    className="absolute inset-0 w-3 h-3 rounded-full border border-yellow-400"
                    initial={{ scale: 1.5, opacity: 1 }}
                    animate={{ scale: 2.5, opacity: 0 }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity 
                    }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Slide Titles */}
          <div className="flex justify-center mt-8 space-x-6">
            {slides.map((slide, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  currentSlide === index
                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-300 text-black'
                    : 'bg-black/30 text-yellow-400/70 hover:text-yellow-400'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {slide.title.replace('OUR ', '')}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionSlider;