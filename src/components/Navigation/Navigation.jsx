import React from 'react';
import "./Navigation.css"
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import brandLogo from "../../resource/img/brandLogo.png"
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
      
       <nav id="navigation">
        <div className="wrapper">
          <div className="logo"><Link to="/"><img className="brandLogo" src={brandLogo} alt="" srcset="" /></Link></div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
            <label for="close-btn" className="btn close-btn"><ImCross/></label>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li>
              <Link to="/" className="desktop-item">Dropdown Menu</Link>
              <input type="checkbox" id="showDrop" />
              <label for="showDrop" className="mobile-item">Dropdown Menu</label>
              <ul className="drop-menu">
                <li><Link to="/">Drop menu 1</Link></li>
                <li><Link to="/">Drop menu 2</Link></li>
                <li><Link to="/">Drop menu 3</Link></li>
                <li><Link to="/">Drop menu 4</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/" className="desktop-item">Mega Menu</Link>
              <input type="checkbox" id="showMega" />
              <label for="showMega" className="mobile-item">Mega Menu</label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                
                    {/* <!-- <img src="img.jpg" alt=""> --> */}
                  </div>
                  <div className="row">
                    <header>Design Services</header>
                    <ul className="mega-links">
                      <li><Link to="/">Graphics</Link></li>
                      <li><Link to="/">Vectors</Link></li>
                      <li><Link to="/">Business cards</Link></li>
                      <li><Link to="/">Custom logo</Link></li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Email Services</header>
                    <ul className="mega-links">
                      <li><Link to="/">Personal Email</Link></li>
                      <li><Link to="/">Business Email</Link></li>
                      <li><Link to="/">Mobile Email</Link></li>
                      <li><Link to="/">Web Marketing</Link></li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Security services</header>
                    <ul className="mega-links">
                      <li><Link to="/">Site Seal</Link></li>
                      <li><Link to="/">VPS Hosting</Link></li>
                      <li><Link to="/">Privacy Seal</Link></li>
                      <li><Link to="/">Website design</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li><Link to="/">Feedback</Link></li>
          </ul>
          <label for="menu-btn" className="btn menu-btn"><HiOutlineMenuAlt1/></label>
        </div>
        </nav>
    )
};

export default Navigation;