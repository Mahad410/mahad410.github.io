import React from 'react';
import free from './certificates/free.webp';

function Freecode() {
    return (
        <div className="pro_container">
            <div className="p_container">
                <div className="image_pro" data-desc={"Responsive Web Design"}>
                    <a href={free} target="_blank" rel="noopener noreferrer"><img src={free} width="100%" height="180px"
                                                                                  alt="cybersec"></img></a>
                </div>
            </div>
        </div>
    )
}

export default Freecode;