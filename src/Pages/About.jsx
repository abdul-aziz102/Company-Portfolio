import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Users, Globe, Code, Shield } from "lucide-react";
import VisionMissionSlider from "../Components/Inorm";

const AboutUs = () => {
  const stats = [
    { value: "50+", label: "Clients Worldwide" },
    { value: "100+", label: "Projects Completed" },
    { value: "95%", label: "Client Retention" },
  ];

  const services = [
    {
      icon: <Code className="text-sky-700" size={24} />,
      title: "Custom Software",
      description: "Tailored solutions for your unique business needs"
    },
    {
      icon: <Globe className="text-sky-700" size={24} />,
      title: "Web Development",
      description: "High-performance websites and web applications"
    },
    {
      icon: <Shield className="text-sky-700" size={24} />,
      title: "Security First",
      description: "Enterprise-grade security for all our solutions"
    }
  ];

  return (
    <div className="bg-[#d5fff7] text-[#23194f]">
      {/* Hero Section */}
      <>
      <section className="relative bg-gradient-to-b from-[#d5fff7] to-[#b8e8dd] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center text-sm text-[#23194f]/80 mb-4">
            <span>Home</span>
            <ArrowRight className="mx-2" size={14} />
            <span className="text-sky-700">About Us</span>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              YOUR ALL-IN-ONE PLATFORM FOR <br className="hidden md:block" />
              <span className="text-sky-700">LEADING SOFTWARE</span>
            </h1>
            
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                TOP-RATED CUSTOM <br />
                DEVELOPMENT AGENCY
              </h2>
              
              <p className="text-lg text-[#23194f]/80 mb-8">
                At Appeals, we provide high-performance software solutions and
                end-to-end digital transformation services for startups,
                enterprises, and growing businesses. Our expert teams help you
                automate workflows, boost productivity, and scale efficiently with
                cutting-edge technology.
              </p>
              
              <button className="bg-sky-700 text-white font-semibold px-8 py-3 rounded-lg hover:bg-sky-800 transition flex items-center">
                Get Started
                <ArrowRight className="ml-2" size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      <VisionMissionSlider />
</>
      {/* Stats Section */}
      <section className="py-16 px-6 bg-[#d5fff7]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl border border-[#23194f]/20 text-center"
            >
              <h3 className="text-4xl font-bold text-[#23194f] mb-2">{stat.value}</h3>
              <p className="text-[#23194f]/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-6 bg-[#d5fff7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
            <p className="text-[#23194f]/80 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg hover:shadow-lg transition border border-[#23194f]/20 hover:border-sky-700"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#23194f]">{service.title}</h3>
                </div>
                <p className="text-[#23194f]/80">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;