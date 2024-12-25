"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Header from "../../../components/Header";
import ExamExit from "../../../components/ExamExit";

import Link from "next/link";
import Popup from "reactjs-popup";
import exp from "constants";

const Page: React.FC = () => {
  const pageTitle = "Exam - Attempt 1";
  /* Set page title here, displayed in Header */

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className={styles.Container}>
      <Header pageTitle={pageTitle} />
      <div className="main-workspace">
        {/* Add your content within the main-workspace div */}
        <Link href="../course">Back to Course</Link>
        <Link href="./ai_review">AI Review</Link>
        <>
          <ExamExit />
        </>

        <p>
          To Add: fix layout, bring the different views into a folder inside student/exam/ai_review
          called components or views or something. Popup if attempting to exit the exam, cancel just
          closes it and continue takes you to where you clicked.
        </p>
      </div>
    </div>
  );
};

export default Page;
