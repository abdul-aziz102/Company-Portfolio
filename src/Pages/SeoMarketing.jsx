import React from 'react';
import { Search, BarChart2, TrendingUp, Globe } from 'lucide-react';

const seoBenefits = [
  {
    title: "Keyword Research",
    description: "We analyze and target high-performing keywords to bring relevant traffic to your site.",
    icon: <Search className="w-6 h-6 text-[#23194f]" />,
  },
  {
    title: "On-Page Optimization",
    description: "Optimize your content, meta tags, headings, and internal links for better rankings.",
    icon: <BarChart2 className="w-6 h-6 text-[#23194f]" />,
  },
  {
    title: "Traffic Growth",
    description: "Watch your organic traffic increase with our consistent SEO strategy and audits.",
    icon: <TrendingUp className="w-6 h-6 text-[#23194f]" />,
  },
  {
    title: "Global Visibility",
    description: "Improve your search presence locally and internationally with our multilingual SEO.",
    icon: <Globe className="w-6 h-6 text-[#23194f]" />,
  },
];

const SeoMarketing = () => {
  return (
    <div className="bg-[#ddfef8] text-[#23194f] min-h-screen">
      {/* Hero Section */}
      <div className="text-center py-20 px-4 md:px-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          SEO <span className="text-sky-700">Marketing</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-[#3e326f]">
          Drive organic traffic and dominate search engines with our proven SEO strategies.
        </p>
      </div>

      {/* Features Section */}
      <div className="px-4 md:px-16 pb-20 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Our SEO Approach
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {seoBenefits.map((item, index) => (
            <div
              key={index}
              className="bg-white text-[#23194f] border border-[#c0eae2] p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-[#4c3b80]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-16 bg-white border-t border-[#cdeae4]">
        <h3 className="text-2xl font-bold mb-4">Want your business on Google’s first page?</h3>
        <p className="text-[#4c3b80] mb-6">Let’s boost your visibility and turn traffic into real leads.</p>
        <a
          href="/contact"
          className="inline-block bg-sky-700 text-white hover:bg-sky-900 px-6 py-3 rounded-full font-medium  transition"
        >
          Get Free SEO Audit
        </a>
      </div>
    </div>
  );
};

export default SeoMarketing;
