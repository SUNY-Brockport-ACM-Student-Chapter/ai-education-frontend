import React from "react";
import styles from "./page.module.css";
import Header from "../../../components/Header";

const Page: React.FC = () => {
  const pageTitle = "Manage Enrollment";
  /* Set page title here, displayed in Header */

  return (
    <div className={styles.Container}>
      <Header pageTitle={pageTitle} />
      <div className="main-workspace">
        {/* Add your content within the main-workspace div */}
        <p>
          To Add: student list with checkboxes, and a "remove students" button. Popup for removing
          students. Add students button on page, which will be a different view for adding students
          with a confirmation popup for adding to the course.
        </p>
      </div>
    </div>
  );
};

export default Page;
