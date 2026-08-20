import React, { useState, useEffect, useRef } from "react";
import { 
  ArrowRight, 
  ShieldCheck, 
  FileText, 
  Building2, 
  Sparkles,
  Zap,
  Activity,
  ArrowUpRight,
  Maximize2
} from "lucide-react";
import { triggerHaptic } from "../../utils/haptics";

interface HeroExperienceProps {
  onOpenRFQ: () => void;
  onOpenProjectBuilder: () => void;
}

export const HeroExperience: React.FC<HeroExperienceProps> = ({ onOpenRFQ, onOpenProjectBuilder }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // 3D Parallax Mouse Tracking (Mont-Fort style motion)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x, y });
      setTilt({
        x: -(y * 12),
        y: x * 12
      });
    };

    const el = containerRef.current;
    if (el) {
      el.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (el) el.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[88vh] lg:min-h-[92vh] flex flex-col justify-between overflow-hidden bg-slate-950 border-b border-slate-200 select-none"
    >
      
      {/* 3D Dynamic Parallax Background (Headquarters Building Image) */}
      <div 
        className="absolute inset-0 z-0 overflow-hidden transition-transform duration-300 ease-out pointer-events-none"
        style={{
          transform: `scale(1.08) translate3d(${mousePos.x * 20}px, ${mousePos.y * 20}px, 0)`,
        }}
      >
        <img
          src="/corporate-building.jpg"
          alt="HS ONE STEP SOLUTIONS Headquarters"
          className="w-full h-full object-cover object-left sm:object-center"
        />
        
        {/* Mont-Fort Style Subtle Clean Gradient Overlay: Open on the left, refined dark glass on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-950/40 to-slate-950/90 hidden lg:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20 lg:hidden" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-slate-950/70" />
      </div>

      {/* Floating 3D HUD Coordinates (Mont-Fort Style Luxury Telemetry) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 w-full flex items-center justify-between text-[11px] font-mono text-slate-300">
        <div className="flex items-center space-x-3 bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-700/60 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[#008744] animate-ping" />
          <span className="text-white font-bold tracking-wider">HS MASTER PMO</span>
          <span className="text-slate-500">|</span>
          <span className="text-[#D4AF37]">EST. 2024</span>
        </div>

        <div className="hidden sm:flex items-center space-x-4 bg-slate-900/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-700/60 shadow-lg text-[10px] text-slate-400">
          <span className="text-emerald-400 font-bold">● SINGLE POINT ACCOUNTABILITY</span>
          <span className="text-slate-600">/</span>
          <span>12 INTEGRATED SECTORS</span>
        </div>
      </div>

      {/* Main Content: Positioned on the RIGHT SIDE (Unobstructing the building on the left) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full flex items-center justify-end">
        
        {/* 3D Interactive Floating Glass Container on the Right */}
        <div 
          className="w-full lg:max-w-xl xl:max-w-2xl transition-transform duration-200 ease-out"
          style={{
            transform: `perspective(1000px) rotateX(${tilt.x * 0.5}deg) rotateY(${tilt.y * 0.5}deg)`,
          }}
        >
          <div className="bg-slate-900/85 backdrop-blur-2xl p-6 sm:p-10 rounded-3xl border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] space-y-6">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[11px] font-mono font-bold uppercase tracking-wider shadow-sm">
                GOVERNMENT • PUBLIC • PRIVATE
              </span>
              <span className="px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40 text-[11px] font-mono font-bold uppercase tracking-wider shadow-sm">
                “YOUR PLANS, OUR GOALS”
              </span>
            </div>

            {/* Bold Minimalist Headline (No Paragraph Box) */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
                ONE PARTNER. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-[#D4AF37]">
                  COMPLETE PROJECT EXECUTION.
                </span>
              </h1>
            </div>

            {/* 3 Quick Visual Indicator Pills */}
            <div className="grid grid-cols-3 gap-2.5 pt-1 text-center font-mono">
              <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/50 transition-all">
                <span className="text-sm sm:text-base font-extrabold text-white block">12 Sectors</span>
                <span className="text-[10px] text-slate-400">Integrated</span>
              </div>
              <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/50 transition-all">
                <span className="text-sm sm:text-base font-extrabold text-emerald-400 block">Single POC</span>
                <span className="text-[10px] text-slate-400">Master PMO</span>
              </div>
              <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/50 transition-all">
                <span className="text-sm sm:text-base font-extrabold text-[#D4AF37] block">Turnkey</span>
                <span className="text-[10px] text-slate-400">Day 1 to Handover</span>
              </div>
            </div>

            {/* Interactive Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => {
                  triggerHaptic(25);
                  onOpenProjectBuilder();
                }}
                className="flex-1 sm:flex-none px-7 py-4 bg-gradient-to-r from-[#008744] to-[#065F38] hover:from-[#065F38] hover:to-[#008744] text-white font-bold rounded-2xl text-xs sm:text-sm font-mono tracking-wider shadow-lg shadow-emerald-700/40 hover:shadow-emerald-700/60 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center space-x-2"
              >
                <span>START A PROJECT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#hospital-flagship"
                onClick={() => triggerHaptic(15)}
                className="flex-1 sm:flex-none px-6 py-4 bg-white/10 hover:bg-white text-white hover:text-slate-950 font-bold rounded-2xl text-xs sm:text-sm font-mono tracking-wider transition-all border border-white/20 hover:border-white flex items-center justify-center space-x-2"
              >
                <span>HOSPITAL FLAGSHIP</span>
              </a>

              <button
                onClick={() => {
                  triggerHaptic(15);
                  onOpenRFQ();
                }}
                className="w-full sm:w-auto px-4 py-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 font-bold flex items-center justify-center space-x-1.5 underline decoration-emerald-400/50 hover:decoration-emerald-400 underline-offset-4 transition-all"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>REQUEST RFQ / BOQ</span>
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Minimalist Status Bar */}
      <div className="relative z-10 bg-slate-950/90 backdrop-blur-md border-t border-slate-800/80 py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono text-slate-400">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-white font-bold">TURNKEY CORE CAPABILITIES:</span>
          </div>

          <div className="flex items-center space-x-3 overflow-x-auto pb-0.5 whitespace-nowrap text-slate-300 text-xs">
            <span className="text-emerald-400 font-bold">Healthcare & Hospitals</span>
            <span className="text-slate-600">•</span>
            <span>Medical Equipment</span>
            <span className="text-slate-600">•</span>
            <span>Civil Construction</span>
            <span className="text-slate-600">•</span>
            <span>Commercial Kitchens</span>
            <span className="text-slate-600">•</span>
            <span className="text-[#D4AF37] font-bold">Government Tenders</span>
          </div>
        </div>
      </div>
    </section>
  );
};
