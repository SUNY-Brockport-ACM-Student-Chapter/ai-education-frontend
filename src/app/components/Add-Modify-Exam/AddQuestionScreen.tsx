"use client";

import React, { useState } from "react";
import "./add-modify-exam.css";

interface AddQuestionScreenProps {
  onBack: () => void;
  onSave: () => void;
}

const AddQuestionScreen: React.FC<AddQuestionScreenProps> = ({ onBack, onSave }) => {
  const [questions, setQuestions] = useState([{ id: 1, questionText: "", answer: "" }]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAddQuestion = () => {
    const newQuestion = { id: questions.length + 1, questionText: "", answer: "" };
    setQuestions([...questions, newQuestion]);
    setCurrentIndex(questions.length);
  };

  const handleQuestionChange = (field: string, value: string) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q, index) =>
        index === currentIndex ? { ...q, [field]: value } : q
      )
    );
  };

  return (
    <div className="add-exam-question">
      <h3>Question {currentIndex + 1}</h3>
      <div className="add-exam-question-container">
        <div className="question-block">
          <div className="menu-panel question">
            <h2>Question:</h2>
            <textarea
              placeholder="Enter question"
              value={questions[currentIndex].questionText}
              onChange={(e) => handleQuestionChange("questionText", e.target.value)}
            />
          </div>

          <div className="menu-panel answer">
            <h2>Answer:</h2>
            <textarea
              placeholder="Enter answer"
              value={questions[currentIndex].answer}
              onChange={(e) => handleQuestionChange("answer", e.target.value)}
            />
          </div>
        </div>
        <div className="menu-panel question-box">
          <h3>Question List</h3>
          <div className="question-box-inside">
            {questions.map((q, index) => (
              <button
                key={q.id}
                className="question-button"
                onClick={() => setCurrentIndex(index)}
              >
                <p>{index + 1}</p>
              </button>
            ))}
            <button className="question-button" onClick={handleAddQuestion}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQuestionScreen;


