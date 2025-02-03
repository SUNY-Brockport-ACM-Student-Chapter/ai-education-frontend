"use client";

import React, { useState } from "react";
import "../course-page-components.css";
import ExamList from "./ExamList";
import Link from "next/link";

const InstructorCourseExams = () => {
  return (
    <div className="instructor-course-exams">
      <div className="instructor-course-exams-top">
        <div>
          <h3>Exam List</h3>
        </div>
        <div>
          <Link href="./create_exam" passHref>
          <button id="instructor-create-exam-button">
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