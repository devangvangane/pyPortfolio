import React from 'react'
import "./Projects.css"

function Projects() {
  return (
    <div className="container display-flex" style={{marginBlock:"80px",width:"100%", height:"70vh"}}>
      <div className="card border-0">
        <h1 className="projectsText pb-2">Projects</h1>
            
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner" style={{ height:"40vh", display:"flex", alignItems:"center"}}>
            <div className="carousel-item active" data-bs-interval="3000">
              <img src="/python.svg" alt="Python" />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src="/react.svg" alt="React" />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src="/android.svg" alt="Android" />
            </div>
          </div>
          
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
            {/* <img src="/left.svg" alt="Android" style={{aspectRatio:1.5}}/> */}
            <span className="visually-hidden">Previous</span>
          </button>
          
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
            {/* <img src="/right.svg" alt="Android" /> */}
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Projects
