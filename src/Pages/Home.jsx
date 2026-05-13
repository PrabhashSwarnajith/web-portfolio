import React, { useState, useEffect, useCallback, memo } from "react";
import { Github, Linkedin, Mail, Download, ChevronDown, ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import cv from "../assets/Prabhash Swarnajith - Resume.pdf";

const TYPING_SPEED = 85;
const ERASING_SPEED = 40;
const PAUSE_DURATION = 2000;
const WORDS = ["Full-Stack Developer", "Backend Engineer", "AI Integration Specialist", "Software Engineering Intern"];
const TECH_PILLS = ["Spring Boot", ".NET 8", "React.js", "Node.js", "Docker", "MongoDB"];

const SOCIAL_LINKS = [
  { icon: Github, link: "https://github.com/PrabhashSwarnajith", label: "GitHub" },
  { icon: Linkedin, link: "https://www.linkedin.com/in/prabhash-swarnajith/", label: "LinkedIn" },
  { icon: Mail, link: "mailto:prabhashswarnajith@gmail.com", label: "Email" },
];

const CODE_LINES = [
  { tokens: [{ c: "text-blue-400", t: "const" }, { c: "text-white", t: " developer" }, { c: "text-gray-500", t: " = {" }] },
  { indent: 1, tokens: [{ c: "text-purple-300", t: "name" }, { c: "text-gray-500", t: ": " }, { c: "text-green-300", t: '"Prabhash Swarnajith",' }] },
  { indent: 1, tokens: [{ c: "text-purple-300", t: "role" }, { c: "text-gray-500", t: ": " }, { c: "text-green-300", t: '"Full-Stack Developer",' }] },
  { indent: 1, tokens: [{ c: "text-purple-300", t: "stack" }, { c: "text-gray-500", t: ": [" }] },
  { indent: 2, tokens: [{ c: "text-green-300", t: '"React"' }, { c: "text-gray-500", t: ", " }, { c: "text-green-300", t: '"Spring Boot",' }] },
  { indent: 2, tokens: [{ c: "text-green-300", t: '".NET 8"' }, { c: "text-gray-500", t: ", " }, { c: "text-green-300", t: '"Node.js",' }] },
  { indent: 1, tokens: [{ c: "text-gray-500", t: "]," }] },
  { indent: 1, tokens: [{ c: "text-purple-300", t: "available" }, { c: "text-gray-500", t: ": " }, { c: "text-blue-400", t: "true," }] },
  { tokens: [{ c: "text-gray-500", t: "};" }] },
];

const CodeCard = memo(() => (
  <div className="relative w-full max-w-md mx-auto">
    <div className="absolute -inset-10 bg-gradient-to-r from-indigo-600/8 to-purple-600/8 rounded-3xl blur-3xl pointer-events-none" />
    <div className="relative rounded-2xl border border-white/10 bg-[#0d0d1a]/95 shadow-2xl overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center gap-1.5 px-4 py-3 bg-white/[0.03] border-b border-white/[0.06]">
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-3 text-[11px] text-gray-500 font-mono">developer.config.ts</span>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] text-emerald-400 font-mono">active</span>
        </div>
      </div>
      {/* Code */}
      <div className="p-5 font-mono text-[13px] leading-[1.7]">
        {CODE_LINES.map((line, i) => (
          <div key={i} style={{ paddingLeft: `${(line.indent || 0) * 16}px` }}>
            {line.tokens.map((tok, j) => (
              <span key={j} className={tok.c}>{tok.t}</span>
            ))}
          </div>
        ))}
      </div>
      {/* Status bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-indigo-600/15 border-t border-indigo-500/20">
        <span className="text-[10px] text-indigo-300/80 font-mono">TypeScript</span>
        <span className="text-[10px] text-indigo-300/80 font-mono">Ln 9, Col 2</span>
      </div>
    </div>

    {/* Floating stat badges */}
    <div className="absolute -top-5 -right-4 sm:-right-6 bg-[#0d0d1a] border border-indigo-500/30 rounded-xl p-3 shadow-xl shadow-black/50">
      <p className="text-2xl font-bold text-white leading-none">5+</p>
      <p className="text-[11px] text-gray-500 mt-0.5 font-mono">Projects</p>
    </div>
    <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-[#0d0d1a] border border-emerald-500/30 rounded-xl px-3.5 py-2.5 shadow-xl shadow-black/50">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
        <span className="text-[11px] font-medium text-emerald-300">Open to Work</span>
      </div>
    </div>
    <div className="absolute top-1/2 -right-4 sm:-right-8 -translate-y-1/2 bg-[#0d0d1a] border border-purple-500/30 rounded-xl p-3 shadow-xl shadow-black/50 hidden xl:block">
      <p className="text-2xl font-bold text-white leading-none">20+</p>
      <p className="text-[11px] text-gray-500 mt-0.5 font-mono">Tech stack</p>
    </div>
  </div>
));

const SocialBtn = memo(({ icon: Icon, link, label }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" title={label}>
    <button className="group p-2.5 rounded-lg border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200">
      <Icon className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
    </button>
  </a>
));

const Home = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, offset: 10 });
    setIsLoaded(true);
  }, []);

  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText((p) => p + WORDS[wordIndex][charIndex]);
        setCharIndex((p) => p + 1);
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        setText((p) => p.slice(0, -1));
        setCharIndex((p) => p - 1);
      } else {
        setWordIndex((p) => (p + 1) % WORDS.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex]);

  useEffect(() => {
    const t = setTimeout(handleTyping, isTyping ? TYPING_SPEED : ERASING_SPEED);
    return () => clearTimeout(t);
  }, [handleTyping]);

  return (
    <div className="min-h-screen bg-[#030014] overflow-hidden" id="Home">
      <div className={`relative z-10 transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <div className="container mx-auto px-5 sm:px-8 lg:px-[8%] min-h-screen">
          <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen gap-16 lg:gap-20 pt-28 pb-20 lg:pt-0 lg:pb-0">

            {/* ── Left column ── */}
            <div className="w-full lg:w-1/2 space-y-6" data-aos="fade-right" data-aos-delay="100">

              {/* Company badges */}
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/[0.07] text-indigo-300 text-[11px] font-semibold tracking-[0.12em] uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  SE Intern · CW Cloud Solutions
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/[0.07] text-violet-300 text-[11px] font-semibold tracking-[0.12em] uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                  Full Stack Dev · ICT Option
                </span>
              </div>

              {/* Name */}
              <div className="space-y-1">
                <p className="text-gray-500 text-base font-light">Hi, I'm</p>
                <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05]">
                  <span className="text-white">Prabhash</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                    Swarnajith
                  </span>
                </h1>
              </div>

              {/* Typing indicator */}
              <div className="flex items-center gap-3 h-8">
                <span className="w-px h-full bg-indigo-500/50 rounded-full" />
                <span className="text-lg md:text-xl text-gray-300 font-light">{text}</span>
                <span className="w-px h-5 bg-indigo-400 animate-pulse rounded-full" />
              </div>

              {/* Description */}
              <p className="text-[15px] text-gray-400 max-w-xl leading-relaxed">
                Motivated Software Engineering undergraduate with hands-on experience in full-stack development,
                backend API design, AI integration, and workflow automation. Building scalable, secure digital solutions.
              </p>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-2">
                {TECH_PILLS.map((tech) => (
                  <span
                    key={tech}
                    className="hidden sm:inline-flex items-center px-3 py-1 rounded-full border border-white/[0.07] bg-white/[0.03] text-[11px] font-mono text-gray-500 hover:border-indigo-500/30 hover:text-indigo-300 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="#Portofolio"
                  onClick={(e) => { e.preventDefault(); document.querySelector("#Portofolio")?.scrollIntoView({ behavior: "smooth" }); }}
                >
                  <button className="group inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/35">
                    View Projects
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </a>

                <a href={cv} download>
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] text-sm font-medium text-gray-300 hover:text-white transition-all duration-200">
                    <Download className="w-4 h-4" />
                    Download CV
                  </button>
                </a>

                <a href="https://www.linkedin.com/in/prabhash-swarnajith/" target="_blank" rel="noopener noreferrer">
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#0A66C2]/25 bg-[#0A66C2]/[0.07] hover:bg-[#0A66C2]/[0.15] text-sm font-medium text-[#7ab7f5] hover:text-white transition-all duration-200">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </button>
                </a>
              </div>

              {/* Social icons row */}
              <div className="hidden sm:flex items-center gap-2">
                {SOCIAL_LINKS.map((s) => <SocialBtn key={s.label} {...s} />)}
                <span className="ml-2 text-[11px] text-gray-600 font-mono">@PrabhashSwarnajith</span>
              </div>
            </div>

            {/* ── Right column — Code card ── */}
            <div
              className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-8 lg:px-0"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <CodeCard />
            </div>
          </div>

          {/* Scroll cue */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-25 animate-bounce pointer-events-none">
            <span className="text-[10px] text-gray-500 font-mono tracking-[0.2em] uppercase">Scroll</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Home);
