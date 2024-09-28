'use client'

import './globals.css';
import { useState, useEffect } from 'react';

interface NavMenuProps {
  ProfName: string;
  AB: string;
}

export default function NavMenu({ ProfName, AB }: NavMenuProps) {
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
        <div className="mobile-profile-icon">{AB}</div>
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
}