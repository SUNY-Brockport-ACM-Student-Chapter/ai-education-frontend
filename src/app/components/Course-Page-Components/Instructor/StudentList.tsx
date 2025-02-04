"use client";

import React from "react";
import "../course-page-components.css";
import StudentListItem from "./StudentListItem";

const StudentList = () => {
  const students = [
    { name: "Trinity Thiele", email: "tthie1@brockport.edu" },
    { name: "Tyler Jones", email: "tjones@brockport.edu" },
    { name: "Naya Brown", email: "nbrown@brockport.edu" },
    { name: "Jayden Asbie", email: "jasbie@brockport.edu" },
    { name: "Ryan Fantigrossi", email: "rfanti@brockport.edu" },
  ];

  return (
    <div className="student-list">
      <div className="student-list-header">
        <div>Student Name</div>
        <div>Email</div>
      </div>
      <div className="student-list-body">
        {students.map((student, index) => (
          <StudentListItem key={index} name={student.name} email={student.email} />
        ))}
      </div>
    </div>
  );
};

export default StudentList;
