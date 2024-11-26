'use client';

import React, { useState } from 'react';
import styles from "../page.module.css";
import Header from '../components/Header';
import PrevNext from '../components/PrevNext';
import QuestionList from '../components/QuestionList';
import ExamExit from '../components/ExamExit';

import Popup from 'reactjs-popup';

const Page: React.FC = () => {
  const pageTitle = "jayden fanpage";

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <ExamExit />
    </>
  );
};

export default Page;