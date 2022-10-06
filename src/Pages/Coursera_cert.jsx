import React from 'react';
import coursera from './certificates/coursera.webp';

function Coursera() {
    return (
        <div className="pro_container">
            <div className="p_container">
                <div className="image_pro" data-desc={"Technical Support Fundamentals"}>
                    <a href={coursera}><img src={coursera} width="100%" height="180px" alt="cybersec"></img></a>
                </div>
            </div>
        </div>
    )
}

export default Coursera;