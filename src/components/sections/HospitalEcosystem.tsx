import React, { useState } from "react";
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
