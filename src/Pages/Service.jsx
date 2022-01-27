import React from 'react'
import "./service.css";
import site from "./svg/site.svg";
import wp from "./svg/wp.svg";
import rp from "./svg/rp.svg";
import road from "./svg/road.svg";
import {Link} from 'react-router-dom';

function Service(){
    return(
        <div className="pr_container">

            <div className="ser_container">
                  <div>
                      <i className="svg">
                        <img src={site} width="100px" height="100px" alt="Site"></img>
                      </i>
                    </div>
                    <div className="sale_text">
                    <h3><span className="co">&lt;</span> Code your new <span className='co'>Website</span> <span className="co">/&gt;</span></h3>
                    <p>
                      If you want to change your visionary site into reality then I am here to help you.
                    </p>
                  </div>
                </div> 
            <div className="ser_container">
                  <div>
                      <i className="svg">
                        <img src={wp} width="100px" height="100px" alt="WP"></img>
                      </i>
                  </div>
                  <div className="sale_text">
                  <h3><span className="co">&lt;</span> Code your new website on <span className='co'>Wordpress</span> <span className="co">/&gt;</span></h3>
                    <p>
                     Low on budget?? No worries I got you....
                    </p>
                  </div>
                </div>
                <div className="ser_container">
                  <div>
                      <i className="svg">
                        <img src={rp} width="100px" height="100px" alt="RP"></img>
                      </i>
                  </div>
                  <div className="sale_text">
                  <h3><span className="co">&lt;</span> Make your site <span className='co'>Responsive</span> <span className="co">/&gt;</span></h3>
                    <p>
                     Already made your site but it's not responsive.... Hire me.
                    </p>
                  </div>
                </div>

                <div className="ser_container">
                  <div>
                      <i className="svg">
                        <img src={road} width="100px" height="100px" alt="road"></img>
                      </i>
                  </div>
                  <div className="sale_text">
                  <h3><span className="co">&lt;</span> Need a <span className='co'>Mentor</span> ? <span className="co">/&gt;</span></h3>
                    <p>
                    Can't figure out what to do? Let me pave out a way for you...
                    </p>
                  </div>
                </div>
               
                <div className="button_container">
               <a href="mailto:mahadqureshi410@gmail.com">
                 <button className="btn">
                  Hire me
                </button>
                </a>
                </div>
                <div className="button_container">
                <Link to="/certifications" >
                  <button className="btn">
                  Check out my certifications
                   </button>
                  </Link>
                  </div>
                </div>
               
    )
}
export default Service;