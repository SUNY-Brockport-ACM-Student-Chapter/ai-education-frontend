import React from "react";
import styles from "./page.module.css";
import Header from "../../../components/Nav-Header/Header";
import AddCourseScreen from "../../../components/Add-Modify-Course/AddCourseScreen";

const Page: React.FC = () => {
  const pageTitle = "Create Course";
  /* Set page title here, displayed in Header */

  return (
    <div className={styles.Container}>
      <Header pageTitle={pageTitle} />
      <div className="main-workspace">
        <AddCourseScreen />
      </div>
    </div>
  );
};

export default Page;
