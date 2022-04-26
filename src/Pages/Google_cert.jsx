import React from 'react';
import g_cer from './certificates/g_cer.webp';
import g_cert from './certificates/g_cert.webp';
import g_cert_d from './certificates/g_cert_d.webp';

function Google() {
    return (
        <div className="pro_container">
            <div className="p_container">
                <div className="image_pro" data-desc={"Certificate of appreciation in React bootcamp"}>
                    <a href={g_cer} target="_blank" rel="noopener noreferrer"><img src={g_cer} width="100%"
                                                                                   height="180px"
                                                                                   alt="appreciation"></img></a>
                </div>
            </div>
            <div className="p_container">
                <div className="image_pro" data-desc={"Certificate of completion in React bootcamp"}>
                    <a href={g_cer} target="_blank" rel="noopener noreferrer"><img src={g_cert} width="100%"
                                                                                   height="180px"
                                                                                   alt="completion"></img></a>
                </div>
            </div>
            <div className="p_container">
                <div className="image_pro" data-desc={"Certificate of completion in Android jam"}>
                    <a href={g_cert_d} target="_blank" rel="noopener noreferrer"><img src={g_cert_d} width="100%"
                                                                                      height="180px"
                                                                                      alt="completion"></img></a>
                </div>
            </div>
        </div>
    )
}


export default Google;