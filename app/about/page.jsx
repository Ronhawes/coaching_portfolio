"use client"
import React, { useEffect } from "react"
import Image from "next/image"
import anime from "animejs"
import Magnet from "@/components/Magnet"

export default function AboutPage() {
  useEffect(() => {
    anime({
      targets: ".about-fade",
      opacity: [0, 1],
      translateY: [30, 0],
      delay: anime.stagger(200),
      easing: "easeOutExpo",
      duration: 800,
    })
  }, [])

  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 text-left md:max-w-5xl">
      <div className="flex flex-col space-y-6 py-24 sm:px-28 sm:py-28 md:space-y-0">
        <h1 className="about-fade text-7xl font-bold text-teal-400 md:pb-6 md:text-6xl">
          <Magnet padding={50} disabled={false} magnetStrength={80}>
    <p className="text-7xl">About <span className="text-blue-600 font-bold">Me</span>!</p>
  </Magnet>
        </h1>
        <div className="about-fade flex flex-col space-y-8 sm:items-center sm:justify-center md:flex-row md:space-y-0 md:space-x-6">
          <div className="md:mt-2 md:w-1/2">
            <Image
              src="/headshot.png"
              alt="Ronnie Maganga headshot"
              width={400}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="about-fade text-white md:mt-2 md:w-1/2">
            <p className="text-xl leading-8">
              <span className="font-bold">Hi, I&rsquo;m Ronnie Maganga.</span> I&rsquo;m a
              passionate software engineer and developer based in{" "}
              <span className="font-bold">Nairobi, Kenya.</span>
            </p>
            <br />
            <p className="text-xl leading-8">
              I enjoy building web applications that solve real-world problems
              and create lasting user impact. Beyond coding, I mentor young
              athletes, analyze professional matches, and explore new
              technologies.
            </p>
            <br />
            <p className="text-xl leading-8">
              I believe in a growth mindset and that{" "}
              <span className="font-bold text-teal-400">
                giving up is never an option.
              </span>{" "}
              This philosophy guides both my personal and professional journey.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
