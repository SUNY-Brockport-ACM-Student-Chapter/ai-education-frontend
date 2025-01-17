import React from "react";
import styles from "./page.module.css";
import Header from "../../components/Header";

import PrevNext from "@/app/components/PrevNext";
import CourseList from "@/app/components/DashboardCourseList";
import Link from "next/link";

const Page: React.FC = () => {
  const pageTitle = "Dashboard";
  /* Set page title here, displayed in Header */

  return (
    <div className={styles.Container}>
      <Header pageTitle={pageTitle} />
      <div className="main-workspace">
        {/* Add your content within main-workspace div */}
        <CourseList></CourseList>
        <p>
          To Add: Courselist slider currently showing exams? Should be just slider for courses. Each
          card directs to a course page. Also fix course slider width to fit inside screen width.
        </p>
        <Link href="./course">Course</Link>
      </div>
    </div>
  );
};

export default Page;
