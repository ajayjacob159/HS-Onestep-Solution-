import React from "react";
import { Link } from "react-router-dom";
import { 
  Users, 
  Award, 
  ShieldCheck, 
  Scale, 
  Gavel, 
  Building2, 
  ArrowRight, 
  Quote, 
  HeartHandshake, 
  Clock, 
  Activity, 
  Layers, 
  Landmark, 
  ThumbsUp,
  CheckCircle2,
  Phone,
  Mail
} from "lucide-react";
import { FounderSection } from "../components/sections/FounderSection";
import { triggerHaptic } from "../utils/haptics";

interface TeamPageProps {
  onOpenRFQ: (sectorId?: string, productName?: string) => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({ onOpenRFQ }) => {
  return (
    <div className="pt-8 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        
        {/* Breadcrumb & Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex items-center space-x-2 text-xs font-mono text-slate-500">
            <Link to="/" className="hover:text-[#008744]">Home</Link>
            <span>/</span>
            <Link to="/about" className="hover:text-[#008744]">About Us</Link>
            <span>/</span>
            <span className="text-[#008744] font-bold">Our Team & Leadership</span>
          </div>

          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-[#008744] text-xs font-mono font-bold tracking-wider uppercase shadow-sm">
            <Users className="w-3.5 h-3.5" />
            <span>Executive Leadership & Advisory Board</span>
          </div>

          <h1 className="text-3xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            OUR LEADERSHIP & GOVERNANCE TEAM
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Led by seasoned entrepreneurs and top-tier legal advisors with over 10 years of cross-sectoral experience across Government, Public, and Private healthcare and infrastructure execution.
          </p>
        </div>
      </div>

      {/* Main Leadership Section Component */}
      <FounderSection onOpenRFQ={onOpenRFQ} />

      {/* Cross-Disciplinary Project Delivery Matrix */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-12 border-t border-slate-200">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-mono text-[#008744] font-bold uppercase tracking-wider block">
            INTEGRATED EXECUTION MATRIX
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            Multidisciplinary Engineering & Project Desks
          </h2>
          <p className="text-sm text-slate-600">
            Under master corporate governance, specialized engineering departments coordinate turnkey execution across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm hover:border-[#008744] transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#008744] flex items-center justify-center font-bold mb-4">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Healthcare & Cleanroom PMO</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Architects, biomedical engineers & sterile HVAC specialists delivering Modular OTs, MGPS & ICU suites.
            </p>
            <div className="text-[10px] font-mono text-[#008744] font-bold mt-4 pt-2 border-t border-slate-200">
              NABH & ISO 5 CERTIFIED
            </div>
          </div>

          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm hover:border-[#008744] transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#008744] flex items-center justify-center font-bold mb-4">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Civil & Structural Engineering</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Structural engineers, site managers & PEB specialists managing high-tolerance civil framing and substructures.
            </p>
            <div className="text-[10px] font-mono text-[#008744] font-bold mt-4 pt-2 border-t border-slate-200">
              SEISMIC & RADIATION PROOF
            </div>
          </div>

          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm hover:border-[#008744] transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#008744] flex items-center justify-center font-bold mb-4">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Legal & Statutory Governance</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Led by Supreme Court advocacy for public tender integrity, contract formulation & statutory clearances.
            </p>
            <div className="text-[10px] font-mono text-[#008744] font-bold mt-4 pt-2 border-t border-slate-200">
              SUPREME COURT ADVISORY
            </div>
          </div>

          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm hover:border-[#008744] transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#008744] flex items-center justify-center font-bold mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Institutional Procurement Desk</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Direct OEM vendor network, equipment staging, calibration & consolidated BOQ fulfillment teams.
            </p>
            <div className="text-[10px] font-mono text-[#008744] font-bold mt-4 pt-2 border-t border-slate-200">
              GLOBAL OEM DIRECT SOURCING
            </div>
          </div>

        </div>

        {/* Consultation CTA */}
        <div className="mt-14 p-8 sm:p-10 bg-gradient-to-r from-slate-900 to-slate-950 rounded-3xl text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs font-mono text-emerald-400 font-bold uppercase">
              DIRECT EXECUTIVE ENGAGEMENT
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Connect With Our Executive Leadership Desk
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Discuss tender joint ventures, turnkey healthcare development, or multi-sector procurement scopes directly with our executive desk.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                triggerHaptic(20);
                onOpenRFQ();
              }}
              className="px-6 py-3.5 bg-[#008744] hover:bg-[#065F38] text-white font-bold rounded-xl text-xs font-mono tracking-wider shadow-lg flex items-center justify-center space-x-2"
            >
              <span>CONNECT WITH LEADERSHIP</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
