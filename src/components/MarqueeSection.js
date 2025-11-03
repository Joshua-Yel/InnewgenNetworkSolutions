import React from "react";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: "500" });

const techStack = [
  "World",
  "UX/UI",
  "DevOps",
  "Website",
  "PHP",
  "Python",
  "AI",
  "C",
];

const MarqueeSection = () => {
  return (
    <section className="relative overflow-hidden py-5 bg-[#0a0a0a]">
      {/* Main content container */}
      <div
        className="flex flex-col items-center text-center animate-fadeInUp"
        style={{ animationDelay: "0.4s" }}
      >
        {/* "Powering Solutions With" text */}
        <p className="text-xl sm:text-1xl lg:text-2xl text-slate-500 mb-6 font-regular tracking-wider uppercase">
          Powering Solutions With
        </p>

        {/* Tech stack marquee */}
        <div className="relative overflow-hidden py-4 w-full">
          <div className="flex animate-marquee gap-8 justify-center">
            {[...techStack, ...techStack, ...techStack].map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-6 py-2 bg-slate-800/30 border border-slate-700/30 rounded-lg backdrop-blur-sm hover:border-[#0f52ba]/30 transition-colors duration-300"
              >
                <span className="text-slate-300 font-semibold whitespace-nowrap">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom keyframe for marquee animation */}
      <style jsx>{`
        .animate-marquee {
          animation: marquee 15s linear infinite;
          width: max-content;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33%);
          }
        }
      `}</style>
    </section>
  );
};

export default MarqueeSection;
