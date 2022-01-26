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
function App() {
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
  </Routes>
  </div>
  </>
  )
}

export default App;
