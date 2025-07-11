import React from "react";
import { useTheme } from "../context/ThemeContext";
import "../styles/projects.css"; // Correct path

// Import images
import casioImg from "../assets/projectImg/casio.png";
import votingImg from "../assets/projectImg/voting.png";
import travelImg from "../assets/projectImg/travel.png";
import mapsImg from "../assets/projectImg/maps.png";

const projects = [
  {
    title: "Casio Clone",
    description:
      "A shopping site clone with search and filter features built using HTML, CSS, JS, and Firebase.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "Firebase"],
    liveLink: "https://beamish-swan-e2cb71.netlify.app/",
    codeLink: "https://github.com/DnyaneshwarKalwale/Construct_Week_Casio_Website",
    image: casioImg,
  },
  {
    title: "Online Voting System",
    description:
      "Secure voting app using React and Firebase with MFA, real-time vote tracking, and user authentication.",
    tech: ["React", "Firebase", "HTML", "CSS", "JavaScript"],
    liveLink: "https://onlinevotingsys.netlify.app/",
    codeLink: "https://github.com/anisha314/OnlineVotingSystem",
    image: votingImg,
  },
  {
    title: "Travel Budget Planning Tool",
    description:
      "Track expenses, set goals, convert currencies, and collaborate with friends for smart budgeting.",
    tech: ["React", "Firebase", "HTML", "CSS", "React Router"],
    liveLink: "https://zesty-entremet-4ec3aa.netlify.app/",
    codeLink: "https://github.com/jagan-238/Travel-Budget-Planning-Tool/tree/main/TripTrack",
    image: travelImg,
  },
  {
    title: "Google Maps Clone",
    description:
      "Google Maps clone using Leaflet.js with live location, search, routing, and saved places.",
    tech: ["HTML", "CSS", "JavaScript", "Leaflet.js"],
    liveLink: "https://gregarious-rolypoly-fa516b.netlify.app/",
    codeLink: "https://github.com/jagan-238/google--maps",
    image: mapsImg,
  },
];

const ProjectCard = ({ project, isDarkMode }) => (
  <div className={`project-card ${isDarkMode ? "dark" : ""}`}>
    <img src={project.image} alt={project.title} className="project-image" />
    <div className="project-content">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tech-list">
        {project.tech.map((tech, index) => (
          <span key={index} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
      <div className="project-links">
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
          🔗 Live
        </a>
        <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
          💻 Code
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="projects" className={`projects-section ${isDarkMode ? "dark" : ""}`}>
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} isDarkMode={isDarkMode} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
