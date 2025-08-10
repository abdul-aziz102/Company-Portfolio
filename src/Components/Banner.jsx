import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Banner = () => {
  // Particle network setup
  const canvasRef = useRef(null);
  const controls = useAnimation();
  const particles = useRef([]);
  const mouse = useRef({ x: null, y: null, radius: 100 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    // Create particles
    particles.current = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: Math.random() * 2 - 1,
      speedY: Math.random() * 2 - 1,
      color: `rgba(35, 25, 79, ${Math.random() * 0.5 + 0.1})`
    }));

    // Handle mouse movement
    const handleMouseMove = (event) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    });

    // Animation loop
    let animationFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.current.forEach(particle => {
        // Move particle
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
        
        // Mouse interaction
        const dx = mouse.current.x - particle.x;
        const dy = mouse.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.current.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouse.current.radius - distance) / mouse.current.radius;
          
          particle.x -= forceDirectionX * force * 5;
          particle.y -= forceDirectionY * force * 5;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
      
      // Draw connections
      for (let i = 0; i < particles.current.length; i++) {
        for (let j = i + 1; j < particles.current.length; j++) {
          const p1 = particles.current[i];
          const p2 = particles.current[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(35, 25, 79, ${1 - distance / 150})`;
            ctx.lineWidth = 0.5;
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
      transition: { duration: 1 }
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [controls]);

  // Banner animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const hoverEffect = {
    hover: {
      y: -10,
      scale: 1.05,
      boxShadow: '0 10px 30px rgba(35, 25, 79, 0.15)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 15,
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
    <section className="bg-[#d5fff7] text-[#23194f] py-20 relative overflow-hidden">
      {/* Particle network background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src="/banbg.png"
          alt="Background pattern"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative container mx-auto px-5 text-center z-10">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-[#23194f] drop-shadow-md"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to <span className="text-sky-700">MBTech</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-[#23194f] mb-10 font-medium"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Creative Web Design & Development Studio
        </motion.p>

        <motion.div
          className="grid grid-rows-10 grid-cols-12 grid-flow-col gap-2 pt-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`relative bg-white rounded-md overflow-hidden shadow-sm ${
                index % 3 === 0
                  ? 'row-start-1 row-end-6 col-span-2'
                  : index % 3 === 1
                  ? 'row-start-6 row-end-11 col-span-2'
                  : 'row-start-3 row-end-9 col-span-2'
              }`}
            >
              <motion.img
                src={`/${img}`}
                alt={`img-${index}`}
                className="w-full h-full object-cover"
                whileHover="hover"
                variants={hoverEffect}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;