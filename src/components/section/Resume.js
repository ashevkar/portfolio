import React from "react";
import '../../assets/css/resume.css';
import { FaGraduationCap } from "react-icons/fa6";
import { FaSuitcase } from "react-icons/fa6";
import TransitionWrapper from "../common/TransitionWrapper";

const Resume = () => {
  const workExperience = [
    {
      title: "Software Developer",
      company: "Anikaay Integration",
      duration: "Mar 2022 – Jun 2023",
      description: [
        "Developed e-commerce platform, streamlined payment processing. The system led to a total cost savings of $1 million annually, increased sales by 300% and reduced 80% processing time",
        "Spearheaded secure payment integration, customer order processing and reduced 30% transaction failures by implementing Agile methodologies using GO, PostgreSQL, Kafka & Java ",
        "Designed service oriented architecture, resulting in thousands of seamless payment transfers. Managed team of 17 including 7 engineers, 4 architects & 6 testers. ",
      ],
    },
    {
      title: "Software Development Engineer",
      company: "GlobalStep",
      duration: "Aug 2020 – Mar 2022",
      description: [
        "Built 3D game features across multiple platforms, resulting in a 20% increase in player engagement, session duration and user experience using industry standard tools and engines.",
        "Directed a team of 50 developers and testers, implementing new gameplay features, leading to a 15% faster development  cycle and reduction in 25% post-release bugs.",
        "Optimized game performance by debugging and refining code, achieving a 40% reduction in errors & reducing crash rates across supported devices.",
      ],
    },
  ];

  const education = [
    {
      title: "Masters Degree",
      institution: "Illinois Institute of Technology",
      duration: "May 2025",
      description:
        "Coursework: Object-oriented programming, Advanced Software Programming, Full Stack Development, System Design   ",
    },
    {
      title: "Bachelors Degree",
      institution: "Jayawantrao Sawant College of Engineering",
      duration: "April 2020",
      description:
        "Relevant Coursework: Data Structures, Analysis of Algorithm, Software Modeling, Data Analytics, Database Management",
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
