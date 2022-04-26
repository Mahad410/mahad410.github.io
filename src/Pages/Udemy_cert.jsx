import React from 'react';
import udemy from './certificates/udemy.webp';

function Udemy() {
    return (
        <div className="pro_container">
            <div className="p_container">
                <div className="image_pro" data-desc={"HTML & CSS"}>
                    <a href={udemy} target="_blank" rel="noopener noreferrer"><img src={udemy} width="100%"
                                                                                   height="180px" alt="cybersec"></img></a>
                </div>
            </div>
        </div>
    )
}

export default Udemy;