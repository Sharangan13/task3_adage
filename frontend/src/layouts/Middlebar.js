import React from "react";
import page10_1 from "../assets/page10_1.svg";
import page10_2 from "../assets/page10_2.svg";
import page10_3 from "../assets/page10_3.svg";
import page10_4 from "../assets/page10_4.svg";
import page10_5 from "../assets/page10_5.svg";
import page10_6 from "../assets/page10_6.svg";
import page10_7 from "../assets/page10_7.svg";

const items = [
  { src: page10_1, label: "24/7 Security" },
  { src: page10_2, label: "Surveillance" },
  { src: page10_3, label: "Fully Equipped Kitchen" },
  { src: page10_4, label: "High Speed Internet" },
  { src: page10_5, label: "Coffee Machine" },
  { src: page10_6, label: "Washing Machine" },
  { src: page10_7, label: "Iron Coffee Machine" },
];

export default function Middlebar() {
  return (
    <div className="middlebar">
      <div className="horizontal-scroll-container">
        {items.concat(items).map((item, index) => (
          <div key={index} className="middlebar_contant px-1 py-1 me-2 me-md-5 ">
            <ul className="d-flex list-unstyled col-12 justify-content-between">
              <li>
                <div className="col-md-4 d-flex align-items-center justify-conent-center">
                  <img src={item.src} className="img-fluid me-2" />
                  <p className="mb-0">{item.label}</p>
                </div>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
