import React from "react";
import Link from "next/link";

interface StudentListItemProps {
  name: string;
  email: string;
}

const StudentListItem: React.FC<StudentListItemProps> = ({ name, email }) => {
  return (
    <div className="instructor-student-list-item">
      <div>{name}</div>
      <div>{email}</div>
    </div>
  );
};

export default StudentListItem;
