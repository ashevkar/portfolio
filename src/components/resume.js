import React from "react";
import "./resume.css"; // Importing the CSS file
import { FaGraduationCap } from "react-icons/fa6";
import { FaSuitcase } from "react-icons/fa6";

const Resume = () => {
  const workExperience = [
    {
      title: "Masters in ITM",
      company: "Illinois Institute of Technology, Chicago",
      duration: "2023 - 2025",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      title: "Web Developer",
      company: "Anikaay Integration",
      duration: "2022 - 2023",
      description:
        "Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
      title: "Test Engineer",
      company: "GlobalStep",
      duration: "2020 - 2022",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
  ];

  const education = [
    {
      title: "Masters Degree",
      institution: "University Name",
      duration: "2007 - 2009",
      description:
        "Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
      title: "Bachelors Degree",
      institution: "University Name",
      duration: "2002 - 2006",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      title: "Diploma Course",
      institution: "College Name",
      duration: "1999 - 2001",
      description:
        "Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
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
              <div class="timeline">
                <li className="timeline-header">
                  <div className="timeline-header-title">
                    <h3>Work Experience</h3>
                  </div>
                </li>

                {workExperience.map((item, index) => (
                  <li
                    key={index}
                    className={`timeline-item ${
                      index % 2 === 0
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
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </div>

              <br />
              <div class="timeline">
              <li className="timeline-header">
                <div className="timeline-header-title">
                  <h3>Education</h3>
                </div>
              </li>

              {education.map((item, index) => (
                <li
                  key={index}
                  className={`timeline-item ${
                    index % 2 === 0
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
