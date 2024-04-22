import Layout from "@/app/layout";
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function ThingsToRead() {
  // Array of objects for each link
  const readingList = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/azhanzaheer/' },
    { name: 'GitHub', url: 'https://github.com/Highzahawk' },
    { name: 'Watches', url: 'https://www.aeon-watches.com/' },
    { name: 'YouTube', url: 'http://www.youtube.com/@highzahawk' },
    { name: 'Twitter', url: 'https://twitter.com/highzahawk' },
    { name: 'Instagram', url: 'https://www.instagram.com/azhanzaheer/' },
    { name: 'Letterboxd', url: 'https://letterboxd.com/azhxn/' },
    { name: 'Duolingo', url: 'https://www.duolingo.com/profile/azhxn' },
    { name: 'Xbox', url: 'https://account.xbox.com/en-us/profile?gamertag=Highzahawk' },
    { name: 'Steam', url: 'https://steamcommunity.com/profiles/76561198977716117/' },
  ];

  const listRef = useRef<HTMLUListElement>(null);
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const list = listRef.current;
      if (list && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
        e.preventDefault();
        const focusableElements = Array.from(list.querySelectorAll('a')) as HTMLAnchorElement[];
        const index = focusableElements.indexOf(document.activeElement as HTMLAnchorElement);
        let nextIndex = index;
        if (e.key === 'ArrowDown') {
          nextIndex = index >= focusableElements.length - 1 ? 0 : index + 1;
        } else if (e.key === 'ArrowUp') {
          nextIndex = index <= 0 ? focusableElements.length - 1 : index - 1;
        }
        focusableElements[nextIndex].focus();
      }
    };

    // Only attach the event listener if listRef.current is not null
    if (listRef.current) {
      listRef.current.addEventListener('keydown', handleKeyDown);
    }

    // Return a cleanup function
    return () => {
      if (listRef.current) {
        listRef.current.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, []);

  return (
    <Layout>
      <main className="p-24">
        <h1 className="text-3xl font-bold text-center my-5">Things to Read</h1>
        {/* Instructions for users on how to navigate using keyboard */}
        <div className="text-center my-8">
          <p className="text-lg">Use the <kbd>Tab</kbd> key to move focus between the links below.</p>
          <p className="text-lg">Once focused, press <kbd>Enter</kbd> to open the link.</p>
          <p className="text-lg">Use the <kbd>Arrow Down</kbd> and <kbd>Arrow Up</kbd> keys to navigate the list without moving the page.</p>
        </div>
        <ul className="list-none space-y-3" ref={listRef}>
          {readingList.map((item, index) => (
            <li key={index} className="text-blue-500 hover:text-blue-700">
              <Link href={item.url} legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">{item.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}