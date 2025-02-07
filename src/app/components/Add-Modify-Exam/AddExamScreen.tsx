"use client";

import React, { useState } from "react";
import "./add-modify-exam.css";
import Link from "next/link";

const AddExamScreen = () => {
  const [step, setStep] = useState(1);

  const handleNextClick = () => {
    setStep(2); // Switch to next view
  };

  const handleBackClick = () => {
    setStep(1); // Go back to previous view
  };

  return (
    <div>
      {step === 1 && (
        <div>
          <div className="instructor-add-exam menu-panel">
            <div className="add-exam-first-row">
              <div className="add-exam-name">
                <h3>Exam Name</h3>
                <input type="text" placeholder="Enter exam name" />
              </div>
              <div className="add-exam-course">
                <h3>Course Name</h3>
                <input type="text" placeholder="Enter course name" />
              </div>
            </div>
            <div className="add-exam-second-row">
              <div className="add-exam-start-date">
                <h3>Start Date</h3>
                <input type="date" />
              </div>
              <div className="add-exam-end-date">
                <h3>End Date</h3>
                <input type="date" />
              </div>
            </div>
            <div className="add-exam-third-row">
              <div className="add-exam-exam-description">
                <h3>Exam Description</h3>
                <textarea rows={4} placeholder="Enter course description"></textarea>
              </div>
            </div>

          </div>
          <div className="bottom-buttons">
            <Link href="./course" passHref>
              <button className="course-button green">Cancel</button>
            </Link>
            <button className="course-button green" onClick={handleNextClick}>Next</button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="add-exam-question">
          <p>heyyy</p>
          <div className="bottom-buttons">
            <button className="course-button green" onClick={handleBackClick}>Back</button>
            <button className="course-button green">Submit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddExamScreen;
