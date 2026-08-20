import React, { useState } from "react";
import { 
  Users, 
  ArrowRight, 
  AlertTriangle, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  TrendingDown, 
  Cpu
} from "lucide-react";

export const VendorComparison: React.FC = () => {
  const [activeModel, setActiveModel] = useState<"oneStep" | "traditional">("oneStep");

  const traditionalVendors = [
    { name: "Civil Contractor", risk: "Delayed site handover" },
    { name: "Medical Equipment Supplier", risk: "Unmatched electrical/MEP clearances" },
    { name: "Furniture Supplier", risk: "Premature delivery bottleneck" },
    { name: "Fire Safety Vendor", risk: "Disjointed compliance sign-offs" },
    { name: "Kitchen Equipment Supplier", risk: "Utility specification mismatch" },
    { name: "MEP & Electrical Contractor", risk: "Load balancing disputes" },
    { name: "Interior & Stone Contractor", risk: "Damaged during heavy equipment rigging" },
    { name: "Logistics & Clearance Agent", risk: "Fragmented multi-point freight" }
  ];

  const oneStepDivisions = [
    { title: "Healthcare & Medical Tech", desc: "Diagnostic, Surgical, OT, ICU & Blood Bank" },
    { title: "Civil & Infrastructure", desc: "Heavy Structural, MEP & Cleanroom Fit-Outs" },
    { title: "Commercial & Dietary Kitchens", desc: "SS 304 Fabrication, Cold Storage & Ventilation" },
    { title: "Institutional Furniture & Interiors", desc: "Hospital Ward Beds, Workstations & Surfaces" },
    { title: "Critical Power & Energy", desc: "Substations, Generators, UPS & Distribution" },
    { title: "Fire, Safety & Commissioning", desc: "Gas Suppression, Alarms & Turnkey Sign-Off" }
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#008744] text-xs font-mono font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Execution Model Comparison</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            WHY MANAGE 10 VENDORS WHEN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008744] to-[#D4AF37]">
              ONE PARTNER CAN MANAGE THE PROJECT?
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Traditional institutional projects force clients into the exhausting role of a general coordinator—managing conflicting timelines, finger-pointing between contractors, and costly integration gaps. HS One Step Solutions unifies all disciplines under one master partner.
          </p>

          <div className="inline-flex p-1.5 bg-slate-100 border border-slate-200 rounded-2xl shadow-inner mt-4">
            <button
              onClick={() => setActiveModel("oneStep")}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wider transition-all flex items-center space-x-2 ${
                activeModel === "oneStep"
                  ? "bg-[#008744] text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>THE HS ONE STEP MODEL (Unified)</span>
            </button>
            <button
              onClick={() => setActiveModel("traditional")}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wider transition-all flex items-center space-x-2 ${
                activeModel === "traditional"
                  ? "bg-red-600 text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <AlertTriangle className="w-4 h-4" />
              <span>TRADITIONAL MODEL (Fragmented)</span>
            </button>
          </div>
        </div>

        {activeModel === "oneStep" ? (
          <div className="bg-slate-50 border border-emerald-200 rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="flex items-center justify-between pb-6 border-b border-slate-200">
              <div className="flex items-center space-x-3">
                <div className="w-3.5 h-3.5 rounded-full bg-[#008744] animate-pulse" />
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-mono uppercase tracking-wider">
                  HS ONE STEP EXECUTION ARCHITECTURE
                </h3>
              </div>
              <span className="text-xs font-mono px-3 py-1 bg-emerald-100 text-[#008744] border border-emerald-200 rounded-lg font-bold">
                ZERO OVERLAP • SINGLE ACCOUNTABILITY
              </span>
            </div>

            <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left: The Client */}
              <div className="lg:col-span-3 text-center bg-white border border-slate-200 p-6 rounded-2xl space-y-2 shadow-sm">
                <span className="text-[10px] font-mono text-[#008744] uppercase tracking-widest block font-bold">PROJECT OWNER</span>
                <h4 className="text-xl font-extrabold text-slate-900">THE CLIENT</h4>
                <p className="text-xs text-slate-500">Government Agency / Hospital Trust / Enterprise Entity</p>
                <div className="pt-2 text-xs font-mono text-[#008744] font-bold flex items-center justify-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>1 Single Contract & POC</span>
                </div>
              </div>

              <div className="hidden lg:flex lg:col-span-1 justify-center items-center">
                <div className="w-full h-0.5 bg-gradient-to-r from-slate-300 via-[#008744] to-[#D4AF37] relative">
                  <ArrowRight className="w-4 h-4 text-[#008744] absolute right-0 -top-2" />
                </div>
              </div>

              {/* Center: HS ONE STEP SOLUTIONS */}
              <div className="lg:col-span-4 bg-white border-2 border-[#008744] rounded-3xl p-6 sm:p-8 text-center shadow-xl relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#008744] text-white text-[10px] font-mono font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
                  MASTER COORDINATION HUB
                </div>
                <img src="/logo.png" alt="HS" className="h-12 mx-auto mb-2 object-contain" />
                <h4 className="text-xl font-extrabold text-slate-900">HS ONE STEP SOLUTIONS</h4>
                <p className="text-xs font-mono text-[#008744] font-semibold mt-0.5">YOUR PLANS, OUR GOALS</p>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-700 space-y-1 font-medium">
                  <div>✓ Unified BOQ & Staged Sourcing</div>
                  <div>✓ Synchronized Site Readiness</div>
                  <div>✓ Zero Inter-Vendor Disputes</div>
                </div>
              </div>

              <div className="hidden lg:flex lg:col-span-1 justify-center items-center">
                <div className="w-full h-0.5 bg-gradient-to-r from-[#D4AF37] via-[#008744] to-slate-300 relative">
                  <ArrowRight className="w-4 h-4 text-[#008744] absolute right-0 -top-2" />
                </div>
              </div>

              {/* Right: Outcome */}
              <div className="lg:col-span-3 text-center bg-white border border-slate-200 p-6 rounded-2xl space-y-2 shadow-sm">
                <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest block font-bold">OUTCOME</span>
                <h4 className="text-xl font-extrabold text-slate-900">TURNKEY COMPLETION</h4>
                <p className="text-xs text-slate-500">Commissioned Hospital, Campus or Facility on Schedule</p>
                <div className="pt-2 text-xs font-mono text-[#008744] font-bold flex items-center justify-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>100% Operational Handover</span>
                </div>
              </div>
            </div>

            {/* Internal Divisions */}
            <div className="mt-6 pt-6 border-t border-slate-200">
              <span className="text-xs font-mono text-slate-500 block mb-4 uppercase tracking-wider text-center font-bold">
                INTERNAL SYNCHRONIZED DIVISIONS MANAGED DIRECTLY BY HS ONE STEP:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {oneStepDivisions.map((div, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start space-x-3 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-[#008744] mt-1.5 flex-shrink-0" />
                    <div>
                      <h5 className="text-xs font-bold text-slate-900">{div.title}</h5>
                      <p className="text-[11px] text-slate-500 mt-0.5">{div.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-200">
              <div className="bg-white border border-slate-200 p-4 rounded-xl text-center shadow-sm">
                <TrendingDown className="w-5 h-5 text-[#008744] mx-auto mb-1" />
                <span className="text-2xl font-extrabold text-slate-900 font-mono">-40% Friction</span>
                <p className="text-xs text-slate-500 mt-1">Elimination of inter-vendor coordination delays</p>
              </div>
              <div className="bg-white border border-slate-200 p-4 rounded-xl text-center shadow-sm">
                <ShieldCheck className="w-5 h-5 text-[#008744] mx-auto mb-1" />
                <span className="text-2xl font-extrabold text-slate-900 font-mono">100% Single POC</span>
                <p className="text-xs text-slate-500 mt-1">Full contractual and operational responsibility</p>
              </div>
              <div className="bg-white border border-slate-200 p-4 rounded-xl text-center shadow-sm">
                <Clock className="w-5 h-5 text-[#D4AF37] mx-auto mb-1" />
                <span className="text-2xl font-extrabold text-slate-900 font-mono">Synchronized</span>
                <p className="text-xs text-slate-500 mt-1">Precision MEP, civil and equipment alignment</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-red-50 border border-red-200 rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="flex items-center justify-between pb-6 border-b border-red-200">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <h3 className="text-base sm:text-lg font-bold text-red-950 font-mono uppercase tracking-wider">
                  THE FRAGMENTED MULTI-VENDOR BOTTLENECK
                </h3>
              </div>
              <span className="text-xs font-mono px-3 py-1 bg-red-100 text-red-800 border border-red-200 rounded-lg font-bold">
                HIGH RISK • BUDGET LEAKS • SCHEDULE OVERRUNS
              </span>
            </div>

            <div className="py-6 text-center">
              <div className="max-w-md mx-auto bg-white border border-red-300 p-4 rounded-2xl mb-8 shadow-sm">
                <span className="text-[10px] font-mono text-red-700 uppercase tracking-widest block font-bold">CLIENT OVERBURDENED</span>
                <h4 className="text-base font-bold text-slate-900">THE CLIENT COORDINATING 10+ ISOLATED VENDORS</h4>
                <p className="text-xs text-slate-600 mt-1">Forced to resolve interface conflicts, delayed shipments, and mismatched specifications alone.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-left">
                {traditionalVendors.map((v, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white border border-red-200 space-y-1 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-slate-500 font-bold">VENDOR {i + 1}</span>
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                    </div>
                    <div className="text-xs font-bold text-slate-900">{v.name}</div>
                    <div className="text-[11px] text-red-700 font-mono">⚠️ {v.risk}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-red-200 text-center">
              <p className="text-xs text-slate-600 max-w-xl mx-auto">
                Result: Equipment arrives before electrical load panels are installed; sterile flooring is damaged by later structural trades; warranty claims devolve into multi-party blame games.
              </p>
              <button
                onClick={() => setActiveModel("oneStep")}
                className="mt-4 px-6 py-2.5 bg-[#008744] hover:bg-[#065F38] text-white font-bold rounded-xl text-xs tracking-wider shadow-md"
              >
                SWITCH TO HS ONE STEP MODEL
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
