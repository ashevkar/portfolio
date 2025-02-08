import React, { lazy } from "react";
import pp from "./images/pp.png";
import "./css/hero.css";
import { Github, Linkedin, Mail } from "lucide-react";
import LazyLoader from "./LazyLoader";
import Hero from "./hero";

// const Hero = lazy(() =>
//   new Promise((resolve) => setTimeout(() => resolve(import("./hero")), 2000))
// );

const Projects = lazy(() => import("./Projects"));
const Contact = lazy(() => import("./Contact"));
const Skills = lazy(() => import("./skills"));
const Resume = lazy(() => import("./resume"));
const Navbar = lazy(() => import("../components/Navbar"));
const Footer = lazy(() => import("../components/footer"));

const Layout = () => {
  return (
    <>
      <LazyLoader component={Navbar} />

      <section id="hero" className="hero ">
        <div class="column-1">
          <div class="profile">
            <p class="line1"></p>
            <p class="line2"></p>
            <div class="pic">
              <img src={pp} alt="Aishwarya Shevkar" />
            </div>

            <div class="icons">
              <div className="info">
                <h3>Aishwarya Shevkar</h3>
              </div>

              <div>
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
        <div class="column-2">
          <main>
            <section id="home">
              {/* <LazyLoader component={Hero} /> */}
              <Hero />
            </section>
            <section id="skills">
              <LazyLoader component={Skills} />
            </section>
            <section id="resume">
              <LazyLoader component={Resume} />
            </section>
            <section id="projects">
              <LazyLoader component={Projects} />
            </section>
            <section id="contact">
              <LazyLoader component={Contact} />
            </section>
          </main>
        </div>
      </section>
      <LazyLoader component={Footer} />
    </>
  );
};

export default Layout;
