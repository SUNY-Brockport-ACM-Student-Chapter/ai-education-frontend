import React from "react";
import styles from "./page.module.css";
import Header from "../../../components/Header";
import Link from "next/link";

const Page: React.FC = () => {
  const pageTitle = "Manage Courses";
  /* Set page title here, displayed in Header */

  return (
    <div className={styles.Container}>
      <Header pageTitle={pageTitle} />
      <div className="main-workspace">
        {/* Add your content within the main-workspace div */}
        <Link href="./create_course">Create Course</Link>
        <Link href="./modify_course">Modify Course</Link>
        <p>
          To Add: Their courses list, link to modify each course in the list, buttons up top for
          return to dashbaord and create course.
        </p>
      </div>
    </div>
  );
};

export default Page;
