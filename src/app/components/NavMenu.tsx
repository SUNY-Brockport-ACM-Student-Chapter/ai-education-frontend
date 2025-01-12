"use client";
import React, { useState, useEffect } from "react";
import { useUser } from "../utils/UserContext";
import "./component-style.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignedIn } from '@clerk/nextjs';

const NavMenu: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [userRole, setUserRole] = useState<"student" | "instructor">("student");
  const { userInitials } = useUser();
  const pathname = usePathname();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 680);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Determine user role based on current path
  useEffect(() => {
    if (pathname?.startsWith("/instructor")) {
      setUserRole("instructor");
    } else if (pathname?.startsWith("/student")) {
      setUserRole("student");
    }
  }, [pathname]);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const navLinks =
    userRole === "instructor"
      ? [
        { href: "/instructor/dashboard", label: "Dashboard", icon: "fa-cubes" },
        { href: "/instructor/course", label: "Courses", icon: "fa-check-circle" },
        { href: "/instructor/settings", label: "Settings", icon: "fa-cog" },
      ]
      : [
        { href: "/student/dashboard", label: "Dashboard", icon: "fa-cubes" },
        { href: "/student/course", label: "Courses", icon: "fa-check-circle" },
        { href: "/student/settings", label: "Settings", icon: "fa-cog" },
      ];

  const settingsLink = navLinks.find((link) => link.label === "Settings");

  return (

    <SignedIn>
      <nav className="sidebar-nav">
        <div className="logo-section">
          
            <h1>EduAlly</h1>

          <label className="burger-bar-dropdown">
            <input type="checkbox" checked={menuVisible} onChange={toggleMenu} />
            <i className="fas fa-bars"></i>
          </label>
        </div>

        <div className={`menu-section nav-section ${menuVisible || !isMobile ? "visible" : ""}`}>
          {navLinks.map(
            (link, index) =>
              // Skip Settings in the main menu section for non-mobile
              link.label !== "Settings" && (
                <Link href={link.href} key={index}>
                  <button className="nav-button">
                    <i className={`fas ${link.icon}`}></i>
                    {link.label}
                  </button>
                </Link>
              ),
          )}
          {/* Show Settings button in main section only for mobile */}
          {isMobile && settingsLink && (
            <Link href={settingsLink.href}>
              <button className="nav-button mobile-settings-button">
                <i className={`fas ${settingsLink.icon}`}></i>
                {settingsLink.label}
              </button>
            </Link>
          )}
        </div>

        {/* Settings section for non-mobile view */}
        {!isMobile && settingsLink && (
          <div className="settings-section nav-section">
            <Link href={settingsLink.href}>
              <button className="nav-button">
                <i className={`fas ${settingsLink.icon}`}></i>
                {settingsLink.label}
              </button>
            </Link>
          </div>
        )}
      </nav>
    </SignedIn>
  );
};

export default NavMenu;
