import React from 'react';
import projectsData from './projectsData.json';  // Assuming your JSON data is stored in a file

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center uppercase">
          Recent Projects
        </h2>
        <div className="pt-10 grid md:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                  >
                    View Project
                    <i data-lucide="external-link" className="w-4 h-4"></i>
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
