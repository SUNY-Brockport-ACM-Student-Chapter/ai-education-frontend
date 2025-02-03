import React from "react";
import styles from "./page.module.css";
import Header from "../../components/Nav-Header/Header";
import Link from "next/link";
import InstructorCourseNavBar from "../../components/Course-Page-Components/Instructor/InstructorCourseNavBar";

const Page: React.FC = () => {
  const pageTitle = "Intro to Computing";
  /* Set page title here, displayed in Header */

  return (
    <div className={styles.Container}>
      <Header pageTitle={pageTitle} />
      <div className="main-workspace">
        <InstructorCourseNavBar />
      </div>
    </div>
  );
};

export default Page;