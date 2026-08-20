# coding: utf-8
import os

base = "/Users/michaeljacob/.gemini/antigravity/scratch/hs-one-step-solutions/src"
sections = os.path.join(base, "components", "sections")

# 1. SectorDetailModal.tsx
with open(os.path.join(sections, "SectorDetailModal.tsx"), "w", encoding="utf-8") as f:
    f.write(r"""import React from "react";
import { X, CheckCircle2, ArrowRight, Layers, Building, ShieldCheck } from "lucide-react";
import { Sector } from "../../types";

interface SectorDetailModalProps {
  sector: Sector | null;
  onClose: () => void;
  onOpenRFQ: (sectorId?: string) => void;
}

export const SectorDetailModal: React.FC<SectorDetailModalProps> = ({
  sector,
  onClose,
  onOpenRFQ
}) => {
  if (!sector) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/70 backdrop-blur-md">
      <div 
        className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 sm:h-72 overflow-hidden">
          <img 
            src={sector.representativeVisual} 
            alt={sector.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 bg-white/90 hover:bg-white text-slate-800 rounded-full border border-slate-200 transition-colors z-10 shadow-md"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/90 text-[#008744] font-bold uppercase tracking-wider shadow-sm">
                {sector.badge}
              </span>
              {sector.isFlagship && (
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-slate-950 font-bold uppercase">
                  FLAGSHIP VERTICAL
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">{sector.title}</h2>
            <p className="text-xs sm:text-sm text-slate-200 font-mono mt-1">{sector.subtitle}</p>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-8 max-h-[60vh] overflow-y-auto">
          <div>
            <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2 font-bold">
              SECTOR OVERVIEW & EXECUTION SCOPE
            </h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              {sector.fullDesc}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 border border-slate-200 p-4 rounded-2xl">
            {sector.specifications.map((spec, i) => (
              <div key={i} className="space-y-1">
                <span className="text-[10px] font-mono text-slate-400 uppercase block font-bold">{spec.label}</span>
                <span className="text-xs font-bold text-slate-900 font-mono">{spec.value}</span>
              </div>
            ))}
          </div>

          <div>
            <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3 font-bold">
              INSTITUTIONAL CAPABILITIES & INFRASTRUCTURE
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {sector.capabilities.map((cap, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#008744] flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-800">{cap}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3 font-bold">
              TURNKEY DELIVERABLES & BOQ SCHEDULES
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {sector.keyDeliverables.map((deliv, i) => (
                <div key={i} className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start space-x-2.5">
                  <Layers className="w-4 h-4 text-[#008744] flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-800 font-medium">{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-slate-500 font-mono">
            Direct institutional procurement & turnkey execution available.
          </span>
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs font-mono text-slate-700 hover:bg-slate-100 font-bold"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenRFQ(sector.id);
              }}
              className="w-1/2 sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#008744] to-[#065F38] hover:from-[#065F38] hover:to-[#008744] text-white font-bold text-xs tracking-wider flex items-center justify-center space-x-2 shadow-md"
            >
              <span>REQUEST RFQ FOR THIS SECTOR</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
""")

