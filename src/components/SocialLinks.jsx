import React from "react";
import { Linkedin, Github, Instagram, Mail, Facebook, ExternalLink } from "lucide-react";

const socialLinks = [
  {
    name: "Email",
    displayName: "Email me",
    subText: "prabhashswarnajith@gmail.com",
    icon: Mail,
    url: "mailto:prabhashswarnajith@gmail.com",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]",
    isPrimary: true,
  },
  {
    name: "GitHub",
    displayName: "GitHub",
    subText: "@PrabhashSwarnajith",
    icon: Github,
    url: "https://github.com/PrabhashSwarnajith",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]",
  },
  {
    name: "LinkedIn",
    displayName: "Let's Connect",
    subText: "on LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/prabhash-swarnajith/",
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]",
  },
  {
    name: "Instagram",
    displayName: "Instagram",
    subText: "@prabhash_swarnajith",
    icon: Instagram,
    url: "https://www.instagram.com/prabhash_swarnajith/",
    color: "#E4405F",
    gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]",
  },
  {
    name: "Facebook",
    displayName: "Facebook",
    subText: "@prabash.swarnajith",
    icon: Facebook,
    url: "https://www.facebook.com/prabash.swarnajith.7",
    color: "#1877F2",
    gradient: "from-[#1877F2] to-[#1877F2]",
  },
];

const SocialLinkRow = ({ link }) => (
  <a
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500"
  >
    {/* Hover gradient */}
    <div
      className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${link.gradient}`}
    />

    <div className="relative flex items-center gap-4">
      <div className="relative flex items-center justify-center">
        <div
          className="absolute inset-0 opacity-20 rounded-md transition-all duration-500 group-hover:scale-110 group-hover:opacity-30"
          style={{ backgroundColor: link.color }}
        />
        <div className="relative p-2 rounded-md">
          <link.icon
            className="w-6 h-6 transition-all duration-500 group-hover:scale-105"
            style={{ color: link.color }}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-base font-semibold text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
          {link.displayName}
        </span>
        <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mt-0.5">
          {link.subText}
        </span>
      </div>
    </div>

    <ExternalLink className="relative w-5 h-5 text-gray-500 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-1 group-hover:translate-x-0" />

    {/* Shine effect */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
    </div>
  </a>
);

const SocialLinkCompact = ({ link }) => (
  <a
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500"
  >
    <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${link.gradient}`} />

    <div className="relative flex items-center justify-center">
      <div
        className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500 group-hover:scale-125 group-hover:opacity-30"
        style={{ backgroundColor: link.color }}
      />
      <div className="relative p-2 rounded-lg">
        <link.icon
          className="w-5 h-5 transition-all duration-500 group-hover:scale-110"
          style={{ color: link.color }}
        />
      </div>
    </div>

    <div className="flex flex-col min-w-0">
      <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
        {link.displayName}
      </span>
      <span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
        {link.subText}
      </span>
    </div>

    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />

    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
    </div>
  </a>
);

const SocialLinks = () => {
  const primaryLinks = socialLinks.filter((l) => l.isPrimary);
  const fullRowLinks = socialLinks.filter((l) => !l.isPrimary && (l.name === "GitHub" || l.name === "LinkedIn"));
  const compactLinks = socialLinks.filter((l) => !l.isPrimary && l.name !== "GitHub" && l.name !== "LinkedIn");

  return (
    <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl h-full">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center justify-center gap-4">
        <span className="inline-block w-12 h-1 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full" />
        Connect With Me
        <span className="inline-block w-12 h-1 bg-gradient-to-r from-[#a855f7] to-[#6366f1] rounded-full" />
      </h3>

      <div className="flex flex-col gap-3">
        {/* Email + full row links */}
        {[...primaryLinks, ...fullRowLinks].map((link) => (
          <SocialLinkRow key={link.name} link={link} />
        ))}

        {/* Compact grid for Instagram & Facebook */}
        {compactLinks.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {compactLinks.map((link) => (
              <SocialLinkCompact key={link.name} link={link} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialLinks;
