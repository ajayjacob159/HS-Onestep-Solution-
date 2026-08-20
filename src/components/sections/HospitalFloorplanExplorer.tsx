import React, { useState } from "react";
import { 
  Building2, 
  Crosshair, 
  HeartPulse, 
  Activity, 
  Wind, 
  UtensilsCrossed, 
  Microscope, 
  Droplet, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Info,
  Layers,
  Cpu
} from "lucide-react";

interface DepartmentHotspot {
  id: string;
  name: string;
  shortDesc: string;
  x: number; // percentage coordinates
  y: number;
  area: string;
  keyEquipment: string[];
  mepSpecs: string;
  compliance: string;
  image: string;
  color: string;
}

const DEPARTMENTS: DepartmentHotspot[] = [
  {
    id: "ot",
    name: "Modular Operation Theatres (OT 1-4)",
    shortDesc: "Class 100 sterile surgical suites with laminar flow and surgeon control console.",
    x: 24,
    y: 28,
    area: "650 Sq.Ft / Suite",
    keyEquipment: [
      "Laminar Air Flow Ceiling Plenums (HEPA H14)",
      "Motorized Anesthesia & Surgical Pendants",
      "Integrated Touchscreen Surgeon Control Panels",
      "Hermetic Automatic Sliding Lead-Lined Doors"
    ],
    mepSpecs: "ISO Class 5 Air Purity • 25 Air Changes/Hr • Positive Pressure +15 Pa",
    compliance: "NABH / HTM-0301 Surgical Suite Standards",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    color: "#008744"
  },
  {
    id: "icu",
    name: "Intensive Care Unit (ICU / CCU)",
    shortDesc: "24-Bed High-Dependency Critical Care with centralized nursing telemetry.",
    x: 65,
    y: 28,
    area: "4,200 Sq.Ft",
    keyEquipment: [
      "Motorized 5-Function Critical Care Beds",
      "High-Acuity Multi-Parameter Patient Monitors",
      "Ceiling Bridge Pendants with Gas Outlets",
      "Centralized Nursing Telemetry Surveillance Hub"
    ],
    mepSpecs: "100% Emergency UPS Power • Dual Medical Oxygen Terminals • Isolated Grounding",
    compliance: "High-Acuity Critical Care Life Support Norms",
    image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=1200&q=80",
    color: "#008744"
  },
  {
    id: "mgps",
    name: "Medical Gas Pipeline System (MGPS)",
    shortDesc: "Centralized manifold room with liquid oxygen, vacuum, and digital alarm valves.",
    x: 88,
    y: 32,
    area: "900 Sq.Ft",
    keyEquipment: [
      "Liquid Medical Oxygen (LMO) Storage Tank",
      "Medical Air Compressor & Vacuum Pump Skids",
      "Area Valve Service Units (AVSU) with Digital Sensors",
      "Medical Grade Degreased Copper Distribution Pipe"
    ],
    mepSpecs: "BS EN 13348 Degreased Copper • Dual Redundant Manifolds • 4.2 Bar Operating",
    compliance: "HTM 02-01 / NFPA 99 Medical Gas Code",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    color: "#D4AF37"
  },
  {
    id: "radiology",
    name: "Diagnostic Radiology & Imaging",
    shortDesc: "Lead-shielded MRI, CT Scan, and Digital Radiography (DR) suites.",
    x: 20,
    y: 72,
    area: "3,500 Sq.Ft",
    keyEquipment: [
      "1.5T / 3.0T MRI with Copper RF Shielding Cage",
      "128-Slice Low-Dose CT Scanner Suite",
      "Ceiling-Suspended Digital Radiography (DR)",
      "High-Definition PACS Diagnostic Workstations"
    ],
    mepSpecs: "RF Shielding • 2mm Lead Lining • High-Tonnage Chilled Water Cooling",
    compliance: "AERB / Radiation Safety Clearances",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    color: "#008744"
  },
  {
    id: "blood-bank",
    name: "Blood Bank & Cryogenic Cold Chain",
    shortDesc: "Specialized -80°C plasma freezers, component centrifuges, and donor lounges.",
    x: 48,
    y: 72,
    area: "1,800 Sq.Ft",
    keyEquipment: [
      "Ultra-Low Temperature (-86°C) Plasma Freezers",
      "Automated Blood Component Centrifuges",
      "Controlled Temperature Platelet Agitators",
      "24/7 Redundant Telemetry Temperature Loggers"
    ],
    mepSpecs: "24/7 Unbroken Cold Chain • Dual Compressor Backups • SMS Alert System",
    compliance: "National Blood Policy & DCGI Guidelines",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80",
    color: "#D4AF37"
  },
  {
    id: "kitchen",
    name: "Commercial Dietary Kitchen & Dining",
    shortDesc: "High-capacity food-grade stainless steel kitchen with cold rooms & warewashing.",
    x: 80,
    y: 72,
    area: "2,800 Sq.Ft",
    keyEquipment: [
      "AISI 304 Food-Grade Stainless Steel Prep Lines",
      "Walk-In Chiller & Freezer Storage Rooms",
      "Commercial Combi-Steamers & Tilting Kettles",
      "Fire-Safe Kitchen Exhaust Hoods with Ansul Protection"
    ],
    mepSpecs: "SS 304 Construction • Grease Interceptors • Wet Chemical Fire Suppression",
    compliance: "HACCP Food Safety & NBC Fire Norms",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80",
    color: "#008744"
  }
];

