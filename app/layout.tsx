import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import React from 'react';
import type { ReactNode } from 'react';

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
  return (
    <>
      <nav>
        <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around' }}>
          <li tabIndex={0}>
            <Link href="/" tabIndex={-1}>Home</Link>
          </li>
          <li tabIndex={0}>
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

