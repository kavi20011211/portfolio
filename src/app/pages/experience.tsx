"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export default function Experience() {
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
        <h2 className="text-5xl font-bold mb-4">What are My Experiences?</h2>
        <p className="text-lg text-gray-600">
          From crafting scalable applications to leading innovative tech
          solutions—here’s a glimpse into my growth and achievements.
        </p>
      </div>
    </motion.section>
  );
}
