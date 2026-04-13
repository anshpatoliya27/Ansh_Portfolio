import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Events from "@/components/Events";
import Certifications from "@/components/Certifications";
import Resume from "@/components/Resume";
import GitHubStats from "@/components/GitHubStats";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen relative cursor-default md:cursor-none">
      <CustomCursor />
      <Navbar />
      
      {/* Portfolios Sections */}
      <Hero />
      <About />
      <Projects />
      <Events />
      <Certifications />
      <Skills />
      <GitHubStats />
      <Resume />
      <Contact />
    </main>
  );
}
