import React, { useState } from "react";
import { 
  FileSearch, 
  Map, 
  Truck, 
  Hammer, 
  PackageCheck, 
  Wrench, 
  Cpu, 
  CheckCircle,
  ChevronRight,
  Sparkles
} from "lucide-react";

interface StageDetail {
  num: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  protocol: string;
}

const STAGES: StageDetail[] = [
  {
    num: "01",
    name: "CONSULT",
    shortDesc: "Requirement Analysis & Scope Definition",
    fullDesc: "Initial strategic engagement assessing facility goals, capacity projections, regulatory parameters, clinical/commercial workflows, and budget framework.",
    deliverables: [
      "Requirement Breakdown Structure (RBS)",
      "Feasibility & Statutory Regulation Checklist",
      "Preliminary Capital Expenditure (CAPEX) Modeling",
      "Multi-Disciplinary Scope Demarcation"
    ],
    protocol: "Requirement Sign-off Document (RSD)"
  },
  {
    num: "02",
    name: "PLAN",
    shortDesc: "Architectural & Technical Blueprinting",
    fullDesc: "Detailed engineering planning across civil structures, MEP heat loads, medical gas layouts, equipment power schematics, and cleanroom circulation paths.",
    deliverables: [
      "Master CAD Architectural & Structural Blueprints",
      "Integrated MEP, HVAC & Electrical Line Diagrams",
      "Medical Gas & Life-Safety Network Schematics",
      "Master Project Schedule & Milestone Gantt"
    ],
    protocol: "Good For Construction (GFC) Approvals"
  },
  {
    num: "03",
    name: "SOURCE",
    shortDesc: "Consolidated Institutional Procurement",
    fullDesc: "Direct factory and quarry procurement leveraging vetted Tier-1 global manufacturing partners for medical technology, structural steel, stone, and equipment.",
    deliverables: [
      "Consolidated Bill of Quantities (BOQ) Sourcing",
      "Factory Pre-Shipment Quality Inspections",
      "Lead-Time Synchronized Purchase Schedules",
      "Customs & Staged Warehouse Logistics"
    ],
    protocol: "Factory Acceptance Testing (FAT)"
  },
  {
    num: "04",
    name: "DEVELOP",
    shortDesc: "Civil Engineering & Core Infrastructure",
    fullDesc: "Ground-up structural construction, high-strength concrete works, radiation-shielded bunker enclosures, cleanroom partitions, and heavy utility basements.",
    deliverables: [
      "Reinforced Civil & Structural Framing",
      "Substation & Transformer Foundations",
      "Laminar Air Flow Cleanroom Enclosures",
      "Radiation Shielded Partition Walls"
    ],
    protocol: "Structural Stability & Pressure Sign-Off"
  },
  {
    num: "05",
    name: "DEPLOY",
    shortDesc: "Staged Equipment & Asset Mobilization",
    fullDesc: "Precision transport, heavy equipment rigging, floor staging, and room-by-room delivery of specialized diagnostic devices, dietary kitchens, and B2B furniture.",
    deliverables: [
      "Heavy Diagnostic Rigging & Vibration Isolation",
      "Room-by-Room Asset Staging & Uncrating",
      "ESD-Protected Electronics Handling",
      "Inventory Logging & RFID Asset Tagging"
    ],
    protocol: "Site Mobilization & Dispatch Audit"
  },
  {
    num: "06",
    name: "INSTALL",
    shortDesc: "Mechanical, Electrical & Surgical Setup",
    fullDesc: "Specialized mechanical fastening, medical gas terminal hookups, surgical pendant mounting, commercial kitchen line connections, and electrical wiring.",
    deliverables: [
      "Modular OT Ceiling Plenum & Pendant Anchoring",
      "MGPS Copper Pipeline Brazing & Terminals",
      "SS 304 Kitchen Range & Exhaust Hood Ducting",
      "Addressable Fire Sprinkler & Alarm Fastening"
    ],
    protocol: "Installation Qualification (IQ)"
  },
  {
    num: "07",
    name: "INTEGRATE",
    shortDesc: "Telemetry, Automation & BMS Connectivity",
    fullDesc: "Cross-linking independent sub-systems: connecting central nurse stations to patient monitors, BMS to HVAC chillers, and fire suppression to emergency shutdowns.",
    deliverables: [
      "Centralized Nursing Telemetry Hub Networking",
      "Building Management System (BMS) Automation",
      "PACS & Medical Imaging Server Linking",
      "Emergency Power Auto-Switch Interlocking"
    ],
    protocol: "Operational Qualification (OQ)"
  },
  {
    num: "08",
    name: "COMMISSION",
    shortDesc: "Testing, Certification & Turnkey Handover",
    fullDesc: "End-to-end performance validation, cleanroom particle count testing, medical gas purity verification, user training, and final operational facility handover.",
    deliverables: [
      "ISO Cleanroom Particle Count & Air Balance Reports",
      "Medical Gas Purity & Hydrostatic Pressure Certs",
      "Operator & Engineering Staff Training Handover",
      "Complete As-Built Documentation & O&M Manuals"
    ],
    protocol: "Performance Qualification (PQ) & Handover"
  }
];

