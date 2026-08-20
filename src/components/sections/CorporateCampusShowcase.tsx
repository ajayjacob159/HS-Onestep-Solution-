import React from "react";
import { Building2, ShieldCheck, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

interface CorporateCampusShowcaseProps {
  onOpenRFQ: () => void;
}

export const CorporateCampusShowcase: React.FC<CorporateCampusShowcaseProps> = ({ onOpenRFQ }) => {
  return (
    <section className="py-20 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Full-Bleed Corporate Campus Showcase Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900">
          
          {/* Main Full-Res Photo */}
          <div className="relative h-[420px] sm:h-[500px] lg:h-[560px] w-full">
            <img
              src="/corporate-building.jpg"
              alt="HS ONE STEP SOLUTIONS Corporate Headquarters"
              className="w-full h-full object-cover object-center"
            />
            
            {/* Elegant vignette and subtle bottom scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent" />
            
            {/* Top Corporate Badge */}
            <div className="absolute top-6 left-6 flex items-center space-x-2">
              <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#008744] text-xs font-mono font-bold uppercase tracking-wider shadow-lg">
                Corporate Headquarters & Master PMO Hub
              </span>
              <span className="hidden sm:inline px-3.5 py-1.5 rounded-full bg-[#D4AF37] text-slate-950 text-xs font-mono font-extrabold uppercase shadow-lg">
                ESTABLISHED 2024
              </span>
            </div>

            {/* Bottom Floating Info Glass Card */}
            <div className="absolute bottom-6 left-6 right-6 lg:left-8 lg:right-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
              <div className="space-y-2 text-white max-w-2xl">
                <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>“YOUR PLANS, OUR GOALS”</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                  HS ONE STEP SOLUTIONS
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
                  An integrated modern infrastructure, healthcare, and procurement corporation. Delivering single-point accountability for Government, Public Healthcare, and Private Enterprise clients worldwide.
                </p>
              </div>

              <div className="flex items-center space-x-3 flex-shrink-0">
                <button
                  onClick={onOpenRFQ}
                  className="px-6 py-3.5 bg-gradient-to-r from-[#008744] to-[#065F38] hover:from-[#065F38] hover:to-[#008744] text-white font-bold rounded-2xl text-xs font-mono tracking-wider shadow-xl flex items-center space-x-2"
                >
                  <span>CONNECT WITH PMO DESK</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
