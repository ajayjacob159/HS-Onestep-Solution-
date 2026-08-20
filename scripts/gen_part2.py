# coding: utf-8
import os

base = "/Users/michaeljacob/.gemini/antigravity/scratch/hs-one-step-solutions/src"
sections = os.path.join(base, "components", "sections")

# 1. ProjectBuilder.tsx (Interactive 4-Step Wizard with Live Estimator Slider)
with open(os.path.join(sections, "ProjectBuilder.tsx"), "w", encoding="utf-8") as f:
    f.write(r"""import React, { useState } from "react";
import { 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  Building, 
  Layers, 
  Calendar, 
  ShieldCheck, 
  Sparkles,
  Sliders,
  DollarSign,
  FileCheck
} from "lucide-react";
import { 
  BUILDER_SECTORS, 
  BUILDER_REQUIREMENT_TYPES, 
  BUILDER_SERVICES,
  SCALE_OPTIONS,
  TIMELINE_OPTIONS
} from "../../data/projectBuilderData";
import { ProjectBuilderState } from "../../types";

interface ProjectBuilderProps {
  onOpenRFQ?: () => void;
}

export const ProjectBuilder: React.FC<ProjectBuilderProps> = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [bedCapacity, setBedCapacity] = useState<number>(150);
  const [facilityArea, setFacilityArea] = useState<number>(45000);

  const [builderState, setBuilderState] = useState<ProjectBuilderState>({
    sector: "Hospital & Healthcare Facility",
    requirementType: "Greenfield / Turnkey Facility",
    services: [
      "Civil & Structural Works",
      "Modular Operation Theatres (OT)",
      "Medical Gas Pipeline (MGPS)",
      "Central HVAC & Air Handling"
    ],
    estimatedTimeline: "6 - 12 Months",
    projectScale: "₹5 Crores - ₹25 Crores",
    location: "",
    organization: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    notes: ""
  });

  const toggleService = (srv: string) => {
    if (builderState.services.includes(srv)) {
      setBuilderState({
        ...builderState,
        services: builderState.services.filter((s) => s !== srv)
      });
    } else {
      setBuilderState({
        ...builderState,
        services: [...builderState.services, srv]
      });
    }
  };

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(4, prev + 1));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="project-builder" className="py-24 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-[#008744] text-xs font-mono font-bold tracking-wider uppercase">
            <Sliders className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Interactive Scope Configurator</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            BUILD YOUR PROJECT
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Configure your sector, project nature, capacity scale, and multi-disciplinary services in 4 simple steps to generate a structured institutional execution package.
          </p>
        </div>

        {/* Wizard Container */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl max-w-5xl mx-auto">
          {/* Step Progress Indicators */}
          <div className="grid grid-cols-4 gap-2 mb-10 pb-6 border-b border-slate-100 text-xs font-mono">
            {[
              { num: 1, label: "Sector Domain" },
              { num: 2, label: "Scale & Nature" },
              { num: 3, label: "Services Matrix" },
              { num: 4, label: "Summary & RFQ" }
            ].map((step) => {
              const isActive = step.num === currentStep;
              const isPast = step.num < currentStep;
              return (
                <div key={step.num} className="text-center space-y-1">
                  <div className={`w-8 h-8 rounded-full mx-auto flex items-center justify-center font-bold transition-all ${
                    isActive
                      ? "bg-[#008744] text-white ring-4 ring-emerald-100"
                      : isPast
                      ? "bg-emerald-100 text-[#008744]"
                      : "bg-slate-100 text-slate-400"
                  }`}>
                    {isPast ? <Check className="w-4 h-4" /> : step.num}
                  </div>
                  <span className={`block text-[11px] font-bold ${isActive ? "text-slate-900" : "text-slate-400"}`}>
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-[#008744] rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">PROJECT CONFIGURATION LOGGED</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Your custom project package has been generated under reference <span className="font-mono text-[#008744] font-bold">HS-BLD-2026-{(Math.random() * 8999 + 1000).toFixed(0)}</span>. Our institutional estimating team will formulate a preliminary execution schedule.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setCurrentStep(1);
                }}
                className="mt-6 px-6 py-2.5 bg-[#008744] text-white font-bold rounded-xl text-xs"
              >
                Configure Another Project
              </button>
            </div>
          ) : (
            <div>
              {/* STEP 1 */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Select Project Sector Vertical</h3>
                    <p className="text-xs text-slate-500 font-mono mt-0.5">STEP 1 OF 4: PRIMARY INFRASTRUCTURE CLUSTER</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {BUILDER_SECTORS.map((sec) => {
                      const isSelected = builderState.sector === sec.name;
                      return (
                        <button
                          key={sec.id}
                          onClick={() => setBuilderState({ ...builderState, sector: sec.name })}
                          className={`p-4 rounded-2xl border text-left transition-all ${
                            isSelected
                              ? "bg-emerald-50 border-[#008744] ring-2 ring-emerald-200"
                              : "bg-white border-slate-200 hover:border-slate-300"
                          }`}
                        >
                          <div className="text-xs font-bold text-slate-900">{sec.name}</div>
                          <div className="text-[11px] text-slate-500 mt-1">{sec.desc}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Project Nature & Capacity Scale</h3>
                    <p className="text-xs text-slate-500 font-mono mt-0.5">STEP 2 OF 4: SCOPE PARAMETERS</p>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-mono text-slate-700 uppercase font-bold block">Requirement Type</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {BUILDER_REQUIREMENT_TYPES.map((req) => (
                        <button
                          key={req.id}
                          onClick={() => setBuilderState({ ...builderState, requirementType: req.name })}
                          className={`p-3.5 rounded-xl border text-left transition-all ${
                            builderState.requirementType === req.name
                              ? "bg-emerald-50 border-[#008744] ring-2 ring-emerald-200"
                              : "bg-white border-slate-200 hover:border-slate-300"
                          }`}
                        >
                          <div className="text-xs font-bold text-slate-900">{req.name}</div>
                          <div className="text-[11px] text-slate-500 mt-0.5">{req.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Sliders */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-slate-700 font-bold">ESTIMATED CAPACITY (BEDS / ROOMS)</span>
                        <span className="text-[#008744] font-extrabold text-sm">{bedCapacity} Units</span>
                      </div>
                      <input
                        type="range"
                        min="20"
                        max="500"
                        step="10"
                        value={bedCapacity}
                        onChange={(e) => setBedCapacity(Number(e.target.value))}
                        className="w-full accent-[#008744]"
                      />
                      <span className="text-[10px] text-slate-400 font-mono">Slide to scale equipment loads & fit-out sizing</span>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-slate-700 font-bold">FACILITY FLOOR AREA</span>
                        <span className="text-[#008744] font-extrabold text-sm">{facilityArea.toLocaleString()} Sq.Ft</span>
                      </div>
                      <input
                        type="range"
                        min="5000"
                        max="250000"
                        step="5000"
                        value={facilityArea}
                        onChange={(e) => setFacilityArea(Number(e.target.value))}
                        className="w-full accent-[#008744]"
                      />
                      <span className="text-[10px] text-slate-400 font-mono">Governs HVAC tonnage, civil substructure & MEP</span>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Select Disciplines for Unified Coordination</h3>
                      <p className="text-xs text-slate-500 font-mono mt-0.5">STEP 3 OF 4: MULTI-SECTOR SERVICE MATRIX</p>
                    </div>
                    <span className="text-xs font-mono text-[#008744] font-bold">
                      {builderState.services.length} Disciplines Selected
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {BUILDER_SERVICES.map((srv) => {
                      const isSelected = builderState.services.includes(srv.name);
                      return (
                        <button
                          key={srv.id}
                          onClick={() => toggleService(srv.name)}
                          className={`p-3.5 rounded-xl border text-left transition-all flex items-start space-x-3 ${
                            isSelected
                              ? "bg-emerald-50 border-[#008744] ring-2 ring-emerald-200"
                              : "bg-white border-slate-200 hover:border-slate-300"
                          }`}
                        >
                          <div className={`w-4 h-4 rounded border mt-0.5 flex items-center justify-center flex-shrink-0 ${
                            isSelected ? "bg-[#008744] border-[#008744] text-white" : "border-slate-300 bg-white"
                          }`}>
                            {isSelected && <Check className="w-3 h-3" />}
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900">{srv.name}</div>
                            <div className="text-[10px] text-slate-500 font-mono uppercase">{srv.category}</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 4 */}
              {currentStep === 4 && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Project Execution Package Summary</h3>
                    <p className="text-xs text-slate-500 font-mono mt-0.5">STEP 4 OF 4: SUBMIT FOR TECHNICAL REVIEW</p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-3 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div><span className="text-slate-500">Sector:</span> <span className="text-slate-900 font-bold">{builderState.sector}</span></div>
                      <div><span className="text-slate-500">Requirement:</span> <span className="text-slate-900 font-bold">{builderState.requirementType}</span></div>
                      <div><span className="text-slate-500">Scale:</span> <span className="text-[#008744] font-bold">{bedCapacity} Beds • {facilityArea.toLocaleString()} Sq.Ft</span></div>
                      <div><span className="text-slate-500">Execution Partner:</span> <span className="text-[#008744] font-bold">HS ONE STEP SOLUTIONS</span></div>
                    </div>
                    <div className="pt-2 border-t border-slate-200">
                      <span className="text-slate-500 block mb-1 font-mono">SELECTED INTEGRATED DISCIPLINES ({builderState.services.length}):</span>
                      <div className="flex flex-wrap gap-1.5">
                        {builderState.services.map((s, i) => (
                          <span key={i} className="px-2.5 py-0.5 rounded-full bg-white border border-slate-300 text-slate-800 text-[11px] font-medium">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-700 uppercase font-bold mb-1">Organization / Entity *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Metro Health Group"
                        value={builderState.organization}
                        onChange={(e) => setBuilderState({ ...builderState, organization: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:border-[#008744]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-700 uppercase font-bold mb-1">Contact Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="procurement@entity.com"
                        value={builderState.contactEmail}
                        onChange={(e) => setBuilderState({ ...builderState, contactEmail: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:border-[#008744]"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-end">
                    <button
                      type="submit"
                      className="px-8 py-3.5 bg-gradient-to-r from-[#008744] to-[#065F38] text-white font-bold rounded-xl text-xs tracking-wider shadow-md shadow-emerald-700/20 flex items-center space-x-2"
                    >
                      <span>SUBMIT FOR MASTER PROPOSAL</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}

              {/* Step Navigation Buttons */}
              <div className="flex items-center justify-between pt-8 mt-8 border-t border-slate-100">
                <button
                  disabled={currentStep === 1}
                  onClick={handlePrev}
                  className="px-5 py-2.5 rounded-xl border border-slate-300 text-xs font-mono text-slate-700 hover:bg-slate-100 disabled:opacity-30 font-bold flex items-center space-x-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>PREVIOUS</span>
                </button>

                {currentStep < 4 && (
                  <button
                    onClick={handleNext}
                    className="px-6 py-2.5 bg-[#008744] hover:bg-[#065F38] text-white font-bold rounded-xl text-xs font-mono tracking-wider flex items-center space-x-1.5 shadow-sm"
                  >
                    <span>CONTINUE TO STEP {currentStep + 1}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
""")

