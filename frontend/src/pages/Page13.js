import React, { useState } from "react";
import { FaRegClock } from "react-icons/fa6";

export default function Page13() {
  return (
    <div className="col-12 px-5 py-5 d-none d-md-block">
      <div className="_line">
        <h1>Property policies</h1>
      </div>

      <div>
        <div className="row page13_div">
          <div className="col-3">
            <h4>Cancellation policy </h4>
          </div>

          <div className="col-9">
            <div className="px-3 col-8">
              <p>
                Cancellation policy may require guests to give notice regarding
                their booking at least fourteen days in advance of their booking
                start date. Our Account Managers will also confirm, and can
                reconfirm, any terms and conditions, including the relevant
                cancellation policy to guests throughout the reservation stage.
                Guests will also be made aware of how they can cancel a
                reservation{" "}
              </p>
            </div>
            <hr className="col-8 mx-3" />
          </div>
        </div>

        <div className="row page13_div">
          <div className="col-3">
            <h4>Check-in and check-out times</h4>
          </div>

          <div className="col-9">
            <div className="d-flex px-3">
              <div className="me-4">
                <p className="green_color">
                  <FaRegClock /> Check-in time 14:00
                </p>
              </div>
              <div className="ms-4">
                <p className="green_color">
                  <FaRegClock /> Check-out time 12:00
                </p>
              </div>
            </div>
            <div className="px-3 col-8">
              <p>
                Check-in time is 14.00 and check-out time is 12.00. Early
                check-in or late check-out may be accommodated based on
                availability; please contact us in advance to inquire.{" "}
              </p>
            </div>
            <hr className="col-8 mx-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
