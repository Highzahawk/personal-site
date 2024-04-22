import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import React from 'react';
import type { ReactNode } from 'react';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ["latin"] });

export function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

type LayoutProps = {
  children: ReactNode;
};


function Layout({ children }: LayoutProps) {
  const router = useRouter(); // Use the router to handle navigation

  // Handle the key press event
  const handleKeyPress = (e: React.KeyboardEvent, href: string) => {
    if (e.key === 'Enter') {
      router.push(href); // Navigate to the href when Enter is pressed
    }
  };

  return (
    <>
      <nav>
        <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around' }}>
          <li tabIndex={0} onKeyDown={(e) => handleKeyPress(e, '/')}>
            {/* Link is used only for semantic purposes and mouse navigation */}
            <Link href="/" tabIndex={-1}>Home</Link>
          </li>
          <li tabIndex={0} onKeyDown={(e) => handleKeyPress(e, '/things-to-read')}>
            {/* Link is used only for semantic purposes and mouse navigation */}
            <Link href="/things-to-read" tabIndex={-1}>Things to Read</Link>
          </li>
        </ul>
      </nav>
      {/* Rest of layout markup */}
      {children}
      {/* Maybe footer goes here */}
    </>
  );
}

export default Layout;

