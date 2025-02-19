import React from "react";
import pp from "./images/pp.png";
import "./css/hero.css";
import { Github, Linkedin, Mail } from "lucide-react";
import TransitionWrapper from "./TransitionWrapper";
import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Resume from "./Resume";

const Layout = () => {

  return (
    <section id="hero" className="hero ">
      <div className="column-1">
        <div className="profile">
          <p className="line1"></p>
          <p className="line2"></p>
          <div className="pic">
            <img src={pp} alt="Aishwarya Shevkar" />
          </div>

          <div className="icons">
            <div className="info">
              <h3>Aishwarya Shevkar</h3>
            </div>

            <div className="">
              <p>
                A Software Engineer who has developed countless innovative
                solutions.
              </p>
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
      </div>
      <div className="column-2">
        <main>
          <TransitionWrapper>
            <section id="home">
              <Hero />
            </section>
          </TransitionWrapper>
          <TransitionWrapper>
            <section id="skills">
              <Skills />
            </section>
          </TransitionWrapper>
          <TransitionWrapper>
            <section id="resume">
              <Resume />
            </section>
          </TransitionWrapper>
          <TransitionWrapper>
            <section id="projects">
              <Projects />
            </section>
          </TransitionWrapper>
          <TransitionWrapper>
            <section id="contact">
              <Contact />
            </section>
          </TransitionWrapper>
        </main>
      </div>
    </section>
  );
};

export default Layout;
