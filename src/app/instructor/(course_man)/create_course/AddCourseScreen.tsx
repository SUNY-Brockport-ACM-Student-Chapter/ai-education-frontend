"use client";

import React, { useState, useEffect } from "react";
import "../../../components/component-style.css";
import Link from "next/link";

const AddCourseScreen = () => {

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

  return (
    <div>
      <div className="instructor-add-course">
        <div className="instructor-add-course-background-panel">
          <h3>Course Name</h3>
          <div className="course-name">
            <input type="text" id="instructor-add-course-name-input" />
          </div>
        </div>
        <div className="instructor-add-course-background-panel">
          <h3>Course Code (CRN)</h3>
          <div className="course-name">
            <input type="text"
              id="instructor-add-course-code-input"
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
        <div className="instructor-add-course-background-panel">
          <h3>Course Description</h3>
          <div className="course-name">
            <textarea id="instructor-add-course-description-input" rows={4} cols={10}></textarea>
          </div>
        </div>
        <div className="instructor-add-course-background-panel">
          <h3>Course Capacity</h3>
          <div className="course-name">
            <input type="text"
              id="instructor-add-course-capacity-input"
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
        <div className="instructor-add-course-background-panel">
          <h3>Course Start/End Dates</h3>
          <div className="course-name">
            <input
              type="date"
              id="instructor-add-course-start-date"
              onChange={handleStartDateChange}
              min={startDate}
            />
            <span>-</span>
            <input
              type="date"
              id="instructor-add-course-end-date"
              min={endDateMin}
            />
          </div>
        </div>
      </div>
      <div className="instructor-add-course-buttons">
        <Link href="./manage_courses" passHref>
          <button className="instructor-add-course-cancel">
            <p>Cancel</p>
          </button>
        </Link>
        <button className="instructor-add-course-submit" onClick={handleSubmitClick}>
          <p>Add Course</p>
        </button>
      </div>
    </div >


  );
};

export default AddCourseScreen;