# 2. GovernmentPublicPrivate.tsx
with open(os.path.join(sections, "GovernmentPublicPrivate.tsx"), "w", encoding="utf-8") as f:
    f.write(r"""import React from "react";
import { Landmark, Building2, Briefcase, CheckCircle2, ArrowRight } from "lucide-react";

interface GovernmentPublicPrivateProps {
  onOpenRFQ: (sectorId?: string) => void;
}

export const GovernmentPublicPrivate: React.FC<GovernmentPublicPrivateProps> = ({ onOpenRFQ }) => {
  const pillars = [
    {
      title: "Government Sector",
      icon: <Landmark className="w-6 h-6 text-[#008744]" />,
      desc: "Structured for high-volume tender compliance, GeM procurement benchmarks, CPWD standards, and transparent public accountability.",
      points: [
        "Full BOQ & technical specification compliance",
        "Public health mission & hospital turnkey tenders",
        "State infrastructure & departmental works",
        "Statutory documentation & audit-ready traceability"
      ],
      cta: "Government Procurement Desk"
    },
    {
      title: "Public Sector",
      icon: <Building2 className="w-6 h-6 text-[#D4AF37]" />,
      desc: "Supporting public sector undertakings, municipal authorities, state universities, and community health networks with single-source execution.",
      points: [
        "Medical college & hospital turnkey fit-outs",
        "Institutional furniture & surface infrastructure",
        "Heavy dietary kitchen & utility plants",
        "Staged milestone delivery under master supervision"
      ],
      cta: "Public Sector Inquiries"
    },
    {
      title: "Private Sector",
      icon: <Briefcase className="w-6 h-6 text-blue-700]" />,
      desc: "Empowering private healthcare networks, commercial real estate developers, hotel chains, and industrial corporations with accelerated time-to-market.",
      points: [
        "Rapid greenfield hospital & clinic development",
        "Premium commercial interior & marble surfaces",
        "Modular cleanroom & advanced MedTech deployment",
        "Predictable CAPEX with zero vendor dispute delays"
      ],
      cta: "Private Enterprise Solutions"
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#008744] text-xs font-mono font-bold tracking-wider uppercase">
            <span>Institutional Governance</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            SERVING GOVERNMENT, PUBLIC & PRIVATE SECTOR
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Tailored commercial models, compliance frameworks, and execution protocols designed specifically for the unique operational demands of each sector.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-5">
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl w-fit">
                  {p.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{p.title}</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">{p.desc}</p>
                </div>
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {p.points.map((pt, j) => (
                    <div key={j} className="flex items-start space-x-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#008744] flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => onOpenRFQ()}
                  className="w-full py-3 bg-slate-50 hover:bg-[#008744] text-slate-800 hover:text-white border border-slate-200 font-bold rounded-xl text-xs font-mono tracking-wider transition-all flex items-center justify-center space-x-1.5"
                >
                  <span>{p.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
""")

