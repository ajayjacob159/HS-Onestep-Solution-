import React, { useState, useEffect } from "react";
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight, 
  Building2, 
  Sparkles,
  SlidersHorizontal,
  Phone
} from "lucide-react";
import { SECTORS } from "../../data/sectorsData";

interface NavbarProps {
  onOpenRFQ: (sectorId?: string) => void;
  onOpenProjectBuilder: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRFQ, onOpenProjectBuilder }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdown, setSolutionsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 transition-all duration-200 ${
      scrolled 
        ? "bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm py-3" 
        : "bg-white border-b border-slate-100 py-4"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center space-x-3 group flex-shrink-0">
          <img 
            src="/logo.png" 
            alt="HS ONE STEP SOLUTIONS" 
            className="h-11 sm:h-13 object-contain transition-transform group-hover:scale-105"
          />
        </a>

        {/* Desktop Navigation Links (Clean & Corporate) */}
        <nav className="hidden lg:flex items-center space-x-7 text-xs font-bold uppercase tracking-wider text-slate-700">
          <a href="#" className="hover:text-[#008744] transition-colors">Home</a>
          
          {/* Solutions Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setSolutionsDropdown(true)}
            onMouseLeave={() => setSolutionsDropdown(false)}
          >
            <button className="flex items-center space-x-1 hover:text-[#008744] transition-colors py-1">
              <span>Sectors & Solutions</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {solutionsDropdown && (
              <div className="absolute top-full left-0 w-[600px] bg-white border border-slate-200 rounded-2xl shadow-2xl p-5 grid grid-cols-2 gap-2 animate-in fade-in duration-150">
                <div className="col-span-2 pb-2 mb-1 border-b border-slate-100 flex items-center justify-between text-[11px] font-mono font-bold text-[#008744]">
                  <span>12 INTEGRATED OPERATIONAL VERTICALS</span>
                  <span className="text-slate-400">SINGLE POC</span>
                </div>
                {SECTORS.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#sector-${sec.id}`}
                    onClick={() => setSolutionsDropdown(false)}
                    className="p-2 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all flex items-center space-x-2.5 text-xs text-slate-800 hover:text-[#008744]"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#008744] flex-shrink-0" />
                    <span className="font-semibold">{sec.title}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#hospital-flagship" className="hover:text-[#008744] transition-colors">Hospital Flagship</a>
          <a href="#floorplan" className="hover:text-[#008744] transition-colors flex items-center space-x-1 text-[#008744]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>CAD Floorplan</span>
          </a>
          <a href="#one-step-model" className="hover:text-[#008744] transition-colors">The Process</a>
          <a href="#procurement" className="hover:text-[#008744] transition-colors">Procurement</a>
          <a href="#founder" className="hover:text-[#008744] transition-colors">Founder & Leadership</a>
          <a href="#about" className="hover:text-[#008744] transition-colors">About Us</a>
          <a href="#contact" className="hover:text-[#008744] transition-colors">Contact</a>
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
          <button
            onClick={() => onOpenRFQ()}
            className="px-5 py-2.5 bg-gradient-to-r from-[#008744] to-[#065F38] hover:from-[#065F38] hover:to-[#008744] text-white font-bold rounded-xl text-xs font-mono tracking-wider shadow-md shadow-emerald-700/15 transition-all flex items-center space-x-1.5"
          >
            <span>REQUEST RFQ</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded-xl bg-slate-100 border border-slate-200"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-3 max-h-[80vh] overflow-y-auto">
          <a href="#" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-slate-800 hover:text-[#008744] py-1">Home</a>
          <a href="#sectors" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-slate-800 hover:text-[#008744] py-1">12 Sectors & Solutions</a>
          <a href="#hospital-flagship" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-slate-800 hover:text-[#008744] py-1">Hospital Development (Turnkey)</a>
          <a href="#floorplan" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-bold text-[#008744] py-1">Interactive CAD Floorplan</a>
          <a href="#one-step-model" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-slate-800 hover:text-[#008744] py-1">The One Step Model</a>
          <a href="#procurement" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-slate-800 hover:text-[#008744] py-1">Procurement Catalog</a>
          <a href="#founder" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-[#008744] font-bold py-1">Founder & Leadership</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-slate-800 hover:text-[#008744] py-1">About Us</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-semibold text-slate-800 hover:text-[#008744] py-1">Contact Desk</a>

          <div className="pt-3 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRFQ();
              }}
              className="w-full py-3 bg-[#008744] text-white font-bold rounded-xl text-xs font-mono tracking-wider shadow-md"
            >
              REQUEST FOR QUOTATION (RFQ)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
