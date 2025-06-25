import React from "react";
import "./Skills.css";
import "bootstrap";

function Skills() {
  return (
    <div className="container" style={{marginBlock:"80px",width:"100%", height:"80vh"}}>
      <div
        className="sMain card border-0 d-flex"
        style={{backgroundColor:"#ffd327"}}
      >
        <h1 className="skillsText">Skills</h1>
        <div className="container maincontainer" style={{marginBlock:"40px"}}>
          <div className="container skillsIcon d-flex justify-content-between">
          <div>
             <img 
             className="img-fluid"
            src="/python.svg"
            alt=""
            srcset=""
            
          />
          </div>
          <div>
             <img
            src="/react.svg"
            alt=""
            srcset=""
            
          />
          </div>

          <div>
             <img
            src="/angular.svg"
            alt=""
            srcset=""
            
            />
          </div>

          <div>
             <img
            src="/node.svg"
            alt=""
            srcset=""
            
            />
          </div>

          <div>
             <img
            src="/database.svg"
            alt=""
            srcset=""
            
            />
          </div>
        </div>

{/* row 2 */}
        <div className="container skillsIcon d-flex justify-content-evenly">
          <div>
             <img
            src="/android.svg"
            alt=""
            srcset=""
            
          />
          </div>
          <div>
             <img
            src="/ml.png"
            alt=""
            srcset=""
            
          />
          </div>

          <div>
             <img
            src="/php.svg"
            alt=""
            srcset=""
            
            />
          </div>

          <div>
             <img
            src="/html.svg"
            alt=""
            srcset=""
            />
          </div>
        </div>
        </div>
      </div>
      
    </div>
  );
}

export default Skills;
