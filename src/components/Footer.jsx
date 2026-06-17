import React from "react";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const socials = [
  { icon: Github,    href: "https://github.com/PrabhashSwarnajith",            label: "GitHub"    },
  { icon: Linkedin,  href: "https://www.linkedin.com/in/prabhash-swarnajith/", label: "LinkedIn"  },
  { icon: Instagram, href: "https://www.instagram.com/prabhash_swarnajith/",   label: "Instagram" },
  { icon: Mail,      href: "mailto:prabhashswarnajith@gmail.com",               label: "Email"     },
];

const Footer = () => (
  <footer className="relative py-8 px-5 sm:px-8 border-t border-white/[0.06] bg-[#030014]">
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
      <p className="text-xs text-slate-600 font-medium text-center sm:text-left">
        © {new Date().getFullYear()} Prabhash Swarnajith. Built with React &amp; Tailwind CSS.
      </p>

      <div className="flex items-center gap-2">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            aria-label={label}
            className="flex items-center justify-center w-11 h-11 min-w-[44px] rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-500 hover:text-white hover:bg-white/[0.08] hover:border-indigo-500/25 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            <Icon className="w-3.5 h-3.5" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
