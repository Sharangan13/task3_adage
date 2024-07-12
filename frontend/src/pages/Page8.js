import React, { useCallback, useState } from "react";
import { TiStarFullOutline } from "react-icons/ti";

import bath from "../assets/bath.svg";
import sleep from "../assets/sleep.svg";
import { MdArrowForwardIos } from "react-icons/md";
import page10_1 from "../assets/page10_1.svg";
import page10_2 from "../assets/page10_2.svg";
import page10_3 from "../assets/page10_3.svg";
import page10_4 from "../assets/page10_4.svg";
import page10_5 from "../assets/page10_5.svg";
import page10_6 from "../assets/page10_6.svg";
import train from '../assets/train.svg';
import plane from '../assets/plane.svg';
import map_pin from '../assets/map_pin.svg';
import { Modal, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function Page8() {
  const truncateText = useCallback((text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  }, []);

  const [showMore, setShowMore] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const phra = `Immerse yourself in the breathtaking beauty of Colombo's coastline with our Oceanfront Oasis. This spacious 3-bedroom apartment offers stunning panoramic views of the ocean, modern amenities, and access to exclusive facilities. Whether you're seeking relaxation or adventure, this serene retreat is perfect for your stay in Colombo.`;

  return (
    <div>
      <div className="d-flex justify-content-between px-3 px-md-5 pb-5">
        <div className="px-0 px-md-4 col-12 col-md-6 page8_top_content justify-content-between">
          <h1>Serene Heights Colombo</h1>
          <div className="star_div d-flex align-items-center">
            <div className="me-1">
            <TiStarFullOutline className="star" />
            <TiStarFullOutline className="star" />
            <TiStarFullOutline className="star" />
            <TiStarFullOutline className="star" />
            <TiStarFullOutline className="star" /> 
            </div>
          
          <div className="start_rating">
            <p>4.9/5 (5)</p>
          </div>
          </div>
          <div className="d-flex my-2">
            <div className="me-4 icon_text">
              <img
                src={sleep}
                alt="Bedrooms"
                width="35"
                height="30"
                className="d-inline-block align-middle "
              />{" "}
              Bedrooms: 5
            </div>
            <div className="icon_text">
              <img
                src={bath}
                alt="Bathrooms"
                width="35"
                height="30"
                className="d-inline-block align-middle "
              />{" "}
              Bathrooms: 5
            </div>
          </div>
          <hr />
          <p className="show-more" onClick={toggleShowMore}>
            {showMore ? truncateText(phra, 30) : phra}
          </p>

          <div onClick={toggleShowMore} className="p-0 page8_btn ">
           <u>{showMore ? "Show more" : "Show less"} <MdArrowForwardIos /></u> 
          </div>
        </div>

        <div className="col-12 col-md-6 d-flex flex-column align-items-end page8_side_content text-end d-none d-md-block">
          <p className="p1">£180</p>
          <p className="p2">£200.44</p>
          <p className="p3">Incl. taxes per night</p>
         <Link to="reservation"><button className="Reserve_btn col-4">Reserve</button></Link> 
        </div>
      </div>

  <div className="row mx-0 mx-md-5 pt-0 pt-md-5">
  <div className="col-12 d-block d-md-flex">
    <div className="col-12 col-md-4 d-flex align-items-stretch">
      <div className="px-3 py-3 page8_box me-0 me-md-2 w-100">
        <div className="d-flex justify-content-between">
          <div className="page8_box_content">
            <p className="page8_p1">Great!</p>
           <ScrollLink to="page12"><a><u>5 reviews</u></a></ScrollLink> 
          </div>
          <div className="page8_rating_content ">
            <p className="page8_rate_p1">4.9<span>/5</span></p>
          </div>
        </div>
        <div>
          <p className="page8_p2">Av**sh</p>
            <p className="page8_p3">
              Very comfortable beds and pillows, large rooms in a good area
              of colombo
            </p>
          </div>
      </div>
    </div>
    <div className="col-12 col-md-4 d-flex align-items-stretch">
      <div className="px-3 py-3 page8_box page8_box2 me-0 me-md-2 w-100">
        <div>
          <div className="d-block d-md-flex py-0 py-md-2">
            <div className="col-12 col-md-6 d-flex align-items-center py-2 py-md-0">
              <img src={page10_1} className="img-fluid me-2" />
              <p className="mb-0">24/7 Security</p>
            </div>
            <div className="col-12 col-md-6 d-flex align-items-center py-2 py-md-0">
              <img src={page10_2} className="img-fluid me-2" />
              <p className="mb-0">Surveillance</p>
            </div>
          </div>
          <div className="d-block d-md-flex py-0 py-md-2">
            <div className="col-12 col-md-6 d-flex align-items-center py-2 py-md-0">
              <img src={page10_3} className="img-fluid me-2" />
              <p className="mb-0">Fully Equipped Kitchen</p>
            </div>
            <div className="col-12 col-md-6 d-flex align-items-center py-2 py-md-0">
              <img src={page10_4} className="img-fluid me-2" />
              <p className="mb-0">High Speed Internet</p>
            </div>
          </div>
          <div className="d-block d-md-flex py-0 py-md-2">
            <div className="col-12 col-md-6 d-flex align-items-center py-2 py-md-0">
              <img src={page10_5} className="img-fluid me-2" />
              <p className="mb-0">Coffee Machine</p>
            </div>
            <div className="col-12 col-md-6 d-flex align-items-center py-2 py-md-0">
              <img src={page10_6} className="img-fluid me-2" />
              <p className="mb-0">Washing Machine</p>
            </div>
          </div>
     <ScrollLink to="page10"> <div className="showmore_a_tag_page8"> <a href="#">show more (10+)</a></div></ScrollLink>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-4 d-flex align-items-stretch">
      <div className="px-3 py-3 page8_box  me-0 me-md-2 w-100">
        <div>
          <p className="page8_box_3_p1">433, Goal Road</p>
          <div className="col-12 d-flex align-items-center py-2 page8_box_3_div ">
            <img src={train} className="img-fluid me-2" />
            <p className="mb-0 page8_box3_phra">Bambalapitiya Railway Station, 700m</p>
          </div>
          <div className="col-12 d-flex align-items-center py-2 page8_box_3_div ">
            <img src={plane} className="img-fluid me-2" />
            <p className="mb-0 page8_box3_phra">Colombo Ratmalana Airport, 9.4km</p>
          </div>
          <div className="col-12 d-flex align-items-center py-2 page8_box_3_div_map_icon ">
            <img src={map_pin} className="img-fluid me-2" />
            <ScrollLink to="page11_map"><a target="_blank" rel="noopener noreferrer"><u>Show map</u></a></ScrollLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>




      {/* <Modal show={modalShow} onHide={() => setModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>What’s available in the apartment  </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex col-12">
            <div className="col-6 d-flex align-items-center py-2">
              <img src={page10_1} className="img-fluid me-2" />
              <p className="mb-0">24/7 Security</p>
            </div>
            <div className="col-6 d-flex align-items-center py-2">
              <img src={page10_2} className="img-fluid me-2" />
              <p className="mb-0">Surveillance</p>
            </div>
          </div>
          <div className="d-flex">
            <div className="col-6 d-flex align-items-center py-2">
              <img src={page10_3} className="img-fluid me-2" />
              <p className="mb-0">Fully Equipped Kitchen</p>
            </div>
            <div className="col-6 d-flex align-items-center py-2">
              <img src={page10_4} className="img-fluid me-2" />
              <p className="mb-0">High Speed Internet</p>
            </div>
          </div>
          <div className="d-flex">
            <div className="col-6 d-flex align-items-center py-2">
              <img src={page10_5} className="img-fluid me-2" />
              <p className="mb-0">Coffee Machine</p>
            </div>
            <div className="col-6 d-flex align-items-center py-2">
              <img src={page10_6} className="img-fluid me-2" />
              <p className="mb-0">Washing Machine</p>
            </div>
          </div>

          <div className="d-flex">
          <div className='col-6 d-flex align-items-center py-2'>
          <img src={page10_7} className="img-fluid me-2" />
          <p className="mb-0">Iron Coffee Machine</p>
        </div>
        <div className='col-6 d-flex align-items-center py-2'>
          <img src={page10_8} className="img-fluid me-2" />
          <p className="mb-0">Fridge</p>
        </div>
          </div>
          <div className="d-flex">
          <div className='col-6 d-flex align-items-center py-2'>
          <img src={page10_9} className="img-fluid me-2" />
          <p className="mb-0">Premium Toiletries</p>
        </div>


            <div className='col-6 d-flex align-items-center py-2'>
          <img src={page10_10} className="img-fluid me-2" />
          <p className="mb-0">Bread Toaster</p>
        </div>




          </div>
          <div className="d-flex">
            <div className='col-6 d-flex align-items-center py-2'>
          <img src={page10_11} className="img-fluid me-2" />
          <p className="mb-0">Microwave</p>
        </div>
        <div className='col-6 d-flex align-items-center py-2'>
          <img src={page10_12} className="img-fluid me-2" />
          <p className="mb-0">Juice Maker</p>
        </div>
          </div>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}


    </div>
  );
}
