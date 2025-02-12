/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import Header from 'parts/Header';
import Footer from 'parts/Footer';

export const DiscussProjectPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Header />
      <section className="flex flex-col items-center justify-center my-20">
        <h1 className="text-4xl font-bold text-center mb-4">Get in Touch</h1>
        <p className="text-xl mb-2">For inquiries, contact us:</p>
        <a
          href="https://wa.me/8801773826825"
          className="text-lg text-blue-500 hover:underline mb-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp: +880 1773-826825
        </a>
        <a
          href="mailto:business@blackwavesstudio.com"
          className="text-lg text-blue-500 hover:underline"
        >
          Email: business@blackwavesstudio.com
        </a>
      </section>
      <Footer />
    </>
  );
};
