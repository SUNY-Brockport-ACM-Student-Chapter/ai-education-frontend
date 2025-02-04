"use client";

import React from "react";
import "../course-page-components.css";
import ExamList from "../ExamList"; // Using the shared ExamList component

const StudentCourseExams = () => {
  return (
    <div className="student-course-exams">
      <h3>Exam List</h3>
      <ExamList />
    </div>
  );
};

export default StudentCourseExams;
