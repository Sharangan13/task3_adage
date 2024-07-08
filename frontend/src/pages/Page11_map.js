import React from "react";
import map from "../assets/map1.png";
import map_mobile from "../assets/map_mbile1.png";
import location from "../assets/location.svg";


export default function Page11_map() {
  const locationUrl =
    "https://www.google.com/maps/place/123+Serenity+Avenue,+Colombo+05,+Sri+Lanka/@6.9271,79.8612,17z";

  return (
    <div className="col-12 map py-5" id="page11_map">
      <div className="px-2 px-md-5 map_div">
      <div className="_line">
      <h1>Where you’ll be</h1>
      </div>
      <p>123 Serenity Avenue, Colombo 05, Sri Lanka</p>
      </div>
      

      <div className="position-relative col-12 px-0 px-md-5">
        <img src={map} className="img-fluid col-12 d-none d-md-block" alt="Map" />
        <img src={map_mobile} className="img-fluid col-12 d-block d-md-none" alt="Map" />
<a href={locationUrl} target="_blank" rel="noopener noreferrer">
        <div className="position-absolute top-50 start-50 translate-middle ">
        <div>
          <div className='location_text'>
            <a  href={locationUrl}target="_blank" rel="noopener noreferrer">ABCD Building</a>
          </div>
        </div>
        </div>

        <div className="position-absolute top-50 start-50 translate-middle">
        <a href={locationUrl} target="_blank" rel="noopener noreferrer">
          <div className="location_div">
            <img src={location} className="img-fluid" alt="Location Icon" />
          </div>
          </a>
        </div>
        </a> 
        
       
      </div>
    </div>
  );
}
