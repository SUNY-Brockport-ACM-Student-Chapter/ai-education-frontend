import React from "react";
import Link from "next/link";
import { useUser } from "@clerk/clerk-react";

interface ExamListItemProps {
  examName: string;
  dueDate: string;
  attempts: number;
}

const ExamListItem: React.FC<ExamListItemProps> = ({ examName, dueDate, attempts }) => {
  const { user } = useUser();
  const role = user?.publicMetadata?.role;
  const isInstructor = role === "instructor";

  return (
    <div className="exam-list-item">
      <div>{examName}</div>
      {isInstructor && <div>{attempts}/20</div>}
      <div>{dueDate}</div>
      <div className="actions">
        {isInstructor ? (
          <>
            <Link href="./exam_submissions">
              <button className="active">Submissions</button>
            </Link>
            <Link href="./modify_exam">
              <button className="active">Modify</button>
            </Link>
          </>
        ) : (
          <>
            <button
              disabled={attempts === 2}
              onClick={() =>
                (window.location.href = `../../student/exam/attempt_${attempts === 0 ? 1 : 2}`)
              }
            >
              {attempts === 0 ? "Attempt 1" : attempts === 1 ? "Attempt 2" : "No Attempts Left"}
            </button>

            <button
              disabled={attempts === 0}
              onClick={() => (window.location.href = "./exam/ai_review")}
            >
              AI Review
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ExamListItem;
