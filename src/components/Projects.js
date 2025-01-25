import React from 'react';
import "./projects.css";

const Projects = () => {
  const projects = [
    { name: 'E-commerce Website', description: 'Built with React and Tailwind CSS', link: '#' },
    { name: 'Hospital Management System', description: 'Developed with Java and JSF', link: '#' },
    { name: 'Restaurant Discovery Platform', description: 'Created with Java and JDBC', link: '#' },
    { name: 'Restaurant Discovery Platform', description: 'Created with Java and JDBC', link: '#' },
    { name: 'Restaurant Discovery Platform', description: 'Created with Java and JDBC', link: '#' },
    { name: 'Restaurant Discovery Platform', description: 'Created with Java and JDBC', link: '#' },

  ];

  return (
    // <section id="projects" className="projects">
    //   <h2>Projects</h2>
    //   <div className="project-list">
    //     {projects.map((project, index) => (
    //       <div key={index} className="project">
    //         <h3>{project.name}</h3>
    //         <p>{project.description}</p>
    //         <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
    //       </div>
    //     ))}
    //   </div>
    // </section>
    <div className="projects">
      <div class="heading">
        <h2>RECENT
          <span className='two'>PROJECTS</span>
        </h2>
        <div class="project-list">

        </div>
      </div>
    </div>
  );
};

export default Projects;
