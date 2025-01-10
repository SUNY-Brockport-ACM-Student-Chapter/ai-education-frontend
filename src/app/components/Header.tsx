"use client";

import React from "react";
import ProfileIcon from "./ProfileIcon";
import { useUser } from "../utils/UserContext";
import "./component-style.css";
import { SignedIn, SignOutButton } from '@clerk/nextjs';

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
      <SignedIn>
        <div className="profile-section">
          <ProfileIcon initials={userInitials} />
          <div className="profile-text">
            <p>Welcome,</p>
            <p>{userName}</p>
          </div>
        <SignOutButton>
          <button className="sign-out-button">
            Sign Out
          </button>
        </SignOutButton>
        </div>
      </SignedIn>
    </header>
  );
};

export default Header;
