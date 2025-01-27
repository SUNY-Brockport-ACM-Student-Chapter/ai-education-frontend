"use client";

import React, { useState } from "react";
import "../../../components/component-style.css";
import Link from "next/link";
import StudentListItem from "./StudentListItem";

const StudentList = () => {
  return (
    <div className="instructor-student-list">
      <div className="instructor-student-list-header">
        <div> Student Name </div>
        <div> Email </div>
      </div>
      <div className="instructor-student-list-body">
        <StudentListItem
          name="Trinity Thiele"
          email="tthie1@brockport.edu"
        />
        <StudentListItem
          name="Tyler Jones"
          email="tthie1@brockport.edu"
        />
        <StudentListItem
          name="Naya Brown"
          email="tthie1@brockport.edu"
        />
        <StudentListItem
          name="Jayden Asbie"
          email="tthie1@brockport.edu"
        />
        <StudentListItem
          name="Ryan Fantigrossi"
          email="tthie1@brockport.edu"
        />
        <StudentListItem
          name="Trinity Thiele"
          email="tthie1@brockport.edu"
        />
        <StudentListItem
          name="Tyler Jones"
          email="tthie1@brockport.edu"
        />
        <StudentListItem
          name="Naya Brown"
          email="tthie1@brockport.edu"
        />
        <StudentListItem
          name="Jayden Asbie"
          email="tthie1@brockport.edu"
        />
        <StudentListItem
          name="Ryan Fantigrossi"
          email="tthie1@brockport.edu"
        />
        <StudentListItem
          name="Trinity Thiele"
          email="tthie1@brockport.edu"
        />
        <StudentListItem
          name="Tyler Jones"
          email="tthie1@brockport.edu"
        />
        <StudentListItem
          name="Naya Brown"
          email="tthie1@brockport.edu"
        />
        <StudentListItem
          name="Jayden Asbie"
          email="tthie1@brockport.edu"
        />
        <StudentListItem
          name="Ryan Fantigrossi"
          email="tthie1@brockport.edu"
        />
      </div>
    </div>

  );
};

export default StudentList;
