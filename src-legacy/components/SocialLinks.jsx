import React from "react";
import { Linkedin, Github, Instagram, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const EMAIL = "prabhashswarnajith@gmail.com";

const links = [
  {
    name:        "Email",
    displayName: "Drop me an email",
    subText:     EMAIL,
    icon:        Mail,
    url:         `mailto:${EMAIL}`,
    iconClass:   "text-slate-300",
    borderClass: "border-slate-700/30 hover:border-slate-500/50",
    gradFrom:    "from-slate-600/10",
    gradTo:      "to-slate-700/10",
    isPrimary:   true,
  },
  {
    name:        "GitHub",
    displayName: "GitHub",
    subText:     "@PrabhashSwarnajith",
    icon:        Github,
    url:         "https://github.com/PrabhashSwarnajith",
    iconClass:   "text-slate-300",
    borderClass: "border-slate-700/30 hover:border-slate-500/50",
    gradFrom:    "from-slate-700/10",
    gradTo:      "to-slate-800/10",
  },
  {
    name:        "LinkedIn",
    displayName: "LinkedIn",
    subText:     "prabhash-swarnajith",
    icon:        Linkedin,
    url:         "https://www.linkedin.com/in/prabhash-swarnajith/",
    iconClass:   "text-blue-400",
    borderClass: "border-blue-500/20 hover:border-blue-400/40",
    gradFrom:    "from-blue-500/5",
    gradTo:      "to-blue-600/5",
  },
  {
    name:        "Instagram",
    displayName: "Instagram",
    subText:     "@prabhash_swarnajith",
    icon:        Instagram,
    url:         "https://www.instagram.com/prabhash_swarnajith/",
    iconClass:   "text-pink-400",
    borderClass: "border-pink-500/20 hover:border-pink-400/40",
    gradFrom:    "from-pink-500/5",
    gradTo:      "to-rose-600/5",
  },
];

const LinkRow = ({ link, index }) => {
  const isEmail = link.isPrimary;
  return (
    <motion.a
      href={link.url}
      target={isEmail ? undefined : "_blank"}
      rel={isEmail ? undefined : "noopener noreferrer"}
      className={`group relative flex items-center justify-between gap-3 rounded-xl border backdrop-blur-sm overflow-hidden transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500
        ${isEmail ? "p-4" : "p-3.5"}
        bg-gradient-to-br ${link.gradFrom} ${link.gradTo}
        ${link.borderClass}`}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.08 + index * 0.06 }}
      aria-label={`${link.displayName}: ${link.subText}`}
    >
      {/* Hover wash */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-300 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 pointer-events-none" />

      <div className="relative flex items-center gap-3 min-w-0">
        {/* Icon */}
        <div className={`flex-shrink-0 flex items-center justify-center rounded-lg bg-white/[0.08] border border-white/[0.08] group-hover:bg-white/[0.13] group-hover:border-white/15 transition-all duration-300 ${isEmail ? "w-10 h-10" : "w-9 h-9"}`}>
          <link.icon className={`${link.iconClass} transition-all duration-300 group-hover:scale-110 ${isEmail ? "w-5 h-5" : "w-4 h-4"}`} />
        </div>

        {/* Text */}
        <div className="min-w-0">
          <p className={`font-semibold text-white leading-snug group-hover:text-indigo-300 transition-colors duration-300 ${isEmail ? "text-sm" : "text-sm"}`}>
            {link.displayName}
          </p>
          <p className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors duration-300 truncate mt-0.5">
            {link.subText}
          </p>
        </div>
      </div>

      <ArrowRight className="relative flex-shrink-0 w-4 h-4 text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all duration-300" />
    </motion.a>
  );
};

const SocialLinks = () => (
  <div className="w-full h-full bg-white/[0.03] rounded-2xl p-6 md:p-7 border border-white/[0.07] hover:border-white/15 flex flex-col transition-colors duration-300">
    {/* Status */}
    <motion.div
      className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-emerald-500/5 border border-emerald-500/20 mb-6"
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <span className="relative flex h-2 w-2 flex-shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
      </span>
      <p className="text-xs font-semibold text-emerald-300 tracking-wide leading-none">
        Available for opportunities
      </p>
    </motion.div>

    {/* Heading */}
    <motion.div
      className="mb-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.05 }}
    >
      <h3 className="text-xl font-bold text-white leading-tight">Let's Connect</h3>
      <p className="text-xs text-slate-500 mt-1 font-medium">Open to work · Available for freelance</p>
    </motion.div>

    {/* Divider */}
    <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-4" />

    {/* Links */}
    <div className="flex flex-col gap-2.5 flex-1">
      {links.map((link, i) => (
        <LinkRow key={link.name} link={link} index={i} />
      ))}
    </div>
  </div>
);

export default SocialLinks;
