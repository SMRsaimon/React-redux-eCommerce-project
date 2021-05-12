import React from 'react';
import "./Navigation.css"
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import brandLogo from "../../resource/img/brandLogo.png"

const Navigation = () => {
    return (
      
       <nav>
        <div class="wrapper">
          <div class="logo"><a href="#"><img  className="brandLogo" src={brandLogo} alt="" srcset="" /></a></div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul class="nav-links">
            <label for="close-btn" class="btn close-btn"><ImCross/></label>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li>
              <a href="#" class="desktop-item">Dropdown Menu</a>
              <input type="checkbox" id="showDrop" />
              <label for="showDrop" class="mobile-item">Dropdown Menu</label>
              <ul class="drop-menu">
                <li><a href="#">Drop menu 1</a></li>
                <li><a href="#">Drop menu 2</a></li>
                <li><a href="#">Drop menu 3</a></li>
                <li><a href="#">Drop menu 4</a></li>
              </ul>
            </li>
            <li>
              <a href="#" class="desktop-item">Mega Menu</a>
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
                      <li><a href="#">Graphics</a></li>
                      <li><a href="#">Vectors</a></li>
                      <li><a href="#">Business cards</a></li>
                      <li><a href="#">Custom logo</a></li>
                    </ul>
                  </div>
                  <div class="row">
                    <header>Email Services</header>
                    <ul class="mega-links">
                      <li><a href="#">Personal Email</a></li>
                      <li><a href="#">Business Email</a></li>
                      <li><a href="#">Mobile Email</a></li>
                      <li><a href="#">Web Marketing</a></li>
                    </ul>
                  </div>
                  <div class="row">
                    <header>Security services</header>
                    <ul class="mega-links">
                      <li><a href="#">Site Seal</a></li>
                      <li><a href="#">VPS Hosting</a></li>
                      <li><a href="#">Privacy Seal</a></li>
                      <li><a href="#">Website design</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li><a href="#">Feedback</a></li>
          </ul>
          <label for="menu-btn" class="btn menu-btn"><HiOutlineMenuAlt1/></label>
        </div>
        </nav>
      
  
    )
};

export default Navigation;