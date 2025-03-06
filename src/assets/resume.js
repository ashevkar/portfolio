import React from "react";
import "./css/resume.css"; // Importing the CSS file
import { FaGraduationCap } from "react-icons/fa6";
import { FaSuitcase } from "react-icons/fa6";
import TransitionWrapper from "./TransitionWrapper";

const Resume = () => {
  const workExperience = [
    {
      title: "Web Developer",
      company: "Anikaay Integration",
      duration: "2022 - 2023",
      description: [
        "Developed and maintained dynamic web applications using React.js, Node.js, and Redux, ensuring high performance and a seamless user experience.",
        "Integrated third-party APIs (e.g., payment gateways, weather APIs) and optimized frontend performance with lazy loading, code splitting, and web vitals, achieving a 15% faster load time.",
        "Led the design and implementation of new features using MongoDB, Express.js, and RESTful APIs, enhancing user engagement and improving application scalability.",
        "Collaborated with cross-functional teams including product managers and UI/UX designers, utilizing JIRA for task tracking, Git for version control, and Agile methodologies for iterative development.",
        "Utilized Git for version control, JIRA for Agile project management, and Docker for streamlined CI/CD and deployment processes.",
        "Worked on building new features and improving product functionality in a fast-paced startup environment, adapting quickly to evolving requirements.",
      ],
    },
    {
      title: "Frontend Developer",
      company: "GlobalStep",
      duration: "2020 - 2022",
      description: [
        "Developed and maintained responsive web applications using AngularJS, React.js, and JavaScript, enhancing user experience and performance.",
        "Implemented cross-browser and cross-device compatibility features to ensure seamless functionality across multiple platforms.",
        "Utilized JIRA for tracking development tasks and bug fixes, streamlining the agile workflow.",
        "Automated end-to-end testing with Cypress, Jest, reducing manual efforts by 30%.",
        "Optimized frontend performance with lazy loading, code splitting for a seamless experience."
      ],
    },
  ];

  const education = [
    {
      title: "Masters Degree",
      institution: "University Name",
      duration: "2007 - 2009",
      description:
        "Key Courses: Advanced Software Engineering, Data Structures and Algorithms, Web Application Development, Cloud Computing and DevOps, Database Systems and Management.",
    },
    {
      title: "Bachelors Degree",
      institution: "University Name",
      duration: "2002 - 2006",
      description:
        "Key Courses: C, Data Structures, Java, Software Modeling, Data Analytics, Database Management.",
    },
  ];

  return (
    <div id="resume-section" className="resume-background">
      <div className="resume-container">
        <div className="resume-heading-container">
          <div className="resume-heading">
            <h1>RESUME</h1>
          </div>
        </div>
        <div className="resume-content">
          <div className="timeline-container">
            
            <ul>

              <div className="education">
                <TransitionWrapper>
                <h3 className="heading">Education</h3>

                <div className="timeline">
                  <li className="timeline-header">
                    <div className="timeline-header-title"></div>
                  </li>

                  {education.map((item, index) => (
                    <li
                      key={index}
                      className={`timeline-item ${
                        index % 0 === 0
                          ? "timeline-item-left"
                          : "timeline-item-right"
                      }`}
                    >
                      <div className="timeline-badge">
                        <FaGraduationCap />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-panel-heading">
                          <h3 className="timeline-title">{item.title}</h3>
                          <span className="timeline-institution">
                            {item.institution} - {item.duration}
                          </span>
                        </div>
                        <div className="timeline-panel-body">
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </div>
                </TransitionWrapper>
              </div>

              <br />

              <div className="work-experience">
                <TransitionWrapper>
                <h3 className="heading">Work Experience</h3>

                <div className="timeline">
                  <li className="timeline-header">
                    <div className="timeline-header-title"></div>
                  </li>

                  {workExperience.map((item, index) => (
                    <li
                      key={index}
                      className={`timeline-item ${
                        index % 0 === 0
                          ? "timeline-item-left"
                          : "timeline-item-right"
                      }`}
                    >
                      <div className="timeline-badge">
                        <FaSuitcase />
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-panel-heading">
                          <h3 className="timeline-title">{item.title}</h3>
                          <span className="timeline-company">
                            {item.company} - {item.duration}
                          </span>
                        </div>
                        <div className="timeline-panel-body">
                          {/* <p>{item.description}</p> */}
                          {Array.isArray(item.description) &&
                          item.description.length > 0 ? (
                            <ul>
                              {item.description.map((point, descIndex) => (
                                <li
                                  style={{ listStyleType: "disc" }}
                                  key={descIndex}
                                >
                                  {point}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p>{item.description}</p>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </div>
                </TransitionWrapper>
              </div>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
