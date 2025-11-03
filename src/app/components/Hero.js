"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [currentWord, setCurrentWord] = useState(0);
  const [particles, setParticles] = useState([]);

  const words = ["Innovative", "Scalable", "Powerful", "Modern"];
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
  useEffect(() => {
    const generated = Array.from({ length: 30 }).map((_, i) => ({
      color: i % 2 === 0 ? "rgba(15, 82, 186, 0.5)" : "rgba(255, 69, 0, 0.5)",
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${8 + Math.random() * 12}s`,
    }));

    setParticles(generated);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(wordInterval);
    };
  }, [words.length]);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center">
      {/* Interactive gradient orbs - Using brand colors */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full blur-[180px] opacity-20 transition-all duration-1000 ease-out pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(15, 82, 186, 0.6) 0%, transparent 70%)",
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[150px] opacity-15 transition-all duration-1000 ease-out pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 69, 0, 0.6) 0%, transparent 70%)",
          left: `${100 - mousePosition.x}%`,
          top: `${100 - mousePosition.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Animated grid background - Sapphire blue tint */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,82,186,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,82,186,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)]" />

      {/* Floating particles - Brand colored */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 rounded-full animate-float"
            style={{
              background: p.color,
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full py-20">
        {/* Top badge - INNEWGEN branding with sapphire blue */}
        <div className="flex justify-center mb-5 animate-fadeIn">
          <div className="inline-flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#0f52ba]/90 bg-[#0f52ba]/5 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-[#ff4500] animate-pulse" />
              <span className="text-sm font-black text-[#ff4500] tracking-[0.3em]">
                INNEWGEN
              </span>
            </div>
            <p className="text-[#0f52ba] text-sm font-semibold tracking-widest">
              SOFTWARE SOLUTIONS
            </p>
          </div>
        </div>

        <div className="text-center max-w-6xl mx-auto">
          {/* Rotating Word Headline */}
          <div className="mb-8 animate-fadeInUp">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95]">
              <span className="block text-white mb-4">We Build</span>
              <span className="block  relative h-[1.2em] overflow-hidden  text-center">
                <span className="block relative h-[1.2em] overflow-hidden text-center">
                  <span
                    key={currentWord}
                    className={`w-full animate-slideUp font-black ${
                      [0, 2].includes(currentWord)
                        ? "text-[#0f52ba]" // blue for Innovative & Powerful
                        : "text-[#ff4500]" // orange for Scalable & Modern
                    }`}
                  >
                    {words[currentWord]}
                  </span>
                </span>
              </span>
              <span className="block text-white mt-4">Solutions</span>
            </h1>
          </div>

          {/* Subheading */}
          <p
            className="text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed max-w-3xl mx-auto animate-fadeInUp font-light"
            style={{ animationDelay: "0.2s" }}
          >
            Building solutions that actually works for your business
          </p>

          {/* CTA button */}
          <div
            className="flex justify-center mb-20 animate-fadeInUp"
            style={{ animationDelay: "0.3s" }}
          >
            <button className="group relative px-10 py-5 bg-gradient-to-r from-[#0f52ba] to-[#1a5ec4] text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#0f52ba]/40">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a5ec4] to-[#2d6fd8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-3">
                Let's Talk
                <ArrowRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Scroll indicator with brand color */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-slate-700 flex justify-center p-2">
              <div className="w-1 h-3 bg-[#0f52ba] rounded-full animate-scroll" />
            </div>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          10% {
            transform: translateY(0);
            opacity: 1;
          }
          90% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-100%);
            opacity: 0;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-100px) translateX(50px);
            opacity: 0.8;
          }
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }

        @keyframes scroll {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out backwards;
        }

        .animate-slideUp {
          animation: slideUp 3s ease-in-out;
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
      `,
        }}
      />
    </section>
  );
};

export default HeroSection;
