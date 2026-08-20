import React, { useState } from "react";
import { CheckCircle2, ArrowRight, Sparkles, Building2 } from "lucide-react";
import { HOSPITAL_ECOSYSTEM_STAGES } from "../../data/ecosystemData";

interface HospitalEcosystemProps {
  onOpenRFQ: (sectorId?: string) => void;
}

export const HospitalEcosystem: React.FC<HospitalEcosystemProps> = ({ onOpenRFQ }) => {
  const [selectedStageId, setSelectedStageId] = useState<number>(1);
  const activeStage = HOSPITAL_ECOSYSTEM_STAGES.find((s) => s.id === selectedStageId) || HOSPITAL_ECOSYSTEM_STAGES[0];

  return (
    <section id="hospital-flagship" className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block">
            Flagship Turnkey Healthcare Execution
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            FROM EMPTY SITE TO OPERATIONAL HOSPITAL
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            15 synchronized engineering stages executed under one master contract.
          </p>
        </div>

        {/* 15-Stage Horizontal Visual Selector */}
        <div className="flex space-x-2.5 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {HOSPITAL_ECOSYSTEM_STAGES.map((stg) => {
            const isSelected = stg.id === selectedStageId;
            return (
              <button
                key={stg.id}
                onClick={() => setSelectedStageId(stg.id)}
                className={`flex-shrink-0 px-4 py-3 rounded-2xl text-left border transition-all ${
                  isSelected
                    ? "bg-white border-[#008744] shadow-md ring-2 ring-emerald-200"
                    : "bg-white border-slate-200 hover:border-slate-300 text-slate-700"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className={`text-xs font-mono font-bold ${isSelected ? "text-[#008744]" : "text-slate-400"}`}>
                    {stg.stageNum}
                  </span>
                  <span className="text-xs font-bold text-slate-900 whitespace-nowrap">{stg.shortTitle}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Pictorial Stage Showcase Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Key Deliverables & Badges */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center space-x-3">
                <span className="text-4xl font-mono font-extrabold text-[#008744]">{activeStage.stageNum}</span>
                <div>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#008744] font-bold uppercase border border-emerald-200">
                    {activeStage.category}
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 mt-1">{activeStage.title}</h3>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl space-y-2">
                <span className="text-[10px] font-mono text-slate-500 uppercase font-bold block">STANDARDS & COMPLIANCE:</span>
                <span className="text-xs font-mono font-bold text-slate-900 block">{activeStage.specs}</span>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-500 uppercase font-bold block">KEY DELIVERABLES:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeStage.deliverables.map((deliv, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-slate-700 bg-slate-50 p-2 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#008744] flex-shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenRFQ("hospital-development")}
                  className="px-6 py-3 bg-gradient-to-r from-[#008744] to-[#065F38] text-white font-bold rounded-xl text-xs font-mono tracking-wider shadow-md flex items-center space-x-2"
                >
                  <span>REQUEST BOQ FOR THIS STAGE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Pictorial Equipment Tags */}
            <div className="lg:col-span-6 space-y-4">
              <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-4 shadow-lg">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-mono text-[#D4AF37] font-bold uppercase">DEPLOYED EQUIPMENT PACKAGES</span>
                  <span className="text-[10px] font-mono text-slate-400">TURNKEY HOOKUP</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeStage.equipmentList.map((eq, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-emerald-400 text-xs font-mono font-medium"
                    >
                      ✓ {eq}
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
