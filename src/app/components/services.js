import { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    // Trigger animation on scroll
    const handleScroll = () => {
      const servicesSection = document.getElementById("services");
      const cards = document.querySelectorAll(".service-card");

      if (
        servicesSection &&
        window.scrollY > servicesSection.offsetTop - window.innerHeight * 0.5
      ) {
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("animate-card"); // Add animation class after a delay
          }, index * 200); // Stagger the animations
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="services"
      className="w-full h-auto bg-neutral-1000 py-20 text-white text-center relative flex flex-col items-center"
    >
      <h2 className="text-3xl sm:text-4xl font-medium mb-10">SERVICES</h2>

      {/* Background Blurred Circles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Blue Glow */}
        <div className="absolute left-[153px] top-[521px] w-96 h-96 bg-blue-800/70 rounded-full blur-3xl opacity-50 sm:w-48 sm:h-48 sm:left-[50%] sm:top-[20%] sm:-translate-x-1/2 sm:translate-y-0 sm:max-w-full" />

        {/* Orange Glow */}
        <div className="absolute left-[-307px] top-[73px] w-96 h-60 bg-orange-600 rounded-full blur-3xl rotate-[-36.44deg] opacity-50 sm:w-36 sm:h-36 sm:left-[50%] sm:top-[60%] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:max-w-full" />
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 sm:px-20 mt-10">
        {[
          { title: "Web Development" },
          { title: "System Development" },
          { title: "AI Software Development" },
          { title: "Full Stack Development" },
          { title: "Mobile App Development" },
          { title: "Software Testing Services" },
        ].map((service, index) => (
          <div
            key={index}
            className="service-card w-full sm:w-72 h-36 bg-zinc-900/60 border border-white rounded-2xl flex items-center justify-center text-lg font-light opacity-0 transition-opacity duration-500"
          >
            {service.title}
          </div>
        ))}
      </div>
    </div>
  );
}
