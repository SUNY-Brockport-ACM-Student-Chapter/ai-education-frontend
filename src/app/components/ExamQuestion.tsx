import React from "react";
import "./component-style.css";

interface ExamQuestionProps {
  questionNum: number;
  question: string;
}

const ExamQuestion: React.FC<ExamQuestionProps> = ({ questionNum, question }) => {
  return (
    <div className="exam-questionbox">
      <h3>Question {questionNum}</h3>
      <p>{question}</p>
      <form className="question-textbox">
        <textarea id="questionInput" placeholder="Enter your answer here"></textarea>
      </form>
    </div>
  );
};

export default ExamQuestion;
