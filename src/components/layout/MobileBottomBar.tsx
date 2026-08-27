import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Sparkles, 
  SlidersHorizontal, 
  FileText, 
  Phone, 
  X, 
  ChevronRight,
  Package,
  Clock,
  Activity
} from "lucide-react";
import { SECTORS } from "../../data/sectorsData";
import { triggerHaptic } from "../../utils/haptics";

interface MobileBottomBarProps {
  onOpenRFQ: (sectorId?: string) => void;
  onOpenProjectBuilder: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  onOpenRFQ,
  onOpenProjectBuilder
}) => {
  const [sectorDrawerOpen, setSectorDrawerOpen] = useState(false);

  return (
    <>
      {/* Sector Quick Drawer on Mobile */}
      {sectorDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm sm:hidden flex flex-col justify-end">
          <div 
            className="bg-white rounded-t-3xl p-5 border-t border-slate-200 max-h-[75vh] overflow-y-auto animate-in slide-in-from-bottom duration-300 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#008744]" />
                <span className="text-xs font-mono font-bold text-slate-900 uppercase">
                  12 Integrated Specialized Sectors
                </span>
              </div>
              <button 
                onClick={() => setSectorDrawerOpen(false)}
                className="p-1.5 rounded-full bg-slate-100 text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-2">
              {SECTORS.map((sec) => (
                <a
                  key={sec.id}
                  href={`/#sector-${sec.id}`}
                  onClick={() => setSectorDrawerOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 active:bg-emerald-50 active:border-[#008744]"
                >
                  <div className="flex items-center space-x-2.5">
                    <div className="w-2 h-2 rounded-full bg-[#008744]" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">{sec.title}</div>
                      <div className="text-[10px] text-slate-500 font-mono">{sec.badge}</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Floating Bottom Quick-Action Bar for Mobile & Android */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200 px-3 py-2 sm:hidden flex items-center justify-around shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        {/* 1. Sectors Drawer */}
        <button
          onClick={() => {
            triggerHaptic(10);
            setSectorDrawerOpen(!sectorDrawerOpen);
          }}
          className="flex flex-col items-center justify-center p-1.5 text-slate-600 active:text-[#008744]"
        >
          <Building2 className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-bold font-mono">Sectors</span>
        </button>

        {/* 2. CAD Floorplan Page Link */}
        <Link
          to="/cad-floorplan"
          onClick={() => triggerHaptic(10)}
          className="flex flex-col items-center justify-center p-1.5 text-slate-600 active:text-[#008744]"
        >
          <Sparkles className="w-5 h-5 mb-0.5 text-[#D4AF37]" />
          <span className="text-[10px] font-bold font-mono">Floorplan</span>
        </Link>

        {/* 3. Center Big RFQ Button */}
        <button
          onClick={() => {
            triggerHaptic(20);
            onOpenRFQ();
          }}
          className="flex flex-col items-center justify-center -mt-5 px-4 py-2 bg-gradient-to-r from-[#008744] to-[#065F38] text-white rounded-2xl shadow-lg shadow-emerald-700/30 active:scale-95 transition-transform"
        >
          <FileText className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-extrabold font-mono uppercase tracking-wider">RFQ / BOQ</span>
        </button>

        {/* 4. Procurement Catalog Page Link */}
        <Link
          to="/procurement"
          onClick={() => triggerHaptic(10)}
          className="flex flex-col items-center justify-center p-1.5 text-slate-600 active:text-[#008744]"
        >
          <Package className="w-5 h-5 mb-0.5 text-slate-700" />
          <span className="text-[10px] font-bold font-mono">Catalog</span>
        </Link>

        {/* 5. Contact Desk */}
        <a
          href="/#contact"
          onClick={() => triggerHaptic(10)}
          className="flex flex-col items-center justify-center p-1.5 text-slate-600 active:text-[#008744]"
        >
          <Phone className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-bold font-mono">Contact</span>
        </a>
      </div>
    </>
  );
};
