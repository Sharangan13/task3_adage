import React from "react";
import page10_1 from "../assets/page10_1.svg";
import page10_2 from "../assets/page10_2.svg";
import page10_3 from "../assets/page10_3.svg";
import page10_4 from "../assets/page10_4.svg";
import page10_5 from "../assets/page10_5.svg";
import page10_6 from "../assets/page10_6.svg";
import page10_7 from "../assets/page10_7.svg";

export default function Middlebar() {
  return (
    <div className="middlebar">
      <div className="horizontal-scroll-container col-12">
        <div className="middlebar_contant">
          <div className=" px-1 py-1 me-0 me-md-5">
            <ui className="d-flex list-unstyled col-12 justify-content-between">
              <li>
                <div className="col-md-4 d-flex align-items-center">
                  <img src={page10_1} className="img-fluid me-2" />
                  <p className="mb-0">24/7 Security</p>
                </div>
              </li>
            </ui>
          </div>
        </div>
        <div className="middlebar_contant ">
          <div className=" px-1 py-1 me-0 me-md-5">
            <ui className="d-flex list-unstyled col-12 justify-content-between">
              <li>
                <div className=" d-flex align-items-center">
                  <img src={page10_2} className="img-fluid me-2" />
                  <p className="mb-0">Surveillance</p>
                </div>
              </li>
            </ui>
          </div>
        </div>
        <div className="middlebar_contant">
          <div className=" px-1 py-1 me-0 me-md-5">
            <ui className="d-flex list-unstyled col-12 justify-content-between">
              <li>
                <div className="col-md-4 d-flex align-items-center">
                  <img src={page10_3} className="img-fluid me-2" />
                  <p className="mb-0">Fully Equipped Kitchen</p>
                </div>{" "}
              </li>
            </ui>
          </div>
        </div>
        <div className="middlebar_contant">
          <div className=" px-1 py-1 me-0 me-md-5">
            <ui className="d-flex list-unstyled col-12 justify-content-between">
              <li>
                <div className="col-md-4 d-flex align-items-center">
                  <img src={page10_4} className="img-fluid me-2" />
                  <p className="mb-0">High Speed Internet</p>
                </div>
              </li>
            </ui>
          </div>
        </div>
        <div className="middlebar_contant">
          <div className=" px-1 py-1 me-0 me-md-5">
            <ui className="d-flex list-unstyled col-12 justify-content-between">
              <li>
                <div className="col-md-4 d-flex align-items-center">
                  <img src={page10_5} className="img-fluid me-2" />
                  <p className="mb-0">Coffee Machine</p>
                </div>
              </li>
            </ui>
          </div>
        </div>
        <div className="middlebar_contant">
          <div className=" px-1 py-1 me-0 me-md-5">
            <ui className="d-flex list-unstyled col-12 justify-content-between">
              <li>
                <div className="col-md-4 d-flex align-items-center">
                  <img src={page10_6} className="img-fluid me-2" />
                  <p className="mb-0">Washing Machine</p>
                </div>
              </li>
            </ui>
          </div>
        </div>
        <div className="middlebar_contant">
          <div className=" px-1 py-1 me-0 me-md-5">
            <ui className="d-flex list-unstyled col-12 justify-content-between">
              <li>
                <div className="col-md-4 d-flex align-items-center">
                  <img src={page10_7} className="img-fluid me-2" />
                  <p className="mb-0">Iron Coffee Machine</p>
                </div>
              </li>
            </ui>
          </div>
        </div>
      </div>
    </div>
  );
}
