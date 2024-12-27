"use client";

import React, { useState } from "react";
import "./component-style.css";
import ExamSlide from "./DashboardCourseCard";

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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident hic ad, obcaecati nobis
          eius voluptatum ducimus laboriosam. Quam commodi nostrum voluptatibus perferendis
          cupiditate tempora illo iusto modi assumenda. Laborum, corporis.
        </p>
      </div>
    </div>
  );
};

export default StudentCourseHome;
