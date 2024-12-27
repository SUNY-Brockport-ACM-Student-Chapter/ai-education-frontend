import React from "react";
import styles from "./page.module.css";
import Header from "../../../components/Header";
import Link from "next/link";

const Page: React.FC = () => {
  const pageTitle = "Exam Submissions";
  /* Set page title here, displayed in Header */

  return (
    <div className={styles.Container}>
      <Header pageTitle={pageTitle} />
      <div className="main-workspace">
        {/* Add your content within the main-workspace div */}
        <Link href="./student_submission">Student Submissions</Link>
        <p>To Add: list of student submissions, see figma.</p>
      </div>
    </div>
  );
};

export default Page;
