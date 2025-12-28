'use client';
import { useMediaQuery } from 'react-responsive';
import { MoveUpRight, ArrowRight } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  {
    id: 1,
    src: 'https://aeb.hxy.temporary.site/appearlsnew/wp-content/uploads/2025/06/Rectangle-191-1.png',
    alt: 'BRANDING & DESIGN',
    route: '/branding-design',
    description: 'Creating memorable brand identities that tell your unique story and connect with your audience',
    color: 'from-yellow-500 to-yellow-300'
  },
  {
    id: 2,
    src: 'https://aeb.hxy.temporary.site/appearlsnew/wp-content/uploads/2025/06/html-system-websites-concept.png',
    alt: 'WEBSITE DEVELOPMENT',
    route: '/web-development',
    description: 'Building responsive, high-performance websites that drive conversions and engagement',
    color: 'from-yellow-400 to-yellow-200'
  },
  {
    id: 3,
    src: 'https://aeb.hxy.temporary.site/appearlsnew/wp-content/uploads/2025/06/futuristic-conceptual-photo-startup-concepts-rocket-takeoff-released-from-mobile-phone-space-mission-moon-symbol-success.png',
    alt: 'SEO & DIGITAL MARKETING',
    route: '/seo-digital-marketing',
    description: 'Optimizing your online presence to reach the right audience at the right time',
    color: 'from-yellow-600 to-yellow-400'
  },
  {
    id: 4,
    src: 'https://aeb.hxy.temporary.site/appearlsnew/wp-content/uploads/2025/06/image.png',
    alt: 'RESOURCE OUTSOURCING',
    route: '/resource-outsourcing',
    description: 'Providing expert talent and resources to scale your business efficiently',
    color: 'from-yellow-300 to-yellow-100'
  },
  {
    id: 5,
    src: 'https://aeb.hxy.temporary.site/appearlsnew/wp-content/uploads/2025/06/computer-programming-often-shortened-programming-is-process-original-formulation-computing-problem-executable-computer-programs-such-as-analysis-developing-algorithms-verificatio.png',
    alt: 'DEVOPS',
    route: '/devops',
    description: 'Streamlining development and operations for continuous delivery and reliability',
    color: 'from-yellow-500 to-yellow-200'
  },
];

