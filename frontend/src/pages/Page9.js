import React from "react";
import train from "../assets/train.svg";
import plane from "../assets/plane.svg";

export default function Page9() {
  return (
    <div className="px-3 px-md-5 py-5 mt-5">
      <div className="_line">
        <h1>Explore Colombo</h1>
      </div>
<div className="d-none d-md-block">
      <div className="row">
        <div className="col-3">
          <h3 className="page_9_heading_sub">Transport</h3>
        </div>

        <div className="col-12 col-md-9">
          <div>
            <div className="col-12 d-flex">
              <div className="d-flex justify-content-between align-items-top mb-2 col-md-5 col-lg-4 px-3">
                <div className="d-flex align-items-top">
                <div className="pt-1"><img src={train} className="img-fluid me-2" alt="Train" /></div> 
                  <p className="mb-0 col-10 page9_p_place">Bambalapitiya Railway Station</p>
                </div>
                <p className="page9_p_distance">1.1km</p>
              </div>
              <div className="d-flex justify-content-between mb-2 col-md-5 col-lg-4 px-3">
                <div className="d-flex align-items-top">
                <div className="pt-1"><img src={plane} className="img-fluid me-2" alt="Train" /></div> 
                  <p className="mb-0 col-10 page9_p_place">Bambalapitiya Railway Station</p>
                </div>
                <p className="page9_p_distance">1.4km</p>
              </div>
            </div>
          </div>
          <hr className="col-8 mx-3" />
        </div>
      </div>

      <div className="row py-5">
        <div className="col-md-3">
          <h3 className="page_9_heading_sub">Attractions</h3>
        </div>
        <div className="col-9">
          <div>
            <div className="col-12 d-flex">
              <div className="d-flex justify-content-between mb-2 col-4 px-3">
                <p className="col-10 page9_p_place">Sri Lanka Planetarium</p>
                <p className="page9_p_distance">1.1km</p>
              </div>
              <div className="d-flex justify-content-between mb-2 col-4 px-3">
                <p className="col-10 page9_p_place">Chabad of Sri Lanka</p>
                <p className="page9_p_distance">1.4km</p>
              </div>
              <div className="d-flex justify-content-between mb-2 col-4 px-3">
                <p className="col-10 page9_p_place">Tonic Spa at Mövenpick Colombo</p>
                <p className="page9_p_distance">1.4km</p>
              </div>
            </div>
          </div>
          <hr className="col-12 mx-3" />

          <div>
            <div className="col-12 d-flex">
              <div className="d-flex justify-content-between mb-2 col-4 px-3">
                <p className="col-10 page9_p_place">Sri Lanka National Museum</p>
                <p className="page9_p_distance">1.1km</p>
              </div>
              <div className="d-flex justify-content-between mb-2 col-4 px-3">
                <p className="col-10 page9_p_place">Independence Square</p>
                <p className="page9_p_distance">1.4km</p>
              </div>
              <div className="d-flex justify-content-between mb-2 col-4 px-3">
                <p className="col-10 page9_p_place">National Art Gallery</p>
                <p className="page9_p_distance">1.4km</p>
              </div>
            </div>
          </div>

          <hr className="col-12 mx-3" />
          <div>
            <div className="col-12 d-flex">
              <div className="d-flex justify-content-between mb-2 col-4 px-3">
                <p className="col-10 page9_p_place">Independence Memorial Museum</p>
                <p className="page9_p_distance">1.1km</p>
              </div>
              <div className="d-flex justify-content-between mb-2 col-4 px-3">
                <p className="col-10 page9_p_place">Nelum Pokuna Mahinda Rajapaksa Theatre</p>
                <p className="page9_p_distance">1.4km</p>
              </div>
              <div className="d-flex justify-content-between mb-2 col-4 px-3">
                <p className="col-10 page9_p_place">Arcade Independence Square</p>
                <p className="page9_p_distance">1.4km</p>
              </div>
            </div>
          </div>

          <hr className="col-12 mx-3" />
          <div>
            <div className="col-12 d-flex">
              <div className="d-flex justify-content-between mb-2 col-4 px-3">
                <p className="col-10 page9_p_place">Sinhalese Sports Club</p>
                <p className="page9_p_distance">1.1km</p>
              </div>
            </div>
          </div>
 
          <hr className="col-4 mx-3" />
        </div>
      </div>
      </div>
      <div className="d-block d-md-none">
      <div className="row mb-4">
        <div className="col-12 col-md-3">
          <h3>Transport</h3>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-12  d-flex justify-content-between align-items-top mb-2">
              <div className="d-flex align-items-top pe-2 ">
               <div className="align-items-center pt-1 place_div_img"><img src={train} className="img-fluid me-2" alt="Train" /></div> 
                <p className="mb-0 page9_p_place">Bambalapitiya Railway Station</p>
              </div>
              <p className="page9_p_distance ">700m</p>
            </div>
            <div className="col-12  d-flex justify-content-between align-items-bottom mb-2">
              <div className="d-flex align-items-top pe-2">
              <div className="align-items-center pt-1 place_div_img"> <img src={plane} className="img-fluid me-2 align-items-top" alt="Plane" /></div> 
                <p className="mb-0 page9_p_place ">Colombo Ratmalana Airport</p>
              </div>
              <p className="page9_p_distance">9.4km</p>
            </div>
          </div>
          <hr />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h3>Attractions</h3>
        </div>
        <div className="col-12">
          <div className="row">
            {[
              ["Sri Lanka Planetarium", "1.1km"],
              ["Chabad of Sri Lanka", "1.4km"],
              ["Tonic Spa at Mövenpick Colombo", "1.4km"],
              ["Sri Lanka National Museum", "1.1km"],
              ["Independence Square", "1.4km"],
              ["National Art Gallery", "1.4km"],
              ["Independence Memorial Museum", "1.1km"],
              ["Nelum Pokuna Mahinda Rajapaksa Theatre", "1.4km"],
              ["Arcade Independence Square", "1.4km"],
              ["Sinhalese Sports Club", "1.1km"]
            ].map(([name, distance], index) => (
              <div key={index} className="col-12 d-flex justify-content-between align-items-top mb-4">
                <p className="mb-0 page9_p_place pe-2">{name}</p>
                <p className="mb-0 page9_p_distance">{distance}</p>
              </div>
              
            ))}
            
          </div>
        </div>
      
      </div>

      </div>
      <hr className="d-block d-md-none"/>
    </div>
  );
}
