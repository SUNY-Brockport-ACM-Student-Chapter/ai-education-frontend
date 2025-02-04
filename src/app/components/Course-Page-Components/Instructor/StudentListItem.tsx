import React from "react";

interface StudentListItemProps {
  name: string;
  email: string;
}

const StudentListItem: React.FC<StudentListItemProps> = ({ name, email }) => {
  return (
    <div className="student-list-item">
      <div>{name}</div>
      <div>{email}</div>
    </div>
  );
};

export default StudentListItem;
