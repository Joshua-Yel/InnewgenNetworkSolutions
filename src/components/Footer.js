import React from "react";
import {
  FiGithub,
  FiLinkedin,
  FiFacebook,
  FiInstagram,
  FiMail,
} from "react-icons/fi";

import "../ui/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleAnchorClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className=" footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Innewgen</h3>
            <p className="footer-description">
              Engineering Tomorrow's Enterprises, Today. Expert-driven software
              development and AI solutions for forward-thinking businesses.
            </p>
            <div className="social-links">
              <a
                href="https://github.com/Innewgen"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              {/* <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a> */}
              <a
                href="https://www.facebook.com/Innewgen.Official"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FiFacebook />
              </a>
              <a
                href="https://www.instagram.com/innewgen.official/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FiInstagram />
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleAnchorClick(e, "services")}
                >
                  Custom System Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleAnchorClick(e, "services")}
                >
                  AI & Machine Learning
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleAnchorClick(e, "services")}
                >
                  Web & Mobile Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleAnchorClick(e, "services")}
                >
                  IT Consulting
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => handleAnchorClick(e, "portfolio")}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  onClick={(e) => handleAnchorClick(e, "process")}
                >
                  Our Process
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleAnchorClick(e, "contact")}
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#terms">Terms of Service</a>
              </li>
              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-contact">
              <li>
                <FiMail />
                <a href="mailto:hello@innewgen.com">
                  business.urieltribiana@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; Copyright {currentYear}. Innewgen. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
