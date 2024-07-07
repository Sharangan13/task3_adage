import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import whatsapp from '../assets/whatsapp.svg';
import { IoReorderThreeOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <header className='px-1 px-md-5 py-4'>
      <nav className="navbar navbar-expand-lg justify-content-center px-1 px-md-4">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">
  <NavLink to="/" className="d-inline-block align-center flex-shrink-0">
    <img src={logo} alt="Company Logo" width="65px" height="33px" />
  </NavLink>
</a>

          <div className="toggle_icon_div">
            <div className='toggle_icon d-flex' onClick={toggleLinks}>
              <IoReorderThreeOutline />
            </div>
          </div>
          <div className="navbar_custom1" >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link " to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/offer">What We Offer?</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/explore">Explore Colombo</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact us</NavLink>
              </li>
            </ul>
          </div>
       
          <div className='whatsapp-number-div '>
            <div className="whatsapp-number d-flex ">
              <img src={whatsapp} alt="WhatsApp Logo" width="32" height="32" className="d-inline-block align-center" />
              <a href="tel:+94112345678">
      <span>+94 11 2345678</span>
    </a>
            </div>
          </div>
        </div>
        
        <div className={`collapse navbar-collapse justify-content-center  navbar_custom ${showLinks ? 'show' : ''}`} id="navbarNav">
        <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link " to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/offer">What We Offer?</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/explore">Explore Colombo</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact us</NavLink>
              </li>
            </ul>
          </div>
          
      </nav>
    </header>
  );
}
