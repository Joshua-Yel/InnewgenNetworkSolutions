"use client";

import { motion } from "framer-motion";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: "700" });

export default function AboutMe() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-8 py-12">
      {/* Profile Section */}
      <motion.div
        className="flex flex-col items-center text-center space-y-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="/assets/team-leader.png"
          alt="Joshua Tribiana"
          className="w-48 h-48 rounded-full border-4 border-gray-700 shadow-xl"
        />
        <h1 className={`text-5xl font-bold ${orbitron.className}`}>
          Joshua Tribiana
        </h1>
        <p className="text-lg text-gray-400">
          Full Stack Developer | Freelancer | DevOps Enthusiast
        </p>
      </motion.div>

      {/* About Section */}
      <motion.div
        className="mt-12 w-full max-w-4xl bg-gray-900 p-8 rounded-lg border border-gray-700 shadow-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          Need a high-quality, mobile-friendly website, software, or system? I
          am here to help! From planning and wireframing to full-scale
          development, I build modern and efficient digital solutions tailored
          to your needs.
        </p>

        <h2 className="text-2xl font-semibold text-blue-400 mt-6">
          What I Offer
        </h2>
        <ul className="mt-2 space-y-2 text-gray-300">
          <li>✔️ Custom web & mobile development</li>
          <li>✔️ Database integration & API management</li>
          <li>✔️ DevOps solutions & cloud deployment</li>
          <li>✔️ Website performance optimization</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-400 mt-6">Experties</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-3 text-gray-300">
          <span>🔹 Frontend Development</span>
          <span>🔹 Backend Development</span>
          <span>🔹 API Integration</span>
          <span>🔹 UI/UX Design</span>
          <span>🔹 Database Management</span>
          <span>🔹 DevOps</span>
          <span>🔹 Mobile App Development</span>
          <span>🔹 Web Security</span>
          <span>🔹 Performance Optimization</span>
          <span>🔹 Version Control (Git/GitHub)</span>
          <span>🔹 Testing & Debugging</span>
        </div>
      </motion.div>
    </div>
  );
}
