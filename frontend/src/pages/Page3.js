import React from 'react';
import page3_1 from '../assets/page3_1.png';
import page3_2 from '../assets/page3_2.png';
import page3_3 from '../assets/page3_3.png';
import page3_4 from '../assets/page3_4.png';
import page3_5 from '../assets/page3_5.png';
import page3_6 from '../assets/page3_6.png';
import page3_7 from '../assets/page3_7.png';
import page3_8 from '../assets/page3_8.png';
import ImageBox from '../utility/ImageBox';


export default function Page3() {
  return (
    <div className='pt-0 pb-5 pt-md-5  mt-5 page3_main_div '>
      <div className='row justify-content-center'>
        <heading className='col-12 d-flex align-items-center page2-container mb-5 px-3 px-md-5'>
        <div className='page2_p px-0 px-md-2'>
          <p>What Can <span>I Expect</span> from <br className='d-none d-md-block'/>a Serviced Apartment? </p>
          <p></p>
        </div>
        <div className='flex-grow-1'>
          <hr className='orange-line'/>
        </div>
      </heading>
      <div className='align-items-center text-center row justify-content-center px-md-5 px-2 image_collection_div' >
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-3 text-start'>
        <ImageBox imageUrl={page3_1} boxWidth="100%" boxHeight="100%"></ImageBox>
          
          <p className='pt-2'>Comfortable Living Space</p>
        </div>
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-3 text-start'>
        <ImageBox imageUrl={page3_2} boxWidth="100%" boxHeight="100%"></ImageBox>
          <p className='pt-2'>Housekeeping Services</p>
        </div>
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-3 text-start'>
        <ImageBox imageUrl={page3_3} boxWidth="100%" boxHeight="100%"></ImageBox>
          <p className='pt-2'>Amenities and Facilities</p>
        </div>
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-3 text-start'>
        <ImageBox imageUrl={page3_4} boxWidth="100%" boxHeight="100%"></ImageBox>
          <p className='pt-2'>Privacy and Security</p>
        </div>
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-3 text-start'>
        <ImageBox imageUrl={page3_5} boxWidth="100%" boxHeight="100%"></ImageBox>
          <p className='pt-2'>City-Center Locations</p>
        </div>
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-3 text-start'>
        <ImageBox imageUrl={page3_6} boxWidth="100%" boxHeight="100%"></ImageBox>
          <p className='pt-2'>Cost-Effective</p>
        </div>
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-3 text-start'>
        <ImageBox imageUrl={page3_7} boxWidth="100%" boxHeight="100%"></ImageBox>
          <p className='pt-2'>Personalized Service</p>
        </div>
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-3 text-start'>
        <ImageBox imageUrl={page3_8} boxWidth="100%" boxHeight="100%"></ImageBox>
          <p className='pt-2'>Flexibility</p>
        </div>
        </div>
      </div>
    </div>
  );
}
