import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, Calendar, MapPin, ExternalLink, Award, Cpu } from "lucide-react";

const publication = {
  title: "Eye Health Monitoring and Eye Care System",
  conference: "ICAC 2025",
  fullConference: "International Conference on Advancements in Computing",
  venue: "SLIIT, Malabe, Sri Lanka",
  date: "December 9–10, 2025",
  indexedBy: ["IEEE Sri Lanka Section", "MongoDB", "SLIIT Faculty of Computing"],
  authors: [
    { name: "Sahao Herath", isMe: false },
    { name: "Prabhash Swarnajith", isMe: true },
    { name: "Heshan Senanayaka", isMe: false },
    { name: "Rashmika Hettiarachchi", isMe: false },
    { name: "Namalie Walgampaya", isMe: false },
    { name: "Rivoni De Zoysa", isMe: false },
  ],
  abstract:
    "An AI-powered system for real-time eye health monitoring and gaze detection using computer vision and machine learning. The system provides interactive eye exercise modules and diagnostic precision tools, aimed at improving eye care accessibility through smarter, data-driven diagnostics.",
  domain: "AI · Computer Vision · Healthcare Tech",
  tech: ["Python", "FastAPI", "OpenCV", "Machine Learning", "Computer Vision"],
  projectName: "OptiTech",
};

const Research = () => (
  <section className="py-20 md:py-28 px-5 sm:px-8 lg:px-[10%] bg-[#030014]" id="Research">
    {/* Section header */}
    <div className="text-center mb-14">
      <motion.span
        className="text-xs font-mono text-indigo-400 tracking-[0.2em] uppercase mb-3 block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        02 — Academic Research
      </motion.span>
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Research &amp;{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
          Publications
        </span>
      </motion.h2>
      <motion.p
        className="text-slate-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Peer-reviewed research presented at IEEE-indexed international conferences.
      </motion.p>
    </div>

    {/* Publication card */}
    <motion.div
      className="max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="group relative bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-indigo-500/25 transition-all duration-400">
        {/* Top accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />

        <div className="p-7 sm:p-10">
          {/* Header row */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex-shrink-0">
                <BookOpen className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 font-mono tracking-wide uppercase">
                    <Award className="w-3 h-3" />
                    {publication.conference}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 font-mono tracking-wide uppercase">
                    IEEE Indexed
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 font-mono tracking-wide uppercase">
                    Published
                  </span>
                </div>
                <p className="text-[11px] text-gray-500 font-mono">{publication.fullConference}</p>
              </div>
            </div>
          </div>

          {/* Paper title */}
          <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-5">
            "{publication.title}"
          </h3>

          {/* Meta info */}
          <div className="flex flex-wrap gap-5 mb-6">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="font-mono">{publication.date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{publication.venue}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Cpu className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{publication.domain}</span>
            </div>
          </div>

          {/* Abstract */}
          <p className="text-[14px] text-gray-400 leading-relaxed mb-6 border-l-2 border-indigo-500/30 pl-4 italic">
            {publication.abstract}
          </p>

          {/* Authors */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-3.5 h-3.5 text-gray-600" />
              <span className="text-[11px] font-mono text-gray-600 uppercase tracking-widest">Authors</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {publication.authors.map((author) => (
                <span
                  key={author.name}
                  className={`text-[12px] px-2.5 py-1 rounded-lg border font-medium ${
                    author.isMe
                      ? "bg-indigo-500/15 border-indigo-500/35 text-indigo-300"
                      : "bg-white/[0.04] border-white/[0.08] text-gray-400"
                  }`}
                >
                  {author.isMe ? "★ " : ""}{author.name}
                </span>
              ))}
            </div>
          </div>

          {/* Tech stack */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {publication.tech.map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.07] text-gray-500 hover:text-gray-300 hover:border-white/[0.12] transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Indexed by / divider */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-white/[0.06]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono text-gray-600 uppercase tracking-wider">Indexed by:</span>
              {publication.indexedBy.map((org) => (
                <span
                  key={org}
                  className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.07] text-gray-500"
                >
                  {org}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-gray-600">Project:</span>
              <span className="text-[11px] font-mono text-indigo-400 font-semibold">{publication.projectName}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default Research;
