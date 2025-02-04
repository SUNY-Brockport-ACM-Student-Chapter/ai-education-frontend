import React from "react";
import styles from "./page.module.css";
import Header from "../../../components/Nav-Header/Header";
import Link from "next/link";
import PrevNext from "../../../components/Exam-Components/PrevNext";
import ExamQuestion from "../../../components/Exam-Components/ExamQuestion";
import QuestionList from "../../../components/Exam-Components/QuestionList";
import ExamAIFeedback from "../../../components/Exam-Components/ExamAIFeedback";

const Page: React.FC = () => {
  const pageTitle = "AI Review";
  /* Set page title here, displayed in Header */

  return (
    <div className={styles.Container}>
      <Header pageTitle={pageTitle} />
      <div className="main-workspace">
        <div className="question-page">
          <div className="exam-question-questionbox menu-panel">
            <ExamQuestion
              questionNum={2}
              question="Why do they call it oven when you of in the cold food of out hot eat the food?"
            />
            <ExamAIFeedback questionFeedback="Eat the food" agreementToggle={false} />
          </div>
          <div className="exam-question-info menu-panel">
            <QuestionList />
            <PrevNext />
          </div>
        </div>
        <p>
          To Add: fix layout, bring the different views into a folder inside student/exam/ai_review
          called components or views or something. Popup if attempting to exit the exam, cancel just
          closes it and continue takes you to where you clicked.
        </p>
        <Link href="../course">Back to Course</Link>
        <Link href="./attempt_2">Begin 2nd Attempt</Link>
      </div>
    </div>
  );
};

export default Page;
