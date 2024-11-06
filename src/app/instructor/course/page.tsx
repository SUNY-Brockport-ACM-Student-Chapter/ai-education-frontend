import React from 'react';
import styles from "./page.module.css";
import Header from '../../components/Header';

const Page: React.FC = () => {
  const pageTitle = "Course";
  /* Set page title here, displayed in Header */

  return (
    <div className={styles.Container}>
      <Header pageTitle={pageTitle} />
      <div className="main-workspace">
      </div>
    </div>
  );
};

export default Page;

