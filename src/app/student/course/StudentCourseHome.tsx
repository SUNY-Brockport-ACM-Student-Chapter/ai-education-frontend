"use client";

import React, { useState } from "react";
import "../../components/component-style.css";
import ExamSlide from "../../components/DashboardCourseCard";

const StudentCourseHome = () => {
  return (
    <div className="student-course-home-body">
      <div className="menu-panel upcoming-exams">
        <h3>Upcoming Exams</h3>
        <br />
        <div className="exam-slide-box">
          <ExamSlide />
          <ExamSlide />
          <ExamSlide />
          <ExamSlide />
          <ExamSlide />
          <ExamSlide />
        </div>
      </div>
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
    </div>
  );
};

export default StudentCourseHome;
