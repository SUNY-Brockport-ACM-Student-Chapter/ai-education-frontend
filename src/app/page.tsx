
"use client";
import React, { useEffect } from "react";
import styles from "./page.module.css";
import Header from "./components/Header";
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
      <Header pageTitle="Welcome to EduAlly" />
      
      <div className={styles.mainContent}>
        <SignedOut>
          <div className={styles.welcomeSection}>
            <h1 className={styles.title}>Transform Your Learning Experience</h1>
            <p className={styles.subtitle}>Your AI-Powered Education Assistant</p>
            <p className={styles.description}>
              Join EduAlly to access personalized learning tools, interactive assessments, 
              and collaborative features designed to enhance your educational journey.
            </p>
            
            <div className={styles.authButtons}>
              <SignInButton mode="modal">
                <button className={styles.signInButton}>
                  Get Started
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