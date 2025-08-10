import React, { useState } from "react";
import { Code, Smartphone, Layout, Cpu } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "ecommercce.webp",
    description: "Full-stack e-commerce solution with React and Node.js",
    icon: <Code className="text-sky-700" size={20} />
  },
  {
    id: 2,
    title: "Fitness Mobile App",
    category: "App Development",
    image: "appdev.webp",
    description: "Cross-platform fitness tracker with React Native",
    icon: <Smartphone className="text-emerald-500" size={20} />
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    category: "Web Design",
    image: "admin.png",
    description: "UI/UX design for analytics dashboard",
    icon: <Layout className="text-violet-500" size={20} />
  },
  {
    id: 4,
    title: "Inventory System",
    category: "Software Development",
    image: "inventory.png",
    description: "Desktop application for warehouse management",
    icon: <Cpu className="text-amber-500" size={20} />
  },
  {
    id: 5,
    title: "CMS Platform",
    category: "Web Development",
    image: "cms.jpeg",
    description: "Custom content management system",
    icon: <Code className="text-sky-700" size={20} />
  },
  {
    id: 6,
    title: "Food Delivery App",
    category: "App Development",
    image: "app.png",
    description: "iOS/Android food ordering application",
    icon: <Smartphone className="text-emerald-500" size={20} />
  }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "Web Development", "App Development", "Web Design", "Software Development"];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#d5fff7] text-[#23194f] p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">Our Tech <span className="text-sky-700">Portfolio</span> </h1>
          <p className="text-[#23194f]/80 max-w-2xl mx-auto">
            Showcasing our expertise in web development, mobile apps, design, and software solutions
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => {
            let icon;
            let color;
            
            switch(category) {
              case "Web Development":
                icon = <Code className="mr-2" size={18} />;
                color = "bg-sky-700";
                break;
              case "App Development":
                icon = <Smartphone className="mr-2" size={18} />;
                color = "bg-emerald-500";
                break;
              case "Web Design":
                icon = <Layout className="mr-2" size={18} />;
                color = "bg-violet-500";
                break;
              case "Software Development":
                icon = <Cpu className="mr-2" size={18} />;
                color = "bg-amber-500";
                break;
              default:
                color = "bg-[#23194f]/10";
            }

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full flex items-center ${activeCategory === category ? `${color} text-white` : 'bg-white text-[#23194f]/80 hover:bg-[#23194f]/5'}`}
              >
                {icon}
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition cursor-pointer border border-[#23194f]/10 hover:border-[#23194f]/20 group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:opacity-90 transition"
                />
                <div className="absolute top-4 left-4 bg-white bg-opacity-90 p-2 rounded-lg shadow-sm">
                  {project.icon}
                </div>
              </div>
              <div className="p-5">
                <span className="text-sm text-[#23194f]/60">{project.category}</span>
                <h3 className="text-xl font-semibold mt-1">{project.title}</h3>
                <p className="text-[#23194f]/80 mt-2">{project.description}</p>
                <button className="mt-4 text-sky-700 hover:text-sky-800 transition flex items-center">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-[#23194f]/90 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#23194f]/20 shadow-2xl">
              <div className="relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <button 
                  className="absolute top-4 right-4 bg-white p-2 rounded-full hover:bg-[#23194f]/5 transition shadow-sm"
                  onClick={() => setSelectedProject(null)}
                >
                  ✕
                </button>
                <div className="absolute bottom-4 left-4 flex items-center">
                  <div className="bg-white bg-opacity-90 p-3 rounded-lg mr-3 shadow-sm">
                    {selectedProject.icon}
                  </div>
                  <div>
                    <span className="text-sm text-[#23194f]/60">{selectedProject.category}</span>
                    <h2 className="text-xl font-bold">{selectedProject.title}</h2>
                  </div>
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold mb-4">Project Overview</h3>
                    <p className="text-[#23194f]/80 mb-6">{selectedProject.description}</p>
                    <div className="bg-[#d5fff7] p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {["React", "Node.js", "MongoDB", "AWS"].map(tech => (
                          <span key={tech} className="bg-white px-3 py-1 rounded-full text-sm shadow-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Project Details</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm text-[#23194f]/60">Client</h4>
                        <p>TechCorp Inc.</p>
                      </div>
                      <div>
                        <h4 className="text-sm text-[#23194f]/60">Duration</h4>
                        <p>6 Months</p>
                      </div>
                      <div>
                        <h4 className="text-sm text-[#23194f]/60">Team Size</h4>
                        <p>5 Developers</p>
                      </div>
                    </div>
                    <button className="mt-6 w-full bg-sky-700 hover:bg-sky-800 text-white py-3 rounded-lg transition">
                      View Case Study
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;