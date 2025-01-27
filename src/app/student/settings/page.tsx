import React from "react";
import styles from "./page.module.css";
import Header from "../../components/Header";
import { UserProfile } from "@clerk/nextjs";

const Page: React.FC = () => {
  const pageTitle = "Settings";
  /* Set page title here, displayed in Header */

  return (
    <div className={styles.Container}>
      <Header pageTitle={pageTitle} />
      <div className="main-workspace">
        <UserProfile />
      </div>
    </div>
  );
};

export default Page;
