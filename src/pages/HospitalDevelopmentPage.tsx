import React from "react";
import { HospitalEcosystem } from "../components/sections/HospitalEcosystem";
import { ProjectDashboardConcept } from "../components/sections/ProjectDashboardConcept";
import { Building2, ShieldCheck, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { triggerHaptic } from "../utils/haptics";

interface HospitalDevelopmentPageProps {
  onOpenRFQ: (sectorId?: string) => void;
}

export const HospitalDevelopmentPage: React.FC<HospitalDevelopmentPageProps> = ({ onOpenRFQ }) => {
  return (
    <div className="pt-8 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Breadcrumb & Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex items-center space-x-2 text-xs font-mono text-slate-500">
            <Link to="/" className="hover:text-[#008744]">Home</Link>
            <span>/</span>
            <span className="text-[#008744] font-bold">Hospital Development (Turnkey)</span>
          </div>

          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-[#008744] text-xs font-mono font-bold tracking-wider uppercase shadow-sm">
            <Building2 className="w-3.5 h-3.5" />
            <span>Turnkey Flagship Infrastructure</span>
          </div>

          <h1 className="text-3xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            TURNKEY HOSPITAL DEVELOPMENT & MEDICAL ECOSYSTEM
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From Greenfield civil foundations to Class 100 Modular Operation Theatres, Medical Gas Pipelines (MGPS), ICU bays, and Diagnostic Imaging—delivered under ONE master accountability partner.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => {
                triggerHaptic(20);
                onOpenRFQ("hospital-development");
              }}
              className="px-7 py-3.5 bg-gradient-to-r from-[#008744] to-[#065F38] text-white font-bold rounded-xl text-xs font-mono tracking-wider shadow-md flex items-center space-x-2"
            >
              <span>REQUEST HOSPITAL BOQ / RFQ</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              to="/cad-floorplan"
              className="px-6 py-3.5 bg-white border border-slate-300 hover:border-[#008744] text-slate-800 hover:text-[#008744] font-bold rounded-xl text-xs font-mono tracking-wider shadow-sm flex items-center space-x-2"
            >
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>EXPLORE CAD FLOORPLAN</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Flagship Ecosystem Component */}
      <HospitalEcosystem onOpenRFQ={onOpenRFQ} />

      {/* Simulated Telemetry Dashboard Component */}
      <ProjectDashboardConcept />
    </div>
  );
};
