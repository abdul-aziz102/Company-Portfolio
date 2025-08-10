import React from 'react';
import { Code, MonitorSmartphone, Database, Globe } from 'lucide-react';

const features = [
  {
    icon: <Code className="w-6 h-6 text-[#23194f]" />,
    title: "Custom Code",
    desc: "Tailored front-end and back-end solutions with modern frameworks.",
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6 text-[#23194f]" />,
    title: "Responsive Design",
    desc: "Seamless experiences across mobile, tablet, and desktop devices.",
  },
  {
    icon: <Database className="w-6 h-6 text-[#23194f]" />,
    title: "Database Integration",
    desc: "Secure, scalable databases for managing your business logic.",
  },
  {
    icon: <Globe className="w-6 h-6 text-[#23194f]" />,
    title: "SEO & Performance",
    desc: "Optimized for speed, SEO, and user engagement from the ground up.",
  },
];

const WebDevelopment = () => {
  return (
    <div className="bg-[#ddfef8] text-[#23194f] min-h-screen">
      {/* Hero Section */}
      <div className="text-center py-20 px-4 md:px-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Web <span className="text-sky-700 ">Development</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-[#3e326f]">
          Build fast, secure, and scalable websites tailored for your business success.
        </p>
      </div>

      {/* Features */}
      <div className="px-4 md:px-16 pb-20 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Our Development Services
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white text-[#23194f] border border-[#c0eae2] p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-[#4c3b80]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-16 bg-white border-t border-[#cdeae4]">
        <h3 className="text-2xl font-bold mb-4">Start your web project with us today</h3>
        <p className="text-[#4c3b80] mb-6">From landing pages to full-stack apps — we build it all.</p>
        <a
          href="/contact"
          className="inline-block bg-sky-700 text-white hover:bg-sky-900 px-6 py-3 rounded-full font-medium  transition"
        >
          Get a Free Quote
        </a>
      </div>
    </div>
  );
};

export default WebDevelopment;
