import React from "react";
import { Form, Dropdown } from "react-bootstrap";

const CurrencyConverterComponent = () => {
    return ( 
        <div className="page-section">
            <h2 className="section-heading">Currency Converter</h2>
            <Form className="converter">
                <div className="row">
                    <div className="col-md-6">
                        <div className="converter-fields">
                            <Form.Group controlId="formCurrencyFrom" className="currency-form">
                                <Form.Control
                                    className="input-field"
                                    type="email"
                                    placeholder="Currency From"
                                />
                            </Form.Group>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Select Currency
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Kenyan Shillings (KSH)</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">United States Dollars (USD)</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Tanzanian Shillings (TZS)</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        </div>
                        <div className="col-md-6">
                            <div className="converter-fields">
                                <Form.Group controlId="formCurrencyTo" className="currency-form">
                                    <Form.Control
                                    className="input-field"
                                        type="email"
                                        placeholder="Currency To"
                                    />
                                </Form.Group>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Select Currency
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Kenyan Shillings (KSH)</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">United States Dollars (USD)</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Tanzanian Shillings (TZS)</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                </div>
            </Form>
        </div>
    );
}

export default CurrencyConverterComponent;