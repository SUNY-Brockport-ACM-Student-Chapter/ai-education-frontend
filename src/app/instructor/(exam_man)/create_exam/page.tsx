import React from "react";
import styles from "./page.module.css";
import Header from "../../../components/Header";

const Page: React.FC = () => {
  const pageTitle = "Create Exam";
  /* Set page title here, displayed in Header */

  return (
    <div className={styles.Container}>
      <Header pageTitle={pageTitle} />
      <div className="main-workspace">
        {/* Add your content within the main-workspace div */}
        <p>
          To Add: Multiple views, keep each view component in a folder called Components or Views in
          this create_exam folder. One view is for exam details (see figma), next view is for add
          question with list of created questions on the side for looking through them. (see figma),
          final view is the confirmation similar to the intro screen to taking an exam, but "save
          exam" is the continue option, and a go back button. on saving exam, popup confirming that
          the questions CANNOT be changed after saving. returns user to exam list.
        </p>
      </div>
    </div>
  );
};

export default Page;
