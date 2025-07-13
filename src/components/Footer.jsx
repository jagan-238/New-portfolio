import React from 'react';
import {
  Github,
  Linkedin,
  Youtube,
  Globe,
  Heart,
  Coffee,
  Code,
  Mail,
  Phone,
  MessageSquare
} from 'lucide-react';
import '../styles/footer.css'; // ✅ Corrected import path

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* About Section */}
          <div className="footer-about">
            <h3 className="footer-title">
              <Code className="icon" />
              Jagan Mohan Reddy
            </h3>
            <p className="footer-desc">
              Aspiring Full-Stack Developer with a B.Tech in Electrical Engineering, currently
              focused on the MERN stack. Passionate about crafting modern, responsive, and
              user-friendly web applications. Strong in JavaScript, React, Node.js, MongoDB, and
              always eager to learn and explore new technologies.
            </p>
            <div className="footer-socials">
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <Github className="social-icon" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <Linkedin className="social-icon linkedin" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <Youtube className="social-icon youtube" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul>
              <li><a href="#about">About Me</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4 className="footer-subtitle">Contact Info</h4>
            <ul>
              <li>
                <Mail className="contact-icon" />
                <a href="mailto:eragalajaganmohanreddy1160@gmail.com">
                  eragalajaganmohanreddy1160@gmail.com
                </a>
              </li>
              <li>
                <Phone className="contact-icon" />
                <span>+91 8179313022</span>
              </li>
              <li>
                <MessageSquare className="contact-icon" />
                <span>Available for freelance</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Jagan Mohan Reddy. All rights reserved.</p>
          <div className="made-with">
            Made with <Heart className="icon heart" /> and <Coffee className="icon coffee" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
