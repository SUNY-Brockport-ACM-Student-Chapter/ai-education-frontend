import React from "react";
import "./component-style.css";

const ExamPageButtons = () => {
  return (
    <div className="exam-buttonbox">
      <div className="begin-exam-buttonbox">
        <button className="begin-exam button">
          <p>Begin Exam</p>
        </button>{" "}
        <br />
        <button className="return-exam button">
          <p>Return To Exam List</p>
        </button>{" "}
        <br />
      </div>
      <div className="finish-exam-buttonbox">
        <button className="ai-review button hide">
          <p>AI Review</p>
        </button>{" "}
        <br />
        <button className="close-exam button hide">
          <p>Close</p>
        </button>
      </div>
    </div>
  );
};

export default ExamPageButtons;
