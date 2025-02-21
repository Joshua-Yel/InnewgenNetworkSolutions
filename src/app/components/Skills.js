import Image from "next/image";
import { motion } from "framer-motion";

const techStackIcons = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://img.icons8.com/?size=100&id=uSHYbs6PJfMT&format=png&color=000000",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",

  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "https://www.svgrepo.com/show/354575/xampp.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",

  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
  "https://raw.githubusercontent.com/Shopify/awesome-hydrogen/bb3eec5064a8d93d2a0ae38e7c28eabc19411466/assets/hydrogen-logo.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",

  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg",

  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",

  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "https://img.icons8.com/?size=100&id=12599&format=png&color=FFFFFF",
  // "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
];

export default function SkillsSection() {
  return (
    <div>
      <div className="skills-desktop w-full bg-neutral-1000 py-20 text-white text-center overflow-hidden">
        <div
          className="w-full bg-neutral-1000 py-20 text-white text-center overflow-hidden"
          style={{
            position: "static",
            flex: "auto",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* SKILLS Title with animation */}
          <motion.div
            className="Skills"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              fontSize: 54,
              // fontFamily: "Montserrat",
              fontWeight: "200",
              wordWrap: "break-word",
              zIndex: 1000,
            }}
          >
            SKILLS
          </motion.div>

          {/* Icons Section with animation */}
          <div
            className="Group19"
            style={{
              width: 939,
              height: 367,
              position: "relative",
              marginTop: "5px",
            }}
          >
            <motion.div
              className="Rectangle16"
              style={{
                width: 939,
                height: 367,
                position: "absolute",
                background: "#1B1B1B",
                borderRadius: 16,
              }}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            />

            {techStackIcons.slice(0, 9).map((icon, index) => (
              <motion.img
                key={index}
                src={icon}
                alt="Tech Icon"
                style={{
                  width: 75.65,
                  height: 75.65,
                  top: 100,
                  marginLeft: "25px",
                  marginRight: "25px",
                  marginBottom: "50px",
                  position: "relative",
                  display: "inline-block",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{
                  delay: 0,
                  scale: 1.6,
                  transition: { duration: 0.3 },
                }}
              />
            ))}
          </div>
          <div
            data-layer="Group 20"
            className="Group20"
            style={{
              width: 939,
              height: 366.9,
              // left: 251,
              // top: 2650,
              position: "relative",
              marginTop: "10px",
            }}
          >
            <motion.div
              className="Rectangle16"
              style={{
                width: 939,
                height: 367,
                position: "absolute",
                background: "#1B1B1B",
                borderRadius: 16,
              }}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            />
            {techStackIcons.slice(9, 18).map((icon, index) => (
              <motion.img
                key={index}
                src={icon}
                alt="Tech Icon"
                style={{
                  width: 75.65,
                  height: 75.65,
                  top: 100,
                  marginLeft: "25px",
                  marginRight: "25px",
                  marginBottom: "50px",
                  position: "relative",
                  display: "inline-block",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{
                  delay: 0,
                  scale: 1.6,
                  transition: { duration: 0.3 },
                }}
              />
            ))}
          </div>
          <div
            data-layer="Group 21"
            className="Group21"
            style={{
              width: 939,
              height: 250.59,
              // left: 251,
              // top: 3052,
              position: "relative",
              marginTop: "10px",
            }}
          >
            <motion.div
              data-layer="Rectangle 17"
              className="Rectangle17"
              style={{
                width: 939,
                height: 250.59,
                left: 0,
                top: 0,
                position: "absolute",
                background: "#1B1B1B",
                borderRadius: 16,
              }}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            />
            {techStackIcons.slice(18, 24).map((icon, index) => (
              <motion.img
                key={index}
                src={icon}
                alt="Tech Icon"
                style={{
                  width: 75.65,
                  height: 75.65,
                  top: 100,
                  marginLeft: "25px",
                  marginRight: "25px",
                  marginBottom: "50px",
                  position: "relative",
                  display: "inline-block",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{
                  delay: 0,
                  scale: 1.6,
                  transition: { duration: 0.3 },
                }}
              />
            ))}
          </div>
          <div
            data-layer="Group 22"
            className="Group22"
            style={{
              width: 939,
              height: 250.59,
              // left: 251,
              // top: 3348,
              position: "relative",
              marginTop: "10px",
            }}
          >
            <motion.div
              data-layer="Rectangle 17"
              className="Rectangle17"
              style={{
                width: 939,
                height: 250.59,
                left: 0,
                top: 0,
                position: "absolute",
                background: "#1B1B1B",
                borderRadius: 16,
              }}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            />

            {techStackIcons.slice(24, 28).map((icon, index) => (
              <motion.img
                key={index}
                src={icon}
                alt="Tech Icon"
                style={{
                  width: 75.65,
                  height: 75.65,
                  top: 100,
                  marginLeft: "25px",
                  marginRight: "25px",
                  marginBottom: "50px",
                  position: "relative",
                  display: "inline-block",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{
                  delay: 0,
                  scale: 1.6,
                  transition: { duration: 0.3 },
                }}
              />
            ))}
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 0fr)",
              gridTemplateRows: "auto",
              gap: 35,
              // width: "100%",
              height: "100%",
              paddingTop: "10px",
            }}
          >
            <div
              data-layer="Group 23"
              className="Group23"
              style={{
                width: 546,
                height: 252.95,
                // left: 251,
                // top: 3644,
                position: "relative",
              }}
            >
              <motion.div
                data-layer="Rectangle 17"
                className="Rectangle17"
                style={{
                  width: 546,
                  height: 252.95,
                  left: 0,
                  top: 0,
                  position: "absolute",
                  background: "#1B1B1B",
                  borderRadius: 16,
                }}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
              />
              {techStackIcons.slice(28, 32).map((icon, index) => (
                <motion.img
                  key={index}
                  src={icon}
                  alt="Tech Icon"
                  style={{
                    width: 75.65,
                    height: 75.65,
                    top: 100,
                    marginLeft: "25px",
                    marginRight: "25px",
                    marginBottom: "50px",
                    position: "relative",
                    display: "inline-block",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{
                    delay: 0,
                    scale: 1.6,
                    transition: { duration: 0.3 },
                  }}
                />
              ))}
            </div>
            <div
              data-layer="Group 24"
              className="Group24"
              style={{
                width: 356.11,
                height: 253,
                // left: 833.89,
                // top: 3644,
                position: "relative",
              }}
            >
              <motion.div
                data-layer="Rectangle 17"
                className="Rectangle17"
                style={{
                  width: 356.11,
                  height: 253,
                  left: 0,
                  top: 0,
                  position: "absolute",
                  background: "#1B1B1B",
                  borderRadius: 16,
                }}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
              />
              {techStackIcons.slice(32, 35).map((icon, index) => (
                <motion.img
                  key={index}
                  src={icon}
                  alt="Tech Icon"
                  style={{
                    width: 75.65,
                    height: 75.65,
                    top: 100,
                    marginLeft: "25px",
                    marginRight: "25px",
                    marginBottom: "50px",
                    position: "relative",
                    display: "inline-block",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{
                    delay: 0,
                    scale: 1.6,
                    transition: { duration: 0.3 },
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="skills-mobile  w-full bg-neutral-1000 py-20  text-white text-center overflow-hidden">
        <motion.div
          className="Skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: 54,
            fontWeight: "200",
            wordWrap: "break-word",
            zIndex: 1000,
          }}
        >
          SKILLS
        </motion.div>

        {/* Icons Section */}
        <div className="mt-5 flex flex-wrap justify-center gap-8 px-4">
          {techStackIcons.map((icon, index) => (
            <motion.div
              key={index}
              className="relative flex justify-center items-center"
              style={{
                width: "55px",
                height: "55px",
                transition: "all 0.3s ease",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{
                scale: 1.6,
                transition: { duration: 0.3 },
              }}
            >
              <motion.img
                src={icon}
                alt="Tech Icon"
                width={35}
                height={35}
                className="rounded-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// export default function SkillsSection() {
//   return (
//     <div className="w-full bg-neutral-1000 py-20 text-white text-center overflow-hidden">
//       <motion.div
//         className="Skills"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         style={{
//           fontSize: 54,
//           fontWeight: "200",
//           wordWrap: "break-word",
//           zIndex: 1000,
//         }}
//       >
//         SKILLS
//       </motion.div>

//       {/* Icons Section */}
//       <div className="mt-5 flex flex-wrap justify-center gap-8 px-4">
//         {techStackIcons.map((icon, index) => (
//           <motion.div
//             key={index}
//             className="relative flex justify-center items-center"
//             style={{
//               width: "75px", // Base icon size
//               height: "75px", // Base icon size
//               transition: "all 0.3s ease",
//             }}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: index * 0.1, duration: 0.6 }}
//             whileHover={{
//               scale: 1.6,
//               transition: { duration: 0.3 },
//             }}
//           >
//             <Image
//               src={icon}
//               alt="Tech Icon"
//               width={45} // Adjusted size for responsiveness
//               height={45} // Adjusted size for responsiveness
//               className="rounded-full"
//             />
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }
