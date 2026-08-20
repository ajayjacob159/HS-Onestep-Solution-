import React from "react";
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
