import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';

const JoinCommunityComponent = () => {
    return ( 
        <div className="subsection join-us">
            <h2>Join Our Community</h2>
            <h4>Join Millions Worldwide</h4>
            <p>Join the millions of users worldwide who trust Kimipay 
                for their digital financial needs. Be a part of our global community.</p>
                <InputGroup className="mb-3">
                    <Form.Control
                    placeholder="Your Email"
                    aria-label="Your Email"
                    aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                    Submit
                    </Button>
                </InputGroup>
        </div>
    );
}

export default JoinCommunityComponent;