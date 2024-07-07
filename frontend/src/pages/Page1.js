import React from "react";
import home4 from "../assets/home4.png";
import page1_1 from "../assets/page1_1.png";
import page7_3 from "../assets/page7_3.png";
import page1_3 from "../assets/page1_3.png";
import page1_4 from "../assets/page1_4.png";
import { IoArrowDownSharp } from "react-icons/io5";

import { MdArrowBackIosNew } from "react-icons/md";

import { MdArrowForwardIos } from "react-icons/md";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { VscZoomIn } from "react-icons/vsc";
import { Link } from "react-router-dom";


export default function Page1() {
  return (
    <div >
    <div className="page_1_main_div position-relative d-none d-md-block">
    <div className="col-12 d-flex px-5 page1">
      <div className="col-6 ps-4">
        <div className="col-12 mt-5">
          <p className="page1_h1">
            Explore Our <span>Spaces</span>{" "}
          </p>
          <p className="page_p mb-5 pb-5">
            Every image speaks of comfort, luxury, and convenience. Explore the
            allure of our properties, from the sleek interiors to the
            breathtaking views. Immerse yourself in the essence of modern living
            and envision your next stay with us
          </p>
        </div>

        <div className="col-12 mb-2 pe-4">
          <img src={page1_1} alt="Home 4" className="img-fluid" />
        </div>
      </div>

      <div className="col-6 d-flex">
        <div className="ms-5 col-6">
          <div
            className="col-12 mb-5  "
            style={{
              backgroundImage: `url(${home4})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "90%",
              height: "62%",
            }}
          ></div>

          <div
            className="col-12 mb-2  "
            style={{
              backgroundImage: `url(${page1_3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "90%",
              height: "30%",
            }}
          ></div>
        </div>

        <div className="col-6">
          <div
            className="col-12 mb-5 "
            style={{
              backgroundImage: `url(${page7_3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "80%",
              height: "47%",
            }}
          ></div>

          <div
            className="col-12 mb-2  "
            style={{
              backgroundImage: `url(${page1_4})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "80%",
              height: "45%",
            }}
          ></div>
        </div>
      </div>
    </div>
  <Link to="/booking">  <div className="btn_design text-center">
      <a>Show more</a><IoArrowDownSharp className="ms-1"/>

    </div></Link>
    </div>


    <div className="d-block d-md-none">
    <div className="col-12 px-2 page1 pt-5">
    <div className="col-12 pb-2">
          <p className="page1_h1">
            Explore Our <span>Spaces</span>{" "}
          </p>
          <p className="page_p">
            Every image speaks of comfort, luxury, and convenience. Explore the
            allure of our properties, from the sleek interiors to the
            breathtaking views. Immerse yourself in the essence of modern living
            and envision your next stay with us
          </p>
        </div>


        
      
    </div>
    <div className="d-block d-md-none position-relative pb-5">
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
            <img src={home4} alt='Page 1' className="carousel-image"/>
          </div>
          <div>
            <img src={page1_1} alt='Page 2' className="carousel-image"/>
          </div>
          <div>
            <img src={page7_3} alt='Page 3' className="carousel-image"/>
          </div>
          <div>
            <img src={page1_3} alt='Page 4' className="carousel-image"/>
          </div>
          <div>
            <img src={page1_4} alt='Page 5' className="carousel-image"/>
          </div>
          
        </Carousel>
        <div className="position-absolute top-50 start-50 translate-middle">
                  <button className="camera_icon_mobile">
                 <Link to="/booking"><VscZoomIn className="fs-1"/></Link>
                  </button>
                </div>
      </div>
    
    </div>
    </div>
  );
}
