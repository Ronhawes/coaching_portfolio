'use client';

import React, { useEffect, useRef, useState } from 'react';
import Magnet from '@/components/Magnet';
import headshot from '../../public/headshot.png';
import Image from 'next/image';
import DecayCard from '@/components/DecayCard';

const ContactForm = () => {
  const bgRef = useRef(null);
  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false); // NEW STATE

  useEffect(() => {
    if (bgRef.current) {
      bgRef.current.animate(
        [
          { backgroundPosition: '0% 50%' },
          { backgroundPosition: '100% 50%' },
          { backgroundPosition: '0% 50%' },
        ],
        {
          duration: 10000,
          iterations: Infinity,
        }
      );
    }
  }, []);

  useEffect(() => {
    if (showForm && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showForm]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
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
  <div className="min-h-screen flex items-center justify-center p-2">
    <div className="w-full max-w-2xl p-4 sm:p-8 rounded-2xl border border-white/30 shadow-2xl bg-white/10 backdrop-blur-lg text-black space-y-6">

      {!showForm ? (
        <div className="text-center">
          <div className="flex justify-center">
            <Image
              src={headshot}
              alt="Headshot"
              width={150}
              height={150}
              className="rounded-full shadow-lg"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-teal-300">
            Have an Idea?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-4">
            Feel free to contact me
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-lg font-semibold shadow"
          >
            Contact Me
          </button>
        </div>
      ) : (
        <div ref={formRef}>
          
        <div ref={formRef} className="flex justify-center max-w-4xl items-center flex-col text-white space-y-4">
          <Magnet padding={150} disabled={false} magnetStrength={150}>
            <div className=''>
            <form
              onSubmit={handleSubmit}
              className=""
            >
              <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">
                <Magnet padding={50} disabled={false} magnetStrength={150}>
                  <p className="text-2xl sm:text-3xl text-teal-300">
                    Contact <span className="text-white font-bold">Me</span>!
                  </p>
                </Magnet>
              </h2>

              {[
                { id: 'name', type: 'text', label: 'Name:' },
                { id: 'email', type: 'email', label: 'Email:' },
                { id: 'phone_number', type: 'tel', label: 'Phone number:' },
                { id: 'email_subject', type: 'text', label: 'Email Subject:' },
              ].map(({ id, type, label }) => (
                <div key={id} className='mb-4'>
                  <label className="block mb-1 font-semibold" htmlFor={id}>
                    {label}
                  </label>
                  <input
  type={type}
  name={id}
  id={id}
  required
  className="w-full border border-white/20 rounded px-10 py-3 bg-white/20 backdrop-blur-sm text-black placeholder:text-black/60"
/>

                  
                </div>
              ))}

              <div>
                <label className="block mb-2 font-semibold" htmlFor="website_functionality">
                  Your Message:
                </label>
                <textarea
                  name="website_functionality"
                  id="website_functionality"
                  required
                  rows={4}
                  className="w-full border border-white/20 rounded px-3 py-2 bg-white/20 backdrop-blur-sm text-black placeholder:text-black/60"
                ></textarea>
              </div>

              

              <Magnet padding={100} disabled={false} magnetStrength={150}>
  <div className="flex justify-between items-center gap-x-16 mt-6">
    
    <button
      type="submit"
      className={`px-6 py-3 text-white rounded-lg font-semibold shadow-lg transition ${
        submitted ? 'bg-green-600' : 'bg-black hover:bg-gray-800'
      }`}
      disabled={loading || submitted}
    >
      {submitted ? 'Submitted Successfully ✅' : loading ? 'Sending...' : 'Submit'}
    </button>
    <button
      onClick={() => setShowForm(false)}
      className="text-sm text-teal-600 hover:text-red-800 font-semibold"
    >
      ✕ Close
    </button>
  </div>
</Magnet>

            </form>
            </div>
          </Magnet>
          </div>
        </div>
      )}
    </div>
  </div>
);

};

export default ContactForm;
