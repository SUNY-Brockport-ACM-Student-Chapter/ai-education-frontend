
"use client";
import React, { useEffect } from "react";
import styles from "./page.module.css";
import { SignInButton, SignedIn, SignedOut, useAuth, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

const Page: React.FC = () => {
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    // Check if user is signed in and has metadata
    if (isSignedIn && user?.publicMetadata?.role) {
      const userRole = user.publicMetadata.role as string;
      
      // Redirect based on role
      if (userRole === 'instructor') {
        router.push('/instructor/dashboard');
      } else if (userRole === 'student') {
        router.push('/student/dashboard');
      }
    }
  }, [isSignedIn, user, router]);

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <SignedOut>
          <div className={styles.welcomeSection}>
            <h1 className={styles.title}>Welcome to EduAlly</h1>
            <p className={styles.subtitle}>Your AI-Integreated Personal Assessment Tool</p>
            
            <div className={styles.authButtons}>
              <SignInButton mode="modal">
                <button className={styles.login}>
                  Login
                </button>
              </SignInButton>
            </div>
          </div>
        </SignedOut>

        <SignedIn>
          <div className={styles.loadingSection}>
            <div className={styles.loadingSpinner}></div>
            <p className={styles.loadingText}>Loading your dashboard...</p>
          </div>
        </SignedIn>
      </div>
    </div>
  );
};

export default Page;