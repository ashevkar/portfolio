import React from "react";
// import { Link } from "react-router-dom";
import "./css/hero.css";
// import { HiOutlineArrowRight } from "react-icons/hi";

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
          <h2>75+</h2>
          <p>LeetCode</p>
        </div>
        <div className="count-1">
          <h2>5+</h2>
          <p>Projects Completed</p>
        </div>
        <div className="count-1">
          <h2>2+</h2>
          <p>Years of Experience</p>
        </div>
      </div>

      <div className="container-box">
        <div className="box">
          <a
            id="arrow1"
            href="https://drive.google.com/file/d/1VgtSvjpUrQqb9QzLe7Z2fLQ3P5_9G0Yg/view"
          >
            <p id="color1">
              RESUME
              {/* <div className="next">
                <HiOutlineArrowRight />
            </div> */}
            </p>
          </a>

          {/* <p id="color2"> */}
            {/* EXPERIENCE */}
            {/* <div className="next"> */}
              {/* <a id="arrow2" href="https://github.com/ashevkar">  </a> */}
            {/* </div> */}
          {/* </p> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
