import React from "react";
import "./Navbar.css";
import Name from "./Name";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

function Navbar() {
  return (
    <div className="a">
      <nav id="navbar-example2" className="navbar mb-3 position-fixed">
        {/* <a className="navbar-brand" href="#">Navbar</a> */}
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link fs-2 fw-bold" href="#scrollspyHeading1">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fs-2 fw-bold" href="#scrollspyHeading2">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link  fs-2 fw-bold" href="#scrollspyHeading3">
              Skills
            </a>
          </li>

           <li className="nav-item">
            <a className="nav-link  fs-2 fw-bold" href="#scrollspyHeading4">
              Projects
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link  fs-2 fw-bold" href="#scrollspyHeading5">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        className="scrollspy-example ndivs  p-3 rounded-2"
        tabindex="0"
      >
        <div id="scrollspyHeading1">
          <Name />
        </div>
        <div id="scrollspyHeading2">
          <About />
        </div>
        <div id="scrollspyHeading3">
          <Skills />
        </div>
        <div id="scrollspyHeading4">
          <Projects/>
        </div>

        <div id="scrollspyHeading5">
          <Contact/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
