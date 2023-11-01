import React from "react";
import '../../App.css';
import BannerComponent from '../landing-page/Banner';
import FeaturesComponent from '../landing-page/Features';
import NavbarComponent from '../landing-page/Navbar';
import SecureandReliableComponent from '../landing-page/SecureandReliable';
import JoinCommunityComponent from '../landing-page/JoinCommunity'
import FooterComponent from '../landing-page/Footer';

const LandingPage = () => {
    return ( 
        <div className="App">
            <NavbarComponent />
            <BannerComponent />
            <FeaturesComponent />
            <SecureandReliableComponent />
            <JoinCommunityComponent />
            <FooterComponent />
        </div>
    );
}

export default LandingPage;