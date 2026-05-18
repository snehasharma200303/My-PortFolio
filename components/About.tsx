"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";
import { about } from "@/lib/data";
import { HiCheckCircle } from "react-icons/hi";

function AnimatedStat({ value, label, icon }: { value: string; label: string; icon: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const match = value.match(/^(\d+\.?\d*)/);
  const isNumeric = !!match;

  useEffect(() => {
    if (!inView || !ref.current || !match) return;
    const target = parseFloat(match[1]);
    const isFloat = value.includes(".");
    const suffix = value.slice(match[0].length);
    const ctrl = animate(0, target, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate(v) {
        if (ref.current)
          ref.current.textContent = (isFloat ? v.toFixed(1) : Math.floor(v).toString()) + suffix;
      },
    });
    return () => ctrl.stop();
  }, [inView, value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.04, y: -4 }}
      className="bg-white border border-ivory-300 rounded-2xl p-6 text-center shadow-warm-sm hover:shadow-warm-md hover:border-plum-200 transition-all duration-300"
    >
      <span className="text-3xl mb-3 block">{icon}</span>
      <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
        <span ref={ref}>{isNumeric ? "0" : value}</span>
      </div>
      <div className="text-xs text-ink-300 font-medium tracking-wide uppercase">{label}</div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-ivory-100">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-plum-500 text-sm font-semibold tracking-widest uppercase">
            Who I Am
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-ink-900">
            About Me
          </h2>
          <div className="mt-4 w-14 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(to right, #6535BC, #C8891E)" }} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Bio + Strengths */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="space-y-5 text-ink-500 leading-relaxed"
            >
              {about.bio.map((p, i) => <p key={i} className="text-[0.95rem] sm:text-base">{p}</p>)}
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="mt-8"
            >
              <h3 className="text-ink-700 font-semibold mb-4 text-sm tracking-wide uppercase">
                Core Strengths
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {about.strengths.map((s) => (
                  <div key={s} className="flex items-center gap-2.5 text-ink-500 text-sm">
                    <HiCheckCircle className="w-4 h-4 text-plum-500 flex-shrink-0" />
                    {s}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Animated stats */}
          <div className="grid grid-cols-2 gap-4">
            {about.highlights.map((item) => (
              <AnimatedStat key={item.label} value={item.value} label={item.label} icon={item.icon} />
            ))}

            {/* Availability card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="col-span-2 bg-white border border-ivory-300 rounded-2xl p-5 flex items-center gap-4 shadow-warm-sm hover:shadow-warm-md hover:border-teal-200 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center flex-shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-pulse" />
              </div>
              <div>
                <div className="text-ink-700 font-semibold text-sm">
                  Available for Internships &amp; Full-time Roles
                </div>
                <div className="text-ink-300 text-xs mt-0.5">React.js · Node.js · Full Stack</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
