import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const StatsCounter = () => {
  const stats = [
    { value: 150, suffix: '+', label: 'Projects Completed' },
    { value: 95, suffix: '%', label: 'Client Satisfaction' },
    { value: 50, suffix: '+', label: 'Expert Team Members' },
    { value: 10, suffix: '+', label: 'Years Experience' }
  ];

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section className="bg-[#d5fff7] text-[#23194f] border border py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem 
              key={index} 
              stat={stat} 
              controls={controls} 
              custom={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ stat, controls, custom }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.8
      }
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate={controls}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold mb-2">
        <Counter from={0} to={stat.value} suffix={stat.suffix} />
      </div>
      <p className="text-[#d5fff7] text-lg">{stat.label}</p>
    </motion.div>
  );
};

const Counter = ({ from, to, suffix }) => {
  const [count, setCount] = React.useState(from);
  const ref = useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 2000; // ms
          const start = Date.now();
          const end = start + duration;
          
          const step = () => {
            const now = Date.now();
            const progress = Math.min(1, (now - start) / duration);
            const currentCount = Math.floor(progress * (to - from) + from);
            
            setCount(currentCount);
            
            if (now < end) {
              requestAnimationFrame(step);
            } else {
              setCount(to);
            }
          };
          
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [from, to]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export default StatsCounter;