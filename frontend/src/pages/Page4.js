import React from "react";
import page4_1 from "../assets/page4_1.png";
import page4_2 from "../assets/page4_2.png";
import page4_3 from "../assets/page4_3.png";
import Box_1 from "./page4_box/Box_1";
import Box_2 from "./page4_box/Box_2";
import Box_3 from "./page4_box/Box_3";

export default function Page4() {
  return (
    <div className="col-12  page4_main_div" id="explore_page">
      <div className="pb-5 position-relative">
        <heading className="col-12 d-flex align-items-center page2-container mb-2 mb-md-5 ">
          <div className="page2_p px-2 px-md-0">
            <p>Interesting facts <br className="d-none d-md-block"/> about <span>Colombo</span></p>
            <p>
             
            </p>
          </div>
          <div className="flex-grow-1">
            <hr className="orange-line" />
          </div>
        </heading>
        </div>
        <div className="d-none d-lg-block">
        <div className="col-12 d-flex position-relative">
          <div className="col-7 box1_img_div">
            <img src={page4_1} alt="image" className="img-fluid" />
          </div>

          <div className="col-6 position-absolute bottom-0 start-50  translate-middle-x box_1_div">
            <Box_1 />
          </div>
        
      </div>


      <div className="py-5 my-5 position-relative">
      
        <div className="col-12 d-flex ">

        <div className="col-6 position-absolute bottom-0 end-50  translate-middle-x translate-middle-y box_1_div">
            <Box_3/>
          </div>

          <div className="col-7 d-flex justify-content-end box2_img_div">
            <img src={page4_2} alt="image" className="img-fluid" />
          </div>
  
        </div>
      </div>

      <div className="py-5 position-relative">
      
        <div className="col-12 d-flex ">
          <div className="col-7 box1_img_div">
            <img src={page4_3} alt="image" className="img-fluid" />
          </div>

          <div className="col-6 position-absolute bottom-0 start-50  translate-middle-x box_1_div">
            <Box_2/>
          </div>
        </div>

        </div>
      </div>

      <div className="d-block d-lg-none position-relative">
        <div className="col-12 d-flex position-relative mobile_page4_box">
          <div className="col-12 box1_img_div">
            <img src={page4_1} alt="image" className="img-fluid" />
          </div>

          <div className="col-12 position-absolute px-2 bottom-0  ">
            <Box_1 />
          </div>
        
      </div>


      <div className="col-12 d-flex  position-relative mobile_page4_box ">
          <div className="col-12 box1_img_div">
            <img src={page4_2} alt="image" className="img-fluid" />
          </div>

          <div className="col-12 position-absolute  bottom-0  px-2">
            <Box_3 />
          </div>
        
      </div>

      <div className="col-12 d-flex mobile_page4_box">
          <div className="col-12 box1_img_div">
            <img src={page4_3} alt="image" className="img-fluid" />
          </div>

          <div className="col-12 position-absolute bottom-0  px-2">
            <Box_2 />
          </div>
        
      </div>
      </div>
    </div>
  );
}
