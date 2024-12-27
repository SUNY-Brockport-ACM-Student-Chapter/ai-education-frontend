"use client";

import React, { useState } from "react";
import "./component-style.css";
import StudentCourseExams from "./StudentCourseExams";
import StudentCourseHome from "./StudentCourseHome";

const StudentCourseNavBar = () => {
  const [view, setView] = useState("home"); // Initial state to determine which view to show

  const handleHomeClick = () => {
    setView("home"); // Set state to "home" on Home button click
  };

  const handleExamsClick = () => {
    setView("exams"); // Set state to "about" on About button click
  };

  return (
    <div>
      <div className="student-course-nav-bar">
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
      </div>

      {view === "home" && <StudentCourseHome />}

      {view === "exams" && <StudentCourseExams />}
    </div>
  );
};

export default StudentCourseNavBar;
