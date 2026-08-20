import React from "react";
import { 
  ArrowRight, 
  ShieldCheck, 
  FileText, 
  Building2, 
  Sparkles,
  MapPin,
  CheckCircle2
} from "lucide-react";

interface HeroExperienceProps {
  onOpenRFQ: () => void;
  onOpenProjectBuilder: () => void;
}

export const HeroExperience: React.FC<HeroExperienceProps> = ({ onOpenRFQ, onOpenProjectBuilder }) => {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-between overflow-hidden bg-slate-900 border-b border-slate-200">
      
      {/* Background Corporate Headquarters Building Image (Vivid & Highly Visible) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/corporate-building.jpg"
          alt="HS ONE STEP SOLUTIONS Headquarters"
          className="w-full h-full object-cover object-center lg:object-center"
        />
        {/* Subtle, refined gradient to ensure text readability on left while keeping building 100% visible on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-900/30 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14 flex-1 flex flex-col justify-center">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-emerald-400 text-emerald-400 text-xs font-mono font-bold tracking-wider shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>SERVING GOVERNMENT, PUBLIC & PRIVATE SECTOR</span>
          </div>
          
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-[#D4AF37] text-[#D4AF37] text-xs font-mono font-bold shadow-lg">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ESTABLISHED 2024</span>
          </div>
        </div>

        {/* Corporate Headline & Glass Card */}
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.06] drop-shadow-md">
            ONE PARTNER. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-[#D4AF37]">
              COMPLETE PROJECT EXECUTION.
            </span>
          </h1>

          <div className="bg-slate-900/80 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-slate-700/80 shadow-2xl text-slate-200 text-sm sm:text-base leading-relaxed">
            From civil infrastructure and turnkey hospital development to medical technology, commercial dietary kitchens, and institutional procurement — <strong className="text-white font-bold">HS One Step Solutions</strong> brings multiple capabilities under one master execution partner.
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenProjectBuilder}
              className="px-8 py-4 bg-gradient-to-r from-[#008744] to-[#065F38] hover:from-[#065F38] hover:to-[#008744] text-white font-bold rounded-2xl text-sm sm:text-base shadow-xl shadow-emerald-700/30 transition-all flex items-center space-x-2.5 group"
            >
              <span>START A PROJECT</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#hospital-flagship"
              className="px-7 py-4 bg-white/90 hover:bg-white text-slate-900 font-bold rounded-2xl text-sm sm:text-base transition-all shadow-lg backdrop-blur-md"
            >
              HOSPITAL FLAGSHIP
            </a>

            <button
              onClick={onOpenRFQ}
              className="px-4 py-4 text-xs font-mono text-emerald-400 hover:text-emerald-300 font-bold flex items-center space-x-1.5 underline decoration-emerald-400/50 hover:decoration-emerald-400 underline-offset-4 transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>REQUEST FOR QUOTATION</span>
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-700/60 text-xs font-mono">
            <div className="bg-slate-900/80 backdrop-blur-md p-3 rounded-xl border border-slate-700 shadow-sm text-center">
              <span className="text-lg font-extrabold text-white block font-sans">12 Sectors</span>
              <span className="text-slate-400 text-[10px]">Turnkey Integration</span>
            </div>
            <div className="bg-slate-900/80 backdrop-blur-md p-3 rounded-xl border border-slate-700 shadow-sm text-center">
              <span className="text-lg font-extrabold text-emerald-400 block font-sans">Single POC</span>
              <span className="text-slate-400 text-[10px]">Master PMO Delivery</span>
            </div>
            <div className="bg-slate-900/80 backdrop-blur-md p-3 rounded-xl border border-slate-700 shadow-sm text-center">
              <span className="text-lg font-extrabold text-[#D4AF37] block font-sans">Est. 2024</span>
              <span className="text-slate-400 text-[10px]">Serving Many Clients</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Horizontal Bar */}
      <div className="relative z-10 bg-slate-950/90 backdrop-blur-md border-t border-slate-800 py-3.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center space-x-2 text-white font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>OPERATIONAL DISCIPLINES:</span>
          </div>

          <div className="flex items-center space-x-3 overflow-x-auto pb-0.5 text-xs whitespace-nowrap text-slate-300">
            <span className="text-emerald-400 font-bold">Turnkey Hospital Development</span>
            <span className="text-slate-600">•</span>
            <span>Medical & Surgical Equipment</span>
            <span className="text-slate-600">•</span>
            <span>Civil Infrastructure</span>
            <span className="text-slate-600">•</span>
            <span>Critical Power</span>
            <span className="text-slate-600">•</span>
            <span>Commercial Kitchens</span>
            <span className="text-slate-600">•</span>
            <span>Fire & Life Safety</span>
            <span className="text-slate-600">•</span>
            <span className="text-[#D4AF37] font-bold">Government Procurement</span>
          </div>
        </div>
      </div>
    </section>
  );
};
