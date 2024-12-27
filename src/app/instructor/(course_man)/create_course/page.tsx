import React from "react";
import styles from "./page.module.css";
import Header from "../../../components/Header";

const Page: React.FC = () => {
  const pageTitle = "Create Course";
  /* Set page title here, displayed in Header */

  return (
    <div className={styles.Container}>
      <Header pageTitle={pageTitle} />
      <div className="main-workspace">
        {/* Add your content within the main-workspace div */}
        <p>To Add: form for course creation (see figma)</p>
      </div>
    </div>
  );
};

export default Page;
