import React from "react";
import { motion } from "framer-motion";
import { Server, Smartphone, BarChart2, Cpu, Users, Code, ArrowRight } from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      icon: <Server className="text-yellow-400" size={28} />,
      title: "Hosting & Design",
      description: "Protect your business with expert branding, marketing and social guidance. We create strong, environmentally conscious digital presences.",
      highlights: ["Brand Identity", "Web Hosting", "UI/UX Design", "Environmental Compliance"]
    },
    {
      icon: <Smartphone className="text-yellow-400" size={28} />,
      title: "Mobility Development",
      description: "Our digital professionals develop cutting-edge solutions to enhance customer capabilities with improved search quality and performance.",
      highlights: ["Cross-Platform Apps", "Performance Optimization", "Search Integration"]
    },
    {
      icon: <BarChart2 className="text-yellow-400" size={28} />,
      title: "SCO Digital Marketing",
      description: "Tailored digital marketing solutions featuring continuous services and leadership in media strategy for online audiences.",
      highlights: ["SEO Strategy", "Content Marketing", "Social Media Management"]
    },
    {
      icon: <Code className="text-yellow-400" size={28} />,
      title: "Mobile App Development",
      description: "Seamless user experiences with feedback-driven development. Custom apps for teams, employees, and business growth.",
      highlights: ["iOS/Android", "User Testing", "Enterprise Solutions"]
    },
    {
      icon: <Cpu className="text-yellow-400" size={28} />,
      title: "DevOps",
      description: "Efficiency improvements with wireless technology facilitate automation and agile performance for seamless business integration.",
      highlights: ["CI/CD Pipelines", "Cloud Infrastructure", "Automation"]
    },
    {
      icon: <Users className="text-yellow-400" size={28} />,
      title: "Resource Outsourcing",
      description: "Accelerate innovative projects with operational support that ensures timely delivery through our network of specialists.",
      highlights: ["Team Augmentation", "Project Management", "Quality Assurance"]
    }
  ];

  return (
    <div className="bg-[#0d0d0d] text-white font-sans">

      {/* ── Hero Section ── */}
      <section className="relative py-28 px-6 overflow-hidden">
        {/* subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* yellow glow top center */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(250,204,21,0.08) 0%, transparent 70%)" }}
        />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-yellow-400 text-sm uppercase tracking-widest font-semibold mb-4">
              What We Offer
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight mb-6">
              OUR <span className="text-yellow-400">SERVICES</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Comprehensive solutions designed to elevate your digital presence and operational efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-20 px-6 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 flex flex-col group hover:border-yellow-400/50 transition-all duration-300 overflow-hidden"
              >
                {/* hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(circle at 0% 100%, rgba(250,204,21,0.07) 0%, transparent 60%)" }}
                />

                <div className="mb-6 relative z-10">
                  <div className="w-14 h-14 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-5">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>

                <div className="mt-auto relative z-10">
                  <ul className="space-y-2">
                    {service.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center text-gray-400 text-sm">
                        <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2 flex-shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* bottom accent line */}
                <div className="mt-6 h-px w-0 group-hover:w-full bg-yellow-400/40 transition-all duration-500 rounded-full relative z-10" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Commitment Section ── */}
      <section className="py-24 px-6 bg-[#0d0d0d] relative overflow-hidden">
        {/* background glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(250,204,21,0.05) 0%, transparent 70%)" }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-yellow-400 text-sm uppercase tracking-widest font-semibold mb-4">
              Our Promise
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight mb-6">
              WE'RE <span className="text-yellow-400">COMMITTED</span> TO DELIVER HIGH
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Our 2020 procedures ensure better development processes and exceptional results for every client.
            </p>
            <motion.a
              href="https://sole.boy.com/oury-2020-procedures-your-better-development/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-yellow-400 text-black font-bold px-8 py-3 rounded-lg hover:bg-yellow-300 transition-colors shadow-lg shadow-yellow-400/20"
            >
              Learn about our procedures
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;