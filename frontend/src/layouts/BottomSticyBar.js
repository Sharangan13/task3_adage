import React from 'react';
import { Link } from 'react-router-dom';




export default function BottomSticyBar() {
  return (
    <div className="col-12  d-flex  justify-content-between align-items-center page8_side_content sticky-bottom-md d-block d-md-none sticy_boX_style">
       <div className="">
          <p className="p1">£180</p>
          <p className="p2">£200.44</p>
          <p className="p3">Incl. taxes per night</p>
          </div>
         <Link to="reservation"><div className="Reserve_btn_sticky"><button className="col-12">Reserve</button></div></Link> 
        </div>
  );
}
