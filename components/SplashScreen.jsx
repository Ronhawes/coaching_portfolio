"use client"
import React, { useState, useEffect } from "react"
import anime from "animejs"
import { GiAbstract077 } from "react-icons/gi"

const SplashScreen = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true)

      // Create timeline for pulses
      const timeline = anime.timeline({
        targets: "#logo",
        easing: "easeInOutQuad",
      })

      timeline
        .add({ scale: 2, duration: 300 })
        .add({ scale: 1, duration: 300 })
        .add({ scale: 4, duration: 300 })
        .add({ scale: 1, duration: 300 })
        .add({ scale: 6, duration: 300 })
        .add({ scale: 1, duration: 300 })
        .add({ scale: 8, duration: 300 })
        .add({ scale: 1, duration: 300 })
        // 🔽 Fade-out effect
        .add({
          opacity: 60,
          duration: 500,
          easing: "easeInOutQuad",
          complete: () => finishLoading(),
        })
    }, 10)

    return () => clearTimeout(timeout)
  }, [finishLoading])

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-800">
      {isMounted && (
        <div>
          <GiAbstract077 id="logo" className="text-6xl text-white" />
        </div>
      )}
    </div>
  )
}

export default SplashScreen
