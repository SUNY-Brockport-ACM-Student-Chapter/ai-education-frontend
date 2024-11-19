import React from 'react';
import styles from "./page.module.css";
import Header from '../../components/Header';
import Link from 'next/link';

const Page: React.FC = () => {
  const pageTitle = "Dashboard";
  /* Set page title here, displayed in Header */

  return (
    <div className={styles.Container}>
      <Header pageTitle={pageTitle} />
      <div className="main-workspace">
        {/* Add your content within the main-workspace div */}
        <Link href="./manage_users">Manage Users</Link>
        <Link href="./manage_courses">Manage Course</Link>
        <Link href="./manage_exams">Manage Exam</Link>

        <Link href="./course">Course</Link>
      </div>
    </div>
  );
};

export default Page;

