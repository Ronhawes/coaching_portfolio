'use client';

import React, { useEffect, useRef, useState } from 'react';
import Magnet from '@/components/Magnet';

const ContactForm = () => {
  const bgRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/meokozkk', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert('There was a problem submitting your form.');
      }
    } catch (error) {
      alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="relative max-w-xl w-30 p-6 rounded shadow-lg text-black overflow-hidden">

        {/* Form */}
        <Magnet padding={150} disabled={false} magnetStrength={150}>
        <form
          onSubmit={handleSubmit}
          className="relative z-10 space-y-4 bg-gradient-to-br from-blue-100 via-teal-300 to-blue-0 p-6 rounded"
        >
          <h2 className="text-xl font-bold text-center">
            <Magnet padding={50} disabled={false} magnetStrength={150}>
              <p className="text-2xl">
                Contact <span className="text-blue-600 font-bold">Me</span>!
              </p>
            </Magnet>
          </h2>

          <div>
            <label className="block mb-1 font-semibold" htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full border border-black rounded px-3 py-2 bg-white/80 text-black"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold" htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full border border-black rounded px-3 py-2 bg-white/80 text-black"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold" htmlFor="email_subject">Email Subject:</label>
            <input
              type="text"
              name="email_subject"
              id="email_subject"
              required
              className="w-full border border-black rounded px-3 py-2 bg-white/80 text-black"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold" htmlFor="website_functionality">
              Your Message:
            </label>
            <textarea
              name="website_functionality"
              id="website_functionality"
              required
              rows={4}
              className="w-full border border-black rounded px-3 py-2 bg-white/80 text-black"
            ></textarea>
          </div>

          <div>
            <label className="block mb-1 font-semibold" htmlFor="phone_number">Phone Number:</label>
            <input
              type="tel"
              name="phone_number"
              id="phone_number"
              className="w-full border border-black rounded px-3 py-2 bg-white/80 text-black"
            />
          </div>

          <Magnet padding={100} disabled={false} magnetStrength={150}>
            <button
              type="submit"
              className={`mt-4 px-6 py-3 text-white bg-teal-900 hover:bg-teal-600 rounded-lg font-semibold shadow-lg transition ${
                submitted ? 'bg-green-600' : 'bg-black hover:bg-gray-800'
              }`}
              disabled={loading || submitted}
            >
              {submitted ? 'Submitted Successfully ✅' : loading ? 'Sending...' : 'Send'}
            </button>
          </Magnet>
        </form>
        </Magnet>
      </div>
    </div>
  );
};

export default ContactForm;
