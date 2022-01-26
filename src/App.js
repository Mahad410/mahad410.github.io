import React from 'react';
import "./index.css";
import Border from "./Components/Border";
import Nav from "./Components/Navbar";
import {Routes,Route} from "react-router-dom";

import Home from "./Pages/Home";
import Service from "./Pages/Service";
import Project from "./Pages/Projects";
import Certificate from "./Pages/Certificates";

function App() {
  return (
  <>
  <Border />
  <div className="container">
  <Nav />
  
  <div>
  <Routes>
            <Route  path="/" element={<Home />} />
            <Route path="/services" element={<Service />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/certifications" element={<Certificate />} />
            <Route path="/google-certificates" element={<Certificate />} />
            <Route path="/cisco-certificates" element={<Certificate />} />
            <Route path="/udemy-certificates" element={<Certificate />} />
            <Route path="/freecodecamp-certificates" element={<Certificate />} />
            <Route path="/coursera-certificates" element={<Home />} />
  </Routes>
  
  </div>
  </div>
  </>
  )
}

export default App;
