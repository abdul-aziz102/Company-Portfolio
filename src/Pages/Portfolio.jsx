import React, { useState } from "react";
import { Code, Smartphone, Layout, Cpu, ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "ecommercce.webp",
    description: "Full-stack e-commerce solution with React and Node.js",
    icon: <Code size={18} />,
    accent: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    id: 2,
    title: "Fitness Mobile App",
    category: "App Development",
    image: "appdev.webp",
    description: "Cross-platform fitness tracker with React Native",
    icon: <Smartphone size={18} />,
    accent: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    category: "Web Design",
    image: "admin.png",
    description: "UI/UX design for analytics dashboard",
    icon: <Layout size={18} />,
    accent: "text-violet-400",
    bg: "bg-violet-400/10",
  },
  {
    id: 4,
    title: "Inventory System",
    category: "Software Development",
    image: "inventory.png",
    description: "Desktop application for warehouse management",
    icon: <Cpu size={18} />,
    accent: "text-amber-400",
    bg: "bg-amber-400/10",
  },
  {
    id: 5,
    title: "CMS Platform",
    category: "Web Development",
    image: "cms.jpeg",
    description: "Custom content management system",
    icon: <Code size={18} />,
    accent: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    id: 6,
    title: "Food Delivery App",
    category: "App Development",
    image: "app.png",
    description: "iOS/Android food ordering application",
    icon: <Smartphone size={18} />,
    accent: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
];

const categoryMeta = {
  All: { icon: null, color: "border-yellow-400 text-yellow-400" },
  "Web Development": { icon: <Code size={15} />, color: "border-yellow-400 text-yellow-400" },
  "App Development": { icon: <Smartphone size={15} />, color: "border-emerald-400 text-emerald-400" },
  "Web Design": { icon: <Layout size={15} />, color: "border-violet-400 text-violet-400" },
  "Software Development": { icon: <Cpu size={15} />, color: "border-amber-400 text-amber-400" },
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = Object.keys(categoryMeta);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans">
      {/* subtle grid */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-yellow-400 text-sm uppercase tracking-widest font-semibold mb-3">
            Our Work
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight mb-4">
            Our Tech <span className="text-yellow-400">Portfolio</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
            Showcasing our expertise in web development, mobile apps, design, and software solutions
          </p>
        </motion.div>

        {/* ── Category Filters ── */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => {
            const meta = categoryMeta[cat];
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full flex items-center gap-2 text-sm font-semibold border transition-all duration-200
                  ${isActive
                    ? `${meta.color} bg-white/5 border-current`
                    : "border-white/10 text-gray-400 hover:border-white/30 hover:text-white bg-transparent"
                  }`}
              >
                {meta.icon}
                {cat}
              </button>
            );
          })}
        </div>

        {/* ── Projects Grid ── */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className="relative bg-[#1a1a1a] border border-white/10 rounded-2xl overflow-hidden cursor-pointer group hover:border-yellow-400/40 transition-all duration-300"
              >
                {/* image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  {/* icon badge */}
                  <div className={`absolute top-3 left-3 ${project.bg} backdrop-blur-sm p-2 rounded-xl`}>
                    <span className={project.accent}>{project.icon}</span>
                  </div>
                </div>

                {/* content */}
                <div className="p-6">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-lg font-bold mt-1 mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>

                  <div className={`mt-4 flex items-center gap-1 text-sm font-semibold ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    View Details <ArrowRight size={14} />
                  </div>
                </div>

                {/* bottom line */}
                <div className="h-px w-0 group-hover:w-full bg-yellow-400/30 transition-all duration-500 mx-6 rounded-full mb-1" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ── Modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#161616] border border-white/10 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* modal image */}
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 md:h-80 object-cover opacity-80 rounded-t-2xl"
                />
                {/* close btn */}
                <button
                  className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition"
                  onClick={() => setSelectedProject(null)}
                >
                  <X size={16} />
                </button>
                {/* title overlay */}
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className={`${selectedProject.bg} p-3 rounded-xl backdrop-blur-sm`}>
                    <span className={selectedProject.accent}>{selectedProject.icon}</span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 uppercase tracking-wider">{selectedProject.category}</span>
                    <h2 className="text-xl font-bold text-white">{selectedProject.title}</h2>
                  </div>
                </div>
              </div>

              {/* modal body */}
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold mb-3 text-white">Project Overview</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">{selectedProject.description}</p>
                    <div className="bg-[#1a1a1a] border border-white/10 p-5 rounded-xl">
                      <h4 className="font-semibold mb-3 text-gray-300 text-sm uppercase tracking-wider">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {["React", "Node.js", "MongoDB", "AWS"].map((tech) => (
                          <span key={tech} className="bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 px-3 py-1 rounded-full text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white">Project Details</h3>
                    <div className="space-y-4">
                      {[
                        { label: "Client", value: "TechCorp Inc." },
                        { label: "Duration", value: "6 Months" },
                        { label: "Team Size", value: "5 Developers" },
                      ].map(({ label, value }) => (
                        <div key={label} className="border-b border-white/5 pb-4">
                          <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-1">{label}</h4>
                          <p className="text-white font-medium">{value}</p>
                        </div>
                      ))}
                    </div>
                    <button className="mt-6 w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
                      View Case Study
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;