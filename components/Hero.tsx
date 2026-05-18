"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { HiMail, HiArrowDown, HiLocationMarker } from "react-icons/hi";
import { useTypewriter } from "@/hooks/useTypewriter";

const socialLinks = [
  { icon: SiGithub,   href: personalInfo.github,            label: "GitHub"   },
  { icon: FaLinkedin, href: personalInfo.linkedin,          label: "LinkedIn" },
  { icon: HiMail,     href: `mailto:${personalInfo.email}`, label: "Email"    },
];

const roles = [
  "Full Stack Developer",
  "React.js Developer",
  "Node.js Developer",
  "Problem Solver",
];

export default function Hero() {
  const typed = useTypewriter(roles, 70, 38, 2000);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ivory-50"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-70" />
        {/* Soft plum wash top-left */}
        <div className="absolute -top-40 -left-48 w-[700px] h-[700px] bg-plum-100/50 rounded-full blur-[160px]" />
        {/* Soft amber wash bottom-right */}
        <div className="absolute -bottom-24 -right-48 w-[600px] h-[600px] bg-amber-100/50 rounded-full blur-[140px]" />
        {/* Fade to ivory at edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,#FAFAF7_100%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">

          {/* ── Avatar ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 relative"
          >
            {/* Ring: plum → amber gradient */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-[3px] shadow-warm-lg"
              style={{ background: "linear-gradient(135deg, #6535BC, #C8891E)" }}
            >
              <div className="w-full h-full rounded-full bg-ivory-100 flex items-center justify-center">
                <span className="text-3xl sm:text-4xl font-bold gradient-text select-none">SS</span>
              </div>
            </div>

            {/* Open-to-work badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.55, type: "spring", stiffness: 300, damping: 18 }}
              className="absolute -bottom-1 -right-1 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-ivory-300 shadow-warm-sm text-xs font-semibold text-teal-700"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
              Open to work
            </motion.div>
          </motion.div>

          {/* ── Location chip ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 mb-6 rounded-full bg-plum-50 border border-plum-100 text-plum-600 text-xs font-medium"
          >
            <HiLocationMarker className="w-3.5 h-3.5" />
            {personalInfo.location}
          </motion.div>

          {/* ── Name ── */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[86px] font-bold leading-tight tracking-tight mb-5 text-ink-900"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">Sneha</span>{" "}
            Sharma
          </motion.h1>

          {/* ── Typewriter ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="h-9 sm:h-10 flex items-center justify-center mb-5"
          >
            <span className="text-xl sm:text-2xl font-semibold text-ink-700">
              {typed}
              <span className="ml-0.5 inline-block w-0.5 h-6 bg-plum-500 align-middle animate-pulse" />
            </span>
          </motion.div>

          {/* ── Tagline ── */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="text-base sm:text-lg text-ink-500 max-w-2xl leading-relaxed mb-10"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* ── CTAs ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <motion.a
              href="#projects"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-plum-600 text-white font-semibold shadow-plum-glow hover:bg-plum-700 transition-all duration-200"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              View Projects
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </motion.a>

            <motion.a
              href={personalInfo.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white border border-ivory-300 text-ink-700 font-semibold hover:bg-ivory-100 hover:border-ivory-300 transition-all duration-200 shadow-warm-sm"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <HiArrowDown className="w-4 h-4" />
              Download Resume
            </motion.a>
          </motion.div>

          {/* ── Social icons ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex items-center justify-center gap-3"
          >
            {socialLinks.map(({ icon: Icon, href, label }, i) => (
              <motion.a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 rounded-xl bg-white border border-ivory-300 text-ink-400 hover:text-plum-600 hover:border-plum-200 hover:bg-plum-50 transition-all duration-200 shadow-warm-sm"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85 + i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-ink-300 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 rounded-full"
          style={{ background: "linear-gradient(to bottom, #6535BC, transparent)" }}
        />
      </motion.div>
    </section>
  );
}
