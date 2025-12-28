/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { TbBrandTelegram } from 'react-icons/tb';

const Footer = () => {
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

  const hoverEffect = {
    hover: {
      y: -3,
      color: "#FFD700",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const socialIcons = [
    { icon: FiFacebook, label: "Facebook" },
    { icon: FiTwitter, label: "Twitter" },
    { icon: FiInstagram, label: "Instagram" },
    { icon: FiLinkedin, label: "LinkedIn" },
    { icon: TbBrandTelegram, label: "Telegram" }
  ];

  const navigationItems = ['Home', 'About Us', 'Services', 'Portfolio', 'Case Studies', 'Contact Us'];
  const services = ['Web Development', 'UI/UX Design', 'Branding', 'Digital Marketing', 'DevOps', 'Consulting'];

  return (
    <footer className="relative overflow-hidden pt-20 pb-12 px-4 md:px-8">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-black/90" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(255,215,0,0.05) 0%, transparent 70%)`,
              width: `${200 + i * 80}px`,
              height: `${200 + i * 80}px`,
              left: `${(i * 15) % 100}%`,
              bottom: `-${50 + i * 30}px`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto max-w-7xl z-10">
        {/* Top Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Brand Info */}
          <motion.div
            className="space-y-6"
            variants={itemVariants}
          >
            <div>
              <motion.h2 
                className="text-3xl md:text-4xl font-black mb-4"
                style={{
                  background: "linear-gradient(90deg, #FFD700, #ffed4a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
                whileHover={{ scale: 1.05 }}
              >
                MBTech
              </motion.h2>
              <p className="text-yellow-300/90 text-lg font-medium">
                Innovation, Design, Enterprise
              </p>
            </div>

            <p className="text-yellow-200/80 leading-relaxed">
              Let's discuss your vision and build something extraordinary together. 
              We transform ideas into impactful digital solutions.
            </p>

            {/* Newsletter */}
            <motion.div 
              className="pt-4"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <FiMail className="text-yellow-400" />
                <h3 className="text-yellow-300 font-semibold">Subscribe to Newsletter</h3>
              </div>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-black/30 backdrop-blur-sm border border-yellow-500/30 rounded-full px-6 py-3 text-yellow-200 placeholder-yellow-300/50 focus:outline-none focus:border-yellow-500"
                />
                <motion.button
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-300 text-black font-semibold text-sm"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-4 pt-6">
                <span className="text-yellow-300/80">Connect with us:</span>
                <div className="flex gap-3">
                  {socialIcons.map((social, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="relative group"
                      variants={hoverEffect}
                      whileHover="hover"
                      whileTap={{ scale: 0.9 }}
                    >
                      <div className="w-10 h-10 rounded-full bg-black/50 border border-yellow-500/20 flex items-center justify-center">
                        <social.icon className="text-yellow-400 group-hover:text-yellow-300 transition-colors" />
                      </div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <div className="bg-black/80 backdrop-blur-sm text-yellow-300 px-2 py-1 rounded text-xs whitespace-nowrap">
                          {social.label}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            className="space-y-6"
            variants={itemVariants}
          >
            <h3 className="text-xl font-bold text-yellow-300 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-300" />
              Navigation
            </h3>
            <ul className="space-y-3">
              {navigationItems.map((item, index) => (
                <motion.li
                  key={item}
                  variants={hoverEffect}
                  whileHover="hover"
                  custom={index}
                >
                  <a
                    href="#"
                    className="text-yellow-300/80 hover:text-yellow-300 transition-colors flex items-center gap-2 group"
                  >
                    <motion.span
                      className="text-yellow-500 opacity-0 group-hover:opacity-100"
                      animate={hovered => hovered ? { x: [0, 5, 0] } : {}}
                    >
                      →
                    </motion.span>
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            className="space-y-6"
            variants={itemVariants}
          >
            <h3 className="text-xl font-bold text-yellow-300 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-300" />
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  variants={hoverEffect}
                  whileHover="hover"
                  custom={index}
                >
                  <a
                    href="#"
                    className="text-yellow-300/80 hover:text-yellow-300 transition-colors flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50 group-hover:bg-yellow-500" />
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            variants={itemVariants}
          >
            <h3 className="text-xl font-bold text-yellow-300 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-300" />
              Contact Us
            </h3>
            
            {/* USA */}
            <motion.div
              className="space-y-3"
              whileHover={{ x: 5 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-yellow-300/10 rounded-full">
                  <h4 className="font-semibold text-yellow-300 text-sm">USA</h4>
                </div>
              </div>
              <div className="space-y-2 pl-6">
                <div className="flex items-start gap-2">
                  <FiMapPin className="text-yellow-500 mt-1" />
                  <p className="text-yellow-200/80 text-sm">
                    1035 Fairfield Ave<br />
                    Bridgeport, Connecticut
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FiPhone className="text-yellow-500" />
                  <p className="text-yellow-200/80">(203) -446-5381</p>
                </div>
                <div className="flex items-center gap-2">
                  <FiMail className="text-yellow-500" />
                  <p className="text-yellow-200/80">usa@mbtech.com</p>
                </div>
              </div>
            </motion.div>

            {/* UAE */}
            <motion.div
              className="space-y-3 pt-6 border-t border-yellow-500/10"
              whileHover={{ x: 5 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-yellow-300/10 rounded-full">
                  <h4 className="font-semibold text-yellow-300 text-sm">UAE</h4>
                </div>
              </div>
              <div className="space-y-2 pl-6">
                <div className="flex items-start gap-2">
                  <FiMapPin className="text-yellow-500 mt-1" />
                  <p className="text-yellow-200/80 text-sm">
                    Avenue Residence, I, 8 floor<br />
                    Al Futjan, Dubai
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FiPhone className="text-yellow-500" />
                  <p className="text-yellow-200/80">+971 543 367865</p>
                </div>
                <div className="flex items-center gap-2">
                  <FiMail className="text-yellow-500" />
                  <p className="text-yellow-200/80">uae@mbtech.com</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Copyright */}
        <motion.div
          className="border-t border-yellow-500/20 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-yellow-300/60 text-sm">
              © Copyright 2014–2025 <span className="text-yellow-300 font-semibold">MBTech</span> | All Rights Reserved
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-yellow-300/60 hover:text-yellow-300 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-yellow-300/60 hover:text-yellow-300 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-yellow-300/60 hover:text-yellow-300 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
          
          {/* Trust Badge */}
          <motion.div
            className="mt-8"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="inline-flex items-center gap-3 bg-black/30 backdrop-blur-sm rounded-full px-6 py-3 border border-yellow-500/20">
              <div className="flex">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-yellow-400 -ml-1 first:ml-0"
                  />
                ))}
              </div>
              <span className="text-yellow-300 text-sm">
                Trusted by businesses worldwide
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;