import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import {Link} from 'react-router-dom'

const works = [
  {
    title: "SEO & Digital Marketing",
    image: "WORK1.png",
    description: "Comprehensive digital marketing strategies to boost your online presence.",
    tags: ["SEO", "PPC", "Content Marketing"]
  },
  {
    title: "DevOps",
    image: "WORK2.png",
    description: "Streamlined development and operations for continuous delivery.",
    tags: ["CI/CD", "Cloud", "Automation"]
  },
  {
    title: "Resource Outsourcing",
    image: "WORK3.png",
    description: "Top-tier talent for your specialized project needs.",
    tags: ["Recruitment", "Staffing", "Consulting"]
  },
  {
    title: "Web Development",
    image: "WORK4.png",
    description: "Custom web solutions tailored to your business requirements.",
    tags: ["React", "Node.js", "Responsive"]
  },
  {
    title: "UI/UX Design",
    image: "WORK5.png",
    description: "Beautiful and intuitive user experiences that convert.",
    tags: ["Figma", "Prototyping", "User Research"]
  },
  {
    title: "Data Analytics",
    image: "WORK6.png",
    description: "Actionable insights from your business data.",
    tags: ["BI", "Dashboards", "Machine Learning"]
  },
];

const WorkCarousel = () => {
  const carouselRef = useRef();
  const [width, setWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const calculateWidth = () => {
      if (carouselRef.current) {
        const scrollWidth = carouselRef.current.scrollWidth;
        const offsetWidth = carouselRef.current.offsetWidth;
        setWidth(scrollWidth - offsetWidth);
      }
    };

    calculateWidth();
    window.addEventListener('resize', calculateWidth);
    return () => window.removeEventListener('resize', calculateWidth);
  }, []);

  const nextSlide = () => {
    setActiveIndex(prev => (prev === works.length - 1 ? 0 : prev + 1));
    controls.start({
      x: -activeIndex * 350,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    });
  };

  const prevSlide = () => {
    setActiveIndex(prev => (prev === 0 ? works.length - 1 : prev - 1));
    controls.start({
      x: -activeIndex * 350,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    });
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
    controls.start({
      x: -index * 350,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    });
  };

  return (
    <section className="bg-[#d5fff7] text-[#23194f] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">OUR <span className="text-sky-700">WORKS</span></h2>
        <p className="text-center text-black max-w-2xl mx-auto mb-12">
          Explore our portfolio of successful projects and case studies.
        </p>

        

        {/* Carousel */}
       
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            ref={carouselRef}
            className="overflow-hidden cursor-grab"
            whileTap={{ cursor: "grabbing" }}
          >
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="flex gap-6"
              animate={controls}
            >
              {works.map((work, index) => (
                <motion.div
                  key={index}
                  className={`min-w-[300px] md:min-w-[350px] relative overflow-hidden rounded-xl group ${activeIndex === index ? 'ring-2 ring-yellow-400' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                   <Link to='/portfolio'>
                  <div className="relative">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-64 md:h-80 object-cover rounded-xl"
                    />
                   
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          className="absolute inset-0 text-white bg-gray-400 bg-opacity-70 flex flex-col justify-end p-6"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          
                          <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                          <p className="text-[#23194f]  text-sm mb-4">{work.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {work.tags.map((tag, i) => (
                              <span key={i} className="bg-gray-800 text-xs px-2 py-1 rounded">
                                {tag}
                              </span>
                              
                            ))}
                          </div>
                        
                        </motion.div>
                        
                      )}
                    </AnimatePresence>
                    
                  </div>
                   </Link>
                  <div className="absolute bottom-4 left-4 text-lg font-semibold">
                    {work.title}
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <ArrowUpRight className="text-white" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        
        {/* Carousel Navigation */}
        <div className="flex justify-between mt-10 items-center mb-6 px-4">
          <button 
            onClick={prevSlide}
            className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex space-x-2">
            {works.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${activeIndex === index ? '-[#23194f] ' : 'bg-gray-600'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={nextSlide}
            className="p-2 rounded-full bg-gray-800 y=y text-white hover:bg-gray-700 transition"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* More Work Button */}
        <div className="text-center mt-16">
          <Link to='/portfolio'>
          <button className="bg-gradient-to-r bg-sky-800  text-white font-semibold px-8 py-3 rounded-full shadow hover:scale-105 transition flex items-center mx-auto">
            VIEW FULL PORTFOLIO
            <ArrowUpRight className="ml-2" size={18} />
          </button>
          </Link>
        </div>
      </div>
      
    </section>
  );
};

export default WorkCarousel;