import React from "react";
import { Link } from "react-router-dom";
import "./hero.css";
import { HiOutlineArrowRight } from "react-icons/hi";

const Hero = () => {
  return (
      <div class="column-2">
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
              Resume
              <div className="next">
                <Link id="arrow1" to="./resume.js">
                  <HiOutlineArrowRight />
                </Link>
              </div>
            </p>
            <p id="color2">
              WORK EXPERIENCE
              <div class="next">
                <a id="arrow2" href="https://github.com/ashevkar">
                  <HiOutlineArrowRight />
                </a>
              </div>
            </p>
          </div>
        </div>
      </div>
  );
};

export default Hero;
