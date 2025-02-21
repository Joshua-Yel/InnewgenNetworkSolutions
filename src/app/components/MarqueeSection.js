import React from "react";
import { Orbitron } from "next/font/google"; // Importing Techno Font

const orbitron = Orbitron({ subsets: ["latin"], weight: "500" });

const MarqueeSection = () => {
  return (
    <section className="relative overflow-hidden py-10 bg-[#0a0a0a]">
      <div className="container relative mx-auto">
        <div className="marqueeWrapper flex overflow-hidden whitespace-nowrap">
          <div className="marquee flex space-x-10 animate-marquee ">
            <span
              className={`text-4xl tracking-widest outline-text ${orbitron.className}`}
            >
              * PHP
            </span>
            <span
              className={`text-4xl tracking-widest outline-text ${orbitron.className}`}
            >
              * Python
            </span>
            <span
              className={`text-4xl tracking-widest outline-text ${orbitron.className}`}
            >
              * AI
            </span>
            <span
              className={`text-4xl tracking-widest outline-text ${orbitron.className}`}
            >
              * Design
            </span>
            <span
              className={`text-4xl tracking-widest outline-text ${orbitron.className}`}
            >
              * Development
            </span>
            <span
              className={`text-4xl tracking-widest outline-text ${orbitron.className}`}
            >
              * System
            </span>
            <span
              className={`text-4xl tracking-widest outline-text ${orbitron.className}`}
            >
              * AI
            </span>
            <span
              className={`text-4xl tracking-widest outline-text ${orbitron.className}`}
            >
              * World
            </span>
            <span
              className={`text-4xl tracking-widest outline-text ${orbitron.className}`}
            >
              * UX/UI
            </span>
            <span
              className={`text-4xl tracking-widest outline-text ${orbitron.className}`}
            >
              * DevOps
            </span>
            <span
              className={`text-4xl tracking-widest outline-text ${orbitron.className}`}
            >
              * Website
            </span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .outline-text {
          color: transparent;
          -webkit-text-stroke: 1px #ffffff; /* White outlined text */
        }
        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default MarqueeSection;
