'use client';

import React from 'react';
import ProfileIcon from './ProfileIcon';
import { useUser } from '../utils/UserContext';
import './component-style.css';

interface HeaderProps {
  pageTitle: string;
}

const Header: React.FC<HeaderProps> = ({ pageTitle }) => {
  const { userName, userInitials } = useUser();

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