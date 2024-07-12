import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import page7_1 from "../assets/page7_1.png";
import page7_2 from "../assets/page7_2.png";
import page7_3 from "../assets/page7_3.png";
import page7_4 from "../assets/page7_4.png";
import page7_5 from "../assets/page7_5.png";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import { MdArrowBackIosNew, MdArrowForwardIos, MdCancel } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

import './ImageCarouselPage.css';

export default function ImageCarouselPage() {
  const [activeItem, setActiveItem] = useState(1);
  const navigate = useNavigate();

  const handleSlideChange = (index) => {
    setActiveItem(index + 1);
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="bg-black image_carousel_page_main_div ">    
      <div className="position-relative">

      <div className="cancell_btn_div d-flex">  <p className="cancel_button ms-1 ms-md-5 pt-0 pt-md-1" onClick={handleCancel}>
          <RxCross2 className="close_icon"/> Close
        </p></div>

        <Carousel 
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          swipeable={true} 
          onChange={handleSlideChange}
          renderArrowPrev={(onClickHandler, hasPrev, label) => (
            hasPrev && (
              <button type="button" onClick={onClickHandler} className="carousel_arrow carousel_arrow_prev">
                <MdArrowBackIosNew />
              </button>
            )
          )}
          renderArrowNext={(onClickHandler, hasNext, label) => (
            hasNext && (
              <button type="button" onClick={onClickHandler} className="carousel_arrow carousel_arrow_next">
                <MdArrowForwardIos />
              </button>
            )
          )}
        >
          {[page7_1, page7_2, page7_3, page7_4, page7_5, page7_1, page7_2, page7_3, page7_4, page7_5].map((src, idx) => (
            <div key={idx} className="image_carousel_page">
              <img src={src} alt={`Page ${idx + 1}`} className="carousel_page_image"/>
            </div>
          ))}
        </Carousel>
        <div className="position-absolute top-0 start-50 camera_icon_mobile_page">
          {activeItem} / 10
        </div>
      </div>
    </div>
  );
}
