"use client";

import React from "react";
import "./course-page-components.css";
import { useUser } from "@clerk/clerk-react";
import ExamListItem from "./ExamListItem";

const ExamList = () => {
  const { user } = useUser();
  const role = user?.publicMetadata?.role; // Assuming role is stored in publicMetadata
  const isInstructor = role === "instructor";

  return (
    <div className={`exam-list ${isInstructor ? "instructor" : "student"}`}>
      <div className="exam-list-header">
        <div> Exam Name </div>
        {isInstructor && <div> Submissions </div>}
        <div> Due Date </div>
        <div> Actions </div>
      </div>
      <div className="exam-list-body">
        <ExamListItem examName="Quiz 1" dueDate="01/05/2025" attempts={2} />
        <ExamListItem examName="Quiz 2" dueDate="01/20/2025" attempts={1} />
        <ExamListItem examName="Exam 1" dueDate="01/30/2025" attempts={0} />
        <ExamListItem examName="Exam 1" dueDate="01/30/2025" attempts={0} />
        <ExamListItem examName="Exam 1" dueDate="01/30/2025" attempts={0} />
        <ExamListItem examName="Exam 1" dueDate="01/30/2025" attempts={0} />
        <ExamListItem examName="Exam 1" dueDate="01/30/2025" attempts={0} />
        <ExamListItem examName="Exam 1" dueDate="01/30/2025" attempts={0} />
      </div>
    </div>
  );
};

export default ExamList;
