import React from "react";
import { motion } from "framer-motion";
import { Server, Smartphone, BarChart2, Cpu, Users, Code } from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      icon: <Server className="text-sky-700" size={32} />,
      title: "Hosting & Design",
      description: "Protect your business with expert branding, marketing and social guidance. We create strong, environmentally conscious digital presences.",
      highlights: ["Brand Identity", "Web Hosting", "UI/UX Design", "Environmental Compliance"]
    },
    {
      icon: <Smartphone className="text-sky-700" size={32} />,
      title: "Mobility Development",
      description: "Our digital professionals develop cutting-edge solutions to enhance customer capabilities with improved search quality and performance.",
      highlights: ["Cross-Platform Apps", "Performance Optimization", "Search Integration"]
    },
    {
      icon: <BarChart2 className="text-sky-700" size={32} />,
      title: "SCO Digital Marketing",
      description: "Tailored digital marketing solutions featuring continuous services and leadership in media strategy for online audiences.",
      highlights: ["SEO Strategy", "Content Marketing", "Social Media Management"]
    },
    {
      icon: <Code className="text-sky-700" size={32} />,
      title: "Mobile App Development",
      description: "Seamless user experiences with feedback-driven development. Custom apps for teams, employees, and business growth.",
      highlights: ["iOS/Android", "User Testing", "Enterprise Solutions"]
    },
    {
      icon: <Cpu className="text-sky-700" size={32} />,
      title: "DevOps",
      description: "Efficiency improvements with wireless technology facilitate automation and agile performance for seamless business integration.",
      highlights: ["CI/CD Pipelines", "Cloud Infrastructure", "Automation"]
    },
    {
      icon: <Users className="text-sky-700" size={32} />,
      title: "Resource Outsourcing",
      description: "Accelerate innovative projects with operational support that ensures timely delivery through our network of specialists.",
      highlights: ["Team Augmentation", "Project Management", "Quality Assurance"]
    }
  ];

  return (
    <div className="bg-[#d5fff7] text-[#23194f]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#d5fff7] to-[#b8e8dd] py-28 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              OUR <span className="text-sky-700">SERVICES</span>
            </h1>
            <p className="text-xl text-[#23194f]/80 max-w-3xl mx-auto">
              Comprehensive solutions designed to elevate your digital presence and operational efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-[#d5fff7]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl border border-[#23194f]/10 hover:border-sky-700 transition-all hover:shadow-lg"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-[#d5fff7] rounded-lg flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-[#23194f]/80 mb-4">{service.description}</p>
                  </div>
                  <div className="mt-auto">
                    <ul className="space-y-2">
                      {service.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center text-[#23194f]/80">
                          <span className="w-1.5 h-1.5 bg-sky-700 rounded-full mr-2"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              WE'RE <span className="text-sky-700">COMMITTED</span> TO DELIVER HIGH
            </h2>
            <p className="text-xl text-[#23194f]/80 mb-10">
              Our 2020 procedures ensure better development processes and exceptional results for every client.
            </p>
            <a 
              href="https://sole.boy.com/oury-2020-procedures-your-better-development/" 
              className="text-sky-700 hover:text-sky-800 inline-flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn about our procedures
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;