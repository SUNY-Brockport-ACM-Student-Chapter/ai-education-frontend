"use client";

import React, { useState, useEffect } from "react";
import "../../../components/component-style.css";
import Link from "next/link";

const ModifyCourseScreen = () => {

  const [isCapValid, setIsCapValid] = useState(true);
  const [isCRNValid, setIsCRNValid] = useState(true);
  const [startDate, setStartDate] = useState("");
  const [endDateMin, setEndDateMin] = useState("");

  const handleCourseCapacityChange = (event: { target: { value: any; }; }) => {
    const value = event.target.value;

    if (/^\d*$/.test(value)) {
      setIsCapValid(true);
    } else {
      setIsCapValid(false);
    }
  };

  const handleCourseCRNChange = (event: { target: { value: any; }; }) => {
    const value = event.target.value;

    if (/^\d{4}$/.test(value)) {
      setIsCRNValid(true);
    } else {
      setIsCRNValid(false);
    }
  };

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setStartDate(today);
  }, []);

  const handleStartDateChange = (event: { target: { value: any; }; }) => {
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
      <div className="instructor-modify-course">
        <div className="instructor-modify-course-background-panel">
          <h3>Course Name</h3>
          <div className="course-name">
            <input type="text" id="instructor-modify-course-name-input" />
          </div>
        </div>
        <div className="instructor-modify-course-background-panel">
          <h3>Course Code (CRN)</h3>
          <div className="course-name">
            <input type="text"
              id="instructor-modify-course-code-input"
              onChange={handleCourseCRNChange}
              style={{
                borderColor: isCapValid ? "initial" : "red",
              }} />
            {!isCRNValid && (
              <p style={{ color: "red", marginTop: "5px" }}>
                CRN must be four numbers.
              </p>
            )}
          </div>
        </div>
        <div className="instructor-modify-course-background-panel">
          <h3>Course Description</h3>
          <div className="course-name">
            <textarea id="instructor-modify-course-description-input" rows={4} cols={10}></textarea>
          </div>
        </div>
        <div className="instructor-modify-course-background-panel">
          <h3>Course Capacity</h3>
          <div className="course-name">
            <input type="text"
              id="instructor-modify-course-capacity-input"
              onChange={handleCourseCapacityChange}
              style={{
                borderColor: isCapValid ? "initial" : "red",
              }} />
            {!isCapValid && (
              <p style={{ color: "red", marginTop: "5px" }}>
                Value must be numeric.
              </p>
            )}
          </div>
        </div>
        <div className="instructor-modify-course-background-panel">
          <h3>Course Start/End Dates</h3>
          <div className="course-name">
            <input
              type="date"
              id="instructor-modify-course-start-date"
              onChange={handleStartDateChange}
              min={startDate}
            />
            <span>-</span>
            <input
              type="date"
              id="instructor-modify-course-end-date"
              min={endDateMin}
            />
          </div>
        </div>
      </div>
      <div className="instructor-modify-course-buttons-container">
        <div className="instructor-modify-course-inactive-button">
          <button className="instructor-modify-course-set-inactive" onClick={handleSetInactiveClick}>
            <p>Set Inactive</p>
          </button>
        </div>
        <div className="instructor-modify-course-buttons">
          <Link href="./manage_courses" passHref>
            <button className="instructor-modify-course-cancel">
              <p>Cancel</p>
            </button>
          </Link>
          <button className="instructor-modify-course-submit" onClick={handleSubmitClick}>
            <p>Submit</p>
          </button>
        </div>
      </div>
    </div >


  );
};

export default ModifyCourseScreen;
