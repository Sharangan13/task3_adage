import React, { useState } from "react";
import page7_1 from "../assets/page7_1.png";
import page7_2 from "../assets/page7_2.png";
import page7_3 from "../assets/page7_3.png";
import page7_4 from "../assets/page7_4.png";
import page7_5 from "../assets/page7_5.png";
import ImageBox from "../utility/ImageBox";
import { IoArrowBackSharp } from "react-icons/io5";
import { IoCamera } from "react-icons/io5";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import { MdArrowBackIosNew } from "react-icons/md";

import { MdArrowForwardIos } from "react-icons/md";



export default function Page7() {
  const [activeItem, setActiveItem] = useState(1);

  const handleSlideChange = (index) => {
    setActiveItem(index + 1);
  };
  return (
    <div className=" py-5">
      <div className="d-none d-lg-block  ms-4 ps-3 mb-3">
        <button className="page7_btn1">
          <IoArrowBackSharp className="btn_arrow" /> Back to Homepage
        </button>
      </div>
      <div className="d-none d-lg-block">
        <div className="col-12 d-flex px-5 page7_main_div ">
          <div className="col-6 pe-2 ">
            <ImageBox
              imageUrl={page7_1}
              boxWidth="100%"
              boxHeight="100%"
              borderRadiusTopLeft="20px"
              borderRadiusBottomLeft="20px"
            />
          </div>

          <div className="col-6 ">
            <div className="d-flex pb-1">
              <div className="pe-1 col-6">
                <ImageBox imageUrl={page7_5} boxWidth="100%" boxHeight="auto" />
              </div>
              <div className="ps-1 col-6">
                <ImageBox
                  imageUrl={page7_4}
                  boxWidth="100%"
                  boxHeight="auto"
                  borderRadiusTopRight="20px"
                />
              </div>
            </div>

            <div className="d-flex pt-1 ">
              <div className="pe-1 col-6">
                <ImageBox imageUrl={page7_3} boxWidth="100%" boxHeight="auto" />
              </div>
              <div className="ps-1 col-6 position-relative">
                <ImageBox
                  imageUrl={page7_2}
                  boxWidth="100%"
                  boxHeight="auto"
                  borderRadiusBottomRight="20px"
                />
                <div className="position-absolute bottom-0 end-0">
                  <button className="camera_icon">
                    <IoCamera className="camera me-2" /> 10
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>









      <div className="d-block d-lg-none position-relative">
        <Carousel 
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          onChange={handleSlideChange}
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
            <img src={page7_1} alt='Page 1' className="carousel-image"/>
          </div>
          <div>
            <img src={page7_2} alt='Page 2' className="carousel-image"/>
          </div>
          <div>
            <img src={page7_3} alt='Page 3' className="carousel-image"/>
          </div>
          <div>
            <img src={page7_4} alt='Page 4' className="carousel-image"/>
          </div>
          <div>
            <img src={page7_5} alt='Page 5' className="carousel-image"/>
          </div>
          <div>
            <img src={page7_1} alt='Page 1' className="carousel-image"/>
          </div>
          <div>
            <img src={page7_2} alt='Page 2' className="carousel-image"/>
          </div>
          <div>
            <img src={page7_3} alt='Page 3' className="carousel-image"/>
          </div>
          <div>
            <img src={page7_4} alt='Page 4' className="carousel-image"/>
          </div>
          <div>
            <img src={page7_5} alt='Page 5' className="carousel-image"/>
          </div>
        </Carousel>
        <div className="position-absolute bottom-0 end-0">
                  <button className="camera_icon_mobile">
                    <IoCamera className="camera me-2" />{activeItem}/ 10
                  </button>
                </div>
      </div>
    </div>
  );
}
