import React from 'react';
import logo from '../assets/logo.svg';
import { FaFacebookF } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { Link } from 'react-router-dom';




export default function Footerbar() {
  return (
    <footer className='px-5 py-4'>
      <div className='d-none d-lg-block'>
        <div className="d-flex justify-content-between align-items-center ">
        <Link to="/">
            <img src={logo} alt="Company Logo" width="65" height="33" className="d-inline-block align-center" />
            </Link>
          
          
            <p className='footer_phra_desktop'>&copy; 2024 RUJ Sri Lanka. All rights reserved. </p>
          
          <div className="d-flex">
            <div className='round mx-2'><FaFacebookF/></div>
            <div className='round mx-2'><LuInstagram/></div>
            
          </div>
        </div>
        </div>
        <div className="justify-content-between align-items-center  d-block d-lg-none">
          
          
          
            <p className='text-center footer_phra_mobile'>&copy; 2024 RUJ Sri Lanka. All rights reserved. </p>
          
          <div className="d-flex justify-content-center align-items-center">
            <div className='round mx-2'><FaFacebookF/></div>
            <div className='round mx-2'><LuInstagram/></div>
            
          </div>
        </div>
      
    </footer>
  );
}
