import React from "react";
import { Cpu, FileText, Lock } from "lucide-react";

export const TechIntelligence: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#008744]/20 border border-[#008744]/40 text-emerald-400 text-xs font-mono font-bold tracking-wider">
              <Cpu className="w-3.5 h-3.5" />
              <span>DIGITAL CAPABILITY LAYER — COMING SOON</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              ONE STEP PROJECT INTELLIGENCE™
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed font-light">
              Proprietary AI-assisted BOQ parsing, automated multi-vendor schedule clash detection, and live site telemetry dashboard currently under active development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
