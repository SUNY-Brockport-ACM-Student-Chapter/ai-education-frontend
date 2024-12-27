import React from "react";
import styles from "./page.module.css";
import Header from "../../../components/Header";

const Page: React.FC = () => {
  const pageTitle = "Student Submission";
  /* Set page title here, displayed in Header */

  return (
    <div className={styles.Container}>
      <Header pageTitle={pageTitle} />
      <div className="main-workspace">
        {/* Add your content within the main-workspace div */}
        <p>
          To Add: view very similar to taking the exam, can probably get rid of the exam's intro
          screen for viewing submissions. First attempt submissions show the AI feedback as well,
          with a flag IF the student disagreed with the results. question list card panel on the
          side. green card for score of 1 or 2, yellow for score of 0 out of 2, and maybe a red
          outline on the card if the question was flagged for disagreeing with the AI. previous and
          next question buttons until the end, then only previous or finish review buttons. Attempt
          2 should only have the student's response. one question added for the Reflection at the
          end of the second attempt. Maybe the question "number" should be R on the question card
          list? Keep it green if reflection was provided and yellow if not. No red outlines for
          flagging during second attempt submission viewing since theres no AI feedback for that
          attempt.
        </p>
      </div>
    </div>
  );
};

export default Page;
