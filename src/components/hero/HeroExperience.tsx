import React, { useState, useEffect } from "react";
import { 
  ArrowRight, 
  ShieldCheck, 
  FileText, 
  Building2, 
  Activity, 
  CheckCircle2, 
  Play, 
  RotateCcw,
  Sparkles,
  Layers,
  ChevronRight
} from "lucide-react";
import { BlueprintCanvas } from "./BlueprintCanvas";

interface HeroExperienceProps {
  onOpenRFQ: () => void;
  onOpenProjectBuilder: () => void;
}

const CINEMATIC_PHASES = [
  {
    step: "01",
    label: "ARCHITECTURAL BLUEPRINT",
    subtext: "Master Planning & Civil Engineering",
    detail: "Site topographical survey, structural blueprints, and multi-disciplinary CAD layout mapping.",
    bgImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
    badge: "Planning Phase"
  },
  {
    step: "02",
    label: "STRUCTURAL INFRASTRUCTURE",
    subtext: "Civil Works & Core MEP",
    detail: "Heavy RCC framing, high-strength structural steel, and primary utility substructures.",
    bgImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1400&q=80",
    badge: "Civil Execution"
  },
  {
    step: "03",
    label: "HOSPITAL & CLEANROOMS",
    subtext: "Modular OT, ICU & Medical Gas",
    detail: "Hermetic cleanroom enclosures, laminar flow plenums, and central MGPS manifolds.",
    bgImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=80",
    badge: "Flagship Health"
  },
  {
    step: "04",
    label: "ADVANCED MEDICAL TECH",
    subtext: "Diagnostic & Surgical Suites",
    detail: "High-precision diagnostic imaging, patient telemetry, and electrosurgical equipment.",
    bgImage: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=1400&q=80",
    badge: "MedTech Suite"
  },
  {
    step: "05",
    label: "INDUSTRIAL & ENERGY",
    subtext: "Critical Power & Life Safety",
    detail: "Substations, industrial dietary kitchens, FM-200 fire systems, and utility plants.",
    bgImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=80",
    badge: "Power & Safety"
  },
  {
    step: "06",
    label: "ONE STEP EXECUTION HUB",
    subtext: "Complete Turnkey Handover",
    detail: "All 12 sectors converged under ONE accountable master execution partner.",
    bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    badge: "Turnkey Sign-Off"
  }
];

