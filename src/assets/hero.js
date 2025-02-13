import React from "react";
import { Link } from "react-router-dom";
import "./css/hero.css";
import { HiOutlineArrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <div className="column-2">
      <div className="details">
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
      <div className="count">
        <div className="count-1">
          <h2>2+</h2>
          <p>Years of Experience</p>
        </div>
        <div className="count-1">
          <h2>5+</h2>
          <p>Projects Completed</p>
        </div>
        {/* <div class="count-1">
          <h2>2+</h2>
          <p>Collaborations</p>
        </div> */}
      </div>

      <div className="container-box">
        <div className="box">
          <p id="color1">
            RESUME
            <div className="next">
              <Link id="arrow1" to="./resume.js">
                <HiOutlineArrowRight />
              </Link>
            </div>
          </p>
          <p id="color2">
            WORK EXPERIENCE
            <div className="next">
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
