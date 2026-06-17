import React from 'react';

export const SimpleLogo = () => (
  <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/50 transition-all duration-300 flex-shrink-0 relative group">
    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />
    <span className="relative text-xs sm:text-sm font-black text-white select-none tracking-tight">PS</span>
  </div>
);

export const LogoWithText = () => (
  <div className="flex items-center gap-2.5 group cursor-pointer">
    <SimpleLogo />
    <div className="hidden sm:flex flex-col leading-tight">
      <span className="text-xs font-semibold text-white group-hover:text-indigo-400 transition-colors">
        Prabhash Swarnjith
      </span>
      <span className="text-[10px] text-slate-400 group-hover:text-indigo-300 transition-colors">
        Developer
      </span>
    </div>
  </div>
);
