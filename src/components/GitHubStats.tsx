"use client";

import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";

export default function GitHubStats() {
  // Replace with actual GitHub username
  const username = "anshpatoliya"; 

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[100%] h-[100%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-purple/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            <FiGithub size={32} className="text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-6 text-white tracking-tight">
            Open Source <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">Contributions</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/5 bg-[#0a0a0f]/50 backdrop-blur-xl p-4 md:p-6 hover:border-white/20 transition-colors shadow-lg overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img 
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&title_color=00f0ff&text_color=9ca3af&icon_color=8a2be2&bg_color=00000000`} 
              alt="GitHub Stats" 
              className="w-full h-auto object-contain relative z-10 filter drop-shadow-md"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-white/5 bg-[#0a0a0f]/50 backdrop-blur-xl p-4 md:p-6 hover:border-white/20 transition-colors shadow-lg overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-brand-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img 
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true&title_color=8a2be2&text_color=9ca3af&bg_color=00000000`} 
              alt="Top Languages" 
              className="w-full h-auto object-contain relative z-10 filter drop-shadow-md"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
