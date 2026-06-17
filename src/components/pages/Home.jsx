import React, { useState, useEffect, useCallback, memo } from "react"
import { Mail, ExternalLink, Instagram, Github, Linkedin } from "lucide-react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

/* ─── Typing constants ─────────────────────────────────────────────────── */
const TYPING_SPEED   = 85
const ERASING_SPEED  = 40
const PAUSE_DURATION = 2200

const WORDS = [
  "Full-Stack Developer",
  "Spring Boot & React",
  "Software Eng. Intern",
  "Problem Solver",
]

const TECH_STACK    = ["Spring Boot", "React", "Node.js", "MongoDB", "MySQL", "Docker"]
const SOCIAL_LINKS  = [
  { icon: Github,    href: "https://github.com/PrabhashSwarnajith",            label: "GitHub"    },
  { icon: Linkedin,  href: "https://www.linkedin.com/in/prabhash-swarnajith/", label: "LinkedIn"  },
  { icon: Instagram, href: "https://www.instagram.com/prabhash_swarnajith/",   label: "Instagram" },
]
const STATS = [
  { value: "2+",   label: "Years Exp"  },
  { value: "20+",  label: "Projects"   },
  { value: "IEEE", label: "Published"  },
]

/* ─── Small atoms ──────────────────────────────────────────────────────── */

const TechPill = memo(({ tech }) => (
  <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-xs text-slate-400 tracking-wide hover:border-indigo-500/30 hover:text-slate-200 transition-colors duration-200 cursor-default whitespace-nowrap flex-shrink-0">
    {tech}
  </span>
))

const SocialBtn = memo(({ icon: Icon, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/[0.05] border border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.1] hover:border-indigo-500/30 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 flex-shrink-0 cursor-pointer"
  >
    <Icon className="w-4 h-4" />
  </a>
))

/* ─── Hero component ───────────────────────────────────────────────────── */

