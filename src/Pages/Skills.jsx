import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Code2, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    color: "from-blue-500 to-cyan-400",
    bgGlow: "group-hover:shadow-blue-500/10",
    items: [
      { name: "HTML5", level: 95, icon: "html.svg" },
      { name: "CSS3", level: 90, icon: "css.svg" },
      { name: "JavaScript", level: 88, icon: "javascript.svg" },
      { name: "React.js", level: 85, icon: "reactjs.svg" },
      { name: "Tailwind CSS", level: 88, icon: "tailwind.svg" },
      { name: "Bootstrap", level: 80, icon: "bootstrap.svg" },
    ],
  },
  {
    title: "Backend",
    icon: Code2,
    color: "from-violet-500 to-purple-500",
    bgGlow: "group-hover:shadow-violet-500/10",
    items: [
      { name: "Java", level: 82, icon: "java.svg" },
      { name: "Spring Boot", level: 80, icon: "spring-boot.svg" },
      { name: "Node.js", level: 75, icon: "nodejs.svg" },
      { name: "Express.js", level: 72, icon: "expressjs.svg" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    color: "from-emerald-500 to-green-400",
    bgGlow: "group-hover:shadow-emerald-500/10",
    items: [
      { name: "MongoDB", level: 78, icon: "mongodb.svg" },
      { name: "MySQL", level: 75, icon: "javascript.svg" },
      { name: "PostgreSQL", level: 70, icon: "postgresql.svg" },
      { name: "Firebase", level: 75, icon: "firebase.svg" },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    color: "from-orange-500 to-amber-400",
    bgGlow: "group-hover:shadow-orange-500/10",
    items: [
      { name: "Git & GitHub", level: 85, icon: "github.svg" },
      { name: "Docker", level: 65, icon: "docker.svg" },
      { name: "Ubuntu", level: 70, icon: "ubuntu.svg" },
      { name: "Vite", level: 80, icon: "vite.svg" },
    ],
  },
];

const SkillBar = ({ name, level, icon }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={`/${icon}`}
            alt={name}
            className="w-4 h-4 object-contain"
            onError={(e) => { e.target.style.display = "none"; }}
          />
          <span className="text-sm font-medium text-gray-300">{name}</span>
        </div>
        <span className="text-xs font-semibold text-gray-400 tabular-nums">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${level}%` : 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.15 }}
        />
      </div>
    </div>
  );
};

const SkillCategory = ({ title, data, index }) => (
  <motion.div
    className={`group relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl ${data.bgGlow}`}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
  >
    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${data.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300`} />

    <div className="flex items-center gap-3 mb-6">
      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${data.color} bg-opacity-20 shadow-lg`}>
        <data.icon className="w-5 h-5 text-white" />
      </div>
      <h3 className="text-base font-semibold text-white">{title}</h3>
    </div>

    <div className="space-y-4">
      {data.items.map((skill) => (
        <SkillBar key={skill.name} {...skill} />
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section className="py-20 px-[5%] sm:px-[5%] lg:px-[10%] bg-[#030014]" id="Skills">
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>
        <motion.p
          className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A comprehensive overview of my technical skills and proficiency levels across different domains.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <SkillCategory key={category.title} title={category.title} data={category} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
