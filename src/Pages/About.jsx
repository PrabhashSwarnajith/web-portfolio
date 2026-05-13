import React, { useEffect, memo } from "react";
import { FileText, Code, Briefcase, Cpu, ArrowUpRight, Sparkles, Linkedin } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import profile from "../assets/Photo.jpg";
import cv from "../assets/Prabhash Swarnajith - Resume.pdf";

const STATS = [
  {
    icon: Code,
    color: "from-[#6366f1] to-[#a855f7]",
    value: "5+",
    label: "Projects Built",
    description: "Full-stack & AI-powered applications",
    animation: "fade-right",
  },
  {
    icon: Cpu,
    color: "from-[#a855f7] to-[#ec4899]",
    value: "20+",
    label: "Technologies",
    description: "Across frontend, backend & DevOps",
    animation: "fade-up",
  },
  {
    icon: Briefcase,
    color: "from-[#6366f1] to-[#06b6d4]",
    value: "1+",
    label: "Years Experience",
    description: "Professional & project development",
    animation: "fade-left",
  },
];

const Header = memo(() => (
  <div className="text-center lg:mb-10 mb-4">
    <span
      className="text-xs font-mono text-indigo-400 tracking-[0.2em] uppercase mb-3 block"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      00 — Introduction
    </span>
    <h2
      className="text-4xl md:text-5xl font-bold text-white"
      data-aos="zoom-in-up"
      data-aos-duration="600"
    >
      About{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
        Me
      </span>
    </h2>
    <p
      className="mt-3 text-gray-500 max-w-xl mx-auto text-sm sm:text-[15px] leading-relaxed"
      data-aos="zoom-in-up"
      data-aos-duration="800"
    >
      Building scalable solutions with clean code and creative thinking
    </p>
  </div>
));

const ProfileImage = memo(() => (
  <div className="flex justify-center lg:justify-end items-center sm:p-12 sm:py-0 p-0 py-2">
    <div className="relative group" data-aos="fade-up" data-aos-duration="1000">
      <div className="absolute -inset-6 opacity-[20%] z-0 hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-full blur-2xl animate-spin-slower" />
        <div className="absolute inset-0 bg-gradient-to-l from-fuchsia-500 via-rose-500 to-pink-600 rounded-full blur-2xl animate-pulse opacity-50" />
      </div>
      <div className="relative">
        <div className="w-64 h-64 sm:w-76 sm:h-76 rounded-full overflow-hidden shadow-[0_0_50px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105">
          <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-white/40 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30 z-10 hidden sm:block" />
          <img
            src={profile}
            alt="Prabhash Swarnajith"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
));

const StatCard = memo(({ icon: Icon, color, value, label, description, animation }) => (
  <div data-aos={animation} data-aos-duration="1000">
    <div className="relative group bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 hover:border-white/[0.14] hover:bg-white/[0.05] transition-all duration-300 h-full flex flex-col justify-between overflow-hidden">
      <div className={`absolute top-0 left-4 right-4 h-px bg-gradient-to-r ${color} opacity-30 group-hover:opacity-70 transition-opacity duration-300`} />
      <div className="flex items-start justify-between mb-4">
        <div className="p-2.5 rounded-xl bg-white/[0.06] border border-white/[0.07] group-hover:bg-white/[0.09] transition-colors duration-300">
          <Icon className="w-5 h-5 text-gray-300" />
        </div>
        <span className="text-4xl font-bold text-white tabular-nums">{value}</span>
      </div>
      <div>
        <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">{label}</p>
        <p className="text-xs text-gray-600">{description}</p>
      </div>
    </div>
  </div>
));

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <div className="h-auto pb-[10%] text-white overflow-hidden px-[5%] lg:px-[10%] mt-10" id="About">
      <Header />

      <div className="w-full mx-auto pt-8 sm:pt-12">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text content */}
          <div className="space-y-6 text-center lg:text-left">
            <div data-aos="fade-right" data-aos-duration="1000">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold tracking-widest uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Currently @ CW Cloud Solutions Pty Ltd
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                  Hello, I'm
                </span>
                <span className="block mt-2 text-gray-100" data-aos="fade-right" data-aos-duration="1200">
                  Prabhash Swarnajith
                </span>
              </h2>
            </div>

            <p
              className="text-base sm:text-lg text-gray-400 leading-relaxed text-justify"
              data-aos="fade-right"
              data-aos-duration="1400"
            >
              Motivated Software Engineering undergraduate at SLIIT with hands-on experience in full-stack development,
              backend API design, AI integration, and workflow automation. Proficient in Spring Boot, React.js, Node.js,
              .NET 8, and Microsoft Graph API. Experienced in building secure RESTful services with JWT authentication,
              Outlook Office Add-ins, and containerized applications using Docker.
            </p>

            <p
              className="text-sm text-gray-500 leading-relaxed"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              My research project <span className="text-indigo-400 font-medium">OptiTech</span> — a real-time eye tracking
              system — was accepted for presentation at the <span className="text-purple-400 font-medium">ICCE 2025 International Conference</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 w-full" data-aos="fade-up" data-aos-duration="800">
              <a href={cv} download className="w-full sm:w-auto">
                <button className="w-full sm:w-auto group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl opacity-60 blur-sm group-hover:opacity-100 transition-all duration-500" />
                  <div className="relative flex items-center justify-center gap-2 px-6 py-2.5 bg-[#030014] rounded-lg text-white text-sm font-semibold">
                    <FileText className="w-4 h-4" /> Download CV
                  </div>
                </button>
              </a>

              <a href="#Portofolio" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300">
                  <Code className="w-4 h-4" /> View Projects
                </button>
              </a>

              <a href="https://www.linkedin.com/in/prabhash-swarnajith/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg border border-[#0A66C2]/30 bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 text-sm font-medium text-[#7ab7f5] hover:text-white transition-all duration-300">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </button>
              </a>
            </div>
          </div>

          <ProfileImage />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes spin-slower { to { transform: rotate(360deg); } }
        .animate-spin-slower { animation: spin-slower 10s linear infinite; }
      `}</style>
    </div>
  );
};

export default memo(AboutPage);
