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
        <p className="text-xl mb-5 text-center">Hello! I'm Azhan, a student at the University of Washington majoring in Computer Science. Welcome to my website. I am 
        excited to learn more about Human Computer Interaction and work on this website throughout the quarter. Here is a photo of me and my friends at a Go Karting track. </p>
        <div className="mb-5">
          <Image
            src="/tempsitephoto.jpg"
            alt="Your Name"
            width={992}  // Adjust as necessary
            height={446} // Adjust as necessary
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
      </main>
    </Layout>
  );
}
