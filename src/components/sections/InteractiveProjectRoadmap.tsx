import React, { useState, useEffect } from "react";
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Activity, 
  Zap, 
  ShieldCheck, 
  Building2, 
  Cpu, 
  ChevronRight, 
  Clock,
  Layers,
  Award
} from "lucide-react";
import { triggerHaptic } from "../../utils/haptics";

interface RoadmapNode {
  id: number;
  stageNum: string;
  timeframe: string;
  title: string;
  tagline: string;
  status: "COMPLETED" | "ACTIVE" | "UPCOMING";
  progress: number;
  image: string;
  highlights: string[];
  specs: string;
  telemetry: string;
  category: "PLANNING" | "CIVIL" | "HEALTHCARE" | "MEDTECH" | "COMMERCIAL" | "COMMISSIONING";
}

const ROADMAP_NODES: RoadmapNode[] = [
  {
    id: 1,
    stageNum: "MILESTONE 01",
    timeframe: "DAY 01 — 30",
    title: "Master Blueprint & Regulatory Architecture",
    tagline: "Site Topography, Statutory GFC Clearances & Integrated BIM Modeling",
    status: "COMPLETED",
    progress: 100,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80",
    highlights: [
      "3D Architectural BIM & Structural Load Analysis",
      "Statutory Fire, AERB & Environmental Clearances",
      "Unified Multi-Disciplinary Bill of Quantities (BOQ)"
    ],
    specs: "BIM Level 3 • Zero Spatial Clash Guarantee",
    telemetry: "GFC Drawings 100% Approved",
    category: "PLANNING"
  },
  {
    id: 2,
    stageNum: "MILESTONE 02",
    timeframe: "MONTH 02 — 04",
    title: "Heavy Civil & Substation Infrastructure",
    tagline: "High-Strength RCC Framing, Radiation Bunkers & 33kV Substation",
    status: "COMPLETED",
    progress: 100,
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1000&q=80",
    highlights: [
      "Heavy Seismic RCC Groundwork & Structural Steel",
      "Dedicated Radiation Bunker Lead/Barite Shielding",
      "Transformer Substation & Backup DG Synchronizer"
    ],
    specs: "Grade M40 Concrete • 2mm Lead Radiation Barrier",
    telemetry: "Structural Integrity Certified",
    category: "CIVIL"
  },
  {
    id: 3,
    stageNum: "MILESTONE 03",
    timeframe: "MONTH 05 — 07",
    title: "Modular Cleanrooms & Medical Gas (MGPS)",
    tagline: "Class 100 Laminar Flow OTs, HEPA H14 Plenums & Liquid Oxygen Manifold",
    status: "ACTIVE",
    progress: 88,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80",
    highlights: [
      "Modular Anti-Bacterial Wall Panels & Hermetic Sliding Doors",
      "Central Liquid Medical Oxygen (LMO) Storage & Copper Piping",
      "Positive Pressure HVAC (+15 Pa) with 25 Air Changes/Hr"
    ],
    specs: "ISO Class 5 Air Purity • BS EN 13348 Copper",
    telemetry: "Pressure Decay 24h Test PASSED",
    category: "HEALTHCARE"
  },
  {
    id: 4,
    stageNum: "MILESTONE 04",
    timeframe: "MONTH 08 — 10",
    title: "Diagnostic Imaging & Critical ICU Telemetry",
    tagline: "1.5T MRI RF Cage, 128-Slice CT Scanner & 24-Bed ICU Multi-Para Monitors",
    status: "ACTIVE",
    progress: 74,
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80",
    highlights: [
      "Precision Rigging & Anti-Vibration Base Foundations",
      "Ceiling Bridge Pendants with Medical Gas Terminals",
      "Centralized Nursing Telemetry Surveillance Hub"
    ],
    specs: "Copper RF Shielding • 100% Dual UPS Redundancy",
    telemetry: "Imaging Calibration Complete",
    category: "MEDTECH"
  },
  {
    id: 5,
    stageNum: "MILESTONE 05",
    timeframe: "MONTH 11 — 12",
    title: "Dietary Kitchen, Cold Chain & Furniture",
    tagline: "SS 304 Commercial Prep Lines, -86°C Blood Bank & Motorized Ward Beds",
    status: "UPCOMING",
    progress: 45,
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80",
    highlights: [
      "Food-Grade SS 304 Cooking Ranges & Exhaust Hoods",
      "Dedicated Blood Bank Plasma Freezers & Platelet Agitators",
      "Hospital-Grade Antimicrobial Flooring & Furniture"
    ],
    specs: "HACCP Food Safety • 24/7 Redundant Cold Chain",
    telemetry: "Staged for Phase 5 Handover",
    category: "COMMERCIAL"
  },
  {
    id: 6,
    stageNum: "MILESTONE 06",
    timeframe: "DAY 365",
    title: "Statutory Commissioning & Turnkey Handover",
    tagline: "Performance Qualification (PQ), Staff Training & 100% Operational Keys",
    status: "UPCOMING",
    progress: 15,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    highlights: [
      "Complete Cleanroom Particle Count & Air Balance Reports",
      "Medical Gas Purity & Hydrostatic Safety Sign-Offs",
      "Staff Clinical / Technical Operations Training Handover"
    ],
    specs: "NABH / HTM-0301 Final Certification",
    telemetry: "Single Accountability Sign-Off",
    category: "COMMISSIONING"
  }
];

