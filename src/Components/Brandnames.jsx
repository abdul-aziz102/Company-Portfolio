import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const Brandnames = () => {
  const brands = [
    "image-8.png",
    "image-9.png", 
    "image-10.png",
    "image-11.png",
    "image-12-1.png"
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, isAutoPlaying]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === brands.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? brands.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
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
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    })
  };

  const hoverEffect = {
    hover: {
      scale: 1.08,
      y: -8,
      boxShadow: "0 20px 40px rgba(255, 215, 0, 0.3)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  return (
    <div className="relative overflow-hidden py-16 md:py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-yellow-500/5" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(255,215,0,0.1) 0%, transparent 70%)`,
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`,
            }}
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-200">
              Our Trusted
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
              Brands & Partners
            </motion.span>
          </h1>
          <motion.p
            className="text-lg md:text-xl text-yellow-300/80 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Collaborating with industry leaders to deliver exceptional results
          </motion.p>
        </motion.div>

        {/* Desktop Grid View */}
        <motion.div
          className="hidden md:block"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
                whileHover={hoverEffect.hover}
              >
                <div className="relative bg-gradient-to-br from-yellow-500/10 via-black/50 to-yellow-500/5 backdrop-blur-sm rounded-2xl p-1 border border-yellow-500/20">
                  <div className="relative bg-black/50 rounded-xl p-6 h-40 flex items-center justify-center">
                    <motion.img
                      src={brand}
                      alt={`Brand ${index + 1}`}
                      className="max-h-16 object-contain filter brightness-0 invert"
                      whileHover={{ 
                        scale: 1.1,
                        filter: "brightness(1) invert(0) drop-shadow(0 0 10px rgba(255,215,0,0.5))"
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 flex items-end justify-center pb-4">
                      <span className="text-yellow-400 font-semibold text-sm">
                        Brand Partner
                      </span>
                    </div>
                  </div>
                  
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, rgba(255,215,0,0.3) 0%, transparent 70%)`
                    }}
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative px-8">
            {/* Left Arrow */}
            <motion.button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-yellow-500/30 flex items-center justify-center"
              whileHover={{ 
                scale: 1.1,
                backgroundColor: "rgba(255,215,0,0.2)",
                borderColor: "rgba(255,215,0,0.8)"
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous brand"
            >
              <FiChevronLeft className="text-yellow-400 text-xl" />
            </motion.button>

            {/* Carousel Container */}
            <div className="overflow-hidden py-8">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-yellow-500/10 via-black/50 to-yellow-500/5 backdrop-blur-sm rounded-2xl p-1 border border-yellow-500/20">
                    <div className="relative bg-black/50 rounded-xl p-8 h-48 flex items-center justify-center">
                      <motion.img
                        src={brands[currentIndex]}
                        alt={`Brand ${currentIndex + 1}`}
                        className="max-h-20 object-contain filter brightness-0 invert"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    
                    {/* Current slide info */}
                    <div className="text-center mt-4">
                      <span className="text-yellow-400 font-semibold">
                        Partner {currentIndex + 1} of {brands.length}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Arrow */}
            <motion.button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-yellow-500/30 flex items-center justify-center"
              whileHover={{ 
                scale: 1.1,
                backgroundColor: "rgba(255,215,0,0.2)",
                borderColor: "rgba(255,215,0,0.8)"
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next brand"
            >
              <FiChevronRight className="text-yellow-400 text-xl" />
            </motion.button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {brands.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className="relative"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === index 
                      ? 'bg-yellow-400' 
                      : 'bg-yellow-400/30'
                  }`}
                  animate={currentIndex === index ? {
                    scale: [1, 1.3, 1],
                    boxShadow: [
                      "0 0 0px rgba(255,215,0,0)",
                      "0 0 10px rgba(255,215,0,0.8)",
                      "0 0 0px rgba(255,215,0,0)"
                    ]
                  } : {}}
                  transition={{ 
                    duration: 2,
                    repeat: currentIndex === index ? Infinity : 0
                  }}
                />
                {currentIndex === index && (
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

          {/* Auto-play toggle */}
          <div className="flex justify-center mt-6">
            <motion.button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center gap-2 text-yellow-400/80 hover:text-yellow-400 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`w-3 h-3 rounded-full ${isAutoPlaying ? 'bg-green-500' : 'bg-red-500'}`} />
              {isAutoPlaying ? 'Auto-playing' : 'Click to play'}
            </motion.button>
          </div>
        </div>

        {/* Trust Badge */}
        <motion.div
          className="text-center mt-16 md:mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-3 bg-black/30 backdrop-blur-sm border border-yellow-500/20 rounded-full px-6 py-3">
            <motion.div
              className="w-2 h-2 rounded-full bg-yellow-400"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-yellow-300/90 font-medium">
              Trusted by industry leaders since 2020
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Brandnames;