import React, { useState, useEffect } from "react";
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight, 
  Building2, 
  Sparkles, 
  ShieldCheck, 
  FileText, 
  Layers, 
  Award,
  Phone,
  Mail
} from "lucide-react";
import { SECTORS } from "../../data/sectorsData";
import { triggerHaptic } from "../../utils/haptics";

interface NavbarProps {
  onOpenRFQ: (sectorId?: string) => void;
  onOpenProjectBuilder: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRFQ, onOpenProjectBuilder }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.06)] py-2.5" 
        : "bg-white border-b border-slate-100 py-3.5"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Official Brand Logo */}
        <a 
          href="#" 
          className="flex items-center space-x-3 group flex-shrink-0"
          onClick={() => triggerHaptic(10)}
        >
          <img 
            src="/logo.png" 
            alt="HS ONE STEP SOLUTIONS" 
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop Corporate Navigation (Clean, Neat & Organized) */}
        <nav className="hidden xl:flex items-center space-x-8 text-[13px] font-bold text-slate-700 tracking-wide">
          
          {/* 1. Solutions Mega Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button className="flex items-center space-x-1.5 hover:text-[#008744] transition-colors py-2">
              <span>Sectors & Solutions</span>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${solutionsOpen ? "rotate-180 text-[#008744]" : ""}`} />
            </button>

            {solutionsOpen && (
              <div className="absolute top-full left-0 w-[580px] bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 grid grid-cols-2 gap-2.5 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="col-span-2 pb-2 mb-1 border-b border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-[#008744] uppercase tracking-wider">
                    12 Integrated Specialized Verticals
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-[#008744] font-bold">
                    SINGLE MASTER POC
                  </span>
                </div>
                {SECTORS.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#sector-${sec.id}`}
                    onClick={() => {
                      triggerHaptic(10);
                      setSolutionsOpen(false);
                    }}
                    className="p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all flex items-center space-x-3 text-xs text-slate-800 hover:text-[#008744] group"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#008744] group-hover:scale-125 transition-transform flex-shrink-0" />
                    <div>
                      <div className="font-bold">{sec.title}</div>
                      <div className="text-[10px] text-slate-400 font-mono">{sec.badge}</div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* 2. Hospital Flagship */}
          <a 
            href="#hospital-flagship" 
            className="hover:text-[#008744] transition-colors"
            onClick={() => triggerHaptic(10)}
          >
            Hospital Development
          </a>

          {/* 3. CAD Floorplan */}
          <a 
            href="#floorplan" 
            className="hover:text-[#008744] transition-colors flex items-center space-x-1.5 text-slate-800"
            onClick={() => triggerHaptic(10)}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>CAD Floorplan</span>
          </a>

          {/* 4. Execution Roadmap */}
          <a 
            href="#roadmap" 
            className="hover:text-[#008744] transition-colors"
            onClick={() => triggerHaptic(10)}
          >
            Execution Highway
          </a>

          {/* 5. Procurement Catalog */}
          <a 
            href="#procurement" 
            className="hover:text-[#008744] transition-colors"
            onClick={() => triggerHaptic(10)}
          >
            Procurement
          </a>

          {/* 6. Company & Leadership Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setCompanyOpen(true)}
            onMouseLeave={() => setCompanyOpen(false)}
          >
            <button className="flex items-center space-x-1.5 hover:text-[#008744] transition-colors py-2">
              <span>Company</span>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${companyOpen ? "rotate-180 text-[#008744]" : ""}`} />
            </button>

            {companyOpen && (
              <div className="absolute top-full left-0 w-64 bg-white border border-slate-200 rounded-2xl shadow-2xl p-3 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                <a
                  href="#founder"
                  onClick={() => {
                    triggerHaptic(10);
                    setCompanyOpen(false);
                  }}
                  className="block p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all text-xs"
                >
                  <div className="font-bold text-slate-900 hover:text-[#008744] flex items-center space-x-1.5">
                    <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Founder & CEO</span>
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono mt-0.5">Mr. Pratyaksh Pandey</div>
                </a>

                <a
                  href="#about"
                  onClick={() => {
                    triggerHaptic(10);
                    setCompanyOpen(false);
                  }}
                  className="block p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all text-xs"
                >
                  <div className="font-bold text-slate-900 hover:text-[#008744]">Corporate Mission</div>
                  <div className="text-[10px] text-slate-500 font-mono mt-0.5">Established 2024 Profile</div>
                </a>

                <a
                  href="#contact"
                  onClick={() => {
                    triggerHaptic(10);
                    setCompanyOpen(false);
                  }}
                  className="block p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all text-xs"
                >
                  <div className="font-bold text-slate-900 hover:text-[#008744]">Institutional Contact</div>
                  <div className="text-[10px] text-slate-500 font-mono mt-0.5">info@hsonestepsolutions.com</div>
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* Action Button & Contact Link */}
        <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
          <button
            onClick={() => {
              triggerHaptic(20);
              onOpenRFQ();
            }}
            className="px-6 py-2.5 bg-gradient-to-r from-[#008744] to-[#065F38] hover:from-[#065F38] hover:to-[#008744] text-white font-bold rounded-xl text-xs font-mono tracking-wider shadow-md shadow-emerald-700/20 hover:shadow-emerald-700/40 hover:scale-[1.02] active:scale-95 transition-all flex items-center space-x-2"
          >
            <span>REQUEST RFQ / BOQ</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => {
            triggerHaptic(15);
            setMobileMenuOpen(!mobileMenuOpen);
          }}
          className="xl:hidden p-2 text-slate-700 hover:text-slate-900 rounded-xl bg-slate-100 border border-slate-200 active:scale-95"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
        </button>
      </div>

      {/* Clean & Neat Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 max-h-[85vh] overflow-y-auto shadow-2xl animate-in slide-in-from-top-2 duration-300">
          
          <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-slate-500 uppercase">QUICK NAVIGATION</span>
            <span className="text-[10px] font-mono text-[#008744] font-bold">HS ONE STEP</span>
          </div>

          <div className="space-y-2 text-sm font-semibold text-slate-800">
            <a href="#" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-[#008744]">Home</a>
            <a href="#sectors" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-[#008744]">12 Sectors & Solutions</a>
            <a href="#hospital-flagship" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-[#008744]">Hospital Development (Turnkey)</a>
            <a href="#floorplan" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-[#008744] font-bold">Interactive CAD Floorplan</a>
            <a href="#roadmap" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-[#008744]">Execution Highway (365 Days)</a>
            <a href="#procurement" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-[#008744]">B2B Procurement Catalog</a>
            <a href="#founder" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-[#008744] font-bold">Mr. Pratyaksh Pandey (Founder & CEO)</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-[#008744]">About Corporate Mission</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-[#008744]">Contact Desk</a>
          </div>

          <div className="pt-4 border-t border-slate-100 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRFQ();
              }}
              className="w-full py-3.5 bg-gradient-to-r from-[#008744] to-[#065F38] text-white font-bold rounded-2xl text-xs font-mono tracking-wider shadow-lg flex items-center justify-center space-x-2"
            >
              <FileText className="w-4 h-4" />
              <span>REQUEST FOR QUOTATION (RFQ)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
