"use client";

import { motion } from "framer-motion";
import { FiCalendar, FiAward, FiUsers } from "react-icons/fi";

const events = [
  {
    title: "Global AI Hackathon 2025",
    role: "Lead Machine Learning Engineer",
    date: "November 2025",
    description: "Built a real-time multimodal AI assistant for educational accessibility. Awarded top 10% out of 500+ participating teams globally.",
    icon: <FiAward size={20} />,
    color: "brand-purple",
  },
  {
    title: "Web3 & AI Summit",
    role: "Speaker & Participant",
    date: "August 2025",
    description: "Presented research on the intersection of decentralized compute and LLM agent networks to an audience of 200+ industry professionals.",
    icon: <FiUsers size={20} />,
    color: "brand-cyan",
  },
  {
    title: "HackTheFuture",
    role: "Full Stack Developer",
    date: "March 2024",
    description: "Developed a distributed carbon footprint tracker utilizing Next.js, Node.js, and a custom CNN regression model for image-based CO2 estimation.",
    icon: <FiCalendar size={20} />,
    color: "brand-blue",
  },
];

export default function Events() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white mb-6 text-sm font-space-grotesk tracking-wide uppercase shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
            Chronological Log
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6 text-white tracking-tight">
            Events & Experience
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-4 bottom-0 w-[2px] bg-gradient-to-b from-brand-cyan via-brand-purple to-transparent opacity-30 md:-translate-x-1/2"></div>

          <div className="space-y-12 relative">
            {events.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Node */}
                <div className="absolute left-[20px] md:left-1/2 w-10 h-10 -translate-x-[18px] md:-translate-x-1/2 rounded-full flex items-center justify-center bg-[#0a0a0f] border-2 border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)] z-10 transition-colors duration-300 hover:border-white">
                  <div className={`text-${event.color} w-full h-full flex items-center justify-center bg-${event.color}/10 rounded-full`}>
                    {event.icon}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`pl-16 md:pl-0 w-full md:w-1/2 flex ${i % 2 === 0 ? "justify-start md:pl-12" : "justify-end md:pr-12"}`}>
                  <div className="group relative w-full bg-[#0a0a0f]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br from-${event.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    
                    <span className={`inline-block px-3 py-1 bg-${event.color}/10 text-${event.color} border border-${event.color}/20 rounded-full text-xs font-mono mb-4`}>
                      {event.date}
                    </span>
                    
                    <h3 className="text-xl font-bold font-space-grotesk text-white mb-2">
                      {event.title}
                    </h3>
                    
                    <h4 className="text-sm font-medium text-gray-300 mb-4">
                      {event.role}
                    </h4>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
