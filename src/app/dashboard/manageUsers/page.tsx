import React from 'react';
import styles from "../../page.module.css";
import Header from '../../components/Header';
import PrevNext from '../../components/PrevNext';
import QuestionList from '../../components/QuestionList';

const Page: React.FC = () => {
  const pageTitle = "Module thing";
  /* Set page title here, displayed in Header */

  return (
    <div className={styles.Container}>
      <Header pageTitle={pageTitle} />
      <div className="main-workspace">
        {/* Add your content within the main-workspace div */}
        <PrevNext />
      </div>
    </div>
  );
};

export default Page;

