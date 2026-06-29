import React from "react";
import "./Navbar.css";
import Name from "./Name";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";


function Navbar() {

  const handleScrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};


  return (
    <div className="a">
      <nav id="navbar-example2" className="navbar mb-3 position-fixed" >
        {/* <a className="navbar-brand" href="#">Navbar</a> */}
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link fs-2 fw-bold" href="#name" onMouseEnter={() => handleScrollTo('name')}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fs-2 fw-bold" href="#about" onMouseEnter={() => handleScrollTo('about')}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link  fs-2 fw-bold" href="#skills" onMouseEnter={() => handleScrollTo('skills')}>
              Skills
            </a>
          </li>

           <li className="nav-item">
            <a className="nav-link  fs-2 fw-bold" href="#projects" onMouseEnter={() => handleScrollTo('projects')}>
              Projects
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link  fs-2 fw-bold" href="#contact" onMouseEnter={() => handleScrollTo('contact')}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div
        className="scrollspy-example ndivs  p-3 rounded-2"
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
