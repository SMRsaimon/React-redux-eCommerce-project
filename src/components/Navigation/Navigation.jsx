import React from 'react';
import "./Navigation.css"
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import brandLogo from "../../resource/img/brandLogo.png"
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
      
       <nav>
        <div class="wrapper">
          <div class="logo"><Link to="/"><img className="brandLogo" src={brandLogo} alt="" srcset="" /></Link></div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul class="nav-links">
            <label for="close-btn" class="btn close-btn"><ImCross/></label>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li>
              <Link to="/" class="desktop-item">Dropdown Menu</Link>
              <input type="checkbox" id="showDrop" />
              <label for="showDrop" class="mobile-item">Dropdown Menu</label>
              <ul class="drop-menu">
                <li><Link to="/">Drop menu 1</Link></li>
                <li><Link to="/">Drop menu 2</Link></li>
                <li><Link to="/">Drop menu 3</Link></li>
                <li><Link to="/">Drop menu 4</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/" class="desktop-item">Mega Menu</Link>
              <input type="checkbox" id="showMega" />
              <label for="showMega" class="mobile-item">Mega Menu</label>
              <div class="mega-box">
                <div class="content">
                  <div class="row">
                    {/* <!-- <img src="img.jpg" alt=""> --> */}
                  </div>
                  <div class="row">
                    <header>Design Services</header>
                    <ul class="mega-links">
                      <li><Link to="/">Graphics</Link></li>
                      <li><Link to="/">Vectors</Link></li>
                      <li><Link to="/">Business cards</Link></li>
                      <li><Link to="/">Custom logo</Link></li>
                    </ul>
                  </div>
                  <div class="row">
                    <header>Email Services</header>
                    <ul class="mega-links">
                      <li><Link to="/">Personal Email</Link></li>
                      <li><Link to="/">Business Email</Link></li>
                      <li><Link to="/">Mobile Email</Link></li>
                      <li><Link to="/">Web Marketing</Link></li>
                    </ul>
                  </div>
                  <div class="row">
                    <header>Security services</header>
                    <ul class="mega-links">
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
          <label for="menu-btn" class="btn menu-btn"><HiOutlineMenuAlt1/></label>
        </div>
        </nav>
      
  
    )
};

export default Navigation;