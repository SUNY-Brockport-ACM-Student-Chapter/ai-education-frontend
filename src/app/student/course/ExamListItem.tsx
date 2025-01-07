import React from "react";

interface ExamListItemProps {
  examName: string;
  dueDate: string;
  attempts: number;
}

const ExamListItem: React.FC<ExamListItemProps> = ({ examName, dueDate, attempts }) => {
  const isFirstAttempt = attempts === 0;
  const isSecondAttempt = attempts === 1;
  const noMoreAttempts = attempts === 2;

  const handleTakeExamClick = () => {
    if (isFirstAttempt) {
      window.location.href = "./exam/attempt_1";
    } else if (isSecondAttempt) {
      window.location.href = "./exam/attempt_2";
    }
  };
  return (
    <div className="student-exam-list-item">
      <div>{examName}</div>
      <div>{dueDate}</div>
      <div>{attempts}/2</div>
      <div className="actions">

        <button
          disabled={noMoreAttempts}
          onClick={handleTakeExamClick}
          className={noMoreAttempts ? "inactive" : "active"}
        >
          Take Exam
        </button>

        <button
          disabled={isFirstAttempt}
          onClick={() => (window.location.href = "./exam/ai_review")}
          className={isFirstAttempt ? "active" : "inactive"}
        >
          AI Review
        </button>
      </div>
    </div>
  );
};

export default ExamListItem;
