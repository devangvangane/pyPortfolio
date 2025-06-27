import React from 'react'
import "./App.css";
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectDetails from './components/ProjectDetails';


function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="" element={<Navbar />} />
          <Route path="/projects/:id" element={<ProjectDetails />} ></Route>      
      </Routes>
    </Router>
    </>
    
  )
}

export default App