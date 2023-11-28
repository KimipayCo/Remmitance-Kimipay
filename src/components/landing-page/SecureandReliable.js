import React from "react";
import Row from "react-bootstrap/Row";

const SecureandReliableComponent = () => {
    return (  
        <div className="section secure-and-reliable">
            <Row>
                <div className="secure-and-reliable-text col-md-6">
                    <h2>Secure and Reliable...</h2>
                    <h4>Your Funds in Safe Hands</h4>
                    <p>Our cutting-edge security measures, including encryption and multi-factor
                        authentication, ensure your assets are protected. With a dedicated support 
                        team and uptime guarantees, trust that your funds are safe and accessible whenever 
                        you need them. Rest easy knowing that your funds are not only secure but also reliably 
                        accessible whenever you need them</p>
                    {/* <h4>See what some of our users have to say:</h4>
                    <div className="horizontal-scroll">
                        <div className="scroll-container">
                            <div className="testimonial mx-auto">
                                <Row>
                                    <Col className="company-details col-8">
                                        <p className="company-name">Company Ltd</p>
                                        <p className="company-location">Nairobi, Kenya</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <i className="bi bi-quote right"></i>
                                        <p className="testimonial-text">Kimipay Wallet has revolutionized the way our company manages finances. Its secure platform and seamless 
                                            transactions have made our day-to-day operations more efficient. Plus, the ability to convert funds 
                                            into multiple currencies instantly has greatly improved our international business.</p>
                                        <i className="bi bi-quote left"></i>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="col-6 col-md-6 image">
                    <img
                    src="./secure-and-reliable.png"
                    alt="secure and reliable"
                    className="secure-and-reliable-img"
                    />
                </div>
            </Row>
        </div>
    );
}

export default SecureandReliableComponent;