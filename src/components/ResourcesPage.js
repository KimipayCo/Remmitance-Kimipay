import React from "react";
import NavbarComponent from "./Navbar";
import FooterComponent from "./Footer";
import CurrencyConverterComponent from "./resources-page/CurrencyConverter";
import VideoTutorialsComponent from "./resources-page/VideoTutorials";
import JoinCommunityComponent from "./landing-page/JoinCommunity";
import UserManualSection from "./resources-page/UserManual";

const ResourcesPage = () => {
    return ( 
        <div className="App">
            <NavbarComponent />
            <div className="about_content">
                <CurrencyConverterComponent />
                <VideoTutorialsComponent />
                <UserManualSection />
                <JoinCommunityComponent />
            </div>
            <FooterComponent />
        </div>
    );
}

export default ResourcesPage;