# 3. GlobalSupplyMap.tsx
with open(os.path.join(sections, "GlobalSupplyMap.tsx"), "w", encoding="utf-8") as f:
    f.write(r"""import React from "react";
import { Globe, PackageCheck, Anchor, Truck } from "lucide-react";

export const GlobalSupplyMap: React.FC = () => {
  const corridors = [
    { region: "India & South Asia", hub: "National Central Warehouse & Fabrication Yards", focus: "Structural Steel, Hospital Furniture, SS 304 Kitchen Equipment & Turnkey Civil Contracting" },
    { region: "Middle East / UAE", hub: "Regional Project Hub (Dubai / Abu Dhabi)", focus: "High-Grade Architectural Marble, Granite, Critical Energy Substations & Fast-Track Logistics" },
    { region: "Europe & Germany", hub: "Precision Engineering & MedTech Corridor", focus: "Class 100 Laminar Plenums, Diagnostic Imaging, MGPS Valves & High-Acuity ICU Telemetry" },
    { region: "Asia-Pacific", hub: "Advanced Manufacturing & Cleanroom Electronics", focus: "LED OT Lighting, Laboratory Centrifuges, Anti-Microbial Homogeneous Vinyl & BMS Automation" },
    { region: "North America", hub: "Specialized Clinical Devices & Standards", focus: "High-End Electrosurgical Units, Cryogenic Blood Preservation & FM-200 Gas Suppression" },
    { region: "Africa Corridor", hub: "Institutional Health & Infrastructure Projects", focus: "Turnkey Modular Field Hospitals, Disaster Response Units & Off-Grid Solar Energy Plants" }
  ];

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-[#008744] text-xs font-mono font-bold tracking-wider uppercase">
            <Globe className="w-3.5 h-3.5" />
            <span>Sourcing & Trade Corridors</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            A GLOBAL NETWORK BUILT FOR SCALE
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            HS One Step Solutions consolidates direct factory pricing, staged international shipping, and synchronized site delivery across key global supply corridors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {corridors.map((c, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#008744] uppercase">{c.region}</span>
                <span className="text-[10px] font-mono text-slate-400">CORRIDOR 0{i + 1}</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">{c.hub}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{c.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
""")

