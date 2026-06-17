import React, { useState, useEffect, useCallback, memo } from "react"
import { Linkedin, Mail, ExternalLink, Instagram, Github } from "lucide-react"
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

/* ─── Sub-components ───────────────────────────────────────────────────── */

const TechPill = memo(({ tech }) => (
  <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-xs text-slate-400 tracking-wide hover:border-indigo-500/30 hover:text-slate-200 transition-all duration-200 cursor-default">
    {tech}
  </span>
))

const CTAButton = memo(({ href, text, icon: Icon, primary = false }) => (
  <a
    href={href}
    className={`group inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 w-full sm:w-auto ${
      primary
        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40"
        : "bg-white/[0.05] border border-white/[0.1] text-slate-300 hover:bg-white/[0.1] hover:text-white hover:border-white/20"
    }`}
  >
    {text}
    <Icon className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${
      primary ? "group-hover:rotate-45" : "group-hover:translate-x-0.5"
    }`} />
  </a>
))

const SocialLink = memo(({ icon: Icon, link, label }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.1] hover:border-indigo-500/30 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 flex-shrink-0"
  >
    <Icon className="w-4 h-4" />
  </a>
))

/* ─── Constants ────────────────────────────────────────────────────────── */

const TYPING_SPEED   = 90
const ERASING_SPEED  = 45
const PAUSE_DURATION = 2000

const WORDS = [
  "Full-Stack Developer",
  "Spring Boot & React",
  "Software Eng. Intern",
  "Problem Solver",
]

const TECH_STACK = ["Spring Boot", "React", "Node.js", "MongoDB", "MySQL", "Docker"]

const SOCIAL_LINKS = [
  { icon: Github,    link: "https://github.com/PrabhashSwarnajith",            label: "GitHub"    },
  { icon: Linkedin,  link: "https://www.linkedin.com/in/prabhash-swarnajith/", label: "LinkedIn"  },
  { icon: Instagram, link: "https://www.instagram.com/prabhash_swarnajith/",   label: "Instagram" },
]

const STATS = [
  { value: "2+",   label: "Years Exp"  },
  { value: "20+",  label: "Projects"   },
  { value: "IEEE", label: "Published"  },
]

/* ─── Page ─────────────────────────────────────────────────────────────── */

const Home = () => {
  const [text,       setText]       = useState("")
  const [isTyping,   setIsTyping]   = useState(true)
  const [wordIndex,  setWordIndex]  = useState(0)
  const [charIndex,  setCharIndex]  = useState(0)
  const [isLoaded,   setIsLoaded]   = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => { setIsLoaded(true) }, [])

  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText(prev => prev + WORDS[wordIndex][charIndex])
        setCharIndex(prev => prev + 1)
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION)
      }
    } else {
      if (charIndex > 0) {
        setText(prev => prev.slice(0, -1))
        setCharIndex(prev => prev - 1)
      } else {
        setWordIndex(prev => (prev + 1) % WORDS.length)
        setIsTyping(true)
      }
    }
  }, [charIndex, isTyping, wordIndex])

  useEffect(() => {
    const t = setTimeout(handleTyping, isTyping ? TYPING_SPEED : ERASING_SPEED)
    return () => clearTimeout(t)
  }, [handleTyping])

  return (
    <section className="relative min-h-screen bg-[#030014] flex flex-col" id="Home">
      <div className={`flex-1 flex flex-col transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <div className="flex-1 max-w-7xl w-full mx-auto px-5 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-12 pt-[88px] pb-10 lg:py-0 min-h-screen">

          {/* ── LEFT — Text content ─────────────────────── */}
          <div
            className="w-full lg:w-[54%] flex flex-col gap-5 lg:gap-6"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            {/* Greeting chip */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse flex-shrink-0" />
              <span className="text-xs font-medium text-indigo-300 tracking-wide whitespace-nowrap">
                Hey there, I'm Prabhash 👋
              </span>
            </div>

            {/* Main title */}
            <h1 className="text-[2.6rem] sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05]">
              <span className="block bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                Full-Stack
              </span>
              <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-1">
                Developer
              </span>
            </h1>

            {/* Typing effect */}
            <div className="flex items-center h-7">
              <span className="text-base sm:text-lg text-slate-300 font-light tracking-wide">
                {text}
              </span>
              <span className="w-[2px] h-5 bg-gradient-to-t from-indigo-500 to-purple-400 ml-1 animate-blink flex-shrink-0" />
            </div>

            {/* Description */}
            <p className="text-slate-400 text-sm sm:text-base md:text-[15px] leading-relaxed max-w-lg">
              Building enterprise-grade full-stack applications with
              <span className="text-indigo-300 font-medium"> Spring Boot</span>,
              <span className="text-purple-300 font-medium"> React</span>, and
              cloud-native tooling. Currently interning at
              <span className="text-slate-200 font-medium"> CW Cloud Solutions</span>.
            </p>

            {/* Tech pills — hidden on xs, shown sm+ */}
            <div className="hidden sm:flex flex-wrap gap-2">
              {TECH_STACK.map(tech => <TechPill key={tech} tech={tech} />)}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <CTAButton href="#Portofolio" text="View Projects" icon={ExternalLink} primary />
              <CTAButton href="#Contact"    text="Contact Me"   icon={Mail} />
            </div>

            {/* Stats + social — two-row on mobile, single row on sm+ */}
            <div className="pt-1 space-y-3 sm:space-y-0">
              {/* Stats row */}
              <div className="flex items-center gap-5 sm:gap-6">
                {STATS.map((s, i) => (
                  <React.Fragment key={s.label}>
                    <div className="flex flex-col items-start">
                      <span className="text-xl sm:text-2xl font-black text-white leading-none">{s.value}</span>
                      <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium mt-0.5 tracking-wide whitespace-nowrap">{s.label}</span>
                    </div>
                    {i < STATS.length - 1 && (
                      <div className="w-px h-7 bg-white/[0.08] flex-shrink-0" />
                    )}
                  </React.Fragment>
                ))}
                {/* Social icons — visible sm+ inline, mobile gets its own row below */}
                <div className="hidden sm:flex items-center gap-2 ml-2">
                  <div className="w-px h-7 bg-white/[0.08] mr-2 flex-shrink-0" />
                  {SOCIAL_LINKS.map(s => <SocialLink key={s.label} {...s} />)}
                </div>
              </div>

              {/* Social icons — mobile only row */}
              <div className="flex sm:hidden items-center gap-2">
                {SOCIAL_LINKS.map(s => <SocialLink key={s.label} {...s} />)}
              </div>
            </div>
          </div>

          {/* ── RIGHT — Lottie animation (hidden on mobile) ─── */}
          <div
            className="hidden md:flex w-full lg:w-[46%] items-center justify-center"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            data-aos="fade-left"
            data-aos-duration="700"
            data-aos-delay="150"
          >
            {/* Fixed-height container that clips the Lottie's built-in whitespace */}
            <div className="relative w-full h-[360px] sm:h-[440px] lg:h-[520px] xl:h-[600px] rounded-2xl overflow-hidden group">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10" />

              {/* Ambient glow - animated */}
              <div className={`absolute inset-0 transition-all duration-700 ${
                isHovering ? "opacity-100" : "opacity-40"
              }`}>
                <div className="absolute inset-20 bg-gradient-to-br from-indigo-500/30 to-purple-500/20 rounded-full blur-3xl" />
              </div>

              {/* Lottie Animation - centered and sized properly */}
              <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ${
                isHovering ? "scale-105" : "scale-100"
              }`}>
                <DotLottieReact
                  src="/Coding.json"
                  loop
                  autoplay
                  style={{
                    width: "110%",
                    height: "110%",
                    objectFit: "contain",
                  }}
                  className="drop-shadow-lg"
                />
              </div>

              {/* Border effect */}
              <div className="absolute inset-0 rounded-2xl border border-indigo-500/0 group-hover:border-indigo-500/30 transition-all duration-500 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default memo(Home)
