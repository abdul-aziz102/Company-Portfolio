import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TechStackVisualization = () => {
  const technologies = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "Vue", "Angular", "Svelte"],
      color: "bg-blue-500"
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "Ruby", "Java", "PHP"],
      color: "bg-green-500"
    },
    {
      category: "Mobile",
      items: ["React Native", "Flutter", "Swift", "Kotlin"],
      color: "bg-purple-500"
    },
    {
      category: "Database",
      items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
      color: "bg-yellow-500"
    },
    {
      category: "DevOps",
      items: ["Docker", "Kubernetes", "AWS", "Azure"],
      color: "bg-red-500"
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState(technologies[0]);
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <section className="bg-[#d5fff7] text-[#23194f] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          OUR <span className="text-sky-700">TECH STACK</span>
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-12">
          We work with cutting-edge technologies to deliver the best solutions
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Category Selector */}
          <div className="lg:w-1/4">
            <div className="space-y-2">
              {technologies.map((tech) => (
                <button
                  key={tech.category}
                  onClick={() => setSelectedCategory(tech)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition ${
                    selectedCategory.category === tech.category
                      ? `${tech.color} text-white shadow-lg`
                      : 'bg-white hover:bg-gray-100'
                  }`}
                >
                  {tech.category}
                </button>
              ))}
            </div>
          </div>

          {/* Tech Visualization */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-xl p-6 shadow-lg h-full">
              <h3 className="text-2xl font-bold mb-6">{selectedCategory.category} Technologies</h3>
              
              <div className="relative h-64">
                {selectedCategory.items.map((tech, index) => {
                  const angle = (index * 360) / selectedCategory.items.length;
                  const radius = 120;
                  const x = radius * Math.cos((angle * Math.PI) / 180);
                  const y = radius * Math.sin((angle * Math.PI) / 180);
                  
                  return (
                    <motion.div
                      key={tech}
                      initial={{ x: 0, y: 0, opacity: 0 }}
                      animate={{ 
                        x: x, 
                        y: y, 
                        opacity: 1,
                        transition: { 
                          delay: index * 0.1,
                          type: "spring",
                          stiffness: 100
                        }
                      }}
                      whileHover={{ scale: 1.2 }}
                      onHoverStart={() => setHoveredTech(tech)}
                      onHoverEnd={() => setHoveredTech(null)}
                      className={`absolute top-1/2 left-1/2 w-16 h-16 rounded-full ${selectedCategory.color} text-white flex items-center justify-center cursor-pointer shadow-md`}
                      style={{ zIndex: hoveredTech === tech ? 10 : 1 }}
                    >
                      {tech.substring(0, 2)}
                    </motion.div>
                  );
                })}

                {/* Center Circle */}
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full ${selectedCategory.color} bg-opacity-30 flex items-center justify-center`}>
                  <AnimatePresence>
                    {hoveredTech && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="text-center"
                      >
                        <div className="text-sm font-semibold">{hoveredTech}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Tech List */}
              <div className="mt-8">
                <h4 className="font-bold mb-4">All {selectedCategory.category} Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCategory.items.map((tech) => (
                    <span 
                      key={tech} 
                      className={`px-3 py-1 rounded-full text-sm ${selectedCategory.color} bg-opacity-20 text-[#23194f]`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackVisualization;