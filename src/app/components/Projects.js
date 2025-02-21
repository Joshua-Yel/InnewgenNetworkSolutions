"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Boxed Blossoms Website",
    description: "A luxury flower shop website based in Makati, Philippines.",
    image: "/assets/project1.png",
    link: "https://boxedblossoms.com/",
    images: [
      "/assets/popimg1-bb.png",
      "/assets/popimg2-bb.png",
      "/assets/popimg3-bb.png",
      "/assets/popimg4-bb.png",
    ],
  },
  {
    title: "PSMS",
    description:
      "A centralized digital system for parishes under Manila Cathedral.",
    image: "/assets/popimg4-psms.png",
    link: "#",
    images: [
      "/assets/popimg4-psms.png",
      "/assets/popimg2-psms.png",
      "/assets/popimg3-psms.png",
    ],
  },
  {
    title: "RCAM Website",
    description: "Official The Roman Catholic Archdiocese of Manila",
    image: "/assets/popimg1-rcam.png",
    link: "https://rcam.org/",
    images: [
      "/assets/popimg1-rcam.png",
      "/assets/popimg4-rcam.png",
      "/assets/popimg2-rcam.png",
      "/assets/popimg3-rcam.png",
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setSelectedImage(null);
  };

  const openImage = (img) => {
    setSelectedImage(img);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <section className="bg-[#0a0a0a] text-white py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Recent Projects
        </motion.h1>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
              onClick={() => openModal(project)}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-2xl font-semibold">{project.title}</h2>
                <p className="mt-2 text-gray-400">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-gray-900 p-6 rounded-lg max-w-3xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              onClick={closeModal}
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
            <p className="text-gray-300 mb-4">{selectedProject.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedProject.images.map((img, idx) => (
                <Image
                  key={idx}
                  src={img}
                  alt={`Screenshot ${idx + 1}`}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover rounded cursor-pointer transition-transform hover:scale-105"
                  onClick={() => openImage(img)}
                />
              ))}
            </div>
            <div className="mt-6 text-right">
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                Visit Project
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
          onClick={closeImage}
        >
          <Image
            src={selectedImage}
            alt="Enlarged view"
            width={900}
            height={600}
            className="max-w-full max-h-full object-contain cursor-pointer"
            onClick={closeImage}
          />
        </div>
      )}
    </section>
  );
}
