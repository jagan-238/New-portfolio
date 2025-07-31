import React from 'react';
import { useTheme } from '../context/ThemeContext';
import myImage from '../assets/profile2.png';
import '../styles/mainPage.css';

const MainPage = () => {
  const { isDarkMode } = useTheme();

  return (
    <div id="home" className={`main-page ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Left Section */}
      <div className="text-section">
        <h2 className="intro-text">Hello!</h2>
        <h1 className="main-heading">
          I'm <span className="highlight-name">Jagan Mohan Reddy</span>
        </h1>
        <h2 className="role-heading">MERN Stack & Frontend Developer</h2>
        <p className="description">
          Aspiring Full-Stack Developer with a B.Tech in Electrical Engineering, currently focused
          on the MERN stack. Passionate about building modern, user-friendly web applications and
          solving real-world problems. With hands-on experience through projects and hackathons,
          I’m skilled in JavaScript, HTML, CSS, React, Node.js, and MongoDB. Committed to continuous
          learning and eager to contribute to impactful tech solutions.
        </p>
        <div className="button-group">
          <a href="#contact" className="contact-btn">Contact</a>
        </div>
      </div>

      {/* Right Section */}
      <div className="image-section">
        <div className="image-container">
          <img src={myImage} alt="Jagan Mohan Reddy" className="profile-img" />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
