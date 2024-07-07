import { IoArrowBackSharp } from "react-icons/io5";
import { MdModeEdit } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa6";
import page14_1 from "../assets/page14_1.svg";
import users from "../assets/users.svg";
import mail from "../assets/mail.svg";
import check_circle from "../assets/check-circle.svg";
import { IoMdLock } from "react-icons/io";
import page1_1 from "../assets/page1_1.png";
import "react-datepicker/dist/react-datepicker.css";

import React, { useRef, useState } from "react";
import moment from "moment";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";

export default function Page14() {
  // const getTomorrowDate = () => {
  //   const today = new Date();
  //   const tomorrow = new Date(today);
  //   tomorrow.setDate(today.getDate() + 1);
  //   return tomorrow;
  // };

  const oneNightCos = 22.4;
  const tax = 32.54;

  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  const handleAdultsChange = (delta) => {
    setAdults((prev) => Math.max(0, prev + delta));
  };

  const handleChildrenChange = (delta) => {
    setChildren((prev) => Math.max(0, prev + delta));
  };

  const keyRef = useRef();
  const [dates, setDates] = useState({
    startDate: moment(),
    endDate: moment(),
    
  });
  
  const handleApply = (event, picker) => {
    setDates({
      startDate: picker.startDate,
      endDate: picker.endDate,
    });
  };
  const handleCancel = (event, picker) => {
    picker.element.val("");
  };

  

  return (
    <div className="py-5 page14_main_div">
      <div className="col-12">
        <div className="col-12 mb-3">
          <button className="page14_btn1">
            <IoArrowBackSharp className="btn_arrow" /> Back to property details
            page
          </button>
        </div>
        <div className="px-3 py-3 page14_box1 m-2">
          <p className="section-title">Check-in info</p>
          <div className="d-flex justify-content-between align-items-center page_14_form_feild">
            <p>No. of nights</p>
            <div className="d-flex align-items-center justify-content-center page14_selected_date_range_text">
              <p className="m-0">
                {dates.startDate.format("DD MMM")} -{" "}
                {dates.endDate.format("DD MMM")}
              </p>
              <p className="ms-3 mb-0 night">
                {Math.round(
                  (dates.endDate - dates.startDate) / (1000 * 60 * 60 * 24)
                )}{" "}
                nights
              </p>
              <div className="ms-2">
                <DateRangePicker
                  ref={keyRef}
                  onApply={handleApply}
                  onCancel={handleCancel}
                  initialSettings={{
                    
                    opens: "left",
                    showDropdowns: false,
                    showCustomRangeLabel: false,
                    showWeekNumbers: false,
                    autoUpdateInput: false,
                    firstRange: false,
                  }}
                >
                  <div className="user_round_box ms-2">
                    <MdModeEdit />
                  </div>
                </DateRangePicker>
              </div>
            </div>
          </div>
          <hr className="col-12" />
          <div className="d-flex justify-content-between align-items-center page_14_form_feild">
            <p>No. of Adults</p>
            <div className="d-flex align-items-center">
              <div
                className="user_round_box ms-2"
                onClick={() => handleAdultsChange(-1)}
              >
                <FaMinus />
              </div>
              <p className="count">{adults}</p>
              <div
                className="user_round_box ms-2"
                onClick={() => handleAdultsChange(1)}
              >
                <FaPlus />
              </div>
            </div>
          </div>
          <hr className="col-12" />
          <div className="d-flex justify-content-between align-items-center page_14_form_feild">
            <p>No. of Children</p>
            <div className="d-flex align-items-center">
              <div
                className="user_round_box ms-2"
                onClick={() => handleChildrenChange(-1)}
              >
                <FaMinus />
              </div>
              <p className="count">{children}</p>
              <div
                className="user_round_box ms-2"
                onClick={() => handleChildrenChange(1)}
              >
                <FaPlus />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-block d-md-flex">
        <div className="col-12 col-md-6 py-3 py-md-0">
          <div className="px-3 py-3 page14_box1 m-2">
            <div className="col-6 d-flex align-items-center">
              <img src={page14_1} className="img-fluid me-2 " />
              <p className="mb-0">Colombo 07, Sri Lanka</p>
            </div>
            <p className="section-title">Serene Heights Colombo</p>

            <img src={page1_1} className="img-fluid me-2 rounded" />
            <a href="#">See apartment details</a>

            <div className="col-10 d-flex align-items-center">
              <img src={users} className="img-fluid me-2 " />
              <p className="mb-0">Max 6 guests</p>
            </div>
            <div className="col-10 d-flex align-items-center">
              <img src={mail} className="img-fluid me-2 " />
              <p className="mb-0">Instant email confirmation</p>
            </div>
            <div className="col-10 d-flex align-items-center">
              <img src={check_circle} className="img-fluid me-2 " />
              <p className="mb-0">
                Free cancellation until 05/29/2024, 00:00 (GMT +8.00)
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 py-3 py-md-0">
          <div className="px-3 py-3 page14_box1 m-2 ">
            <div className="d-flex justify-content-between">
              <p>
                {Math.round(
                  (dates.endDate - dates.startDate) / (1000 * 60 * 60 * 24)
                )}{" "}
                nights
              </p>
              <p>
                £
                {(
                  Math.round(
                    (dates.endDate - dates.startDate) / (1000 * 60 * 60 * 24)
                  ) * oneNightCos
                ).toFixed(2)}
              </p>
            </div>
            <hr className="col-12" />
            <div className="d-flex justify-content-between">
              <p>Taxes & fees</p>
              <p>£ {tax}</p>
            </div>

            <hr className="col-12" />

            <div className="d-flex justify-content-between">
              <p className="payement_ammount_p">Payment amount</p>
              <p className="amount">
                £
                {(
                  Math.round(
                    (dates.endDate - dates.startDate) / (1000 * 60 * 60 * 24)
                  ) *
                    oneNightCos +
                  tax
                ).toFixed(2)}
              </p>
            </div>
          </div>
          <div className="px-2 pt-5 pb-2 pt-md-0 pb-md-0">
            <button className="col-12 page2_btn">
              <IoMdLock /> Continue to Pay
            </button>
          </div>
          <div className="px-4">
            <p>
              Cancellation policy may require guests to give notice regarding
              their booking at least fourteen days in advance of their booking
              start date. Our Account Managers will also confirm, and can
              reconfirm, any terms and conditions, including the relevant
              cancellation policy to guests throughout the reservation stage.
              Guests will also be made aware of how they can cancel a
              reservation
            </p>
          </div>

          <div className="px-4">
            <p>Read our <a href="">RUJ’s cancellation policy</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
