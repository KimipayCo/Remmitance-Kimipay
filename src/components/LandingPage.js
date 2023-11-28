import React from "react";
import '../App.css';
import BannerComponent from './landing-page/Banner';
import FeaturesComponent from './landing-page/Features';
import NavbarComponent from './Navbar';
import SecureandReliableComponent from './landing-page/SecureandReliable';
import JoinCommunityComponent from './landing-page/JoinCommunity'
import FooterComponent from './Footer';

const LandingPage = () => {
    return ( 
        <div className="App">
            <NavbarComponent />
            <div className="about_content">
                <div className="section header">
                    <BannerComponent />
                </div>
                <FeaturesComponent />
                <SecureandReliableComponent />
                <JoinCommunityComponent />
            </div>
            <FooterComponent />
        </div>
    );
}

export default LandingPage;