import React from 'react';
import './navbar.css';
import{NavLink, Link} from 'react-router-dom';
import logo from '../Pages/pics/logo.webp';
function Nav(){
    return (
        <div className="navbar">
            <div className="navbar-links">
        <ul>
        <li><Link to="/"><img className="logo" src={logo} width="50px" height="50px" alt="logo"></img></Link></li>
        <li><NavLink activeClassName="active" to="/"><span className="code">&lt;</span> Home <span className="code">/&gt;</span></NavLink></li>
        <li><NavLink activeClassName="active" to="/projects"><span className="code">&lt;</span> Projects <span className="code">/&gt;</span></NavLink></li>
        <li><NavLink activeClassName="active" to="/services"><span className="code">&lt;</span> Services <span className="code">/&gt;</span></NavLink></li>
        </ul>
        </div>
        </div>
    )
}
export default Nav;