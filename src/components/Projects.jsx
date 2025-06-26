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
              <div class="carousel-caption d-block">
                <h5>Third slide label</h5>
                
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src="/react.svg" alt="React" />
              <div class="carousel-caption ">
                <h5>Third slide label</h5>
                
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src="/android.svg" alt="Android" />
              <div class="carousel-caption d-block pos">
                <h5>Third slide label</h5>
                
              </div>
            </div>
          </div>
          
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="" aria-hidden="true" style={{fontSize:"190px", color:"#1a629a"}}>&#8249;</span>
            
            <span className="visually-hidden">Previous</span>
          </button>
          
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="" aria-hidden="true" style={{fontSize:"190px", color:"#1a629a"}}>&#8250;</span>
            
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Projects