interface HospitalFloorplanExplorerProps {
  onOpenRFQ: (sectorId?: string) => void;
}

export const HospitalFloorplanExplorer: React.FC<HospitalFloorplanExplorerProps> = ({ onOpenRFQ }) => {
  const [selectedDeptId, setSelectedDeptId] = useState<string>("ot");
  const activeDept = DEPARTMENTS.find(d => d.id === selectedDeptId) || DEPARTMENTS[0];

  return (
    <section id="floorplan" className="py-24 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#008744] text-xs font-mono font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Interactive CAD Floorplan Explorer</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            INSPECT HOSPITAL DEPARTMENTS & SCOPE
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Click on any department hotspot on the architectural blueprint below to inspect room layout, integrated MEP requirements, equipment packages, and compliance standards.
          </p>
        </div>

        {/* Blueprint Explorer Shell */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Interactive 2D CAD Blueprint Canvas */}
            <div className="lg:col-span-7 bg-white border border-slate-300 rounded-2xl p-6 relative overflow-hidden shadow-inner min-h-[380px] flex flex-col justify-between">
              {/* CAD Grid Lines */}
              <div className="absolute inset-0 bg-blueprint-light opacity-80 pointer-events-none" />

              {/* Blueprint Title & Legend */}
              <div className="relative z-10 flex items-center justify-between border-b border-slate-200 pb-3 mb-4 text-xs font-mono">
                <span className="font-bold text-[#008744] flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#008744] animate-ping inline-block" />
                  <span>MASTER HOSPITAL FLOORPLAN (LEVEL 02)</span>
                </span>
                <span className="text-slate-400 hidden sm:inline">CLICK HOTSPOTS TO INSPECT</span>
              </div>

              {/* Interactive Floorplan Layout Box */}
              <div className="relative z-10 w-full h-64 sm:h-72 border-2 border-dashed border-slate-300 rounded-xl bg-slate-50/70 p-4">
                {/* Visual Rooms / Compartments */}
                <div className="absolute top-4 left-4 w-36 h-28 border border-emerald-300 bg-emerald-50/50 rounded-lg p-2 text-[10px] font-mono text-emerald-800">
                  <span>OT BLOCK (4 SUITES)</span>
                </div>

                <div className="absolute top-4 right-16 w-44 h-28 border border-emerald-300 bg-emerald-50/50 rounded-lg p-2 text-[10px] font-mono text-emerald-800">
                  <span>ICU / CCU (24 BEDS)</span>
                </div>

                <div className="absolute top-4 right-3 w-10 h-28 border border-amber-300 bg-amber-50/50 rounded-lg p-1 text-[8px] font-mono text-amber-800">
                  <span>MGPS</span>
                </div>

                <div className="absolute bottom-4 left-4 w-40 h-24 border border-emerald-300 bg-emerald-50/50 rounded-lg p-2 text-[10px] font-mono text-emerald-800">
                  <span>RADIOLOGY & MRI</span>
                </div>

                <div className="absolute bottom-4 left-48 w-36 h-24 border border-amber-300 bg-amber-50/50 rounded-lg p-2 text-[10px] font-mono text-amber-800">
                  <span>BLOOD BANK</span>
                </div>

                <div className="absolute bottom-4 right-4 w-40 h-24 border border-emerald-300 bg-emerald-50/50 rounded-lg p-2 text-[10px] font-mono text-emerald-800">
                  <span>DIETARY KITCHEN</span>
                </div>

                {/* Clickable Hotspot Pins */}
                {DEPARTMENTS.map((dept) => {
                  const isSelected = dept.id === selectedDeptId;
                  return (
                    <button
                      key={dept.id}
                      onClick={() => setSelectedDeptId(dept.id)}
                      style={{ left: `${dept.x}%`, top: `${dept.y}%` }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 group transition-all duration-300 ${
                        isSelected ? "scale-125" : "hover:scale-115"
                      }`}
                    >
                      <div className={`p-2.5 rounded-full shadow-lg border-2 transition-all ${
                        isSelected
                          ? "bg-[#008744] text-white border-white ring-4 ring-emerald-300"
                          : "bg-white text-[#008744] border-[#008744] hover:bg-[#008744] hover:text-white"
                      }`}>
                        <Crosshair className="w-4 h-4" />
                      </div>
                      <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1.5 px-2 py-0.5 rounded bg-slate-900 text-white text-[9px] font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
                        {dept.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Floorplan Footer Selector Tabs */}
              <div className="relative z-10 pt-4 mt-3 border-t border-slate-200 flex items-center space-x-2 overflow-x-auto text-xs font-mono">
                {DEPARTMENTS.map((dept) => (
                  <button
                    key={dept.id}
                    onClick={() => setSelectedDeptId(dept.id)}
                    className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                      dept.id === selectedDeptId
                        ? "bg-[#008744] text-white font-bold shadow-sm"
                        : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {dept.id.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Selected Department Detail Inspector */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm space-y-5">
              <div className="relative h-44 rounded-xl overflow-hidden shadow-sm">
                <img
                  src={activeDept.image}
                  alt={activeDept.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-mono text-[#D4AF37] font-bold uppercase block">
                    AREA: {activeDept.area}
                  </span>
                  <h3 className="text-base font-bold leading-tight">{activeDept.name}</h3>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {activeDept.shortDesc}
              </p>

              {/* Equipment Roster */}
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider block">
                  DEPLOYED EQUIPMENT ROSTER:
                </span>
                <div className="space-y-1.5">
                  {activeDept.keyEquipment.map((eq, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#008744] flex-shrink-0 mt-0.5" />
                      <span>{eq}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical MEP Specifications */}
              <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl space-y-1 text-xs">
                <div className="text-[10px] font-mono text-slate-500 uppercase font-bold">MEP / HVAC PARAMETERS:</div>
                <div className="text-slate-800 font-mono text-[11px] font-semibold">{activeDept.mepSpecs}</div>
              </div>

              <button
                onClick={() => onOpenRFQ("hospital-development")}
                className="w-full py-3 bg-gradient-to-r from-[#008744] to-[#065F38] hover:from-[#065F38] hover:to-[#008744] text-white font-bold rounded-xl text-xs tracking-wider transition-all flex items-center justify-center space-x-2 shadow-md"
              >
                <span>REQUEST BOQ SPECIFICATION FOR THIS DEPARTMENT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
