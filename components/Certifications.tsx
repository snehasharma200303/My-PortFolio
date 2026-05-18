"use client";

import { motion } from "framer-motion";
import { certifications } from "@/lib/data";
import { HiShieldCheck, HiStar } from "react-icons/hi";
import { useTilt } from "@/hooks/useTilt";

const colorMap: Record<string, { icon: string; badge: string; dot: string; hover: string }> = {
  plum:  { icon: "bg-plum-50 border-plum-100 text-plum-600",   badge: "bg-plum-50 border-plum-100 text-plum-700",   dot: "bg-plum-500",  hover: "hover:border-plum-200 hover:shadow-warm-md"  },
  amber: { icon: "bg-amber-50 border-amber-100 text-amber-600", badge: "bg-amber-50 border-amber-100 text-amber-700", dot: "bg-amber-500", hover: "hover:border-amber-200 hover:shadow-warm-md" },
  teal:  { icon: "bg-teal-50 border-teal-100 text-teal-600",   badge: "bg-teal-50 border-teal-100 text-teal-700",   dot: "bg-teal-500",  hover: "hover:border-teal-200 hover:shadow-warm-md"  },
};

function CertCard({ cert }: { cert: (typeof certifications)[0] }) {
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt(10);
  const c      = colorMap[cert.color] ?? colorMap.plum;
  const isCert = cert.type === "certification";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 900 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={`bg-white border border-ivory-300 rounded-2xl p-6 shadow-warm-sm transition-all duration-300 cursor-default h-full ${c.hover}`}
      >
        <div style={{ transform: "translateZ(16px)" }}>
          <div className="flex items-center justify-between mb-5">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${c.icon}`}>
              {isCert ? <HiShieldCheck className="w-5 h-5" /> : <HiStar className="w-5 h-5" />}
            </div>
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${c.badge}`}>
              {isCert ? "Certification" : "Achievement"}
            </span>
          </div>
          <h3 className="text-ink-900 font-bold text-base mb-1 leading-snug">{cert.title}</h3>
          <p className="text-ink-500 text-xs mb-4 leading-relaxed">{cert.description}</p>
          <div className="flex items-center justify-between pt-3 border-t border-ivory-200">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${c.dot}`} />
              <span className="text-xs text-ink-500 font-medium">{cert.issuer}</span>
            </div>
            <span className="text-xs text-ink-300">{cert.date}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-ivory-100">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">Recognition</span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-ink-900">
            Certifications & Achievements
          </h2>
          <div className="mt-4 w-14 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(to right, #6535BC, #C8891E)" }} />
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert) => <CertCard key={cert.title} cert={cert} />)}
        </div>
      </div>
    </section>
  );
}
