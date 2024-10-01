import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Edu AI",
  description: "AI-powered education assistant",
};

// Separate the client-side logic into a new component
import dynamic from "next/dynamic";
const NavMenu = dynamic(() => import("./NavMenu"), { ssr: false });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const PageTitle = "Page Title";
  const ProfName = "Professor Name";

  const generateInitials = (name: string) => {
    const nameParts = name.trim().split(" ");
    const initials = nameParts.length >= 2 ? nameParts[0][0] + nameParts[1][0] : nameParts[0][0];
    return initials.toUpperCase();
  };

  const AB = generateInitials(ProfName);

  return (
    <html lang="en">
      <body className={inter.className}>
        <NavMenu ProfName={ProfName} AB={AB} />
        <main className="main-content">
          <header className="main-header">
            <div className="header-section">
              <h1>{PageTitle}</h1>
            </div>
            <div className="profile-section">
              <div className="profile-icon">{AB}</div>
              <div className="profile-text">
                <p>Welcome,</p>
                <p>{ProfName}</p>
              </div>
            </div>
          </header>
          <div className="main-workspace">{children}</div>
        </main>
      </body>
    </html>
  );
}
