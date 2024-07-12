import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import whatsapp from '../assets/whatsapp.svg';
import { CgMenu } from "react-icons/cg";
import { NavLink } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };


  return (
    <header className='px-1 px-md-5 py-1 py-md-4 Header_class'>
      <nav className="navbar navbar-expand-lg justify-content-center px-1 px-md-4">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">
  <NavLink to="/" className="d-inline-block align-center flex-shrink-0">
    <img src={logo} alt="Company Logo" width="65px" height="33px" />
  </NavLink>
</a>

          <div className="toggle_icon_div">
            <div className='toggle_icon d-flex' onClick={toggleLinks}>
              <CgMenu className='toggle_icon_btnn'/>
            </div>
          </div>
          <div className="navbar_custom1" >
            <ul className="navbar-nav nav_barScroll_ul">
              <li className="nav-item" >
                <ScrollLink className="nav-link " to="home_page" >Home</ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink className="nav-link" to="offer_page">What We Offer?</ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink className="nav-link" to="explore_page">Explore Colombo</ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink className="nav-link" to="contact_page" >Contact us</ScrollLink>
              </li>
            </ul>
          </div>
       
          <div className='whatsapp-number-div '>
            <div className="whatsapp-number d-flex ">
            <a href="tel:+94112345678"> <img src={whatsapp} alt="WhatsApp Logo" width="32" height="32" className="d-inline-block align-center" />
              
      <span>+94 11 2345678</span>
    </a>
            </div>
          </div>
        </div>
        
        <div className={`collapse navbar-collapse justify-content-center  navbar_custom ${showLinks ? 'show' : ''}`} id="navbarNav">
        <ul className="navbar-nav nav_barScroll_ul">
              <li className="nav-item" >
                <ScrollLink className="nav-link " to="home_page" onClick={toggleLinks} offset={-70}>Home</ScrollLink>
              </li>
              <li className="nav-item" >
                <ScrollLink className="nav-link" to="offer_page" onClick={toggleLinks} offset={-70}>What We Offer?</ScrollLink>
              </li>
              <li className="nav-item" >
                <ScrollLink className="nav-link" to="explore_page" onClick={toggleLinks} offset={-70}>Explore Colombo</ScrollLink>
              </li>
              <li className="nav-item" >
                <ScrollLink className="nav-link" to="contact_page" onClick={toggleLinks} offset={-70}>Contact us</ScrollLink>
              </li>
            </ul>
          </div>
          
      </nav>
    </header>
  );
}
