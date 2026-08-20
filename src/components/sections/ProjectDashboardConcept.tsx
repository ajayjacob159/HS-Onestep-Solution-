import React, { useState } from "react";
import { Activity, CheckCircle2, Building2, Truck, ShieldCheck, Sparkles } from "lucide-react";

export const ProjectDashboardConcept: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"milestones" | "procurement" | "compliance">("milestones");

  const stageStatuses = [
    { name: "Planning & Architecture", status: "COMPLETE", progress: 100, color: "bg-[#008744]" },
    { name: "Civil & Structural Works", status: "IN PROGRESS", progress: 72, color: "bg-[#008744]" },
    { name: "MEP, Cleanroom & HVAC", status: "IN PROGRESS", progress: 68, color: "bg-[#008744]" },
    { name: "Equipment Procurement", status: "STAGED", progress: 58, color: "bg-blue-600" },
    { name: "Healthcare & B2B Furniture", status: "IN PROGRESS", progress: 80, color: "bg-[#008744]" },
    { name: "Medical Gas (MGPS) & OT", status: "IN PROGRESS", progress: 65, color: "bg-[#008744]" },
    { name: "Commercial Dietary Kitchen", status: "NEAR COMPLETE", progress: 90, color: "bg-[#008744]" },
    { name: "Final Testing & Commissioning", status: "QUEUED", progress: 35, color: "bg-[#D4AF37]" }
  ];

  return (
    <section id="dashboard-concept" className="py-24 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#008744] text-xs font-mono font-bold tracking-wider uppercase">
            <Activity className="w-3.5 h-3.5 text-[#008744]" />
            <span>Interactive Project Control — Concept</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            CENTRALIZED PROJECT TELEMETRY
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            A conceptual demonstration of how HS One Step Solutions orchestrates complex multi-sector projects. Clients monitor every department, shipment, and commissioning milestone in real time.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-slate-900 text-white px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-3.5 h-3.5 rounded-full bg-[#008744] animate-pulse" />
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-bold text-white font-mono">PROJECT: 200-BED MULTI-SPECIALTY HOSPITAL</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#D4AF37] text-slate-950 font-bold">
                    SIMULATION DEMO
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-mono">ID: HS-PRJ-2026-X88 • Turnkey Execution Model</span>
              </div>
            </div>

            <div className="flex items-center space-x-2 bg-slate-800 p-1 rounded-xl text-xs font-mono">
              <button
                onClick={() => setActiveTab("milestones")}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === "milestones" ? "bg-[#008744] text-white font-bold" : "text-slate-300 hover:text-white"
                }`}
              >
                Multi-Sector Progress
              </button>
              <button
                onClick={() => setActiveTab("procurement")}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === "procurement" ? "bg-[#008744] text-white font-bold" : "text-slate-300 hover:text-white"
                }`}
              >
                Staged Sourcing
              </button>
              <button
                onClick={() => setActiveTab("compliance")}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === "compliance" ? "bg-[#008744] text-white font-bold" : "text-slate-300 hover:text-white"
                }`}
              >
                QA Sign-Offs
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-slate-50">
            {activeTab === "milestones" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {stageStatuses.map((stg, i) => (
                    <div key={i} className="bg-white border border-slate-200 p-4 rounded-2xl space-y-3 shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-800">{stg.name}</span>
                        <span className="text-xs font-mono font-extrabold text-[#008744]">{stg.progress}%</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div className={`h-full ${stg.color}`} style={{ width: `${stg.progress}%` }} />
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                        <span>STATUS:</span>
                        <span className="text-slate-900 font-bold">{stg.status}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-600 shadow-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#008744]" />
                    <span>Cross-department dependencies synchronized: Civil Handover on schedule.</span>
                  </div>
                  <span className="text-[#008744] font-bold">SINGLE MASTER PMO SUPERVISION</span>
                </div>
              </div>
            )}

            {activeTab === "procurement" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <div className="text-[10px] font-mono text-[#008744] uppercase font-bold">TIER-1 MEDICAL SHIPMENTS</div>
                    <div className="text-xl font-bold text-slate-900 mt-1">42 / 48 Packages Dispatched</div>
                    <p className="text-xs text-slate-500 mt-1">Laminar Flow Plenums, OT Tables, ICU Multi-Para Monitors</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <div className="text-[10px] font-mono text-[#9A741E] uppercase font-bold">HEAVY STRUCTURAL & MEP</div>
                    <div className="text-xl font-bold text-slate-900 mt-1">100% Staged on Site</div>
                    <p className="text-xs text-slate-500 mt-1">HT Substation Panels, AHUs, Medical Copper Tubing</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <div className="text-[10px] font-mono text-[#008744] uppercase font-bold">FURNITURE & SURFACES</div>
                    <div className="text-xl font-bold text-slate-900 mt-1">Staged for Phase 3</div>
                    <p className="text-xs text-slate-500 mt-1">Ward Beds, Anti-Microbial Tiles, Modular Desking</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "compliance" && (
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between shadow-sm">
                    <span className="text-slate-800 font-medium">Medical Gas Pipeline (MGPS) Pressure Decay Test</span>
                    <span className="font-mono text-[#008744] font-bold">PASSED (24h Hold)</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between shadow-sm">
                    <span className="text-slate-800 font-medium">Class 100 Modular OT Air Particle Count</span>
                    <span className="font-mono text-[#008744] font-bold">CERTIFIED (ISO 5)</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between shadow-sm">
                    <span className="text-slate-800 font-medium">FM-200 Gas Suppression System Test</span>
                    <span className="font-mono text-[#008744] font-bold">VERIFIED</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between shadow-sm">
                    <span className="text-slate-800 font-medium">Electrical Substation & Auto-DG Sync Load Test</span>
                    <span className="font-mono text-[#008744] font-bold">COMPLIANT</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
