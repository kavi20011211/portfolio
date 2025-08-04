"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollTriggered from "../components/services_section";
export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      className="relative w-full bg-white flex flex-col items-center px-10 py-20"
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className="text-center max-w-3xl mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
          What Are My Services?
        </h2>
        {/* <p className="text-lg text-gray-600">
          Milestones Marking My Journey Through Innovation and Execution
        </p> */}
      </div>
      <ScrollTriggered />
    </motion.section>
  );
}
