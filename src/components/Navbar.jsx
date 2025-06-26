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
      id="scrollContainer"
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        className="scrollspy-example ndivs  p-3 rounded-2"
        tabindex="0"
      >
        <div id="scrollspyHeading1" className="section">
          <Name />
        </div>
        <div id="scrollspyHeading2" className="section">
          <About />
        </div>
        <div id="scrollspyHeading3" className="section">
          <Skills />
        </div>
        <div id="scrollspyHeading4" className="section">
          <Projects/>
        </div>

        <div id="scrollspyHeading5" className="section">
          <Contact/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
