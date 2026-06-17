import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Certificate from "./Certificate";
import TechStackIcon from "./TechStackIcon";
import { Code, Award, Boxes, ChevronLeft, ChevronRight } from "lucide-react";
import { getPublicRepos, getCertificates } from "../utils/github.js";
import projectOverrides from "../data/projects.js";
import techStacks from "../data/techStack.js";

const PROJECTS_PER_PAGE = 6;

const ProjectShowcase = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [githubProjects, setGithubProjects] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [certificates, setCertificates] = useState([]);
  const [loadingCerts, setLoadingCerts] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const overrideMap = Object.fromEntries(
      projectOverrides.map((p) => [p.repoName, p])
    );

    // Fire both requests in parallel — failures are isolated so one never blocks the other
    getPublicRepos().then((repos) => {
      const repoByName = Object.fromEntries(repos.map((r) => [r.name, r]));

      // Only show repos listed in projects.js, in the order defined there
      const mapped = projectOverrides
        .filter((p) => repoByName[p.repoName])
        .map((p) => {
          const repo = repoByName[p.repoName];
          return {
            id: repo.id,
            Title: p.Title || repo.name.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
            Description: p.Description || repo.description || "No description provided.",
            Github: repo.html_url,
            Link: repo.homepage || "",
            Img: p.Img || `https://opengraph.githubassets.com/1/${repo.full_name}`,
          };
        });

      setGithubProjects(mapped);
      setLoadingProjects(false);
    });

    getCertificates().then((certs) => {
      setCertificates(certs);
      setLoadingCerts(false);
    });
  }, []);

  const totalPages = Math.ceil(githubProjects.length / PROJECTS_PER_PAGE);
  const paginatedProjects = githubProjects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    document.getElementById("Portofolio")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const TABS = useMemo(
    () => [
      { id: "projects", label: "Projects", icon: Code, count: githubProjects.length },
      { id: "certificates", label: "Certificates", icon: Award, count: certificates.length },
      { id: "tech-stack", label: "Tech Stack", icon: Boxes, count: techStacks.length },
    ],
    [githubProjects.length, certificates.length]
  );

  const renderContent = () => {
    switch (activeTab) {
      case "projects":
        if (loadingProjects) {
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {Array.from({ length: PROJECTS_PER_PAGE }).map((_, i) => (
                <div key={i} className="rounded-2xl bg-slate-900/60 border border-white/10 h-72 animate-pulse" />
              ))}
            </div>
          );
        }
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {paginatedProjects.map((project, i) => (
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

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 pt-4">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-white/10 bg-slate-900/50 text-slate-400 hover:text-white hover:border-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-9 h-9 rounded-lg text-sm font-medium transition-all duration-200 ${
                      page === currentPage
                        ? "bg-indigo-600/30 text-indigo-300 border border-indigo-500/40"
                        : "border border-white/10 bg-slate-900/50 text-slate-400 hover:text-white hover:border-white/20"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-white/10 bg-slate-900/50 text-slate-400 hover:text-white hover:border-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        );

      case "certificates":
        if (loadingCerts) {
          return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="rounded-xl bg-slate-900/60 border border-white/10 h-56 animate-pulse" />
              ))}
            </div>
          );
        }
        if (certificates.length === 0) {
          return (
            <div className="text-center py-16 text-slate-500">
              <Award className="w-10 h-10 mx-auto mb-3 opacity-30" />
              <p className="text-sm">No certificates found in the GitHub repo yet.</p>
            </div>
          );
        }
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {certificates.map((cert, i) => (
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
              className={`flex items-center gap-2 px-4 md:px-6 py-3 md:py-3 rounded-lg font-medium text-sm md:text-base whitespace-nowrap transition-all duration-300 ${
                isActive
                  ? "bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 shadow-lg shadow-indigo-500/10"
                  : "bg-slate-900/50 text-slate-400 border border-white/10 hover:bg-slate-900/80 hover:text-white hover:border-white/20"
              }`}
            >
              <Icon className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
              <span>{tab.label}</span>
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
