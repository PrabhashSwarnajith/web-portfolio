import React from 'react';

const TechStackIcon = ({ icon, language, name }) => {
  const iconPath = `/${icon}`;
  const label = language || name;

  return (
    <div className="group relative flex flex-col items-center justify-center p-4 md:p-5 rounded-xl bg-slate-900/40 border border-white/10 hover:border-indigo-500/30 hover:bg-slate-900/60 transition-all duration-300 cursor-default overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-3 right-3 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon */}
      <div className="relative mb-2 md:mb-3 flex items-center justify-center">
        <div className="absolute -inset-3 bg-gradient-to-br from-indigo-500/15 to-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />
        <img
          src={iconPath}
          alt={`${label} icon`}
          className="relative w-8 h-8 md:w-10 md:h-10 object-contain transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1"
          loading="lazy"
        />
      </div>

      {/* Label */}
      <span className="text-slate-400 group-hover:text-slate-200 font-medium text-xs md:text-sm tracking-wide transition-colors duration-300 text-center line-clamp-2 px-1">
        {label}
      </span>

      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default TechStackIcon;
