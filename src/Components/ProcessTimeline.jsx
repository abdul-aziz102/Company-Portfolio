import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiCheck, FiArrowRight } from 'react-icons/fi';

const ProcessTimeline = () => {
  const processSteps = [
    {
      id: 1,
      title: "Discovery",
      description: "We start by understanding your business goals, target audience, and project requirements through detailed consultations.",
      icon: "🔍",
      color: "from-yellow-400 to-yellow-300"
    },
    {
      id: 2,
      title: "Planning",
      description: "Our team creates a comprehensive project plan with milestones, deliverables, and timelines tailored to your needs.",
      icon: "📝",
      color: "from-yellow-500 to-yellow-400"
    },
    {
      id: 3,
      title: "Design",
      description: "We craft intuitive user interfaces and experiences that align with your brand and engage your audience.",
      icon: "🎨",
      color: "from-yellow-600 to-yellow-500"
    },
    {
      id: 4,
      title: "Development",
      description: "Our developers build robust, scalable solutions using the latest technologies and best practices.",
      icon: "💻",
      color: "from-yellow-700 to-yellow-600"
    },
    {
      id: 5,
      title: "Testing",
      description: "We rigorously test all components to ensure quality, performance, and security before launch.",
      icon: "🧪",
      color: "from-yellow-800 to-yellow-700"
    },
    {
      id: 6,
      title: "Launch & Support",
      description: "We deploy your solution and provide ongoing support to ensure continued success and growth.",
      icon: "🚀",
      color: "from-yellow-900 to-yellow-800"
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
              width: `${150 + i * 50}px`,
              height: `${150 + i * 50}px`,
              left: `${(i * 15) % 100}%`,
              top: `${(i * 20) % 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10 + i * 2,
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
              PROCESS
            </motion.span>
          </h2>
          <motion.p
            className="text-lg md:text-xl text-yellow-300/80 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            A structured, transparent approach to delivering exceptional results
          </motion.p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Main Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 hidden md:block">
            <motion.div
              className="w-full h-full bg-gradient-to-b from-yellow-500 via-yellow-400 to-yellow-500"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            
            {/* Animated progress indicator */}
            <motion.div
              className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full"
              animate={{
                y: [0, "calc(100% - 8px)", 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          {/* Process Steps */}
          <motion.div
            className="space-y-24 md:space-y-32"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {processSteps.map((step, index) => (
              <ProcessStep 
                key={step.id} 
                step={step} 
                index={index} 
                totalSteps={processSteps.length} 
              />
            ))}
          </motion.div>

          {/* Completion Indicator */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-yellow-500/10 via-black/50 to-yellow-500/10 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-300 flex items-center justify-center">
                  <FiCheck className="w-6 h-6 text-black" />
                </div>
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-yellow-400"
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
                  Project Success Rate: 100%
                </h3>
                <p className="text-yellow-300/70">
                  Every project completed with excellence and client satisfaction
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProcessStep = ({ step, index, totalSteps }) => {
  const isEven = index % 2 === 0;
  
  const stepVariants = {
    hidden: { 
      opacity: 0, 
      x: isEven ? 100 : -100,
      scale: 0.8 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    hover: {
      y: -8,
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
      variants={stepVariants}
      className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Desktop Circle */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-20">
        <motion.div
          className={`w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r ${step.color} shadow-2xl`}
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-2xl">{step.icon}</span>
          <motion.div
            className="absolute -inset-2 rounded-full border-2 border-yellow-500/30"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [1, 0, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.2
            }}
          />
        </motion.div>
        
        {/* Step Number */}
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-black border border-yellow-500 flex items-center justify-center">
          <span className="text-yellow-400 font-bold text-sm">{step.id}</span>
        </div>
      </div>
      
      {/* Mobile Circle */}
      <div className="md:hidden mb-6">
        <motion.div
          className={`w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-r ${step.color} shadow-lg relative`}
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-2xl">{step.icon}</span>
          <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-black border border-yellow-500 flex items-center justify-center">
            <span className="text-yellow-400 font-bold text-xs">{step.id}</span>
          </div>
        </motion.div>
      </div>
      
      {/* Content Card */}
      <motion.div 
        className={`relative md:w-5/12 ${isEven ? 'md:mr-12' : 'md:ml-12'}`}
        variants={contentVariants}
        whileHover="hover"
      >
        <div className={`bg-gradient-to-br ${step.color}/10 via-black/50 ${step.color}/20 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20 overflow-hidden`}>
          {/* Animated background glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-transparent"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              delay: index * 0.5
            }}
          />
          
          {/* Content */}
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center`}>
                <span className="text-2xl">{step.icon}</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-yellow-300">{step.title}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <div className="text-sm text-yellow-400/80 font-medium">
                    Step {step.id} of {totalSteps}
                  </div>
                  {index < totalSteps - 1 && (
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FiArrowRight className="w-4 h-4 text-yellow-400" />
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
            
            <p className="text-yellow-200/80 leading-relaxed">
              {step.description}
            </p>
            
            {/* Progress indicator for last step */}
            {index === totalSteps - 1 && (
              <div className="mt-8">
                <div className="w-full bg-black/30 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${step.color} rounded-full`}
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  />
                </div>
                <div className="flex justify-between mt-3">
                  <span className="text-yellow-400/70 text-sm">Project Start</span>
                  <motion.span
                    className="text-yellow-300 font-semibold"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🎉 Project Completed!
                  </motion.span>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Connector Line (Mobile) */}
        {index < totalSteps - 1 && (
          <div className="md:hidden flex justify-center mt-6">
            <div className="w-1 h-8 bg-gradient-to-b from-yellow-500 to-yellow-300 rounded-full">
              <motion.div
                className="w-full h-2 bg-yellow-400 rounded-full"
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProcessTimeline;