import React from "react";
import styles from "./page.module.css";
import Header from "../../components/Header";
import Link from "next/link";

const Page: React.FC = () => {
  const pageTitle = "Dashboard";
  /* Set page title here, displayed in Header */

  return (
    <div className={styles.Container}>
      <Header pageTitle={pageTitle} />
      <div className="main-workspace">
        {/* Add your content within the main-workspace div */}
        <p>
          FOR ALL PAGES: Remember to provide buttons to return to the previous page, or to dashboard
          if needed, in just about every page.
        </p>
        <Link href="./manage_users">Manage Users</Link>
        <Link href="./manage_courses">Manage Course</Link>

        <Link href="./course">Course</Link>
        <p>To add: My Courses horizontal slider, yellow buttons for Manage courses/users. </p>
      </div>
    </div>
  );
};

export default Page;
