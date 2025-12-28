import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const [hoveredTab, setHoveredTab] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  // Color definitions
  const advancedBlack = '#0a0a0a'; // Rich, deep black
  const advancedYellow = '#FFD700'; // Vibrant gold yellow
  const advancedYellowLight = '#FFF9C4'; // Light yellow for hover
  const advancedYellowGlow = 'rgba(255, 215, 0, 0.3)'; // Yellow glow

  const mobileMenuVariants = {
    open: {
      opacity: 1,
      height: 'auto',
      transition: { 
        duration: 0.3, 
        ease: 'easeInOut',
        staggerChildren: 0.1,
        delayChildren: 0.1 
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: { 
        duration: 0.3, 
        ease: 'easeInOut',
        staggerChildren: 0.05,
        staggerDirection: -1 
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-2xl' : ''}`}
      style={{ 
        backgroundColor: advancedBlack,
        background: scrolled 
          ? `linear-gradient(135deg, ${advancedBlack} 0%, #1a1a1a 100%)`
          : advancedBlack
      }}
    >
      <div className="container mx-auto px-5 py-3 lg:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="relative"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-yellow-500 rounded-full blur-md opacity-20"></div>
              <motion.img
                src="/logo2.png"
                alt="Logo"
                className="w-12 h-12 md:w-14 md:h-14 relative z-10"
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  repeatDelay: 7 
                }}
              />
            </motion.div>
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span 
                className="text-2xl md:text-3xl font-bold tracking-tight"
                style={{ color: advancedYellow }}
              >
                AZ<span className="text-white">Tech</span>
              </span>
              <motion.div 
                className="h-0.5 w-full mt-1"
                style={{ background: `linear-gradient(90deg, ${advancedYellow}, transparent)` }}
                animate={{ width: ['0%', '100%'] }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-0.5 bg-black/30 border border-gray-800 backdrop-blur-xl py-1 px-1 rounded-full shadow-2xl">
            {navLinks.map((link, index) => {
              const isActive = activeTab === link.name;
              const isHovered = hoveredTab === link.name;
              
              return (
                <motion.div
                  key={index}
                  onHoverStart={() => setHoveredTab(link.name)}
                  onHoverEnd={() => setHoveredTab(null)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setActiveTab(link.name)}
                    className="relative cursor-pointer text-lg font-semibold px-6 py-2.5 rounded-full transition-all duration-300"
                    style={{
                      color: isActive ? advancedBlack : isHovered ? advancedYellowLight : advancedYellow,
                    }}
                  >
                    {link.name}
                    
                    {/* Hover background effect */}
                    {(isHovered || isActive) && (
                      <motion.div
                        className="absolute inset-0 rounded-full -z-10"
                        style={{ 
                          backgroundColor: isActive ? advancedYellow : `${advancedYellow}20`,
                          boxShadow: isActive 
                            ? `0 0 20px ${advancedYellowGlow}`
                            : `0 0 10px ${advancedYellowGlow}`
                        }}
                        layoutId="nav-bg"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}

                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      >
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: advancedYellow }} />
                      </motion.div>
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Contact Button */}
          <motion.div
            className="hidden lg:block"
            whileHover={{
              scale: 1.05,
              boxShadow: `0 10px 25px ${advancedYellowGlow}`,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Link
              to="/contact"
              className="relative overflow-hidden group"
            >
              <motion.div
                className="px-8 py-3 rounded-full font-bold text-lg tracking-wide"
                style={{
                  backgroundColor: advancedYellow,
                  color: advancedBlack,
                }}
                whileHover={{
                  backgroundColor: advancedYellowLight,
                  boxShadow: `0 0 30px ${advancedYellowGlow}`,
                }}
              >
                CONTACT US
                <motion.div
                  className="absolute inset-0 bg-white/10"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            </Link>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="lg:hidden text-3xl p-2 rounded-lg"
            style={{ color: advancedYellow }}
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9, rotate: 90 }}
            whileHover={{ 
              backgroundColor: `${advancedYellow}20`,
              rotate: 180 
            }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden overflow-hidden"
            style={{ 
              backgroundColor: advancedBlack,
              background: `linear-gradient(to bottom, ${advancedBlack}, #1a1a1a)`
            }}
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <motion.div 
              className="px-5 pb-6 pt-2 space-y-2"
              variants={navItemVariants}
            >
              {navLinks.map((link, index) => {
                const isActive = activeTab === link.name;
                return (
                  <motion.div
                    key={index}
                    variants={navItemVariants}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={link.path}
                      className={`block py-3 px-4 rounded-xl text-lg font-semibold transition-all duration-300 ${
                        isActive ? 'font-bold' : ''
                      }`}
                      style={{
                        color: isActive ? advancedBlack : advancedYellow,
                        backgroundColor: isActive ? advancedYellow : 'transparent',
                      }}
                      onClick={() => {
                        setIsOpen(false);
                        setActiveTab(link.name);
                      }}
                    >
                      <div className="flex items-center justify-between">
                        {link.name}
                        {isActive && (
                          <motion.div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: advancedBlack }}
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        )}
                      </div>
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div 
                className="pt-4"
                variants={navItemVariants}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center w-full py-3.5 rounded-xl font-bold text-lg"
                  style={{
                    backgroundColor: advancedYellow,
                    color: advancedBlack,
                    boxShadow: `0 5px 15px ${advancedYellowGlow}`
                  }}
                  onClick={() => {
                    setIsOpen(false);
                    setActiveTab('Contact');
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  CONTACT US
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;