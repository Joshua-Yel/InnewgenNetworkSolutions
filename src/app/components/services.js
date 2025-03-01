import React from "react";
import {
  Code,
  Database,
  Brain,
  Layers,
  Smartphone,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Building modern and responsive websites.",
    icon: (
      <Code
        size={32}
        className="text-blue-400"
      />
    ),
  },
  {
    title: "System Development",
    description: "Creating robust and scalable systems.",
    icon: (
      <Database
        size={32}
        className="text-blue-400"
      />
    ),
  },
  {
    title: "AI Software Development",
    description: "Developing intelligent AI-powered applications.",
    icon: (
      <Brain
        size={32}
        className="text-blue-400"
      />
    ),
  },
  {
    title: "Full Stack Development",
    description: "Handling both frontend and backend development.",
    icon: (
      <Layers
        size={32}
        className="text-blue-400"
      />
    ),
  },
  {
    title: "Mobile App Development",
    description: "Crafting user-friendly mobile applications.",
    icon: (
      <Smartphone
        size={32}
        className="text-blue-400"
      />
    ),
  },
  {
    title: "Software Testing Services",
    description: "Ensuring software quality and reliability.",
    icon: (
      <ShieldCheck
        size={32}
        className="text-blue-400"
      />
    ),
  },
];

const Services = () => {
  return (
    <section
      className="flex flex-col bg-neutral-900 w-full md:flex-row items-center justify-between px-10 py-16 mb-20"
      style={{
        backgroundPosition: "center",
        height: "460px",
        marginTop: "200px",
        padding: "150px",
      }}
    >
      <div className="w-full md:w-1/2 pr-0 md:pr-20 mb-10 md:mb-0 text-center md:text-left">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Bringing Your Vision to Life with Expert Development
        </h2>
        <p className="text-gray-400">
          We specialize in making expert driven software solutions designed to
          elevate your business with innovation and efficiency.
        </p>
      </div>
      <div className="relative grid grid-cols-3 gap-6 mt-0 md:mb-40 sm:grid-cols-2 lg:grid-cols-3 ">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-neutral-800 p-6 w-full h-60 rounded-lg shadow-lg relative transform transition-all duration-300 hover:-translate-y-2"
            style={{
              top: `${(index % 3) * 60}px`,
              // left: `${(index % 2) * 10}px`,
              zIndex: `${10 - index}`,
              opacity: index % 2 === 0 ? 1 : 0.9,
              transition: "transform 0.10s, opacity 0.10s",
              transformOrigin: "center",
              display: "flex",
              flexDirection: "column",
              cursor: "pointer",
              alignItems: "center",
              justifyContent: "space-evenly",
              cursor: "pointer",
            }}
          >
            {service.icon}
            <h3 className="text-lg font-semibold text-orange-600 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-300 text-sm text-center">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

// import React from "react";

// const services = [
//   {
//     title: "Web Development",
//     description: "Building modern and responsive websites.",
//   },
//   {
//     title: "System Development",
//     description: "Creating robust and scalable systems.",
//   },
//   {
//     title: "AI Software Development",
//     description: "Developing intelligent AI-powered applications.",
//   },
//   {
//     title: "Full Stack Development",
//     description: "Handling both frontend and backend development.",
//   },
//   {
//     title: "Mobile App Development",
//     description: "Crafting user-friendly mobile applications.",
//   },
//   {
//     title: "Software Testing Services",
//     description: "Ensuring software quality and reliability.",
//   },
// ];

// const Services = () => {
//   return (
//     <section
//       className="flex flex-col bg-gray-900 w-full  md:flex-row items-center justify-between px-28 py-16 mb-20"
//       style={{
//         backgroundPosition: "center",
//         height: "460px",
//         marginTop: "200px",
//       }}
//     >
//       <div className="w-1/2 pr-10">
//         <h2 className="text-4xl font-bold mb-4 text-white">
//           Let Your Data Take Your Business to Higher Grounds
//         </h2>
//         <p className="text-gray-400">
//           We specialize in delivering top-tier software solutions tailored to
//           meet your business needs.
//         </p>
//       </div>
//       <div className="relative grid grid-cols-3 gap-6 mt-0 md:mb-40">
//         {/* md:mt-0 */}
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="bg-gray-800 p-6 w-52 h-60 rounded-lg shadow-lg relative transform transition-all duration-300 hover:-translate-y-2"
//             style={{
//               top: `${(index % 3) * 60}px`,
//               // left: `${(index % 2) * 10}px`,
//               zIndex: `${10 - index}`,
//               opacity: index % 2 === 0 ? 1 : 0.7,
//               transition: "transform 0.3s, opacity 0.3s",
//               transformOrigin: "center",
//               transition: "opacity 0.3s",
//               display: "flex",
//               flexDirection: "column",
//               cursor: "pointer",
//               alignItems: "center",
//               justifyContent: "space-evenly",
//               cursor: "pointer",
//             }}
//           >
//             <h3
//               className="text-lg font-semibold text-blue-400 mb-2"
//               style={{
//                 textTransform: "uppercase",
//                 fontWeight: "bold",
//                 fontSize: "1.2rem",
//                 marginTop: "10px",
//                 marginBottom: "0",
//                 marginTop: "0",
//               }}
//             >
//               {service.title}
//             </h3>
//             <p
//               className="text-gray-300 text-sm"
//               style={{
//                 marginTop: "0",
//                 marginBottom: "10px",

//                 fontSize: "1rem",
//               }}
//             >
//               {service.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };
// export default Services;
