import React from "react";
import { useState } from "react";

const FAQComponent = () => {
    const [showAnswer, setShowAnswer] = useState(false);
    const handleToggle = () => {
        setShowAnswer(!showAnswer);
    };
    return ( 
        <div className="FAQ">
            <div className="question" onClick={handleToggle}>
                <p className="question-text">Question</p>
                <i className={`bi bi-chevron-${showAnswer ? 'up' : 'down'}`}></i>
            </div>
            {showAnswer && (
                <div className="answer">
                    <p className="answer-text">Answer to the question goes here.</p>
                </div>
            )}
        </div>
    );
}

export default FAQComponent;