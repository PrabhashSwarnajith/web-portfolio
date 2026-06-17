import React from "react";
import { motion, useInView } from "framer-motion";
import { MapPin } from "lucide-react";
import experiences from "../data/experience.js";

const isPresentJob = (period) =>
  period.toLowerCase().includes("present");

const PeriodDisplay = ({ period }) => {
  const present = isPresentJob(period);
  const parts = period.split("–").map((s) => s.trim());
  return (
    <span className="font-mono text-xs text-gray-400 flex items-center gap-1.5">
      {parts[0]}
      {parts[1] && (
        <>
          <span className="text-gray-600">–</span>
          {present ? (
            <span className="flex items-center gap-1 text-emerald-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
              </span>
              Present
            </span>
          ) : (
            <span>{parts[1]}</span>
          )}
        </>
      )}
    </span>
  );
};

const ExperienceCard = ({ data, index }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isCurrent = isPresentJob(data.period);
  const cardNumber = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      ref={ref}
      className="relative pl-10 sm:pl-16"
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 sm:left-1 top-5 z-10 flex items-center justify-center">
        {isCurrent ? (
          <span className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-40" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-gradient-to-br from-indigo-400 to-purple-500 border-2 border-[#030014] shadow-md shadow-indigo-500/50" />
          </span>
        ) : (
          <span className="h-3 w-3 rounded-full bg-white/20 border border-white/30" />
        )}
      </div>

      {/* Card */}
      <div className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 border-l-[3px] border-l-indigo-500/60 hover:border-white/20 hover:border-l-indigo-400 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 overflow-hidden">
        {/* Hover glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl" />

        {/* Large background number */}
        <span className="absolute top-3 right-5 text-7xl font-black text-white/[0.04] select-none leading-none pointer-events-none">
          {cardNumber}
        </span>

        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl font-bold text-white leading-snug mb-1">
                {data.role}
              </h3>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                <span className="text-indigo-400 text-sm font-semibold">{data.company}</span>
                <span className="flex items-center gap-1 text-gray-500 text-xs">
                  <MapPin className="w-3 h-3" />
                  {data.location}
                </span>
              </div>
            </div>

            {/* Right meta */}
            <div className="flex flex-col items-end gap-2 flex-shrink-0">
              <PeriodDisplay period={data.period} />
              <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                {data.type}
              </span>
            </div>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-5">{data.description}</p>

          {/* Achievements */}
          <ul className="space-y-2 mb-5">
            {data.achievements.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300 group/item">
                <span className="text-indigo-400 font-bold mt-0.5 flex-shrink-0 group-hover/item:text-purple-400 transition-colors">
                  →
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Tech chips */}
          <div className="flex flex-wrap gap-1.5">
            {data.tech.map((t) => (
              <span
                key={t}
                className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-indigo-500/30 transition-colors duration-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const headingRef = React.useRef(null);
  const headingInView = useInView(headingRef, { once: true });

  return (
    <section className="py-20 md:py-28 px-5 sm:px-8 lg:px-[10%] bg-[#030014]" id="Experience">
      {/* Section heading */}
      <div className="mb-16 max-w-4xl mx-auto">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 16 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-mono text-indigo-400 tracking-[0.2em] uppercase mb-3 block">
            03 — Professional
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Experience
            </span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm max-w-xl">
            Roles, responsibilities, and the real-world problems I've helped solve.
          </p>
        </motion.div>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-[6px] sm:left-[9px] top-6 bottom-6 w-px bg-gradient-to-b from-indigo-500/60 via-purple-500/30 to-transparent" />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} data={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