export const OneStepModel: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<number>(0);
  const active = STAGES[selectedStage];

  const getStageIcon = (idx: number) => {
    switch (idx) {
      case 0: return <FileSearch className="w-5 h-5" />;
      case 1: return <Map className="w-5 h-5" />;
      case 2: return <Truck className="w-5 h-5" />;
      case 3: return <Hammer className="w-5 h-5" />;
      case 4: return <PackageCheck className="w-5 h-5" />;
      case 5: return <Wrench className="w-5 h-5" />;
      case 6: return <Cpu className="w-5 h-5" />;
      case 7: return <CheckCircle className="w-5 h-5" />;
      default: return <Cpu className="w-5 h-5" />;
    }
  };

  return (
    <section id="one-step-model" className="py-24 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-[#008744] text-xs font-mono font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>End-to-End Project Execution</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            THE ONE STEP MODEL
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            A synchronized 8-stage methodology that governs the entire project lifecycle—from initial requirement identification to final operational sign-off.
          </p>
        </div>

        {/* 8-Stage Interactive Navigation Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-10">
          {STAGES.map((stage, idx) => {
            const isSelected = idx === selectedStage;
            return (
              <button
                key={stage.num}
                onClick={() => setSelectedStage(idx)}
                className={`p-4 rounded-2xl text-left transition-all relative overflow-hidden border ${
                  isSelected
                    ? "bg-white border-[#008744] shadow-lg ring-2 ring-emerald-200"
                    : "bg-white border-slate-200 hover:border-slate-300 text-slate-600"
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#008744] to-[#D4AF37]" />
                )}
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${isSelected ? "text-[#008744]" : "text-slate-400"}`}>
                    {stage.num}
                  </span>
                  <div className={`p-1.5 rounded-lg ${isSelected ? "text-white bg-[#008744]" : "text-slate-400 bg-slate-100"}`}>
                    {getStageIcon(idx)}
                  </div>
                </div>
                <div className="text-xs font-bold text-slate-900 tracking-wide">{stage.name}</div>
                <div className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">{stage.shortDesc}</div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep Dive Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-4xl sm:text-5xl font-extrabold font-mono text-[#008744]">
                  {active.num}
                </span>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block font-bold">STAGE SPECIFICATION</span>
                  <h3 className="text-2xl font-extrabold text-slate-900">{active.name}</h3>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {active.fullDesc}
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-1 text-xs">
                <span className="text-[10px] font-mono text-[#008744] uppercase tracking-wider block font-bold">
                  GOVERNANCE GATEWAY & PROTOCOL:
                </span>
                <span className="text-slate-900 font-mono font-bold">{active.protocol}</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                  Core Stage Deliverables & Milestones
                </span>
                <span className="text-[11px] font-mono text-[#008744] font-bold">STAGE {active.num} OF 08</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {active.deliverables.map((deliv, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-[#008744] flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-800 leading-snug">{deliv}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 mt-2">
                <button
                  disabled={selectedStage === 0}
                  onClick={() => setSelectedStage((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700 hover:text-slate-900 disabled:opacity-30 transition-all font-bold"
                >
                  ← PREVIOUS STAGE
                </button>
                <button
                  disabled={selectedStage === STAGES.length - 1}
                  onClick={() => setSelectedStage((prev) => Math.min(STAGES.length - 1, prev + 1))}
                  className="px-4 py-2 rounded-xl bg-[#008744] text-white text-xs font-mono font-bold hover:bg-[#065F38] disabled:opacity-30 transition-all flex items-center space-x-1 shadow-sm"
                >
                  <span>NEXT STAGE</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
