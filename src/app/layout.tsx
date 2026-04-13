import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/canvas/Stars";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Ansh Patoliya | AI Engineer & Full Stack Developer",
  description: "Portfolio of Ansh Patoliya, an AI Engineer, Full Stack Developer, and Future Founder. Showcasing projects in Machine Learning, Generative AI, and modern web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans min-h-screen bg-[#050508] text-white antialiased selection:bg-brand-purple/30 selection:text-white`}
      >
        <div className="fixed inset-0 z-[-2] overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-purple/10 blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-cyan/10 blur-[120px]" />
          <div className="absolute top-[40%] left-[50%] translate-x-[-50%] w-[30%] h-[30%] rounded-full bg-brand-blue/10 blur-[150px]" />
        </div>

        <StarsCanvas />
        
        <div className="relative z-0 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
