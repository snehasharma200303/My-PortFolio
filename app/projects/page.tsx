"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import { HiArrowLeft, HiSearch } from "react-icons/hi";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";

const ALL_LABEL = "All";
const categories = [ALL_LABEL, ...Array.from(new Set(projects.map((p) => p.category)))];

const cardVariants = {
  hidden:  { opacity: 0, y: 32, scale: 0.97 },
  visible: { opacity: 1, y: 0,  scale: 1,   transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, scale: 0.95,        transition: { duration: 0.2 } },
};

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState(ALL_LABEL);
  const [search, setSearch]                 = useState("");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchCat    = activeCategory === ALL_LABEL || p.category === activeCategory;
      const q           = search.toLowerCase().trim();
      const matchSearch = !q
        || p.title.toLowerCase().includes(q)
        || p.techStack.some((t) => t.toLowerCase().includes(q))
        || p.shortDesc.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  return (
    <>
      <ScrollProgress />
      <ScrollToTop />

      {/* ── Top bar ── */}
      <header className="sticky top-0 z-40 bg-ivory-50/90 backdrop-blur-xl border-b border-ivory-300 shadow-warm-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/">
            <motion.span
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-400 hover:text-plum-600 transition-colors duration-200"
              whileHover={{ x: -3 }}
            >
              <HiArrowLeft className="w-4 h-4" />
              Back to Home
            </motion.span>
          </Link>
          <span className="text-xl font-bold gradient-text">SS.</span>
        </div>
      </header>

      <main className="min-h-screen bg-ivory-50">

        {/* ── Hero banner ── */}
        <div className="relative overflow-hidden bg-ivory-100 border-b border-ivory-300 py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />
          <div className="absolute -top-28 -left-36 w-[500px] h-[500px] bg-plum-100/40 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-20 -right-28 w-[400px] h-[400px] bg-amber-100/40 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative max-w-6xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-plum-500 text-sm font-semibold tracking-widest uppercase">Portfolio</span>
              <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-bold text-ink-900 tracking-tight">
                All Projects
              </h1>
              <div className="mt-4 w-14 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(to right, #6535BC, #C8891E)" }} />
              <p className="mt-5 text-ink-500 text-base max-w-xl mx-auto">
                A complete collection spanning full-stack, frontend, and backend engineering — every project built with purpose.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-ivory-300 shadow-warm-sm text-sm text-ink-600 font-medium">
                <span className="w-2 h-2 rounded-full bg-plum-500" />
                {projects.length} Projects
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Filter + Search ── */}
        <div className="sticky top-16 z-30 bg-ivory-50/95 backdrop-blur-lg border-b border-ivory-300 shadow-warm-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">

            {/* Category pills */}
            <div className="flex items-center gap-2 flex-wrap flex-1">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-plum-600 border-plum-600 text-white shadow-plum-glow"
                      : "bg-white border-ivory-300 text-ink-500 hover:border-plum-200 hover:text-plum-600"
                  }`}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {cat}
                </motion.button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-56 flex-shrink-0">
              <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-300 pointer-events-none" />
              <input
                type="text"
                placeholder="Search projects or tech…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-lg bg-white border border-ivory-300 text-sm text-ink-700 placeholder-ink-300 focus:outline-none focus:border-plum-400 focus:ring-2 focus:ring-plum-100 transition-all duration-200"
              />
            </div>
          </div>
        </div>

        {/* ── Grid ── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

          <motion.p
            key={filtered.length}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-ink-300 mb-8"
          >
            Showing{" "}
            <span className="font-semibold text-ink-600">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "project" : "projects"}
            {activeCategory !== ALL_LABEL && (
              <> in <span className="font-semibold text-plum-600">{activeCategory}</span></>
            )}
            {search && (
              <> matching &ldquo;<span className="font-semibold text-ink-700">{search}</span>&rdquo;</>
            )}
          </motion.p>

          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              <motion.div key="grid" layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map((project) => (
                  <motion.div key={project.title} layout variants={cardVariants} initial="hidden" animate="visible" exit="exit">
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center py-24"
              >
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-ink-700 font-semibold text-lg mb-2">No projects found</h3>
                <p className="text-ink-400 text-sm">Try adjusting your search or clearing the filter.</p>
                <motion.button
                  onClick={() => { setActiveCategory(ALL_LABEL); setSearch(""); }}
                  className="mt-6 px-5 py-2.5 rounded-xl bg-plum-600 text-white text-sm font-semibold hover:bg-plum-700 transition-colors shadow-plum-glow"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Clear filters
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Footer strip ── */}
        <div className="border-t border-ivory-300 bg-ivory-100 py-10 text-center">
          <p className="text-ink-400 text-sm mb-4">Want to know more about me?</p>
          <Link href="/">
            <motion.span
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-plum-600 text-white text-sm font-semibold shadow-plum-glow hover:bg-plum-700 transition-colors duration-200"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <HiArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </motion.span>
          </Link>
        </div>
      </main>
    </>
  );
}
