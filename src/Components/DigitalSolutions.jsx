import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FiArrowRight, FiCode, FiLayers, FiEye } from 'react-icons/fi';

const DigitalSolutions = () => {
  const features = [
    {
      icon: FiCode,
      title: "Custom Development",
      description: "Tailored software solutions built specifically for your needs"
    },
    {
      icon: FiLayers,
      title: "Managed IT",
      description: "Comprehensive IT services for seamless operations"
    },
    {
      icon: FiEye,
      title: "UI/UX Design",
      description: "Intuitive interfaces that engage and convert users"
    }
  ];

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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0, rotate: -5 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const hoverEffect = {
    hover: {
      y: -8,
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
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-yellow-500/10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(255,215,0,0.05) 0%, transparent 70%)`,
              width: `${150 + i * 60}px`,
              height: `${150 + i * 60}px`,
              left: `${(i * 20) % 100}%`,
              top: `${(i * 15) % 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Image */}
          <motion.div
            className="lg:w-1/2 w-full"
            variants={itemVariants}
          >
            <motion.div
              className="relative group"
              variants={imageVariants}
              whileHover={hoverEffect.hover}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/digit.png"
                  alt="Team working on digital solutions"
                  className="w-full h-[500px] object-cover"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Floating Badge */}
                <motion.div
                  className="absolute top-6 left-6 bg-gradient-to-r from-yellow-500 to-yellow-300 text-black px-4 py-2 rounded-full font-bold text-sm"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Innovation Hub
                </motion.div>
              </div>
              
              {/* Decorative Border */}
              <div className="absolute -inset-4 rounded-3xl border-2 border-yellow-500/20 pointer-events-none" />
              
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/10 to-yellow-300/5 blur-xl rounded-3xl -z-10" />
            </motion.div>

            {/* Feature Dots */}
            <div className="flex justify-center gap-4 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-300" />
                  <span className="text-yellow-300/80 text-sm">{feature.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="lg:w-1/2 w-full space-y-8"
            variants={containerVariants}
          >
            {/* Title */}
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-200">
                  Building Digital
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
                  Solutions That Inspire
                </motion.span>
                <span className="block mt-2 text-white">
                  & Perform
                </span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants}>
              <p className="text-lg md:text-xl leading-relaxed text-yellow-200/90">
                We deliver <strong className="text-yellow-300">high-impact digital transformation services</strong>, blending{" "}
                <strong className="text-yellow-300">custom software development</strong>,{" "}
                <strong className="text-yellow-300">managed IT services</strong>, and intuitive{" "}
                <strong className="text-yellow-300">UI/UX design</strong> to help your business thrive.
                <br />
                <br />
                Our expert team combines strategic insight and cutting-edge tools to create
                end-to-end solutions—so that your vision seamlessly becomes reality.
                We craft digital experiences that don't just look impressive,
                but also drive measurable growth and long-term success.
              </p>
            </motion.div>

            {/* Feature Cards */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
              variants={containerVariants}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-black/30 via-black/50 to-black/30 backdrop-blur-sm rounded-xl p-4 border border-yellow-500/20"
                  whileHover={{ 
                    y: -5,
                    borderColor: "rgba(255, 215, 0, 0.4)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-300 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-black" />
                    </div>
                    <h3 className="font-bold text-yellow-300">{feature.title}</h3>
                  </div>
                  <p className="text-yellow-300/70 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.button
                className="group relative overflow-hidden px-8 py-4 rounded-full font-bold text-lg tracking-wide"
                style={{
                  background: "linear-gradient(135deg, #FFD700, #ffed4a)",
                  color: "#0a0a0a",
                }}
                whileHover={{ 
                  boxShadow: "0 15px 35px rgba(255, 215, 0, 0.4)"
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  LET'S CONNECT & CREATE
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FiArrowRight className="w-5 h-5" />
                  </motion.span>
                </span>
                
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
              
              {/* Trust Indicator */}
              <div className="flex items-center gap-3 mt-6">
                <div className="flex items-center">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-300 border-2 border-black flex items-center justify-center -ml-2 first:ml-0"
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    >
                      <span className="text-xs font-bold text-black">✓</span>
                    </motion.div>
                  ))}
                </div>
                <div className="text-sm text-yellow-300/80">
                  <span className="font-semibold">Trusted by</span> 150+ clients worldwide
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalSolutions;