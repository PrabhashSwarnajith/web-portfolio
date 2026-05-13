import React from "react";

const categoryColors = {
  Frontend: "from-blue-500/20 to-cyan-500/20 border-blue-500/20 hover:border-blue-400/40",
  Backend: "from-violet-500/20 to-purple-500/20 border-violet-500/20 hover:border-violet-400/40",
  Database: "from-emerald-500/20 to-teal-500/20 border-emerald-500/20 hover:border-emerald-400/40",
  DevOps: "from-orange-500/20 to-amber-500/20 border-orange-500/20 hover:border-orange-400/40",
};

const categoryDots = {
  Frontend: "bg-blue-400",
  Backend: "bg-violet-400",
  Database: "bg-emerald-400",
  DevOps: "bg-orange-400",
};

const TechStackIcon = ({ TechStackIcon: iconSrc, Language, category }) => {
  const colorClass = categoryColors[category] || "from-white/5 to-white/5 border-white/10 hover:border-white/20";
  const dotClass = categoryDots[category] || "bg-gray-400";

  return (
    <div className={`group relative flex flex-col items-center justify-center gap-3 p-5 rounded-xl bg-gradient-to-br ${colorClass} border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default`}>
      {/* Category dot */}
      {category && (
        <span className={`absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full ${dotClass} opacity-60`} />
      )}

      {/* Icon */}
      <div className="relative w-12 h-12 flex items-center justify-center">
        <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
        <img
          src={iconSrc}
          alt={Language}
          className="relative w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        <div
          className="hidden absolute inset-0 items-center justify-center text-lg font-bold text-white/60"
        >
          {Language.charAt(0)}
        </div>
      </div>

      {/* Label */}
      <span className="text-[12px] font-medium text-gray-400 group-hover:text-white transition-colors duration-200 text-center leading-tight">
        {Language}
      </span>
    </div>
  );
};

export default TechStackIcon;
