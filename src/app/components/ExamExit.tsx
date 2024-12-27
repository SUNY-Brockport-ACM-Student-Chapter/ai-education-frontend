import React, { useState } from "react";
import "./component-style.css";
import Link from "next/link";

const ExamExit = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="container">
      <button className="popup-button" onClick={togglePopup}>
        Open Popup
      </button>
      {isPopupOpen && (
        <div className="popup-overlay" onClick={togglePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h1>Exit Exam?</h1>
            <p>You will exit the exam and your current progress will be submitted.</p>
            <p>Are you sure?</p>
            <div className="confirm-cancel-buttons">
              <button className="cancel" onClick={togglePopup}>
                <p>Cancel</p>
              </button>
              <button className="confirm" onClick={togglePopup}>
                <Link href="./student/dashboard">
                  <p>Confirm</p>
                </Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    /**
        <>
          <div className="thebigbox">
            <div className="blur-container">
            </div>
          </div>
          <div className="exam-exit-box">
            <h1>Exit Exam?</h1>
            <p>You will exit the exam and your current progress will be submitted.</p>
            <p>Are you sure?</p>
            <div className="confirm-cancel-buttons">
              <button className='cancel'>
                <p>Cancel</p>
              </button>
              <button className='confirm'>
                <p>Confirm</p>
              </button>
            </div>
          </div>
        </>
        */
  );
};

export default ExamExit;
