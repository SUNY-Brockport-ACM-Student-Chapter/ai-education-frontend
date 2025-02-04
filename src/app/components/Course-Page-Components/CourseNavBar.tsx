"use client";

import React, { useState } from "react";
import "./course-page-components.css";
import { useUser } from "@clerk/clerk-react";
import InstructorCourseExams from "./Instructor/InstructorCourseExams";
import InstructorCourseHome from "./Instructor/InstructorCourseHome";
import InstructorCourseStudents from "./Instructor/InstructorCourseStudents";
import StudentCourseExams from "./Student/StudentCourseExams";
import StudentCourseHome from "./Student/StudentCourseHome";

const CourseNavBar = () => {
  const { user } = useUser();
  const role = user?.publicMetadata?.role;
  const isInstructor = role === "instructor";

  const [view, setView] = useState("home");

  return (
    <div>
      <div className="course-nav-bar">
        <button
          onClick={() => setView("home")}
          className={view === "home" ? "selected" : "not-selected"}
        >
          Course Home
        </button>
        <button
          onClick={() => setView("exams")}
          className={view === "exams" ? "selected" : "not-selected"}
        >
          Exams
        </button>
        {isInstructor && (
          <button
            onClick={() => setView("students")}
            className={view === "students" ? "selected" : "not-selected"}
          >
            Students
          </button>
        )}
      </div>

      {view === "home" && (isInstructor ? <InstructorCourseHome /> : <StudentCourseHome />)}
      {view === "exams" && (isInstructor ? <InstructorCourseExams /> : <StudentCourseExams />)}
      {isInstructor && view === "students" && <InstructorCourseStudents />}
    </div>
  );
};

export default CourseNavBar;
