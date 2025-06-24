import React from "react";
import "./About.css";

function About() {
  return (
    <div className="container d-flex" style={{marginBlock:"80px"}}>
      <div className="card aMain border-0 ">
        <h1 className="aboutText">About Me</h1>
        <div className="aboutInfo" style={{ width: "80vw" }}>
          Hi, I'm Devang Vangane — an IT engineering student with a passion for
          full-stack development and creating impactful digital experiences. I
          specialize in a range of technologies including{" "}
          <strong>Django</strong>, <strong>React</strong>,{" "}
          <strong>Angular</strong>, <strong>Node.js</strong>, <strong>PHP</strong>,{" "}
          <strong>Android</strong>, <strong>Machine Learning</strong>,{" "}
          <strong>Artificial Intelligence</strong>, <strong>MySQL</strong>,{" "}
          <strong>HTML</strong>, <strong>CSS</strong>, <strong>MongoDB</strong>{" "}
          and <strong>Bootstrap</strong>.<br></br> My journey has been all about
          turning ideas into interactive, functional web applications. Beyond
          coding, I enjoy sharing knowledge and tech insights through my YouTube
          Channel{" - "}
          <a
            href="https://youtube.com/@devangvangane?feature=shared"
            target="_blank"
          >
            <strong>Devang Vangane</strong>
          </a>
          , where I simplify complex concepts and document my learning
          experiences. I'm constantly exploring new tools and frameworks, aiming
          to grow as a developer and contribute meaningfully to the tech
          community.
        </div>
      </div>
    </div>
  );
}

export default About;
