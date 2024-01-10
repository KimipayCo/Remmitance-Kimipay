import React from "react";
import MapComponent from "./MapLocation";

const ContactUsSection = () => {
    return ( 
        <div className="page-section">
            <h2 className="heading">Contact Us</h2>
            <div className="row">
                <div className="col-md-6 contact-column">
                    <h6 className="topic">Customer Support</h6>
                        <p className="contact-content"><span>Email:</span> info@kimipay.com</p>
                        <p className="contact-content"><span>Phone:</span> +254 716 944 544</p>
                    <h6 className="topic">Connect with us</h6>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="social-media">
                                <i className="bi bi-facebook"></i>
                                <p className="social-name">@Kimipay</p>
                            </div>
                            <div className="social-media">
                                <i className="bi bi-instagram"></i>
                                <p className="social-name">@kimipayltd</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="social-media">
                                <i className="bi bi-linkedin"></i>
                                <p className="social-name">@KimiPay</p>
                            </div>
                            <div className="social-media">
                                <i className="bi bi-twitter-x"></i>
                                <p className="social-name">@KimipayLtd</p>
                            </div>
                        </div>
                        <div>
                            <h6 className="topic">Operating Hours</h6>
                            <p className="contact-content">8:00am - 5:00pm</p>
                            <p className="contact-content">Monday - Saturday (Closed on public holidays)</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 contact-column">
                    <h6 className="topic">Visit Us</h6>
                    <p className="contact-content">1st Floor, Rattansi House, Koinange St, Starehe</p>
                    <p className="contact-content">Nairobi, Kenya</p>
                    <MapComponent />
                </div>
            </div>
        </div>
    );
}

export default ContactUsSection;
;