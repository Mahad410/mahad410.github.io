import React from 'react';
import cyber from "./certificates/cyber.webp";
import entre from "./certificates/entre.webp";
import network from "./certificates/net_essen.webp";
import iot from "./certificates/iot.webp";
import linux from "./certificates/linux_essen.webp";

function Cisco() {
    return (
        <div className="pro_container">
            <div className="p_container">
                <div className="image_pro" data-desc={"Intro to Cybersecurity"}>
                    <a href={cyber} target="_blank" rel="noopener noreferrer"><img src={cyber} width="100%"
                                                                                   height="180px" alt="cybersec"></img></a>
                </div>
            </div>
            <div className="p_container">
                <div className="image_pro" data-desc={"Entrepreneurship"}>
                    <a href={entre} target="_blank" rel="noopener noreferrer"><img src={entre} width="100%"
                                                                                   height="180px"
                                                                                   alt="entrepreneur"></img></a>
                </div>
            </div>

            <div className="p_container">
                <div className="image_pro" data-desc={"Networking Essentials"}>
                    <a href={network} target="_blank" rel="noopener noreferrer"><img src={network} width="100%"
                                                                                     height="180px"
                                                                                     alt="networking"></img></a>
                </div>
            </div>

            <div className="p_container">
                <div className="image_pro" data-desc={"Introduction to IOT"}>
                    <a href={iot} target="_blank" rel="noopener noreferrer"><img src={iot} width="100%" height="180px"
                                                                                 alt="iot"></img></a>
                </div>
            </div>

            <div className="p_container">
                <div className="image_pro" data-desc={"Linux Essentials"}>
                    <a href={linux} target="_blank" rel="noopener noreferrer"><img src={linux} width="100%"
                                                                                   height="180px"
                                                                                   alt="appreciation"></img></a>
                </div>
            </div>
        </div>
    )
}

export default Cisco;