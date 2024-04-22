import Image from "next/image";
import { useState } from "react";
import Layout from "@/app/layout";

export default function Home() {
  const [interests, setInterests] = useState(['Coding', 'Biking', 'AI', 'Movies']);

  const reorderInterests = () => {
    setInterests((prevInterests) => {
      const [first, ...rest] = prevInterests;
      return [...rest, first]; // Rotate the list of interests
    });
  };

  return (
    <Layout>
      <main className="flex flex-col items-center justify-center p-24">
        <h1 className="text-3xl font-bold text-center my-5">Welcome to My Homepage!</h1>
        <p className="text-xl mb-5 text-center">
          Hello! I'm Azhan, a student at the University of Washington majoring in Computer Science.
          Welcome to my website. I am excited to learn more about Human Computer Interaction and work on
          this website throughout the quarter. Here is a photo of my friend's dog.
        </p>
        <div className="mb-5">
          <Image
            src="/IMG_7779.jpg"
            alt="dawg"
            width={300}
            height={446}
            className="rounded-full"
          />
        </div>
        <div className="my-5">
          <h2 className="text-2xl font-semibold text-center">My Interests</h2>
          <ul className="list-disc pl-5 text-center">
            {interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        </div>
        <button
          onClick={reorderInterests}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300 my-5"
          tabIndex={0}
        >
          Reorder Interests
        </button>
        {/* Add a section for keyboard navigation instructions */}
        <section className="text-center my-5">
          <h2 className="text-2xl font-semibold">Keyboard Navigation Instructions</h2>
          <ul className="list-disc text-left mx-auto" style={{ maxWidth: '600px' }}> {/* Adjust style as necessary */}
            <li className="text-lg">
              <kbd>Tab</kbd> - Move forward through the site's interactive elements.
            </li>
            <li className="text-lg">
              <kbd>Shift</kbd> + <kbd>Tab</kbd> - Move backward through the site's interactive elements.
            </li>
            <li className="text-lg">
              <kbd>Enter</kbd> - Activate a focused link or button.
            </li>
            <li className="text-lg">
              To reorder the interests list, focus on the "Reorder Interests" button and press <kbd>Enter</kbd>.
            </li>
        </ul>
      </section>
      </main>
    </Layout>
  );
}
