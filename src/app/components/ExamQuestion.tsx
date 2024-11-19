import React from 'react';
import './component-style.css';

const ExamQuestions = () => {
    return (
        <div className="exam-questionbox">
            <form>
                <label htmlFor="question"></label>
                <input type="text"></input>
            </form>
        </div>
    );
};

export default ExamQuestions;