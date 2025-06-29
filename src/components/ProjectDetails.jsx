import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const projectData = {
    1: [
      {
        title: "Project 1",
        description: "This is the description for Project 1.",
        esrc: "https://www.youtube.com/embed/3a_gzJUL8iY",
      },
      {
        title: "Project 2",
        description: "This is the description for Project 1.",
        esrc: "https://www.youtube.com/embed/NvoMivNZ8O8",
      },
      {
        title: "Project 3",
        description: "This is the description for Project 1.",
        esrc: "https://www.youtube.com/embed/juLm1d4Pwtg",
      },
      {
        title: "Project 4",
        description: "This is the description for Project 2.",
        esrc: "https://www.youtube.com/embed/DXMFdnjur0s", // Done
      },
      {
        title: "Project 5",
        description: "This is the description for Project 3.",
        esrc: "https://www.youtube.com/embed/K1GphQeNJqc",
      },
      {
        title: "Project 6",
        description: "This is the description for Project 3.",
        esrc: "https://www.youtube.com/embed/IQUu9KcnOss",
      },
      {
        title: "Project 7",
        description: "This is the description for Project 3.",
        esrc: "https://www.youtube.com/embed/_dv-U5DVlmk",
      },{
        title: "Project 8",
        description: "This is the description for Project 3.",
        esrc: "https://www.youtube.com/embed/Q6tY0gb7th8",
      },{
        title: "Project 9",
        description: "This is the description for Project 3.",
        esrc: "https://www.youtube.com/embed/wlHdjFYHUn8",
      },{
        title: "Project 10",
        description: "This is the description for Project 3.",
        esrc: "https://www.youtube.com/embed/_dv-U5DVlmk",
      }
    ],
    2: [
      {
        title: "Project 1",
        description: "This is the description for Project 1.",
        esrc: "https://www.youtube.com/embed/3a_gzJUL8iY",
      },
      {
        title: "Project 1",
        description: "This is the description for Project 1.",
        esrc: "https://www.youtube.com/embed/3a_gzJUL8iY",
      },
      {
        title: "Project 1",
        description: "This is the description for Project 1.",
        esrc: "https://www.youtube.com/embed/3a_gzJUL8iY",
      },
    ],
    3: [
      {
        title: "Project 1",
        description: "This is the description for Project 1.",
        esrc: "https://www.youtube.com/embed/juLm1d4Pwtg?list=PLhoWepvA5YqcVrpIwqLHwDHHaUUW5lrV1",
      },
      {
        title: "Project 1",
        description: "This is the description for Project 1.",
        esrc: "https://www.youtube.com/embed/3a_gzJUL8iY",
      },
      {
        title: "Project 1",
        description: "This is the description for Project 1.",
        esrc: "https://www.youtube.com/embed/3a_gzJUL8iY",
      },
    ],
  };

  const projectList = projectData[id];

  if (!projectList) {
    return <h2>Project not found</h2>;
  }

  return (
    <div className="container">
      <button
        className="btn mt-3 position-fixed"
        style={{ backgroundColor: "#1a629a", color: "#ffd327", fontSize: "20px", zIndex: 10 }}
        onClick={() => navigate("/")}
      >
        &#8249; Home
      </button>
      <div className="d-flex flex-row align-items-center flex-wrap justify-content-center">
        {projectList.map((proj, index) => (
          <div
            key={index}
            className="m-5 d-flex flex-column align-items-center justify-content-center"
          >
            <h2>{proj.title}</h2>
            <p>{proj.description}</p>
            <div
              className="video-container d-flex flex-row"
              style={{ position: "relative" }}
            >
              <iframe
                src={proj.esrc}
                title={proj.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  borderRadius: "10px",
                }}
              ></iframe>
            </div>
          </div>
        ))}
      </div>

      {/* </div> */}
    </div>
  );
}

export default ProjectDetails;

