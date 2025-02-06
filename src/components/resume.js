import React from "react";
import "./resume.css"; // Importing the CSS file
import { FaGraduationCap } from "react-icons/fa6";
import { FaSuitcase } from "react-icons/fa6";

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
      title: "Test Engineer",
      company: "GlobalStep",
      duration: "2020 - 2022",
      description: [
        "        Conducted exploratory testing to identify defects and ensure comprehensive coverage of software features.",
        "Utilized bug-tracking tools like JIRA to document, prioritize, and manage defects, ensuring smooth communication with the development team.",
        "Collaborated with developers to optimize test plans and improve defect resolution processes, enhancing overall product quality.",
        "Performed compatibility and performance testing across different platforms, ensuring seamless functionality across devices and operating systems.",
        "Reviewed design specifications to ensure clarity and testability, contributing to early detection of issues before development.",
      ],
    },
  ];

  const education = [
    {
      title: "Masters Degree",
      institution: "University Name",
      duration: "2007 - 2009",
      description:
      "Key Courses: Advanced Software Engineering, Data Structures and Algorithms, Web Application Development, Cloud Computing and DevOps, Database Systems and Management."
    },
    {
      title: "Bachelors Degree",
      institution: "University Name",
      duration: "2002 - 2006",
      description:
      "Key Courses: C, Data Structures, Java, Software Modeling, Data Analytics, Database Management."
    },
  ];

  return (
    <section id="resume">
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
            <div class="education">
              <h3 className="heading">Education</h3>

              <div class="timeline">
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
              </div>

              <br />


              <div class="work-experience">
              <h3 className="heading">Work Experience</h3>

              <div class="timeline">
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
              </div>

            
            </ul>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Resume;
