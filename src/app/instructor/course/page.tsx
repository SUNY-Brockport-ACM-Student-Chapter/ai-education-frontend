import React from "react";
import styles from "./page.module.css";
import Header from "../../components/Header";
import Link from "next/link";

const Page: React.FC = () => {
  const pageTitle = "Course";
  /* Set page title here, displayed in Header */

  return (
    <div className={styles.Container}>
      <Header pageTitle={pageTitle} />
      <div className="main-workspace">
        <h2>home tab</h2>
        <Link href="./modify_course">Modify Course</Link>

        <h2>exam tab</h2>
        <Link href="./exam_submissions">Exam Submissions</Link>
        <Link href="./create_exam">Create Exam</Link>
        <Link href="./modify_exam">Modify Exam</Link>

        <h2>student tab</h2>
        <Link href="./manage_enrollment">Manage Enrollment</Link>

        <p>
          To add: tab nav bar for Home/Exams/Students, components for each page, keep "view"
          components in Course folder, under a Components folder
        </p>
        <p>
          Home view: upcoming exams slider, course "information" panel, yellow edit course button.
        </p>
        <p>Exam view: List of exams for the course, yellow Add Exam button, see figma</p>
        <p>
          Student View: list of students with "edit enrollment" button. This should direct to the
          Manage Courses page, with the current course already selected, showing the enrollment.
        </p>
      </div>
    </div>
  );
};

export default Page;
