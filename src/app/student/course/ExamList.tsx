"use client";

import React, { useState } from "react";
import "../../components/component-style.css";
import Link from "next/link";
import ExamListItem from "./ExamListItem";

const ExamList = () => {
  return (
    <div className="student-exam-list">
      <div className="student-exam-list-header">
        <div> Exam Name </div>
        <div> Due Date </div>
        <div> Attempts </div>
        <div> Actions </div>
      </div>
      <div className="student-exam-list-body">
        <ExamListItem
          examName="Quiz 1"
          dueDate="01/05/2025"
          attempts={2}
        />

        <ExamListItem
          examName="Quiz 2"
          dueDate="01/20/2025"
          attempts={1}
        />

        <ExamListItem
          examName="Exam 1"
          dueDate="01/30/2025"
          attempts={0}
        />
        <ExamListItem
          examName="Quiz 1"
          dueDate="01/05/2025"
          attempts={2}
        />

        <ExamListItem
          examName="Quiz 2"
          dueDate="01/20/2025"
          attempts={1}
        />

        <ExamListItem
          examName="Exam 1"
          dueDate="01/30/2025"
          attempts={0}
        />

        <ExamListItem
          examName="Quiz 2"
          dueDate="01/20/2025"
          attempts={1}
        />

        <ExamListItem
          examName="Exam 1"
          dueDate="01/30/2025"
          attempts={0}
        />
      </div>
    </div>

  );
};

export default ExamList;
