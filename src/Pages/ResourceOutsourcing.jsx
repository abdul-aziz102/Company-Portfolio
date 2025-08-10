import React from 'react';
import { Users, Briefcase, Globe2, Clock10 } from 'lucide-react';

const outsourcingFeatures = [
  {
    title: 'Expert Talent',
    description: 'Access a pool of certified developers, designers, and project managers for your projects.',
    icon: <Users className="w-6 h-6 text-[#23194f]" />,
  },
  {
    title: 'Flexible Hiring',
    description: 'Choose between full-time, part-time, or hourly models based on your business needs.',
    icon: <Briefcase className="w-6 h-6 text-[#23194f]" />,
  },
  {
    title: 'Global Reach',
    description: 'Our professionals work remotely from multiple time zones to support your goals 24/7.',
    icon: <Globe2 className="w-6 h-6 text-[#23194f]" />,
  },
  {
    title: 'Time Efficiency',
    description: 'Save hiring time and reduce onboarding friction with our quick resource allocation.',
    icon: <Clock10 className="w-6 h-6 text-[#23194f]" />,
  },
];

const ResourceOutsourcing = () => {
  return (
    <div className="bg-[#ddfef8] text-[#23194f] min-h-screen">
      {/* Hero Section */}
      <div className="text-center py-20 px-4 md:px-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Resource <span className="text-sky-700">Outsourcing</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-[#3e326f]">
          Scale your team with skilled professionals — quickly, efficiently, and on your terms.
        </p>
      </div>

      {/* Features Section */}
      <div className="px-4 md:px-16 pb-20 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Why Choose Our Outsourcing Services?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {outsourcingFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white text-[#23194f] border border-[#c0eae2] p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-[#4c3b80]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-16 bg-white border-t border-[#cdeae4]">
        <h3 className="text-2xl font-bold mb-4">Need reliable resources for your project?</h3>
        <p className="text-[#4c3b80] mb-6">Let us help you build a world-class team, quickly and efficiently.</p>
        <a
          href="/contact"
          className="inline-block bg-sky-700 text-white px-6 py-3 rounded-full font-medium hover:bg-[#1c1640] transition"
        >
          Request Talent
        </a>
      </div>
    </div>
  );
};

export default ResourceOutsourcing;
