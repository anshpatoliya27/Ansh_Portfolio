"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiActivity, FiBarChart, FiFilm, FiCpu } from "react-icons/fi";
import Link from "next/link";

const projects = [
  {
    title: "Fruit Freshness Classification",
    description: "An advanced Computer Vision model utilizing Convolutional Neural Networks (CNN) to classify fruits and detect their freshness level with high accuracy.",
    tags: ["TensorFlow", "Keras", "OpenCV", "Python", "CNN"],
    icon: <FiActivity size={24} />,
    color: "brand-cyan",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Marketing Analytics Platform",
    description: "A comprehensive dashboard for tracking marketing campaigns, featuring real-time analytics, dynamic charting, and user management capabilities.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Tailwind"],
    icon: <FiBarChart size={24} />,
    color: "brand-purple",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Movie Revenue Prediction",
    description: "Machine learning regression pipeline that predicts potential movie box office revenue based on cast, budget, release date, and historical data.",
    tags: ["Scikit-Learn", "Pandas", "XGBoost", "Data Analysis"],
    icon: <FiFilm size={24} />,
    color: "pink-500",
    github: "#",
    live: null,
    featured: false,
  },
  {
    title: "Jarvis AI Assistant",
    description: "A next-generation personal AI assistant leveraging LLMs to execute complex multi-step workflows, automate tasks, and manage context across systems.",
    tags: ["LangChain", "OpenAI API", "Python", "Speech Recognition"],
    icon: <FiCpu size={24} />,
    color: "brand-blue",
    github: "#",
    live: null,
    featured: false,
    status: "In Development",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-brand-cyan/10 blur-[150px] rounded-full point-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-brand-purple/10 blur-[150px] rounded-full point-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-cyan mb-6 text-sm font-space-grotesk tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
            Deployed Modules
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6 text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            A portfolio of production-grade systems spanning deep learning models, scalable backends, and intuitive frontends.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-3xl bg-[#0a0a0f] border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-${project.color}/50 to-transparent blur-md`}></div>
              
              <div className="relative h-full p-8 flex flex-col z-10 bg-[#0a0a0f]/90 backdrop-blur-xl rounded-3xl">
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-${project.color}/10 border border-${project.color}/20 flex items-center justify-center text-${project.color} shadow-[0_0_20px_rgba(var(--color-${project.color}-rgb),0.2)] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                    {project.icon}
                  </div>
                  
                  <div className="flex items-center gap-3">
                    {project.status && (
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-400">
                        {project.status}
                      </span>
                    )}
                    {project.github && (
                      <Link href={project.github} className="text-gray-500 hover:text-white transition-colors">
                        <FiGithub size={22} />
                      </Link>
                    )}
                    {project.live && (
                      <Link href={project.live} className="text-gray-500 hover:text-brand-cyan transition-colors">
                        <FiExternalLink size={22} />
                      </Link>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold font-space-grotesk text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-500 transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-8 flex-1 leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto text-xs font-mono">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1.5 rounded-md bg-white/5 text-gray-300 border border-white/5 group-hover:border-white/10 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
