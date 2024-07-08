import React from 'react';
import { IoMdCheckmark } from "react-icons/io";
import page1_1 from '../assets/page1_1.png';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';




export default function Page2() {
  return (
    <div className='col-12 px-md-5 py-md-5 mt-5'>

      <heading className='col-12  px-2 px-md-5  d-flex align-items-center page2-container mb-5'>
        <div className='page2_p px-2 px-md-0'>
          <p>What is a <br/><span>Serviced Apartment?</span></p>
        </div>
        <div className='flex-grow-1'>
          <hr className='orange-line'/>
        </div>
      </heading>



      <div className='col-12 d-block d-md-flex'>
        <div className='col-12 col-md-6 pe-md-4'>
        <img src={page1_1} alt="Home 4" className="img-fluid" />
        </div>

        <div className='col-12 col-md-6 page2_content px-2 px-md-4'>
            <p className='pt-4 pt-md-0 px-2 px-md-0'>A serviced apartment is a fully furnished accommodation option that provides amenities and services similar to those of a hotel, combined with the privacy and <span>comfort</span> of a home. Unlike traditional apartments, serviced apartments are designed to cater to the needs of both short-term and long-term stays, offering <span>flexibility</span> and convenience to travelers.</p>
            <ui className ='list-unstyled d-flex px-2 px-md-0'>
                <li><IoMdCheckmark className='me-0 me-md-2 tick_icon'/>Flexible</li>
                <li><IoMdCheckmark className='me-0 me-md-2 tick_icon'/>Privacy</li>
                <li><IoMdCheckmark className='me-0 me-md-2 tick_icon'/>Comfort</li>
                <li><IoMdCheckmark className='me-0 me-md-2 tick_icon'/>Amenities</li>
            </ui>

            <div>
          <hr className='ash-line'/>
        </div>

        <div className='d-block d-md-flex justify-content-end pt-4 px-2'>
       <Link to ="/booking"><button className=' page2_btn'>See details <FaArrowRight className='ms-1'/></button></Link> 
        </div>
        </div>
      </div>

    </div>
  );
}
