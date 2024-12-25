import React from "react";
import styles from "./page.module.css";
import Header from "../../../components/Header";

const Page: React.FC = () => {
  const pageTitle = "Manage Users";
  /* Set page title here, displayed in Header */

  return (
    <div className={styles.Container}>
      <Header pageTitle={pageTitle} />
      <div className="main-workspace">
        {/* Add your content within the main-workspace div */}
        <p>
          To add: Manage Students and Manage Instructors panels. See figma for design. Also, popup
          for confirm setting instructor as admin. Maybe keep these components in this Manage User
          page folder?
        </p>
      </div>
    </div>
  );
};

export default Page;
