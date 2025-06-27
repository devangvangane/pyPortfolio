import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const projectData = {
    1: [{
      title: "Project 1",
      description: "This is the description for Project 1.",
      esrc: "https://www.youtube.com/embed/3a_gzJUL8iY"
    },{
      title: "Project 2",
      description: "This is the description for Project 2.",
      esrc: "https://www.youtube.com/embed/3a_gzJUL8iY"
    },{
      title: "Project 3",
      description: "This is the description for Project 3.",
      esrc: "https://www.youtube.com/embed/3a_gzJUL8iY"
    }],
    2: [{
      title: "Project 1",
      description: "This is the description for Project 1.",
      esrc: "https://www.youtube.com/embed/3a_gzJUL8iY"
    },{
      title: "Project 1",
      description: "This is the description for Project 1.",
      esrc: "https://www.youtube.com/embed/3a_gzJUL8iY"
    },{
      title: "Project 1",
      description: "This is the description for Project 1.",
      esrc: "https://www.youtube.com/embed/3a_gzJUL8iY"
    }],
    3: [{
      title: "Project 1",
      description: "This is the description for Project 1.",
      esrc: "https://www.youtube.com/embed/3a_gzJUL8iY"
    },
{
      title: "Project 1",
      description: "This is the description for Project 1.",
      esrc: "https://www.youtube.com/embed/3a_gzJUL8iY"
    },
{
      title: "Project 1",
      description: "This is the description for Project 1.",
      esrc: "https://www.youtube.com/embed/3a_gzJUL8iY"
    }],
  };

  const projectList = projectData[id];

  if (!projectList) {
    return <h2>Project not found</h2>;
  }

  return (
    <div className="container">
      <button
        className="btn mt-3"
        style={{ backgroundColor: "#1a629a", color: "#ffd327" }}
        onClick={() => navigate("/")}
      >
        ← Home
      </button>
      {projectList.map((proj, index) => (
        <div key={index} className="mb-5">
          <h2>{proj.title}</h2>
          <p>{proj.description}</p>
          <div className="video-container" style={{ position: "relative", paddingBottom: "56.2px" }}>
            <iframe
              src={proj.esrc}
              title={proj.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "50%",
                height: "100%",
                borderRadius:"10px"
              }}
            ></iframe>
          </div>
        </div>
      ))}
    {/* </div> */}
    </div>
  );
}

export default ProjectDetails;
