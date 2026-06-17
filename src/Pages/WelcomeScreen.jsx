import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [stage, setStage]     = useState('in');   // 'in' → 'out'
  const [barDone, setBarDone] = useState(false);

  useEffect(() => {
    /* progress bar finishes at 2.4 s → start exit at 2.6 s → call done at 3.1 s */
    const t1 = setTimeout(() => setBarDone(true),         2400);
    const t2 = setTimeout(() => setStage('out'),           2600);
    const t3 = setTimeout(() => onLoadingComplete?.(),     3100);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {stage === 'in' && (
        <motion.div
          key="welcome"
          className="fixed inset-0 z-[9999] bg-[#030014] flex flex-col items-center justify-center overflow-hidden select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, filter: 'blur(8px)' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {/* Ambient blobs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative flex flex-col items-center gap-5 px-6 text-center">

            {/* Mono domain chip */}
            <motion.span
              className="text-[11px] font-mono text-indigo-400/70 tracking-[0.25em] uppercase"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              prabhashswarnajith.tech
            </motion.span>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-300">
                  Prabhash
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                  Swarnajith
                </span>
              </h1>
            </motion.div>

            {/* Title */}
            <motion.p
              className="text-slate-400 text-sm sm:text-base font-light tracking-widest uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Full-Stack Developer
            </motion.p>

            {/* Progress bar */}
            <motion.div
              className="w-48 sm:w-64 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <div className="h-[2px] w-full bg-white/[0.07] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-progress-fill"
                />
              </div>
              <p className={`text-[10px] font-mono tracking-widest mt-2 transition-colors duration-500 ${
                barDone ? 'text-indigo-400' : 'text-slate-600'
              }`}>
                {barDone ? 'READY' : 'LOADING'}
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
