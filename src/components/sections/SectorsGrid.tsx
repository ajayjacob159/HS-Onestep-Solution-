import React, { useState } from "react";
import { 
  Building2, 
  Stethoscope, 
  HardHat, 
  Zap, 
  Droplet, 
  Grid, 
  ShieldAlert, 
  Armchair, 
  UtensilsCrossed, 
  Layers, 
  Landmark, 
  Cpu, 
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

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Building2": return <Building2 className="w-5 h-5 text-[#008744]" />;
      case "Stethoscope": return <Stethoscope className="w-5 h-5 text-[#008744]" />;
      case "HardHat": return <HardHat className="w-5 h-5 text-[#D4AF37]" />;
      case "Zap": return <Zap className="w-5 h-5 text-[#D4AF37]" />;
      case "Droplet": return <Droplet className="w-5 h-5 text-red-600" />;
      case "Grid": return <Grid className="w-5 h-5 text-[#008744]" />;
      case "ShieldAlert": return <ShieldAlert className="w-5 h-5 text-red-600" />;
      case "Armchair": return <Armchair className="w-5 h-5 text-blue-600" />;
      case "UtensilsCrossed": return <UtensilsCrossed className="w-5 h-5 text-[#D4AF37]" />;
      case "Layers": return <Layers className="w-5 h-5 text-[#008744]" />;
      case "Landmark": return <Landmark className="w-5 h-5 text-blue-700" />;
      case "Cpu": return <Cpu className="w-5 h-5 text-[#008744]" />;
      default: return <Building2 className="w-5 h-5 text-[#008744]" />;
    }
  };

  const filteredSectors = selectedFilter === "all" 
    ? SECTORS 
    : SECTORS.filter((s) => s.category === selectedFilter);

  return (
    <section id="sectors" className="py-24 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#008744] text-xs font-mono font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Integrated Solutions Matrix</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              SOLUTIONS BY SECTOR
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              HS One Step Solutions operates across 12 specialized operational sectors. We deliver modular capability or synchronized multi-vertical turnkey facility development.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All 12 Sectors" },
              { id: "healthcare", label: "Healthcare & MedTech" },
              { id: "infrastructure", label: "Infrastructure & Power" },
              { id: "commercial", label: "Commercial & Surfaces" },
              { id: "institutional", label: "Institutional & Gov" }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                  selectedFilter === f.id
                    ? "bg-[#008744] text-white shadow-md"
                    : "bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSectors.map((sector) => (
            <div
              key={sector.id}
              id={`sector-${sector.id}`}
              className={`group bg-white border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative ${
                sector.isFlagship
                  ? "border-[#008744]/40 hover:border-[#008744] ring-1 ring-emerald-100"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={sector.representativeVisual}
                    alt={sector.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <div className="p-2 rounded-xl bg-white/95 backdrop-blur-md shadow-sm">
                      {getIcon(sector.iconName)}
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-800 uppercase font-bold tracking-wider shadow-sm">
                      {sector.badge}
                    </span>
                  </div>

                  {sector.isFlagship && (
                    <div className="absolute top-4 right-4">
                      <span className="text-[10px] font-mono font-extrabold px-3 py-1 rounded-full bg-[#D4AF37] text-slate-950 shadow-md">
                        FLAGSHIP
                      </span>
                    </div>
                  )}

                  <button
                    onClick={() => setActiveModalSector(sector)}
                    className="absolute bottom-3 right-3 p-2 rounded-xl bg-white/90 text-slate-700 hover:text-slate-900 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Expand Sector Details"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight group-hover:text-[#008744] transition-colors">
                      {sector.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-mono mt-1 font-semibold">
                      {sector.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-3">
                    {sector.shortDesc}
                  </p>

                  <div className="pt-3 border-t border-slate-100 space-y-1.5">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold">
                      KEY SCOPE DELIVERABLES:
                    </span>
                    {sector.capabilities.slice(0, 3).map((cap, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#008744] flex-shrink-0" />
                        <span className="truncate">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-slate-100 mt-4">
                <button
                  onClick={() => setActiveModalSector(sector)}
                  className="w-1/2 py-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 text-xs font-mono font-bold text-slate-800 transition-all flex items-center justify-center space-x-1"
                >
                  <span>EXPLORE</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenRFQ(sector.id)}
                  className="w-1/2 py-2.5 rounded-xl bg-gradient-to-r from-[#008744] to-[#065F38] hover:from-[#065F38] hover:to-[#008744] text-white font-bold text-xs font-mono tracking-wider transition-all flex items-center justify-center space-x-1 shadow-md shadow-emerald-700/15"
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
