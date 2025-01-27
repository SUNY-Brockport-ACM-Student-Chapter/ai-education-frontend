"use client";

import React, { useState } from "react";
import "../../../components/component-style.css";
import Link from "next/link";
import StudentList from "./StudentList";

const InstructorCourseStudents = () => {
  return (
    <div className="instructor-course-students">
      <div className="instructor-course-students-top">
        <div>
          <h3>Student List</h3>
        </div>
        <div>
          <Link href="./manage_enrollment" passHref>
            <button id="instructor-manage-enrollment-button">
              <p>Manage Enrollment</p>
            </button>
          </Link>
        </div>
        
      </div>
      <StudentList />
    </div>
  );
};

export default InstructorCourseStudents;
