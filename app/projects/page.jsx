'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import anime from 'animejs';
import { GiTennisRacket } from 'react-icons/gi';
import { MdFeedback } from 'react-icons/md';
import { FaUserGraduate } from "react-icons/fa";

export default function ProjectsPage() {
  const cardsRef = useRef([]);

  useEffect(() => {
    anime({
      targets: cardsRef.current,
      translateY: [50, 0],
      opacity: [0, 1],
      delay: anime.stagger(200),
      duration: 1000,
      easing: 'easeOutExpo',
    });
  }, []);

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 sm:px-6 md:px-12 py-12">
      <div className="py-12 sm:py-20">
        <h1 className="pb-4 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-teal-400">
          Projects.
        </h1>
        <p className="pb-8 text-lg sm:text-2xl md:text-3xl text-white font-semibold">
          Here are a few side projects I’ve been working on to improve my coding skills.
        </p>

        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
              href: 'https://myportfolio09.vercel.app/projects',
              icon: <FaUserGraduate size={50} className="text-green-500" />,
              title: 'Myportfolio',
              description: 'Designed and developed an interactive platform for my portfolio and projects tracking'
            },
              {
              href: 'https://hybridsportske2.',
              icon: <GiTennisRacket size={50} className="text-green-500" />,
              title: 'Padel Tennis Sports Website',
              description: 'Designed and developed an interactive platform with dynamic back-end and front-end for seamless booking and registration. still under development'
            }, {
              href: 'https://feedbackcardanalyserke.netlify.app/',
              icon: <MdFeedback size={50} className="text-green-500" />,
              title: 'FeedbackCardAnalyser',
              description: 'Developed an interactive platform with a dynamic back-end and front-end functionality for interactive subscriptions and card generation.'
            }].map((project, index) => (
              <Link href={project.href} target="_blank" key={index}>
                <div
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="rounded-xl bg-black p-6 sm:p-8 md:p-10 hover:bg-neutral-900 shadow-lg transition-all"
                >
                  <div className="flex flex-col items-center space-y-4 text-center">
                    {project.icon}
                    <h2 className="text-xl sm:text-2xl font-bold text-white">
                      {project.title}
                    </h2>
                    <p className="text-sm sm:text-base text-white">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
