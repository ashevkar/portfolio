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
    "Developed a scalable luxury e-commerce platform used by over 1 million users, optimizing product customization workflows and dynamic UI rendering, resulting in a 60% increase in customer engagement and 70% faster load times on high-resolution product pages.",
    "Integrated real-time inventory, pricing, and product configuration using REST APIs, enhancing customer experience and improving conversion rates by 25% with technologies such as React.js, Tailwind CSS, Next.js, and TypeScript.",
    "Architected a modular, component-driven system ensuring mobile responsiveness, accessibility, and rapid deployment. Collaborated with a cross-functional team of 6 to deliver high-impact features efficiently."
  ],
    },
    {
      title: "Software Development Engineer",
      company: "GlobalStep",
      duration: "Aug 2020 – Mar 2022",
      description: [
       "Built internal productivity tools for QA testers using Java, SQL, and React, resulting in a 20% increase in team efficiency, workflow automation, and internal user satisfaction.",
    "Directed a cross-functional team of 50 developers and QA engineers, implementing new features and backend integrations, leading to a 15% faster development cycle and 40% fewer tool-related issues.",
    "Optimized system performance by tuning backend processes and APIs, achieving a 40% reduction in errors and improving responsiveness across internal platforms."
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
