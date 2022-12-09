import "./project.css";
import data_projects from "../data_projects.js";
import Projects from "../Components/Project.jsx";
import React from "react";

function Project(){
    return(
    <>
    <div className="pro_container">
        {data_projects.map((data)=>{
            return <Projects title={data.name} image={data.img} link={data.url} description={data.description} />
        })}
    </div>
    </>
)
}
export default Project;