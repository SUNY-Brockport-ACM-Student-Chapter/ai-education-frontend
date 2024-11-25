import React from 'react';
import styles from "./page.module.css";
import Header from '../../../components/Header';
import Link from 'next/link';

const Page: React.FC = () => {
  const pageTitle = "Exam - AI Review";
  /* Set page title here, displayed in Header */

  return (
    <div className={styles.Container}>
      <Header pageTitle={pageTitle} />
      <div className="main-workspace">
        {/* Add your content within the main-workspace div */}
        <Link href="../course">Back to Course</Link>
        <Link href="./attempt_2">Begin 2nd Attempt</Link>
      </div>
    </div>
  );
};

export default Page;

