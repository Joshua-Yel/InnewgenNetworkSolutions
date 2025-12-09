"use client";

import { useState } from "react";
import { ExternalLink, Sparkles } from "lucide-react";

const projectData = [
  {
    id: 1,
    title: "PortfolioHub",
    category: "web",
    description: "A platform to showcase and discover creative portfolios.",
    image: "/assets/portfoliohub-demo.vercel.app_.png",
    link: "https://portfoliohub-demo.vercel.app/",
    size: "medium",
    metrics: "1,000+ portfolios hosted",
  },
  {
    id: 2,
    title: "PSMS",
    category: "system",
    description:
      "A centralized digital system for parishes under Manila Cathedral.",
    image: "/assets/popimg4-psms.png",
    link: "#",
    size: "small",
    metrics: "20+ parishes digitized",
  },
  {
    id: 3,
    title: "RCAM Website",
    category: "web",
    description: "Official website of the Roman Catholic Archdiocese of Manila",
    image: "/assets/popimg1-rcam.png",
    link: "https://rcam.org/",
    size: "small",
    metrics: "100k+ monthly visitors",
  },
  {
    id: 4,
    title: "Heera Glow Website",
    category: "ecommerce",
    description: "Luxury skincare e-commerce platform.",
    image: "/assets/heeraglow.com.png",
    link: "https://heeraglow.com/",
    size: "small",
    metrics: "300% conversion boost",
  },
  {
    id: 5,
    title: "Boxed Blossoms Website",
    category: "ecommerce",
    description: "A luxury flower shop website based in Makati, Philippines.",
    image: "/assets/project1.png",
    link: "https://boxedblossoms.com/",
    size: "small",
    metrics: "500% traffic increase",
  },
  {
    id: 6,
    title: "Aura 300",
    category: "Frontend web",
    description: "AI Salon engine",
    image: "/assets/project2.png",
    link: "https://www.aura300.ai/",
    size: "small",
    metrics: "New users daily",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [hoveredCard, setHoveredCard] = useState(null);

  const filteredProjects =
    filter === "all"
      ? projectData
      : projectData.filter((project) => project.category === filter);

  const getSizeClasses = (size) => {
    switch (size) {
      case "large":
        return "col-span-1 md:col-span-2 row-span-1 md:row-span-2 md:h-[600px] h-[400px]";
      case "medium":
        return "col-span-1 row-span-1 h-[290px]";
      case "small":
        return "col-span-1 row-span-1 h-[290px]";
      default:
        return "col-span-1 row-span-1 h-[290px]";
    }
  };

  return (
    <section className="min-h-screen bg-gray-20 py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with animated gradient text */}
        <div className="mb-16 text-center relative">
          <div className="inline-flex items-center gap-2 mb-4 bg-gradient-to-r from-blue-50 to-orange-50 px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-gray-700 tracking-wide">
              OUR WORK
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500 bg-clip-text text-transparent leading-tight">
            Turning Concepts Into Results
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transformative solutions that drive real business impact
          </p>
        </div>

        {/* Pill-style filters with glassmorphism */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {["all", "system", "web", "ecommerce"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-full font-bold text-sm tracking-wide transition-all duration-300 transform hover:scale-105 ${
                filter === cat
                  ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/30"
                  : "bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-500 hover:text-blue-600"
              }`}
            >
              {cat === "all"
                ? "All Projects"
                : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-auto portfolio-card ">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: `${index * 100}ms` }}
              className={`${getSizeClasses(
                project.size
              )} animate-fadeInUp group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-black/40 transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 cursor-pointer`}
            >
              {/* Image with zoom effect */}
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className="w-full h-full bg-gradient-to-br from-blue-100 to-orange-100 transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
              </div>

              {/* Category badge */}
              <div className="absolute top-6 left-6 z-10">
                <span
                  className={`px-4 py-2 rounded-full text-xs font-black tracking-wider backdrop-blur-md border border-white/20 ${
                    project.category === "ecommerce"
                      ? "bg-orange-500/90 text-white"
                      : project.category === "system"
                      ? "bg-blue-600/90 text-white"
                      : "bg-purple-600/90 text-white"
                  }`}
                >
                  {project.category.toUpperCase()}
                </span>
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                {/* Metrics badge */}
                <div className="mb-4 inline-flex">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2">
                    <p className="text-white text-sm font-bold">
                      {project.metrics}
                    </p>
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-black text-white mb-3 transform transition-transform duration-300 group-hover:translate-x-2">
                  {project.title}
                </h3>

                <p className="text-gray-200 text-base mb-6 line-clamp-2 transform transition-all duration-300 opacity-90 group-hover:opacity-100">
                  {project.description}
                </p>

                {/* CTA Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 w-fit bg-white text-blue-600 px-6 py-3 rounded-full font-bold text-sm transform transition-all duration-300 hover:gap-3 hover:bg-blue-600 hover:text-white shadow-lg hover:shadow-xl"
                >
                  View Case Study
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Animated corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-3xl" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block">
            <p className="text-gray-600 mb-4">Have a project in mind?</p>
            <button className="px-8 py-4 bg-orange-500 text-white font-bold rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30">
              Let's Build It Together
            </button>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `

          
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out backwards;
        }
      `,
        }}
      />
    </section>
  );
};

export default Projects;
