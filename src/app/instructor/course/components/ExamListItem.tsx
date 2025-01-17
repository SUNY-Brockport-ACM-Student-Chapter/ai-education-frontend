import React from "react";
import Link from "next/link";

interface ExamListItemProps {
  examName: string;
  dueDate: string;
  attempts: number;
}

const ExamListItem: React.FC<ExamListItemProps> = ({ examName, dueDate, attempts }) => {
  const isDueDateInFuture = new Date(dueDate) >= new Date();

  return (
    <div className="instructor-exam-list-item">
      <div>{examName}</div>
      <div>{attempts}/20</div>
      <div>{dueDate}</div>

      <div className="instructor-actions">

        <Link href="./exam_submissions">
          <button className="active">
            Submissions
          </button>
        </Link>
        <Link href="./modify_exam">
          {isDueDateInFuture ? (
            <button className="active">Modify</button>
          ) : (
            <button className="inactive" disabled>
              Modify
            </button>
          )}
        </Link>
      </div>
    </div>
  );
};

export default ExamListItem;
