"use client";

import { motion } from "framer-motion";

export default function HeaderSection() {
  return (
    <motion.section
      className="relative h-screen w-full overflow-hidden"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="relative z-10 flex items-center justify-center text-center h-full text-white px-5">
        <div className="gap-5 flex flex-col">
          <h1 className="text-4xl md:text-7xl font-black">
            Code. Create. Disrupt.
          </h1>
          <h4 className="text-2xl md:text-5xl font-semibold">
            Engineering Bold Ideas into Scalable Software
          </h4>
        </div>
      </div>

      {/* <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0" /> */}
    </motion.section>
  );
}
