import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/skills.css'; // ✅ Corrected CSS import path

// Icons
import htmlIcon from '../assets/icons/html-5.png';
import cssIcon from '../assets/icons/css-3.png';
import jsIcon from '../assets/icons/js.png';
import reactIcon from '../assets/icons/react.png';
import nodejsIcon from '../assets/icons/nodejs.svg';
import reduxIcon from '../assets/icons/redux.svg';
import firebaseIcon from '../assets/icons/firebase.png';
import mongodbIcon from '../assets/icons/mongodb.png';

const skills = [
  { name: 'HTML', icon: htmlIcon, colors: ['#ff6a00', '#ee0979'] },
  { name: 'CSS', icon: cssIcon, colors: ['#007bff', '#0056b3'] },
  { name: 'JavaScript', icon: jsIcon, colors: ['#f7df1e', '#f9c91a'] },
  { name: 'React', icon: reactIcon, colors: ['#61dafb', '#21a1f1'] },
  { name: 'Node.js', icon: nodejsIcon, colors: ['#68a063', '#3b7e30'] },
  { name: 'Redux', icon: reduxIcon, colors: ['#764abc', '#5e369f'] },
  { name: 'Firebase', icon: firebaseIcon, colors: ['#ffca28', '#ffa000'] },
  { name: 'MongoDB', icon: mongodbIcon, colors: ['#4DB33D', '#3fa034'] },
];

const Skills = () => {
  const { isDarkMode } = useTheme();

  return (
    <div id="skills" className={`skills-section ${isDarkMode ? 'dark' : ''}`}>
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="icon-wrapper">
              <div
                className="rotating-circle"
                style={{
                  background: `conic-gradient(${skill.colors[0]} 0% 30%, transparent 30% 100%)`,
                }}
              ></div>
              <div className="icon-circle">
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
              </div>
            </div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
