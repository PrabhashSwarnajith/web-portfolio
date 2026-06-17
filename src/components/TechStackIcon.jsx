import React from 'react';

const TechStackIcon = ({ TechStackIcon: iconSrc, Language }) => {
  return (
    <div className="group relative h-full flex flex-col items-center justify-center p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-indigo-500/30 hover:bg-white/[0.06] transition-all duration-300 cursor-default overflow-hidden">
      {/* Top accent line — reveals on hover */}
      <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon */}
      <div className="relative mb-3 flex items-center justify-center">
        <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
        <img
          src={iconSrc}
          alt={`${Language} icon`}
          className="relative w-12 h-12 md:w-14 md:h-14 object-contain transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-0.5"
          loading="lazy"
        />
      </div>

      {/* Label */}
      <span className="text-gray-500 group-hover:text-gray-200 font-medium text-xs md:text-sm tracking-wide transition-colors duration-300 text-center line-clamp-1">
        {Language}
      </span>

      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default TechStackIcon;
