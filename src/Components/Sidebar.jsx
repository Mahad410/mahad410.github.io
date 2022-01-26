import React from 'react';
import './sidebar.css';

function Sidebar(){
    return (
      <div className="container_side">
      <ul className="ul">
      <li className="a"><a href="https://www.linkedin.com/in/mahid-ghias-0aa6731ab/" target="_blank" rel="noopener noreferrer"><span className="code">&lt;</span> Linkden <span className="code">/&gt;</span></a></li>
      <li className="a"><a href="https://twitter.com/Mahad410" target="_blank" rel="noopener noreferrer"><span className="code">&lt;</span> Twitter <span className="code">/&gt;</span></a></li>
      <li className="a"><a href="https://github.com/mahad410" target="_blank" rel="noopener noreferrer"><span className="code">&lt;</span> Github <span className="code">/&gt;</span></a></li>
      </ul>
      </div>
    )
}
export default Sidebar;