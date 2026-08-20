import React from "react";
import { X, CheckCircle2, ArrowRight, Layers, Building, ShieldCheck } from "lucide-react";
import { Sector } from "../../types";

interface SectorDetailModalProps {
  sector: Sector | null;
  onClose: () => void;
  onOpenRFQ: (sectorId?: string) => void;
}

export const SectorDetailModal: React.FC<SectorDetailModalProps> = ({
  sector,
  onClose,
  onOpenRFQ
}) => {
  if (!sector) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/70 backdrop-blur-md">
      <div 
        className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 sm:h-72 overflow-hidden">
          <img 
            src={sector.representativeVisual} 
            alt={sector.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 bg-white/90 hover:bg-white text-slate-800 rounded-full border border-slate-200 transition-colors z-10 shadow-md"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/90 text-[#008744] font-bold uppercase tracking-wider shadow-sm">
                {sector.badge}
              </span>
              {sector.isFlagship && (
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-slate-950 font-bold uppercase">
                  FLAGSHIP VERTICAL
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">{sector.title}</h2>
            <p className="text-xs sm:text-sm text-slate-200 font-mono mt-1">{sector.subtitle}</p>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-8 max-h-[60vh] overflow-y-auto">
          <div>
            <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2 font-bold">
              SECTOR OVERVIEW & EXECUTION SCOPE
            </h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              {sector.fullDesc}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 border border-slate-200 p-4 rounded-2xl">
            {sector.specifications.map((spec, i) => (
              <div key={i} className="space-y-1">
                <span className="text-[10px] font-mono text-slate-400 uppercase block font-bold">{spec.label}</span>
                <span className="text-xs font-bold text-slate-900 font-mono">{spec.value}</span>
              </div>
            ))}
          </div>

          <div>
            <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3 font-bold">
              INSTITUTIONAL CAPABILITIES & INFRASTRUCTURE
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {sector.capabilities.map((cap, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#008744] flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-800">{cap}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3 font-bold">
              TURNKEY DELIVERABLES & BOQ SCHEDULES
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {sector.keyDeliverables.map((deliv, i) => (
                <div key={i} className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start space-x-2.5">
                  <Layers className="w-4 h-4 text-[#008744] flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-800 font-medium">{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-slate-500 font-mono">
            Direct institutional procurement & turnkey execution available.
          </span>
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs font-mono text-slate-700 hover:bg-slate-100 font-bold"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenRFQ(sector.id);
              }}
              className="w-1/2 sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#008744] to-[#065F38] hover:from-[#065F38] hover:to-[#008744] text-white font-bold text-xs tracking-wider flex items-center justify-center space-x-2 shadow-md"
            >
              <span>REQUEST RFQ FOR THIS SECTOR</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
