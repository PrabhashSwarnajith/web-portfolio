import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Github, Cpu } from "lucide-react";

const TypewriterEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 45);
    return () => clearInterval(timer);
  }, [text]);

  return (
    <span>
      {displayText}
      <span className="animate-pulse text-indigo-400">|</span>
    </span>
  );
};

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => onLoadingComplete?.(), 800);
    }, 3500);
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  const containerVariants = {
    exit: {
      opacity: 0,
      scale: 1.05,
      filter: "blur(12px)",
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 bg-[#030014] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit="exit"
          variants={containerVariants}
        >
          {/* Background glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-600/15 to-purple-600/15 rounded-full blur-3xl animate-pulse" />
          </div>

          <div className="relative text-center max-w-2xl mx-auto">
            {/* Icon row */}
            <motion.div
              className="flex justify-center gap-5 mb-10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {[Code2, Cpu, Github].map((Icon, i) => (
                <div key={i} className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-60 transition duration-300" />
                  <div className="relative p-3 bg-black/60 backdrop-blur-sm rounded-full border border-white/10">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Welcome text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <p className="text-gray-400 text-sm tracking-widest uppercase mb-3 font-medium">Welcome to</p>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-2">
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                  Prabhash
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
                  Swarnajith
                </span>
              </h1>
              <p className="text-gray-500 text-base sm:text-lg mt-3 font-light">
                Software Engineering Intern · Full-Stack Developer · AI Integration
              </p>
            </motion.div>

            {/* Subtitle typewriter */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <span className="text-sm sm:text-base text-indigo-300 font-mono">
                <TypewriterEffect text="github.com/PrabhashSwarnajith" />
              </span>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              className="mt-10 w-48 mx-auto h-0.5 bg-white/10 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
