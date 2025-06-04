"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import anime from "animejs"
import logo from "../public/dark-logo.png"

const SplashScreen = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true)

      anime({
        targets: "#logo",
        scale: [
          { value: 1, duration: 0 },
          { value: 1.3, duration: 400, easing: "easeInOutQuad" },
          { value: 1, duration: 400, easing: "easeOutBounce" },
          { value: 1.3, duration: 400, easing: "easeInOutQuad" },
          { value: 1, duration: 400, easing: "easeOutBounce" },
        ],
        complete: () => finishLoading(),
      })
    }, 10)

    return () => clearTimeout(timeout)
  }, [finishLoading])

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-800">
      {isMounted && (
        <div>
          <Image
            id="logo"
            src={logo}
            alt="Hybrid Sports Logo"
            width={60}
            height={60}
            priority
          />
        </div>
      )}
    </div>
  )
}

export default SplashScreen
