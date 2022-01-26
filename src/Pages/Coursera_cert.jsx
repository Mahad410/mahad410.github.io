import React from 'react';
import coursera from './certificates/coursera.webp';
function Coursera(){
    return (
        <div className="pro_container">
            <div className="p_container">
                <div className="image">
                    <a href={coursera} ><img src={coursera} width="100%" height="180px" alt="cybersec"></img></a>
                </div>
                <div className="detail">
                  <p><span className="co">Technical Support </span>fundamentals</p>
                </div>
        </div>
        </div>
    )
}
export default Coursera;