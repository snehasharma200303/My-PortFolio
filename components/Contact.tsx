"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { HiMail, HiLocationMarker, HiArrowRight } from "react-icons/hi";

const contactDetails = [
  { icon: HiMail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}`, accent: "bg-plum-50 border-plum-100 text-plum-500" },
  { icon: HiLocationMarker, label: "Location", value: personalInfo.location, href: "#", accent: "bg-teal-50 border-teal-100 text-teal-600" },
];

const socials = [
  { icon: SiGithub, href: personalInfo.github, label: "GitHub" },
  { icon: FaLinkedin, href: personalInfo.linkedin, label: "LinkedIn" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Use Web3Forms instead since FormSubmit is having server issues (521 Error)
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE",
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `New Portfolio Contact from ${form.name}`,
          from_name: form.name,
          replyto: form.email,
        })
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please check if your Access Key is correct.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-ivory-50">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-plum-500 text-sm font-semibold tracking-widest uppercase">Let&apos;s Connect</span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-ink-900">Get In Touch</h2>
          <div className="mt-4 w-14 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(to right, #6535BC, #C8891E)" }} />
          <p className="mt-5 text-ink-500 text-sm max-w-lg mx-auto">
            Open to internships, full-time opportunities, and collaborations. I&apos;d love to connect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* ── Left: Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-xl font-bold text-ink-900 mb-6">Contact Details</h3>
            <div className="space-y-3 mb-8">
              {contactDetails.map(({ icon: Icon, label, value, href, accent }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 bg-white border border-ivory-300 rounded-xl shadow-warm-sm hover:shadow-warm-md hover:border-ivory-300 transition-all duration-200 group"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border flex-shrink-0 ${accent}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-ink-300 uppercase tracking-wider mb-0.5">{label}</div>
                    <div className="text-ink-700 text-sm font-medium group-hover:text-ink-900 transition-colors">{value}</div>
                  </div>
                  <HiArrowRight className="ml-auto w-4 h-4 text-ink-100 opacity-0 group-hover:opacity-100 group-hover:text-ink-400 transition-all duration-200" />
                </motion.a>
              ))}
            </div>

            <div>
              <h4 className="text-sm font-semibold text-ink-400 uppercase tracking-wider mb-4">Find me on</h4>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center gap-2.5 px-4 py-2.5 bg-white border border-ivory-300 rounded-xl text-ink-400 hover:text-plum-600 hover:border-plum-200 hover:bg-plum-50 transition-all duration-200 text-sm font-medium shadow-warm-sm"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-white border border-ivory-300 rounded-2xl p-7 shadow-warm-sm">
              <h3 className="text-xl font-bold text-ink-900 mb-6">Send a Message</h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="text-4xl mb-3">🎉</div>
                  <div className="text-ink-900 font-semibold mb-1">Message sent successfully!</div>
                  <div className="text-ink-400 text-sm">Thank you for reaching out. I will get back to you soon.</div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {(["name", "email"] as const).map((field) => (
                    <div key={field}>
                      <label className="block text-xs font-medium text-ink-400 mb-1.5 capitalize">{field}</label>
                      <input
                        type={field === "email" ? "email" : "text"}
                        required
                        placeholder={field === "email" ? "your@email.com" : "Your name"}
                        value={form[field]}
                        onChange={(e) => setForm((p) => ({ ...p, [field]: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-ivory-50 border border-ivory-300 text-ink-900 placeholder-ink-300 text-sm focus:outline-none focus:border-plum-400 focus:ring-2 focus:ring-plum-100 transition-all duration-200"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs font-medium text-ink-400 mb-1.5">Message</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Hi Sneha, I'd love to connect about..."
                      value={form.message}
                      onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-ivory-50 border border-ivory-300 text-ink-900 placeholder-ink-300 text-sm focus:outline-none focus:border-plum-400 focus:ring-2 focus:ring-plum-100 transition-all duration-200 resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-plum-600 text-white font-semibold text-sm shadow-plum-glow hover:bg-plum-700 transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? "Sending..." : "Send Message →"}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
