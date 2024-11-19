import React from 'react';
import styles from "./page.module.css";
import Header from '../../../components/Header';
import Link from 'next/link';

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

      </div>
    </div>
  );
};

export default Page;

