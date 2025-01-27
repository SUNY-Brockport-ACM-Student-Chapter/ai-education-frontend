"use client";

import React, { useState } from "react";
import "../../../components/component-style.css";
import StudentCourseExams from "./InstructorCourseExams";
import InstructorCourseHome from "./InstructorCourseHome";
import InstructorCourseStudents from "./InstructorCourseStudents";

const InstructorCourseNavBar = () => {
  const [view, setView] = useState("home"); // Initial state to determine which view to show

  const handleHomeClick = () => {
    setView("home"); // Set state to "home" on Home button click
  };

  const handleExamsClick = () => {
    setView("exams"); // Set state to "about" on About button click
  };

  const handleStudentsClick = () => {
    setView("students"); // Set state to "about" on About button click
  };

  return (
    <div>
      <div className="instructor-course-nav-bar">
        <button
          onClick={handleHomeClick}
          className={view === "home" ? "selected" : "not-selected"}
          style={{ margin: "5px" }}
        >
          Course Home
        </button>
        <button
          onClick={handleExamsClick}
          className={view === "exams" ? "selected" : "not-selected"}
          style={{ margin: "5px" }}
        >
          Exams
        </button>
        <button
          onClick={handleStudentsClick}
          className={view === "students" ? "selected" : "not-selected"}
          style={{ margin: "5px" }}
        >
          Students
        </button>
      </div>

      {view === "home" && <InstructorCourseHome />}

      {view === "exams" && <StudentCourseExams />}

      {view === "students" && <InstructorCourseStudents />}
    </div>
  );
};

export default InstructorCourseNavBar;
