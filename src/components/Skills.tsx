"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "Python", level: 95 },
      { name: "TensorFlow", level: 85 },
      { name: "PyTorch", level: 80 },
      { name: "Scikit-Learn", level: 90 },
      { name: "CNN / Computer Vision", level: 85 },
      { name: "LangChain / LLMs", level: 80 },
    ],
    color: "bg-brand-cyan",
    glowColor: "shadow-[0_0_15px_rgba(0,240,255,0.5)]",
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 85 },
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "REST APIs", level: 95 },
      { name: "Python FastAPI", level: 75 },
    ],
    color: "bg-brand-purple",
    glowColor: "shadow-[0_0_15px_rgba(138,43,226,0.5)]",
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 80 },
      { name: "HTML/CSS", level: 95 },
    ],
    color: "bg-brand-blue",
    glowColor: "shadow-[0_0_15px_rgba(0,71,255,0.5)]",
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS / Vercel", level: 80 },
      { name: "Linux", level: 85 },
      { name: "Postman", level: 90 },
      { name: "Figma", level: 70 },
    ],
    color: "bg-pink-500",
    glowColor: "shadow-[0_0_15px_rgba(236,72,153,0.5)]",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-blue mb-6 text-sm font-space-grotesk tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
            Tech Stack
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6 text-white text-center">
            Technical Arsenal
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#0a0a0f]/50 border border-white/5 rounded-2xl p-8 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold font-space-grotesk text-white mb-8 border-b border-white/10 pb-4">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, j) => (
                  <div key={j}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + j * 0.1, ease: "easeOut" }}
                        className={`h-full ${category.color} ${category.glowColor} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
