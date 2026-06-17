import React, { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Code, Award, Boxes } from "lucide-react";
import projectData from "../data/projects.js";
import certificateData from "../data/certificates.js";
import techStacks from "../data/techStack.js";

const ProjectShowcase = () => {
  const [activeTab, setActiveTab] = useState("projects");

  const TABS = useMemo(
    () => [
      { id: "projects", label: "Projects", icon: Code, count: projectData.length },
      { id: "certificates", label: "Certificates", icon: Award, count: certificateData.length },
      { id: "tech-stack", label: "Tech Stack", icon: Boxes, count: techStacks.length },
    ],
    []
  );

  const getTabContent = useCallback(() => {
    switch (activeTab) {
      case "projects":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {projectData.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        );
      case "certificates":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {certificateData.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="relative group rounded-xl overflow-hidden bg-slate-900/50 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 h-60 cursor-pointer">
                  <img
                    src={cert.Img}
                    alt={cert.Title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <p className="text-white text-center text-sm font-semibold line-clamp-3">
                      {cert.Title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );
      case "tech-stack":
        return (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {techStacks.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group flex flex-col items-center gap-2 p-3 md:p-4 rounded-lg bg-slate-900/30 border border-white/10 hover:border-indigo-500/30 hover:bg-slate-900/50 transition-all duration-300"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="text-xs md:text-sm font-medium text-slate-400 text-center group-hover:text-indigo-300 transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        );
      default:
        return null;
    }
  }, [activeTab]);

  return (
    <section className="py-20 md:py-28 px-5 sm:px-8 lg:px-[10%] bg-[#030014]" id="Portofolio">
      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        <motion.span
          className="text-xs font-mono text-indigo-400 tracking-[0.2em] uppercase block mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          04 — Portfolio
        </motion.span>
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          My Work &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            Experience
          </span>
        </motion.h2>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 md:mb-16">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-lg font-medium text-sm md:text-base transition-all duration-300 ${
                isActive
                  ? "bg-indigo-600/20 text-indigo-300 border border-indigo-500/30"
                  : "bg-slate-900/50 text-slate-400 border border-white/10 hover:bg-slate-900/80 hover:text-white"
              }`}
            >
              <Icon className="w-4 h-4 md:w-5 md:h-5" />
              <span>{tab.label}</span>
              <span className="ml-1 px-2 py-0.5 rounded bg-white/10 text-xs font-semibold">
                {tab.count}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {getTabContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectShowcase;
