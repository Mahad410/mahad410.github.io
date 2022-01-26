import React from 'react';
import udemy from './certificates/udemy.webp';

function Udemy(){
    return (
        <div className="pro_container">
            <div className="p_container">
                <div className="image">
                    <a href={udemy} ><img src={udemy} width="100%" height="180px" alt="cybersec"></img></a>
                </div>
                <div className="detail">
                  <p> <span className="co">HTML</span> &  <span className="co">CSS</span></p>
                </div>
        </div>
        </div>
    )
}

export default Udemy;