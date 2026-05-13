import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "#Home", label: "Home" },
  { href: "#About", label: "About" },
  { href: "#Skills", label: "Skills" },
  { href: "#Experience", label: "Experience" },
  { href: "#Portofolio", label: "Projects" },
  { href: "#Contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems
        .map((item) => {
          const el = document.querySelector(item.href);
          if (!el) return null;
          return { id: item.href.slice(1), offset: el.offsetTop - 100, height: el.offsetHeight };
        })
        .filter(Boolean);

      const pos = window.scrollY;
      const active = sections.find((s) => pos >= s.offset && pos < s.offset + s.height);
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
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
    setIsOpen(false);
  };

  const isActive = (href) => activeSection === href.slice(1);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled || isOpen
          ? "bg-[#030014]/80 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-5 sm:px-8 lg:px-[8%]">
        <div className="flex items-center justify-between h-[68px]">

          {/* Logo */}
          <a
            href="#Home"
            onClick={(e) => scrollTo(e, "#Home")}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/50 transition-all duration-300">
              <span className="text-white font-bold text-sm tracking-tight">PS</span>
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="text-white font-semibold text-sm">Prabhash</span>
              <span className="text-gray-500 text-[10px] font-mono tracking-widest">PORTFOLIO</span>
            </div>
          </a>

          {/* Availability badge — desktop center */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-xs font-medium text-emerald-300 tracking-wide">Available for opportunities</span>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollTo(e, item.href)}
                className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive(item.href)
                    ? "text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute bottom-1 left-3.5 right-3.5 h-px bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                )}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-[#030014]/97 backdrop-blur-xl transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: "68px" }}
      >
        <div className="px-6 py-8 space-y-1">
          {/* Availability in mobile menu */}
          <div className="flex items-center gap-2 px-4 py-2 mb-4 rounded-full border border-emerald-500/20 bg-emerald-500/5 w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-emerald-300">Available for opportunities</span>
          </div>

          {navItems.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollTo(e, item.href)}
              style={{ transitionDelay: `${i * 50}ms`, transform: isOpen ? "none" : "translateX(20px)", opacity: isOpen ? 1 : 0 }}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                isActive(item.href)
                  ? "bg-indigo-500/10 border border-indigo-500/20 text-white"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {isActive(item.href) && (
                <span className="w-1 h-4 rounded-full bg-gradient-to-b from-indigo-400 to-purple-500" />
              )}
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
