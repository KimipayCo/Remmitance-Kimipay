import React from "react";
import NavbarComponent from "./Navbar";
import FooterComponent from "./Footer";

const SupportPage = () => {
    return ( 
        <div className="App">
            <NavbarComponent />
            <div className="about_content">
                Help & Support PAge
            </div>
            <FooterComponent />
        </div>
     );
}
 
export default SupportPage;