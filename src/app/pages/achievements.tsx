"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      className="relative h-screen w-full bg-white flex items-center justify-center px-10"
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 3, ease: "easeOut" }}
    >
      <div className="text-center max-w-3xl">
        <h2 className="text-5xl font-bold mb-4">What I Got So Far?</h2>
        <p className="text-lg text-gray-600">
          Milestones Marking My Journey Through Innovation and Execution
        </p>
      </div>
    </motion.section>
  );
}
