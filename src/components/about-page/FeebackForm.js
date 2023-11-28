import React from "react";
import { useState } from "react";
import { Button, Form} from 'react-bootstrap';


const FeedbackFormSection = () => {
    const [email, setEmail] = useState('');
    const [feedbackType, setFeedbackType] = useState({
        general: false,
        technicalIssues: false,
        suggestions: false
    });
    const [additionalFeedback, setAdditionalFeedback] = useState('');

    const handleCheckboxChange = (type) => {
        setFeedbackType(prevFeedbackType => ({
            ...prevFeedbackType,
            [type]: !prevFeedbackType[type]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Feedback:", { email, feedbackType, additionalFeedback });
    };

    return ( 
        <div className="page-section">
            <h2 className="section-heading">Feedback Form</h2>
            <Form className="feedback-form" onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail" className="form-group">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="form-group">
                <Form.Label>How did you find our product?</Form.Label>
                <div className="smileys">
                    <i className="bi bi-emoji-smile" id="smiley" style={{ fontSize: "1.5rem", cursor: "pointer" }}></i>
                    <i className="bi bi-emoji-smile-upside-down" id="upsidedownsmile" style={{ fontSize: "1.5rem", cursor: "pointer" }}></i>
                </div>
            </Form.Group>
            <Form.Group className="form-group">
                <Form.Label htmlFor="">Type of Feedback:</Form.Label>
                <div className="d-flex">
                    <Form.Check
                        name="generalFeedback"
                        type="checkbox"
                        id="checkboxGeneral"
                        label="General Feedback"
                        checked={feedbackType.general}
                        onChange={() => handleCheckboxChange('general')}
                    />
                    <Form.Check
                        type="checkbox"
                        id="checkboxTechnical"
                        label="Technical Issues"
                        checked={feedbackType.technicalIssues}
                        onChange={() => handleCheckboxChange('technicalIssues')}
                    />
                    <Form.Check
                        type="checkbox"
                        id="checkboxSuggestions"
                        label="Suggestions"
                        checked={feedbackType.suggestions}
                        onChange={() => handleCheckboxChange('suggestions')}
                    />
                </div>
            </Form.Group>

            <Form.Group controlId="formAdditionalFeedback" className="form-group">
                <Form.Label>Tell us more:</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    value={additionalFeedback}
                    onChange={(e) => setAdditionalFeedback(e.target.value)}
                />
            </Form.Group>

            <Button
                variant="primary"
                type="submit"
                style={{ backgroundColor: "#3799D4" }}
                className="feedback-submit"
            >
                Submit
            </Button>
        </Form>
        </div>
    );
}

export default FeedbackFormSection;