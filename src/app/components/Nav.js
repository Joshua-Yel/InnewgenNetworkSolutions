"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-neutral-900 text-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide"
        >
          INNEWGEN
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link
            href="#about"
            className="hover:text-gray-400 transition"
          >
            About
          </Link>
          <Link
            href="#services"
            className="hover:text-gray-400 transition"
          >
            Services
          </Link>
          <Link
            href="#portfolio"
            className="hover:text-gray-400 transition"
          >
            Portfolio
          </Link>
          <Link
            href="#contact"
            className="hover:text-gray-400 transition"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <input
            className="label-check hidden"
            id="label-check"
            type="checkbox"
            checked={isOpen}
            onChange={() => setIsOpen(!isOpen)}
          />
          <label
            htmlFor="label-check"
            className="hamburger-label"
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </label>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`${
          isOpen ? "top-[64px] opacity-100" : "top-[-200px] opacity-0"
        } md:hidden flex flex-col items-center bg-neutral-900 absolute w-full transition-all duration-300 ease-in-out`}
      >
        <Link
          href="#about"
          className="py-3 w-full text-center border-b border-gray-700 hover:bg-neutral-800"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          href="#services"
          className="py-3 w-full text-center border-b border-gray-700 hover:bg-neutral-800"
          onClick={() => setIsOpen(false)}
        >
          Services
        </Link>
        <Link
          href="#portfolio"
          className="py-3 w-full text-center border-b border-gray-700 hover:bg-neutral-800"
          onClick={() => setIsOpen(false)}
        >
          Portfolio
        </Link>
        <Link
          href="#contact"
          className="py-3 w-full text-center hover:bg-neutral-800"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