# 4. TrustPillars.tsx
with open(os.path.join(sections, "TrustPillars.tsx"), "w", encoding="utf-8") as f:
    f.write(r"""import React from "react";
import { ShieldCheck, Layers, Award, Clock, Users, Building } from "lucide-react";
import { METRIC_PLACEHOLDERS } from "../../data/metricsData";

export const TrustPillars: React.FC = () => {
  const pillars = [
    { icon: <ShieldCheck className="w-6 h-6 text-[#008744]" />, title: "Single Accountability", desc: "No multi-contractor blame games. ONE contract and ONE dedicated team accountable for complete site delivery." },
    { icon: <Layers className="w-6 h-6 text-[#008744]" />, title: "12-Sector Multi-Disciplinary Scope", desc: "Civil, medical equipment, commercial kitchens, furniture, energy, and life safety synchronized under one PMO." },
    { icon: <Award className="w-6 h-6 text-[#D4AF37]" />, title: "Tier-1 Quality & Global Standards", desc: "Rigorous ISO, NABH, HTM-0301, and CPWD compliance built into every engineering milestone." },
    { icon: <Clock className="w-6 h-6 text-[#008744]" />, title: "Synchronized Staged Delivery", desc: "Equipment arrives precisely when civil and MEP readiness is certified—eliminating premature storage damage." },
    { icon: <Users className="w-6 h-6 text-[#008744]" />, title: "Government & Enterprise Rigor", desc: "Proven capability to execute large-scale institutional tenders, public health facilities, and corporate campuses." },
    { icon: <Building className="w-6 h-6 text-[#D4AF37]" />, title: "Turnkey Sign-Off Guarantee", desc: "From raw site excavation to complete testing, certification, user training, and operational handover." }
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#008744] text-xs font-mono font-bold tracking-wider uppercase">
            <span>Corporate Governance</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            WHY CLIENTS CHOOSE HS ONE STEP
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pil, i) => (
            <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-3 shadow-sm hover:shadow-md transition-all">
              <div className="p-3 bg-white border border-slate-200 rounded-2xl w-fit shadow-sm">
                {pil.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{pil.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">{pil.desc}</p>
            </div>
          ))}
        </div>

        {/* Verified CMS Metrics Placeholder Bar */}
        <div className="mt-16 bg-slate-900 text-white rounded-3xl p-8 grid grid-cols-2 md:grid-cols-5 gap-6 text-center shadow-xl">
          {METRIC_PLACEHOLDERS.map((m, i) => (
            <div key={i} className="space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#D4AF37] block">
                {m.value}
              </span>
              <span className="text-xs font-bold text-slate-300 block">{m.label}</span>
              <span className="text-[10px] text-slate-500 font-mono block">{m.footnote}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
""")

