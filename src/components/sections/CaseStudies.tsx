import React from "react";
import { Building2, MapPin } from "lucide-react";
import { CASE_STUDIES } from "../../data/caseStudiesData";

export const CaseStudies: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-[#008744] text-xs font-mono font-bold tracking-wider uppercase">
            <span>Project Track Record</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            PROJECT PROFILES & CAPABILITY CASE STUDIES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((cs) => (
            <div key={cs.id} className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-sm flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-amber-100 text-[#9A741E] font-bold">
                    {cs.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{cs.clientType}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-tight">{cs.title}</h3>
                <div className="flex items-center space-x-1.5 text-xs text-slate-500 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-[#008744]" />
                  <span>{cs.location}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{cs.projectScope}</p>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs font-mono text-slate-500 flex items-center justify-between">
                <span>Timeline: {cs.projectTimeline}</span>
                <span className="text-[#008744] font-bold">TURNKEY SCOPE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
