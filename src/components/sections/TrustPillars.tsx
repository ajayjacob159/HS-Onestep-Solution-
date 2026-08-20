import React from "react";
import { ShieldCheck, Layers, Award, Clock, Users, Building } from "lucide-react";
import { METRICS_DATA } from "../../data/metricsData";

export const TrustPillars: React.FC = () => {
  const pillars = [
    { icon: <ShieldCheck className="w-6 h-6 text-[#008744]" />, title: "Single Accountability", desc: "No multi-contractor blame games. ONE contract and ONE dedicated team accountable for complete site delivery." },
    { icon: <Layers className="w-6 h-6 text-[#008744]" />, title: "12-Sector Multi-Disciplinary Scope", desc: "Civil, medical equipment, commercial kitchens, furniture, energy, and life safety synchronized under one PMO." },
    { icon: <Award className="w-6 h-6 text-[#D4AF37]" />, title: "Tier-1 Quality & Global Standards", desc: "Rigorous ISO, NABH, HTM-0301, and CPWD compliance built into every engineering milestone." },
    { icon: <Clock className="w-6 h-6 text-[#008744]" />, title: "Synchronized Staged Delivery", desc: "Equipment arrives precisely when civil and MEP readiness is certified—eliminating premature storage damage." },
    { icon: <Users className="w-6 h-6 text-[#008744]" />, title: "Government & Enterprise Rigor", desc: "Proven capability to execute large-scale institutional tenders, public health facilities, and corporate campuses." },
    { icon: <Building className="w-6 h-6 text-[#D4AF37]" />, title: "Turnkey Sign-Off Guarantee", desc: "From raw site excavation to complete testing, certification, user training, and operational handover." }
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#008744] text-xs font-mono font-bold tracking-wider uppercase">
            <span>Corporate Governance</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            WHY CLIENTS CHOOSE HS ONE STEP
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pil, i) => (
            <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-3 shadow-sm hover:shadow-md transition-all">
              <div className="p-3 bg-white border border-slate-200 rounded-2xl w-fit shadow-sm">
                {pil.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{pil.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">{pil.desc}</p>
            </div>
          ))}
        </div>

        {/* Verified CMS Metrics Placeholder Bar */}
        <div className="mt-16 bg-slate-900 text-white rounded-3xl p-8 grid grid-cols-2 md:grid-cols-5 gap-6 text-center shadow-xl">
          {METRICS_DATA.map((m) => (
            <div key={m.id} className="space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#D4AF37] block">
                {m.placeholder}
              </span>
              <span className="text-xs font-bold text-slate-300 block">{m.label}</span>
              <span className="text-[10px] text-slate-500 font-mono block">{m.subtext}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
