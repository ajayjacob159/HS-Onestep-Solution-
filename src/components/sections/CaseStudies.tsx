import React from "react";
import { Building2, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { CASE_STUDIES } from "../../data/caseStudiesData";

export const CaseStudies: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-[#008744] text-xs font-mono font-bold tracking-wider uppercase">
            <span>Project Track Record & Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            PROJECT PROFILES & CAPABILITY CASE STUDIES
          </h2>
          <p className="text-sm text-slate-600">
            Realized turnkey execution across Healthcare, Government, Civic, and Commercial infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CASE_STUDIES.map((cs) => (
            <div 
              key={cs.id} 
              className="bg-white border border-slate-200 hover:border-[#008744] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Image */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={cs.image || "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"}
                    alt={cs.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <span className="absolute top-3 left-3 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/95 text-[#008744] font-bold shadow-sm">
                    {cs.badge}
                  </span>

                  <div className="absolute bottom-2.5 left-3 right-3 text-white flex items-center justify-between text-[11px] font-mono">
                    <span className="text-[#D4AF37] font-bold">{cs.projectTimeline}</span>
                    <span className="text-slate-300">{cs.clientType}</span>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {cs.title}
                  </h3>

                  <div className="flex items-center space-x-1.5 text-xs text-slate-500 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-[#008744]" />
                    <span>{cs.location}</span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {cs.projectScope}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 mt-2 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                <span className="text-emerald-700 font-bold flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#008744]" />
                  <span>{cs.status}</span>
                </span>
                <span className="text-slate-400">TURNKEY SCOPE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
