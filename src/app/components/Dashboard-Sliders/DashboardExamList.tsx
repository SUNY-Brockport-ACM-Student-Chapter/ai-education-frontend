import React from "react";
import "./dashboard-sliders.css";
import ExamCard from "./DashboardExamCard";

const CourseList = () => {
  return (
    <div className="exam-list-box">
      <h2>Upcoming Exams</h2>
      <div className="elist-card-box">
        <ExamCard />
        <ExamCard />
        <ExamCard />
        <ExamCard />
        <ExamCard />
        <ExamCard />
        <ExamCard />
        <ExamCard />
        <ExamCard />
        <ExamCard />
        <ExamCard />
        <ExamCard />
        <ExamCard />
      </div>
    </div>
  );
};

export default CourseList;
