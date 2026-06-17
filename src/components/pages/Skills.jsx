import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillCategories = [
  {
    num: "01",
    title: "Frontend Development",
    color: "from-blue-500 to-cyan-400",
    dot: "bg-blue-400",
    items: [
      { name: "HTML5 & CSS3", level: 93 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "React.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "TypeScript", level: 72 },
      { name: "Bootstrap", level: 80 },
    ],
  },
  {
    num: "02",
    title: "Backend & Languages",
    color: "from-violet-500 to-purple-500",
    dot: "bg-violet-400",
    items: [
      { name: "Java", level: 84 },
      { name: "Spring Boot", level: 82 },
      { name: "ASP.NET Core (.NET 8)", level: 76 },
      { name: "Node.js / Express.js", level: 78 },
      { name: "FastAPI (Python)", level: 68 },
      { name: "C++ / Kotlin", level: 65 },
    ],
  },
  {
    num: "03",
    title: "Database & APIs",
    color: "from-emerald-500 to-teal-400",
    dot: "bg-emerald-400",
    items: [
      { name: "MongoDB", level: 80 },
      { name: "MySQL & PostgreSQL", level: 78 },
      { name: "RESTful APIs", level: 90 },
      { name: "Microsoft Graph API", level: 74 },
      { name: "SignalR (Real-time)", level: 70 },
      { name: "Google Workspace API", level: 68 },
    ],
  },
  {
    num: "04",
    title: "Tools, DevOps & AI",
    color: "from-orange-500 to-amber-400",
    dot: "bg-orange-400",
    items: [
      { name: "Git & GitHub", level: 88 },
      { name: "Docker", level: 74 },
      { name: "Postman / Swagger", level: 85 },
      { name: "JWT / Spring Security", level: 78 },
      { name: "n8n (Automation)", level: 76 },
      { name: "OpenAI API / AI Tools", level: 72 },
    ],
  },
];

const SkillBar = ({ name, level, dot }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <div ref={ref} className="space-y-1.5 group/bar">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dot} opacity-60`} />
          <span className="text-[13px] text-gray-400 group-hover/bar:text-gray-200 transition-colors truncate">{name}</span>
        </div>
        <span className="text-[11px] font-mono text-gray-600 flex-shrink-0 tabular-nums">{level}%</span>
      </div>
      <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${level}%` : 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.05 }}
        />
      </div>
    </div>
  );
};

const SkillCategory = ({ data, index }) => (
  <motion.div
    className="group relative bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 hover:border-white/[0.13] hover:bg-white/[0.05] transition-all duration-300"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
  >
    {/* Top accent line */}
    <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${data.color} opacity-40 group-hover:opacity-80 transition-opacity duration-300`} />

    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2.5">
        <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${data.color}`} />
        <h3 className="text-sm font-semibold text-white">{data.title}</h3>
      </div>
      <span className="text-[11px] font-mono text-gray-700">{data.num}</span>
    </div>

    <div className="space-y-3.5">
      {data.items.map((skill) => (
        <SkillBar key={skill.name} {...skill} dot={data.dot} />
      ))}
    </div>
  </motion.div>
);

const Skills = () => (
  <section className="py-20 md:py-28 px-5 sm:px-8 lg:px-[10%] bg-[#030014]" id="Skills">
    <div className="text-center mb-16">
      <motion.span
        className="text-xs font-mono text-indigo-400 tracking-[0.2em] uppercase mb-3 block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        01 — Technical
      </motion.span>
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Skills &amp;{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
          Expertise
        </span>
      </motion.h2>
      <motion.p
        className="text-slate-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        A comprehensive overview of my technical proficiencies across frontend, backend, databases, and DevOps.
      </motion.p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
      {skillCategories.map((cat, i) => (
        <SkillCategory key={cat.title} data={cat} index={i} />
      ))}
    </div>
  </section>
);

export default Skills;
