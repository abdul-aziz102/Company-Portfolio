import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { FiCpu, FiCode, FiSmartphone, FiDatabase, FiCloud } from 'react-icons/fi';

const TechStackVisualization = () => {
  const technologies = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "Vue", "Angular", "Svelte", "TypeScript", "Tailwind CSS", "Framer Motion"],
      icon: FiCode,
      gradient: "from-yellow-400 to-yellow-300",
      description: "Modern frameworks and libraries for creating responsive, interactive user interfaces"
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "Ruby", "Java", "PHP", "Go", "Express", "FastAPI"],
      icon: FiCpu,
      gradient: "from-yellow-500 to-yellow-400",
      description: "Robust server-side technologies for building scalable applications"
    },
    {
      category: "Mobile",
      items: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic", "Xamarin", "Android", "iOS"],
      icon: FiSmartphone,
      gradient: "from-yellow-600 to-yellow-500",
      description: "Cross-platform and native solutions for mobile app development"
    },
    {
      category: "Database",
      items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis", "GraphQL", "Prisma", "Supabase"],
      icon: FiDatabase,
      gradient: "from-yellow-700 to-yellow-600",
      description: "Modern databases and data management solutions"
    },
    {
      category: "DevOps & Cloud",
      items: ["Docker", "Kubernetes", "AWS", "Azure", "GCP", "Git", "CI/CD", "Terraform"],
      icon: FiCloud,
      gradient: "from-yellow-800 to-yellow-700",
      description: "Cloud infrastructure and deployment automation tools"
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState(technologies[0]);
  const [hoveredTech, setHoveredTech] = useState(null);
  const [isRotating, setIsRotating] = useState(true);
  const [rotation, setRotation] = useState(0);

  // Auto-rotate visualization
  useEffect(() => {
    if (!isRotating) return;
    
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.5) % 360);
    }, 50);
    
    return () => clearInterval(interval);
  }, [isRotating]);

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

  const techVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (index) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }),
    hover: {
      scale: 1.4,
      y: -10,
      boxShadow: "0 10px 30px rgba(255, 215, 0, 0.5)",
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
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(255,215,0,0.05) 0%, transparent 70%)`,
              width: `${100 + i * 80}px`,
              height: `${100 + i * 80}px`,
              left: `${(i * 10) % 100}%`,
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
              TECH STACK
            </motion.span>
          </h2>
          <motion.p
            className="text-lg md:text-xl text-yellow-300/80 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Cutting-edge technologies powering innovative solutions for your business
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Category Selector */}
          <motion.div
            className="lg:col-span-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-3">
              {technologies.map((tech) => (
                <motion.button
                  key={tech.category}
                  variants={itemVariants}
                  onClick={() => setSelectedCategory(tech)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                    selectedCategory.category === tech.category
                      ? `bg-gradient-to-r ${tech.gradient} text-black shadow-xl`
                      : 'bg-black/30 backdrop-blur-sm text-yellow-300/80 hover:text-yellow-300 hover:bg-black/50'
                  } border border-yellow-500/20`}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <tech.icon className="w-5 h-5" />
                  <span className="font-semibold">{tech.category}</span>
                  <span className="ml-auto text-sm opacity-70">
                    {tech.items.length}
                  </span>
                </motion.button>
              ))}
              
              {/* Controls */}
              <motion.div
                className="mt-6 p-4 bg-black/30 backdrop-blur-sm rounded-xl border border-yellow-500/20"
                variants={itemVariants}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-yellow-300 text-sm">Visualization</span>
                  <button
                    onClick={() => setIsRotating(!isRotating)}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      isRotating 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-red-500/20 text-red-400 border border-red-500/30'
                    }`}
                  >
                    {isRotating ? 'Rotating' : 'Paused'}
                  </button>
                </div>
                <div className="text-yellow-300/70 text-sm">
                  <p>Hover over technologies to see details</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Tech Visualization */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-br from-black/40 via-black/60 to-black/40 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-yellow-500/20 shadow-2xl h-full">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${selectedCategory.gradient} flex items-center justify-center`}>
                      <selectedCategory.icon className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-yellow-300">
                      {selectedCategory.category}
                    </h3>
                  </div>
                  <p className="text-yellow-300/70 max-w-xl">
                    {selectedCategory.description}
                  </p>
                </div>
              </div>

              {/* Visualization Area */}
              <div className="relative h-96">
                {/* Orbit visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Orbit rings */}
                  {[0, 1, 2].map((ring) => (
                    <motion.div
                      key={ring}
                      className="absolute rounded-full border border-yellow-500/10"
                      style={{
                        width: `${180 + ring * 80}px`,
                        height: `${180 + ring * 80}px`,
                      }}
                      animate={{
                        rotate: isRotating ? rotation : 0,
                      }}
                      transition={{
                        duration: 0,
                        ease: "linear"
                      }}
                    />
                  ))}

                  {/* Technologies orbiting */}
                  {selectedCategory.items.map((tech, index) => {
                    const angle = (index * 360) / selectedCategory.items.length + rotation;
                    const radius = 160;
                    const x = radius * Math.cos((angle * Math.PI) / 180);
                    const y = radius * Math.sin((angle * Math.PI) / 180);
                    
                    return (
                      <motion.div
                        key={tech}
                        custom={index}
                        variants={techVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        onHoverStart={() => setHoveredTech(tech)}
                        onHoverEnd={() => setHoveredTech(null)}
                        className={`absolute cursor-pointer flex items-center justify-center shadow-xl`}
                        style={{
                          x: x,
                          y: y,
                          zIndex: hoveredTech === tech ? 20 : 1,
                        }}
                      >
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${selectedCategory.gradient} flex items-center justify-center text-black font-bold relative group`}>
                          <span className="text-lg">{tech.substring(0, 2)}</span>
                          
                          {/* Tooltip */}
                          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            <div className="bg-black/80 backdrop-blur-sm text-yellow-300 px-3 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap">
                              {tech}
                            </div>
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-black/80" />
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}

                  {/* Center Circle */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className={`w-32 h-32 rounded-full bg-gradient-to-r ${selectedCategory.gradient} bg-opacity-20 border-2 border-yellow-500/30 flex items-center justify-center relative`}
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <AnimatePresence mode="wait">
                        {hoveredTech ? (
                          <motion.div
                            key="hovered"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="text-center"
                          >
                            <div className="text-lg font-bold text-yellow-300">{hoveredTech}</div>
                            <div className="text-yellow-300/70 text-sm mt-1">Technology</div>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="default"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center"
                          >
                            <div className="text-xl font-bold text-yellow-300">
                              {selectedCategory.category}
                            </div>
                            <div className="text-yellow-300/70 text-sm mt-1">
                              {selectedCategory.items.length} technologies
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      
                      {/* Animated rings */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-yellow-400/30"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [1, 0.5, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Tech List */}
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-yellow-300">
                    All {selectedCategory.category} Technologies
                  </h4>
                  <span className="text-yellow-300/70 text-sm">
                    {selectedCategory.items.length} total
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedCategory.items.map((tech) => (
                    <motion.span
                      key={tech}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        hoveredTech === tech
                          ? `bg-gradient-to-r ${selectedCategory.gradient} text-black shadow-lg`
                          : 'bg-black/50 text-yellow-300 border border-yellow-500/20 hover:border-yellow-500/40'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onHoverStart={() => setHoveredTech(tech)}
                      onHoverEnd={() => setHoveredTech(null)}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStackVisualization;