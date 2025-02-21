"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        controls.start({ opacity: 0, y: -50, transition: { duration: 0.8 } });
      } else {
        controls.start({ opacity: 1, y: 0 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.div
      className="w-full h-screen bg-neutral-1000 flex flex-col justify-center items-center relative overflow-hidden px-4"
      animate={controls}
    >
      {/* Background Blurred Circles */}
      <div className="absolute w-[450px] h-[450px] bg-[#0f52ba] rounded-full blur-[100px] top-[30%] left-[40%] transform -translate-x-1/2 -rotate-[36deg] sm:w-[300px] sm:h-[300px]" />
      <div className="absolute w-[480px] h-[250px] bg-[#ff4500] rounded-full blur-[110px] top-[40%] left-[60%] transform -translate-x-1/2 -rotate-[36deg] sm:w-[280px] sm:h-[150px]" />

      {/* Company Name */}
      <div className="text-center text-white relative z-10">
        <h1 className="text-[38px] font-bold leading-none sm:text-[122px] xs:text-[48px]">
          INNEWGEN
        </h1>
        <h2 className="text-[14px] font-thin leading-none sm:text-[42px] xs:text-[20px]">
          NETWORK SOLUTIONS
        </h2>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-6 mt-6 relative z-10">
        {/* github */}
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:scale-110 transition sm:w-7 sm:h-7"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
            width={27}
            height={27}
          />
        </a>

        {/* ig */}
        <a
          href="https://instagram.com/utribiana"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 bg-white rounded-lg flex items-center justify-center hover:scale-110 transition sm:w-7 sm:h-7"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram"
            width={28}
            height={28}
          />
        </a>

        {/* fb */}
        <a
          href="https://facebook.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:scale-110 transition sm:w-7 sm:h-7"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt="Facebook"
            width={29}
            height={29}
          />
        </a>
      </div>

      {/* Scroll Icon */}
      <motion.svg
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        width="40px"
        height="15%"
        viewBox="0 0 247 390"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          bottom: 20,
          position: "absolute",
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 1.5,
        }}
      >
        <path
          id="wheel"
          d="M123.359,79.775l0,72.843"
          style={{ fill: "none", stroke: "#fff", strokeWidth: "20px" }}
        />
        <path
          id="mouse"
          d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
          style={{ fill: "none", stroke: "#fff", strokeWidth: "20px" }}
        />
      </motion.svg>
    </motion.div>
  );
}
