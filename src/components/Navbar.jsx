import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { SimpleLogo } from "./Logo";

const navItems = [
  { href: "#Home",       label: "Home"       },
  { href: "#About",      label: "About"      },
  { href: "#Skills",     label: "Skills"     },
  { href: "#Research",   label: "Research"   },
  { href: "#Experience", label: "Experience" },
  { href: "#Portofolio", label: "Projects"   },
  { href: "#Contact",    label: "Contact"    },
];

const Navbar = () => {
  const [isOpen,        setIsOpen]        = useState(false);
  const [scrolled,      setScrolled]      = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navItems
        .map(item => {
          const el = document.querySelector(item.href);
          if (!el) return null;
          return { id: item.href.slice(1), offset: el.offsetTop - 120, height: el.offsetHeight };
        })
        .filter(Boolean);

      const pos = window.scrollY;
      const active = sections.find(s => pos >= s.offset && pos < s.offset + s.height);
      if (active) setActiveSection(active.id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.offsetTop - 88, behavior: "smooth" });
    setIsOpen(false);
  };

  const isActive = (href) => activeSection === href.slice(1);

  return (
    <>
      {/* ── Floating Navbar ───────────────────────────────────────────────── */}
      <nav
        className={`fixed top-3 left-3 right-3 sm:top-4 sm:left-5 sm:right-5 z-50 rounded-2xl transition-all duration-300 ${
          scrolled
            ? "bg-[#030014]/90 backdrop-blur-2xl border border-white/[0.09] shadow-2xl shadow-black/50"
            : "bg-[#030014]/0 border border-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="mx-auto px-4 sm:px-5 max-w-7xl">
          <div className="flex items-center justify-between h-14">

            {/* ── Logo ─────────────────────────────────────────────────── */}
            <a
              href="#Home"
              onClick={e => scrollTo(e, "#Home")}
              className="flex items-center gap-2.5 group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg"
              aria-label="Prabhash Swarnajith — Home"
            >
              <SimpleLogo />
              <div className="hidden sm:flex flex-col leading-tight">
                <span className="text-white font-semibold text-sm tracking-tight group-hover:text-indigo-200 transition-colors duration-200">
                  Prabhash
                </span>
                <span className="text-slate-400 text-[10px] font-medium tracking-wide">
                  Full-Stack Developer
                </span>
              </div>
            </a>

            {/* ── Desktop nav ─────────────────────────────────────────── */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navItems.map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={e => scrollTo(e, item.href)}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                    isActive(item.href)
                      ? "text-white"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.06]"
                  }`}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span className="absolute bottom-1 left-3 right-3 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                  )}
                </a>
              ))}
            </div>

            {/* ── Right side — availability + hamburger ───────────────── */}
            <div className="flex items-center gap-3">
              <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-xs font-medium text-emerald-300 tracking-wide whitespace-nowrap">
                  Available for work
                </span>
              </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-slate-400 hover:text-white transition-colors rounded-xl hover:bg-white/[0.06] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Mobile overlay ───────────────────────────────────────────────── */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 z-40 bg-[#030014]/98 backdrop-blur-2xl transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="pt-[80px] px-5 pb-8 max-h-screen overflow-y-auto">

          {/* Status badge */}
          <div className="flex items-center gap-2 px-4 py-2.5 mb-8 rounded-xl border border-emerald-500/25 bg-emerald-500/5 w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
            <span className="text-xs text-emerald-300 font-medium">Available for opportunities</span>
          </div>

          {/* Nav links */}
          <nav className="space-y-1.5" aria-label="Mobile navigation">
            {navItems.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                onClick={e => scrollTo(e, item.href)}
                style={{
                  transitionDelay: isOpen ? `${i * 40}ms` : "0ms",
                  transform: isOpen ? "none" : "translateX(14px)",
                  opacity: isOpen ? 1 : 0,
                }}
                className={`flex items-center gap-3 px-4 py-4 rounded-xl text-[15px] font-medium transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 min-h-[52px] ${
                  isActive(item.href)
                    ? "bg-indigo-500/10 border border-indigo-500/25 text-white"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.05] border border-transparent"
                }`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {isActive(item.href) && (
                  <span className="w-1 h-4 rounded-full bg-gradient-to-b from-indigo-400 to-purple-500 flex-shrink-0" />
                )}
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
