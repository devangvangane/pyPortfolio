import React from 'react'
import "./Name.css";


function Name() {
  return (
    <div className='container' style={{ marginBlock:"80px", width:"100%", height:"65vh", alignContent:"center"}}>
    <div className='m-5 card nameCard shadow-lg'>  
            <div className="container p-3 rounded-2">
                <div className='ryg' >
                    <button className="button r" disabled ></button>
                    <button className="button y" disabled></button>
                    <button className="button g" disabled></button>
                </div>
                <h5 className="console h5 p1">
                  <span>&#8250;</span><span>&#8250;</span><span>&#8250;</span> print("Hi, I'm Devang Vangane")</h5>
                <h4 className="console h4 p1">Hi, I'm Devang Vangane</h4>

                <h5 className="console h5 p2">
                <span>&#8250;</span><span>&#8250;</span><span>&#8250;</span> print("I'm a Web Developer")
                </h5>
                <h4 className="console h4 p2">I'm a Web Developer</h4>
            </div>
        
    </div>
    </div>
  )
}

export default Name