import React from "react";
import { ShieldCheck, Target, Award, ArrowRight, Building2, CheckCircle2, Layers, Clock, HeartHandshake, Landmark } from "lucide-react";
import { triggerHaptic } from "../../utils/haptics";

interface AboutMissionProps {
  onOpenRFQ: () => void;
}

export const AboutMission: React.FC<AboutMissionProps> = ({ onOpenRFQ }) => {
  return (
    <section id="about" className="py-24 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      
      {/* Background CAD grid */}
      <div className="absolute inset-0 bg-blueprint-light opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-[#008744] text-xs font-mono font-bold tracking-wider uppercase shadow-sm">
            <Building2 className="w-3.5 h-3.5" />
            <span>Official Corporate Profile</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            ABOUT HS ONE STEP SOLUTIONS
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-mono">
            ONE PARTNER. MULTIPLE SOLUTIONS. COMPLETE PROJECT EXECUTION.
          </p>
        </div>

        {/* 2-Column Corporate Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Official Corporate Statement */}
          <div className="lg:col-span-7 space-y-6 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl">
            
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#008744] font-extrabold uppercase tracking-widest block">
                ORGANIZATIONAL OVERVIEW
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Reliable, Innovative & End-to-End Solutions
              </h3>
            </div>

            {/* Official Company Statement Paragraphs */}
            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                <strong>HS ONE STEP SOLUTIONS</strong> is a dynamic and diversified organization committed to delivering reliable, innovative, and end-to-end solutions across the <strong>Government, Public, and Private sectors</strong>. With over <strong>10 years of combined experience and expertise</strong>, we bring together a strong network of professional vendors, service providers, and industry experts under one platform to execute projects efficiently and within the committed timeline.
              </p>

              <p>
                Our experience includes successfully undertaking and completing Government projects, private-sector assignments, public-sector projects, and various <strong>NHM activities</strong> with confidence and dedication.
              </p>

              <p className="text-slate-600 text-sm sm:text-base">
                Our key strength lies in seamless coordination, timely execution, quality service, and a strong commitment to client satisfaction. Through consistent performance and professional excellence, HS ONE STEP SOLUTIONS continues to earn the trust and appreciation of its clients while building long-term and valuable business relationships.
              </p>
            </div>

            {/* 4 Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-100">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl flex items-center space-x-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-[#008744] flex items-center justify-center font-bold flex-shrink-0 border border-emerald-200">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Unified Platform</div>
                  <div className="text-[10px] text-slate-500 font-mono">Vendors & experts aligned</div>
                </div>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl flex items-center space-x-3">
                <div className="w-8 h-8 rounded-xl bg-amber-50 text-[#D4AF37] flex items-center justify-center font-bold flex-shrink-0 border border-amber-200">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Committed Timelines</div>
                  <div className="text-[10px] text-slate-500 font-mono">Prompt milestones delivery</div>
                </div>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl flex items-center space-x-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-[#008744] flex items-center justify-center font-bold flex-shrink-0 border border-emerald-200">
                  <Landmark className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Gov & NHM Scope</div>
                  <div className="text-[10px] text-slate-500 font-mono">Public healthcare excellence</div>
                </div>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl flex items-center space-x-3">
                <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center font-bold flex-shrink-0 border border-slate-200">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Client Satisfaction</div>
                  <div className="text-[10px] text-slate-500 font-mono">Long-term trusted relations</div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  triggerHaptic(20);
                  onOpenRFQ();
                }}
                className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-[#008744] to-[#065F38] hover:from-[#065F38] hover:to-[#008744] text-white font-bold rounded-xl text-xs font-mono tracking-wider shadow-md shadow-emerald-700/20 transition-all flex items-center justify-center space-x-2"
              >
                <span>INITIATE PROJECT CONSULTATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Headquarters Showcase & Corporate Credentials */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 text-center">
            
            <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden mb-4 border border-slate-200 shadow-inner group">
              <img
                src="/corporate-building.jpg"
                alt="HS ONE STEP SOLUTIONS Corporate Headquarters"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-left text-white">
                <span className="text-[10px] font-mono text-[#D4AF37] uppercase font-bold block">CORPORATE HEADQUARTERS</span>
                <span className="text-sm font-bold">HS ONE STEP SOLUTIONS</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <h3 className="text-xl font-bold text-slate-900">“YOUR PLANS, OUR GOALS”</h3>
              <p className="text-xs text-[#008744] font-mono font-bold tracking-wider uppercase">
                GOVERNMENT • PUBLIC • PRIVATE SECTOR
              </p>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto">
              Our commitment is absolute single-point accountability: ensuring high engineering standards, synchronized timelines, and complete turnkey handover across India.
            </p>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-around text-xs font-mono text-slate-600">
              <div>
                <span className="text-base font-extrabold text-slate-900 block">10+ YRS</span>
                <span className="text-[10px] text-slate-400">COMBINED EXPERTISE</span>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div>
                <span className="text-base font-extrabold text-[#008744] block">100%</span>
                <span className="text-[10px] text-slate-400">TIMELINE COMMITMENT</span>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div>
                <span className="text-base font-extrabold text-[#D4AF37] block">SINGLE POC</span>
                <span className="text-[10px] text-slate-400">TURNKEY EXECUTION</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
