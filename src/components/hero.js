import React from "react";
// import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import pp from "./pp.png";
import "./hero.css";
import About from "./About";
import Skills from "./skills";
import Resume from "./resume";
import Projects from "./Projects";
import { HiOutlineArrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div class="column">
        <div class="profile">
          <div className="pic">
            <img src={pp} alt="Profile picture" />
          </div>

          <div class="icons">
            <div className="info">
              <h2>Aishwarya Shevkar</h2>
            </div>

            <div>
              <p>
              A Software Engineer who has developed countless innovative solutions.
              </p>
              </div>
              <div>
              <a href="ashevkar@hawk.iit.edu">
                <IoIosMail />
              </a>
              <a href="https://github.com/ashevkar">
                <FaLinkedin />
              </a>
              <a href="https://github.com/ashevkar">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="column-1">
        <div class="details">
          <h1>
            SOFTWARE <br />
            <span className="two">DEVELOPER</span>
          </h1>
          <p>
            I am a passionate Software Developer with experience in React.js,
            Java, and AWS. I thrive on solving complex problems and building
            meaningful solutions.
          </p>
          </div>
          <div class="count">
          <div class="count-1">
            <h2>3+</h2>
            <p>Years of Experience</p>
          </div>
          <div class="count-1">
            <h2>10+</h2>
            <p>Projects Completed</p>
          </div>
          <div class="count-1">
            <h2>5+</h2>
            <p>Collaborations</p>
          </div>
        </div>
        
        



        <div class="container">
          <div class="box">
            <p id="color1">
              EXPERIENCE
              <div class="next">
                <a id="arrow1" href="./resume.js">
                  <HiOutlineArrowRight />
                </a>
              </div>
            </p>
            <p id="color2">
              WORK X
              <div class="next">
                <a id="arrow2" href="https://github.com/ashevkar">
                  <HiOutlineArrowRight />
                </a>
              </div>
            </p>
          </div>
        </div>

        {/* <div><About/></div> */}
        <div>
          <Skills />
        </div>
        <div>
          <Resume />
        </div>
        <div>
          <Projects />
        </div>
      </div>
    </section>
  );
};

export default Hero;
