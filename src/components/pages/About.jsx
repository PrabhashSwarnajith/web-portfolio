import React, { memo, useMemo, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FileText, Code, Award, Globe, ArrowUpRight } from "lucide-react"
import { getPublicRepos, getCertificates } from "../../utils/github.js"

const profile = "/assets/Photo.jpg"
const cv = "/assets/Prabhash Swarnajith - Resume.pdf"

/* ─── Profile image ─────────────────────────────────────────────────────── */
const ProfileImage = memo(() => (
  <div
    className="flex justify-center lg:justify-end"
    data-aos="fade-left"
    data-aos-duration="500"
  >
    <div className="relative group">
      {/* Ambient ring */}
      <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-pink-500/20 blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-700 hidden sm:block" />

      {/* Photo frame */}
      <div className="relative w-44 h-44 sm:w-60 sm:h-60 lg:w-80 lg:h-80 rounded-full overflow-hidden ring-2 ring-white/10 group-hover:ring-indigo-500/40 transition-all duration-500 shadow-2xl shadow-indigo-500/10">
        <img
          src={profile}
          alt="Prabhash Swarnajith"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        {/* Subtle inner overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/30 to-transparent opacity-70 group-hover:opacity-30 transition-opacity duration-500" />
      </div>

      {/* Floating badge */}
      <div className="absolute -bottom-2 -right-2 sm:bottom-4 sm:right-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#030014] border border-indigo-500/30 shadow-lg">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs font-medium text-emerald-300 whitespace-nowrap">Open to work</span>
      </div>
    </div>
  </div>
))

/* ─── Stat card ─────────────────────────────────────────────────────────── */
const StatCard = memo(({ icon: Icon, value, label, description, index }) => (
  <motion.div
    className="group relative bg-white/[0.03] border border-white/[0.07] rounded-2xl p-3 sm:p-5 overflow-hidden hover:border-white/15 hover:bg-white/[0.05] transition-all duration-300 cursor-pointer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    {/* Subtle top accent */}
    <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    <div className="flex items-start justify-between gap-2">
      <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center bg-white/[0.06] border border-white/[0.08] group-hover:border-indigo-500/30 transition-colors duration-300 flex-shrink-0">
        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />
      </div>
      <span className="text-xl sm:text-3xl font-black text-white tabular-nums leading-none pt-0.5">
        {value}
      </span>
    </div>

    <div className="mt-2 sm:mt-4">
      <p className="text-xs sm:text-sm font-semibold text-slate-300 mb-0.5">{label}</p>
      <p className="hidden sm:flex text-xs text-slate-500 items-center justify-between">
        {description}
        <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-indigo-400 transition-colors" />
      </p>
    </div>
  </motion.div>
))

/* ─── Page component ─────────────────────────────────────────────────────── */
const AboutPage = () => {
  const [repoCount, setRepoCount] = useState("…")
  const [certCount, setCertCount] = useState("…")

  useEffect(() => {
    getPublicRepos().then((repos) => setRepoCount(repos.length))
    getCertificates().then((certs) => setCertCount(certs.length))
  }, [])

  const YearExperience = useMemo(() => {
    const start = new Date("2023-11-06")
    const now   = new Date()
    return now.getFullYear() - start.getFullYear() -
      (now < new Date(now.getFullYear(), start.getMonth(), start.getDate()) ? 1 : 0)
  }, [])

  const stats = useMemo(() => [
    { icon: Code,  value: repoCount,      label: "Projects Built",   description: "Public repos on GitHub" },
    { icon: Award, value: certCount,      label: "Certifications",   description: "Skills validated"       },
    { icon: Globe, value: YearExperience, label: "Years Experience", description: "Continuous learning"    },
  ], [repoCount, certCount, YearExperience])

  return (
    <section className="py-20 md:py-28 px-5 sm:px-8 lg:px-[10%] bg-[#030014]" id="About">

      {/* ── Section header ─────────────────────────────────────────── */}
      <div className="text-center mb-14 md:mb-16">
        <motion.span
          className="text-xs font-mono text-indigo-400 tracking-[0.2em] uppercase mb-3 block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          00 — About
        </motion.span>
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            Me
          </span>
        </motion.h2>
        <motion.p
          className="text-slate-500 max-w-xl mx-auto text-sm md:text-[15px] leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Building efficient, scalable software that solves real problems.
        </motion.p>
      </div>

      {/* ── Bio + image ────────────────────────────────────────────── */}
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-5xl mx-auto">

        {/* Left — text */}
        <div className="space-y-6" data-aos="fade-right" data-aos-duration="500">
          <div>
            <p className="text-xl sm:text-2xl font-semibold text-indigo-400 mb-1">Hello, I'm</p>
            <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Prabhash Swarnajith
            </h3>
          </div>

          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            A Full-Stack Developer and Software Engineering Intern at
            <span className="text-slate-200 font-medium"> CW Cloud Solutions</span>, specializing in
            enterprise applications with <span className="text-indigo-300 font-medium">Spring Boot</span>,
            <span className="text-purple-300 font-medium"> React</span>, and cloud-native tools.
            I'm passionate about building robust digital products and delivering seamless user experiences.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2" data-aos="fade-up" data-aos-duration="500">
            <a
              href={cv}
              download
              className="inline-flex items-center justify-center gap-2 px-6 min-h-[48px] rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold hover:from-indigo-500 hover:to-purple-500 hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              Download CV
            </a>
            <a
              href="#Portofolio"
              className="inline-flex items-center justify-center gap-2 px-6 min-h-[48px] rounded-xl bg-white/[0.05] border border-white/[0.1] text-slate-300 text-sm font-semibold hover:bg-white/[0.1] hover:text-white hover:border-indigo-500/30 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer"
            >
              <Code className="w-4 h-4" />
              View Projects
            </a>
          </div>
        </div>

        {/* Right — image */}
        <ProfileImage />
      </div>

      {/* ── Stat cards ─────────────────────────────────────────────── */}
      <a href="#Portofolio" className="block mt-12 md:mt-16 max-w-5xl mx-auto cursor-pointer">
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} />
          ))}
        </div>
      </a>

    </section>
  )
}

export default memo(AboutPage)
