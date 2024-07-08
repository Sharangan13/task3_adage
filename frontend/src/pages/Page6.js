import React, { useState } from "react";
import whatsapp from '../assets/whatsapp.svg';
import email from '../assets/email.svg';
import emaill from '../assets/emaill.png';
import Footerbar from "../layouts/Footerbar";

export default function Page6() {

    const [formData, setFormData] = useState({
        yourname: '',
        emailAddress: '',
        telephone: '',
        message: '',
        acceptedPrivacyPolicy: false
    });

    const [validationMessage, setValidationMessage] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
       
        if (name === 'acceptedPrivacyPolicy' && checked) {
            setValidationMessage('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.acceptedPrivacyPolicy) {
            console.log('Form submitted:', formData);
           
            setFormData({
                yourname: '',
                emailAddress: '',
                telephone: '',
                message: '',
                acceptedPrivacyPolicy: false
            });
            setValidationMessage('');
        } else {
            setValidationMessage('You must accept the privacy policy to submit the form.');
        }
    };

    return (
        <div className="col-12 py-5 position-relative page6_main_div">
            <div className="d-none d-lg-block">
            <div className="col-11 page6_sub_div bg-white">
                <div className="col-5 mx-5 page6_contatnt">
                    <h1>Reach Out for Personalized Assistance</h1>
                    <p>Ready to experience luxury living in Colombo? Fill out the form below to inquire about availability, rates, and special offers. Our team is here to assist you in finding the perfect serviced apartment tailored to your needs. Start your journey with RUJ Sri Lanka now!</p>

                    <div className="whatsapp-number-form-footer py-2">
                    <a href="tel:+94112345678">   <img src={whatsapp} alt="WhatsApp Logo" width="35" height="30" className="d-inline-block align-center" /></a>
                    <a href="tel:+94112345678">   <span className="ms-2">+94 11 2345678</span></a>
                    </div>

                    <div className="email-address pt-1 pb-5">
                        <img src={email} alt="WhatsApp Logo" width="35" height="30" />
                        <span className="ms-2">contact@rujsrilanka.lk</span>
                    </div>
                </div>
            </div>

            <div className="page6_footer"><Footerbar /></div>

            <div className="col-5 form_div bg-white py-5 px-5 position-absolute top-0 start-50">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 form_data">
                        <input
                            type="text"
                            className="form-control"
                            id="yourname"
                            name="yourname"
                            placeholder="Your Name"
                            value={formData.yourname}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3 form_data">
                        <input
                            type="email"
                            className="form-control"
                            id="emailAddress"
                            name="emailAddress"
                            placeholder="Email Address"
                            value={formData.emailAddress}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3 form_data">
                        <input
                            type="tel"
                            className="form-control"
                            id="telephone"
                            name="telephone"
                            placeholder="Telephone"
                            value={formData.telephone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3 form_data">
                        <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            value={formData.message}
                            placeholder="Message"
                            onChange={handleChange}
                            rows="8"
                            required
                        ></textarea>
                    </div>
                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="acceptedPrivacyPolicy"
                            name="acceptedPrivacyPolicy"
                            checked={formData.acceptedPrivacyPolicy}
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="acceptedPrivacyPolicy">
                            I have read and accept the <a href="#">privacy policy.</a>
                        </label>
                    </div>
                    {validationMessage && (
                        <div className="alert alert-danger" role="alert">
                            {validationMessage}
                        </div>
                    )}
                    <button
                        type="submit"
                        className="form_btn"
                        disabled={!formData.acceptedPrivacyPolicy}
                    >
                        Submit Message
                    </button>
                </form>
            </div>
            </div>




            <div className="d-block d-lg-none col-12">
            <div className="col-12">
                <div className="col-12 px-3 page6_contatnt_mobile">
                    <h1>Reach Out for Personalized Assistance</h1>
                    <p>Ready to experience luxury living in Colombo? Fill out the form below to inquire about availability, rates, and special offers. Our team is here to assist you in finding the perfect serviced apartment tailored to your needs. Start your journey with RUJ Sri Lanka now!</p>

                    <div className="whatsapp_number_footer py-2">
                    <a href="tel:+94112345678"> <img src={whatsapp} alt="WhatsApp Logo" width="24" height="24" className="d-inline-block align-center img-fluid" /></a>
                        
                    <a href="tel:+94112345678">  <span>+94 11 2345678</span></a>
    
                    </div>

                    <div className="email-address pt-1 pb-5">
                        <img src={emaill} alt="WhatsApp Logo" width="24" height="24"  className="img-fluid"/>
                        <span className="ms-2">contact@rujsrilanka.lk</span>
                    </div>
                </div>
            </div>

           

            <div className="col-12 form_div_Footer_mobile  pb-5 pt-2 px-3 ">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 form_data_mobile">
                        <input
                            type="text"
                            className="form-control"
                            id="yourname"
                            name="yourname"
                            placeholder="Your Name"
                            value={formData.yourname}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3 form_data_mobile">
                        <input
                            type="email"
                            className="form-control"
                            id="emailAddress"
                            name="emailAddress"
                            placeholder="Email Address"
                            value={formData.emailAddress}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3 form_data_mobile">
                        <input
                            type="tel"
                            className="form-control"
                            id="telephone"
                            name="telephone"
                            placeholder="Telephone"
                            value={formData.telephone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3 form_data_mobile">
                        <textarea
                            className="form-control rounded-3"
                            id="message"
                            name="message"
                            value={formData.message}
                            placeholder="Message"
                            onChange={handleChange}
                            rows="8"
                            required
                        ></textarea>
                    </div>
                    <div className="mb-3 ms-1 form-check ">
                        <input
                            type="checkbox" 
                            className="form-check-input"
                            id="acceptedPrivacyPolicy"
                            name="acceptedPrivacyPolicy"
                            checked={formData.acceptedPrivacyPolicy}
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="acceptedPrivacyPolicy">
                            I have read and accept the <a href="#">privacy policy.</a>
                        </label>
                    </div>
                    {validationMessage && (
                        <div className="alert alert-danger" role="alert">
                            {validationMessage}
                        </div>
                    )}
                    <button
                        type="submit"
                        className="form_btn col-12"
                        disabled={!formData.acceptedPrivacyPolicy}
                    >
                        Submit Message
                    </button>
                </form>
            </div>
            <div className="page6_footer"><Footerbar /></div>
            </div>
        </div>
    );
}
