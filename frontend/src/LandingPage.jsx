import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MainContainer from "./components/MainContainer";
import Sidebar from './components/SideBar';

function LandingPage() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative w-full h-screen flex flex-col md:flex-row bg-background-color">
      {/* Sidebar */}
      <aside className="fixed md:relative top-0 left-0 w-full md:w-auto p-4 z-50">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="relative bg-gradient-to-r from-cube-color to-background-color p-[2px] rounded-lg shadow-lg">
          <MainContainer />
        </div>
      </main>

      {/* Floating Animated 3D Character */}
      <motion.div
        className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col items-center"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >

      {/* Animated "Hello" Message */}
      <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-2 px-6 py-4 bg-white text-black rounded-lg shadow-lg"
            >
              Hello! 👋 Let's Connect
            </motion.div>
          )}
        </AnimatePresence>
        {/* Image Animation */}
        <motion.img
          src="/background-image.png"
          alt="3D Character"
          className="w-[200px] h-[200px] object-contain cursor-pointer md:w-[450px] md:h-[450px]"
          whileHover={{ scale: 1, rotate: 0 }}
          transition={{ type: "", stiffness: 300 }}
        />

      </motion.div>
    </div>
  );
}

export default LandingPage;
