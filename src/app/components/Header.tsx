"use client";

import React from "react";
import { useUser } from "../utils/UserContext";
import "./component-style.css";
import { SignedIn, SignOutButton } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

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
          <UserButton
            appearance={{
              elements: {
                avatarBox: {
                  width: "60px",
                  height: "60px",
                },
              },
            }}
          />
        </div>
      </SignedIn>
    </header>
  );
};

export default Header;
