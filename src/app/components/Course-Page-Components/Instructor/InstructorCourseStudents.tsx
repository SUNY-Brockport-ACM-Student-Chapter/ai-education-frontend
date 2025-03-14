"use client";

import React from "react";
import "../course-page-components.css";
import Link from "next/link";
import StudentList from "./StudentList";

const InstructorCourseStudents = () => {
  return (
    <div className="course-students-page menu-panel">
      <div className="course-action-header">
        <h2>Student List</h2>
        <Link href="./manage_enrollment" passHref>
          <button className="course-action-button gold">Manage Enrollment</button>
        </Link>
      </div>
      <StudentList />
    </div>
  );
};

export default InstructorCourseStudents;
