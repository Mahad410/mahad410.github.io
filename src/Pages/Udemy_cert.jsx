import React from 'react';
import udemy from './certificates/udemy.webp';
import udemyc from './udemy_cert/html_css.pdf';

function Udemy(){
    return (
        <div className="pro_container">
            <div className="p_container">
                <div className="image">
                    <a href={udemyc} ><img src={udemy} width="100%" height="200px" alt="cybersec"></img></a>
                </div>
                <div className="detail">
                  <p> <span className="co">HTML</span> &  <span className="co">CSS</span></p>
                </div>
        </div>
        </div>
    )
}

export default Udemy;