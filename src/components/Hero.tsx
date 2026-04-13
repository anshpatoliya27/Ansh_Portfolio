"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiTerminal } from "react-icons/fi";
import Link from "next/link";
import SphereCoreCanvas from "./canvas/SphereCore";

const roles = [
  "AI Engineer",
  "Full Stack Developer",
  "Machine Learning Expert",
  "Future Founder",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 40 : 100;
    const delay = isDeleting && text === "" ? 400 : !isDeleting && text === currentRole ? 2000 : typeSpeed;

    const timeout = setTimeout(() => {
      setText((prev) => {
        if (isDeleting) return currentRole.substring(0, prev.length - 1);
        return currentRole.substring(0, prev.length + 1);
      });

      if (!isDeleting && text === currentRole) {
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Abstract Background Design */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none opacity-20">
        <div className="absolute top-[10%] right-[5%] w-[600px] h-[600px] bg-brand-cyan/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-[20%] left-[5%] w-[500px] h-[500px] bg-brand-purple/20 blur-[120px] rounded-full" />
      </div>

      {/* Grid Pattern overlaid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="flex-1 text-center lg:text-left mt-10 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-cyan mb-8 font-mono text-sm shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                <FiTerminal size={14} />
                <span>Initialize sequence...</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold font-space-grotesk tracking-tight mb-6"
            >
              <span className="block text-white">Hi, I'm</span>
              <span className="block relative inline-block mt-2">
                <span className="absolute inset-0 bg-gradient-to-r from-brand-cyan to-brand-purple blur-2xl opacity-40"></span>
                <span className="relative bg-gradient-to-r from-brand-cyan via-white to-brand-purple bg-clip-text text-transparent">
                  Ansh Patoliya
                </span>
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="h-12 md:h-16 mb-8"
            >
              <h2 className="text-xl md:text-3xl text-gray-400 font-medium flex items-center justify-center lg:justify-start gap-2">
                <span className="text-white">&gt; </span>
                <span>{text}</span>
                <span className="w-[3px] h-[1em] bg-brand-cyan animate-pulse"></span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5"
            >
              <Link
                href="#projects"
                className="group relative px-8 py-4 bg-white text-black font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] w-full sm:w-auto text-center flex justify-center items-center gap-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan to-brand-purple opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                View Projects
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
              
              <Link
                href="#contact"
                className="group px-8 py-4 bg-transparent text-white font-semibold rounded-lg border border-white/20 hover:border-brand-purple/50 transition-all duration-300 hover:bg-white/5 w-full sm:w-auto text-center"
              >
                Contact Me
              </Link>
            </motion.div>
          </div>

          {/* Right side 3D Interactive Core */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="flex-1 relative hidden lg:flex justify-center items-center w-full min-h-[500px]"
          >
            <SphereCoreCanvas />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
