import React from "react";
import "../../assets/css/resume.css";
import { FaGraduationCap } from "react-icons/fa6";
import { FaSuitcase } from "react-icons/fa6";
import TransitionWrapper from "../common/TransitionWrapper";

const Resume = () => {
  const workExperience = [
    {
      title: "Software Developer",
      company: "Arizona State University",
      duration: "Aug 2025 – Present",
      description: [
        "Built and maintained a research collaboration platform supporting 100+ concurrent users, streamlining grant discovery and multi-role workflows",
        "Led product lifecycle end-to-end — from requirements and prototyping to AI-powered search features that enabled semantic discovery across thousands of research records",
        "Scaled 5+ production services, established CI/CD pipelines, and drove cross-functional collaboration across 3 teams",
      ],
    },
    {
      title: "Software Developer",
      company: "Anikaay Integration",
      duration: "Mar 2022 – Jun 2023",
      description: [
        "Directed microservices migration for 2M users, reducing load times by 40% and maintaining 99.9% uptime while resolving legacy bottlenecks.",
        "Designed APIs and CI/CD pipelines that increased data throughput by 25%, cut deployment time by 30%, and improved reliability across 10+ services.",
        "Mentored 4 junior engineers, reducing production issues by 20%, and collaborated with product to hit 100% of quarterly roadmap goals.",
      ],
    },
    {
      title: "Software Developer",
      company: "GlobalStep",
      duration: "Aug 2020 – Mar 2022",
      description: [
        "Led full-stack development of a customer portal, launching 4 major feature releases within the first year while integrating secure payment gateways enabling 1,000+ monthly transactions.",
        "Optimized database performance and implemented testing practices, reducing latency to under 200ms and resolving 25+ bugs per sprint before user acceptance testing.",
        "Streamlined developer workflows through Git flow and API documentation, enabling seamless collaboration across 5 developers and reducing engineer onboarding time to 3 days.",
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
