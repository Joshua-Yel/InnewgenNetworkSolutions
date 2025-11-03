"use client";

import { useState, useEffect } from "react";

const CursorEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Add new trail element
      setTrail((prevTrail) => [
        ...prevTrail.slice(-8), // Keep only the last 8 elements for a fading effect
        { x: e.clientX, y: e.clientY, id: Math.random() },
      ]);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove);

    // Change color on hover
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Cursor Circle */}
      <div
        className="cursor-effect"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          background: isHovering
            ? "linear-gradient(135deg, #0f52ba, #ff4500)"
            : "transparent",
          borderColor: isHovering ? "transparent" : "rgba(255, 255, 255, 0.6)",
        }}
      />

      {/* Fading Trail Effect */}
      {trail.map(({ x, y, id }, index) => (
        <div
          key={id}
          className="cursor-trail"
          style={{
            left: `${x}px`,
            top: `${y}px`,
            opacity: 1 - index * 0.12, // Fade out effect
          }}
        />
      ))}
    </>
  );
};

export default CursorEffect;
