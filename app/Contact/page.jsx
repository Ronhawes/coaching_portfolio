'use client';

import React, { useEffect, useRef } from 'react';
import Magnet from '@/components/Magnet';

const ContactForm = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    if (bgRef.current) {
      bgRef.current.animate(
        [
          { backgroundPosition: '0% 50%' },
          { backgroundPosition: '100% 50%' },
          { backgroundPosition: '0% 50%' }
        ],
        {
          duration: 10000,
          iterations: Infinity,
        }
      );
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative max-w-md w-full p-6 rounded shadow-lg text-black">
        {/* Watery animated background layer */}
        <div
          ref={bgRef}
          className="absolute inset-0 z-0 rounded bg-gradient-to-br from-blue-900 via-teal-300 to-blue-500 bg-[length:400%_400%]"
          style={{ opacity: 1 }}
        />

        {/* Form content */}
        <form
          action="https://formspree.io/f/meokozkk"
          method="POST"
          className="relative z-10 space-y-4 backdrop-blur-md bg-white/50 p-6 rounded"
        >
          
<h2 className="text-xl font-bold text-center">
  <Magnet padding={50} disabled={false} magnetStrength={50}>
    <p className="text-2xl">Contact <span className="text-blue-600 font-bold">Me</span>!</p>
  </Magnet>
</h2>

          

          <div>
            <label className="block mb-1 font-semibold" htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full border border-black rounded px-3 py-2 bg-transparent"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold" htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full border border-black rounded px-3 py-2 bg-transparent"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold" htmlFor="email">Email Subject:</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full border border-black rounded px-3 py-2 bg-transparent"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold" htmlFor="website_functionality">
              Your message:
            </label>
            <textarea
              name="website_functionality"
              id="website_functionality"
              required
              className="w-full border border-black rounded px-3 py-2 bg-transparent"
            ></textarea>
          </div>

          <div>
            <label className="block mb-1 font-semibold" htmlFor="phone_number">Phone Number:</label>
            <input
              type="tel"
              name="phone_number"
              id="phone_number"
              className="w-full border border-black rounded px-3 py-2 bg-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
