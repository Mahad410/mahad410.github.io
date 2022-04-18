import React from 'react';
import sql from './certificates/sql.webp';
function Sql(){
    return(
        <div className="pro_container">
     <div className="p_container">
                <div className="image">
                    <a href={sql} ><img src={sql} width="100%" height="180px" alt="appreciation"></img></a>
                </div>
                <div className="detail">
                  <p> Statement of <span className="co">Accomplishment</span> in <span className="co"> SQL </span></p>
                </div>
        </div>
        </div>
    )
}


export default Sql;