import React from 'react';
import "./Navbar.css"
import Name from "./Name";
import About from './About';
import Skills from './Skills';

function Navbar() {
  return (
        <div className='a'>
          <nav id="navbar-example2" className="navbar mb-3 position-fixed">
              {/* <a className="navbar-brand" href="#">Navbar</a> */}
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <a className="nav-link fs-3 fw-semibold" href="#scrollspyHeading1">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fs-3 fw-semibold" href="#scrollspyHeading2">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link  fs-3 fw-semibold" href="#scrollspyHeading3">Skills</a>
                </li>
              </ul>
            </nav>
            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example  p-3 rounded-2" tabindex="0">
              <h4 id="scrollspyHeading1"><Name/></h4>
              <h4 id="scrollspyHeading2"><About/></h4>
              <h4 id="scrollspyHeading3"><Skills/></h4>
            </div>
        </div>

    
  )
}

export default Navbar