import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import whatsapp from '../assets/whatsapp.svg';
import { IoReorderThreeOutline } from "react-icons/io5";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { IoArrowBackOutline } from "react-icons/io5";




export default function NavBarGuestInfoPage() {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate(-1);
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
           <div className='back_icon_nav d-flex' onClick={handleCancel}>
              <IoArrowBackOutline className='back_icon_nav_sixe'/>
            </div>
          </div>
          
       
          <div className='whatsapp-number-div '>
            <div className="whatsapp-number d-flex ">
            <a href="tel:+94112345678"> <img src={whatsapp} alt="WhatsApp Logo" width="28" height="28" className="d-inline-block align-center" />
              
      <span>+94 11 2345678</span>
    </a>
            </div>
          </div>
        </div>
        
       
          
      </nav>
    </header>
  );
}
