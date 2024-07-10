import React, { useState } from "react";
import NavBarGuestInfoPage from "../layouts/NavBarGuestInfoPage";
import bulb from '../assets/bulb.svg';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CiCalendar } from "react-icons/ci";
import './GuestInfoPage.css';

export default function GuestInfoPage() {
  const [formData, setFormData] = useState({
    guest1: '',
    guest2: '',
    guest3: '',
    guest4: '',
    guest5: '',
    guest6: '',
    acceptedPrivacyPolicy: false,
  });

  const [dob1, setDob1] = useState(null);
  const [dob2, setDob2] = useState(null);
  const [dob3, setDob3] = useState(null);
  const [dob4, setDob4] = useState(null);
  const [dob5, setDob5] = useState(null);
  const [dob6, setDob6] = useState(null);
  const [validationMessage, setValidationMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });

    if (checked) {
      setValidationMessage('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.acceptedPrivacyPolicy) {
      console.log('Form submitted:', formData);
      
      for (let i = 1; i <= 6; i++) {
        console.log(`Guest ${i}: ${formData[`guest${i}`]}, Date of Birth: ${eval(`dob${i}`)?.toLocaleDateString() || 'N/A'}`);
      }

      setFormData({
        guest1: '',
        guest2: '',
        guest3: '',
        guest4: '',
        guest5: '',
        guest6: '',
        acceptedPrivacyPolicy: false,
      });
      setDob1(null);
      setDob2(null);
      setDob3(null);
      setDob4(null);
      setDob5(null);
      setDob6(null);
      setValidationMessage('');
    } else {
      setValidationMessage('You must accept the privacy policy to submit the form.');
    }
  };

  return (
    <div className="">
      <NavBarGuestInfoPage />
      <div className="py-5 guest_info_page_div_main">
        <div className="guest_info_main_div">
          <div className="d-flex justify-content-between align-items-center page_14_form_feild">
            <p className="mb-0">No. of nights</p>
            <div className="d-flex align-items-center justify-content-center page14_selected_date_range_text">
              <p className="m-0">19 Apr - 22 Apr</p>
              <p className="ms-3 mb-0 night">10 nights</p>
            </div>
          </div>
          <hr className="col-12 mb-4" />
          <div className="page_guest_info_heanding_div">
            <h2>Guest(s) info</h2>
            <p className="p1">We gather your data to facilitate a seamless check-in experience.</p>
            <div className='d-flex align-items-center'>
              <img src={bulb} className="img-fluid me-2" alt="Bulb" />
              <p className="mb-0 p2">Please fill in names as they appear on the ID used during check-in</p>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div className="d-block d-md-flex align-items-center justify-content-between guest_info_form_main_div col-12 py-4" key={index}>
                  <div className="col-12 col-md-6 me-4 mb-3 mb-md-0">
                    <label>Full name of guest {index} {index === 1 && <span> *</span>}</label>
                    <div className="d-flex align-items-center input_div">
                      <input
                        type="text"
                        className="form-control"
                        id={`guest${index}`}
                        name={`guest${index}`}
                        value={formData[`guest${index}`]}
                        onChange={handleChange}
                        required={index === 1}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label>Date of birth {index === 1 && <span> *</span>}</label>
                    <div className="d-flex position-relative input_div date-picker-container">
                      <DatePicker
                        selected={eval(`dob${index}`)}
                        onChange={(date) => eval(`setDob${index}(date)`)}
                        placeholderText="MM-DD-YYYY"
                        dateFormat="MM-dd-yyyy"
                        className="form-control date-picker-input"
                      />
                      <CiCalendar className="calender_icon position-absolute end-0 me-1" />
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="mb-3 ms-0 ms-md-1  mt-4 ">
                <div className="d-flex ">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="acceptedPrivacyPolicy"
                  name="acceptedPrivacyPolicy"
                  checked={formData.acceptedPrivacyPolicy}
                  onChange={handleChange}
                />
                <div className="d-flex align-items-center justify-content-center">
                <label className="form-check-label-page14 ms-1" htmlFor="acceptedPrivacyPolicy">
                I’m happy to get exclusive offers and updates from RUJ Sri Lanka. 
                I understand I can unsubscribe at any time
                </label>
                </div>
              </div>
              {validationMessage && (
                <div className="alert alert-danger" role="alert">
                  {validationMessage}
                </div>
              )}
              <button
                type="submit"
                className="Page14_form_btn col-12"
               
              >
                Complete reservation
              </button>
              </div>

<div className="page14_last_phra">
              <p>By continuing, you acknoweledge and agree to <span>RUJ’s Terms of Use and Privacy Policy</span></p></div>
            </form>

            
          </div>
        </div>
      </div>
    </div>
  );
}
