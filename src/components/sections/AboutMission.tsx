import React from "react";
import { ShieldCheck, Target, Award, ArrowRight, Building2, CheckCircle2 } from "lucide-react";

interface AboutMissionProps {
  onOpenRFQ: () => void;
}

export const AboutMission: React.FC<AboutMissionProps> = ({ onOpenRFQ }) => {
  return (
    <section id="about" className="py-24 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-[#008744] text-xs font-mono font-bold tracking-wider uppercase">
              <span>Established 2024 • Corporate Profile</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              BUILT AROUND ONE SIMPLE IDEA.
            </h2>

            <p className="text-base text-slate-700 leading-relaxed">
              Founded in <strong>2024</strong>, <strong>HS One Step Solutions</strong> was established to solve one of the biggest challenges in capital projects: the friction, delays, and cost overruns caused by coordinating dozens of disconnected vendors.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Having already served numerous institutional clients across Government, Public Healthcare, and Private Enterprise, we bring together civil construction, medical engineering, life safety, commercial kitchens, architectural surfaces, and critical power under one master execution partner.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-1 shadow-sm">
                <span className="text-xs font-mono text-[#008744] font-bold block">FOUNDED IN 2024</span>
                <span className="text-xs text-slate-800 font-semibold">Modern, Agile Execution</span>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-1 shadow-sm">
                <span className="text-xs font-mono text-[#D4AF37] font-bold block">DIVERSE CLIENT BASE</span>
                <span className="text-xs text-slate-800 font-semibold">Gov, Public & Private</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenRFQ}
                className="px-7 py-3.5 bg-gradient-to-r from-[#008744] to-[#065F38] text-white font-bold rounded-xl text-xs tracking-wider shadow-md shadow-emerald-700/20 flex items-center space-x-2"
              >
                <span>INITIATE PROJECT CONSULTATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-8 shadow-xl space-y-6 text-center">
            <div className="relative h-64 rounded-2xl overflow-hidden mb-4 border border-slate-100 shadow-inner">
              <img
                src="/corporate-building.jpg"
                alt="HS ONE STEP SOLUTIONS Headquarters"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-left text-white">
                <span className="text-[10px] font-mono text-[#D4AF37] uppercase font-bold block">ESTABLISHED 2024</span>
                <span className="text-sm font-bold">HS ONE STEP SOLUTIONS HEADQUARTERS</span>
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-bold text-slate-900">“YOUR PLANS, OUR GOALS”</h3>
              <p className="text-xs text-slate-500 font-mono">
                ONE PARTNER. MULTIPLE SOLUTIONS. COMPLETE PROJECT EXECUTION.
              </p>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto">
              Our commitment is absolute single-point accountability: ensuring high engineering standards, synchronized timelines, and complete turnkey handover.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