const Home = () => {
  const [text,      setText]      = useState("")
  const [isTyping,  setIsTyping]  = useState(true)
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isLoaded,  setIsLoaded]  = useState(false)

  useEffect(() => { setIsLoaded(true) }, [])

  /* typewriter */
  const tick = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText(p => p + WORDS[wordIndex][charIndex])
        setCharIndex(p => p + 1)
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION)
      }
    } else {
      if (charIndex > 0) {
        setText(p => p.slice(0, -1))
        setCharIndex(p => p - 1)
      } else {
        setWordIndex(p => (p + 1) % WORDS.length)
        setIsTyping(true)
      }
    }
  }, [charIndex, isTyping, wordIndex])

  useEffect(() => {
    const t = setTimeout(tick, isTyping ? TYPING_SPEED : ERASING_SPEED)
    return () => clearTimeout(t)
  }, [tick])

  const smoothScroll = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) window.scrollTo({ top: el.offsetTop - 88, behavior: "smooth" })
  }

  return (
    <section
      id="Home"
      className="relative min-h-screen bg-[#030014] flex flex-col overflow-hidden"
    >
      {/* ── Fade-in wrapper ─────────────────────────────────────────────── */}
      <div className={`flex-1 flex flex-col transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>

        {/*
         * LAYOUT:
         *  mobile  → single column  (pt for floating nav)
         *             Lottie first (order-first), text below (order-last)
         *  lg+     → two columns side-by-side, vertically centered
         *             text left, Lottie right
         */}
        <div className="
          flex-1 flex flex-col lg:flex-row
          items-center lg:justify-between
          max-w-7xl w-full mx-auto
          px-5 sm:px-8 lg:px-12
          pt-24 sm:pt-28 lg:pt-0
          pb-12 lg:pb-0
          gap-0 lg:gap-10
          min-h-screen
        ">

          {/* ══════════════════════════════════════════════════════════════
              LOTTIE — order-first on mobile so it's the visual hook,
              sits in the right column on desktop (order-last / lg:order-last)
          ══════════════════════════════════════════════════════════════ */}
          <div
            className="order-first lg:order-last w-full lg:w-[46%] flex items-center justify-center flex-shrink-0"
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-delay="100"
          >
            {/*
             * Container gives the Lottie explicit dimensions at every bp.
             *
             * Mobile   xs  →  280 × 280 px  (square)
             *          sm  →  340 × 340 px
             *          md  →  420 × 420 px
             * Desktop  lg  →  460 × 460 px
             *          xl  →  540 × 540 px
             *
             * max-w-* on mobile keeps it from stretching to 100 % vw on
             * wide-ish phones; mx-auto centres it.
             */}
            <div className="
              relative
              w-[280px]  h-[280px]
              sm:w-[340px] sm:h-[340px]
              md:w-[420px] md:h-[420px]
              lg:w-full   lg:h-[460px]
              xl:h-[540px]
              mx-auto
            ">
              {/* Soft radial glow behind the animation */}
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-[65%] h-[65%] rounded-full bg-indigo-600/20 blur-3xl" />
                <div className="absolute w-[45%] h-[45%] rounded-full bg-purple-600/15 blur-2xl" />
              </div>

              {/* The Lottie fills the container 1:1 */}
              <DotLottieReact
                src="/Coding.json"
                loop
                autoplay
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              TEXT CONTENT — below Lottie on mobile, left column on desktop
          ══════════════════════════════════════════════════════════════ */}
          <div
            className="order-last lg:order-first w-full lg:w-[54%] flex flex-col gap-5 lg:gap-6"
            data-aos="fade-right"
            data-aos-duration="600"
          >

            {/* — Greeting chip — */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse flex-shrink-0" />
              <span className="text-xs font-medium text-indigo-300 tracking-wide whitespace-nowrap">
                Hey there, I'm Prabhash 👋
              </span>
            </div>

            {/* — Headline — */}
            <h1 className="font-black tracking-tight leading-[1.05] text-[2.5rem] sm:text-5xl md:text-6xl xl:text-[4.5rem]">
              <span className="block bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                Full-Stack
              </span>
              <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-1">
                Developer
              </span>
            </h1>

            {/* — Typewriter — */}
            <div className="flex items-center h-7">
              <span className="text-sm sm:text-lg text-slate-300 font-light tracking-wide">
                {text}
              </span>
              <span className="ml-1 w-[2px] h-[1em] bg-gradient-to-t from-indigo-500 to-purple-400 animate-blink flex-shrink-0" />
            </div>

            {/* — Description — */}
            <p className="text-slate-400 text-sm sm:text-[15px] leading-relaxed max-w-[52ch]">
              Building enterprise-grade full-stack applications with
              <span className="text-indigo-300 font-medium"> Spring Boot</span>,
              <span className="text-purple-300 font-medium"> React</span>, and
              cloud-native tooling. Currently interning at
              <span className="text-slate-200 font-medium"> CW Cloud Solutions</span>.
            </p>

            {/* — Tech pills — horizontal scroll on mobile, wrap on sm+ — */}
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none sm:flex-wrap sm:overflow-x-visible">
              {TECH_STACK.map(t => <TechPill key={t} tech={t} />)}
            </div>

            {/* — CTAs — */}
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Primary */}
              <a
                href="#Portofolio"
                onClick={e => smoothScroll(e, "#Portofolio")}
                className="group inline-flex items-center justify-center gap-2 min-h-[48px] px-6 rounded-xl text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer"
              >
                View Projects
                <ExternalLink className="w-4 h-4 flex-shrink-0 transition-transform duration-300 group-hover:rotate-45" />
              </a>
              {/* Secondary */}
              <a
                href="#Contact"
                onClick={e => smoothScroll(e, "#Contact")}
                className="group inline-flex items-center justify-center gap-2 min-h-[48px] px-6 rounded-xl text-sm font-semibold bg-white/[0.05] border border-white/[0.1] text-slate-300 hover:bg-white/[0.1] hover:text-white hover:border-white/20 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer"
              >
                Contact Me
                <Mail className="w-4 h-4 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* — Stats + socials — */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1">
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

              {/* divider + social row */}
              <div className="flex items-center gap-2">
                <div className="w-px h-7 bg-white/[0.08] flex-shrink-0" />
                {SOCIAL_LINKS.map(s => <SocialBtn key={s.label} {...s} />)}
              </div>
            </div>

          </div>{/* end text column */}
        </div>
      </div>
    </section>
  )
}

export default memo(Home)
