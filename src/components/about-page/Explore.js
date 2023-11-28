import React from "react";
import { Button } from "react-bootstrap";

const ExploreSection = () => {
    return ( 
        <div className="page-section">
            <div className="row">
                <div className="col-md-6">
                    <h2 className="section-heading">Explore...</h2>
                    <p className="explore-text">Explore our seamless world of digital remittance today!</p>
                </div>
                <div className="col-md-6 explore-btn-div">
                    <Button
                    variant="primary"
                    type="submit"
                    style={{ backgroundColor: "#3799D4" }}
                    className="explore-btn"
                    >Explore now</Button>
                </div>
            </div>
        </div>
    );
}

export default ExploreSection;