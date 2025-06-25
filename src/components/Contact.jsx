import React from 'react';
import './Contact.css'

function Contact() {
  return (
    <div className='container' style={{marginBlock:"80px",width:"100%", height:"70vh", position: 'relative'}}>
        <div className="card d-flex flex-row border-0 " style={{background:"#ffd327"}}>
          <div className='imgDiv m-2'>
               <img src="/me45.png" className="card-img-top img-fluid shadow" alt="..."></img>
          </div>
          <div className='m-2 align-items-center d-flex'>
          <div className="card-body shadow" >       
            <h1 className="card-title contactText" style={{color:"#1a629a"}}>Contact</h1>
            <p className="card-text">
              Feel free to reach out to me through any of the platforms below. I'm open to collaborations,
              freelance work, or just a chat about tech!
            </p>

            <ul className="list-unstyled d-flex flex-row justify-content-around">
              <div>
                <li><img src='/email.svg'></img> <a href="mailto:you@example.com">devangvangane9@gmail.com</a></li>
              <li><img src='/gihub.svg'></img><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">Github</a></li>
              </div>
              
              <div>
                <li><img src='/li.svg'></img><a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><img src='/cv.svg' style={{aspectRatio:1.}}></img><a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
              </div>
            </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact