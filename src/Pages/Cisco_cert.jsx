import React from 'react';
import cyber from "./certificates/cyber.webp";
import entre from "./certificates/entre.webp";
import network from "./certificates/net_essen.webp";
import iot from "./certificates/iot.webp";
import linux from "./certificates/linux_essen.webp";

function Cisco(){
    return(
 <div className="pro_container">
<div className="p_container">
                <div className="image">
                    <a href={cyber} ><img src={cyber} width="100%" height="180px" alt="cybersec"></img></a>
                </div>
                <div className="detail">
                  <p> Intro to  <span className="co">Cybersecurity</span></p>
                </div>
        </div>
        <div className="p_container">
                <div className="image">
                    <a href={entre} ><img src={entre} width="100%" height="180px" alt="entrepreneur"></img></a>
                </div>
                <div className="detail">
                  <p><span className="co">Entrepreneurship</span></p>
                </div>
        </div>

        <div className="p_container">
                <div className="image">
                    <a href={network} ><img src={network} width="100%" height="180px" alt="networking"></img></a>
                </div>
                <div className="detail">
                  <p><span className="co">Networking</span> Essentials</p>
                </div>
        </div>

        <div className="p_container">
                <div className="image">
                    <a href={iot} ><img src={iot} width="100%" height="180px" alt="iot"></img></a>
                </div>
                <div className="detail">
                  <p> Introduction to  <span className="co">IOT</span></p>
                </div>
        </div>

        <div className="p_container">
                <div className="image">
                    <a href={linux} ><img src={linux} width="100%" height="180px" alt="appreciation"></img></a>
                </div> 
                <div className="detail">
                  <p> <span className="co">Linux</span> Essentials</p>
                </div>
        </div>
</div>
    )
}

export default Cisco;