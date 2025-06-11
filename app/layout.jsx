"use client"
import "../styles/globals.css"
import React, { useState } from "react"
import { Navbar } from "@/components/Navbar"
import Footer from "@/components/Footer"
import Social from "@/components/Social"
import { usePathname } from "next/navigation"
import SplashScreen from "../components/SplashScreen"
import background from "../public/background.png"

import Squares  from "../components/Squares"

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [isLoading, setIsLoading] = useState(isHome)

  return (
    <html lang="en">
      <head />
      <body style={{ margin: 0, padding: 0, overflowX: "hidden" }}>
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
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", zIndex: -2 }}>
  <Squares 
    speed={0.5} 
    squareSize={40}
    direction="diagonal"
    borderColor="#fff"
    hoverFillColor="#222"
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
