import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/about.css'; 

const AboutMe = () => {
  const { isDarkMode } = useTheme();

  return (
    <div id="about" className="about-container">
      <div className="about-section">
        <h1 className="section-title">
          About <span className="highlight">Me</span>
        </h1>

        <p className="paragraph">
          I am <span className="bold">Eragala Jagan Mohan Reddy</span>, an aspiring
          <span className="semibold"> Full-Stack Developer</span> with a B.Tech in
          <span className="semibold"> Electrical Engineering</span>, currently focused on the
          <span className="semibold"> MERN stack</span>. I am passionate about building modern,
          responsive, and user-friendly web applications that solve real-world problems.
        </p>

        <p className="paragraph">
          💡 <span className="semibold">Skilled in:</span> JavaScript, HTML, CSS, React, Redux,
          Node.js, Express.js, MongoDB, and more. I also have a strong foundation in
          <span className="semibold"> Data Structures & Algorithms</span>.
        </p>

        <p className="paragraph">
          🛠️ <span className="semibold">Hands-on experience through:</span> real-world projects,
          coding challenges, and hackathons.
        </p>

        <p className="paragraph">
          💼 <span className="semibold">Open to opportunities:</span> Frontend Developer | Full-Stack Developer
        </p>
      </div>

      {/* Education Section */}
      <div className="education-section">
        <div className="timeline">
          <div className="timeline-item">
            <h3 className="education-title">Graduation - Electrical & Electronics Engineering</h3>
            <p className="education-subtext">Sree Vidyanikethan Engineering College, Tirupati, Andhra Pradesh</p>
            <p className="education-date">2021 - 2024</p>
            <p className="education-score">CGPA: 8.27</p>
          </div>

          <div className="timeline-item">
            <h3 className="education-title">12th - Diploma - Electrical & Electronics Engineering</h3>
            <p className="education-subtext">Loyola Polytechnic (YSRR), Pulivendula, Andhra Pradesh</p>
            <p className="education-date">2018 - 2021</p>
            <p className="education-score">Percentage: 69%</p>
          </div>

          <div className="timeline-item">
            <h3 className="education-title">10th - SSC</h3>
            <p className="education-subtext">Usha Kiran High School, Vempalli, Andhra Pradesh</p>
            <p className="education-date">2017 - 2018</p>
            <p className="education-score">CGPA: 9.5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
