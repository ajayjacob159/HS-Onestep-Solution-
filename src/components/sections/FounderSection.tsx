import React from "react";
import { ShieldCheck, Award, HeartHandshake, Building2, CheckCircle2, ArrowRight, Quote } from "lucide-react";
import { triggerHaptic } from "../../utils/haptics";

interface FounderSectionProps {
  onOpenRFQ?: () => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ onOpenRFQ }) => {
  return (
    <section id="founder" className="py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      
      {/* Background Subtle CAD Grid */}
      <div className="absolute inset-0 bg-blueprint-light opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pill */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-[#008744] text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
            <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Executive Leadership & Vision</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            LEADERSHIP BEHIND THE MISSION
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Over a decade of cross-sectoral execution transforming India’s healthcare and institutional infrastructure.
          </p>
        </div>

        {/* Main 2-Column Executive Card */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left: Founder Portrait & Verified Credentials Plaque */}
            <div className="lg:col-span-5 flex flex-col items-center">
              
              <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                <img
                  src="/founder.jpg"
                  alt="Mr. Pratyaksh Pandey - Founder & CEO, HS ONE STEP SOLUTIONS"
                  className="w-full h-auto object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Subtle gradient scrim at bottom of portrait */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Verified Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/50 text-[10px] font-mono font-extrabold uppercase shadow-lg flex items-center space-x-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>FOUNDER & CEO</span>
                  </span>
                </div>

                {/* Name Tag on Photo */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold tracking-tight">Mr. Pratyaksh Pandey</h3>
                  <p className="text-xs text-[#D4AF37] font-mono font-semibold">Founder & CEO, HS ONE STEP SOLUTIONS</p>
                </div>
              </div>

              {/* 10+ Years Experience Banner below image */}
              <div className="w-full max-w-sm mt-4 bg-white border border-slate-200 p-3.5 rounded-2xl shadow-sm flex items-center justify-between text-xs font-mono">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#008744] animate-pulse" />
                  <span className="font-bold text-slate-900">10+ YEARS EXPERIENCE</span>
                </div>
                <span className="text-slate-500 font-semibold">PRIVATE • PUBLIC • GOV</span>
              </div>

            </div>

            {/* Right: Executive Narrative & Impact Portfolio */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <span className="text-xs font-mono text-[#008744] font-extrabold uppercase tracking-widest block mb-1">
                  STRATEGIC LEADERSHIP PROFILE
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Mr. Pratyaksh Pandey
                </h3>
                <p className="text-sm font-mono text-[#D4AF37] font-bold mt-1">
                  Founder & CEO, HS ONE STEP SOLUTIONS
                </p>
              </div>

              {/* Core Narrative Paragraphs */}
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong>Mr. Pratyaksh Pandey</strong> is the Founder and CEO of <strong>HS ONE STEP SOLUTIONS</strong>, a dynamic organization with over <strong>10 years of diversified experience</strong> across the private, public, and government sectors.
                </p>

                <p>
                  With a deep-rooted commitment to transforming India’s healthcare landscape, he has led the company to successfully collaborate with leading corporates, government bodies, NGOs, and foundations. Under his leadership, HS ONE STEP SOLUTIONS has made significant contributions to the healthcare industry through high-impact <strong>CSR initiatives</strong>, <strong>National Health Mission [NHM]</strong> projects, and large-scale NGO and Foundation programs.
                </p>

                <p className="text-slate-600 text-sm">
                  His cross-sectoral expertise and strategic vision have enabled the organization to bridge the gap between policy and implementation, delivering sustainable, on-ground healthcare solutions that create real social impact. Driven by innovation, integrity, and a one-step solution approach, Mr. Pandey continues to steer the company towards building a healthier and more equitable future.
                </p>
              </div>

              {/* 4 Strategic Impact Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 bg-white border border-slate-200 rounded-2xl flex items-start space-x-3 shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-[#008744] flex items-center justify-center font-bold flex-shrink-0 border border-emerald-200">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">National Health Mission [NHM]</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">Critical government healthcare implementation.</p>
                  </div>
                </div>

                <div className="p-3.5 bg-white border border-slate-200 rounded-2xl flex items-start space-x-3 shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 text-[#D4AF37] flex items-center justify-center font-bold flex-shrink-0 border border-amber-200">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Corporate CSR Partnerships</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">High-impact sustainable healthcare initiatives.</p>
                  </div>
                </div>

                <div className="p-3.5 bg-white border border-slate-200 rounded-2xl flex items-start space-x-3 shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center font-bold flex-shrink-0 border border-slate-200">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">NGO & Foundation Programs</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">Large-scale on-ground social impact delivery.</p>
                  </div>
                </div>

                <div className="p-3.5 bg-white border border-slate-200 rounded-2xl flex items-start space-x-3 shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-[#008744] flex items-center justify-center font-bold flex-shrink-0 border border-emerald-200">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Policy-to-Implementation</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">Seamless single-point turnkey execution.</p>
                  </div>
                </div>
              </div>

              {/* Quote Box & Consultation CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-200">
                <div className="flex items-center space-x-2 text-xs font-mono text-slate-500">
                  <Quote className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                  <span className="italic">“YOUR PLANS, OUR GOALS”</span>
                </div>

                {onOpenRFQ && (
                  <button
                    onClick={() => {
                      triggerHaptic(20);
                      onOpenRFQ();
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-[#008744] to-[#065F38] hover:from-[#065F38] hover:to-[#008744] text-white font-bold rounded-xl text-xs font-mono tracking-wider shadow-md shadow-emerald-700/20 transition-all flex items-center space-x-2"
                  >
                    <span>INITIATE EXECUTIVE CONSULTATION</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
