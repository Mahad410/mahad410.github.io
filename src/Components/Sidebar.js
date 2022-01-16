import React from 'react';
import './sidebar.css';

function Sidebar(){
    return (
      <div className="container_side">
      <ul className="ul">
      <li className="a"><a href="https://mahad410.github.io" target="_blank" rel="noopener noreferrer"><span className="code">&lt;</span> Linkden <span className="code">&gt;</span></a></li>
      <li className="a"><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><span className="code">&lt;</span> Twitter <span className="code">&gt;</span></a></li>
      <li className="a"><a href="https://github.com/mahad410" target="_blank" rel="noopener noreferrer"><span className="code">&lt;</span> Github <span className="code">/&gt;</span></a></li>
      </ul>
      </div>
    )
}
export default Sidebar;