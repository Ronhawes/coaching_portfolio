"use client"
import "../styles/globals.css"
import React, { useState } from "react"
import { Navbar } from "@/components/Navbar"
import Footer from "@/components/Footer"
import Social from "@/components/Social"
import { usePathname } from "next/navigation"
import SplashScreen from "../components/SplashScreen"
import Ballpit from "../components/Ballpit"
import background from "../public/background.png"

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [isLoading, setIsLoading] = useState(isHome)

  return (
    <html lang="en">
      <head />
      <body style={{ margin: 0, padding: 0, overflowX: "hidden" }}>
        {/* Ballpit background */}
        {/* Background image layer */}
<div
  style={{
    backgroundImage: `url(${background.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "fixed",
    width: "100%",
    height: "100vh",
    top: 0,
    left: 0,
    zIndex: -3,
  }}
/>

{/* Ballpit over the image */}
<div
  style={{
    position: "fixed",
    zIndex: -2,
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    overflow: "hidden",
  }}
>
  <Ballpit
    count={200}
    gravity={0.7}
    friction={0.8}
    wallBounce={0.95}
    followCursor={true}
  />
</div>


        {/* Main Content */}
        {isLoading && isHome ? (
          <SplashScreen finishLoading={() => setIsLoading(false)} />
        ) : (
          <>
            <Navbar />
            <Social />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  )
}
