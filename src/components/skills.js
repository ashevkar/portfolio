import React from 'react';
import './skills.css';
import TransitionWrapper from './TransitionWrapper';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'HTML5/CSS3', value: 95, color: 'progress-bar-1' },
    { name: 'React', value: 90, color: 'progress-bar-2' },
    { name: 'Node', value: 80, color: 'progress-bar-3' },
    { name: 'Java', value: 85, color: 'progress-bar-4' },
    { name: 'TailwindCSS', value: 100, color: 'progress-bar-5' },
    { name: 'Springboot', value: 70, color: 'progress-bar-1' },
    { name: 'Python', value: 85, color: 'progress-bar-2' },
    { name: 'MySQL', value: 75, color: 'progress-bar-3' },
  ];

  const barAnimation = {
    hidden: { width: '0%' },
    visible: (value) => ({
      width: `${value}%`,
      transition: { duration: 1 },
    }),
  };

  return (
    <TransitionWrapper>
      <section id="skills">
      <div className="row">
        <h1>SKILLS</h1>
        <div className="col-md-6">
          {skills.slice(0, 4).map((skill, index) => (
            <div className="progress-wrap" key={index}>
              <h3>
                <span className="name-left">{skill.name}</span>
                <span className="value-right">{skill.value}%</span>
              </h3>
              <div className="progress">
                <motion.div
                  className={`progress-bar ${skill.color} progress-bar-striped active`}
                  role="progressbar"
                  aria-valuenow={skill.value}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  custom={skill.value}
                  variants={barAnimation}
                  initial="hidden"
                  animate="visible"
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-6">
          {skills.slice(4).map((skill, index) => (
            <div className="progress-wrap" key={index}>
              <h3>
                <span className="name-left">{skill.name}</span>
                <span className="value-right">{skill.value}%</span>
              </h3>
              <div className="progress">
                <motion.div
                  className={`progress-bar ${skill.color} progress-bar-striped active`}
                  role="progressbar"
                  aria-valuenow={skill.value}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  custom={skill.value}
                  variants={barAnimation}
                  initial="hidden"
                  animate="visible"
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>

    </TransitionWrapper>

  );
};

export default Skills;
