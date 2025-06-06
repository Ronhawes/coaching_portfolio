"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import headshot from "../public/headshot.png";

const roles = ["Software Engineer", "Fullstack Developer", "Backend Developer"];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <main className="min-h-screen bg-[#121212] flex items-center justify-center px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col-reverse md:flex-row items-center gap-10 max-w-6xl"
      >
        {/* Text Section */}
        <motion.div
          variants={containerVariants}
          className="text-left space-y-4 max-w-xl"
        >
         <motion.h1 variants={itemVariants} className="text-xl font-bold text-white md:text-6xl">
            Hello! I&#39;m
         </motion.h1>
          <motion.h1 variants={itemVariants} className="text-2xl font-bold text-white md:text-6xl">
            Maganga Ronnie.
          </motion.h1>

          <motion.p
            key={roleIndex}
            variants={itemVariants}
            className="text-2xl font-semibold text-teal-400 md:text-3xl"
          >
            {roles[roleIndex]}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-neutral-300 md:text-xl"
          >
            I am a Software Engineer passionate about building scalable, high-performance applications and optimizing backend architectures. I&#39;m seeking to leverage expertise in fullstack development to create efficient, user-friendly applications that enhance system reliability and user experience.
          </motion.p>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-6 py-3 text-white bg-teal-500 hover:bg-teal-600 rounded-lg font-semibold shadow-lg transition"
            onClick={() => window.open("/resume.pdf", "_blank")}
          >
            Download CV
          </motion.button>
        </motion.div>

        {/* Image with Gradient Glow */}
        <motion.div
          variants={itemVariants}
          className="relative w-80 h-80 rounded-full ring-4 ring-white"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-teal-300 via-30% to-orange-300 opacity-80 blur-3xl z-0"></div>
          <Image
            src={headshot}
            alt="Headshot"
            fill
            className="object-cover rounded-full relative z-10"
          />
        </motion.div>
      </motion.div>
    </main>
  );
}
