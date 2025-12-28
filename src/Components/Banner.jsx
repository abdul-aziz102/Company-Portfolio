import React, { useEffect, useRef, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useAnimation } from 'framer-motion';

const Banner = () => {
  // Particle network setup
  const canvasRef = useRef(null);
  const controls = useAnimation();
  const particles = useRef([]);
  const mouse = useRef({ x: null, y: null, radius: 120 });
  const [hoveredImage, setHoveredImage] = useState(null);

  // Color scheme
  const colors = {
    primary: '#FFD700', // Advanced Yellow
    dark: '#0a0a0a',    // Advanced Black
    accent: '#23194f',
    light: '#d5fff7'
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    setCanvasSize();
    
    // Create particles
    const createParticles = () => {
      particles.current = Array.from({ length: 100 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5 + 0.5,
        speedX: Math.random() * 1.5 - 0.75,
        speedY: Math.random() * 1.5 - 0.75,
        color: `rgba(255, 215, 0, ${Math.random() * 0.3 + 0.1})`,
        shadowBlur: Math.random() * 10 + 5
      }));
    };

    createParticles();

    // Handle mouse movement
    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = event.clientX - rect.left;
      mouse.current.y = event.clientY - rect.top;
    };

    // Handle mouse leave
    const handleMouseLeave = () => {
      mouse.current.x = null;
      mouse.current.y = null;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', () => {
      setCanvasSize();
      createParticles();
    });

    // Animation loop
    let animationFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width
      );
      gradient.addColorStop(0, 'rgba(10, 10, 10, 0.05)');
      gradient.addColorStop(1, 'rgba(255, 215, 0, 0.02)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.current.forEach(particle => {
        // Move particle
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges with damping
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -0.95;
          particle.x = particle.x < 0 ? 0 : canvas.width;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -0.95;
          particle.y = particle.y < 0 ? 0 : canvas.height;
        }
        
        // Mouse interaction
        if (mouse.current.x !== null && mouse.current.y !== null) {
          const dx = mouse.current.x - particle.x;
          const dy = mouse.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.current.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = Math.pow((mouse.current.radius - distance) / mouse.current.radius, 2);
            
            particle.x -= forceDirectionX * force * 8;
            particle.y -= forceDirectionY * force * 8;
            
            // Add some turbulence
            particle.speedX += (Math.random() - 0.5) * force * 2;
            particle.speedY += (Math.random() - 0.5) * force * 2;
          }
        }
        
        // Draw particle with glow effect
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.shadowBlur = particle.shadowBlur;
        ctx.shadowColor = particle.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
      
      // Draw connections
      for (let i = 0; i < particles.current.length; i++) {
        for (let j = i + 1; j < particles.current.length; j++) {
          const p1 = particles.current[i];
          const p2 = particles.current[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            ctx.beginPath();
            const alpha = Math.pow(1 - distance / 120, 2) * 0.4;
            ctx.strokeStyle = `rgba(255, 215, 0, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.lineCap = 'round';
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();

    // Animate title
    controls.start({
      y: [20, 0],
      opacity: [0, 1],
      transition: { 
        duration: 1,
        ease: "easeOut"
      }
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', () => {});
    };
  }, [controls]);

  // Banner animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { 
      y: 30, 
      opacity: 0,
      scale: 0.9 
    },
    show: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  const hoverEffect = {
    hover: {
      y: -15,
      scale: 1.08,
      boxShadow: `0 20px 40px ${colors.primary}40`,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 25,
      },
    },
  };

  const images = [
    'ban2.png',
    'ban3.png',
    'ban7.png',
    'ban5.png',
    'ban2.png',
    'ban3.png',
    'ban7.png',
    'ban5.png',
    'ban2.png',
  ];

  return (
    <section className="relative bg-black overflow-hidden min-h-screen flex items-center justify-center py-20">
      {/* Advanced Particle network background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-auto"
      />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black/10 via-transparent to-yellow-500/5" />
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black/20 to-transparent" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Animated title with gradient */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut"
            }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-200 to-yellow-400">
              Welcome to
            </span>
            <motion.span 
              className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500"
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
              AZ<span className="text-white">Tech</span>
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl font-medium mb-8 max-w-3xl mx-auto px-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">
              Where Innovation Meets Excellence in Web Design & Development
            </span>
          </motion.p>

          {/* Animated CTA Button */}
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.button
              className="relative overflow-hidden group px-10 py-4 rounded-full font-bold text-lg tracking-wider"
              style={{
                background: `linear-gradient(135deg, ${colors.primary}, #ffed4a)`,
                color: colors.dark,
              }}
              whileHover={{ 
                boxShadow: `0 15px 35px ${colors.primary}60`
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span className="relative z-10">Start Your Project</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-300 opacity-0 group-hover:opacity-100"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Enhanced Image Gallery */}
        <motion.div
          className="mt-20 px-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
            {images.map((img, index) => (
              <motion.div
                key={index}
                variants={item}
                className="relative group"
                onHoverStart={() => setHoveredImage(index)}
                onHoverEnd={() => setHoveredImage(null)}
                whileHover="hover"
                custom={index}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-black/30 to-yellow-500/10 p-1">
                  <motion.div
                    className="relative z-0 rounded-xl overflow-hidden"
                    variants={hoverEffect}
                    style={{
                      boxShadow: hoveredImage === index 
                        ? `0 25px 50px ${colors.primary}40`
                        : '0 10px 30px rgba(0,0,0,0.2)'
                    }}
                  >
                    <motion.img
                      src={`/${img}`}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-48 md:h-64 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                  
                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 z-10"
                    initial={false}
                  >
                    <motion.div
                      className="px-4 py-2 rounded-full backdrop-blur-sm"
                      style={{ backgroundColor: `${colors.primary}20` }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="font-semibold text-white">View Details</span>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Decorative border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background: `linear-gradient(45deg, transparent, ${colors.primary}20, transparent)`,
                    opacity: hoveredImage === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          className="absolute -top-20 -left-20 w-64 h-64 rounded-full"
          style={{
            background: `radial-gradient(circle, ${colors.primary}20 0%, transparent 70%)`
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full"
          style={{
            background: `radial-gradient(circle, ${colors.primary}10 0%, transparent 70%)`
          }}
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </section>
  );
};

export default Banner;