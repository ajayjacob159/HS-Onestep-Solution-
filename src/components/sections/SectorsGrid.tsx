import React, { useState } from "react";
import { 
  Building2, 
  ArrowRight, 
  Check, 
  ChevronRight,
  Maximize2,
  Sparkles
} from "lucide-react";
import { SECTORS } from "../../data/sectorsData";
import { Sector } from "../../types";
import { SectorDetailModal } from "./SectorDetailModal";

interface SectorsGridProps {
  onOpenRFQ: (sectorId?: string) => void;
}

export const SectorsGrid: React.FC<SectorsGridProps> = ({ onOpenRFQ }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [activeModalSector, setActiveModalSector] = useState<Sector | null>(null);

  const filteredSectors = selectedFilter === "all" 
    ? SECTORS 
    : SECTORS.filter((s) => s.category === selectedFilter);

  return (
    <section id="sectors" className="py-20 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Minimalist & Punchy) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-[#008744] uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block">
              12 Specialized Verticals
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              SOLUTIONS BY SECTOR
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All Sectors" },
              { id: "healthcare", label: "Healthcare" },
              { id: "infrastructure", label: "Infrastructure" },
              { id: "commercial", label: "Commercial" },
              { id: "institutional", label: "Institutional" }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                  selectedFilter === f.id
                    ? "bg-[#008744] text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pictorial Grid (Large Visual Focus) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSectors.map((sector) => (
            <div
              key={sector.id}
              id={`sector-${sector.id}`}
              className="group bg-white border border-slate-200 hover:border-[#008744] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 overflow-hidden bg-slate-100">
                  <img
                    src={sector.representativeVisual}
                    alt={sector.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute top-3.5 left-3.5">
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 uppercase font-bold tracking-wider shadow-sm">
                      {sector.badge}
                    </span>
                  </div>

                  {sector.isFlagship && (
                    <div className="absolute top-3.5 right-3.5">
                      <span className="text-[10px] font-mono font-extrabold px-3 py-1 rounded-full bg-[#D4AF37] text-slate-950 shadow-md">
                        FLAGSHIP
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold tracking-tight leading-tight">{sector.title}</h3>
                    <p className="text-xs text-slate-300 font-mono mt-0.5 truncate">{sector.subtitle}</p>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div className="grid grid-cols-3 gap-2 bg-slate-50 border border-slate-100 p-2.5 rounded-xl text-center text-xs font-mono">
                    {sector.specifications.slice(0, 3).map((spec, i) => (
                      <div key={i} className="truncate">
                        <span className="text-[9px] text-slate-400 uppercase block font-bold truncate">{spec.label}</span>
                        <span className="text-[11px] font-bold text-slate-800 truncate">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-1 pt-1">
                    {sector.capabilities.slice(0, 2).map((cap, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#008744] flex-shrink-0" />
                        <span className="truncate">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center justify-between gap-3 border-t border-slate-100 mt-2">
                <button
                  onClick={() => setActiveModalSector(sector)}
                  className="w-1/2 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-xs font-mono font-bold text-slate-700 transition-all flex items-center justify-center space-x-1"
                >
                  <span>INSPECT</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenRFQ(sector.id)}
                  className="w-1/2 py-2 rounded-xl bg-[#008744] hover:bg-[#065F38] text-white font-bold text-xs font-mono tracking-wider transition-all flex items-center justify-center space-x-1 shadow-sm"
                >
                  <span>RFQ</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SectorDetailModal
        sector={activeModalSector}
        onClose={() => setActiveModalSector(null)}
        onOpenRFQ={onOpenRFQ}
      />
    </section>
  );
};
