import React from 'react';
import { motion } from 'framer-motion';

const ProcessTimeline = () => {
  const processSteps = [
    {
      id: 1,
      title: "Discovery",
      description: "We start by understanding your business goals, target audience, and project requirements through detailed consultations.",
      icon: "🔍"
    },
    {
      id: 2,
      title: "Planning",
      description: "Our team creates a comprehensive project plan with milestones, deliverables, and timelines tailored to your needs.",
      icon: "📝"
    },
    {
      id: 3,
      title: "Design",
      description: "We craft intuitive user interfaces and experiences that align with your brand and engage your audience.",
      icon: "🎨"
    },
    {
      id: 4,
      title: "Development",
      description: "Our developers build robust, scalable solutions using the latest technologies and best practices.",
      icon: "💻"
    },
    {
      id: 5,
      title: "Testing",
      description: "We rigorously test all components to ensure quality, performance, and security before launch.",
      icon: "🧪"
    },
    {
      id: 6,
      title: "Launch & Support",
      description: "We deploy your solution and provide ongoing support to ensure continued success and growth.",
      icon: "🚀"
    }
  ];

  return (
    <section className="bg-[#d5fff7] text-[#23194f] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">OUR <span className="text-sky-700">PROCESS</span></h2>
        <p className="text-center max-w-2xl mx-auto mb-12">
          A structured approach to delivering exceptional results
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 h-full w-1 bg-[#23194f] bg-opacity-20 transform -translate-x-1/2 hidden md:block"></div>
          
          {/* Process steps */}
          <div className="space-y-12 md:space-y-24">
            {processSteps.map((step, index) => (
              <ProcessStep 
                key={step.id} 
                step={step} 
                index={index} 
                totalSteps={processSteps.length} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessStep = ({ step, index, totalSteps }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Desktop circle */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-sky-700 items-center justify-center text-white font-bold z-10">
        {step.id}
      </div>
      
      {/* Mobile circle */}
      <div className="md:hidden w-8 h-8 rounded-full bg-sky-700 flex items-center justify-center text-white font-bold mb-4">
        {step.id}
      </div>
      
      {/* Content */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className={`bg-white p-6 rounded-xl shadow-md md:w-5/12 ${isEven ? 'md:mr-8' : 'md:ml-8'}`}
      >
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-3">{step.icon}</span>
          <h3 className="text-xl font-bold text-[#23194f]">{step.title}</h3>
        </div>
        <p className="text-gray-600">{step.description}</p>
        
        {/* Progress for last step */}
        {index === totalSteps - 1 && (
          <div className="mt-6">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-sky-700 h-2.5 rounded-full"
              />
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-500">
              <span>Start</span>
              <span>Project Completed!</span>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProcessTimeline;