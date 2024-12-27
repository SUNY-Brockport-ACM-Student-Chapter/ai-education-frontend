import React from "react";
import "./component-style.css";

interface ExamPageProps {
  examNum: number;
  courseName: string;
  examDesc: string;
  startDate: string;
  endDate: string;
  attemptNum: number;
}

const ExamPageInfoBox: React.FC<ExamPageProps> = ({
  examNum,
  courseName,
  examDesc,
  startDate,
  endDate,
  attemptNum,
}) => {
  return (
    <div className="exampage-infobox">
      <h1>Exam {examNum}</h1>
      <h3>{courseName}</h3>
      <div className="exampage-infobox-desc">
        <p>{examDesc}</p>
      </div>
      <div className="exampage-infobox-dates">
        <p>Start date: {startDate}</p>
        <p>End date: {endDate}</p>
      </div>
      <h4>Attempt: {attemptNum}</h4>
    </div>
  );
};

export default ExamPageInfoBox;