interface InteractiveProjectRoadmapProps {
  onOpenRFQ: (sectorId?: string) => void;
}

export const InteractiveProjectRoadmap: React.FC<InteractiveProjectRoadmapProps> = ({ onOpenRFQ }) => {
  const [activeNodeId, setActiveNodeId] = useState<number>(3);
  const activeNode = ROADMAP_NODES.find((n) => n.id === activeNodeId) || ROADMAP_NODES[0];

  const handleSelectNode = (id: number) => {
    triggerHaptic(15);
    setActiveNodeId(id);
  };

  return (
    <section id="roadmap" className="py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      
      {/* Background Subtle CAD Grid */}
      <div className="absolute inset-0 bg-blueprint-light opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Adrenaline Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-50 border-2 border-emerald-300 text-[#008744] text-xs font-mono font-extrabold tracking-wider uppercase shadow-sm animate-pulse">
            <Zap className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Interactive Execution Roadmap</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            THE TURNKEY EXECUTION HIGHWAY
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            From empty earth to operational hospital in 365 days. Explore our synchronized roadmap milestones—engineered with single-point accountability.
          </p>
        </div>

        {/* Interactive Roadmap Highway Stepper */}
        <div className="relative mb-14">
          
          {/* Glowing Animated Connecting Highway Line */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-2 bg-slate-200 -translate-y-1/2 rounded-full overflow-hidden z-0">
            <div 
              className="h-full bg-gradient-to-r from-[#008744] via-[#D4AF37] to-[#008744] transition-all duration-700 shadow-md"
              style={{ width: `${(activeNodeId / ROADMAP_NODES.length) * 100}%` }}
            />
          </div>

          {/* 6 Milestone Nodes Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 relative z-10">
            {ROADMAP_NODES.map((node) => {
              const isSelected = node.id === activeNodeId;
              const isPast = node.id < activeNodeId;
              return (
                <button
                  key={node.id}
                  onClick={() => handleSelectNode(node.id)}
                  className={`p-3.5 sm:p-4 rounded-2xl text-left border transition-all duration-300 relative flex flex-col justify-between min-h-[110px] group ${
                    isSelected
                      ? "bg-slate-900 text-white border-[#008744] shadow-2xl scale-105 ring-4 ring-emerald-300/40"
                      : isPast
                      ? "bg-white text-slate-800 border-emerald-300 hover:border-emerald-500 shadow-sm"
                      : "bg-white text-slate-700 border-slate-200 hover:border-slate-400 shadow-sm"
                  }`}
                >
                  {/* Status Pulse Indicator */}
                  <div className="flex items-center justify-between w-full mb-2">
                    <span className={`text-[10px] font-mono font-extrabold ${isSelected ? "text-emerald-400" : "text-slate-400"}`}>
                      {node.stageNum}
                    </span>
                    <span className={`w-2.5 h-2.5 rounded-full ${
                      node.status === "COMPLETED"
                        ? "bg-[#008744]"
                        : node.status === "ACTIVE"
                        ? "bg-[#D4AF37] animate-ping"
                        : "bg-slate-300"
                    }`} />
                  </div>

                  <div>
                    <span className={`text-[9px] font-mono uppercase block font-bold ${isSelected ? "text-[#D4AF37]" : "text-slate-500"}`}>
                      {node.timeframe}
                    </span>
                    <div className={`text-xs font-bold leading-tight mt-0.5 line-clamp-2 ${isSelected ? "text-white" : "text-slate-900"}`}>
                      {node.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Milestone Cinematic Adrenaline Showcase Card */}
        <div className="bg-slate-900 text-white rounded-3xl border-2 border-emerald-400/40 shadow-2xl overflow-hidden relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left: Cinematic High-Resolution Photo */}
            <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[380px] lg:min-h-[460px] overflow-hidden">
              <img
                src={activeNode.image}
                alt={activeNode.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-slate-950/40 lg:to-slate-950" />
              
              {/* Photo Watermark Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md text-emerald-400 text-xs font-mono font-bold border border-emerald-400/50 shadow-lg">
                  {activeNode.category} EXECUTION PHASE
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white lg:hidden">
                <span className="text-xs font-mono text-[#D4AF37] font-bold block">{activeNode.timeframe}</span>
                <h3 className="text-xl font-bold">{activeNode.title}</h3>
              </div>
            </div>

            {/* Right: Technical Specifications & Telemetry */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-400">
                      0{activeNode.id}
                    </span>
                    <div>
                      <span className="text-[10px] font-mono text-[#D4AF37] uppercase font-extrabold tracking-wider block">
                        {activeNode.timeframe}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                        {activeNode.title}
                      </h3>
                    </div>
                  </div>

                  <span className="hidden sm:inline px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-xl text-xs font-mono font-bold">
                    {activeNode.status}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {activeNode.tagline}
                </p>

                {/* Key Execution Highlights */}
                <div className="space-y-2 pt-1">
                  <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-widest block">
                    KEY SCOPE DELIVERABLES:
                  </span>
                  <div className="space-y-1.5">
                    {activeNode.highlights.map((item, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-slate-200 bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/60">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Live Telemetry & Specs */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1">
                    <span className="text-[9px] font-mono text-[#D4AF37] uppercase font-bold block">STANDARDS:</span>
                    <span className="text-[11px] font-mono font-bold text-white block truncate">{activeNode.specs}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1">
                    <span className="text-[9px] font-mono text-emerald-400 uppercase font-bold block">TELEMETRY:</span>
                    <span className="text-[11px] font-mono font-bold text-white block truncate">{activeNode.telemetry}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
                <span className="text-xs font-mono text-slate-400">
                  Step {activeNode.id} of 6 in turnkey lifecycle
                </span>

                <button
                  onClick={() => onOpenRFQ("hospital-development")}
                  className="w-full sm:w-auto px-7 py-3 bg-gradient-to-r from-[#008744] to-[#065F38] hover:from-[#065F38] hover:to-[#008744] text-white font-bold rounded-xl text-xs font-mono tracking-wider transition-all shadow-lg shadow-emerald-700/30 flex items-center justify-center space-x-2"
                >
                  <span>REQUEST BOQ FOR MILESTONE {activeNode.id}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
