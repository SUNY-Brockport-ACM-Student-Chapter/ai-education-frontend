"use client";

import React from "react";
import "../course-page-components.css";
import CourseExamCard from "../CourseExamCard"; // Using shared component
import Link from "next/link";

const InstructorCourseHome = () => {
  return (
    <div className="course-home-body">
      <div className="menu-panel upcoming-exams">
        <h3>Upcoming Exams</h3>
        <div className="exam-slide-box">
          <CourseExamCard />
          <CourseExamCard />
          <CourseExamCard />
          <CourseExamCard />
        </div>
      </div>
      <div className="bottom-elements-container">
        <div className="menu-panel course-info">
          <h3>Course Information</h3>
          <p>
            Prerequisites: MTH 111 or higher. Covers the fundamentals of computer problem solving
            and programming. Includes these topics: program development process, programming
            methodologies, language translation phases, Java programming (data types, variables,
            expressions, assignment, selection, iteration, methods, parameter passing, and I/O),
            secure coding techniques, and ethical, legal, and social issues of computing.
          </p>
        </div>
        <div className="instructor-edit-course-container">
          <Link href="../../instructor/modify_course" passHref>
            <button className="gold" id="instructor-edit-course-button">
              Edit Course
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InstructorCourseHome;