# 5. CaseStudies.tsx
with open(os.path.join(sections, "CaseStudies.tsx"), "w", encoding="utf-8") as f:
    f.write(r"""import React from "react";
import { Building2, MapPin } from "lucide-react";
import { CASE_STUDIES } from "../../data/caseStudiesData";

export const CaseStudies: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-[#008744] text-xs font-mono font-bold tracking-wider uppercase">
            <span>Project Track Record</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            PROJECT PROFILES & CAPABILITY CASE STUDIES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((cs) => (
            <div key={cs.id} className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-sm flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-amber-100 text-[#9A741E] font-bold">
                    {cs.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{cs.clientType}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-tight">{cs.title}</h3>
                <div className="flex items-center space-x-1.5 text-xs text-slate-500 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-[#008744]" />
                  <span>{cs.location}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{cs.projectScope}</p>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs font-mono text-slate-500 flex items-center justify-between">
                <span>Timeline: {cs.projectTimeline}</span>
                <span className="text-[#008744] font-bold">TURNKEY SCOPE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
""")

# 6. TechIntelligence.tsx
with open(os.path.join(sections, "TechIntelligence.tsx"), "w", encoding="utf-8") as f:
    f.write(r"""import React from "react";
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
""")

# 7. AboutMission.tsx
with open(os.path.join(sections, "AboutMission.tsx"), "w", encoding="utf-8") as f:
    f.write(r"""import React from "react";
import { ShieldCheck, Target, Award, ArrowRight } from "lucide-react";

interface AboutMissionProps {
  onOpenRFQ: () => void;
}

export const AboutMission: React.FC<AboutMissionProps> = ({ onOpenRFQ }) => {
  return (
    <section id="about" className="py-24 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-[#008744] text-xs font-mono font-bold tracking-wider uppercase">
              <span>Corporate Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              BUILT AROUND ONE SIMPLE IDEA.
            </h2>

            <p className="text-base text-slate-700 leading-relaxed">
              Complex capital projects fail not from a lack of equipment, but from the friction of coordinating dozens of disconnected suppliers, contractors, and installers.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              <strong className="text-slate-900 font-semibold">HS One Step Solutions</strong> was created to eliminate this structural friction. We combine civil construction, medical engineering, life safety, commercial kitchens, stone surfaces, and energy solutions under a single, highly accountable master execution partner.
            </p>

            <div className="pt-2 flex items-center space-x-4">
              <button
                onClick={onOpenRFQ}
                className="px-6 py-3.5 bg-gradient-to-r from-[#008744] to-[#065F38] text-white font-bold rounded-xl text-xs tracking-wider shadow-md shadow-emerald-700/20 flex items-center space-x-2"
              >
                <span>INITIATE PROJECT CONSULTATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-8 shadow-xl space-y-6 text-center">
            <img src="/logo.png" alt="HS ONE STEP SOLUTIONS" className="h-20 mx-auto object-contain" />
            <h3 className="text-xl font-bold text-slate-900">“YOUR PLANS, OUR GOALS”</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-mono max-w-md mx-auto">
              Our core promise is seamless execution: whether developing a 200-bed hospital from raw earth or executing an institutional procurement tender, we make your vision an operational reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
""")

