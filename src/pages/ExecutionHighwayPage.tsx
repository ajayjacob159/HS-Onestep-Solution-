import React from "react";
import { InteractiveProjectRoadmap } from "../components/sections/InteractiveProjectRoadmap";
import { Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { triggerHaptic } from "../utils/haptics";

interface ExecutionHighwayPageProps {
  onOpenRFQ: (sectorId?: string) => void;
}

export const ExecutionHighwayPage: React.FC<ExecutionHighwayPageProps> = ({ onOpenRFQ }) => {
  return (
    <div className="pt-8 pb-20 bg-slate-950 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="space-y-3 max-w-4xl">
          <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
            <Link to="/" className="hover:text-[#008744]">Home</Link>
            <span>/</span>
            <span className="text-emerald-400 font-bold">Execution Highway (365 Days)</span>
          </div>

          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-700/60 text-emerald-400 text-xs font-mono font-bold tracking-wider uppercase shadow-sm">
            <Clock className="w-3.5 h-3.5" />
            <span>Turnkey Project Timeline</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            THE 365-DAY TURNKEY EXECUTION HIGHWAY
          </h1>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Synchronized milestone sequencing from Genesis BIM modeling through Structural Substructures, Cleanrooms, Diagnostic Staging, and Statutory Handover.
          </p>
        </div>
      </div>

      <InteractiveProjectRoadmap onOpenRFQ={onOpenRFQ} />
    </div>
  );
};
