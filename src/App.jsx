import React from 'react';
import "./index.css";
import Border from "./Components/Border";
import Nav from "./Components/Navbar";
import {Routes,Route} from "react-router-dom";

import Home from "./Pages/Home";
import Service from "./Pages/Service";
import Project from "./Pages/Projects";
import Certificate from "./Pages/Certificates";
import Google from './Pages/Google_cert';
import Cisco from './Pages/Cisco_cert';
import Udemy from './Pages/Udemy_cert';
import Freecode from './Pages/Freecode';
import Coursera from './Pages/Coursera_cert';
import Sql from './Pages/datacamp';
function App() {
  window.addEventListener("load",()=>{
  const crc =document.getElementById('crc');
  const sCrc =document.getElementById('crc2');
  window.addEventListener('mousemove', (e)=>{
    crc.style.top = (e.pageY - 15) + 'px';
    crc.style.left = (e.pageX - 15) + 'px';
    sCrc.style.left = (e.pageX - 3) + 'px';
    sCrc.style.top = (e.pageY - 3) + 'px';
  })
  })
  return (
  <>
  <Border />
  <div className="container">
  <Nav />
  <Routes>
            <Route  path="/" element={<Home />} />
            <Route path="/services" element={<Service />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/certifications" element={<Certificate />} />
            <Route path="/google-certificates" element={<Google />} />
            <Route path="/cisco-certificates" element={<Cisco />} />
            <Route path="/udemy-certificates" element={<Udemy />} />
            <Route path="/freecodecamp-certificates" element={<Freecode />} />
            <Route path="/coursera-certificates" element={<Coursera />} />
            <Route path="/datacamp-certificates" element={<Sql />} />
  </Routes>
    <div className="circle" id="crc"/>
  <div className="circle2" id="crc2"/>
  </div>

  </>
  )
}

export default App;
