// app/layout.tsx
import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import dynamic from "next/dynamic";
import { ClerkProvider } from "@clerk/nextjs";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EduAlly",
  description: "AI-powered education assistant",
};

const NavMenu = dynamic(() => import("./components/NavMenu"), { ssr: false });
const UserProviderClient = dynamic(
  () => import("./utils/UserContext").then((mod) => mod.UserProvider),
  { ssr: false },
);

async function fetchUserName() {
  // Replace this with the actual database query
  return "Professor Name";
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const userName = await fetchUserName();

  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <UserProviderClient userName={userName}>
            <NavMenu />
            <main className="main-content">{children}</main>
          </UserProviderClient>
        </ClerkProvider>
      </body>
    </html>
  );
}
