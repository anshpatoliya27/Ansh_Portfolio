"use client";

import { motion } from "framer-motion";
import { FiCpu, FiDatabase, FiLayers, FiCode } from "react-icons/fi";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cards = [
    {
      title: "AI & Machine Learning",
      icon: <FiCpu size={28} className="text-brand-cyan" />,
      skills: ["Machine Learning", "Deep Learning", "CNN", "Computer Vision"],
      gradient: "from-brand-cyan/20 to-transparent",
    },
    {
      title: "Generative AI",
      icon: <FiLayers size={28} className="text-brand-purple" />,
      skills: ["LLMs", "LangChain", "RAG Systems", "Prompt Engineering"],
      gradient: "from-brand-purple/20 to-transparent",
    },
    {
      title: "Full Stack Development",
      icon: <FiCode size={28} className="text-brand-blue" />,
      skills: ["React & Next.js", "Tailwind CSS", "TypeScript", "Node.js"],
      gradient: "from-brand-blue/20 to-transparent",
    },
    {
      title: "Backend & Databases",
      icon: <FiDatabase size={28} className="text-pink-500" />,
      skills: ["MERN Stack", "MongoDB", "Express", "REST APIs"],
      gradient: "from-pink-500/20 to-transparent",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:w-2/3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-purple mb-6 text-sm font-space-grotesk tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse"></span>
            System Diagnostics
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6 text-white">
            Bridging the gap between <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-blue">Intelligence</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-pink-500">Design</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed text-balance">
            I am an AI Engineer and Full Stack Developer passionate about building intelligent systems that solve real-world problems. With a strong foundation in deep learning and modern web technologies, I architecture platforms where advanced ML models meet seamless user experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative rounded-2xl bg-[#0a0a0f] border border-white/5 p-6 overflow-hidden hover:border-white/20 transition-colors duration-500"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full blur-2xl`}></div>
              
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500">
                {card.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 font-space-grotesk">{card.title}</h3>
              
              <ul className="space-y-2">
                {card.skills.map((skill, j) => (
                  <li key={j} className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-brand-cyan transition-colors" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