# 8. ContactLeadGen.tsx
with open(os.path.join(sections, "ContactLeadGen.tsx"), "w", encoding="utf-8") as f:
    f.write(r"""import React, { useState } from "react";
import { Send, CheckCircle2, ArrowRight, ShieldCheck, Mail, Phone, MapPin, Building2 } from "lucide-react";
import { SECTORS } from "../../data/sectorsData";

export const ContactLeadGen: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    sector: "hospital-development",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#008744] text-xs font-mono font-bold tracking-wider uppercase">
              <span>Direct Institutional Channel</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              TELL US WHAT YOU NEED.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Connect with our master project execution desk to review your tender documents, engineering BOQs, or custom facility development scope.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-100 text-xs font-mono text-slate-600">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#008744]" />
                <span>rfq@hsonestep.com • info@hsonestep.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#008744]" />
                <span>[Institutional Support Phone Placeholder]</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-[#008744]" />
                <span>[Corporate Headquarters & Registered Address]</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#008744] mx-auto mb-2" />
                <h3 className="text-xl font-bold text-slate-900">INQUIRY RECEIVED</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Thank you. Our institutional project desk has logged your request and will contact you within 24 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 bg-[#008744] text-white font-bold rounded-xl text-xs"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-700 font-bold mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. / Er. / Mr. Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:border-[#008744]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-700 font-bold mb-1">Organization *</label>
                    <input
                      type="text"
                      required
                      placeholder="Hospital Trust / Enterprise"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:border-[#008744]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-700 font-bold mb-1">Official Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:border-[#008744]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-700 font-bold mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 / +971 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:border-[#008744]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 font-bold mb-1">Sector of Interest *</label>
                  <select
                    value={formData.sector}
                    onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:border-[#008744]"
                  >
                    {SECTORS.map((sec) => (
                      <option key={sec.id} value={sec.id}>{sec.title}</option>
                    ))}
                    <option value="multi-sector">Multi-Sector Turnkey Project</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 font-bold mb-1">Project Scope & Specifications</label>
                  <textarea
                    rows={3}
                    placeholder="Provide overview of scope, capacity requirements, or tender reference..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:border-[#008744]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-[#008744] to-[#065F38] text-white font-bold rounded-xl text-xs tracking-wider shadow-md shadow-emerald-700/20 flex items-center justify-center space-x-2"
                  >
                    <span>TRANSMIT INQUIRY</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
""")

