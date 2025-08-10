import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ParticleNetwork = () => {
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

  return (
    <section className="relative h-screen bg-[#d5fff7] overflow-hidden flex items-center justify-center">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      
      <div className="relative z-10 text-center px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="text-4xl md:text-6xl font-bold mb-8 text-[#23194f]"
        >
          Innovative <span className="text-sky-700">Solutions</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl text-[#23194f] mb-12 max-w-2xl mx-auto"
        >
          We connect ideas, technology, and people to create extraordinary digital experiences
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <button className="bg-[#23194f] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform">
            Discover Our Process
          </button>
        </motion.div>
      </div>
      
      {/* Floating animated elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-lg bg-[#23194f] opacity-10"
          initial={{
            x: Math.random() * 100 - 50 + '%',
            y: Math.random() * 100 - 50 + '%',
            rotate: Math.random() * 360
          }}
          animate={{
            x: [null, Math.random() * 100 - 50 + '%'],
            y: [null, Math.random() * 100 - 50 + '%'],
            rotate: [null, Math.random() * 360],
            transition: {
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              repeatType: "reverse"
            }
          }}
          style={{
            width: `${Math.random() * 200 + 50}px`,
            height: `${Math.random() * 200 + 50}px`
          }}
        />
      ))}
    </section>
  );
};

export default ParticleNetwork;