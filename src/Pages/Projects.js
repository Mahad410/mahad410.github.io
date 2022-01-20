import React,{useState} from 'react';
import "./project.css";
import discord from "./pics/discord.webp";
import spotify from "./pics/spotify.webp";
import halloween from "./pics/halloween.webp";
import portfolio from "./pics/portfolio.webp";
import goodwork from "./pics/goodwork.webp";
import mouse from "./pics/mouse.webp";
function Project(){
    const [p0, setp0] = useState(false);
    const [p1, setp1] = useState(false);
    const [p2, setp2] = useState(false);
    const [p3, setp3] = useState(false);
    const [p4, setp4] = useState(false);
    const [p5, setp5] = useState(false);
    return(
        <div className="pro_container">
            <div className="p_container">
                <div className="image">
                    <a href="https://mahad410.github.io/discord" target="_blank _blank" rel="noopener noreferrer"><img src={discord} width="100%" height="100%" alt="Discord"></img></a>
                </div>
                { p0&&(
                <div className="detail">
                  <p> The exact <span className="co">Discord</span> clone homepage with login page. </p>
                </div>
                )}

        <button className="btn" onClick={() => setp0(!p0)}>
        { p0 === false ? "Show Details":"Hide Details" }
        </button>
            </div>


            <div className="p_container">
                <div className="image">
                <a href="https://mahad410.github.io/spotify" target="_blank _blank" rel="noopener noreferrer"><img src={spotify} width="100%" height="100%" alt="Discord"></img></a>
                </div>
                { p1&&(
                <div className="detail">
                   <p> The exact <span className="co">Spotify</span> clone homepage with login page. </p>
                </div>
                )}

        <button className="btn" onClick={() => setp1(!p1)}>
        { p1 === false ? "Show Details":"Hide Details" }
        </button>
            </div>


            <div className="p_container">
                <div className="image">
                <a href="https://mahad410.github.io/spotify" target="_blank _blank" rel="noopener noreferrer"><img src={halloween} width="100%" height="100%" alt="Discord"></img></a>
                </div>
                { p2&&(
                <div className="detail">
                    <p> The <span className="co">Halloween</span> theme homepage with some animations. </p>
                </div>
                )}

        <button className="btn" onClick={() => setp2(!p2)}>
        { p2 === false ? "Show Details":"Hide Details" }
        </button>
            </div>
           

            <div className="p_container">
                <div className="image">
                    <a href="https://mahad410.github.io/porti" target="_blank _blank" rel="noopener noreferrer"><img src={portfolio} width="100%" height="100%" alt="Discord"></img></a>
                </div>
                { p3&&(
                <div className="detail">
                  <p> The <span className="co">Portfolio</span> with animations and stats. </p>
                </div>
                )}

        <button className="btn" onClick={() => setp3(!p3)}>
        { p3 === false ? "Show Details":"Hide Details" }
        </button>
            </div>


            <div className="p_container">
                <div className="image">
                <a href="https://mahad410.github.io/goodwork.co" target="_blank _blank" rel="noopener noreferrer"><img src={goodwork} width="100%" height="100%" alt="Discord"></img></a>
                </div>
                { p4&&(
                <div className="detail">
                   <p> My business <span className="co">Goodwork.co</span> with embeded form. </p>
                </div>
                )}

        <button className="btn" onClick={() => setp4(!p4)}>
        { p4 === false ? "Show Details":"Hide Details" }
        </button>
            </div>


            <div className="p_container">
                <div className="image">
                <a href="https://mahad410.github.io/mouse.purecss" target="_blank _blank" rel="noopener noreferrer"><img src={mouse} width="100%" height="100%" alt="Discord"></img></a>
                </div>
                { p5&&(
                <div className="detail">
                    <p> The <span className="co">Mouse</span> created with pure css. </p>
                </div>
                )}

        <button className="btn" onClick={() => setp5(!p5)}>
        { p5 === false ? "Show Details":"Hide Details" }
        </button>
            </div>
           

                   
           <p className="btn-see"> If you want to see all of my projects check out my   <a className="co_und" href="https://github.com/mahad410" target="_blank" rel="noopener noreferrer"> github</a></p>
            
        </div>
    )
}
export default Project;