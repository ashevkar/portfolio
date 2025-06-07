import React from "react";
import projectsData from "../data/projectsData.json";
import "../../assets/css/projects.css";
import { ExternalLink } from "lucide-react";
import ringImage from "../../assets/images/ring.png";
import orkutImage from "../../assets/images/orkut.png";
import footwearImage from "../../assets/images/footwear.png";
import doctorImage from "../../assets/images/doctor.png";
import restImage from "../../assets/images/restaurant.png";
import moodImage from "../../assets/images/mood.png";
import portfolioImage from "../../assets/images/portfolio.png";
import coalImage from "../../assets/images/coal.png";
import artImage from "../../assets/images/art.png";

const images = {
  "ring.png": ringImage,
  "orkut.png": orkutImage,
  "footwear.png": footwearImage,
  "doctor.png": doctorImage,
  "restaurant.png": restImage,
  "mood.png": moodImage,
  "portfolio.png": portfolioImage,
  "coal.png": coalImage,
  "art.png": artImage,
};

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container-project">
        <h1 className="section-title">Recent Projects</h1>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <img
                src={images[project.image]}
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
