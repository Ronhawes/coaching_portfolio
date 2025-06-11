"use client"
import React, { useEffect, useRef } from "react"
import anime from "animejs"

const resources = [
  {
    name: "Strength and Co-ordination",
    description: "Training focused on enhancing an athlete's ability to generate force and move efficiently. Includes resistance training, agility drills, and proprioceptive exercises to improve body control."
  },
  {
    name: "Fitness Program Design",
    description: "Creating structured workout plans tailored to individual or group needs, considering fitness level, goals, training frequency, and progression principles."
  },
  {
    name: "Sports Management",
    description: "Overseeing operations, planning events, managing teams, and ensuring smooth logistics for sports organizations and activities."
  },
  {
    name: "Effective Communication",
    description: "Clear and constructive communication strategies that enhance coach-athlete understanding, team coordination, and motivation during training and competition."
  },
  {
    name: "Match Strategy",
    description: "Developing tactical game plans based on the opponent's strengths and weaknesses, player positioning, and in-game decision-making."
  },
  {
    name: "Conducting Group Coaching",
    description: "Leading group training sessions with effective organization, inclusiveness, and engagement to ensure all participants improve and stay motivated."
  },
  {
    name: "Creating Drills and Personal Training Services",
    description: "Designing skill-specific drills for individuals and offering one-on-one coaching programs customized to client goals, sport, and fitness level."
  },
  {
    name: "Next.js",
    description: "A React framework useful for building high-performance web applications, often used in athlete portals or booking systems for sports programs."
  },
  {
    name: "Integration Testing",
    description: "Ensuring multiple systems or components (like athlete data, schedules, and payment systems) work together correctly in your web platform."
  }
];



export default function ResourcesPage() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: entry.target,
              opacity: [0, 1],
              translateY: [50, 0],
              easing: "easeOutExpo",
              duration: 800,
            })
          }
        })
      },
      { threshold: 0.3 }
    )

    const sections = ref.current?.querySelectorAll(".resource-box") || []
    sections.forEach((section) => {
      section.style.opacity = 0
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const sortedArr = resources.sort((a, b) => a.name.localeCompare(b.name))
  const rows = []
  for (let i = 0; i < sortedArr.length; i += 2) {
    rows.push([sortedArr[i], sortedArr[i + 1] || {}])
  }

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 sm:px-6 lg:px-12 py-16 text-teal-400">
      <h1 className="fade-in text-3xl sm:text-4xl md:text-5xl font-bold text-teal-400 mb-6">
        Skills.
      </h1>
      <p className="fade-in text-base sm:text-xl md:text-2xl text-neutral-300 mb-12">
        A collection of essential development skills and tools I frequently use.
      </p>

      <div ref={ref} className="relative">
        {/* Vertical Line (hidden on small screens) */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 h-full border-l-2 border-neutral-500"></div>

        <div className="space-y-16">
          {rows.map((pair, rowIdx) => (
            <div
              key={rowIdx}
              className="flex flex-col md:flex-row gap-6 relative"
            >
              {/* Timeline Circle */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-10">
                <div className="w-4 h-4 rounded-full bg-neutral-500 opacity-80" />
              </div>

              {pair.map((item, colIdx) =>
                item.name ? (
                  <div
                    key={colIdx}
                    className={`resource-box w-full md:w-1/2 min-h-[200px] p-6 sm:p-10 rounded-xl bg-black shadow-2xl transition-all duration-300 hover:scale-[1.02] ${
                      colIdx % 2 === 0
                        ? "order-last md:order-first"
                        : "order-first md:order-last"
                    }`}
                  >
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl sm:text-3xl font-bold underline hover:text-teal-400"
                    >
                      {item.name}
                    </a>
                    <p className="mt-3 sm:mt-4 text-base sm:text-lg text-neutral-300">
                      {item.description}
                    </p>
                  </div>
                ) : (
                  <div
                    key={colIdx}
                    className="resource-box w-full md:w-1/2 p-6 hidden md:block"
                  />
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}