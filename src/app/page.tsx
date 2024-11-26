import React from 'react';
import styles from "./page.module.css";
import Header from './components/Header';
import Link from 'next/link';

const Page: React.FC = () => {
  const pageTitle = "this is the page now";
  /* Set page title here, displayed in Header */

  return (
    <div className={styles.Container}>
      <Header pageTitle={pageTitle} />
      <div className="main-workspace">
        {/* Add your content within the main-workspace div */}
        <Link href="/student/dashboard">Student Dashboard  </Link>
        
        <Link href="/instructor/dashboard">Instructor Dashboard</Link>
      </div>
    </div>
  );
};

export default Page;