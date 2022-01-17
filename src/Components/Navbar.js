import React from 'react';
import './navbar.css';
import{Link} from 'react-router-dom';
import promo from './promo.webp'
function Nav(){
    return (
        <div className="navbar">
            <div className="navbar-logo"></div>
            <div className="navbar-links">
        <ul>
        <li><Link to="/"><img className="logo" src={promo} width="50px" height="50px" alt="logo"></img></Link></li>
        <li><Link to="/"><span className="code">&lt;</span> Home <span className="code">/&gt;</span></Link></li>
        <li><Link to="/projects"><span className="code">&lt;</span> Projects <span className="code">/&gt;</span></Link></li>
        <li><Link to="/contact-me"><span className="code">&lt;</span> Contact <span className="code">/&gt;</span></Link></li>
        </ul>
        </div>
        </div>
    )
}
export default Nav;