import React, { useState } from "react";
import { triggerHaptic } from "../../utils/haptics";
import { submitInquiryToEmail } from "../../utils/formSubmit";
import { 
  Check,
  Loader2,
  CheckCircle2,
  RefreshCw, 
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
  REQUIREMENT_TYPES, 
  SERVICE_DISCIPLINES
} from "../../data/projectBuilderData";
import { ProjectBuilderState } from "../../types";

interface ProjectBuilderProps {
  onOpenRFQ?: () => void;
}

export const ProjectBuilder: React.FC<ProjectBuilderProps> = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [bedCapacity, setBedCapacity] = useState<number>(150);
  const [facilityArea, setFacilityArea] = useState<number>(45000);

  const [builderState, setBuilderState] = useState<ProjectBuilderState>({
    sector: "Healthcare & Hospitals",
    requirementType: "Greenfield / Turnkey Facility",
    services: [
      "Civil Construction & Structural Works",
      "Medical, Diagnostic & OT Equipment",
      "Medical Gas Pipeline Systems (MGPS)",
      "MEP, HVAC & Cleanroom Air Conditioning"
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

  const toggleService = (srvLabel: string) => {
    if (builderState.services.includes(srvLabel)) {
      setBuilderState({
        ...builderState,
        services: builderState.services.filter((s) => s !== srvLabel)
      });
    } else {
      setBuilderState({
        ...builderState,
        services: [...builderState.services, srvLabel]
      });
    }
  };

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(4, prev + 1));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    triggerHaptic(15);
    setIsSubmitting(true);

    await submitInquiryToEmail("PROJECT_BUILDER", {
      ...builderState,
      email: builderState.contactEmail,
      projectScale: `${bedCapacity} Beds • ${facilityArea.toLocaleString()} Sq.Ft`,
      message: `Configured Scope: ${builderState.sector} | Services: ${builderState.services.join(", ")}`
    });

    setIsSubmitting(false);
    setSubmitted(true);
    triggerHaptic(30);
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
                      {REQUIREMENT_TYPES.map((req) => (
                        <button
                          key={req.id}
                          onClick={() => setBuilderState({ ...builderState, requirementType: req.label })}
                          className={`p-3.5 rounded-xl border text-left transition-all ${
                            builderState.requirementType === req.label
                              ? "bg-emerald-50 border-[#008744] ring-2 ring-emerald-200"
                              : "bg-white border-slate-200 hover:border-slate-300"
                          }`}
                        >
                          <div className="text-xs font-bold text-slate-900">{req.label}</div>
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
                    {SERVICE_DISCIPLINES.map((srv) => {
                      const isSelected = builderState.services.includes(srv.label);
                      return (
                        <button
                          key={srv.id}
                          onClick={() => toggleService(srv.label)}
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
                            <div className="text-xs font-bold text-slate-900">{srv.label}</div>
                            <div className="text-[10px] text-slate-500 font-mono uppercase">{srv.sector}</div>
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
                      disabled={isSubmitting}
                      className="px-8 py-3.5 bg-gradient-to-r from-[#008744] to-[#065F38] text-white font-bold rounded-xl text-xs tracking-wider shadow-md shadow-emerald-700/20 flex items-center space-x-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>TRANSMITTING TO INFO@HSONESTEPSOLUTIONS.COM...</span>
                        </>
                      ) : (
                        <>
                          <span>SUBMIT FOR MASTER PROPOSAL</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
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
