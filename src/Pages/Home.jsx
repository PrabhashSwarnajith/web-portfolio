import React, { useState, useEffect, useCallback, memo } from "react";
import { Github, Linkedin, Mail, ExternalLink, Download, ChevronDown } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import AOS from "aos";
import "aos/dist/aos.css";

const TYPING_SPEED = 90;
const ERASING_SPEED = 45;
const PAUSE_DURATION = 2200;
const WORDS = ["Full-Stack Developer", "Backend Engineer", "AI Integration Specialist", "Software Engineering Intern"];
const TECH_PILLS = ["Spring Boot", ".NET 8", "React.js", "Node.js", "Docker", "MongoDB"];

const SOCIAL_LINKS = [
  { icon: Github, link: "https://github.com/PrabhashSwarnajith", label: "GitHub" },
  { icon: Linkedin, link: "https://www.linkedin.com/in/prabhash-swarnajith/", label: "LinkedIn" },
  { icon: Mail, link: "mailto:Prabhashswarnajith@gmail.com", label: "Email" },
];

const SocialLink = memo(({ icon: Icon, link, label }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" title={label}>
    <button className="group relative p-3">
      <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-50 transition duration-300" />
      <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-all duration-300">
        <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
      </div>
    </button>
  </a>
));

const Home = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, offset: 10 });
    setIsLoaded(true);
  }, []);

  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText((prev) => prev + WORDS[wordIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        setWordIndex((prev) => (prev + 1) % WORDS.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex]);

  useEffect(() => {
    const timeout = setTimeout(handleTyping, isTyping ? TYPING_SPEED : ERASING_SPEED);
    return () => clearTimeout(timeout);
  }, [handleTyping]);

  return (
    <div className="min-h-screen bg-[#030014] overflow-hidden" id="Home">
      <div className={`relative z-10 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <div className="container mx-auto px-[5%] lg:px-[8%] min-h-screen">
          <div className="flex flex-col lg:flex-row items-center justify-center h-screen gap-0 sm:gap-12 lg:gap-16">

            {/* ── Left Column ── */}
            <div
              className="w-full lg:w-1/2 space-y-6 text-left order-1"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              {/* Company badge */}
              <div data-aos="fade-up" data-aos-delay="300">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Software Engineering Intern · CW Cloud Solutions
                </span>
              </div>

              {/* Name */}
              <div data-aos="fade-up" data-aos-delay="400" className="space-y-1">
                <p className="text-gray-400 text-lg font-light">Hi, I'm</p>
                <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
                  <span className="relative inline-block">
                    <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20 rounded-lg" />
                    <span className="relative bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                      Prabhash
                    </span>
                  </span>
                  <br />
                  <span className="relative inline-block mt-1">
                    <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20 rounded-lg" />
                    <span className="relative bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
                      Swarnajith
                    </span>
                  </span>
                </h1>
              </div>

              {/* Typing effect */}
              <div className="h-9 flex items-center gap-2" data-aos="fade-up" data-aos-delay="500">
                <span className="text-xl md:text-2xl text-gray-300 font-light">{text}</span>
                <span className="w-[2px] h-7 bg-gradient-to-t from-[#6366f1] to-[#a855f7] ml-0.5 animate-pulse rounded-full" />
              </div>

              {/* Description */}
              <p
                className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Motivated Software Engineering undergraduate with hands-on experience in full-stack development,
                backend API design, AI integration, and workflow automation. Building scalable, secure digital solutions.
              </p>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-2" data-aos="fade-up" data-aos-delay="700">
                {TECH_PILLS.map((tech) => (
                  <span
                    key={tech}
                    className="hidden sm:block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 hover:border-indigo-500/30 hover:text-white transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3" data-aos="fade-up" data-aos-delay="800">
                {/* View Projects */}
                <a href="#Portofolio">
                  <button className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-60 blur-md group-hover:opacity-100 transition-all duration-500" />
                    <div className="relative flex items-center gap-2 px-5 py-2.5 bg-[#030014] rounded-lg border border-white/10 text-sm font-medium text-white">
                      <ExternalLink className="w-4 h-4" />
                      View Projects
                    </div>
                  </button>
                </a>

                {/* Download CV */}
                <a href="/src/assets/Prabhash Swarnajith - Resume.pdf" download>
                  <button className="group flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-sm font-medium text-gray-200 hover:text-white transition-all duration-300 hover:border-indigo-500/40">
                    <Download className="w-4 h-4" />
                    Download CV
                  </button>
                </a>

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/prabhash-swarnajith/" target="_blank" rel="noopener noreferrer">
                  <button className="group flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#0A66C2]/30 bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 text-sm font-medium text-[#7ab7f5] hover:text-white transition-all duration-300">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </button>
                </a>
              </div>

              {/* Social icons */}
              <div className="hidden sm:flex gap-2" data-aos="fade-up" data-aos-delay="900">
                {SOCIAL_LINKS.map((s) => (
                  <SocialLink key={s.label} {...s} />
                ))}
              </div>
            </div>

            {/* ── Right Column — Lottie ── */}
            <div
              className="w-full py-[10%] sm:py-0 lg:w-1/2 h-auto lg:h-[600px] xl:h-[700px] relative flex items-center justify-center order-2 mt-8 lg:mt-0"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <div className="relative w-full opacity-90">
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-[#6366f1]/10 to-[#a855f7]/10 rounded-3xl blur-3xl transition-all duration-700 ${
                    isHovering ? "opacity-60 scale-105" : "opacity-20"
                  }`}
                />
                <div className={`relative z-10 w-full transform transition-transform duration-500 ${isHovering ? "scale-105" : "scale-100"}`}>
                  <DotLottieReact
                    src="https://lottie.host/58753882-bb6a-49f5-a2c0-950eda1e135a/NLbpVqGegK.lottie"
                    loop
                    autoplay
                    style={{ width: "100%", height: "100%" }}
                    className={`w-full h-full transition-all duration-500 ${
                      isHovering
                        ? "scale-[180%] sm:scale-[160%] lg:scale-[145%] rotate-2"
                        : "scale-[175%] sm:scale-[155%] lg:scale-[140%]"
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 animate-bounce">
            <span className="text-xs text-gray-500 tracking-widest uppercase">Scroll</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Home);
