import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, Code2, Layers, Zap } from 'lucide-react';

/* ─── Particle Canvas ─── */
const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: null, y: null });
  const raf = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const init = () => {
      particles.current = Array.from({ length: 80 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.8 + 0.4,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        alpha: Math.random() * 0.25 + 0.05,
      }));
    };
    init();

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => { mouse.current = { x: null, y: null }; };
    canvas.addEventListener('mousemove', onMove);
    canvas.addEventListener('mouseleave', onLeave);
    window.addEventListener('resize', () => { resize(); init(); });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        if (mouse.current.x) {
          const dx = mouse.current.x - p.x, dy = mouse.current.y - p.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 100) {
            const f = (100 - d) / 100;
            p.x -= (dx / d) * f * 5;
            p.y -= (dy / d) * f * 5;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,215,0,${p.alpha})`;
        ctx.shadowBlur = 6; ctx.shadowColor = 'rgba(255,215,0,0.3)';
        ctx.fill(); ctx.shadowBlur = 0;
      });

      for (let i = 0; i < particles.current.length; i++) {
        for (let j = i + 1; j < particles.current.length; j++) {
          const dx = particles.current[i].x - particles.current[j].x;
          const dy = particles.current[i].y - particles.current[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255,215,0,${(1 - d / 100) * 0.12})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles.current[i].x, particles.current[i].y);
            ctx.lineTo(particles.current[j].x, particles.current[j].y);
            ctx.stroke();
          }
        }
      }

      raf.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf.current);
      canvas.removeEventListener('mousemove', onMove);
      canvas.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto z-0"
    />
  );
};

/* ─── Typed Counter ─── */
const Counter = ({ end, suffix = '' }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = end / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 24);
    return () => clearInterval(timer);
  }, [end]);
  return <span>{count}{suffix}</span>;
};

/* ─── Main Banner ─── */
const Banner = () => {
  const images = ['ban2.png', 'ban3.png', 'ban7.png', 'ban5.png', 'ban2.png', 'ban3.png', 'ban7.png', 'ban5.png', 'ban2.png'];

  const stats = [
    { icon: <Code2 size={16} />, value: 100, suffix: '+', label: 'Projects' },
    { icon: <Layers size={16} />, value: 50, suffix: '+', label: 'Clients' },
    { icon: <Zap size={16} />, value: 95, suffix: '%', label: 'Retention' },
  ];

  /* tilt effect on hero text */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useTransform(my, [-200, 200], [4, -4]);
  const rotateY = useTransform(mx, [-200, 200], [-4, 4]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - rect.left - rect.width / 2);
    my.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleMouseLeave = () => { mx.set(0); my.set(0); };

  return (
    <section className="relative bg-[#080808] overflow-hidden min-h-screen flex flex-col items-center justify-center">

      {/* CSS keyframes */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .banner-root { font-family: 'DM Sans', sans-serif; }
        .display-font { font-family: 'Syne', sans-serif; }

        @keyframes scanline {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        .scanline {
          animation: scanline 8s linear infinite;
          background: linear-gradient(to bottom, transparent, rgba(255,215,0,0.03) 50%, transparent);
          height: 200px;
          pointer-events: none;
        }

        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .shimmer-text {
          background: linear-gradient(90deg, #fff 0%, #FFD700 30%, #fff 60%, #FFD700 90%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 5s linear infinite;
        }

        @keyframes borderPulse {
          0%, 100% { opacity: 0.4; }
          50%       { opacity: 1; }
        }
        .border-pulse { animation: borderPulse 3s ease-in-out infinite; }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        .float { animation: float 6s ease-in-out infinite; }

        .grid-bg {
          background-image:
            linear-gradient(rgba(255,215,0,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,215,0,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .glass-card {
          background: rgba(255,255,255,0.02);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,215,0,0.08);
        }

        .img-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(255,215,0,0.06), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .img-card:hover::before { opacity: 1; }

        .cta-btn {
          background: linear-gradient(135deg, #FFD700 0%, #FFC200 100%);
          box-shadow: 0 0 0 0 rgba(255,215,0,0.4);
          transition: box-shadow 0.3s;
        }
        .cta-btn:hover {
          box-shadow: 0 0 30px 8px rgba(255,215,0,0.2);
        }

        .stat-pill {
          background: rgba(255,215,0,0.05);
          border: 1px solid rgba(255,215,0,0.12);
          transition: background 0.3s, border-color 0.3s;
        }
        .stat-pill:hover {
          background: rgba(255,215,0,0.1);
          border-color: rgba(255,215,0,0.3);
        }
      `}</style>

      {/* Particle canvas */}
      <ParticleCanvas />

      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg z-0 opacity-60" />

      {/* Scan line */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="scanline absolute w-full left-0 top-0" />
      </div>

      {/* Radial vignette */}
      <div className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 40%, transparent 30%, rgba(8,8,8,0.85) 100%)' }}
      />

      {/* ── Main content ── */}
      <div className="banner-root relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 text-center pt-24 pb-16">

        {/* Label badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-10 border-pulse"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shadow-[0_0_6px_2px_rgba(255,215,0,0.6)]" />
          <span className="text-yellow-400/80 text-xs uppercase tracking-[0.2em] font-medium">
            Premium Software Solutions
          </span>
        </motion.div>

        {/* Hero heading */}
        <motion.div
          style={{ rotateX, rotateY, perspective: 1000, transformStyle: 'preserve-3d' }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="mb-8"
        >
          <motion.h1
            className="display-font text-6xl md:text-8xl lg:text-[7rem] font-extrabold leading-[0.92] tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="shimmer-text block">BUILDING</span>
            <span className="text-white block">TOMORROW'S</span>
            <span className="block relative">
              <span className="text-yellow-400 relative z-10">SOFTWARE</span>
              {/* underline accent */}
              <motion.span
                className="absolute bottom-1 left-0 h-[3px] bg-yellow-400/30 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.2, delay: 0.8, ease: 'easeOut' }}
              />
            </span>
          </motion.h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          We design, develop, and deploy digital products that drive growth —
          <span className="text-yellow-400/80"> from concept to production</span>, flawlessly.
        </motion.p>

        {/* CTA row */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <motion.button
            className="cta-btn display-font text-black font-bold px-9 py-4 rounded-full flex items-center gap-2 text-base tracking-wide"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Start Your Project
            <ArrowRight size={18} />
          </motion.button>

          <motion.button
            className="glass-card text-white font-medium px-8 py-4 rounded-full flex items-center gap-2 text-sm tracking-wide hover:border-yellow-400/30 transition-colors"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            View Portfolio
          </motion.button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {stats.map((s, i) => (
            <div key={i} className="stat-pill flex items-center gap-3 px-6 py-3 rounded-full">
              <span className="text-yellow-400">{s.icon}</span>
              <span className="display-font text-white text-xl font-bold">
                <Counter end={s.value} suffix={s.suffix} />
              </span>
              <span className="text-gray-500 text-sm">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* ── Image Gallery ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Section label */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="flex-1 h-px bg-gradient-to-r from-transparent to-yellow-400/20 max-w-[120px]" />
            <span className="text-gray-600 text-xs uppercase tracking-[0.2em]">Our Work</span>
            <span className="flex-1 h-px bg-gradient-to-l from-transparent to-yellow-400/20 max-w-[120px]" />
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3">
            {images.map((img, i) => (
              <motion.div
                key={i}
                className="img-card relative rounded-2xl overflow-hidden cursor-pointer group float"
                style={{ animationDelay: `${i * 0.4}s` }}
                whileHover={{ y: -10, scale: 1.06, zIndex: 10 }}
                transition={{ type: 'spring', stiffness: 350, damping: 22 }}
              >
                {/* border glow */}
                <div className="absolute inset-0 rounded-2xl border border-yellow-400/0 group-hover:border-yellow-400/30 transition-colors duration-300 z-10 pointer-events-none" />

                <img
                  src={`/${img}`}
                  alt={`Project ${i + 1}`}
                  className="w-full h-28 md:h-36 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* dark overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-300" />

                {/* hover label */}
                <div className="absolute inset-0 flex items-end p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <span className="text-white text-[10px] font-medium bg-yellow-400/20 backdrop-blur-sm px-2 py-0.5 rounded-full">
                    View →
                  </span>
                </div>

                {/* yellow glow shadow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: 'inset 0 -20px 30px rgba(255,215,0,0.08)' }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Corner decorative lines */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-yellow-400/20 rounded-tl-lg pointer-events-none z-10" />
      <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-yellow-400/20 rounded-tr-lg pointer-events-none z-10" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b border-l border-yellow-400/20 rounded-bl-lg pointer-events-none z-10" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-yellow-400/20 rounded-br-lg pointer-events-none z-10" />

      {/* Floating orbs */}
      <motion.div
        className="absolute -top-32 -left-32 w-80 h-80 rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(255,215,0,0.06) 0%, transparent 70%)' }}
        animate={{ x: [0, 60, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(255,215,0,0.04) 0%, transparent 70%)' }}
        animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
    </section>
  );
};

export default Banner;