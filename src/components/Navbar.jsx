import React from "react";
import "./Navbar.css";
import Name from "./Name";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import { useEffect } from "react";

function Navbar() {

  useEffect(() => {
    const scrollEl = document.getElementById('scrollContainer');
    if (scrollEl) {
      window.bootstrap.ScrollSpy.getInstance(scrollEl) ||
        new window.bootstrap.ScrollSpy(scrollEl, {
          target: '#navbar-example2',
          rootMargin: '0px 0px -40%',
        });
    }
  }, []);

  return (
    <div className="a">
      <nav id="navbar-example2" className="navbar mb-3 position-fixed" >
        {/* <a className="navbar-brand" href="#">Navbar</a> */}
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link fs-2 fw-bold" href="#name">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fs-2 fw-bold" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link  fs-2 fw-bold" href="#skills">
              Skills
            </a>
          </li>

           <li className="nav-item">
            <a className="nav-link  fs-2 fw-bold" href="#projects">
              Projects
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link  fs-2 fw-bold" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div
      id="scrollContainer"
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        className="scrollspy-example ndivs  p-3 rounded-2"
        tabindex="0"
      >
        <div id="name" className="section">
          <Name />
        </div>
        <div id="about" className="section">
          <About />
        </div>
        <div id="skills" className="section">
          <Skills />
        </div>
        <div id="projects" className="section">
          <Projects/>
        </div>

        <div id="contact" className="section">
          <Contact/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
