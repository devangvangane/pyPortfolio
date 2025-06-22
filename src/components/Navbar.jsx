import React from 'react';
import "./Navbar.css"
import "bootstrap"



function Navbar() {
  return (
    
        <nav class="navbar navbar-expand-lg pe-5">
            <div class="container-fluid">
              {/* <a class="navbar-brand" href="#">Navbar</a> */}
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link nlinks text-primary fs-3 fw-semibold" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link nlinks text-primary fs-3 fw-semibold" href="#">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link nlinks text-primary fs-3 fw-semibold" href="#">Projects</a>
                  </li>
                  <li class="nav-item"> 
                    <a class="nav-link nlinks text-primary fs-3 fw-semibold" href="#">Contact</a>
                  </li>
                  
                </ul>
              </div>
            </div>
          </nav>

    
  )
}

export default Navbar