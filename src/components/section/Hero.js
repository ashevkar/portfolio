import React from "react";
import "../../assets/css/hero.css";
// import { HiOutlineArrowRight } from "react-icons/hi";
// import AnimatedNumbers from 'react-animated-numbers';
import { useSpring, animated } from "react-spring";
import { FiCoffee } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    reset: true,
    config: { mass: 1, tension: 80, friction: 40 },
  });
  return (
    <div
      style={{
        fontSize: "2rem",
        fontWeight: "bold",
        // width: "150px",
        // height: "50px",
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <animated.span>{number.to((n) => n.toFixed(0))}</animated.span>
      <span>+</span>
    </div>
  );
}

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
          <FaLaptopCode style={{ fontSize: "1.5rem"}}/>
          <Number n={15} />

          <p>Projects Completed</p>
        </div>
            <div className="count-1">
          <MdOutlineAccessTime style={{ fontSize: "1.5rem"}} />
          <Number n={105} />

          <p>LeetCode Problem Solved</p>
        </div>

        <div className="count-1">
          <FiCoffee style={{ fontSize: "1.5rem"}}/>
          <Number n={2000} />

          <p>Coffee Cups</p>
        </div>
      </div>

      <div className="container-box">
        <div className="box">
          <a
            id="arrow1"
            href="https://drive.google.com/file/d/1MvadED1lasELWUkaqMCv3he9al46S7K9/view?usp=drive_link"
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
