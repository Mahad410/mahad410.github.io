import React from 'react';
import "./index.css";
import Border from "./Components/Border";
import Nav from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import {Routes,Route} from "react-router-dom";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Project from "./Pages/Projects";
function App() {
  return (
  <>
  <Border />
  <div className="container">
  <Nav />
  <Sidebar />  
  <div>
  <Routes>
            <Route  path="/" element={<Home />} />
            <Route path="/contact-me" element={<Contact />} />
            <Route path="/projects" element={<Project />} />
  </Routes>
  
  </div>
  </div>
  </>
  )
}

export default App;
