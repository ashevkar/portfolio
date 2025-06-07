import React from "react";
import pp from "../../assets/images/pp.png";
import "../../assets/css/hero.css";
import { Github, Linkedin, Mail } from "lucide-react";
import TransitionWrapper from "../common/TransitionWrapper";
import Hero from "../section/Hero";
import Skills from "../section/Skills";
import Projects from "../section/Projects";
import Contact from "../section/Contact";
import Resume from "../section/Resume";
import profileImage from "../../assets/images/pic.jpeg"

const Layout = () => {
  return (
    <section id="hero" className="hero ">
      <div className="column-1">
        <div className="profile">
          <p className="line1"></p>
          <p className="line2"></p>
          <div className="pic">
            <img src={profileImage} alt="Aishwarya Shevkar" />
          </div>

          <div className="icons">
            <div className="info">
              <h3>Aishwarya Shevkar</h3>
            </div>

            <div className="">
              <p>
              A passionate technologist crafting cutting-edge solutions that drive innovation and excellence.
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
