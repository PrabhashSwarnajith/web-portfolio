import React from 'react';

export const SimpleLogo = () => (
  <div className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40 transition-shadow duration-300 flex-shrink-0">
    <span className="text-sm sm:text-base font-bold text-white select-none">P</span>
  </div>
);

export const LogoWithText = () => (
  <div className="flex items-center gap-2.5 group cursor-pointer">
    <SimpleLogo />
    <div className="hidden sm:flex flex-col leading-tight">
      <span className="text-xs font-semibold text-white group-hover:text-indigo-400 transition-colors">
        Prabhash
      </span>
      <span className="text-[10px] text-slate-400 group-hover:text-indigo-300 transition-colors">
        Developer
      </span>
    </div>
  </div>
);
