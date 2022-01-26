import React from 'react';
import free from './certificates/free.webp';
function Freecode(){
    return(
        <div className="pro_container">
           <div className="p_container">
                <div className="image">
                    <a href={free} ><img src={free} width="100%" height="180px" alt="cybersec"></img></a>
                </div>
                <div className="detail">
                  <p><span className="co">Responsive Web Design</span></p>
                </div>
        </div>
        </div>
    )
}
export default Freecode;