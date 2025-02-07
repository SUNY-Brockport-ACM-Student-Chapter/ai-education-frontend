import React from "react";
import "./page.module.css";
import Header from "../../../components/Nav-Header/Header";
import Link from "next/link";
import PrevNext from "../../../components/Exam-Components/PrevNext";
import ExamQuestion from "../../../components/Exam-Components/ExamQuestion";
import QuestionList from "../../../components/Exam-Components/QuestionList";
import ExamAIFeedback from "../../../components/Exam-Components/ExamAIFeedback";

const Page: React.FC = () => {
  const pageTitle = "AI Review - Exam 1";
  /* Set page title here, displayed in Header */

  return (
    <div>
      <Header pageTitle={pageTitle} />
      <div className="main-workspace">
        <div className="question-pages">
          <div className="exam-question-questionbox menu-panel">
            <ExamQuestion
              questionNum={2}
              question="What is the difference between supervised, unsupervised, and reinforcement learning?"
            />
            <ExamAIFeedback questionFeedback="Your response is on the right track, but try to focus more on what makes each type of learning distinct. Think about how they handle data differently—does the model get clear answers to learn from, or does it have to find patterns on its own? Also, consider how the learning process works in each case. Refining these points will make your explanation clearer and more complete."
            agreementToggle={false} />
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
