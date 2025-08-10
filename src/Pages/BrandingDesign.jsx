import React from 'react';
import { Sparkles, Brush, Layers, Palette } from 'lucide-react';

const features = [
  {
    title: 'Logo & Identity',
    description: 'Crafting unique logos and visual systems that resonate with your brand.',
    icon: <Brush className="w-6 h-6 text-sky-600" />,
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive and beautiful user experiences for web and mobile.',
    icon: <Layers className="w-6 h-6 text-sky-600" />,
  },
  {
    title: 'Packaging & Print',
    description: 'Elegant packaging, brochures, and print designs that tell your story.',
    icon: <Palette className="w-6 h-6 text-sky-600" />,
  },
  {
    title: 'Brand Strategy',
    description: 'Positioning your brand with strategy and consistency across all media.',
    icon: <Sparkles className="w-6 h-6 text-sky-600" />,
  },
];

const BrandingDesign = () => {
  return (
    <div className="bg-[#d5fff7] text-[#23194f] min-h-screen">
      {/* Hero section */}
      <div className="relative bg-gradient-to-br   py-24 px-6 md:px-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Branding & <span className="text-sky-600">Design</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
          Elevate your business identity through creativity, consistency, and clarity.
        </p>
      </div>

      {/* Feature grid */}
      <div className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Core Offerings</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className=" rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 border border-gray-100"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to action */}
      <div className="text-center py-16 px-4 bg-white  border-t border-gray-200">
        <h3 className="text-2xl font-bold mb-4">
          Ready to give your brand the spotlight it deserves?
        </h3>
        <p className="text-gray-600 mb-6">
          Let’s create something beautiful together. From logo design to complete rebranding,
          we’ve got you covered.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-sky-700 text-white hover:bg-sky-900 font-semibold rounded-xl shadow  transition"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default BrandingDesign;
