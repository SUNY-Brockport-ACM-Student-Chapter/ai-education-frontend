'use client';

import React, { useState, useEffect } from 'react';
import ProfileIcon from './ProfileIcon';

interface NavMenuProps {
  userName: string;
  userInitials: string;
}

const NavMenu: React.FC<NavMenuProps> = ({ userName, userInitials }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 680);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav className="sidebar-nav">
      <div className="logo-section">
        <ProfileIcon initials={userInitials} className="mobile-profile-icon" />
        <h1>EduAlly</h1>
        <label className="burger-bar-dropdown">
          <input 
            type="checkbox" 
            checked={menuVisible}
            onChange={toggleMenu}
          />
          <i className="fas fa-bars"></i>
        </label>
      </div>
      <div className={`menu-section nav-section ${(menuVisible || !isMobile) ? 'visible' : ''}`}>
        <button className="nav-button"><i className="fas fa-cubes"></i>Dashboard</button>
        <button className="nav-button"><i className="fas fa-check-circle"></i>Courses</button>
        <button className="nav-button mobile-settings-button"><i className="fas fa-cog"></i>Settings</button>
      </div>
      <div className="settings-section nav-section">
        <button className="nav-button"><i className="fas fa-cog"></i>Settings</button>
      </div>
    </nav>
  );
};

export default NavMenu;