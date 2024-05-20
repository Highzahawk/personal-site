
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import React from 'react';
import type { ReactNode } from 'react';
import { useRouter } from 'next/navigation';

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
      <nav className="bg-gray-900 text-white p-4 shadow-lg">
        <ul className="flex justify-around items-center">
          <li tabIndex={0} onKeyDown={(e) => handleKeyPress(e, '/')} className="hover:text-blue-400 transition-colors duration-300">
            <Link href="/" tabIndex={-1} className="text-lg font-semibold">Home</Link>
          </li>
          <li tabIndex={0} onKeyDown={(e) => handleKeyPress(e, '/things-to-read')} className="hover:text-blue-400 transition-colors duration-300">
            <Link href="/things-to-read" tabIndex={-1} className="text-lg font-semibold">Things to Read</Link>
          </li>
          <li tabIndex={0} onKeyDown={(e) => handleKeyPress(e, '/new-page')} className="hover:text-blue-400 transition-colors duration-300">
            <Link href="/new-page" tabIndex={-1} className="text-lg font-semibold">New Page</Link>
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

