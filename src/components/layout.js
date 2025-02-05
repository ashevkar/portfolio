import React from "react";
// import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import pp from "./pp.png";
import "./hero.css";
import Projects from "./Projects";
import Contact from "./Contact";
import Skills from "./skills";
import Resume from "./resume";
import Hero from "./hero";

const Layout = () => {
  return (
    <section id="hero" className="hero ">
      <div class="column-1">
        <div class="profile">
          <div class="pic">
            <img src={pp} alt="Profile picture" />
          </div>

          <div class="icons">
            <div className="info">
              <h2>Aishwarya Shevkar</h2>
            </div>

            <div>
              <p>
                A Software Engineer who has developed countless innovative
                solutions.
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
      <div class="column-2">
      <main>
      <section id="home"><Hero /></section>
      <section id="skills"><Skills /></section>
      <section id="resume"><Resume /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </main>
      </div>
    </section>
  );
};

export default Layout;
