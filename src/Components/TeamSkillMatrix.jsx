import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TeamSkillMatrix = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Lead Developer",
      skills: [
        { name: "React", level: 95 },
        { name: "Node.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "GraphQL", level: 80 },
        { name: "AWS", level: 75 }
      ],
      image: "/team/alex.jpg"
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "UI/UX Designer",
      skills: [
        { name: "Figma", level: 98 },
        { name: "User Research", level: 95 },
        { name: "Prototyping", level: 90 },
        { name: "Illustration", level: 85 },
        { name: "CSS/SCSS", level: 80 }
      ],
      image: "/team/sarah.jpg"
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      role: "DevOps Engineer",
      skills: [
        { name: "Docker", level: 97 },
        { name: "Kubernetes", level: 95 },
        { name: "CI/CD", level: 90 },
        { name: "Terraform", level: 85 },
        { name: "Monitoring", level: 80 }
      ],
      image: "/team/michael.jpg"
    }
  ];

  const [selectedMember, setSelectedMember] = useState(teamMembers[0]);
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <section className="bg-[#d5fff7] text-[#23194f] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          TEAM <span className="text-sky-700">EXPERTISE</span>
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-12">
          Our team's skills and capabilities at a glance
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Team Member Selector */}
          <div className="space-y-4">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                whileHover={{ x: 5 }}
                onClick={() => {
                  setSelectedMember(member);
                  setActiveSkill(null);
                }}
                className={`flex items-center p-4 rounded-xl cursor-pointer transition ${
                  selectedMember.id === member.id
                    ? 'bg-[#23194f] text-white shadow-lg'
                    : 'bg-white hover:bg-gray-100'
                }`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-bold">{member.name}</div>
                  <div className={`text-sm ${
                    selectedMember.id === member.id ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {member.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skill Visualization */}
          <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center mb-8">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="text-2xl font-bold">{selectedMember.name}</h3>
                <p className="text-sky-700">{selectedMember.role}</p>
              </div>
            </div>

            <div className="space-y-6">
              {selectedMember.skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div 
                    className="h-3 bg-gray-200 rounded-full overflow-hidden cursor-pointer"
                    onClick={() => setActiveSkill(activeSkill === index ? null : index)}
                  >
                    <motion.div
                      className={`h-full ${
                        activeSkill === index ? 'bg-gradient-to-r from-sky-600 to-blue-800' : 'bg-sky-700'
                      }`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>

                  <AnimatePresence>
                    {activeSkill === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2 text-sm text-gray-600"
                      >
                        {getSkillDescription(skill.name, skill.level)}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function getSkillDescription(skillName, level) {
  const descriptions = {
    "React": `${level}% proficiency in React including hooks, context API, and performance optimization`,
    "Node.js": `${level}% expertise in building scalable backend services with Node.js`,
    "Figma": `${level}% mastery in Figma for UI design, prototyping, and design systems`,
    "Docker": `${level}% knowledge in containerization and Docker orchestration`
  };
  
  return descriptions[skillName] || `${level}% proficiency in ${skillName}`;
}

export default TeamSkillMatrix;