import React from "react";
import { motion, useInView } from "framer-motion";
import { MapPin } from "lucide-react";
import educationData from "../../data/education.js";

const isSLIIT = (institution) =>
  institution.toLowerCase().includes("sliit") ||
  institution.toLowerCase().includes("sri lanka institute");

const StatusBadge = ({ status }) => {
  if (status === "Ongoing") {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/25">
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
        </span>
        Ongoing
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">
      Completed
    </span>
  );
};

const EducationCard = ({ data, index }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const featured = isSLIIT(data.institution);

  const topBarClass = featured
    ? "bg-gradient-to-r from-indigo-500 to-purple-500"
    : "bg-gradient-to-r from-purple-600 to-fuchsia-500";

  return (
    <motion.div
      ref={ref}
      className={`group relative bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden
        hover:border-white/20 hover:shadow-xl transition-all duration-300
        ${featured ? "hover:shadow-indigo-500/10" : "hover:shadow-purple-500/10"}
        ${featured ? "lg:row-span-1" : ""}`}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.13, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Top colored bar */}
      <div className={`h-1 w-full ${topBarClass}`} />

      {/* Hover glow */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400
          ${featured
            ? "bg-gradient-to-br from-indigo-500/5 to-purple-500/5"
            : "bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5"}`}
      />

      {/* Floating emoji backdrop */}
      <span className="absolute right-4 bottom-4 text-9xl select-none pointer-events-none opacity-[0.07] leading-none">
        {data.icon}
      </span>

      <div className="relative z-10 p-6">
        {/* Featured indicator */}
        {featured && (
          <div className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-full mb-4">
            <span className="w-1 h-1 rounded-full bg-indigo-400" />
            Main Degree
          </div>
        )}

        {/* Status badge */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-white leading-snug mb-1 pr-2">
              {data.degree}
            </h3>
            <p className="text-indigo-400 text-sm font-medium">{data.institution}</p>
          </div>
          <div className="flex-shrink-0">
            <StatusBadge status={data.status} />
          </div>
        </div>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <span className="font-mono text-xs text-gray-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
            {data.period}
          </span>
          <span className="flex items-center gap-1 text-gray-500 text-xs">
            <MapPin className="w-3 h-3 flex-shrink-0" />
            {data.location}
          </span>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-5">{data.description}</p>

        {/* Achievements */}
        <ul className="space-y-2">
          {data.achievements.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
              <span
                className={`mt-0.5 flex-shrink-0 font-bold ${
                  featured ? "text-indigo-400" : "text-purple-400"
                }`}
              >
                ›
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Education = () => {
  const headingRef = React.useRef(null);
  const headingInView = useInView(headingRef, { once: true });

  return (
    <section className="py-20 md:py-28 px-5 sm:px-8 lg:px-[10%] bg-[#030014]" id="Education">
      {/* Section heading */}
      <div className="mb-16 max-w-5xl mx-auto">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 16 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-mono text-indigo-400 tracking-[0.2em] uppercase mb-3 block">
            04 — Academic
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Education &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Background
            </span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm max-w-xl">
            The academic milestones and institutions that built my technical foundation.
          </p>
        </motion.div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-5xl mx-auto">
        {educationData.map((edu, index) => (
          <EducationCard key={edu.id} data={edu} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Education;
