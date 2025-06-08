"use client"
import "../styles/globals.css"
import React, { useState } from "react"
import { Navbar } from "@/components/Navbar"
import Footer from "@/components/Footer"
import Social from "@/components/Social"
import { usePathname } from "next/navigation"
import SplashScreen from "@/components/SplashScreen"
import background from "../public/background.png"
import Ballpit from "@/components/Ballpit"

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [isLoading, setIsLoading] = useState(isHome)

  return (
    <html lang="en">
      <head />
      <body
        style={{
         backgroundImage: `linear-gradient(to bottom right, #121212, #283E51), url(${background.src})`,

          
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
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
