"use client";

import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiInstagram, FiSend } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-[30%] left-[-10%] w-[300px] h-[300px] bg-brand-cyan/10 blur-[150px] rounded-full point-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-brand-blue/10 blur-[150px] rounded-full point-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 border-t border-white/10 pt-24">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white mb-6 text-sm font-space-grotesk tracking-wide uppercase shadow-[0_0_10px_rgba(255,255,255,0.05)]">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Available for Opportunities
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6 text-white tracking-tight leading-tight">
              Let's Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">Future</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-10 max-w-md">
              Whether you have a futuristic project idea, a position to fill, or just want to discuss AI trends — I'm all ears.
            </p>

            <div className="space-y-6">
              <a 
                href="mailto:anshpatoliya8@gmail.com" 
                className="flex items-center gap-4 group p-4 rounded-xl bg-white/5 border border-white/5 hover:border-brand-cyan/30 hover:bg-white/10 transition-all duration-300 w-full max-w-sm"
              >
                <div className="w-12 h-12 rounded-full bg-brand-cyan/10 flex items-center justify-center text-brand-cyan group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                  <FiMail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-mono">Email</p>
                  <p className="text-white font-medium group-hover:text-brand-cyan transition-colors">anshpatoliya8@gmail.com</p>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/ansh-patoliya-755345359/" 
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 group p-4 rounded-xl bg-white/5 border border-white/5 hover:border-brand-blue/30 hover:bg-white/10 transition-all duration-300 w-full max-w-sm"
              >
                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,71,255,0.2)]">
                  <FiLinkedin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-mono">LinkedIn</p>
                  <p className="text-white font-medium group-hover:text-brand-blue transition-colors">Connect with me</p>
                </div>
              </a>

              <a 
                href="https://www.instagram.com/ansh______27_/" 
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 group p-4 rounded-xl bg-white/5 border border-white/5 hover:border-pink-500/30 hover:bg-white/10 transition-all duration-300 w-full max-w-sm"
              >
                <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-500 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(236,72,153,0.2)]">
                  <FiInstagram size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-mono">Instagram</p>
                  <p className="text-white font-medium group-hover:text-pink-500 transition-colors">@ansh______27_</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <div className="bg-[#0a0a0f]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 via-transparent to-brand-purple/5 pointer-events-none"></div>
              
              <h3 className="text-2xl font-bold font-space-grotesk text-white mb-6">Initialize Communication</h3>
              
              <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2 font-mono">_name</label>
                  <div className="relative group">
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-[#13131a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/50 transition-all duration-300"
                      placeholder="John Doe"
                    />
                    <div className="absolute inset-0 rounded-xl bg-brand-cyan/20 blur-md opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none z-[-1]"></div>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2 font-mono">_email</label>
                  <div className="relative group">
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-[#13131a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-purple/50 focus:ring-1 focus:ring-brand-purple/50 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                    <div className="absolute inset-0 rounded-xl bg-brand-purple/20 blur-md opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none z-[-1]"></div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2 font-mono">_message_payload</label>
                  <div className="relative group">
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full bg-[#13131a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all duration-300 resize-none"
                      placeholder="Let's build something amazing together..."
                    />
                    <div className="absolute inset-0 rounded-xl bg-white/10 blur-md opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none z-[-1]"></div>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full group relative px-8 py-4 bg-white text-black font-bold font-space-grotesk rounded-xl overflow-hidden transition-all duration-300 mt-4 flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Transmit Message
                    <FiSend size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan to-brand-purple opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-0"></div>
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500 font-mono">
          <p>© {new Date().getFullYear()} Ansh Patoliya. All rights reserved.</p>
          <div className="flex items-center gap-2">
            Status: <span className="text-green-500 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span> Online</span>
          </div>
        </div>
      </div>
    </section>
  );
}