const ServicesSection = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  // eslint-disable-next-line no-unused-vars
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const [activeImage, setActiveImage] = useState(null);
  const [opacity, setOpacity] = useState(0);
  const [scale, setScale] = useState(0.5);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const timeoutRef = useRef(null);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  // Handle mouse movement for desktop image positioning
  const handleMouseMove = useCallback((e) => {
    if (isDesktop && activeImage && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      setPosition({
        x: e.clientX - containerRect.left,
        y: e.clientY - containerRect.top
      });
    }
  }, [isDesktop, activeImage]);

  const handleImageHover = useCallback(
    (image) => {
      if (activeImage?.id !== image.id) {
        setActiveImage(image);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setOpacity(1);
          setScale(1);
        }, 100);
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

  const hoverVariants = {
    hover: {
      x: 10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -5 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative overflow-hidden py-20 md:py-32 min-h-screen flex items-center">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-yellow-500/10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(255,215,0,0.1) 0%, transparent 70%)`,
              width: `${100 + i * 80}px`,
              height: `${100 + i * 80}px`,
              left: `${(i * 25) % 100}%`,
              top: `${(i * 20) % 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-yellow-500/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
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
              SERVICES
            </motion.span>
          </h1>
          <motion.p
            className="text-lg md:text-xl text-yellow-300/80 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Comprehensive solutions to transform your digital presence and drive business growth
          </motion.p>
        </motion.div>

        <div 
          ref={containerRef}
          className="relative"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Services List */}
          <motion.div
            className="relative bg-gradient-to-br from-black/40 via-black/60 to-black/40 backdrop-blur-xl rounded-2xl border border-yellow-500/20 shadow-2xl overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                className={`relative cursor-pointer group ${
                  index !== images.length - 1 ? 'border-b border-yellow-500/10' : ''
                }`}
                onMouseEnter={() => handleImageHover(image)}
                onClick={() => navigate(image.route)}
                whileHover="hover"
              >
                <div className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-yellow-500/5 group-hover:via-black/40 group-hover:to-transparent">
                  {/* Mobile Image */}
                  {!isDesktop && (
                    <motion.div
                      className="w-full h-48 rounded-lg overflow-hidden mb-4"
                      variants={imageVariants}
                    >
                      <img
                        src={image.src}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        alt={image.alt}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </motion.div>
                  )}

                  {/* Service Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <motion.div
                        className={`w-3 h-3 rounded-full bg-gradient-to-r ${image.color}`}
                        animate={activeImage?.id === image.id ? {
                          scale: [1, 1.5, 1],
                          boxShadow: ["0 0 0px rgba(255,215,0,0)", "0 0 15px rgba(255,215,0,0.8)", "0 0 0px rgba(255,215,0,0)"]
                        } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <motion.h2
                        className={`text-xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight ${
                          activeImage?.id === image.id
                            ? 'text-yellow-400'
                            : 'text-yellow-300'
                        } transition-colors duration-300`}
                      >
                        {image.alt}
                      </motion.h2>
                    </div>
                    
                    <motion.p
                      className="text-yellow-300/70 text-sm md:text-base max-w-2xl mt-2"
                      initial={{ opacity: 0.8 }}
                      animate={activeImage?.id === image.id ? { opacity: 1 } : { opacity: 0.8 }}
                    >
                      {image.description}
                    </motion.p>
                  </div>

                  {/* Action Button */}
                  <motion.div
                    variants={hoverVariants}
                    className="relative"
                  >
                    <motion.button
                      className={`p-3 md:p-4 rounded-full transition-all duration-300 ${
                        activeImage?.id === image.id
                          ? 'bg-gradient-to-r from-yellow-500 to-yellow-300 text-black'
                          : 'bg-black/50 text-yellow-400 border border-yellow-500/30'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MoveUpRight className="w-5 h-5 md:w-6 md:h-6" />
                    </motion.button>
                    
                    {/* Animated circle on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-full border border-yellow-400/50"
                      initial={{ scale: 1, opacity: 0 }}
                      animate={activeImage?.id === image.id ? {
                        scale: 1.5,
                        opacity: [0, 0.5, 0],
                      } : {}}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </motion.div>

                  {/* Active Indicator Line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${image.color} rounded-full ${
                      activeImage?.id === image.id ? 'w-full' : 'w-0'
                    } transition-all duration-500`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Desktop Preview Image */}
          <AnimatePresence>
            {isDesktop && activeImage && (
              <motion.div
                key={activeImage.id}
                className="fixed pointer-events-none z-50"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ 
                  opacity: opacity,
                  scale: scale,
                  x: position.x + 40,
                  y: position.y - 200
                }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
                style={{
                  left: 0,
                  top: 0,
                }}
              >
                <div className="relative">
                  <motion.img
                    src={activeImage.src}
                    alt={activeImage.alt}
                    className="w-80 h-96 md:w-96 md:h-[500px] rounded-xl object-cover shadow-2xl border-2 border-yellow-500/30"
                    initial={{ rotate: -5 }}
                    animate={{ rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-xl" />
                  
                  {/* Image content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <motion.div
                      className="bg-black/50 backdrop-blur-sm rounded-lg p-4 border border-yellow-500/20"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-yellow-300 font-bold text-lg mb-2">
                        {activeImage.alt}
                      </h3>
                      <p className="text-yellow-300/80 text-sm mb-3">
                        {activeImage.description}
                      </p>
                      <button
                        onClick={() => navigate(activeImage.route)}
                        className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 text-sm font-semibold transition-colors"
                      >
                        Learn more
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </motion.div>
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/20 to-yellow-300/10 blur-xl rounded-2xl -z-10" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-black/40 to-black/20 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20">
            <div className="text-left">
              <h3 className="text-xl font-bold text-yellow-300 mb-2">
                Ready to transform your business?
              </h3>
              <p className="text-yellow-300/70">
                Let's discuss how our services can help you achieve your goals
              </p>
            </div>
            <motion.button
              onClick={() => navigate('/contact')}
              className="px-8 py-3 rounded-full font-bold text-lg bg-gradient-to-r from-yellow-500 to-yellow-300 text-black hover:shadow-lg hover:shadow-yellow-500/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesSection;