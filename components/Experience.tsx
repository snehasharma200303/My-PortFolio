"use client";

import { motion } from "framer-motion";
import { experience, education } from "@/lib/data";
import { HiBriefcase, HiAcademicCap, HiCheckCircle } from "react-icons/hi";

const itemVariants = {
  hidden:  { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0,  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-ivory-50">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-teal-600 text-sm font-semibold tracking-widest uppercase">
            Journey
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-ink-900">
            Experience & Education
          </h2>
          <div className="mt-4 w-14 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(to right, #6535BC, #C8891E)" }} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* ── Work Experience ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-9 h-9 rounded-xl bg-plum-50 border border-plum-100 flex items-center justify-center">
                <HiBriefcase className="w-4 h-4 text-plum-500" />
              </div>
              <h3 className="text-lg font-bold text-ink-800">Work Experience</h3>
            </motion.div>

            <div className="relative pl-5 border-l-2 border-ivory-300">
              {experience.map((job, i) => (
                <motion.div
                  key={job.company}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pb-8 last:pb-0"
                >
                  <div className="absolute -left-[21px] top-1.5 w-4 h-4 rounded-full border-2 border-plum-500 bg-ivory-50 shadow-warm-sm" />
                  <div className="bg-white border border-ivory-300 rounded-2xl p-5 ml-3 shadow-warm-sm hover:shadow-warm-md hover:border-plum-100 transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <span className="inline-block px-2.5 py-0.5 text-xs font-semibold bg-plum-50 border border-plum-100 text-plum-600 rounded-full mb-2">
                          {job.type}
                        </span>
                        <h4 className="text-ink-900 font-bold text-base">{job.role}</h4>
                        <p className="text-plum-600 text-sm font-medium">{job.company}</p>
                      </div>
                      <div className="text-right text-xs text-ink-300">
                        <div>{job.duration}</div>
                        <div className="mt-0.5">{job.location}</div>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {job.contributions.map((point, j) => (
                        <li key={j} className="flex gap-2.5 text-sm text-ink-500 leading-relaxed">
                          <HiCheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Education ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center">
                <HiAcademicCap className="w-4 h-4 text-amber-600" />
              </div>
              <h3 className="text-lg font-bold text-ink-800">Education</h3>
            </motion.div>

            <div className="relative pl-5 border-l-2 border-ivory-300">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.institution}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.1 + 0.15 }}
                  className="relative pb-7 last:pb-0"
                >
                  <div className={`absolute -left-[21px] top-1.5 w-4 h-4 rounded-full border-2 bg-ivory-50 shadow-warm-sm ${i === 0 ? "border-amber-500" : "border-ivory-300"}`} />
                  <div className="bg-white border border-ivory-300 rounded-2xl p-5 ml-3 shadow-warm-sm hover:shadow-warm-md hover:border-amber-100 transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h4 className="text-ink-900 font-bold text-sm leading-snug">{edu.institution}</h4>
                        <p className="text-ink-500 text-xs mt-0.5">{edu.degree}</p>
                        <p className="text-ink-300 text-xs mt-0.5">{edu.location}</p>
                      </div>
                      <div className="text-right">
                        <div className={`text-sm font-bold ${i === 0 ? "text-amber-600" : "text-ink-600"}`}>
                          {edu.grade}
                        </div>
                        <div className="text-xs text-ink-300 mt-0.5">{edu.duration}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
