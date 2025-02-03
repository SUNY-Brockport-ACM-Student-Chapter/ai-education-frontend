"use client";

import React, { useState, useEffect } from "react";
import "./add-modify-course.css";
import Link from "next/link";

const ModifyCourseScreen = () => {
  const [isCapValid, setIsCapValid] = useState(true);
  const [isCRNValid, setIsCRNValid] = useState(true);
  const [startDate, setStartDate] = useState("");
  const [endDateMin, setEndDateMin] = useState("");

  const handleCourseCapacityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setIsCapValid(/^\d*$/.test(value));
  };

  const handleCourseCRNChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setIsCRNValid(/^\d{4}$/.test(value));
  };

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setStartDate(today);
  }, []);

  const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const start = event.target.value;
    setStartDate(start);

    const nextDay = new Date(start);
    nextDay.setDate(nextDay.getDate() + 1);
    setEndDateMin(nextDay.toISOString().split("T")[0]);
  };

  const handleSubmitClick = () => {
    alert("Congrats! This does nothing right now!");
  };

  const handleSetInactiveClick = () => {
    alert("Congrats! This does nothing right now!");
  };

  return (
    <div>
      <div className="course-form">
        <div className="course-panel">
          <h3>Course Name</h3>
          <input type="text" placeholder="Enter course name" />
        </div>
        <div className="course-panel">
          <h3>Course Code (CRN)</h3>
          <input
            type="text"
            placeholder="Enter course code"
            onChange={handleCourseCRNChange}
            style={{ borderColor: isCRNValid ? "initial" : "red" }}
          />
          {!isCRNValid && <p style={{ color: "red", marginTop: "5px" }}>CRN must be four numbers.</p>}
        </div>
        <div className="course-panel">
          <h3>Course Description</h3>
          <textarea rows={4} placeholder="Enter course description"></textarea>
        </div>
        <div className="course-panel">
          <h3>Course Capacity</h3>
          <input
            type="text"
            placeholder="Enter course capacity"
            onChange={handleCourseCapacityChange}
            style={{ borderColor: isCapValid ? "initial" : "red" }}
          />
          {!isCapValid && <p style={{ color: "red", marginTop: "5px" }}>Value must be numeric.</p>}
        </div>
        <div className="course-panel">
          <h3>Course Start/End Dates</h3>
          <input
            type="date"
            onChange={handleStartDateChange}
            min={startDate}
          />
          <span>-</span>
          <input
            type="date"
            min={endDateMin}
          />
        </div>
      </div>
      <div className="course-buttons">
        <button className="course-button red set-inactive" onClick={handleSetInactiveClick}>
          Set Inactive
        </button>
        <div>
          <Link href="./manage_courses" passHref>
            <button className="course-button gray">Cancel</button>
          </Link>
          <button className="course-button green" onClick={handleSubmitClick}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModifyCourseScreen;
