import React from 'react';
import home1 from '../assets/home1.png';
import home2 from '../assets/home2.png';
import home3 from '../assets/home3.png';
import home4 from '../assets/home4.png';
import page7_3 from '../assets/page7_3.png';
import home_6 from '../assets/home_6.png';
import home_7 from '../assets/home_7.png';
import home_5 from '../assets/home_5.png';
import { FiArrowUpRight } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiArrowLongRight } from "react-icons/hi2";
import ImageBox from '../utility/ImageBox';
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";



export default function Home() {
  return (
    <div className=''>

<div className="d-block d-md-none">
        <Carousel 
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
         
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
             (
              
               <MdArrowBackIosNew onClick={onClickHandler}className="carousel-arrow carousel-arrow-prev"/>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
             (
              
              <MdArrowForwardIos onClick={onClickHandler}className="carousel-arrow carousel-arrow-next"/>
            )
          }
        >
          <div>
            <img src={home_5} alt='Page 1' className="carousel-image"/>
          </div>
          <div>
            <img src={home1} alt='Page 2' className="carousel-image"/>
          </div>
          <div>
            <img src={home2} alt='Page 3' className="carousel-image"/>
          </div>
          <div>
            <img src={home3} alt='Page 4' className="carousel-image"/>
          </div>
          <div>
            <img src={home4} alt='Page 5' className="carousel-image"/>
          </div>
          <div>
            <img src={home_5} alt='Page 1' className="carousel-image"/>
          </div>
          <div>
            <img src={page7_3} alt='Page 2' className="carousel-image"/>
          </div>
          <div>
            <img src={home_6} alt='Page 3' className="carousel-image"/>
          </div>
          <div>
            <img src={home_7} alt='Page 4' className="carousel-image"/>
          </div>
          
          
        </Carousel>
       
      </div>
      <div className='px-3 px-md-5'>
      <div className='row px-2 ps-md-4 '>

      
        <div className='col-12 col-md-6 py-3 py-md-5 ps-md-4'>
          <h1 className='home_h1 pb-4'>Discover Luxury Living in Colombo with RUJ.</h1>
          <p className='home_p col-12 col-md-8 pt-2 pb-2'>Experience Unparalleled Comfort and Convenience in Our Serviced Apartments</p>
          <div className='mb-0 mb-md-4 my-2 my-md-5 d-block text-center d-md-flex '>
           <div className='home_btn me-0 me-md-1'> <ScrollLink to="offer_page"><button className='col-12' >Explore Our Properties <FiArrowUpRight /></button></ScrollLink></div>
           <div className='home_btn2 me-0 me-md-1'> <ScrollLink to="explore_page"><button className='col-12' >Discover Colombo <MdKeyboardArrowRight className='fs-3' /></button></ScrollLink> </div>
          </div>
          
        </div>
        
        <div className='col-6 d-flex '>
          <div className='col-6 d-none d-md-block'>
            <div className='col-12 mb-2 ms-5  border border-5 border-white' style={{ backgroundImage: `url(${home4})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '80%', height: '100%' }}>
             
            </div>
            <div className='col-12 d-flex'>
            <div className='mx-1 border border-5 border-white '>
               <ImageBox imageUrl={home2} boxWidth="100px" boxHeight="100px"></ImageBox> 
              </div>
              <div className='mx-1 border border-5 border-white'>
              <ImageBox imageUrl={home3} boxWidth="100px" boxHeight="100px"></ImageBox> 
              </div>
              <div className='mx-1 me-3 border border-5 border-white'>
              <ImageBox imageUrl={home4} boxWidth="100px" boxHeight="100px"></ImageBox> 
              </div>
            </div>
          </div>
          <div className='col-6 d-none d-md-block'>
            <div className='col-12 d-flex'>
              <div className='me-1 border border-5 border-white'>
              <ImageBox imageUrl={page7_3} boxWidth="100px" boxHeight="100px"></ImageBox> 
              </div>
              <div className='mx-1 border border-5 border-white'>
              <ImageBox imageUrl={home_6} boxWidth="100px" boxHeight="100px"></ImageBox> 
              </div>
              <div className='mx-1 border border-5 border-white'>
              <ImageBox imageUrl={home_7} boxWidth="100px" boxHeight="100px"></ImageBox> 
              </div>
            </div>
            <div className='col-6 mt-2  position-relative border border-5 border-white' style={{ backgroundImage: `url(${home_5})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '80%', height: '100%' }}>
              <div className='position-absolute bottom-0 end-0'>
               <Link to="/booking"> <HiArrowLongRight className='text-white' style={{ fontSize: '50px' }} /></Link>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-0 mt-md-4 home_list_3  ps-md-4 px-3 px-md-5 pb-4 pb-md-5'>
            <ul className='list-unstyled d-flex  justify-content-between col-12 col-md-3'>
              <li className='col-2 '><h1>20+</h1> <p>Premium <br></br>Amenities</p></li>
              <li className='col-2 '><h1>99+</h1> <p>People <br></br>Booked</p></li>
              <li className='col-2 '><h1>10+</h1> <p>Industry <br></br>Experts</p></li>
            </ul>
          </div>
      </div>
      </div>
    </div>
  );
}
