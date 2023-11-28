import React from "react";
import NavbarComponent from "./Navbar";
import FAQsSection from "./about-page/FAQs";
import ContactUsSection from "./about-page/ContactUs";
import FooterComponent from "./Footer";
import FeedbackFormSection from "./about-page/FeebackForm";
import ExploreSection from "./about-page/Explore";

const AboutPage = () => {
    return ( 
        <div className="App">
            <NavbarComponent />
            <div className="about_content">
                <img
                    src="/logo22.png"
                    height="75"
                    className="d-inline-block align-top"
                    alt="Kimipay logo"
                />
                <p className="tagline">Secure and Reliable</p>
                <FAQsSection />
                <ContactUsSection />
                <FeedbackFormSection />
                <ExploreSection />
            </div>
            <FooterComponent />
        </div>
    );
}

export default AboutPage;