import React from "react";
import styles from "./page.module.css";
import Header from "../../../components/Header";
import Link from "next/link";

const Page: React.FC = () => {
  const pageTitle = "Exam - Attempt 2";
  /* Set page title here, displayed in Header */

  return (
    <div className={styles.Container}>
      <Header pageTitle={pageTitle} />
      <div className="main-workspace">
        {/* Add your content within the main-workspace div */}
        <Link href="../course">Back to Course</Link>
        <p>
          To Add: fix layout, bring the different views into a folder inside student/exam/ai_review
          called components or views or something. Popup if attempting to exit the exam, cancel just
          closes it and continue takes you to where you clicked. Also, dont forget the Reflection
          question.
        </p>
      </div>
    </div>
  );
};

export default Page;
