import React from 'react';
import ProfileIcon from './ProfileIcon';

interface HeaderProps {
  pageTitle: string;
  userName: string;
  userInitials: string;
}

const Header: React.FC<HeaderProps> = ({ pageTitle, userName, userInitials }) => {
  return (
    <header className="main-header">
      <div className="header-section">
        <h1>{pageTitle}</h1>
      </div>
      <div className="profile-section">
        <ProfileIcon initials={userInitials} />
        <div className="profile-text">
          <p>Welcome,</p>
          <p>{userName}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;