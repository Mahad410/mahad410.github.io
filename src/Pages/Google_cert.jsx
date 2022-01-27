import React from 'react';
import g_cer from './certificates/g_cer.webp';
import g_cert from './certificates/g_cert.webp';
import g_cert_d from './certificates/g_cert_d.webp';
function Google(){
    return(
        <div className="pro_container">
     <div className="p_container">
                <div className="image">
                    <a href={g_cer} ><img src={g_cer} width="100%" height="180px" alt="appreciation"></img></a>
                </div>
                
                <div className="detail">
                  <p> Certificate of <span className="co">Appretiation</span> in <span className="co"> React </span>bootcamp</p>
                </div>
        </div>
        <div className="p_container">
                <div className="image">
                    <a href={g_cer} ><img src={g_cert} width="100%" height="180px" alt="completion"></img></a>
                </div>
                
                <div className="detail">
                  <p> Certificate of <span className="co">Completion</span> in <span className="co"> React </span>bootcamp</p>
                </div>
        </div>    
        <div className="p_container">
                <div className="image">
                    <a href={g_cert_d} ><img src={g_cert_d} width="100%" height="180px" alt="completion"></img></a>
                </div>
                
                <div className="detail">
                  <p> Certificate of <span className="co">Completion</span> in <span className="co"> Android Jam</span> bootcamp</p>
                </div>
        </div>    
        </div>
    )
}


export default Google;