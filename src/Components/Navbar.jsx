import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
    { name: 'Portfolio', path: '/portfolio' },
  ];

  const mobileMenuVariants = {
    open: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  return (
    <header className={`bg-[#ddfef8] text-[#23194f] sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto px-5 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.img
            src="/logo2.png"
            alt="Logo"
            className="w-14 h-14 md:w-16 md:h-16"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 5 }}
          />
          <motion.span
            className="text-2xl font-bold text-[#23194f]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            MB<span className="text-sky-900">Tech</span>
          </motion.span>
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-1 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
          {navLinks.map((link, index) => {
            const isActive = activeTab === link.name;
            return (
              <Link
                key={index}
                to={link.path}
                onClick={() => setActiveTab(link.name)}
                className={cn(
                  "relative cursor-pointer text-lg font-semibold px-6 py-2  rounded-full transition-colors",
                  "text-[#23194f]/80 hover:text-sky-700",
                  isActive && "bg-sky-100/50 text-sky-700"
                )}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-sky-200/20 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-sky-500 rounded-t-full">
                      <div className="absolute w-12 h-6 bg-sky-300/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-sky-300/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-sky-300/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Contact Button */}
        <motion.div
          whileHover={{
            scale: 1.05,
            backgroundColor: '#0ea5e9',
            boxShadow: '0 5px 15px rgba(14, 165, 233, 0.4)',
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          className="hidden md:inline-block"
        >
          <Link
            to="/contact"
            className="bg-sky-700 text-white px-6 py-2 rounded-full font-semibold"
          >
            CONTACT US
          </Link>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="md:hidden text-[#23194f] text-3xl"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-[#ddfef8] overflow-hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <div className="px-5 pb-4 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ color: '#0ea5e9', x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.path}
                    className="block text-[#23194f] text-lg"
                    onClick={() => {
                      setIsOpen(false);
                      setActiveTab(link.name);
                    }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-block bg-sky-700 text-white px-6 py-2 rounded-full font-semibold mt-2"
                  onClick={() => {
                    setIsOpen(false);
                    setActiveTab('Contact');
                  }}
                >
                  CONTACT US
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// Utility function to merge class names (similar to the cn function in the example)
function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default Navbar;