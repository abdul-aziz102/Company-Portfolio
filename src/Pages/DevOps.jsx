import React from 'react';
import { Server, Settings, ShieldCheck, RefreshCcw } from 'lucide-react';

const DevOps = [
  {
    title: 'CI/CD Pipeline',
    description: 'Automate your software delivery with continuous integration and deployment pipelines.',
    icon: <RefreshCcw className="w-6 h-6 text-blue-600" />,
  },
  {
    title: 'Infrastructure as Code',
    description: 'Provision and manage infrastructure using code with tools like Terraform and Ansible.',
    icon: <Settings className="w-6 h-6 text-blue-600" />,
  },
  {
    title: 'Server Monitoring',
    description: 'Track performance, logs, and uptime using tools like Prometheus, Grafana, and ELK.',
    icon: <Server className="w-6 h-6 text-blue-600" />,
  },
  {
    title: 'Security & Compliance',
    description: 'Implement best practices for security, backups, and data compliance.',
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
  },
];

const Devops = () => {
  return (
    <div className="bg-[#ddfef8] text-[#1e293b] min-h-screen">
      {/* Hero Section */}
      <div className="py-20 px-6 md:px-16 text-center bg-gradient-to-r ">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          DevOps <span className="text-sky-700">Solutions</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
          Speed up deployment cycles, increase reliability, and scale efficiently with our DevOps expertise.
        </p>
      </div>

      {/* Services Grid */}
      <div className="py-16 px-6 md:px-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our DevOps Capabilities</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {devopsServices.map((service, index) => (
            <div
              key={index}
              className=" border border-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-16 px-4 bg-white border-t border-gray-200">
        <h3 className="text-2xl font-bold mb-4">
          Ready to streamline your development pipeline?
        </h3>
        <p className="text-gray-600 mb-6">
          Let us handle your infrastructure so you can focus on building great products.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-sky-700 text-white hover:bg-sky-900 font-semibold rounded-xl shadow   transition"
        >
          Schedule a Consultation
        </a>
      </div>
    </div>
  );
};

export default Devops;
