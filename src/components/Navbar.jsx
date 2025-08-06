import React, { useState } from "react";
import { Menu, Youtube, Github, Linkedin } from "lucide-react";
// import myResume from "../assets/jagan_resume.pdf";
import "../styles/navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleResumeClick = () => {
    const fileId = "17vkbUy8vbNXWoTVyqZKwj-BDMmDkKc9w";

    // 1. Open resume in a new tab (preview)
    window.open(`https://drive.google.com/file/d/${fileId}/view`, "_blank");

    // 2. Trigger download
    const downloadLink = document.createElement("a");
    downloadLink.href = `https://drive.google.com/uc?export=download&id=${fileId}`;
    downloadLink.download = "Eragala_Jagan_Mohan_Reddy_Resume.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <nav className="navbar">
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

        {/* Social Links */}
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
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
