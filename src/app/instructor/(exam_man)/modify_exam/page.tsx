import React from "react";
import styles from "./page.module.css";
import Header from "../../../components/Header";

const Page: React.FC = () => {
  const pageTitle = "Modify Exam";
  /* Set page title here, displayed in Header */

  return (
    <div className={styles.Container}>
      <Header pageTitle={pageTitle} />
      <div className="main-workspace">
        {/* Add your content within the main-workspace div */}
        <p>
          To Add: Exam details form autofilled with current info, with option to delete exam with
          popup confirmation warning it will remove all submissions as well. returns user to exam
          list.
        </p>
      </div>
    </div>
  );
};

export default Page;
