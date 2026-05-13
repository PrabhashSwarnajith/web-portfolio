import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, CheckCircle2 } from "lucide-react";
import educationData from "../data/education.js";

const EducationCard = ({ data, index }) => (
  <motion.div
    className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/5 to-[#a855f7]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    {/* Shimmer */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden rounded-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
    </div>

    <div className="relative z-10">
      {/* Header row */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366f1] to-[#a855f7] flex items-center justify-center text-2xl flex-shrink-0 shadow-lg shadow-indigo-500/20">
          {data.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-white leading-tight mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#6366f1] group-hover:to-[#a855f7] transition-all duration-300">
            {data.degree}
          </h3>
          <p className="text-indigo-300 text-sm font-medium truncate">{data.institution}</p>
        </div>
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0 border ${
            data.status === "Ongoing"
              ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
              : "bg-white/5 text-gray-300 border-white/10"
          }`}
        >
          {data.status}
        </span>
      </div>

      {/* Meta */}
      <div className="flex flex-wrap gap-4 mb-4">
        <div className="flex items-center gap-1.5 text-gray-400 text-sm">
          <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
          <span>{data.period}</span>
        </div>
        <div className="flex items-center gap-1.5 text-gray-400 text-sm">
          <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
          <span>{data.location}</span>
        </div>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed mb-4">{data.description}</p>

      {/* Achievements */}
      <div className="space-y-2">
        {data.achievements.map((item, i) => (
          <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
            <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const Education = () => {
  return (
    <section className="py-20 px-[5%] sm:px-[5%] lg:px-[10%] bg-[#030014]" id="Education">
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
        <motion.p
          className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My academic background and the educational milestones that built my foundation.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {educationData.map((edu, index) => (
          <EducationCard key={edu.id} data={edu} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Education;
