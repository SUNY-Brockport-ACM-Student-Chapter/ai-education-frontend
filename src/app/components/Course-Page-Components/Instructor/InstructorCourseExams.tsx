"use client";

import React from "react";
import "../course-page-components.css";
import ExamList from "../ExamList"; // Using shared ExamList
import Link from "next/link";

const InstructorCourseExams = () => {
  return (
    <div className="course-exams-page menu-panel">
      <div className="course-action-header">
        <h2>Exam List</h2>
        <Link href="../../instructor/create_exam" passHref>
          <button className="course-action-button gold">Create Exam</button>
        </Link>
      </div>
      <ExamList />
    </div>
  );
};

export default InstructorCourseExams;
