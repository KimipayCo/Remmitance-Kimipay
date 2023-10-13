import React from "react";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from 'react-bootstrap/Carousel';

const SecureandReliableComponent = () => {

    const [index, setIndex] = useState(0);

        const handleSelect = (selectedIndex) => {
            setIndex(selectedIndex);
        };

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
                    <h4>See what some of our users have to say:</h4>
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
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
                        </Carousel.Item>
                        <Carousel.Item>
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
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="col-6 image">
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