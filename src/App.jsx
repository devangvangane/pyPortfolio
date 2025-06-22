import React from 'react'
import "./App.css";
import Navbar from './components/Navbar';
import Name from './components/Name';
import About from './components/About';
import ProfileImage from './components/ProfileImage';
import Skills from './components/Skills';


function App() {
  return (
    <>
      <Navbar/>
      <div className='d-flex'>
        <Name/><ProfileImage/>
      </div>
      <About/>
      <Skills/>
    </>
    
  )
}

export default App