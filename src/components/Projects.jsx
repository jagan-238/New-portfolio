import React from "react";
import "../styles/projects.css"; // Correct path

// Import images
import casioImg from "../assets/projectImg/casio.png";
import votingImg from "../assets/projectImg/voting.png";
import travelImg from "../assets/projectImg/travel.png";
import TastyImg from "../assets/projectImg/Tasty.png";

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
    title: "TastyTrail",
    description:
      "TastyTrail Express is a simple and elegant food ordering app where users can browse a delicious menu of items like biryanis, cakes, juices and more. Add your favorite dishes to the cart and place an order with ease.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
    liveLink: "https://tastyfoods-app.netlify.app/",
    codeLink: "https://github.com/jagan-238/Recipe-App",
    image: TastyImg,
  },
];

const ProjectCard = ({ project }) => (
  <div className="project-card">
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
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
