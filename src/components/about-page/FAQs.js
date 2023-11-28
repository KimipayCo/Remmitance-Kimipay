import React from "react";
import FAQComponent from "./FAQComponent";

const FAQsSection = () => {
    return ( 
        <div className="page-section">
            <h2 className="section-heading">FAQs</h2>
            <FAQComponent />
            <FAQComponent />
            <FAQComponent />
            <FAQComponent />
        </div>
    );
}

export default FAQsSection;