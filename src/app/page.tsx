import React from 'react';
import styles from "./page.module.css";
import Header from './components/Header';
import PrevNext from './components/PrevNext';
import QuestionList from './components/QuestionList';
import ExamPageInfoBox from './components/ExamPageInfoBox';
import ExamPageButtons from './components/ExamPageButtons';

const Page: React.FC = () => {
  const pageTitle = "Milk Cubed";
  /* Set page title here, displayed in Header */

  return (
    <div className={styles.Container}>
      <Header pageTitle={pageTitle} />
      <div className="main-workspace">
        {/* Add your content within the main-workspace div */}
        {/*<QuestionList />*/}
        {/*<PrevNext />*/}
        <ExamPageInfoBox examNum={2} courseName='CSS 101' examDesc='Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.' startDate='10/2/32' endDate='10/9/32' attemptNum={1} />
        <ExamPageButtons/>
      </div>
    </div>
  );
};

export default Page;