# 2. SectorsGrid.tsx
with open(os.path.join(sections, "SectorsGrid.tsx"), "w", encoding="utf-8") as f:
    f.write(r"""import React, { useState } from "react";
import { 
  Building2, 
  Stethoscope, 
  HardHat, 
  Zap, 
  Droplet, 
  Grid, 
  ShieldAlert, 
  Armchair, 
  UtensilsCrossed, 
  Layers, 
  Landmark, 
  Cpu, 
  ArrowRight, 
  Check, 
  ChevronRight,
  Maximize2,
  Sparkles
} from "lucide-react";
import { SECTORS } from "../../data/sectorsData";
import { Sector } from "../../types";
import { SectorDetailModal } from "./SectorDetailModal";

interface SectorsGridProps {
  onOpenRFQ: (sectorId?: string) => void;
}

export const SectorsGrid: React.FC<SectorsGridProps> = ({ onOpenRFQ }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [activeModalSector, setActiveModalSector] = useState<Sector | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Building2": return <Building2 className="w-5 h-5 text-[#008744]" />;
      case "Stethoscope": return <Stethoscope className="w-5 h-5 text-[#008744]" />;
      case "HardHat": return <HardHat className="w-5 h-5 text-[#D4AF37]" />;
      case "Zap": return <Zap className="w-5 h-5 text-[#D4AF37]" />;
      case "Droplet": return <Droplet className="w-5 h-5 text-red-600" />;
      case "Grid": return <Grid className="w-5 h-5 text-[#008744]" />;
      case "ShieldAlert": return <ShieldAlert className="w-5 h-5 text-red-600" />;
      case "Armchair": return <Armchair className="w-5 h-5 text-blue-600" />;
      case "UtensilsCrossed": return <UtensilsCrossed className="w-5 h-5 text-[#D4AF37]" />;
      case "Layers": return <Layers className="w-5 h-5 text-[#008744]" />;
      case "Landmark": return <Landmark className="w-5 h-5 text-blue-700" />;
      case "Cpu": return <Cpu className="w-5 h-5 text-[#008744]" />;
      default: return <Building2 className="w-5 h-5 text-[#008744]" />;
    }
  };

  const filteredSectors = selectedFilter === "all" 
    ? SECTORS 
    : SECTORS.filter((s) => s.category === selectedFilter);

  return (
    <section id="sectors" className="py-24 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#008744] text-xs font-mono font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Integrated Solutions Matrix</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              SOLUTIONS BY SECTOR
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              HS One Step Solutions operates across 12 specialized operational sectors. We deliver modular capability or synchronized multi-vertical turnkey facility development.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All 12 Sectors" },
              { id: "healthcare", label: "Healthcare & MedTech" },
              { id: "infrastructure", label: "Infrastructure & Power" },
              { id: "commercial", label: "Commercial & Surfaces" },
              { id: "institutional", label: "Institutional & Gov" }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                  selectedFilter === f.id
                    ? "bg-[#008744] text-white shadow-md"
                    : "bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSectors.map((sector) => (
            <div
              key={sector.id}
              id={`sector-${sector.id}`}
              className={`group bg-white border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative ${
                sector.isFlagship
                  ? "border-[#008744]/40 hover:border-[#008744] ring-1 ring-emerald-100"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={sector.representativeVisual}
                    alt={sector.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <div className="p-2 rounded-xl bg-white/95 backdrop-blur-md shadow-sm">
                      {getIcon(sector.iconName)}
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-800 uppercase font-bold tracking-wider shadow-sm">
                      {sector.badge}
                    </span>
                  </div>

                  {sector.isFlagship && (
                    <div className="absolute top-4 right-4">
                      <span className="text-[10px] font-mono font-extrabold px-3 py-1 rounded-full bg-[#D4AF37] text-slate-950 shadow-md">
                        FLAGSHIP
                      </span>
                    </div>
                  )}

                  <button
                    onClick={() => setActiveModalSector(sector)}
                    className="absolute bottom-3 right-3 p-2 rounded-xl bg-white/90 text-slate-700 hover:text-slate-900 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Expand Sector Details"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight group-hover:text-[#008744] transition-colors">
                      {sector.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-mono mt-1 font-semibold">
                      {sector.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-3">
                    {sector.shortDesc}
                  </p>

                  <div className="pt-3 border-t border-slate-100 space-y-1.5">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold">
                      KEY SCOPE DELIVERABLES:
                    </span>
                    {sector.capabilities.slice(0, 3).map((cap, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#008744] flex-shrink-0" />
                        <span className="truncate">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-slate-100 mt-4">
                <button
                  onClick={() => setActiveModalSector(sector)}
                  className="w-1/2 py-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 text-xs font-mono font-bold text-slate-800 transition-all flex items-center justify-center space-x-1"
                >
                  <span>EXPLORE</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenRFQ(sector.id)}
                  className="w-1/2 py-2.5 rounded-xl bg-gradient-to-r from-[#008744] to-[#065F38] hover:from-[#065F38] hover:to-[#008744] text-white font-bold text-xs font-mono tracking-wider transition-all flex items-center justify-center space-x-1 shadow-md shadow-emerald-700/15"
                >
                  <span>RFQ</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SectorDetailModal
        sector={activeModalSector}
        onClose={() => setActiveModalSector(null)}
        onOpenRFQ={onOpenRFQ}
      />
    </section>
  );
};
""")

