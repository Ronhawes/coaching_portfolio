"use client"
import React, { useEffect, useRef } from "react"
import anime from "animejs"

const resources = [
  {
    name: "Agile & Scrum",
    description: "Framework for iterative project management.",
    link: "https://www.scrum.org/resources/what-is-scrum",
  },
  {
    name: "anime.js",
    description: "Lightweight JavaScript animation library.",
    link: "https://animejs.com/",
  },
  {
    name: "CSS3",
    description: "Style sheet language for describing the look of web pages.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "Debugging",
    description: "Critical skill for finding and fixing code issues.",
    link: "https://developer.chrome.com/docs/devtools/",
  },
  {
    name: "Problem Solving",
    description: "Key software engineering and coding interview skill.",
    link: "https://leetcode.com/",
  },
  {
    name: "Integration Testing",
    description: "Testing combined parts of an application to ensure they work together.",
    link: "https://jestjs.io/docs/getting-started",
  },
  {
    name: "Figma",
    description: "Collaborative interface design tool.",
    link: "https://figma.com/",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for rapid UI development.",
    link: "https://tailwindcss.com/",
  },
]

export default function ResourcesPage() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
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
    }, { threshold: 0.3 })

    const sections = ref.current.querySelectorAll(".resource-box")
    sections.forEach((section) => {
      section.style.opacity = 0 // Start hidden
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
    <main className="mx-auto min-h-screen max-w-7xl px-6 py-24 text-teal-400">
      <h1 className="fade-in text-4xl font-bold text-teal-400 md:text-6xl mb-6">Skills.</h1>
      <p className="fade-in text-lg mb-10 text-neutral-300">
        A collection of essential development skills and tools I frequently use.
      </p>

      <div ref={ref} className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full border-l-2 border-neutral-500"></div>

        <div className="space-y-12">
          {rows.map((pair, rowIdx) => (
            <div key={rowIdx} className="flex gap-6 relative">
              {/* Circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-10 h-full">
                <div className="w-4 h-4 rounded-full bg-neutral-500 opacity-80" />
              </div>

              {pair.map((item, colIdx) => (
                item.name ? (
                  <div
                    key={colIdx}
                    className={`resource-box w-full md:w-1/2 min-h-[200px] p-10 rounded-xl bg-black shadow-2xl transition-all duration-300 hover:scale-[1.02] ${
                      colIdx % 2 === 0 ? "order-last md:order-first" : "order-first md:order-last"
                    }`}
                  >
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-3xl font-bold underline hover:text-teal-400"
                    >
                      {item.name}
                    </a>
                    <p className="mt-4 text-lg text-neutral-300">{item.description}</p>
                  </div>
                ) : (
                  <div key={colIdx} className="resource-box w-full md:w-1/2 p-6" />
                )
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
