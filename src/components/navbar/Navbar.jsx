import React from 'react';
import "./Navbar.css";
import { NavLink } from 'react-router-dom';
import Btn from '../btn/Btn';

function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="logo">
       
          <NavLink to="/">   <img src="/imgs/Logo.png" alt="Logo" /></NavLink>
        
        <div className="links_log">
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Blog">Blog</NavLink></li>
            <li><NavLink to="/About">About Us</NavLink></li>
            <li><NavLink to="/Contact">Contact Us</NavLink></li>
          </ul>
        <Btn/>
        </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