# 3. HospitalEcosystem.tsx
with open(os.path.join(sections, "HospitalEcosystem.tsx"), "w", encoding="utf-8") as f:
    f.write(r"""import React, { useState } from "react";
import { 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  Crosshair, 
  Activity, 
  ShieldAlert, 
  UtensilsCrossed, 
  Wind, 
  Compass, 
  Building, 
  LayoutTemplate, 
  HeartPulse, 
  Armchair, 
  Cpu, 
  Scissors, 
  Microscope, 
  Droplet,
  Sparkles
} from "lucide-react";
import { HOSPITAL_ECOSYSTEM_STAGES } from "../../data/ecosystemData";

interface HospitalEcosystemProps {
  onOpenRFQ: (sectorId?: string) => void;
}

export const HospitalEcosystem: React.FC<HospitalEcosystemProps> = ({ onOpenRFQ }) => {
  const [selectedStageId, setSelectedStageId] = useState<number>(1);
  const activeStage = HOSPITAL_ECOSYSTEM_STAGES.find((s) => s.id === selectedStageId) || HOSPITAL_ECOSYSTEM_STAGES[0];

  const getStageIcon = (iconName: string) => {
    switch (iconName) {
      case "Compass": return <Compass className="w-4 h-4 text-[#008744]" />;
      case "Building": return <Building className="w-4 h-4 text-[#D4AF37]" />;
      case "Wind": return <Wind className="w-4 h-4 text-[#008744]" />;
      case "LayoutTemplate": return <LayoutTemplate className="w-4 h-4 text-blue-600" />;
      case "Activity": return <Activity className="w-4 h-4 text-[#008744]" />;
      case "Crosshair": return <Crosshair className="w-4 h-4 text-emerald-600" />;
      case "HeartPulse": return <HeartPulse className="w-4 h-4 text-red-600" />;
      case "Armchair": return <Armchair className="w-4 h-4 text-blue-600" />;
      case "Cpu": return <Cpu className="w-4 h-4 text-[#008744]" />;
      case "Scissors": return <Scissors className="w-4 h-4 text-[#D4AF37]" />;
      case "Microscope": return <Microscope className="w-4 h-4 text-purple-600" />;
      case "Droplet": return <Droplet className="w-4 h-4 text-red-600" />;
      case "UtensilsCrossed": return <UtensilsCrossed className="w-4 h-4 text-[#D4AF37]" />;
      case "ShieldAlert": return <ShieldAlert className="w-4 h-4 text-red-600" />;
      case "CheckCircle2": return <CheckCircle2 className="w-4 h-4 text-[#008744]" />;
      default: return <Building2 className="w-4 h-4 text-[#008744]" />;
    }
  };

  return (
    <section id="hospital-flagship" className="py-24 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-200 text-[#9A741E] text-xs font-mono font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Flagship Capability Matrix</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            WE DON'T JUST SUPPLY. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008744] via-[#065F38] to-[#D4AF37]">
              WE HELP BUILD THE PROJECT.
            </span>
          </h2>

          <p className="text-lg sm:text-xl font-bold text-[#008744]">
            FROM EMPTY SITE TO OPERATIONAL HOSPITAL.
          </p>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Healthcare facilities are among the most complex engineering projects in the world. HS One Step Solutions orchestrates all 15 critical stages—eliminating cross-contractor bottlenecks.
          </p>
        </div>

        <div className="mb-10">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
            <span className="text-xs font-mono text-[#008744] font-bold uppercase tracking-wider">
              15-STAGE TURNKEY HOSPITAL LIFECYCLE (CLICK TO INSPECT)
            </span>
            <span className="text-xs font-mono text-slate-500 hidden sm:inline">
              STAGE {activeStage.stageNum} OF 15 SELECTED
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
            {HOSPITAL_ECOSYSTEM_STAGES.map((stg) => {
              const isSelected = stg.id === selectedStageId;
              return (
                <button
                  key={stg.id}
                  onClick={() => setSelectedStageId(stg.id)}
                  className={`p-3 rounded-2xl text-left border transition-all relative overflow-hidden flex flex-col justify-between min-h-[92px] ${
                    isSelected
                      ? "bg-white border-[#008744] shadow-md ring-2 ring-emerald-200"
                      : "bg-white border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-mono font-bold ${isSelected ? "text-[#008744]" : "text-slate-400"}`}>
                      {stg.stageNum}
                    </span>
                    <div className={`p-1 rounded-md ${isSelected ? "bg-emerald-50 text-[#008744]" : "bg-slate-100 text-slate-500"}`}>
                      {getStageIcon(stg.iconName)}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 leading-tight line-clamp-1">
                      {stg.shortTitle}
                    </div>
                    <span className="text-[9px] font-mono text-slate-500 uppercase font-semibold">
                      {stg.category}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center space-x-3">
                <span className="text-4xl sm:text-5xl font-extrabold font-mono text-[#008744]">
                  {activeStage.stageNum}
                </span>
                <div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-[#008744] border border-emerald-200 uppercase font-bold">
                    {activeStage.category} engineering
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                    {activeStage.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {activeStage.description}
              </p>

              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-1 text-xs">
                <span className="text-[10px] font-mono text-[#9A741E] uppercase tracking-widest block font-bold">
                  TECHNICAL STANDARDS & COMPLIANCE:
                </span>
                <span className="text-slate-900 font-mono font-bold">{activeStage.specs}</span>
              </div>

              <button
                onClick={() => onOpenRFQ("hospital-development")}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#008744] to-[#065F38] text-white font-bold rounded-xl text-xs tracking-wider shadow-md shadow-emerald-700/20"
              >
                <span>REQUEST HOSPITAL BOQ CONSULTATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div>
                <h4 className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-3">
                  Scope Deliverables & Site Integration:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeStage.deliverables.map((deliv, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#008744] flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-800">{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-3">
                  Sample Equipment & Infrastructure Packages:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeStage.equipmentList.map((eq, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-[#008744] text-xs font-mono font-bold"
                    >
                      {eq}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
""")

