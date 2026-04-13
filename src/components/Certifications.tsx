"use client";

import { motion } from "framer-motion";
import { FiCheckCircle, FiExternalLink } from "react-icons/fi";
import Link from "next/link";

const certs = [
  {
    name: "Google Cloud Professional Machine Learning Engineer",
    issuer: "Google Cloud",
    date: "July 2025",
    link: "#",
    color: "brand-blue"
  },
  {
    name: "Deep Learning Specialization",
    issuer: "Coursera / deeplearning.ai",
    date: "January 2024",
    link: "#",
    color: "brand-cyan"
  },
  {
    name: "Full Stack Developer Nanodegree",
    issuer: "Udacity",
    date: "August 2023",
    link: "#",
    color: "pink-500"
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="absolute top-[50%] left-[-10%] w-[300px] h-[300px] bg-brand-cyan/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-purple mb-6 text-sm font-space-grotesk tracking-wide uppercase shadow-[0_0_15px_rgba(138,43,226,0.1)]">
            <FiCheckCircle size={14} className="text-brand-purple" />
            Verified Credentials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6 text-white tracking-tight">
            Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative h-full bg-[#0a0a0f]/80 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className={`absolute -inset-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-${cert.color}/30 to-transparent blur-xl -z-10`}></div>
              
              <div className="flex-1">
                <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner text-${cert.color} group-hover:scale-110 transition-transform duration-300`}>
                  <FiCheckCircle size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 font-space-grotesk leading-snug">
                  {cert.name}
                </h3>
                
                <p className="text-gray-400 text-sm mb-6">
                  Issued by <span className="text-white font-medium">{cert.issuer}</span>
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-gray-500">{cert.date}</span>
                <Link 
                  href={cert.link} 
                  className={`text-gray-400 hover:text-${cert.color} transition-colors flex items-center gap-1 text-sm font-medium`}
                >
                  Verify <FiExternalLink size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
