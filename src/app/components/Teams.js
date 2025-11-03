"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: "700" });

const teamMembers = [
  {
    id: 1,
    name: "Joshua Tribiana",
    img: "/assets/team-leader.png",
    role: "CEO | Full Stack Developer",
    about:
      "Need a high-quality, mobile-friendly website, software, or system? I am here to help! From planning and wireframing to full-scale development, I build modern and efficient digital solutions tailored to your needs.",
    expertise: [
      "Frontend Development",
      "Backend Development",
      "API Integration",
      "UI/UX Design",
      "Database Management",
      "DevOps",
      "Mobile App Development",
      "Web Security",
      "Performance Optimization",
      "Version Control (Git/GitHub)",
      "Testing & Debugging",
    ],
  },
  {
    id: 2,
    name: "Mark Barican",
    img: "/assets/team-member-1.jpg",
    role: "Lead Developer",
    about:
      "An experienced developer with expertise in building scalable applications and optimizing system performance.",
    expertise: [
      "React.js",
      "Node.js",
      "Microservices",
      "Performance Optimization",
    ],
  },
  {
    id: 3,
    name: "Clyde Ador",
    img: "/assets/team-member-2.jpg",
    role: "Lead Developer",
    about:
      "Passionate about creating efficient backend systems and seamless integrations with cloud solutions.",
    expertise: ["Django", "AWS", "API Development", "System Architecture"],
  },
  {
    id: 4,
    name: "Denmor Villanueva",
    img: "/assets/team-member-3.jpg",
    role: "Project Manager",
    about:
      "Experienced in project planning, team coordination, and ensuring seamless execution of tech projects.",
    expertise: [
      "Agile Methodology",
      "Scrum",
      "Team Leadership",
      "Project Planning",
    ],
  },
];

export default function Teams() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0a0a] text-white p-8">
      {/* Title */}
      <motion.h1
        className="text-4xl font-extrabold tracking-wider uppercase mb-8 text-center sm:text-3xl xs:text-2xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Meet Our Team
      </motion.h1>

      {/* Team Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            className="relative flex flex-col items-center bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 border border-white/20 transform transition-all duration-300 hover:scale-105 hover:border-[#0f52ba] cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            onClick={() => setSelectedMember(member)}
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-28 h-28 rounded-full border-4 border-[#ff4500] shadow-lg"
            />
            <h2 className="text-xl font-semibold mt-4 text-center">
              {member.name}
            </h2>
            <p className="text-gray-400 text-center">{member.role}</p>
          </motion.div>
        ))}
      </div>

      {/* Profile Modal */}
      {selectedMember && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center p-6 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-gray-900 p-8 rounded-lg border border-gray-700 shadow-2xl max-w-3xl w-full text-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={selectedMember.img}
              alt={selectedMember.name}
              className="w-36 h-36 rounded-full border-4 border-gray-700 shadow-xl mx-auto"
            />
            <h1 className={`text-3xl font-bold mt-4 ${orbitron.className}`}>
              {selectedMember.name}
            </h1>
            <p className="text-lg text-gray-400">{selectedMember.role}</p>

            <h2 className="text-2xl font-semibold text-blue-400 mt-6">About</h2>
            <p className="text-gray-300 leading-relaxed">
              {selectedMember.about}
            </p>

            <h2 className="text-2xl font-semibold text-blue-400 mt-6">
              Expertise
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-3 text-gray-300">
              {selectedMember.expertise.map((skill, i) => (
                <span key={i}>🔹 {skill}</span>
              ))}
            </div>

            <button
              className="mt-6 px-6 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition"
              onClick={() => setSelectedMember(null)}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
