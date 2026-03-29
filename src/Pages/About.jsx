import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Globe, Shield } from "lucide-react";
import VisionMissionSlider from "../Components/Inorm";

const AboutUs = () => {
  const stats = [
    { value: "50+", label: "Clients Worldwide" },
    { value: "100+", label: "Projects Completed" },
    { value: "95%", label: "Client Retention" },
  ];

  const services = [
    {
      icon: <Code className="text-yellow-400" size={26} />,
      title: "Custom Software",
      description: "Tailored solutions for your unique business needs",
    },
    {
      icon: <Globe className="text-yellow-400" size={26} />,
      title: "Web Development",
      description: "High-performance websites and web applications",
    },
    {
      icon: <Shield className="text-yellow-400" size={26} />,
      title: "Security First",
      description: "Enterprise-grade security for all our solutions",
    },
  ];

  return (
    <div className="bg-[#0d0d0d] text-white font-sans">

      {/* ── Hero Section ── */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-400 mb-8">
            <span className="hover:text-white transition cursor-pointer">Home</span>
            <ArrowRight className="mx-2 text-yellow-400" size={13} />
            <span className="text-yellow-400 font-semibold">About Us</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Main heading */}
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6 uppercase">
              YOUR ALL-IN-ONE PLATFORM FOR{" "}
              <br className="hidden md:block" />
              <span className="text-yellow-400">LEADING SOFTWARE</span>
            </h1>

            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-5 uppercase tracking-wide text-white/90">
                TOP-RATED CUSTOM <br />
                DEVELOPMENT AGENCY
              </h2>

              <p className="text-base md:text-lg text-gray-400 mb-10 leading-relaxed">
                At AZTech, we provide high-performance software solutions and
                end-to-end digital transformation services for startups,
                enterprises, and growing businesses. Our expert teams help you
                automate workflows, boost productivity, and scale efficiently
                with cutting-edge technology.
              </p>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="bg-yellow-400 text-black font-bold px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-yellow-300 transition-colors text-base shadow-lg shadow-yellow-400/20"
              >
                Get Started
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Vision / Mission Slider ── */}
      <VisionMissionSlider />

      {/* ── Stats Section ── */}
      <section className="py-20 px-6 bg-[#111111]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="relative bg-[#1a1a1a] border border-white/10 rounded-2xl p-10 text-center overflow-hidden group hover:border-yellow-400/50 transition-colors duration-300"
            >
              {/* glow blob */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(circle at 50% 0%, rgba(250,204,21,0.08) 0%, transparent 70%)" }}
              />
              <h3 className="text-5xl font-extrabold text-yellow-400 mb-2">{stat.value}</h3>
              <p className="text-gray-400 text-sm uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Our Approach ── */}
      <section className="py-24 px-6 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-400 text-sm uppercase tracking-widest font-semibold mb-3">
              How We Work
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 uppercase tracking-tight">
              Our Approach
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
              We combine technical expertise with business acumen to deliver
              solutions that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="relative bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 group hover:border-yellow-400/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(circle at 0% 100%, rgba(250,204,21,0.07) 0%, transparent 60%)" }}
                />
                <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center mb-5">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>

                {/* bottom accent line */}
                <div className="mt-6 h-px w-0 group-hover:w-full bg-yellow-400/40 transition-all duration-500 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;