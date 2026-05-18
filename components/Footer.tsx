"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const footerLinks = [
  { label: "About",        href: "#about"          },
  { label: "Skills",       href: "#skills"         },
  { label: "Projects",     href: "#projects"       },
  { label: "Experience",   href: "#experience"     },
  { label: "Achievements", href: "#certifications" },
  { label: "Contact",      href: "#contact"        },
];

const socials = [
  { icon: SiGithub,   href: personalInfo.github,            label: "GitHub"   },
  { icon: FaLinkedin, href: personalInfo.linkedin,          label: "LinkedIn" },
  { icon: HiMail,     href: `mailto:${personalInfo.email}`, label: "Email"    },
];

export default function Footer() {
  return (
    /* Deep warm charcoal — anchors the page and provides strong contrast */
    <footer className="bg-[#17161A] text-ink-300 py-14 px-4 sm:px-6 lg:px-8">

      {/* Gradient divider line at top */}
      <div className="max-w-6xl mx-auto">
        <div
          className="h-px w-full mb-10 opacity-20"
          style={{ background: "linear-gradient(to right, transparent, #6535BC, #C8891E, transparent)" }}
        />

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          {/* Brand */}
          <div className="text-center md:text-left">
            <motion.a href="#" className="text-2xl font-bold gradient-text" whileHover={{ scale: 1.05 }}>
              SS.
            </motion.a>
            <p className="text-[#6B6875] text-xs mt-1.5 max-w-xs">
              Full Stack Developer · Greater Noida, India
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#6B6875] hover:text-ivory-50 text-sm transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-xl bg-[#24222A] border border-[#2E2C35] text-[#6B6875] hover:text-ivory-50 hover:border-plum-700 hover:bg-plum-900/30 transition-all duration-200"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-[#24222A] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#4A4850]">
          <span>© {new Date().getFullYear()} Sneha Sharma. All rights reserved.</span>
          <span>Built with Next.js · Tailwind CSS · Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