export const HeroExperience: React.FC<HeroExperienceProps> = ({ onOpenRFQ, onOpenProjectBuilder }) => {
  const [activePhase, setActivePhase] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % CINEMATIC_PHASES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const current = CINEMATIC_PHASES[activePhase];

  return (
    <section className="relative min-h-[88vh] flex flex-col justify-between overflow-hidden bg-white border-b border-slate-200">
      {/* Light Blueprint Background Grid */}
      <div className="absolute inset-0 bg-blueprint-light pointer-events-none" />
      <BlueprintCanvas activePhase={activePhase} />

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 flex-1 flex flex-col justify-center">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#008744] text-xs font-mono font-bold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#008744] animate-pulse" />
            <span>INTEGRATED B2B, GOV & INSTITUTIONAL SOLUTIONS</span>
          </div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#9A741E] text-xs font-mono font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>YOUR PLANS, OUR GOALS</span>
          </div>
        </div>

        {/* Skanvi-Inspired Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headlines & Action CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.06]">
              ONE PARTNER. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008744] via-[#065F38] to-[#D4AF37]">
                EVERYTHING YOUR PROJECT NEEDS.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-normal">
              From infrastructure and construction to specialized equipment, institutional procurement and complete project deployment — <strong className="text-slate-900 font-semibold">HS One Step Solutions</strong> brings multiple capabilities under one execution partner.
            </p>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenProjectBuilder}
                className="px-8 py-4 bg-gradient-to-r from-[#008744] to-[#065F38] hover:from-[#065F38] hover:to-[#008744] text-white font-bold rounded-2xl text-sm sm:text-base shadow-xl shadow-emerald-700/20 transition-all flex items-center space-x-3 group"
              >
                <span>START A PROJECT</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#sectors"
                className="px-7 py-4 bg-slate-50 hover:bg-slate-100 border border-slate-300 text-slate-800 font-bold rounded-2xl text-sm sm:text-base transition-all shadow-sm"
              >
                EXPLORE SOLUTIONS
              </a>

              <button
                onClick={onOpenRFQ}
                className="px-5 py-4 text-xs font-mono text-[#008744] hover:text-[#065F38] font-bold flex items-center space-x-1.5 underline decoration-[#008744]/40 hover:decoration-[#008744] underline-offset-4 transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>REQUEST FOR QUOTATION</span>
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200/80 text-xs font-mono">
              <div>
                <span className="text-lg sm:text-xl font-extrabold text-slate-900 block font-sans">12+</span>
                <span className="text-slate-500">Integrated Sectors</span>
              </div>
              <div>
                <span className="text-lg sm:text-xl font-extrabold text-[#008744] block font-sans">Single POC</span>
                <span className="text-slate-500">Master Contractor</span>
              </div>
              <div>
                <span className="text-lg sm:text-xl font-extrabold text-[#D4AF37] block font-sans">Turnkey</span>
                <span className="text-slate-500">Civil to Handover</span>
              </div>
            </div>
          </div>

          {/* Right Column: Skanvi-Style Visual Mosaic Card & HUD */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xl relative overflow-hidden group">
              {/* Photo Showcase Container */}
              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden mb-5 border border-slate-100 shadow-inner">
                <img
                  src={current.bgImage}
                  alt={current.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-mono font-bold text-[#008744] shadow-sm">
                    {current.badge}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] font-bold block">
                    STAGE {current.step} OF 06
                  </span>
                  <h3 className="text-lg font-bold leading-tight">{current.label}</h3>
                </div>
              </div>

              {/* Telemetry info */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500">{current.subtext}</span>
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="text-slate-600 hover:text-[#008744] flex items-center space-x-1 font-bold"
                  >
                    {isAutoPlaying ? <Play className="w-3 h-3 text-[#008744]" /> : <RotateCcw className="w-3 h-3 text-[#D4AF37]" />}
                    <span>{isAutoPlaying ? "AUTO" : "PAUSED"}</span>
                  </button>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-sans min-h-[38px]">
                  {current.detail}
                </p>

                {/* Progress bar */}
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-[#008744] to-[#D4AF37] h-full transition-all duration-500"
                    style={{ width: `${((activePhase + 1) / CINEMATIC_PHASES.length) * 100}%` }}
                  />
                </div>

                {/* Step Selector Buttons */}
                <div className="grid grid-cols-6 gap-1.5 pt-2">
                  {CINEMATIC_PHASES.map((p, idx) => (
                    <button
                      key={p.step}
                      onClick={() => {
                        setActivePhase(idx);
                        setIsAutoPlaying(false);
                      }}
                      className={`py-1 text-[11px] font-mono font-bold rounded-lg transition-all ${
                        idx === activePhase
                          ? "bg-[#008744] text-white shadow-md"
                          : "bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200"
                      }`}
                    >
                      {p.step}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Horizontal Environment Strip */}
      <div className="relative z-10 bg-slate-50 border-t border-slate-200 py-3.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center space-x-2 text-slate-700 font-bold">
            <span className="w-2 h-2 rounded-full bg-[#008744]" />
            <span>ECOSYSTEM SPECTRUM:</span>
          </div>

          <div className="flex items-center space-x-2.5 overflow-x-auto pb-0.5 text-xs whitespace-nowrap text-slate-600">
            <span className="text-[#008744] font-bold">Hospital Development</span>
            <span className="text-slate-300">→</span>
            <span>Construction Site</span>
            <span className="text-slate-300">→</span>
            <span className="text-[#008744] font-bold">Medical Equipment</span>
            <span className="text-slate-300">→</span>
            <span>Industrial Facility</span>
            <span className="text-slate-300">→</span>
            <span className="text-[#9A741E] font-bold">Energy Grid</span>
            <span className="text-slate-300">→</span>
            <span>Commercial Kitchen</span>
            <span className="text-slate-300">→</span>
            <span className="text-red-700 font-bold">Fire & Safety</span>
            <span className="text-slate-300">→</span>
            <span>B2B Furniture</span>
            <span className="text-slate-300">→</span>
            <span className="text-white font-bold bg-[#008744] px-2.5 py-0.5 rounded-full shadow-sm">ONE STEP SOLUTIONS</span>
          </div>
        </div>
      </div>
    </section>
  );
};
