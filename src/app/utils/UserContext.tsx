"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { generateInitials } from "./utilities";

interface UserContextType {
  userName: string;
  userInitials: string;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ userName: string; children: ReactNode }> = ({
  userName,
  children,
}) => {
  const userInitials = generateInitials(userName);

  return <UserContext.Provider value={{ userName, userInitials }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
