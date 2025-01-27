"use client";

import React, { useState } from "react";
import "../../components/component-style.css";
import ExamList from "./ExamList";
import Link from "next/link";

const StudentCourseExams = () => {
  return (
    <div className= "student-course-exams">
      <h3>Exam List</h3>
      <ExamList />
    </div>
  );
};

export default StudentCourseExams;
