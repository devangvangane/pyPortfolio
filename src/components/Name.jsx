import React from 'react'
import "./Name.css"


function Name() {
  return (
    <div className='container display-flex' style={{ marginBlock:"80px"}}>
    <div className='m-5 card nameCard'>  
            <div className="card-body">
                <div className='ryg'>
                    <button className="button r" disabled></button>
                    <button className="button y" disabled></button>
                    <button className="button g" disabled></button>
                </div>
                <h5 className="console h5">
                    <span>&#8250;</span><span>&#8250;</span><span>&#8250;</span> print("Hi, I'm Devang Vangane")</h5>
                <h4 className="console h4">Hi, I'm Devang Vangane</h4>
            </div>
        
    </div>
    </div>
  )
}

export default Name