import React from "react";
import Button from "react-bootstrap/Button";

const BannerComponent = () => {
    return ( 
        <div className="section header">
            <div className="row">
                <div className="col-md-8">
                    <h1 className="heading">Your Digital Solution for <span className="yellow-text">Secure</span> and <span className="yellow-text">Convenient</span> Remittances</h1>
                    <h4 className="subtitle">Send, Receive, and Convert Money Globally with Ease</h4>
                    <p className="description header-description">Welcome to Kimipay Wallet, your gateway to a seamless world of 
                        digital remittances. Create your digital wallet effortlessly and 
                        receive funds from Mobile Money, cards, and banks. Our platform 
                        offers lightning-fast currency conversion to over 40 global 
                        currencies, making transactions simple and secure.</p>
                        <Button variant="outline-primary" className="rounded-pill">Get Started <i className="bi bi-arrow-right"></i></Button>
                </div>
                <div className="col-md-4">
                </div>
            </div>
        </div>
    );
}

export default BannerComponent;