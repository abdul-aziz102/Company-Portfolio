import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import { FiUsers, FiCheckCircle, FiAward, FiClock } from 'react-icons/fi';
import { TbTargetArrow } from 'react-icons/tb';

const StatsCounter = () => {
  const stats = [
    { 
      value: 150, 
      suffix: '+', 
      label: 'Projects Completed',
      icon: FiCheckCircle,
      description: 'Successfully delivered projects',
      gradient: 'from-yellow-400 to-yellow-300',
      delay: 0
    },
    { 
      value: 95, 
      suffix: '%', 
      label: 'Client Satisfaction',
      icon: FiAward,
      description: 'Happy clients worldwide',
      gradient: 'from-yellow-500 to-yellow-400',
      delay: 0.2
    },
    { 
      value: 50, 
      suffix: '+', 
      label: 'Expert Team Members',
      icon: FiUsers,
      description: 'Dedicated professionals',
      gradient: 'from-yellow-600 to-yellow-500',
      delay: 0.4
    },
    { 
      value: 10, 
      suffix: '+', 
      label: 'Years Experience',
      icon: FiClock,
      description: 'Industry experience',
      gradient: 'from-yellow-700 to-yellow-600',
      delay: 0.6
    }
  ];

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [allCounted, setAllCounted] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      setTimeout(() => setAllCounted(true), 3000);
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-yellow-500/10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: '2px',
              height: '2px',
              background: `rgba(255, 215, 0, ${0.2 + Math.random() * 0.3})`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear"
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
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
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
              ACHIEVEMENTS
            </motion.span>
          </h2>
          <motion.p
            className="text-lg md:text-xl text-yellow-300/80 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Numbers that speak for our commitment to excellence and client success
          </motion.p>
        </motion.div>

        <div ref={ref} className="relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {stats.map((stat, index) => (
              <StatItem 
                key={index} 
                stat={stat} 
                index={index}
              />
            ))}
          </motion.div>

          {/* Completion Celebration */}
          <AnimatePresence>
            {allCounted && (
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [0, 3, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: Math.random() * 0.5,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Trust Badge */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-yellow-500/10 via-black/50 to-yellow-500/10 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20">
            <div className="relative">
              <TbTargetArrow className="w-8 h-8 text-yellow-400" />
              <motion.div
                className="absolute -inset-2 rounded-full border border-yellow-400/30"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold text-yellow-300">
                Trusted by Industry Leaders
              </h3>
              <p className="text-yellow-300/70">
                Consistently delivering excellence since 2014
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const StatItem = ({ stat, index }) => {
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.8 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: stat.delay,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -10,
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(255, 215, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover="hover"
      variants={hoverVariants}
      className="relative group"
    >
      <div className={`relative bg-gradient-to-br ${stat.gradient}/10 via-black/50 ${stat.gradient}/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-yellow-500/20 h-full overflow-hidden`}>
        
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            delay: index * 0.5
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${stat.gradient} flex items-center justify-center`}>
                <stat.icon className="w-8 h-8 text-black" />
              </div>
              <motion.div
                className="absolute -inset-2 rounded-full border-2 border-yellow-500/30"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              />
            </div>
          </div>

          {/* Counter */}
          <div className="text-center mb-4">
            <div className="text-5xl md:text-6xl font-black mb-2">
              <Counter 
                from={0} 
                to={stat.value} 
                suffix={stat.suffix}
                gradient={stat.gradient}
              />
            </div>
            <motion.div
              className="h-1 w-12 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ delay: stat.delay + 0.5, duration: 0.8 }}
            />
          </div>

          {/* Label and Description */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-yellow-300 mb-2">
              {stat.label}
            </h3>
            <p className="text-yellow-300/70 text-sm">
              {stat.description}
            </p>
          </div>

          {/* Animated border on hover */}
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-yellow-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"
            style={{
              background: `linear-gradient(45deg, transparent, rgba(255,215,0,0.2), transparent)`
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const Counter = ({ from, to, suffix, gradient }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          const duration = 2500; // ms
          const start = Date.now();
          const end = start + duration;
          
          const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);
          
          const step = () => {
            const now = Date.now();
            const progress = Math.min(1, (now - start) / duration);
            const easedProgress = easeOutQuart(progress);
            const currentCount = Math.floor(easedProgress * (to - from) + from);
            
            setCount(currentCount);
            
            if (now < end) {
              requestAnimationFrame(step);
            } else {
              setCount(to);
            }
          };
          
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.2, rootMargin: '-50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [from, to, hasStarted]);

  return (
    <motion.span
      ref={ref}
      className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500"
      animate={hasStarted ? {
        scale: [1, 1.1, 1],
        transition: {
          duration: 0.3,
          times: [0, 0.5, 1]
        }
      } : {}}
    >
      {count}{suffix}
    </motion.span>
  );
};

export default StatsCounter;