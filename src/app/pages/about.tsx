"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      className="relative min-h-screen w-full bg-white flex items-center justify-center px-6 md:px-10 py-16"
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <div className="text-center max-w-5xl w-full">
        <h2 className="text-5xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-600 mb-12">
          I'm a software engineer passionate about solving complex problems and
          building modern web and mobile solutions.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-10 text-left justify-center">
          {/* Quote Block */}
          <blockquote className="relative border-l-4 border-gray-300 pl-6 text-gray-700 italic text-lg max-w-xl">
            <span className="absolute -top-6 left-0 text-5xl text-gray-400">
              “
            </span>
            <p className="relative z-10">
              Uvindu is a freelance and full-stack software engineer based in
              Colombo with a passion for building digital services and things he
              envisions. He enjoys launching products from planning and design
              to solving real-life problems through code. When not coding, he
              loves hanging out with friends, going on adventures, watching
              Netflix, or just catching up on sleep. Currently, he’s living off
              his own products and a small start-up project with his closest
              colleagues.
            </p>
            <span className="absolute -bottom-6 right-2 text-5xl text-gray-400">
              ”
            </span>
            <p className="relative z-10 italic text-xs font-semibold mt-1">
              Born: 2001-12-11 | Software Engineer | Security Software Engineer
            </p>
          </blockquote>

          {/* Profile Image */}
          <div className="w-40 h-52 border-4 border-amber-500 overflow-hidden rounded-xl shadow-lg shrink-0">
            <img
              src="/profile-pic.svg"
              alt="Uvindu's profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
