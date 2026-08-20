import React from "react";
import { 
  ArrowRight, 
  ShieldCheck, 
  FileText, 
  Building2, 
  CheckCircle2, 
  Sparkles,
  MapPin,
  Layers,
  ChevronRight
} from "lucide-react";

interface HeroExperienceProps {
  onOpenRFQ: () => void;
  onOpenProjectBuilder: () => void;
}

export const HeroExperience: React.FC<HeroExperienceProps> = ({ onOpenRFQ, onOpenProjectBuilder }) => {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[88vh] flex flex-col justify-between overflow-hidden bg-white border-b border-slate-200">
      
      {/* Background Corporate Headquarters Building Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/corporate-building.jpg"
          alt="HS ONE STEP SOLUTIONS Corporate Headquarters"
          className="w-full h-full object-cover object-center lg:object-right"
        />
        {/* Soft, crisp white gradient overlay for supreme readability and Fortune-500 enterprise look */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/30 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14 flex-1 flex flex-col justify-center">
        {/* Top Corporate Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-emerald-300 text-[#008744] text-xs font-mono font-bold tracking-wider shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#008744] animate-pulse" />
            <span>SERVING GOVERNMENT, PUBLIC & PRIVATE SECTOR</span>
          </div>
          
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-amber-300 text-[#9A741E] text-xs font-mono font-bold shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>YOUR PLANS, OUR GOALS</span>
          </div>
        </div>

        {/* Corporate Headline & Positioning */}
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.06]">
            ONE PARTNER. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008744] via-[#065F38] to-[#D4AF37]">
              COMPLETE PROJECT EXECUTION.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal bg-white/70 backdrop-blur-sm p-3 rounded-2xl border border-slate-200/60 shadow-sm">
            From infrastructure, civil works, and modular cleanrooms to advanced medical equipment, commercial kitchens, and institutional procurement — <strong className="text-slate-950 font-bold">HS One Step Solutions</strong> brings multiple capabilities under one master execution partner.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenProjectBuilder}
              className="px-8 py-4 bg-gradient-to-r from-[#008744] to-[#065F38] hover:from-[#065F38] hover:to-[#008744] text-white font-bold rounded-2xl text-sm sm:text-base shadow-xl shadow-emerald-700/25 transition-all flex items-center space-x-2.5 group"
            >
              <span>START A PROJECT</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#hospital-flagship"
              className="px-7 py-4 bg-white hover:bg-slate-50 border-2 border-slate-300 hover:border-slate-800 text-slate-800 font-bold rounded-2xl text-sm sm:text-base transition-all shadow-md backdrop-blur-md"
            >
              HOSPITAL FLAGSHIP
            </a>

            <button
              onClick={onOpenRFQ}
              className="px-4 py-4 text-xs font-mono text-[#008744] hover:text-[#065F38] font-bold flex items-center space-x-1.5 underline decoration-[#008744]/40 hover:decoration-[#008744] underline-offset-4 transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>REQUEST FOR QUOTATION</span>
            </button>
          </div>

          {/* Corporate Verification Strip */}
          <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-200/90 text-xs font-mono">
            <div className="bg-white/90 backdrop-blur-md p-3 rounded-xl border border-slate-200 shadow-sm">
              <span className="text-base sm:text-lg font-extrabold text-slate-900 block font-sans">12 Sectors</span>
              <span className="text-slate-500 text-[11px]">Turnkey Integration</span>
            </div>
            <div className="bg-white/90 backdrop-blur-md p-3 rounded-xl border border-slate-200 shadow-sm">
              <span className="text-base sm:text-lg font-extrabold text-[#008744] block font-sans">Single POC</span>
              <span className="text-slate-500 text-[11px]">Master PMO Delivery</span>
            </div>
            <div className="bg-white/90 backdrop-blur-md p-3 rounded-xl border border-slate-200 shadow-sm">
              <span className="text-base sm:text-lg font-extrabold text-[#D4AF37] block font-sans">Turnkey</span>
              <span className="text-slate-500 text-[11px]">Empty Site to Handover</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Horizontal Credentials Bar */}
      <div className="relative z-10 bg-white/95 backdrop-blur-md border-t border-slate-200 py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-600">
          <div className="flex items-center space-x-2 text-slate-900 font-bold">
            <span className="w-2 h-2 rounded-full bg-[#008744]" />
            <span>OPERATIONAL DOMAINS:</span>
          </div>

          <div className="flex items-center space-x-3 overflow-x-auto pb-0.5 text-xs whitespace-nowrap">
            <span className="text-[#008744] font-bold">Turnkey Hospitals</span>
            <span className="text-slate-300">•</span>
            <span>Medical & Surgical Equipment</span>
            <span className="text-slate-300">•</span>
            <span>Civil Construction</span>
            <span className="text-slate-300">•</span>
            <span>Energy & Power</span>
            <span className="text-slate-300">•</span>
            <span>Commercial Kitchens</span>
            <span className="text-slate-300">•</span>
            <span>Fire & Life Safety</span>
            <span className="text-slate-300">•</span>
            <span className="text-[#9A741E] font-bold">Government Tenders</span>
          </div>
        </div>
      </div>
    </section>
  );
};
