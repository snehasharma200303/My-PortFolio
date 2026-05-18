"use client";

import { motion, type Variants } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { HiExternalLink } from "react-icons/hi";
import { useTilt } from "@/hooks/useTilt";
import type { Project } from "@/lib/data";

// Accent map: each accentColor → visual tokens
const accentMap: Record<string, {
  stripeClass: string;    // CSS class from globals.css
  badge: string;          // chip classes
  metric: string;         // metric value color
  hoverBorder: string;    // card hover border color
}> = {
  plum:    { stripeClass: "stripe-plum",  badge: "bg-plum-50 border-plum-100 text-plum-700",       metric: "text-plum-600",   hoverBorder: "hover:border-plum-200"   },
  amber:   { stripeClass: "stripe-amber", badge: "bg-amber-50 border-amber-100 text-amber-700",    metric: "text-amber-600",  hoverBorder: "hover:border-amber-200"  },
  teal:    { stripeClass: "stripe-teal",  badge: "bg-teal-50 border-teal-100 text-teal-700",       metric: "text-teal-700",   hoverBorder: "hover:border-teal-200"   },
  rose:    { stripeClass: "stripe-rose",  badge: "bg-rose-50 border-rose-100 text-rose-700",       metric: "text-rose-600",   hoverBorder: "hover:border-rose-200"   },
  sage:    { stripeClass: "stripe-sage",  badge: "bg-emerald-50 border-emerald-100 text-emerald-700", metric: "text-emerald-700", hoverBorder: "hover:border-emerald-200" },
  umber:   { stripeClass: "stripe-umber", badge: "bg-amber-50 border-amber-200 text-amber-800",    metric: "text-amber-700",  hoverBorder: "hover:border-amber-300"  },
};

interface Props {
  project: Project;
  variants?: Variants;
}

export default function ProjectCard({ project, variants }: Props) {
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt(7);
  const accent = accentMap[project.accentColor] ?? accentMap.plum;

  return (
    <motion.div variants={variants} style={{ perspective: 1000 }}>
      <motion.div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={`group relative bg-white border border-ivory-300 rounded-2xl overflow-hidden shadow-warm-sm hover:shadow-warm-lg transition-all duration-300 cursor-default h-full ${accent.hoverBorder}`}
      >
        {/* Coloured top stripe */}
        <div className={`h-1 w-full ${accent.stripeClass}`} />

        {/* Hover bg tint */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br ${project.gradient}`}
        />

        <div className="relative p-7" style={{ transform: "translateZ(18px)" }}>
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full border mb-2 ${accent.badge}`}>
                {project.date}
              </span>
              <h3 className="text-xl font-bold text-ink-900 leading-snug">{project.title}</h3>
              <p className="text-ink-300 text-xs mt-1 font-medium">{project.category}</p>
            </div>

            {/* Links */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg bg-ivory-50 border border-ivory-300 text-ink-300 hover:text-ink-700 hover:bg-ivory-100 transition-all duration-200"
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
              >
                <SiGithub className="w-4 h-4" />
              </motion.a>
              {project.live !== "#" && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live Demo"
                  className="p-2 rounded-lg bg-ivory-50 border border-ivory-300 text-ink-300 hover:text-ink-700 hover:bg-ivory-100 transition-all duration-200"
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <HiExternalLink className="w-4 h-4" />
                </motion.a>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-ink-500 text-sm leading-relaxed mb-5">{project.description}</p>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-3 mb-5">
            {project.metrics.map((m) => (
              <div key={m.label} className="bg-ivory-50 border border-ivory-200 rounded-xl p-3 text-center">
                <div className={`text-base font-bold ${accent.metric}`}>{m.value}</div>
                <div className="text-xs text-ink-300 mt-0.5 leading-tight">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-medium bg-ivory-50 border border-ivory-200 text-ink-500"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
