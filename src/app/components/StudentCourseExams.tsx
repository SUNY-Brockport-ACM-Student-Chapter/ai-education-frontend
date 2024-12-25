"use client";

import React, { useState } from "react";
import "./component-style.css";
import Link from "next/link";

const StudentCourseExams = () => {
  return (
    <div>
      <div className="menu-panel upcoming-exams">
        <h3>Upcoming Exams</h3>
        <br />
      </div>
      <div className="menu-panel course-info">
        <h3>Course Information</h3>
        <br />
        <Link href="./exam/attempt_1">Attempt 1</Link>
        <Link href="./exam/attempt_2">Attempt 2</Link>
        <Link href="./exam/ai_review">AI Review</Link>
      </div>
    </div>
  );
};

export default StudentCourseExams;
