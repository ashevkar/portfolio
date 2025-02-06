import React from "react";
import pp from "./pp.png";
import "./hero.css";
import Projects from "./Projects";
import Contact from "./Contact";
import Skills from "./skills";
import Resume from "./resume";
import Hero from "./hero";
import { Github, Linkedin, Mail } from "lucide-react";

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
            <div className="luc-icons">
              <a href="mailto:ashevkar@hawk.iit.edu">
                <Mail />
              </a>
              <a href="https://www.linkedin.com/in/aishwarya-shevkar/">
                <Linkedin />
              </a>
              <a href="https://github.com/ashevkar">
                <Github />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="column-2">
        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="resume">
            <Resume />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
    </section>
  );
};

export default Layout;
