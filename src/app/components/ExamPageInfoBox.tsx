import React from 'react';
import './component-style.css';

const ExamPageInofBox = () => {
    return (
        <div className="exampage-infobox">
            <h1>Exam #</h1>
            <h3>Course Name</h3>
            <div className="exampage-infobox-desc">
                <p>Exam Description...</p>
            </div>
            <div className="exampage-infobox-dates">
                <p>Start date: ...</p>
                <p>End date: ...</p>
            </div>
        </div>
    );
       
};

export default ExamPageInofBox;