import React from 'react'
import './home.css';
import use from './pics/use.webm';
import usep from './pics/usep.webp';
import {Link} from 'react-router-dom'

function Home(){
    return(
        <div className="main-container">
        <div className="intro">
        <h1>
            Mahid Qureshi <span className="co_text">( <span className="co">&lt;</span> Web Developer <span className="co">/&gt;</span> )</span>
        </h1>
        
        <p className="skills">
        Developer with skills of <span className="co">HTML</span> | <span className="co">CSS</span> | <span className="co">SASS</span> | <span className="co">Bootstrap</span> | <span className="co">JQuery</span> | <span className="co">JavaScript</span> | <span className="co">WordPress</span>
        </p> 
        <p className="desc">
             <span className="co">Passionate</span> and <span className="co">Inspiring</span> developer who is building his <span className="co">Reputation</span> and will do everything to achieve his <span className="co">Dreams</span>.
             if you want to <span className="co">Hire</span> me then <span className="co">Hmu....</span> and if you dont want to <span className="del">hire</span> then do check my <Link to="/projects"><span className="co_und">Projects</span></Link>
        </p>

        <figure className="figure">
        <blockquote cite="https://www.huxley.net/bnw/four.html">
        <p> The inner fire is the most important thing mankind processes. </p>
        </blockquote>
        <figcaption>—Edith Södergran</figcaption>
        </figure>
        </div>    
        

        <div className="video">
        <video src={use} loop autoPlay={true}  muted poster={usep} width= '100%' height='100%'>
        </video>
        </div>
        </div>

       

    )
}
export default Home;