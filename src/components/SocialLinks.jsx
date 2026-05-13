import React from "react";
import { Linkedin, Github, Instagram, Mail, ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const EMAIL = "prabhashswarnajith@gmail.com";

const links = [
  {
    name: "Email",
    displayName: "Drop me an email",
    subText: EMAIL,
    icon: Mail,
    url: `mailto:${EMAIL}`,
    iconColor: "#e2e8f0",
    cardClass: "bg-white/5 border-white/10 hover:border-white/25",
    hoverGlow: "from-white/5 to-white/5",
    isPrimary: true,
  },
  {
    name: "GitHub",
    displayName: "GitHub",
    subText: "@PrabhashSwarnajith",
    icon: Github,
    url: "https://github.com/PrabhashSwarnajith",
    iconColor: "#e2e8f0",
    cardClass: "bg-[#161b22]/80 border-white/10 hover:border-white/25",
    hoverGlow: "from-white/5 to-white/3",
  },
  {
    name: "LinkedIn",
    displayName: "LinkedIn",
    subText: "prabhash-swarnajith",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/prabhash-swarnajith/",
    iconColor: "#0A66C2",
    cardClass: "bg-[#0A66C2]/10 border-[#0A66C2]/20 hover:border-[#0A66C2]/40",
    hoverGlow: "from-[#0A66C2]/10 to-[#0A66C2]/5",
  },
  {
    name: "Instagram",
    displayName: "Instagram",
    subText: "@prabhash_swarnajith",
    icon: Instagram,
    url: "https://www.instagram.com/prabhash_swarnajith/",
    iconColor: "#E4405F",
    cardClass: "bg-white/5 border-white/10 hover:border-pink-500/30",
    hoverGlow: "from-[#833AB4]/10 via-[#E4405F]/8 to-[#FCAF45]/5",
  },
];

const LinkRow = ({ link, index }) => {
  const isEmail = link.isPrimary;

  return (
    <motion.a
      href={link.url}
      target={isEmail ? undefined : "_blank"}
      rel={isEmail ? undefined : "noopener noreferrer"}
      className={`group relative flex items-center justify-between gap-4 rounded-xl border backdrop-blur-sm overflow-hidden transition-all duration-300
        ${isEmail ? "p-5" : "p-4"}
        ${link.cardClass}`}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 + index * 0.07 }}
    >
      {/* Hover gradient wash */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-gradient-to-r ${link.hoverGlow}`}
      />

      <div className="relative flex items-center gap-3.5 min-w-0">
        {/* Icon container */}
        <div
          className={`flex-shrink-0 flex items-center justify-center rounded-lg
            ${isEmail ? "w-11 h-11" : "w-9 h-9"}
            bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors duration-300`}
        >
          <link.icon
            style={{ color: link.iconColor }}
            className={`transition-transform duration-300 group-hover:scale-110 ${isEmail ? "w-5 h-5" : "w-4 h-4"}`}
          />
        </div>

        {/* Text */}
        <div className="min-w-0">
          <p
            className={`font-semibold text-white leading-snug ${isEmail ? "text-base" : "text-sm"}`}
          >
            {link.displayName}
          </p>
          <p
            className={`text-gray-400 group-hover:text-gray-300 transition-colors duration-300 truncate
              ${isEmail ? "text-sm mt-0.5" : "text-xs mt-0.5"}`}
          >
            {link.subText}
          </p>
        </div>
      </div>

      {/* Arrow */}
      <ArrowRight
        className="relative flex-shrink-0 w-4 h-4 text-gray-600 group-hover:text-gray-300 group-hover:translate-x-0.5 transition-all duration-300"
      />

      {/* Shine sweep */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      </div>
    </motion.a>
  );
};

const SocialLinks = () => {
  return (
    <div className="w-full bg-white/5 rounded-2xl p-6 backdrop-blur-xl border border-white/10 h-full flex flex-col">
      {/* Status bar */}
      <motion.div
        className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 mb-6"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <span className="relative flex h-2 w-2 flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
        </span>
        <p className="text-xs font-medium text-emerald-300 leading-none">
          Currently available for new opportunities
        </p>
      </motion.div>

      {/* Heading */}
      <motion.div
        className="mb-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.05 }}
      >
        <h3 className="text-xl font-bold text-white">Let's Connect</h3>
        <p className="text-xs text-gray-500 mt-1">Open to work · Available for freelance</p>
      </motion.div>

      {/* Divider */}
      <div className="h-px bg-white/5 my-4" />

      {/* Links */}
      <div className="flex flex-col gap-2.5 flex-1">
        {links.map((link, i) => (
          <LinkRow key={link.name} link={link} index={i} />
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
