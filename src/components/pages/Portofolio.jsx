import React, { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../ProjectCard";
import TechStackIcon from "../TechStackIcon";
import Certificate from "../Certificate";
import { Code, Award, Boxes, ChevronDown, ChevronUp } from "lucide-react";
import projectData from "../../data/projects.js";
import certificateData from "../../data/certificates.js";
import techStacks from "../../data/techStack.js";

const TABS = [
  { label: "Projects", icon: Code },
  { label: "Certificates", icon: Award },
  { label: "Tech Stack", icon: Boxes },
];

const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="group flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary-400/40 backdrop-blur-sm transition-all duration-300"
  >
    {isShowingMore ? (
      <>Show Less <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" /></>
    ) : (
      <>Show More <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" /></>
    )}
  </button>
);

export default function Portfolio() {
  const [value, setValue] = useState(0);
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    setProjects(projectData);
    setCertificates(certificateData);

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const initialItems = isMobile ? 4 : 6;

  const toggleShowMore = useCallback((type) => {
    if (type === "projects") setShowAllProjects((p) => !p);
    else setShowAllCertificates((p) => !p);
  }, []);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, initialItems);
  const displayedCertificates = showAllCertificates ? certificates : certificates.slice(0, initialItems);

  return (
    <div className="py-20 md:py-28 px-5 sm:px-8 lg:px-[10%] w-full bg-[#030014] overflow-hidden" id="Portofolio">

      {/* Section header */}
      <div className="text-center pb-16" data-aos="fade-up" data-aos-duration="800">
        <span className="text-xs font-mono text-indigo-400 tracking-[0.2em] uppercase mb-3 block">
          05 — Showcase
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
            Portfolio
          </span>{" "}
          <span className="text-white">Showcase</span>
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-[15px] mt-4 leading-relaxed">
          Explore my projects, certifications, and the technologies I work with every day.
        </p>
      </div>

      {/* Custom Tab Bar */}
      <div
        className="flex gap-2 p-1.5 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl mb-10 max-w-lg mx-auto"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        {TABS.map((tab, i) => {
          const Icon = tab.icon;
          const active = value === i;
          return (
            <button
              key={tab.label}
              onClick={() => setValue(i)}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                active
                  ? "bg-gradient-to-r from-indigo-600/30 to-purple-600/30 text-white border border-indigo-500/30 shadow-lg shadow-indigo-500/10"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
              aria-selected={active}
              role="tab"
            >
              <Icon className={`w-4 h-4 transition-all duration-300 ${active ? "text-indigo-400" : ""}`} />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {value === 0 && (
          <motion.div
            key="projects"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {displayedProjects.map((project, index) => (
                <div
                  key={project.id || index}
                  data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                  data-aos-duration="800"
                  data-aos-delay={index * 80}
                >
                  <ProjectCard
                    Img={project.Img}
                    Title={project.Title}
                    Description={project.Description}
                    Link={project.Link}
                    Github={project.Github}
                    id={project.id}
                  />
                </div>
              ))}
            </div>
            {projects.length > initialItems && (
              <div className="mt-8 flex justify-center">
                <ToggleButton onClick={() => toggleShowMore("projects")} isShowingMore={showAllProjects} />
              </div>
            )}
          </motion.div>
        )}

        {value === 1 && (
          <motion.div
            key="certificates"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {displayedCertificates.map((cert, index) => (
                <div
                  key={cert.id || index}
                  data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                  data-aos-duration="800"
                  data-aos-delay={index * 80}
                >
                  <Certificate certificateImage={cert.Img} title={cert.Title} />
                </div>
              ))}
            </div>
            {certificates.length > initialItems && (
              <div className="mt-8 flex justify-center">
                <ToggleButton onClick={() => toggleShowMore("certificates")} isShowingMore={showAllCertificates} />
              </div>
            )}
          </motion.div>
        )}

        {value === 2 && (
          <motion.div
            key="techstack"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
              {techStacks.map((stack, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-duration="500"
                  data-aos-delay={index * 40}
                >
                  <TechStackIcon TechStackIcon={`/${stack.icon}`} Language={stack.language} />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
