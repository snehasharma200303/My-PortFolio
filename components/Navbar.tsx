"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/lib/data";

const navLinks = [
  { label: "About",        href: "#about"          },
  { label: "Skills",       href: "#skills"         },
  { label: "Projects",     href: "#projects"       },
  { label: "Experience",   href: "#experience"     },
  { label: "Achievements", href: "#certifications" },
  { label: "Contact",      href: "#contact"        },
];

export default function Navbar() {
  const [scrolled, setScrolled]           = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen]           = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const ids = navLinks.map((l) => l.href.slice(1));
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const { top, bottom } = el.getBoundingClientRect();
          if (top <= 120 && bottom >= 120) { current = id; break; }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory-50/90 backdrop-blur-xl border-b border-ivory-300 shadow-warm-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <motion.a
            href="#"
            aria-label="Home"
            className="text-xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SS.
          </motion.a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const active = activeSection === link.href.slice(1);
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    active ? "text-plum-600" : "text-ink-500 hover:text-ink-900"
                  }`}
                  whileHover={{ y: -1 }}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-plum-50 border border-plum-100"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </motion.a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <motion.a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-sm font-semibold rounded-xl bg-plum-600 text-white shadow-plum-glow hover:bg-plum-700 transition-all duration-200"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
            >
              View Resume
            </motion.a>
          </div>

          {/* Hamburger */}
          <button
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg text-ink-500 hover:text-ink-900 hover:bg-ivory-100 transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-ivory-50/95 backdrop-blur-lg border-b border-ivory-300"
          >
            <div className="px-4 pb-4 pt-2 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link.href.slice(1)
                      ? "text-plum-600 bg-plum-50 border border-plum-100"
                      : "text-ink-600 hover:text-ink-900 hover:bg-ivory-100"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-2 block text-center px-4 py-2.5 rounded-xl bg-plum-600 text-sm font-semibold text-white"
              >
                View Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
