"use client";

import { motion } from "framer-motion";

export default function Teams() {
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

      {/* Team Leader */}
      <motion.div
        className="relative flex flex-col items-center bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-8 border border-white/20 mb-12"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="/assets/team-leader.png"
          alt="Team Leader"
          className="w-36 h-36 rounded-full border-4 border-[#0f52ba] shadow-lg"
        />
        <h2 className="text-2xl font-semibold mt-4">Joshua Tribiana</h2>
        {/* <p className="text-[#ff4500] font-medium">CEO</p> */}
      </motion.div>

      {/* Team Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[
          {
            id: 1,
            name: "Mark Barican",
            img: "/assets/team-member-1.jpg",
            role: "Lead Developer",
          },
          {
            id: 2,
            name: "Clyde Ador",
            img: "/assets/team-member-2.jpg",
            role: "Lead Developer",
          },
          {
            id: 3,
            name: "Denmor Villanueva",
            img: "/assets/team-member-3.jpg",
            role: "Project Manager",
          },
        ].map((member, index) => (
          <motion.div
            key={member.id}
            className="relative flex flex-col items-center bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 border border-white/20 transform transition-all duration-300 hover:scale-105 hover:border-[#0f52ba]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
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
    </div>
  );
}
