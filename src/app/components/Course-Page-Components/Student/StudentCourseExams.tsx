"use client";

import React, { useState } from "react";
import "../course-page-components.css";
import ExamList from "../Instructor/ExamList";
import Link from "next/link";

const StudentCourseExams = () => {
  return (
    <div className="student-course-exams">
      <h3>Exam List</h3>
      <ExamList />
    </div>
  );
};

export default StudentCourseExams;
