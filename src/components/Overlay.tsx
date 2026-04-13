"use client";

import { motion } from "framer-motion";
import { FiArrowDownRight, FiGithub, FiExternalLink, FiUploadCloud } from "react-icons/fi";

const Section = ({ children, className }: any) => (
  <section className={`w-full min-h-screen flex flex-col justify-center px-8 md:px-24 py-24 relative ${className}`}>
    {children}
  </section>
);

export default function Overlay() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. HERO SECTION */}
      <Section className="items-start text-left text-white mt-12 md:mt-0">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-400 font-mono text-xs md:text-sm tracking-[0.3em] uppercase mb-6"
        >
          System Initialized // Next-Gen Engineer
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-6xl md:text-8xl lg:text-[11rem] font-bold font-space-grotesk tracking-tighter leading-[0.9] text-stroke mb-8 mix-blend-difference"
        >
          ANSH<br />PATOLIYA
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-2xl md:text-5xl font-inter font-light tracking-wide max-w-3xl text-gray-300 leading-tight"
        >
          Shaping the nexus of <span className="text-white font-semibold italic">Artificial Intelligence</span> and <span className="text-white font-semibold">Spatial Interfaces</span>.
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-8 md:left-24 flex items-center gap-4 text-xs md:text-sm font-mono text-gray-500 uppercase tracking-widest"
        >
          <FiArrowDownRight size={24} className="text-brand-accent animate-bounce" />
          Scroll to Explore Topography
        </motion.div>
      </Section>

      {/* 2. ABOUT SECTION */}
      <Section className="items-end text-right text-white">
        <div className="max-w-3xl flex flex-col items-end">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ margin: "-100px", once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-bold font-space-grotesk tracking-tighter mb-10"
          >
            THE <span className="text-stroke">ARCHITECT</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px", once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-3xl font-light leading-relaxed text-gray-300 mb-12 text-balance"
          >
            As an AI Engineer and Full Stack Developer, I synthesize complex machine learning primitives—CNNs, LLMs, and Generative Systems—into seamless MERN-stack and Next.js infrastructures.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ margin: "-100px", once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-wrap justify-end gap-3 font-mono text-sm uppercase"
          >
            {["PyTorch", "TensorFlow", "React", "Node.js", "LangChain"].map((skill, i) => (
              <span key={i} className="px-5 py-2 border border-white/20 rounded-full text-white/70 glass-panel hover:bg-white hover:text-black transition-colors duration-300">
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* 3. PROJECTS SECTION */}
      <Section className="items-start text-left text-white pt-32">
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ margin: "-100px", once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-bold font-space-grotesk tracking-tighter mb-16 border-b border-white/10 pb-6 w-full max-w-7xl"
        >
          DEPLOYED <span className="text-brand-accent">MODULES</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-7xl">
          {[
            { title: "Vision / CNN Array", desc: "Fruit Freshness Classification utilizing TensorFlow convolution pipelines mapping exact spoilage rates.", tags: ["AI", "CV", "Python"] },
            { title: "Analytics Core", desc: "MERN Stack real-time commercial marketing tracking platform featuring complex BI dashboards.", tags: ["Full Stack", "Data"] },
            { title: "BoxOffice Logic", desc: "Regression trees predicting global box office revenue mapping dynamically across historical cinematic datasets.", tags: ["ML", "Scikit", "XGBoost"] },
            { title: "Jarvis Network", desc: "NextGen LLM orchestration system scaling automated multi-step semantic reasoning tasks.", tags: ["Generative AI", "Agents"] },
          ].map((proj, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px", once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              key={i} 
              className="group relative border border-white/10 p-8 md:p-12 hover:border-white/40 transition-colors duration-500 glass-panel overflow-hidden"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex justify-between items-start mb-8">
                <h3 className="text-3xl font-bold font-space-grotesk tracking-tight">{proj.title}</h3>
                <div className="flex gap-4">
                  <FiGithub className="text-gray-500 group-hover:text-white transition-colors cursor-pointer" size={24} />
                  <FiExternalLink className="text-gray-500 group-hover:text-brand-accent transition-colors cursor-pointer" size={24} />
                </div>
              </div>
              <p className="relative z-10 text-gray-400 font-light mb-10 text-lg leading-relaxed">{proj.desc}</p>
              <div className="relative z-10 flex flex-wrap gap-3 font-mono text-xs text-gray-500 uppercase tracking-widest">
                {proj.tags.map(t => <span key={t} className="px-3 py-1 border border-white/10 rounded">/{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 4. EXPERIENCE & CHRONOLOGY */}
      <Section className="items-center justify-center text-center text-white min-h-[50vh]">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-9xl font-bold font-space-grotesk tracking-tighter absolute top-1/3 select-none pointer-events-none"
        >
          TIMELINE
        </motion.h2>
        
        <div className="max-w-4xl w-full z-10 space-y-8 md:space-y-16">
          {[
            { year: "2025", event: "Global AI Hackathon // Top 10%", role: "Lead ML Engineer" },
            { year: "2025", event: "Web3 & AI Summit", role: "Speaker & Architect" },
            { year: "2024", event: "HackTheFuture", role: "Full Stack Lead" },
          ].map((item, i) => (
            <motion.div 
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-100px", once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              key={i} 
              className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-6 group hover:border-brand-accent/50 transition-colors duration-300"
            >
              <div className="text-left mb-4 md:mb-0">
                <h4 className="text-3xl md:text-4xl font-space-grotesk font-bold group-hover:text-white text-gray-300 transition-colors">{item.event}</h4>
                <p className="text-gray-500 font-mono text-sm tracking-widest uppercase mt-2">{item.role}</p>
              </div>
              <span className="text-brand-accent font-mono text-2xl md:text-4xl font-light">{item.year}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 5. CONTACT & TERMINUS */}
      <Section className="items-center justify-center text-center text-white pb-32">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-50px", once: true }}
          className="text-3xl md:text-5xl font-bold font-space-grotesk tracking-tighter text-gray-400 mb-8"
        >
          INITIALIZE CONTACT
        </motion.h2>
        <motion.a 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ margin: "-50px", once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          href="mailto:anshpatoliya8@gmail.com"
          className="text-5xl md:text-8xl font-light tracking-tighter hover:text-brand-accent transition-colors duration-500 mb-20"
        >
          hello@ansh.ai
        </motion.a>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-50px", once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 font-mono text-sm tracking-[0.2em] text-gray-500"
        >
          <a href="https://linkedin.com/in/ansh-patoliya-755345359/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-300">LINKEDIN</a>
          <a href="https://instagram.com/ansh______27_" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-300">INSTAGRAM</a>
          <a href="/resume.pdf" target="_blank" className="hover:text-brand-accent transition-colors duration-300 flex items-center gap-3">
            <FiUploadCloud size={16} /> RESUME_DL
          </a>
        </motion.div>
        
        <div className="absolute bottom-12 text-[10px] md:text-xs font-mono text-gray-600 tracking-[0.3em] uppercase">
          © {new Date().getFullYear()} ANSH PATOLIYA. SYSTEM ONLINE.
        </div>
      </Section>
    </div>
  );
}
