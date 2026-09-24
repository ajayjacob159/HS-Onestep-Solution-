import React from "react";
import { Link } from "react-router-dom";
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Layers,
  HeartHandshake,
  Clock,
  Landmark
} from "lucide-react";
import { AboutMission } from "../components/sections/AboutMission";
import { CorporateCampusShowcase } from "../components/sections/CorporateCampusShowcase";
import { GovernmentPublicPrivate } from "../components/sections/GovernmentPublicPrivate";
import { TrustPillars } from "../components/sections/TrustPillars";
import { triggerHaptic } from "../utils/haptics";

interface AboutPageProps {
  onOpenRFQ: (sectorId?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenRFQ }) => {
  return (
    <div className="pt-8 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        
        {/* Breadcrumb & Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex items-center space-x-2 text-xs font-mono text-slate-500">
            <Link to="/" className="hover:text-[#008744]">Home</Link>
            <span>/</span>
            <span className="text-[#008744] font-bold">About Us</span>
            <span>/</span>
            <span className="text-slate-900 font-bold">Company Profile</span>
          </div>

          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-[#008744] text-xs font-mono font-bold tracking-wider uppercase shadow-sm">
            <Building2 className="w-3.5 h-3.5" />
            <span>Corporate Profile & Track Record</span>
          </div>

          <h1 className="text-3xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            HS ONE STEP SOLUTIONS
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A dynamic and diversified organization delivering reliable, innovative, and end-to-end turnkey solutions across the Government, Public, and Private sectors with multi-state presence in Pune, Hyderabad, Bihar, and Delhi.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => {
                triggerHaptic(20);
                onOpenRFQ();
              }}
              className="px-7 py-3.5 bg-gradient-to-r from-[#008744] to-[#065F38] text-white font-bold rounded-xl text-xs font-mono tracking-wider shadow-md flex items-center space-x-2"
            >
              <span>REQUEST INSTITUTIONAL PROPOSAL</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              to="/team"
              className="px-6 py-3.5 bg-white border border-slate-300 hover:border-[#008744] text-slate-800 hover:text-[#008744] font-bold rounded-xl text-xs font-mono tracking-wider shadow-sm flex items-center space-x-2"
            >
              <Award className="w-4 h-4 text-[#D4AF37]" />
              <span>MEET OUR LEADERSHIP TEAM</span>
            </Link>
          </div>
        </div>

        {/* Multi-State Operational Presence Cards */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-mono text-[#008744] font-bold uppercase tracking-wider block">
                NATIONAL FOOTPRINT
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Multi-State Presence Across India
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-500 hidden sm:block">
              WEST • SOUTH • EAST • NORTH
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Pune */}
            <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-[#008744] flex items-center justify-center font-bold mb-3 border border-emerald-200">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100/80 text-[#008744] font-bold uppercase">
                HEADQUARTERS (WEST)
              </span>
              <h3 className="text-base font-bold text-slate-900 mt-2">Pune, Maharashtra</h3>
              <p className="text-xs text-slate-600 mt-1">
                Gandharv Nagari, Moshi, Bhosari - 411039
              </p>
              <div className="text-[11px] font-mono text-slate-500 mt-3 pt-2 border-t border-slate-100">
                Central PMO & Sourcing Desk
              </div>
            </div>

            {/* Hyderabad */}
            <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-[#008744] flex items-center justify-center font-bold mb-3 border border-emerald-200">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-bold uppercase">
                REGIONAL HUB (SOUTH)
              </span>
              <h3 className="text-base font-bold text-slate-900 mt-2">Hyderabad, Telangana</h3>
              <p className="text-xs text-slate-600 mt-1">
                Hitec City / Madhapur Corridor
              </p>
              <div className="text-[11px] font-mono text-slate-500 mt-3 pt-2 border-t border-slate-100">
                MedTech & Tech Innovation Hub
              </div>
            </div>

            {/* Bihar */}
            <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-[#008744] flex items-center justify-center font-bold mb-3 border border-emerald-200">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-bold uppercase">
                STATE PROJECTS (EAST)
              </span>
              <h3 className="text-base font-bold text-slate-900 mt-2">Bihar (Patna Desk)</h3>
              <p className="text-xs text-slate-600 mt-1">
                State Health Mission & Public Liaison
              </p>
              <div className="text-[11px] font-mono text-slate-500 mt-3 pt-2 border-t border-slate-100">
                NHM & Turnkey Execution Desk
              </div>
            </div>

            {/* Delhi */}
            <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-[#008744] flex items-center justify-center font-bold mb-3 border border-emerald-200">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-bold uppercase">
                INSTITUTIONAL LIAISON (NORTH)
              </span>
              <h3 className="text-base font-bold text-slate-900 mt-2">New Delhi (NCR)</h3>
              <p className="text-xs text-slate-600 mt-1">
                Connaught Place / Central Liaison
              </p>
              <div className="text-[11px] font-mono text-slate-500 mt-3 pt-2 border-t border-slate-100">
                Government & Legal Advisory Desk
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Mission & Company Narrative Component */}
      <AboutMission onOpenRFQ={onOpenRFQ} />

      {/* Corporate Campus & Administrative Infrastructure */}
      <CorporateCampusShowcase onOpenRFQ={onOpenRFQ} />

      {/* Tri-Pillar: Government, Public & Private Sector Execution */}
      <GovernmentPublicPrivate onOpenRFQ={onOpenRFQ} />

      {/* Trust Pillars */}
      <TrustPillars />
    </div>
  );
};
