import React from "react";
import projectsData from "./projectsData.json";
import "./css/projects.css";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container-project">
        <h1 className="section-title">Recent Projects</h1>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="overlay">
                <div className="overlay-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-skills">Skills: {project.skills}</p>
                  <p className="project-description">
                    Description: {project.description}
                  </p>
                  <a href={project.link} className="project-link">
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
