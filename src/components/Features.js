import React from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";

const FeaturesComponent = () => {
    return ( 
        <div className="section features">
            <h2 className="heading">Features</h2>
            <Row xs={1} md={2} className="mb-1">
                <Col>
                    <Card className="card-container">
                        <Card.Body >
                        <div className='feature-icon'>
                            <i className="bi bi-wallet2 icon"></i>
                        </div>
                            <Card.Title>Digital Wallet Creation</Card.Title>
                            <Card.Text>
                            Experience a hassle-free registration process to create your Kimipay Wallet. 
                            Get started in minutes and unlock a world of financial convenience.
                            </Card.Text>
                            <Button variant="outline-primary" className="rounded-pill">Learn More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="card-container">
                        <Card.Body>
                        <div className='feature-icon'>
                            <i className="bi bi-shuffle icon"></i>
                        </div>
                            <Card.Title>Versatile Funds Handling</Card.Title>
                            <Card.Text>
                            Recieve money from Mobile Money, cards and banks seamlessly. Kimipay Wallet
                            simplifies fund collection, putting control in your hands.
                            </Card.Text>
                            <Button variant="outline-primary" className="rounded-pill">Learn More</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row xs={1} md={2} className="mb-2">
                <Col>
                    <Card className="card-container">
                        <Card.Body>
                        <div className="feature-icon">
                            <i className="bi bi-currency-exchange icon"></i>
                        </div>
                            <Card.Title>Currency Conversions</Card.Title>
                            <Card.Text>
                            Enjoy the power to convert your digital value to over 40 global currencies 
                            in a matter of seconds. Your funds, your way.
                            </Card.Text>
                            <Button variant="outline-primary" className="rounded-pill">Learn More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="card-container">
                        <Card.Body>
                        <div className='feature-icon'>
                            <i className="bi bi-patch-check-fill icon"></i>
                        </div>
                            <Card.Title>Seamless Transaction</Card.Title>
                            <Card.Text>
                            Whether it's peer-to-peer, customer-to-business, or business-to-business, 
                            enjoy streamlined transactions for a seamless experience.
                            </Card.Text>
                            <Button variant="outline-primary" className="rounded-pill">Learn More</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default FeaturesComponent;