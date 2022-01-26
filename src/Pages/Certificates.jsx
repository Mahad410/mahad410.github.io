import React from 'react';
import google from './certificate_type/google.webp';
import udemy from './certificate_type/udemy.webp';
import cisco from './certificate_type/cisco.webp';
import freecode from './certificate_type/freecode.webp';
import coursera from './certificate_type/coursera.webp';
import './certificate.css';
import {Link} from 'react-router-dom';
function Cert(){
    return(
<div className="pro_container">
<div className="p_container">
                <div className="image">
                    <img src={google} width="50%" height="100px" alt="google"></img>
                </div>
                <div className="detail">
                  <p>From <span className="co">Google</span></p>
                </div>
                
      <Link to="/google-certificates">  <button className="btn">
        Show All Certificates
        </button>
        </Link>
</div>

<div className="p_container">
                <div className="image">
                    <img src={cisco} width="50%" height="100px" alt="cisco"></img>
                </div>
                <div className="detail">
                  <p>From <span className="co">Cisco</span></p>
                </div>
                
      <Link to="/cisco-certificates">  <button className="btn">
        Show All Certificates
        </button>
        </Link>
</div>

<div className="p_container">
                <div className="image">
                    <img src={udemy} width="50%" height="100px" alt="udemy"></img>
                </div>
                <div className="detail">
                  <p>From <span className="co">Udemy</span></p>
                </div>
                
      <Link to="/udemy-certificates">  <button className="btn">
        Show All Certificates
        </button>
        </Link>
</div>
<div className="p_container">
                <div className="free_image">
                    <img src={freecode} width="40%" height="90px" alt="freecodecamp"></img>
                </div>
                <div className="detail">
                  <p>From <span className="co">Freecodecamp</span></p>
                </div>
                
      <Link to="/freecodecamp-certificates">  <button className="btn">
        Show All Certificates
        </button>
        </Link>
</div>
<div className="p_container">
                <div className="cor_image">
                    <img src={coursera} width="50%" height="auto" alt="coursera"></img>
                </div>
                <div className="detail">
                  <p>From <span className="co">Coursera</span></p>
                </div>
                
      <Link to="/coursera-certificates">  <button className="btn">
        Show All Certificates
        </button>
        </Link>
</div>
</div>
    )
}
export default Cert;