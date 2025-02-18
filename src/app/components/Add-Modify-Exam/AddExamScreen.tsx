"use client";

import React, { useState } from "react";
import "./add-modify-exam.css";
import Link from "next/link";
import AddQuestionScreen from "./AddQuestionScreen";

const AddExamScreen = () => {
  const [step, setStep] = useState(1);

  const handleNextClick = () => {
    setStep(2);
  };

  const handleBackClick = () => {
    setStep(1);
  };

  const handleSaveClick = () => {
    setStep(3);
  };

  return (
    <div>
      {step === 1 && (
        <div>
          <div className="instructor-add-exam menu-panel">
            <div className="add-exam-first-row">
              <div className="add-exam-name">
                <h3>Assignment Name</h3>
                <input type="text" placeholder="Enter exam name" />
              </div>
              <div className="add-exam-course">
                <h3>Course Name</h3>
                <input type="text" placeholder="Enter course name" />
              </div>
            </div>
            <div className="add-exam-second-row">
              <div className="add-exam-start-date">
                <h3>Start Date </h3>
                <input type="date" />
              </div>
              <div className = "dash"></div>
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
          <AddQuestionScreen onBack={function (): void {
            throw new Error("Function not implemented.");
          } } onSave={function (): void {
            throw new Error("Function not implemented.");
          } } />
          <div className="bottom-buttons">
            <button className="course-button green" onClick={handleBackClick}>Back</button>
            <button className="course-button green" onClick={handleSaveClick}>Save and Continue</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <p>finished exam page</p>
        </div>
      )}
    </div>
  );
};

export default AddExamScreen;
