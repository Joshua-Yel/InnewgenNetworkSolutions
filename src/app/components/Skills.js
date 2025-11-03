import Image from "next/image";
import { motion } from "framer-motion";
import "../ui/TechnologyStack.css";

const techStackIcons = {
  frontend: [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  ],
  backend: [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  ],
  mobile: [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  ],
  design: [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg",
  ],
  databases: [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  ],
  versionControl: [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    // "https://img.icons8.com/?size=100&id=12599&format=png&color=FFFFFF",
  ],
};

export default function SkillsSection() {
  return (
    <section className="skills-section py-20 bg-[#0a0a0a] text-white">
      <div className="container mx-auto text-center">
        <h2 className="section-title">Our Technology Stack</h2>
        <p className="section-subtitle">
          The modern frameworks, platforms, and tools that power our solutions.
        </p>

        {/* Desktop Layout */}
        <div className="tech-stack-desktop grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
          {Object.keys(techStackIcons).map((category, index) => (
            <div
              key={index}
              className="category-group"
            >
              <motion.h3
                className="category-title text-2xl font-semibold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.3, duration: 0.6 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.h3>
              <div className="tech-icons flex flex-wrap justify-center gap-4">
                {techStackIcons[category].map((icon, idx) => (
                  <motion.div
                    key={idx}
                    className="tech-icon"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.3 }}
                  >
                    <Image
                      src={icon}
                      alt="Tech Icon"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
