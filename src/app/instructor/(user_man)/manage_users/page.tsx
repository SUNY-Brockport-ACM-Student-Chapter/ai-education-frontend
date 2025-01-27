import React from "react";
import styles from "./page.module.css";
import Header from "../../../components/Header";
import ManageInstructorPanel from "./components/manage-instructors-panel"
import ManageStudentsPanel from "./components/manage-students-panel"

const Page: React.FC = () => {
  const pageTitle = "Manage Users";
  /* Set page title here, displayed in Header */

  return (
    <div className={styles.Container}>
      <Header pageTitle={pageTitle} />
      <div className="main-workspace">
        {/* Add your content within the main-workspace div */}
        <ManageInstructorPanel></ManageInstructorPanel>
        <ManageStudentsPanel></ManageStudentsPanel>
        <p>
          To add: Popups for setting inactive and admin, fix forms into proper get/post
        </p>
      </div>
    </div>
  );
};

export default Page;
