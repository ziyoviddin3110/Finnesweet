import React from 'react';
import "./Footer.css";
import Btn from '../btn/Btn';
import { NavLink } from 'react-router-dom';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <div className="container">
        <div className="foot_logo">
         
            <NavLink to="/" onClick={scrollToTop}>
              <img src="/public/imgs/Logo.png" alt="" />
            </NavLink>
     

          <div className="links_foot">
            <ul>
              <li><NavLink to="/" onClick={scrollToTop}>Home</NavLink></li>
              <li><NavLink to="/Blog" onClick={scrollToTop}>Blog</NavLink></li>
              <li><NavLink to="/About" onClick={scrollToTop}>About Us</NavLink></li>
              <li><NavLink to="/Contact" onClick={scrollToTop}>Contact Us</NavLink></li>
              <li><NavLink to="/Privaci" onClick={scrollToTop}>Privacy Policy</NavLink></li>
            </ul>
          </div>
        </div>

        <div className="footer_cards">
          <h2>Subscribe to our news letter to get latest updates and news</h2>
          <div className="footer_imput">
            <input placeholder='Enter Your Email' type="email" />
            <Btn />
          </div>
        </div>

        <div className="firistet">
          <div className="firs">
            <h3>Finstreet 118 2561 Fintown</h3>
            <h3>Hello@finsweet.com  020 7993 2905</h3>
          </div>
          <div className="firs_icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;