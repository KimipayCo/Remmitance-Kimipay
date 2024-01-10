import React from "react";
import { useState } from "react";

const FAQComponent = ({ question, answer }) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const handleToggle = () => {
        setShowAnswer(!showAnswer);
    };
    return ( 
        <div className="FAQ">
            <div className="question" onClick={handleToggle}>
                <p className="question-text">{question}</p>
                <i className={`bi bi-chevron-${showAnswer ? 'up' : 'down'}`}></i>
            </div>
            {showAnswer && (
                <div className="answer">
                    <p className="answer-text">{answer}</p>
                </div>
            )}
        </div>
    );
}

export default FAQComponent;