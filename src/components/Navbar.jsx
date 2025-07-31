import React, { useState } from "react";
import { Menu, Youtube, Github, Linkedin, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import myResume from "../assets/jagan_resume.pdf";
import "../styles/navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleResumeClick = () => {
    // Open resume in new tab
    window.open(myResume, "_blank");

    // Download resume
    const link = document.createElement("a");
    link.href = myResume;
    link.download = "Jagan_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className={`navbar ${isDarkMode ? "dark" : "light"}`}>
      <div className="navbar-container">
        {/* Brand & Toggle */}
        <div className="navbar-left">
          <span className="brand">EJMR</span>
          <button
            className="menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            <Menu className="icon" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
          <ul>
            {navItems.map(({ name, href }) => (
              <li key={name}>
                <a href={href}>{name}</a>
              </li>
            ))}
            <li>
              <button className="resume-button" onClick={handleResumeClick}>
                Resume
              </button>
            </li>
          </ul>
        </div>

        {/* Social & Theme Toggle */}
        <div className="navbar-right">
          <a
            href="https://www.youtube.com/@jaganmohanreddy9266"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube className="icon youtube" />
          </a>
          <a
            href="https://github.com/jagan-238"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="icon github" />
          </a>
          <a
            href="https://www.linkedin.com/in/jagan-mohan-reddy-eragala-73baa3293/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="icon linkedin" />
          </a>
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? (
              <Sun className="icon sun" />
            ) : (
              <Moon className="icon moon" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
