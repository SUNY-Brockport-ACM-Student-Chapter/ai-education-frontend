import React from "react";
import "./component-style.css";

interface ProfileIconProps {
  initials: string;
  className?: string;
}

const ProfileIcon: React.FC<ProfileIconProps> = ({ initials, className = "" }) => {
  return <div className={`profile-icon ${className}`}>{initials}</div>;
};

export default ProfileIcon;
