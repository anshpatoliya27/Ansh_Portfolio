"use client";

import { motion } from "framer-motion";
import { FiDownload, FiFileText } from "react-icons/fi";

export default function Resume() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-[#0a0a0f]/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-16 overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-10 shadow-[0_0_50px_rgba(0,240,255,0.05)]"
        >
          {/* Animated Background Mesh */}
          <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none"></div>
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-purple/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-brand-cyan/20 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white mb-6 text-sm font-space-grotesk tracking-wide uppercase">
              <FiFileText className="text-gray-400" /> Complete Specification
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk text-white mb-4 tracking-tight">
              Review My <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-white">Curriculum Vitae</span>
            </h2>
            <p className="text-gray-400 max-w-lg mb-0 text-lg">
              Get an in-depth view of my professional timeline, exact tech stack metrics, and academic history in a standard format.
            </p>
          </div>

          <div className="relative z-10 flex flex-col gap-4 w-full sm:w-auto mt-8 sm:mt-0">
            <a 
              href="/resume.pdf" 
              download
              className="group relative px-8 py-5 bg-white text-black font-bold font-space-grotesk rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(0,240,255,0.6)] flex justify-center items-center gap-3 w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan to-brand-purple opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <FiDownload size={20} className="group-hover:-translate-y-1 transition-transform" />
              Download Resume
            </a>
            
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-transparent text-white font-semibold font-space-grotesk rounded-xl border border-white/20 hover:border-brand-purple/50 transition-all duration-300 hover:bg-white/5 w-full sm:w-auto text-center"
            >
              View in Browser
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
