import Experience from "@/components/canvas/Experience";
import Overlay from "@/components/Overlay";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="w-full relative bg-[#020202] selection:bg-white/20 selection:text-white min-h-screen">
      <CustomCursor />
      
      {/* 3D Canvas Background fixed behind everything */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Experience />
      </div>

      {/* The Scrollable HTML Foreground */}
      <div className="relative z-10 w-full h-full pointer-events-none">
        <Overlay />
      </div>
    </main>
  );
}
