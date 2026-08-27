import React from "react";
import { ProcurementCatalog } from "../components/sections/ProcurementCatalog";
import { Package, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { triggerHaptic } from "../utils/haptics";

interface ProcurementPageProps {
  onOpenRFQ: (sectorId?: string, productName?: string) => void;
}

export const ProcurementPage: React.FC<ProcurementPageProps> = ({ onOpenRFQ }) => {
  return (
    <div className="pt-8 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="space-y-3 max-w-4xl">
          <div className="flex items-center space-x-2 text-xs font-mono text-slate-500">
            <Link to="/" className="hover:text-[#008744]">Home</Link>
            <span>/</span>
            <span className="text-[#008744] font-bold">B2B Procurement Catalog</span>
          </div>

          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-[#008744] text-xs font-mono font-bold tracking-wider uppercase shadow-sm">
            <Package className="w-3.5 h-3.5" />
            <span>Direct Institutional Sourcing Desk</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            INSTITUTIONAL EQUIPMENT & SOFTWARE CATALOG
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Direct OEM sourcing across Medical Devices, Cloud ERPs, AI RPA Engines, Structural Steel, Cleanroom Panels, Hospital Furniture, Fire Safety, and Cold Chain Systems. Select items to build your customized consolidated BOQ.
          </p>
        </div>
      </div>

      <ProcurementCatalog onOpenRFQ={onOpenRFQ} />
    </div>
  );
};