# 4. ProjectDashboardConcept.tsx
with open(os.path.join(sections, "ProjectDashboardConcept.tsx"), "w", encoding="utf-8") as f:
    f.write(r"""import React, { useState } from "react";
import { Activity, CheckCircle2, Building2, Truck, ShieldCheck, Sparkles } from "lucide-react";

export const ProjectDashboardConcept: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"milestones" | "procurement" | "compliance">("milestones");

  const stageStatuses = [
    { name: "Planning & Architecture", status: "COMPLETE", progress: 100, color: "bg-[#008744]" },
    { name: "Civil & Structural Works", status: "IN PROGRESS", progress: 72, color: "bg-[#008744]" },
    { name: "MEP, Cleanroom & HVAC", status: "IN PROGRESS", progress: 68, color: "bg-[#008744]" },
    { name: "Equipment Procurement", status: "STAGED", progress: 58, color: "bg-blue-600" },
    { name: "Healthcare & B2B Furniture", status: "IN PROGRESS", progress: 80, color: "bg-[#008744]" },
    { name: "Medical Gas (MGPS) & OT", status: "IN PROGRESS", progress: 65, color: "bg-[#008744]" },
    { name: "Commercial Dietary Kitchen", status: "NEAR COMPLETE", progress: 90, color: "bg-[#008744]" },
    { name: "Final Testing & Commissioning", status: "QUEUED", progress: 35, color: "bg-[#D4AF37]" }
  ];

  return (
    <section id="dashboard-concept" className="py-24 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#008744] text-xs font-mono font-bold tracking-wider uppercase">
            <Activity className="w-3.5 h-3.5 text-[#008744]" />
            <span>Interactive Project Control — Concept</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            CENTRALIZED PROJECT TELEMETRY
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            A conceptual demonstration of how HS One Step Solutions orchestrates complex multi-sector projects. Clients monitor every department, shipment, and commissioning milestone in real time.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-slate-900 text-white px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-3.5 h-3.5 rounded-full bg-[#008744] animate-pulse" />
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-bold text-white font-mono">PROJECT: 200-BED MULTI-SPECIALTY HOSPITAL</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#D4AF37] text-slate-950 font-bold">
                    SIMULATION DEMO
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-mono">ID: HS-PRJ-2026-X88 • Turnkey Execution Model</span>
              </div>
            </div>

            <div className="flex items-center space-x-2 bg-slate-800 p-1 rounded-xl text-xs font-mono">
              <button
                onClick={() => setActiveTab("milestones")}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === "milestones" ? "bg-[#008744] text-white font-bold" : "text-slate-300 hover:text-white"
                }`}
              >
                Multi-Sector Progress
              </button>
              <button
                onClick={() => setActiveTab("procurement")}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === "procurement" ? "bg-[#008744] text-white font-bold" : "text-slate-300 hover:text-white"
                }`}
              >
                Staged Sourcing
              </button>
              <button
                onClick={() => setActiveTab("compliance")}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === "compliance" ? "bg-[#008744] text-white font-bold" : "text-slate-300 hover:text-white"
                }`}
              >
                QA Sign-Offs
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-slate-50">
            {activeTab === "milestones" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {stageStatuses.map((stg, i) => (
                    <div key={i} className="bg-white border border-slate-200 p-4 rounded-2xl space-y-3 shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-800">{stg.name}</span>
                        <span className="text-xs font-mono font-extrabold text-[#008744]">{stg.progress}%</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div className={`h-full ${stg.color}`} style={{ width: `${stg.progress}%` }} />
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                        <span>STATUS:</span>
                        <span className="text-slate-900 font-bold">{stg.status}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-600 shadow-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#008744]" />
                    <span>Cross-department dependencies synchronized: Civil Handover on schedule.</span>
                  </div>
                  <span className="text-[#008744] font-bold">SINGLE MASTER PMO SUPERVISION</span>
                </div>
              </div>
            )}

            {activeTab === "procurement" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <div className="text-[10px] font-mono text-[#008744] uppercase font-bold">TIER-1 MEDICAL SHIPMENTS</div>
                    <div className="text-xl font-bold text-slate-900 mt-1">42 / 48 Packages Dispatched</div>
                    <p className="text-xs text-slate-500 mt-1">Laminar Flow Plenums, OT Tables, ICU Multi-Para Monitors</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <div className="text-[10px] font-mono text-[#9A741E] uppercase font-bold">HEAVY STRUCTURAL & MEP</div>
                    <div className="text-xl font-bold text-slate-900 mt-1">100% Staged on Site</div>
                    <p className="text-xs text-slate-500 mt-1">HT Substation Panels, AHUs, Medical Copper Tubing</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <div className="text-[10px] font-mono text-[#008744] uppercase font-bold">FURNITURE & SURFACES</div>
                    <div className="text-xl font-bold text-slate-900 mt-1">Staged for Phase 3</div>
                    <p className="text-xs text-slate-500 mt-1">Ward Beds, Anti-Microbial Tiles, Modular Desking</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "compliance" && (
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between shadow-sm">
                    <span className="text-slate-800 font-medium">Medical Gas Pipeline (MGPS) Pressure Decay Test</span>
                    <span className="font-mono text-[#008744] font-bold">PASSED (24h Hold)</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between shadow-sm">
                    <span className="text-slate-800 font-medium">Class 100 Modular OT Air Particle Count</span>
                    <span className="font-mono text-[#008744] font-bold">CERTIFIED (ISO 5)</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between shadow-sm">
                    <span className="text-slate-800 font-medium">FM-200 Gas Suppression System Test</span>
                    <span className="font-mono text-[#008744] font-bold">VERIFIED</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between shadow-sm">
                    <span className="text-slate-800 font-medium">Electrical Substation & Auto-DG Sync Load Test</span>
                    <span className="font-mono text-[#008744] font-bold">COMPLIANT</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
""")

