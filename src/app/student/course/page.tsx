"use client";

import React, { useState } from 'react';
import styles from "../../page.module.css";
import Header from '../../components/Header';

const Page: React.FC = () => {
  const pageTitle = "Course";
  const [activeTab, setActiveTab] = useState('homepage');

  return (
    <div className={styles.Container}>
      <Header pageTitle={pageTitle} />
      <div className="main-workspace">
        <nav>
          <button onClick={() => setActiveTab('homepage')}>Homepage</button>
          <button onClick={() => setActiveTab('examList')}>Exam List</button>
        </nav>
        <div>
          {activeTab === 'homepage' && <Homepage />}
          {activeTab === 'examList' && <ExamList />}
        </div>
      </div>
    </div>
  );
};

function Homepage() {
  return <div>Welcome to the Course Homepage</div>;
}

function ExamList() {
  return <div>Here is the list of exams</div>;
}

export default Page;
