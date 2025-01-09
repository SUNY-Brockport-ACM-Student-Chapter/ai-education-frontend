"use client";

import React, { useState } from "react";
import "../../../components/component-style.css";
import Link from "next/link";
import CourseExamCard from "./CourseExamCard";

const InstructorCourseHome = () => {
  return (
    <div className="instructor-course-home-body">
      <div className="menu-panel upcoming-exams">
        <h3>Upcoming Exams</h3>
        <div className= "upcoming-exams-slider">
          <CourseExamCard />
          <CourseExamCard />
          <CourseExamCard />
          <CourseExamCard />
          <CourseExamCard />
          <CourseExamCard />
          <CourseExamCard />
          <CourseExamCard />
          <CourseExamCard />
          <CourseExamCard />
        </div>
      </div>
      <div className="bottom-elements-container">
        <div className="menu-panel course-info">
          <h3>Course Information</h3>
          <br />
          <p>
            Prerequisites: MTH 111 or higher. Covers the fundamental of computer problem solving and programming.
            Includes these topics: program development process, programming methodologies, language translation phases,
            Java programming (data types, variables, expressions, assignment, selection, iteration, methods, parameter passing and I/O),
            secure coding techniques and ethical, legal and social issues of computing.
          </p>
        </div>
        <div className = "instructor-edit-course-container">
          <Link href="./modify_course" passHref>
          <button id="instructor-edit-course-button">
            <p>Edit Course</p>
          </button>
        </Link>
        </div>
        
      </div>

    </div>
  );
};

export default InstructorCourseHome;
