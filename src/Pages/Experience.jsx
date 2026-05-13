import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import experiences from "../data/experience.js";

const ExperienceCard = ({ data, index }) => (
  <motion.div
    className="relative pl-8 sm:pl-14"
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
  >
    {/* Timeline dot */}
    <div className="absolute left-0 sm:left-[3px] top-2 w-4 h-4 rounded-full bg-gradient-to-br from-[#6366f1] to-[#a855f7] border-2 border-[#030014] shadow-lg shadow-indigo-500/40 z-10" />

    <div className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10">
      <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/5 to-[#a855f7]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Shimmer */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#6366f1] group-hover:to-[#a855f7] transition-all duration-300">
              {data.role}
            </h3>
            <div className="flex items-center gap-4 mt-1.5 flex-wrap">
              <div className="flex items-center gap-1.5 text-gray-400">
                <Briefcase className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="text-sm">{data.company}</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-400">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="text-sm">{data.location}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2 flex-shrink-0">
            <span className="flex items-center gap-1.5 text-xs font-medium text-gray-300 bg-white/10 px-3 py-1 rounded-full border border-white/10">
              <Calendar className="w-3 h-3" />
              {data.period}
            </span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-[#6366f1]/20 to-[#a855f7]/20 text-purple-300 border border-purple-500/20">
              {data.type}
            </span>
          </div>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-4">{data.description}</p>

        {/* Achievements */}
        <ul className="space-y-2 mb-5">
          {data.achievements.map((achievement, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
              <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {data.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:border-indigo-500/30 hover:text-white transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    <section className="py-20 px-[5%] sm:px-[5%] lg:px-[10%] bg-[#030014]" id="Experience">
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>
        <motion.p
          className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My professional journey and the projects that have shaped my development career.
        </motion.p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical timeline line */}
        <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-0 w-px bg-gradient-to-b from-[#6366f1] via-[#a855f7] to-transparent" />

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
