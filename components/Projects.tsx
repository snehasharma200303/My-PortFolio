"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import { HiArrowRight } from "react-icons/hi";

const featured = projects.filter((p) => p.featured);

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.14 } } };
const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-ivory-100">
      <div className="relative max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-plum-500 text-sm font-semibold tracking-widest uppercase">
            What I&apos;ve Built
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-ink-900">
            Featured Projects
          </h2>
          <div className="mt-4 w-14 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(to right, #6535BC, #C8891E)" }} />
          <p className="mt-5 text-ink-500 text-sm max-w-xl mx-auto">
            Production-grade applications built with a focus on security, performance, and user experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-7 mb-12"
        >
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} variants={cardVariants} />
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex justify-center"
        >
          <Link href="/projects">
            <motion.span
              className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-white border border-ivory-300 text-ink-700 font-semibold text-sm shadow-warm-sm hover:bg-plum-600 hover:text-white hover:border-plum-600 hover:shadow-plum-glow transition-all duration-250"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              View All Projects
              <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
