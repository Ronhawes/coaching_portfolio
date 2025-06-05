'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import anime from 'animejs';
import { GiTennisRacket } from 'react-icons/gi';
import { MdFeedback } from 'react-icons/md';

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
    <main className="mx-auto min-h-screen max-w-7xl px-6 py-12 md:px-12">
      <div className="py-24">
        <h1 className="pb-4 text-5xl font-black text-teal-400 md:text-7xl">
          Projects.
        </h1>
        <p className="pb-8 text-2xl font-semibold text-white">
          Here are a few side projects I've been working on to improve my coding skills.
        </p>

        <section>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {[{
              href: 'https://hybridsportske2.netlify.app/',
              icon: <GiTennisRacket size={50} className="text-green-500" />,
              title: 'Padel Tennis Sports Website',
              description: 'Designed and developed an interactive platform with dynamic back-end and front-end for seamless booking and registration.'
            }, {
              href: 'https://feedbackcardanalyserke.netlify.app/',
              icon: <MdFeedback size={50} className="text-green-500" />,
              title: 'FeedbackCardAnalyser',
              description: 'Developed an interactive platform with a dynamic back-end and front-end functionality for interactive subscriptions and card generation.'
            }].map((project, index) => (
              <Link href={project.href} target="_blank" key={index}>
                <div
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="rounded-xl bg-black p-10 hover:bg-neutral-900 shadow-lg transition-all"
                >
                  <div className="flex flex-col items-center space-y-4 text-center">
                    {project.icon}
                    <h1 className="text-2xl font-bold text-white">
                      {project.title}
                    </h1>
                    <p className="text-lg text-white">
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
