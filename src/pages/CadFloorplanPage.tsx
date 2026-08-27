import React from "react";
import { HospitalFloorplanExplorer } from "../components/sections/HospitalFloorplanExplorer";
import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { triggerHaptic } from "../utils/haptics";

interface CadFloorplanPageProps {
  onOpenRFQ: (sectorId?: string, productName?: string) => void;
}

export const CadFloorplanPage: React.FC<CadFloorplanPageProps> = ({ onOpenRFQ }) => {
  return (
    <div className="pt-8 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="space-y-3 max-w-4xl">
          <div className="flex items-center space-x-2 text-xs font-mono text-slate-500">
            <Link to="/" className="hover:text-[#008744]">Home</Link>
            <span>/</span>
            <span className="text-[#008744] font-bold">Interactive CAD Floorplan</span>
          </div>

          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-[#9A741E] text-xs font-mono font-bold tracking-wider uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Interactive Blueprint Architecture</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            INTERACTIVE HOSPITAL CAD BLUEPRINT EXPLORER
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Click any zone on the architectural floorplan below to inspect room specifications, sterile cleanroom criteria, medical equipment staging, and line-item Bill of Quantities (BOQ).
          </p>
        </div>
      </div>

      <HospitalFloorplanExplorer onOpenRFQ={onOpenRFQ} />
    </div>
  );
};
