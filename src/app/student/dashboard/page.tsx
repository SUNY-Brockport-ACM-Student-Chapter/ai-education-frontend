import React from 'react';
import styles from "./page.module.css";
import Header from '../../components/Header';
import PrevNext from '@/app/components/PrevNext';
import CourseList from '@/app/components/CourseList';

const Page: React.FC = () => {
  const pageTitle = "Dashboard";
  /* Set page title here, displayed in Header */

  return (
    <div className={styles.Container}>
      <Header pageTitle={pageTitle} />
      <div className="main-workspace">
        {/* Add your content within the main-workspace div */}
        <CourseList></CourseList>
      </div>
    </div>
  );
};

export default Page;

