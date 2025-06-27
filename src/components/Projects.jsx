import React from "react";
import "./Projects.css";
import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();

  const handleClick= (id)=>{
    navigate(`/projects/${id}`)
  }
  return (
    <div
      className="container display-flex"
      style={{ marginBlock: "80px", width: "100%", height: "70vh" }}
    >
      <div className="card border-0">
        <h1 className="projectsText pb-2">Projects</h1>

        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div
            className="carousel-inner"
            style={{ height: "50vh", display: "flex", alignItems: "center" }}
          >
            <div className="carousel-item active" data-bs-interval="3000" onClick={()=>handleClick(1)}>
              <img src="/python.svg" alt="Python" />

              <div
                className="carousel-caption text-center"
                style={{ position: "static" }}
              >
                <h5>Python Projects</h5>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="3000" onClick={()=>handleClick(2)}>
              <img src="/react.svg" alt="React" />
              <div
                className="carousel-caption text-center"
                style={{ position: "static" }}
              >
                <h5>React Projects</h5>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="3000" onClick={()=>handleClick(3)}>
              <img style={{ width:"100%"}} src="/ml.svg" alt="Android" />
              <div
                className="carousel-caption text-center"
                style={{ position: "static" }}
              >
                <h5>Machine Learning Projects</h5>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev d-flex"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
            style={{height:"60%", alignItems:"stretch", backgroundColor:"transparent"}}
          >
            <div
              className=""
              aria-hidden="true"
              style={{ fontSize: "190px", color: "#1a629a" }}
            >
              &#8249;
            </div>

            {/* <span className="visually-hidden">Previous</span> */}
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
             style={{height:"60%", alignItems:"stretch", backgroundColor:"transparent"}}
          >
            <div
              className=""
              aria-hidden="true"
              style={{ fontSize: "190px", color: "#1a629a" }}
            >
              &#8250;
            </div>

            {/* <span className="visually-hidden">Next</span> */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
