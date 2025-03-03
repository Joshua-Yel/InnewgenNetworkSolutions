"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/services";
import SkillsSection from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Teams from "./components/Teams";
import MarqueeSection from "./components/MarqueeSection";
import AboutMe from "./components/about-me";
import Socials from "./components/Socials";

export default function Home() {
  const router = useRouter();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > window.innerHeight * 0.8) {
  //       document
  //         .getElementById("services")
  //         .scrollIntoView({ behavior: "smooth" });
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <>
      <Nav />
      <Hero />
      <div>
        <MarqueeSection />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="skills">
        <SkillsSection />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div>
        {/* <AboutMe /> */}
        {/* <Teams /> */}
      </div>
      <Socials />
      <Footer />
    </>
  );
}

// export default function Home() {
//   return (
//     <>
//       <div
//         data-layer="Desktop - 1"
//         className="Desktop1"
//         style={{
//           position: "relative",
//           background: "#121212",
//           aligncontent: "center",
//         }}
//       >
//         <div
//           data-layer="Group 18"
//           className="Group18"
//           style={{
//             width: 755.96,
//             height: 608.22,
//             alignItems: "center",
//             left: 342,
//             top: 209,
//             position: "absolute",
//           }}
//         >
//           <div
//             data-layer="Ellipse 3"
//             className="Ellipse3"
//             style={{
//               width: 443.19,
//               height: 428.82,
//               left: 0,
//               top: 263.25,
//               position: "absolute",
//               transform: "rotate(-36.44deg)",
//               transformOrigin: "0 0",
//               background: "#0F52BA",
//               boxShadow:
//                 "131.39999389648438px 131.39999389648438px 131.39999389648438px ",
//               borderRadius: 9999,
//               filter: "blur(131.40px)",
//             }}
//           />
//           <div
//             data-layer="Ellipse 4"
//             className="Ellipse4"
//             style={{
//               width: 483.55,
//               height: 244.04,
//               left: 222,
//               top: 388.41,
//               position: "absolute",
//               transform: "rotate(-36.44deg)",
//               transformOrigin: "0 0",
//               background: "#FF4500",
//               boxShadow:
//                 "266.3999938964844px 266.3999938964844px 266.3999938964844px ",
//               borderRadius: 9999,
//               filter: "blur(266.40px)",
//             }}
//           />
//         </div>
//         <img
//           data-layer="image 1"
//           className="Image1"
//           style={{
//             width: 56,
//             height: 56,
//             left: 692,
//             top: 943,
//             position: "absolute",
//           }}
//           src="https://via.placeholder.com/56x56"
//         />
//         <div
//           data-layer="Company Name"
//           className="CompanyName"
//           style={{
//             width: 957,
//             height: 221,
//             left: 242,
//             top: 361,
//             position: "absolute",
//           }}
//         >
//           <div
//             data-layer="INNEWGEN"
//             className="Innewgen"
//             style={{
//               width: 957,
//               left: 0,
//               top: 0,
//               position: "absolute",
//               textAlign: "center",
//               color: "white",
//               fontSize: 138,
//               fontFamily: "Inter",
//               fontWeight: "700",
//               wordWrap: "break-word",
//             }}
//           >
//             INNEWGEN
//           </div>
//           <div
//             data-layer="NETWORK SOLUTIONS"
//             className="NetworkSolutions"
//             style={{
//               width: 773,
//               height: 80,
//               left: 92,
//               top: 141,
//               position: "absolute",
//               textAlign: "center",
//               color: "white",
//               fontSize: 54,
//               fontFamily: "Montserrat",
//               fontWeight: "200",
//               wordWrap: "break-word",
//             }}
//           >
//             NETWORK SOLUTIONS
//           </div>
//         </div>
//         <div
//           data-layer="Links"
//           className="Links"
//           style={{ width: 91.8, left: 676, top: 582, position: "absolute" }}
//         >
//           <div
//             data-layer="Group 8"
//             className="Group8"
//             style={{
//               width: 30.85,
//               height: 30.85,
//               left: 0,
//               top: 2,
//               position: "absolute",
//             }}
//           >
//             <div
//               data-layer="Ellipse 1"
//               className="Ellipse1"
//               style={{
//                 width: 24.68,
//                 height: 24.68,
//                 left: 3.08,
//                 top: 3.08,
//                 position: "absolute",
//                 background: "white",
//                 borderRadius: 9999,
//               }}
//             />
//             <img
//               data-layer="image 5"
//               className="Image5"
//               style={{
//                 width: 30.85,
//                 height: 30.85,
//                 left: 0,
//                 top: 0,
//                 position: "absolute",
//               }}
//               src="https://via.placeholder.com/31x31"
//             />
//           </div>
//           <div
//             data-layer="Group 9"
//             className="Group9"
//             style={{
//               width: 34.8,
//               height: 34.8,
//               left: 57,
//               top: 0,
//               position: "absolute",
//             }}
//           >
//             <div
//               data-layer="Ellipse 2"
//               className="Ellipse2"
//               style={{
//                 width: 24.71,
//                 height: 24.71,
//                 left: 5.22,
//                 top: 4.87,
//                 position: "absolute",
//                 background: "white",
//                 borderRadius: 9999,
//               }}
//             />
//             <img
//               data-layer="image 6"
//               className="Image6"
//               style={{
//                 width: 34.8,
//                 height: 34.8,
//                 left: 0,
//                 top: 0,
//                 position: "absolute",
//               }}
//               src="https://via.placeholder.com/35x35"
//             />
//           </div>
//           <div
//             data-layer="Group 12"
//             className="Group12"
//             style={{
//               width: 26.39,
//               height: 26.39,
//               left: 31,
//               top: 4,
//               position: "absolute",
//             }}
//           >
//             <div
//               data-layer="Rectangle 15"
//               className="Rectangle15"
//               style={{
//                 width: 24.17,
//                 height: 23.85,
//                 left: 1.27,
//                 top: 1.27,
//                 position: "absolute",
//                 background: "white",
//                 borderRadius: 7,
//               }}
//             />
//             <img
//               data-layer="image 7"
//               className="Image7"
//               style={{
//                 width: 26.39,
//                 height: 26.39,
//                 left: 0,
//                 top: 0,
//                 position: "absolute",
//               }}
//               src="https://via.placeholder.com/26x26"
//             />
//           </div>
//         </div>
//         <div
//           data-layer="SERVICES"
//           className="Services"
//           style={{
//             left: 637,
//             top: 1212,
//             position: "absolute",
//             textAlign: "center",
//             color: "white",
//             fontSize: 40,
//             fontFamily: "Inter",
//             fontWeight: "500",
//             wordWrap: "break-word",
//           }}
//         >
//           SERVICES
//         </div>
//         <div
//           data-layer="Ellipse 5"
//           className="Ellipse5"
//           style={{
//             width: 502,
//             height: 353,
//             left: 1087,
//             top: 1591,
//             position: "absolute",
//             background: "rgba(15, 82, 186, 0.69)",
//             boxShadow: "382.5px 382.5px 382.5px ",
//             borderRadius: 9999,
//             filter: "blur(382.50px)",
//           }}
//         />
//         <div
//           data-layer="Ellipse 6"
//           className="Ellipse6"
//           style={{
//             width: 483.55,
//             height: 244.04,
//             left: -293,
//             top: 1143.22,
//             position: "absolute",
//             transform: "rotate(-36.44deg)",
//             transformOrigin: "0 0",
//             background: "#FF4500",
//             boxShadow:
//               "266.3999938964844px 266.3999938964844px 266.3999938964844px ",
//             borderRadius: 9999,
//             filter: "blur(266.40px)",
//           }}
//         />
//         <div
//           data-layer="Group 8"
//           className="Group8"
//           style={{
//             width: 274,
//             height: 147,
//             left: 597,
//             top: 1334,
//             position: "absolute",
//           }}
//         >
//           <div
//             data-layer="Rectangle 10"
//             className="Rectangle10"
//             style={{
//               width: 274,
//               height: 147,
//               left: 0,
//               top: 0,
//               position: "absolute",
//               background: "rgba(27, 27, 27, 0.65)",
//               borderRadius: 18,
//               border: "0.30px white solid",
//             }}
//           />
//           <div
//             data-layer="Web     Development"
//             className="WebDevelopment"
//             style={{
//               left: 73,
//               top: 44,
//               position: "absolute",
//               textAlign: "center",
//               color: "white",
//               fontSize: 19,
//               fontFamily: "Roboto Mono",
//               fontWeight: "300",
//               wordWrap: "break-word",
//             }}
//           >
//             Web Development
//           </div>
//         </div>
//         <div
//           data-layer="Group 9"
//           className="Group9"
//           style={{
//             width: 274,
//             height: 147,
//             left: 888,
//             top: 1334,
//             position: "absolute",
//           }}
//         >
//           <div
//             data-layer="Rectangle 12"
//             className="Rectangle12"
//             style={{
//               width: 274,
//               height: 147,
//               left: 0,
//               top: 0,
//               position: "absolute",
//               background: "rgba(27, 27, 27, 0.65)",
//               borderRadius: 18,
//               border: "0.30px white solid",
//             }}
//           />
//           <div
//             data-layer="System     Development"
//             className="SystemDevelopment"
//             style={{
//               left: 76,
//               top: 45,
//               position: "absolute",
//               textAlign: "center",
//               color: "white",
//               fontSize: 19,
//               fontFamily: "Roboto Mono",
//               fontWeight: "300",
//               wordWrap: "break-word",
//             }}
//           >
//             System Development
//           </div>
//         </div>
//         <div
//           data-layer="Group 10"
//           className="Group10"
//           style={{
//             width: 274,
//             height: 147,
//             left: 888,
//             top: 1504,
//             position: "absolute",
//           }}
//         >
//           <div
//             data-layer="Rectangle 14"
//             className="Rectangle14"
//             style={{
//               width: 274,
//               height: 147,
//               left: 0,
//               top: 0,
//               position: "absolute",
//               background: "rgba(27, 27, 27, 0.65)",
//               borderRadius: 18,
//               border: "0.30px white solid",
//             }}
//           />
//           <div
//             data-layer="AI Software Development"
//             className="AiSoftwareDevelopment"
//             style={{
//               left: 73,
//               top: 42,
//               position: "absolute",
//               textAlign: "center",
//               color: "white",
//               fontSize: 19,
//               fontFamily: "Roboto Mono",
//               fontWeight: "300",
//               wordWrap: "break-word",
//             }}
//           >
//             AI Software
//             <br />
//             Development
//           </div>
//         </div>
//         <div
//           data-layer="Group 11"
//           className="Group11"
//           style={{
//             width: 274,
//             height: 147,
//             left: 306,
//             top: 1504,
//             position: "absolute",
//           }}
//         >
//           <div
//             data-layer="Rectangle 7"
//             className="Rectangle7"
//             style={{
//               width: 274,
//               height: 147,
//               left: 0,
//               top: 0,
//               position: "absolute",
//               background: "rgba(27, 27, 27, 0.65)",
//               borderRadius: 18,
//               border: "0.30px white solid",
//             }}
//           />
//           <div
//             data-layer="Full Stack     Development"
//             className="FullStackDevelopment"
//             style={{
//               left: 73,
//               top: 42,
//               position: "absolute",
//               textAlign: "center",
//               color: "white",
//               fontSize: 19,
//               fontFamily: "Roboto Mono",
//               fontWeight: "300",
//               wordWrap: "break-word",
//             }}
//           >
//             Full Stack Development
//           </div>
//         </div>
//         <div
//           data-layer="Group 12"
//           className="Group12"
//           style={{
//             width: 274,
//             height: 147,
//             left: 306,
//             top: 1334,
//             position: "absolute",
//           }}
//         >
//           <div
//             data-layer="Rectangle 8"
//             className="Rectangle8"
//             style={{
//               width: 274,
//               height: 147,
//               left: 0,
//               top: 0,
//               position: "absolute",
//               background: "rgba(27, 27, 27, 0.65)",
//               borderRadius: 18,
//               border: "0.30px #D9D9D9 solid",
//             }}
//           />
//           <div
//             data-layer="Mobile App     Development"
//             className="MobileAppDevelopment"
//             style={{
//               left: 73,
//               top: 45,
//               position: "absolute",
//               textAlign: "center",
//               color: "white",
//               fontSize: 19,
//               fontFamily: "Roboto Mono",
//               fontWeight: "300",
//               wordWrap: "break-word",
//             }}
//           >
//             Mobile App Development
//           </div>
//         </div>
//         <div
//           data-layer="Group 13"
//           className="Group13"
//           style={{
//             width: 274,
//             height: 147,
//             left: 597,
//             top: 1504,
//             position: "absolute",
//           }}
//         >
//           <div
//             data-layer="Rectangle 13"
//             className="Rectangle13"
//             style={{
//               width: 274,
//               height: 147,
//               left: 0,
//               top: 0,
//               position: "absolute",
//               background: "rgba(27, 27, 27, 0.65)",
//               borderRadius: 18,
//               border: "0.30px white solid",
//             }}
//           />
//           <div
//             data-layer="Software testing Services"
//             className="SoftwareTestingServices"
//             style={{
//               left: 45,
//               top: 49,
//               position: "absolute",
//               textAlign: "center",
//               color: "white",
//               fontSize: 19,
//               fontFamily: "Roboto Mono",
//               fontWeight: "300",
//               wordWrap: "break-word",
//             }}
//           >
//             Software testing
//             <br />
//             Services
//           </div>
//         </div>
//         <div
//           data-layer="SKILLS"
//           className="Skills"
//           style={{
//             left: 630,
//             top: 2100,
//             position: "absolute",
//             textAlign: "center",
//             color: "white",
//             fontSize: 54,
//             fontFamily: "Montserrat",
//             fontWeight: "200",
//             wordWrap: "break-word",
//           }}
//         >
//           SKILLS
//         </div>
//         <div
//           data-layer="Group 19"
//           className="Group19"
//           style={{
//             width: 939,
//             height: 367,
//             left: 251,
//             top: 2248,
//             position: "absolute",
//           }}
//         >
//           <div
//             data-layer="Rectangle 16"
//             className="Rectangle16"
//             style={{
//               width: 939,
//               height: 367,
//               left: 0,
//               top: 0,
//               position: "absolute",
//               background: "#1B1B1B",
//               borderRadius: 16,
//             }}
//           />
//           <img
//             data-layer="image 8"
//             className="Image8"
//             style={{
//               width: 94.56,
//               height: 94.59,
//               left: 128.6,
//               top: 81.35,
//               position: "absolute",
//             }}
//             src="https://via.placeholder.com/95x95"
//           />
//           <img
//             data-layer="image 9"
//             className="Image9"
//             style={{
//               width: 94.56,
//               height: 94.59,
//               left: 250.59,
//               top: 81.35,
//               position: "absolute",
//             }}
//             src="https://via.placeholder.com/95x95"
//           />
//           <img
//             data-layer="image 10"
//             className="Image10"
//             style={{
//               width: 94.56,
//               height: 94.59,
//               left: 375.41,
//               top: 81.35,
//               position: "absolute",
//             }}
//             src="https://via.placeholder.com/95x95"
//           />
//           <img
//             data-layer="image 11"
//             className="Image11"
//             style={{
//               width: 94.56,
//               height: 94.59,
//               left: 500.23,
//               top: 81.35,
//               position: "absolute",
//             }}
//             src="https://via.placeholder.com/95x95"
//           />
//           <img
//             data-layer="image 12"
//             className="Image12"
//             style={{
//               width: 94.56,
//               height: 94.59,
//               left: 622.22,
//               top: 81.35,
//               position: "absolute",
//             }}
//             src="https://via.placeholder.com/95x95"
//           />
//           <img
//             data-layer="image 13"
//             className="Image13"
//             style={{
//               width: 94.56,
//               height: 94.59,
//               left: 733.8,
//               top: 81.35,
//               position: "absolute",
//             }}
//             src="https://via.placeholder.com/95x95"
//           />
//           <img
//             data-layer="image 14"
//             className="Image14"
//             style={{
//               width: 94.56,
//               height: 94.59,
//               left: 251,
//               top: 197,
//               position: "absolute",
//             }}
//             src="https://via.placeholder.com/95x95"
//           />
//           <img
//             data-layer="image 15"
//             className="Image15"
//             style={{
//               width: 94.56,
//               height: 94.59,
//               left: 372.98,
//               top: 197,
//               position: "absolute",
//             }}
//             src="https://via.placeholder.com/95x95"
//           />
//           <img
//             data-layer="image"
//             className="Image"
//             style={{
//               width: 94.56,
//               height: 94.59,
//               left: 497.81,
//               top: 197,
//               position: "absolute",
//             }}
//             src="https://via.placeholder.com/95x95"
//           />
//           <img
//             data-layer="image"
//             className="Image"
//             style={{
//               width: 94.56,
//               height: 94.59,
//               left: 620,
//               top: 197,
//               position: "absolute",
//             }}
//             src="https://via.placeholder.com/95x95"
//           />
//         </div>
//         <div
//           data-layer="Group 20"
//           className="Group20"
//           style={{
//             width: 939,
//             height: 366.9,
//             left: 251,
//             top: 2650,
//             position: "absolute",
//           }}
//         >
//           <div
//             data-layer="Rectangle 17"
//             className="Rectangle17"
//             style={{
//               width: 939,
//               height: 366.9,
//               left: 0,
//               top: 0,
//               position: "absolute",
//               background: "#1B1B1B",
//               borderRadius: 16,
//             }}
//           />
//           <img
//             data-layer="pngwing.com (1) 1"
//             className="PngwingCom11"
//             style={{
//               width: 75.65,
//               height: 75.65,
//               left: 560.26,
//               top: 215.46,
//               position: "absolute",
//             }}
//             src="https://via.placeholder.com/76x76"
//           />
//           <img
//             data-layer="image 17"
//             className="Image17"
//             style={{
//               width: 94.56,
//               height: 94.56,
//               left: 128.6,
//               top: 75.65,
//               position: "absolute",
//             }}
//             src="https://via.placeholder.com/95x95"
//           />
//           <img
//             data-layer="image 19"
//             className="Image19"
//             style={{
//               width: 94.56,
//               height: 94.56,
//               left: 250.59,
//               top: 75.65,
//               position: "absolute",
//             }}
//             src="https://via.placeholder.com/95x95"
//           />
//           <img
//             data-layer="image 20"
//             className="Image20"
//             style={{
//               width: 94.56,
//               height: 94.56,
//               left: 375.41,
//               top: 75.65,
//               position: "absolute",
//             }}
//             src="https://via.placeholder.com/95x95"
//           />
//           <img
//             data-layer="image 21"
//             className="Image21"
//             style={{
//               width: 94.56,
//               height: 94.56,
//               left: 500.23,
//               top: 75.65,
//               position: "absolute",
//             }}
//             src="https://via.placeholder.com/95x95"
//           />
//           <img
//             data-layer="image 22"
//             className="Image22"
//             style={{
//               width: 94.56,
//               height: 94.56,
//               left: 622.22,
//               top: 75.65,
//               position: "absolute",
//             }}
//             src="https://via.placeholder.com/95x95"
//           />
//           <img
//             data-layer="image 23"
//             className="Image23"
//             style={{
//               width: 94.56,
//               height: 94.56,
//               left: 733.8,
//               top: 75.65,
//               position: "absolute",
//             }}
//             src="https://via.placeholder.com/95x95"
//           />
//           <img
//             data-layer="image 24"
//             className="Image24"
//             style={{
//               width: 94.56,
//               height: 94.56,
//               left: 304,
//               top: 206,
//               position: "absolute",
//             }}
//             src="https://via.placeholder.com/95x95"
//           />
//           <img
//             data-layer="pngwing.com 1"
//             className="PngwingCom1"
//             style={{
//               width: 70.92,
//               height: 71.87,
//               left: 437.33,
//               top: 217.35,
//               position: "absolute",
//             }}
//             src="https://via.placeholder.com/71x72"
//           />
//         </div>
//         <div
//           data-layer="Group 21"
//           className="Group21"
//           style={{
//             width: 939,
//             height: 250.59,
//             left: 251,
//             top: 3052,
//             position: "absolute",
//           }}
//         >
//           <div
//             data-layer="Rectangle 17"
//             className="Rectangle17"
//             style={{
//               width: 939,
//               height: 250.59,
//               left: 0,
//               top: 0,
//               position: "absolute",
//               background: "#1B1B1B",
//               borderRadius: 16,
//             }}
//           />
//           <img
//             data-layer="image 16"
//             className="Image16"
//             style={{
//               width: 94.56,
//               height: 94.56,
//               left: 128.6,
//               top: 76.6,
//               position: "absolute",
//             }}
//             src="https://via.placeholder.com/95x95"
//           />
//           <img
//             data-layer="image"
//             className="Image"
//             style={{
//               width: 94.56,
//               height: 94.56,
//               left: 250.59,
//               top: 76.6,
//               position: "absolute",
//             }}
//             src="https://via.placeholder.com/95x95"
//           />
//           <div
//             data-layer="Group 17"
//             className="Group17"
//             style={{
//               width: 94.56,
//               height: 94.56,
//               left: 375.41,
//               top: 76.6,
//               position: "absolute",
//             }}
//           >
//             <div
//               data-layer="Rectangle 18"
//               className="Rectangle18"
//               style={{
//                 width: 63.36,
//                 height: 43.5,
//                 left: 15.13,
//                 top: 24.59,
//                 position: "absolute",
//                 background: "#D9D9D9",
//               }}
//             />
//             <img
//               data-layer="image"
//               className="Image"
//               style={{
//                 width: 94.56,
//                 height: 94.56,
//                 left: 0,
//                 top: 0,
//                 position: "absolute",
//               }}
//               src="https://via.placeholder.com/95x95"
//             />
//             <img
//               data-layer="image 27"
//               className="Image27"
//               style={{
//                 width: 94.56,
//                 height: 94.56,
//                 left: 0,
//                 top: 0,
//                 position: "absolute",
//               }}
//               src="https://via.placeholder.com/95x95"
//             />
//           </div>
//           <img
//             data-layer="image 8"
//             className="Image8"
//             style={{
//               width: 94.56,
//               height: 94.56,
//               left: 499.29,
//               top: 76.6,
//               position: "absolute",
//             }}
//             src="https://via.placeholder.com/95x95"
//           />
//           <img
//             data-layer="image 25"
//             className="Image25"
//             style={{
//               width: 94.56,
//               height: 94.56,
//               left: 622.22,
//               top: 76.6,
//               position: "absolute",
//             }}
//             src="https://via.placeholder.com/95x95"
//           />
//           <img
//             data-layer="image 26"
//             className="Image26"
//             style={{
//               width: 94.56,
//               height: 94.56,
//               left: 745.15,
//               top: 79.43,
//               position: "absolute",
//             }}
//             src="https://via.placeholder.com/95x95"
//           />
//         </div>
//         <div
//           data-layer="Group 22"
//           className="Group22"
//           style={{
//             width: 939,
//             height: 250.59,
//             left: 251,
//             top: 3348,
//             position: "absolute",
//           }}
//         >
//           <div
//             data-layer="Rectangle 17"
//             className="Rectangle17"
//             style={{
//               width: 939,
//               height: 250.59,
//               left: 0,
//               top: 0,
//               position: "absolute",
//               background: "#1B1B1B",
//               borderRadius: 16,
//             }}
//           />
//           <img
//             data-layer="image"
//             className="Image"
//             style={{
//               width: 94.56,
//               height: 94.56,
//               left: 237,
//               top: 77.6,
//               position: "absolute",
//             }}
//             src="https://via.placeholder.com/95x95"
//           />
//           <img
//             data-layer="image"
//             className="Image"
//             style={{
//               width: 94.56,
//               height: 94.56,
//               left: 358.98,
//               top: 77.6,
//               position: "absolute",
//             }}
//             src="https://via.placeholder.com/95x95"
//           />
//           <div
//             data-layer="Group 17"
//             className="Group17"
//             style={{
//               width: 100,
//               height: 100,
//               left: 481.4,
//               top: 75,
//               position: "absolute",
//             }}
//           >
//             <div
//               data-layer="Rectangle 18"
//               className="Rectangle18"
//               style={{
//                 width: 63.36,
//                 height: 43.5,
//                 left: 17.54,
//                 top: 27.18,
//                 position: "absolute",
//                 background: "#D9D9D9",
//               }}
//             />
//             <img
//               data-layer="image"
//               className="Image"
//               style={{
//                 width: 94.56,
//                 height: 94.56,
//                 left: 2.41,
//                 top: 2.6,
//                 position: "absolute",
//               }}
//               src="https://via.placeholder.com/95x95"
//             />
//             <img
//               data-layer="image 27"
//               className="Image27"
//               style={{
//                 width: 94.56,
//                 height: 94.56,
//                 left: 2.41,
//                 top: 2.6,
//                 position: "absolute",
//               }}
//               src="https://via.placeholder.com/95x95"
//             />
//             <img
//               data-layer="image 28"
//               className="Image28"
//               style={{
//                 width: 100,
//                 height: 100,
//                 left: 0,
//                 top: 0,
//                 position: "absolute",
//               }}
//               src="https://via.placeholder.com/100x100"
//             />
//           </div>
//           <img
//             data-layer="image"
//             className="Image"
//             style={{
//               width: 94.56,
//               height: 94.56,
//               left: 607.68,
//               top: 77.6,
//               position: "absolute",
//             }}
//             src="https://via.placeholder.com/95x95"
//           />
//         </div>
//         <div
//           data-layer="Group 23"
//           className="Group23"
//           style={{
//             width: 546,
//             height: 252.95,
//             left: 251,
//             top: 3644,
//             position: "absolute",
//           }}
//         >
//           <div
//             data-layer="Rectangle 17"
//             className="Rectangle17"
//             style={{
//               width: 546,
//               height: 252.95,
//               left: 0,
//               top: 0,
//               position: "absolute",
//               background: "#1B1B1B",
//               borderRadius: 16,
//             }}
//           />
//           <img
//             data-layer="image"
//             className="Image"
//             style={{
//               width: 98.56,
//               height: 95.45,
//               left: 58.15,
//               top: 76.36,
//               position: "absolute",
//             }}
//             src="https://via.placeholder.com/99x95"
//           />
//           <img
//             data-layer="image"
//             className="Image"
//             style={{
//               width: 98.56,
//               height: 95.45,
//               left: 174.44,
//               top: 76.36,
//               position: "absolute",
//             }}
//             src="https://via.placeholder.com/99x95"
//           />
//           <img
//             data-layer="image"
//             className="Image"
//             style={{
//               width: 98.56,
//               height: 95.45,
//               left: 290.74,
//               top: 76.36,
//               position: "absolute",
//             }}
//             src="https://via.placeholder.com/99x95"
//           />
//           <img
//             data-layer="image"
//             className="Image"
//             style={{
//               width: 98.56,
//               height: 95.45,
//               left: 407.04,
//               top: 76.36,
//               position: "absolute",
//             }}
//             src="https://via.placeholder.com/99x95"
//           />
//         </div>
//         <div
//           data-layer="Group 24"
//           className="Group24"
//           style={{
//             width: 356.11,
//             height: 253,
//             left: 833.89,
//             top: 3644,
//             position: "absolute",
//           }}
//         >
//           <div
//             data-layer="Rectangle 17"
//             className="Rectangle17"
//             style={{
//               width: 356.11,
//               height: 253,
//               left: 0,
//               top: 0,
//               position: "absolute",
//               background: "#1B1B1B",
//               borderRadius: 16,
//             }}
//           />
//           <img
//             data-layer="image"
//             className="Image"
//             style={{
//               width: 94.83,
//               height: 95.47,
//               left: 60.15,
//               top: 76.38,
//               position: "absolute",
//             }}
//             src="https://via.placeholder.com/95x95"
//           />
//           <img
//             data-layer="image"
//             className="Image"
//             style={{
//               width: 94.83,
//               height: 95.47,
//               left: 203.35,
//               top: 76.38,
//               position: "absolute",
//             }}
//             src="https://via.placeholder.com/95x95"
//           />
//         </div>
//         <div
//           data-layer="PROJECTS"
//           className="Projects"
//           style={{
//             left: 569,
//             top: 4393,
//             position: "absolute",
//             textAlign: "center",
//             color: "white",
//             fontSize: 54,
//             fontFamily: "Montserrat",
//             fontWeight: "200",
//             wordWrap: "break-word",
//           }}
//         >
//           PROJECTS
//         </div>
//         <div
//           data-layer="Rectangle 17"
//           className="Rectangle17"
//           style={{
//             width: 457,
//             height: 293,
//             left: 198,
//             top: 4608,
//             position: "absolute",
//             background: "#434343",
//           }}
//         />
//         <div
//           data-layer="Rectangle 17"
//           className="Rectangle17"
//           style={{
//             width: 457,
//             height: 293,
//             left: 784,
//             top: 4985,
//             position: "absolute",
//             background: "#434343",
//           }}
//         />
//         <div
//           data-layer="This is a sample text"
//           className="ThisIsASampleText"
//           style={{
//             left: 784,
//             top: 4672,
//             position: "absolute",
//             textAlign: "center",
//             color: "white",
//             fontSize: 20,
//             fontFamily: "Montserrat",
//             fontWeight: "200",
//             wordWrap: "break-word",
//           }}
//         >
//           This is a sample text
//         </div>
//         <div
//           data-layer="Rectangle 21"
//           className="Rectangle21"
//           style={{
//             width: 213,
//             height: 51,
//             left: 784,
//             top: 4850,
//             position: "absolute",
//             background: "#D9D9D9",
//             borderRadius: 20,
//           }}
//         />
//         <div
//           data-layer="This is a sample text"
//           className="ThisIsASampleText"
//           style={{
//             left: 442,
//             top: 5049,
//             position: "absolute",
//             textAlign: "center",
//             color: "white",
//             fontSize: 20,
//             fontFamily: "Montserrat",
//             fontWeight: "200",
//             wordWrap: "break-word",
//           }}
//         >
//           This is a sample text
//         </div>
//         <div
//           data-layer="Rectangle 22"
//           className="Rectangle22"
//           style={{
//             width: 213,
//             height: 51,
//             left: 442,
//             top: 5227,
//             position: "absolute",
//             background: "#D9D9D9",
//             borderRadius: 20,
//           }}
//         />
//         <div
//           data-layer="This is a sample text"
//           className="ThisIsASampleText"
//           style={{
//             left: 818,
//             top: 6000,
//             position: "absolute",
//             textAlign: "center",
//             color: "white",
//             fontSize: 20,
//             fontFamily: "Montserrat",
//             fontWeight: "200",
//             wordWrap: "break-word",
//           }}
//         >
//           This is a sample text
//         </div>
//         <div
//           data-layer="Ellipse 6"
//           className="Ellipse6"
//           style={{
//             width: 483.55,
//             height: 244.04,
//             left: -242,
//             top: 6477.22,
//             position: "absolute",
//             transform: "rotate(-36.44deg)",
//             transformOrigin: "0 0",
//             background: "#FF4500",
//             boxShadow:
//               "266.3999938964844px 266.3999938964844px 266.3999938964844px ",
//             borderRadius: 9999,
//             filter: "blur(266.40px)",
//           }}
//         />
//         <div
//           data-layer="About Us"
//           className="AboutUs"
//           style={{
//             left: 621,
//             top: 5721,
//             position: "absolute",
//             textAlign: "center",
//             color: "white",
//             fontSize: 54,
//             fontFamily: "Montserrat",
//             fontWeight: "200",
//             wordWrap: "break-word",
//           }}
//         >
//           About Us
//         </div>
//         <div
//           data-layer="Rectangle 17"
//           className="Rectangle17"
//           style={{
//             width: 457,
//             height: 293,
//             left: 232,
//             top: 5936,
//             position: "absolute",
//             background: "#434343",
//           }}
//         />
//         <div
//           data-layer="Ellipse 5"
//           className="Ellipse5"
//           style={{
//             width: 502,
//             height: 353,
//             left: 1076,
//             top: 6776,
//             position: "absolute",
//             background: "rgba(15, 82, 186, 0.69)",
//             boxShadow: "382.5px 382.5px 382.5px ",
//             borderRadius: 9999,
//             filter: "blur(382.50px)",
//           }}
//         />
//         <div
//           data-layer="Contacts"
//           className="Contacts"
//           style={{
//             left: 958,
//             top: 6653,
//             position: "absolute",
//             textAlign: "center",
//             color: "white",
//             fontSize: 19,
//             fontFamily: "Roboto",
//             fontWeight: "400",
//             wordWrap: "break-word",
//           }}
//         >
//           Contacts
//         </div>
//         <div
//           data-layer="Group 27"
//           className="Group27"
//           style={{ left: 908, top: 6689, position: "absolute" }}
//         >
//           <div
//             data-layer="+63 9953489923"
//             className="639953489923"
//             style={{
//               left: 0,
//               top: 0,
//               position: "absolute",
//               textAlign: "center",
//               color: "white",
//               fontSize: 12,
//               fontFamily: "Roboto",
//               fontWeight: "200",
//               wordWrap: "break-word",
//             }}
//           >
//             +63 9953489923
//           </div>
//           <div
//             data-layer="business.urieltribiana@gmail.com"
//             className="BusinessUrieltribianaGmailCom"
//             style={{
//               left: 0,
//               top: 23,
//               position: "absolute",
//               textAlign: "center",
//               color: "white",
//               fontSize: 12,
//               fontFamily: "Roboto",
//               fontWeight: "200",
//               textDecoration: "underline",
//               wordWrap: "break-word",
//             }}
//           >
//             business.urieltribiana@gmail.com
//           </div>
//           <div
//             data-layer="Innewgen.ph@gmail.com"
//             className="InnewgenPhGmailCom"
//             style={{
//               left: 0,
//               top: 46,
//               position: "absolute",
//               textAlign: "center",
//               color: "white",
//               fontSize: 12,
//               fontFamily: "Roboto",
//               fontWeight: "200",
//               wordWrap: "break-word",
//             }}
//           >
//             Innewgen.ph@gmail.com
//           </div>
//         </div>
//         <div
//           data-layer="Company"
//           className="Company"
//           style={{
//             left: 691,
//             top: 6653,
//             position: "absolute",
//             textAlign: "center",
//             color: "white",
//             fontSize: 19,
//             fontFamily: "Roboto",
//             fontWeight: "400",
//             wordWrap: "break-word",
//           }}
//         >
//           Company
//         </div>
//         <div
//           data-layer="Find us in social media"
//           className="FindUsInSocialMedia"
//           style={{
//             left: 361,
//             top: 6653,
//             position: "absolute",
//             textAlign: "center",
//             color: "white",
//             fontSize: 19,
//             fontFamily: "Roboto",
//             fontWeight: "400",
//             wordWrap: "break-word",
//           }}
//         >
//           Find us in social media
//         </div>
//         <div
//           data-layer="Group 30"
//           className="Group30"
//           style={{ left: 708, top: 6689, position: "absolute" }}
//         >
//           <div
//             data-layer="About us"
//             className="AboutUs"
//             style={{
//               left: 0,
//               top: 0,
//               position: "absolute",
//               textAlign: "center",
//               color: "white",
//               fontSize: 12,
//               fontFamily: "Roboto",
//               fontWeight: "200",
//               wordWrap: "break-word",
//             }}
//           >
//             About us
//           </div>
//           <div
//             data-layer="Team"
//             className="Team"
//             style={{
//               left: 0,
//               top: 22,
//               position: "absolute",
//               textAlign: "center",
//               color: "white",
//               fontSize: 12,
//               fontFamily: "Roboto",
//               fontWeight: "200",
//               wordWrap: "break-word",
//             }}
//           >
//             Team
//           </div>
//           <div
//             data-layer="Contacts"
//             className="Contacts"
//             style={{
//               left: 0,
//               top: 44,
//               position: "absolute",
//               textAlign: "center",
//               color: "white",
//               fontSize: 12,
//               fontFamily: "Roboto",
//               fontWeight: "200",
//               wordWrap: "break-word",
//             }}
//           >
//             Contacts
//           </div>
//           <div
//             data-layer="Projects"
//             className="Projects"
//             style={{
//               left: 0,
//               top: 66,
//               position: "absolute",
//               textAlign: "center",
//               color: "white",
//               fontSize: 12,
//               fontFamily: "Roboto",
//               fontWeight: "200",
//               wordWrap: "break-word",
//             }}
//           >
//             Projects
//           </div>
//         </div>
//         <div
//           data-layer="© Copyright 2025. Made by Innewgen"
//           className="Copyright2025MadeByInnewgen"
//           style={{
//             left: 600,
//             top: 6910,
//             position: "absolute",
//             textAlign: "center",
//             color: "white",
//             fontSize: 12,
//             fontFamily: "Roboto Mono",
//             fontWeight: "300",
//             wordWrap: "break-word",
//           }}
//         >
//           © Copyright 2025. Made by Innewgen
//         </div>
//         <div
//           data-layer="Line 3"
//           className="Line3"
//           style={{
//             width: 1157,
//             height: 0,
//             left: 144,
//             top: 6869,
//             position: "absolute",
//             border: "1px white solid",
//           }}
//         ></div>
//         <div
//           data-layer="Line 4"
//           className="Line4"
//           style={{
//             width: 1157,
//             height: 0,
//             left: 144,
//             top: 6869,
//             position: "absolute",
//             border: "1px white solid",
//           }}
//         ></div>
//         <div
//           data-layer="INNEWGEN"
//           className="Innewgen"
//           style={{
//             width: 198,
//             height: 38,
//             left: 631,
//             top: 6544,
//             position: "absolute",
//             textAlign: "center",
//             color: "white",
//             fontSize: 24,
//             fontFamily: "Inter",
//             fontWeight: "700",
//             wordWrap: "break-word",
//           }}
//         >
//           INNEWGEN
//         </div>
//         <div
//           data-layer="Links"
//           className="Links"
//           style={{
//             width: 162,
//             height: 29.95,
//             left: 377,
//             top: 6689,
//             position: "absolute",
//           }}
//         >
//           <img
//             data-layer="image 33"
//             className="Image33"
//             style={{
//               width: 28.73,
//               height: 28.73,
//               left: 0,
//               top: 0,
//               position: "absolute",
//             }}
//             src="https://via.placeholder.com/29x29"
//           />
//           <img
//             data-layer="image 34"
//             className="Image34"
//             style={{
//               width: 28.73,
//               height: 28.73,
//               left: 33.62,
//               top: 0,
//               position: "absolute",
//             }}
//             src="https://via.placeholder.com/29x29"
//           />
//           <img
//             data-layer="image 35"
//             className="Image35"
//             style={{
//               width: 28.12,
//               height: 28.12,
//               left: 67.25,
//               top: 0.61,
//               position: "absolute",
//             }}
//             src="https://via.placeholder.com/28x28"
//           />
//           <img
//             data-layer="image 36"
//             className="Image36"
//             style={{
//               width: 29.95,
//               height: 29.95,
//               left: 100.26,
//               top: 0,
//               position: "absolute",
//             }}
//             src="https://via.placeholder.com/30x30"
//           />
//           <img
//             data-layer="image 37"
//             className="Image37"
//             style={{
//               width: 26.9,
//               height: 26.9,
//               left: 135.1,
//               top: 1.22,
//               position: "absolute",
//             }}
//             src="https://via.placeholder.com/27x27"
//           />
//         </div>
//       </div>
//     </>
//   );
// }

// import Image from "next/image";
// import Hero from "./components/Hero";
// import Services from "./components/services";
// import SkillsSection from "./components/Skills";
