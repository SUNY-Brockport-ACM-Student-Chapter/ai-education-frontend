import React from "react";
import styles from "./page.module.css";
import Header from "../../../components/Header";
import Link from "next/link";
import PrevNext from "../../../components/PrevNext";
import ExamPageInfoBox from "../../../components/ExamPageInfoBox";
import ExamPageButtons from "../../../components/ExamPageButtons";
import ExamQuestion from "../../../components/ExamQuestion";
import QuestionList from "../../../components/QuestionList";
import ExamAIFeedback from "../../../components/ExamAIFeedback";

const Page: React.FC = () => {
  const pageTitle = "AI Review";
  /* Set page title here, displayed in Header */

  return (
    <div className={styles.Container}>
      <Header pageTitle={pageTitle} />
      <div className="main-workspace">
        <p>
          To Add: fix layout, bring the different views into a folder inside student/exam/ai_review
          called components or views or something. Popup if attempting to exit the exam, cancel just
          closes it and continue takes you to where you clicked.
        </p>
        {/* Add your content within the main-workspace div */}
        {/*<PrevNext />*/}
        {/* <ExamPageInfoBox examNum={2} courseName='CSS 101' examDesc='Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.' startDate='10/2/32' endDate='10/9/32' attemptNum={1} /> */}
        {/* <ExamPageButtons/> */}
        <div className="question_page1">
          <ExamQuestion
            questionNum={2}
            question="Why do they call it oven when you of in the cold food of out hot eat the food?"
          />
          <ExamAIFeedback questionFeedback="Eat the food" agreementToggle={false} />
        </div>
        <div className="question_page2">
          <QuestionList />
          <PrevNext />
        </div>
        <Link href="../course">Back to Course</Link>
        <Link href="./attempt_2">Begin 2nd Attempt</Link>
      </div>
    </div>
  );
};

export default Page;
