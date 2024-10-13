import React from 'react';

interface ProfileIconProps {
  initials: string;
  className?: string;
}

const ProfileIcon: React.FC<ProfileIconProps> = ({ initials, className = '' }) => {
  return (
    <div className={`profile-icon ${className}`}>
      {initials}
    </div>
  );
};

export default ProfileIcon;