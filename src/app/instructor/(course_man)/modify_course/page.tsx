import React from "react";
import styles from "./page.module.css";
import Header from "../../../components/Header";
//import ModifyCourseScreen from "./ModifyCourseScreen";

const Page: React.FC = () => {
  const pageTitle = "Modify Course";
  /* Set page title here, displayed in Header */

  return (
    <div className={styles.Container}>
      <Header pageTitle={pageTitle} />
      <div className="main-workspace">
        <p>
          To Add: same as Create Course form, but auto-filled with information. Button to set
          inactive available as well with popup confirmation.
        </p>
      </div>
    </div>
  );
};

export default Page;
