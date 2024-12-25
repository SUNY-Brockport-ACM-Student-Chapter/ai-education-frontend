import React from "react";
import styles from "./page.module.css";
import Header from "./components/Header";
import Link from "next/link";
const Page: React.FC = () => {
  const pageTitle = "landing page";
  /* Set page title here, displayed in Header */

  return (
    /* DO NOT WORK ON DEEPER PAGES ON THIS PAGE! WILL CAUSE ISSUES WHEN MERGING, THANK YOU! */

    <div className={styles.Container}>
      <Header pageTitle={pageTitle} />
      <div className="main-workspace">
        <p>Temporary Navigation Links</p>
        <Link href="/student/dashboard">Student Dashboard </Link>

        <Link href="/instructor/dashboard">Instructor Dashboard</Link>
        <p>
          To Add: Clerk integration, make this the login page. Also, clear nav bar somehow. Can't go
          to dashboard, courses, or settings from here since you're not even logged in.
        </p>
      </div>
    </div>
  );
};

export default Page;
