import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Certificate from "./Certificate";
import TechStackIcon from "./TechStackIcon";
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

  const renderContent = () => {
    switch (activeTab) {
      case "projects":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {projectData.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
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
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Certificate certificateImage={cert.Img} title={cert.Title} />
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
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <TechStackIcon {...tech} />
              </motion.div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

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

      {/* Tabs - Horizontal scrollable on mobile */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 md:mb-16 px-2">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-lg font-medium text-sm md:text-base whitespace-nowrap transition-all duration-300 ${
                isActive
                  ? "bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 shadow-lg shadow-indigo-500/10"
                  : "bg-slate-900/50 text-slate-400 border border-white/10 hover:bg-slate-900/80 hover:text-white hover:border-white/20"
              }`}
            >
              <Icon className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
              <span className="hidden sm:inline">{tab.label}</span>
              <span className={`ml-1 px-2 py-0.5 rounded text-xs font-semibold ${
                isActive
                  ? "bg-indigo-500/30 text-indigo-200"
                  : "bg-white/10 text-slate-400"
              }`}>
                {tab.count}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Content with AnimatePresence for smooth transitions */}
      <div className="max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectShowcase;
