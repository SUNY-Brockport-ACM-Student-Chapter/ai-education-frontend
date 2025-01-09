"use client";

import React, { useState } from "react";
import "../../../components/component-style.css";
import ExamList from "./ExamList";
import Link from "next/link";

const InstructorCourseExams = () => {
  return (
    <div className="student-course-exams">
      <div className="instructor-course-exams-top">
        <div>
          <h3>Exam List</h3>
        </div>
        <div>
          <Link href="./create_exam" passHref>
          <button id="instructor-edit-course-button">
            <p>Create Exam</p>
          </button>
        </Link>
        </div>

      </div>

      <ExamList />
    </div>
  );
};

export default InstructorCourseExams;
