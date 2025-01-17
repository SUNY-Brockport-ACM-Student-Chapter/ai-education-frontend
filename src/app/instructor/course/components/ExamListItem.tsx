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

        <Link href="./exam_submissions" className="link-button">
          <button>
            Submissions
          </button>
        </Link>

         {isDueDateInFuture ? (
          <Link href="./modify_exam" className="link-button">
            <button className="active">Modify</button>
          </Link>
        ) : (
          <button className="inactive" disabled>
            Modify
          </button>
        )}
      </div>
    </div>
  );
};

export default ExamListItem;
