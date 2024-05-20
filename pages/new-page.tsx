import React from 'react';
import Layout from '@/app/layout'; // Adjust the import path as needed
import Image from 'next/image';

const NewPage = () => {
  return (
    <Layout>
      <main className="p-8 bg-gradient-to-b from-gray-800 to-black text-white min-h-screen">
        <h1 className="text-4xl font-bold text-center my-5">My Favorite Hobbies</h1>
        <section className="my-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:order-2">
            <h2 className="text-3xl font-semibold my-4">1. Coding</h2>
            <p className="text-lg mb-4">Coding is my passion. I love to create new applications and solve complex problems.</p>
          </div>
          <div className="md:w-1/2 flex justify-center md:order-1">
            <Image src="/coding.jpg" alt="Coding" width={800} height={400} className="rounded-lg shadow-lg" />
          </div>
        </section>
        <section className="my-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold my-4">2. Biking</h2>
            <p className="text-lg mb-4">Biking is a great way to stay fit and enjoy the outdoors.</p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image src="/biking.jpg" alt="Biking" width={800} height={400} className="rounded-lg shadow-lg" />
          </div>
        </section>
        <section className="my-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:order-2">
            <h2 className="text-3xl font-semibold my-4">3. Reading</h2>
            <p className="text-lg mb-4">Reading helps me relax and learn new things. I particularly enjoy science fiction.</p>
          </div>
          <div className="md:w-1/2 flex justify-center md:order-1">
            <Image src="/reading.jpg" alt="Reading" width={800} height={400} className="rounded-lg shadow-lg" />
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default NewPage;
