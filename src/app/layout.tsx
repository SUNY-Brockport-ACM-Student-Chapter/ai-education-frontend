import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import dynamic from 'next/dynamic';
import Header from './components/Header';
import { generateInitials } from './utils/utilities';
import { ReactNode } from 'react';

config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EduAlly',
  description: 'AI-powered education assistant',
};

const NavMenu = dynamic(() => import('./components/NavMenu'), { ssr: false });

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const ProfName = "Professor Name";
  const userInitials = generateInitials(ProfName);

  // not working yet? wont pick up pagetitle from child/page
  const childComponent = children as any;
  const pageTitle = childComponent.type?.pageTitle || "Page Title";

  return (
    <html lang="en">
      <body className={inter.className}>
        <NavMenu userName={ProfName} userInitials={userInitials} />
        <main className="main-content">
          <Header pageTitle={pageTitle} userName={ProfName} userInitials={userInitials} />
          <div className="main-workspace">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}