# 5. ProcurementCatalog.tsx
with open(os.path.join(sections, "ProcurementCatalog.tsx"), "w", encoding="utf-8") as f:
    f.write(r"""import React, { useState } from "react";
import { 
  Search, 
  ShoppingCart, 
  FileText, 
  ArrowRight, 
  Plus, 
  Check, 
  Package,
  Sparkles
} from "lucide-react";
import { PROCUREMENT_CATEGORIES, PROCUREMENT_PRODUCTS } from "../../data/procurementData";
import { ProcurementProduct } from "../../types";

interface ProcurementCatalogProps {
  onOpenRFQ: (sectorId?: string, productName?: string) => void;
}

export const ProcurementCatalog: React.FC<ProcurementCatalogProps> = ({ onOpenRFQ }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Categories");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const filteredProducts = PROCUREMENT_PRODUCTS.filter((prod) => {
    const matchesCategory = selectedCategory === "All Categories" || prod.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.subCategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.specs.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItemSelection = (prodName: string) => {
    if (selectedItems.includes(prodName)) {
      setSelectedItems(selectedItems.filter(item => item !== prodName));
    } else {
      setSelectedItems([...selectedItems, prodName]);
    }
  };

  return (
    <section id="procurement" className="py-24 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#008744] text-xs font-mono font-bold tracking-wider uppercase">
            <Package className="w-3.5 h-3.5" />
            <span>Institutional Procurement Platform</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            ONE REQUIREMENT. MULTIPLE CATEGORIES. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008744] to-[#D4AF37]">
              ONE COORDINATED PARTNER.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Direct institutional sourcing across medical technology, civil construction materials, B2B furniture, life safety, and commercial kitchen infrastructure. Built for enterprise BOQs and government tenders.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 mb-8 space-y-4 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search equipment, specs or standard..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-[#008744] font-sans shadow-inner"
              />
            </div>

            <div className="flex items-center space-x-3 w-full md:w-auto justify-between md:justify-end">
              <span className="text-xs font-mono text-slate-500">
                {filteredProducts.length} Product Families Available
              </span>
              {selectedItems.length > 0 && (
                <button
                  onClick={() => onOpenRFQ(undefined, selectedItems.join(", "))}
                  className="px-4 py-2 bg-gradient-to-r from-[#008744] to-[#065F38] text-white font-bold rounded-xl text-xs font-mono tracking-wider flex items-center space-x-2 shadow-md shadow-emerald-700/20"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>SUBMIT BOQ ({selectedItems.length})</span>
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-2 overflow-x-auto pb-1 pt-2 border-t border-slate-200">
            {PROCUREMENT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-[#008744] text-white font-bold shadow-sm"
                    : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const isSelected = selectedItems.includes(product.name);
            return (
              <div
                key={product.id}
                className={`bg-white border rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 ${
                  isSelected
                    ? "border-[#008744] shadow-md ring-2 ring-emerald-100"
                    : "border-slate-200 hover:border-slate-300 shadow-sm"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#008744] border border-emerald-200 font-bold uppercase">
                      {product.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 font-medium">
                      {product.subCategory}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-600 font-normal mt-1.5 line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl space-y-1 text-xs">
                    <div className="text-[10px] font-mono text-slate-500 uppercase font-bold">SPECIFICATION HIGHLIGHTS:</div>
                    <p className="text-slate-800 text-[11px] font-mono leading-relaxed">
                      {product.specs}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {product.standards.map((std, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-700 font-semibold">
                        ✓ {std}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => toggleItemSelection(product.name)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center space-x-1.5 ${
                      isSelected
                        ? "bg-emerald-100 text-[#008744] border border-emerald-300"
                        : "bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900"
                    }`}
                  >
                    {isSelected ? <Check className="w-3.5 h-3.5 text-[#008744]" /> : <Plus className="w-3.5 h-3.5" />}
                    <span>{isSelected ? "IN BOQ LIST" : "ADD TO BOQ"}</span>
                  </button>

                  <button
                    onClick={() => onOpenRFQ(undefined, product.name)}
                    className="px-4 py-2 bg-gradient-to-r from-[#008744] to-[#065F38] hover:from-[#065F38] hover:to-[#008744] text-white font-bold rounded-xl text-xs font-mono tracking-wider transition-all flex items-center space-x-1 shadow-sm"
                  >
                    <span>RFQ</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-slate-900 text-white rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold">HAVE A CUSTOM BOQ OR TENDER SPECIFICATION?</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl font-light">
              Our institutional procurement division coordinates direct volume pricing, manufacturer warranties, and staged site delivery across all 12 operational sectors.
            </p>
          </div>
          <button
            onClick={() => onOpenRFQ()}
            className="px-8 py-3.5 bg-gradient-to-r from-[#008744] to-[#065F38] hover:from-[#065F38] hover:to-[#008744] text-white font-bold rounded-xl text-xs font-mono tracking-wider transition-all flex-shrink-0 shadow-lg shadow-emerald-700/20 flex items-center space-x-2"
          >
            <FileText className="w-4 h-4" />
            <span>SUBMIT CUSTOM BOQ</span>
          </button>
        </div>
      </div>
    </section>
  );
};
""")

print("Generated SectorDetailModal, SectorsGrid, HospitalEcosystem, Dashboard & ProcurementCatalog successfully!")
