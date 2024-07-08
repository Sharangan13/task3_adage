import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";

export default function BackButton() {
  return (
    <div>
      <div className="d-none d-lg-block  mb-3">
       <Link to="/"> <button className="page7_btn1">
          <IoArrowBackSharp className="btn_arrow" /> Back to Homepage
        </button></Link>
      </div>
    </div>
  );
}
