"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import {
  SiReact, SiNodedotjs, SiExpress, SiMysql,
  SiJavascript, SiHtml5, SiCss, SiGit,
  SiGithub, SiFigma, SiSocketdotio, SiMongodb,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { IconType } from "react-icons";
import { useTilt } from "@/hooks/useTilt";

const iconMap: Record<string, { icon: IconType; color: string }> = {
  "Java":               { icon: FaJava,        color: "#f89820" },
  "JavaScript":         { icon: SiJavascript,  color: "#b45309" },
  "React.js":           { icon: SiReact,       color: "#0ea5e9" },
  "HTML":               { icon: SiHtml5,       color: "#ea580c" },
  "CSS":                { icon: SiCss,         color: "#2563eb" },
  "Node.js":            { icon: SiNodedotjs,   color: "#15803d" },
  "Express.js":         { icon: SiExpress,     color: "#3D3B44" },
  "Socket.IO":          { icon: SiSocketdotio, color: "#3D3B44" },
  "MySQL":              { icon: SiMysql,       color: "#0369a1" },
  "MongoDB":            { icon: SiMongodb,     color: "#16a34a" },
  "Git":                { icon: SiGit,         color: "#dc2626" },
  "GitHub":             { icon: SiGithub,      color: "#3D3B44" },
  "Figma":              { icon: SiFigma,       color: "#e11d48" },
};

function SkillCard({ category }: { category: (typeof skills)[0] }) {
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt(6);
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 900 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="bg-white border border-ivory-300 rounded-2xl p-6 shadow-warm-sm hover:shadow-warm-md hover:border-ivory-300 transition-all duration-300 cursor-default h-full"
      >
        <div className={`text-xs font-bold tracking-widest uppercase mb-4 ${category.color}`}>
          {category.category}
        </div>
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => {
            const entry = iconMap[skill];
            const Icon  = entry?.icon;
            return (
              <div
                key={skill}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border ${category.bgColor}`}
              >
                {Icon && <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: entry.color }} />}
                {skill}
              </div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-ivory-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">
            What I Use
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-ink-900">
            Technical Skills
          </h2>
          <div className="mt-4 w-14 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(to right, #6535BC, #C8891E)" }} />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((cat) => <SkillCard key={cat.category} category={cat} />)}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center text-ink-300 text-sm mt-10"
        >
          Always learning · Currently deepening TypeScript &amp; Cloud fundamentals
        </motion.p>
      </div>
    </section>
  );
}
