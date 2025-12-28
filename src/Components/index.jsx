import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useAnimationFrame } from 'framer-motion';

const InfiniteMarquee = () => {
  const marqueeItems = [
    "Web Design",
    "UI/UX",
    "Branding",
    "Development",
    "Animation",
    "Marketing",
    "Strategy",
    "Consulting"
  ];

  // Duplicate items for seamless looping
  const duplicatedItems = [...marqueeItems, ...marqueeItems];
  
  const x = React.useRef(0);
  const marqueeRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const speed = 0.8; // Adjust speed here
  
  useAnimationFrame(() => {
    if (marqueeRef.current && containerRef.current) {
      x.current -= speed;
      const singleWidth = marqueeRef.current.scrollWidth / 2;
      
      // Reset position when scrolled halfway
      if (x.current <= -singleWidth) {
        x.current = 0;
      }
      
      marqueeRef.current.style.transform = `translateX(${x.current}px)`;
    }
  });

  // Animation variants
  const itemVariants = {
    hover: {
      scale: 1.15,
      color: "#FFD700",
      textShadow: "0 0 30px rgba(255, 215, 0, 0.5)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const dotVariants = {
    hover: {
      scale: 1.5,
      backgroundColor: "#FFD700",
      boxShadow: "0 0 20px rgba(255, 215, 0, 0.8)",
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15
      }
    }
  };

  return (
    <div className="relative overflow-hidden py-16 md:py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-yellow-500/5" />
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-yellow-500"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 100, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-32">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-black via-yellow-500/10 to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-32">
        <motion.div
          className="absolute inset-0 bg-gradient-to-l from-black via-yellow-500/10 to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
      </div>

      {/* Title */}
      <div className="relative text-center mb-10 md:mb-12 px-4">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-black mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">
            Our Expertise
          </span>
        </motion.h2>
        <motion.p
          className="text-lg text-yellow-300/80 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Scroll through our comprehensive suite of services
        </motion.p>
      </div>

      {/* Marquee Container */}
      <div ref={containerRef} className="relative h-40 md:h-48 flex items-center">
        {/* Gradient Fades with glow */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-48 z-20">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <motion.div
            className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-yellow-500/30 to-transparent"
            animate={{
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="absolute inset-y-0 right-0 w-32 md:w-48 z-20">
          <div className="absolute inset-0 bg-gradient-to-l from-black via-black/80 to-transparent" />
          <motion.div
            className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-yellow-500/30 to-transparent"
            animate={{
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
        
        {/* Moving Marquee */}
        <div className="relative w-full overflow-hidden">
          <motion.div 
            ref={marqueeRef}
            className="flex whitespace-nowrap"
          >
            {duplicatedItems.map((item, i) => (
              <motion.div
                key={i}
                className="inline-flex items-center mx-8 md:mx-12 cursor-pointer group"
                variants={itemVariants}
                whileHover="hover"
                initial={false}
              >
                {/* Decorative line */}
                <motion.div
                  className="w-0.5 h-8 mr-6"
                  style={{ 
                    background: "linear-gradient(to bottom, transparent, #FFD700, transparent)" 
                  }}
                  variants={{
                    hover: {
                      height: 12,
                      opacity: 1,
                      transition: { duration: 0.3 }
                    }
                  }}
                />
                
                {/* Main text */}
                <motion.span
                  className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight"
                  style={{
                    background: "linear-gradient(90deg, #FFFFFF, #FFD700)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}
                >
                  {item}
                </motion.span>
                
                {/* Animated dot */}
                <motion.div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full ml-8 md:ml-10"
                  style={{ 
                    backgroundColor: "#FFD700",
                    boxShadow: "0 0 10px rgba(255, 215, 0, 0.5)"
                  }}
                  variants={dotVariants}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Speed indicator */}
      <div className="relative text-center mt-8 px-4">
        <motion.div
          className="inline-flex items-center gap-3 bg-black/30 backdrop-blur-sm border border-yellow-500/20 rounded-full px-6 py-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <motion.div
              className="w-3 h-3 rounded-full bg-yellow-500"
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <span className="text-yellow-300/90 text-sm font-medium">
              Scroll Speed: {speed}x
            </span>
          </div>
        </motion.div>
      </div>

      {/* Interactive hint */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-yellow-400/60 text-sm"
        animate={{ 
          opacity: [0.3, 0.7, 0.3],
          y: [0, -5, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        ← Hover to interact →
      </motion.div>
    </div>
  );
};

export default InfiniteMarquee;