# 9. App.tsx
with open(os.path.join(base, "App.tsx"), "w", encoding="utf-8") as f:
    f.write(r"""import React, { useState } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { ModalRFQ } from "./components/layout/ModalRFQ";
import { HeroExperience } from "./components/hero/HeroExperience";
import { CategoryStripCarousel } from "./components/sections/CategoryStripCarousel";
import { HospitalFloorplanExplorer } from "./components/sections/HospitalFloorplanExplorer";
import { VendorComparison } from "./components/sections/VendorComparison";
import { OneStepModel } from "./components/sections/OneStepModel";
import { SectorsGrid } from "./components/sections/SectorsGrid";
import { HospitalEcosystem } from "./components/sections/HospitalEcosystem";
import { ProjectDashboardConcept } from "./components/sections/ProjectDashboardConcept";
import { ProcurementCatalog } from "./components/sections/ProcurementCatalog";
import { ProjectBuilder } from "./components/sections/ProjectBuilder";
import { GovernmentPublicPrivate } from "./components/sections/GovernmentPublicPrivate";
import { GlobalSupplyMap } from "./components/sections/GlobalSupplyMap";
import { TrustPillars } from "./components/sections/TrustPillars";
import { CaseStudies } from "./components/sections/CaseStudies";
import { TechIntelligence } from "./components/sections/TechIntelligence";
import { AboutMission } from "./components/sections/AboutMission";
import { ContactLeadGen } from "./components/sections/ContactLeadGen";

export const App: React.FC = () => {
  const [rfqModalOpen, setRfqModalOpen] = useState(false);
  const [selectedRfqSector, setSelectedRfqSector] = useState<string | undefined>(undefined);
  const [selectedRfqProduct, setSelectedRfqProduct] = useState<string | undefined>(undefined);

  const handleOpenRFQ = (sectorId?: string, productName?: string) => {
    setSelectedRfqSector(sectorId);
    setSelectedRfqProduct(productName);
    setRfqModalOpen(true);
  };

  const handleOpenProjectBuilder = () => {
    const el = document.getElementById("project-builder");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectSectorFromCarousel = (sectorId: string) => {
    const el = document.getElementById(`sector-${sectorId}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-emerald-500 selection:text-white">
      {/* Navbar with Official Brand Logo */}
      <Navbar
        onOpenRFQ={handleOpenRFQ}
        onOpenProjectBuilder={handleOpenProjectBuilder}
      />

      <main className="flex-1">
        {/* Hero Experience */}
        <HeroExperience
          onOpenRFQ={() => handleOpenRFQ()}
          onOpenProjectBuilder={handleOpenProjectBuilder}
        />

        {/* Skanvi-Style Category Strip Carousel */}
        <CategoryStripCarousel
          onSelectSector={handleSelectSectorFromCarousel}
        />

        {/* Interactive CAD Hospital Floorplan Explorer */}
        <HospitalFloorplanExplorer
          onOpenRFQ={handleOpenRFQ}
        />

        {/* Execution Model Comparison */}
        <VendorComparison />

        {/* The One Step Model (8 Stages) */}
        <OneStepModel />

        {/* 12 Sectors Grid with Skanvi-Style Cards & Deep-Dive Modals */}
        <SectorsGrid
          onOpenRFQ={handleOpenRFQ}
        />

        {/* Flagship Turnkey Hospital Ecosystem (15 Stages) */}
        <HospitalEcosystem
          onOpenRFQ={handleOpenRFQ}
        />

        {/* Simulated Central Project Telemetry Dashboard */}
        <ProjectDashboardConcept />

        {/* Institutional Procurement Catalog & BOQ Selector */}
        <ProcurementCatalog
          onOpenRFQ={handleOpenRFQ}
        />

        {/* Interactive Project Builder (4-Step Wizard) */}
        <ProjectBuilder
          onOpenRFQ={() => handleOpenRFQ()}
        />

        {/* Tri-Pillar: Government, Public & Private Sector */}
        <GovernmentPublicPrivate
          onOpenRFQ={handleOpenRFQ}
        />

        {/* Global Sourcing Network Map */}
        <GlobalSupplyMap />

        {/* Corporate Trust Pillars & Metrics */}
        <TrustPillars />

        {/* Case Studies */}
        <CaseStudies />

        {/* AI Digital Layer Preview */}
        <TechIntelligence />

        {/* Corporate Mission & Story */}
        <AboutMission
          onOpenRFQ={() => handleOpenRFQ()}
        />

        {/* Institutional Contact & Lead Desk */}
        <ContactLeadGen />
      </main>

      {/* Corporate Footer with Official Logo & Sitemap */}
      <Footer
        onOpenRFQ={handleOpenRFQ}
      />

      {/* Global RFQ / BOQ Modal */}
      <ModalRFQ
        isOpen={rfqModalOpen}
        onClose={() => setRfqModalOpen(false)}
        initialSector={selectedRfqSector}
        initialProduct={selectedRfqProduct}
      />
    </div>
  );
};

export default App;
""")

print("Generated ProjectBuilder, Government, Map, Trust, CaseStudies, Tech, About, Contact & App successfully!")
