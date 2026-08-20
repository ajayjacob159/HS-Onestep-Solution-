import React, { useState, useEffect } from "react";
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight, 
  Building2, 
  Stethoscope, 
  HardHat, 
  Zap, 
  Droplet, 
  Grid, 
  ShieldAlert, 
  Armchair, 
  UtensilsCrossed, 
  Layers, 
  Landmark, 
  Cpu, 
  SlidersHorizontal,
  Phone,
  Mail,
  Sparkles
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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-slate-900 text-slate-300 py-1.5 px-4 sm:px-8 text-xs font-mono tracking-wider flex items-center justify-between z-40 relative">
        <div className="flex items-center space-x-3 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="flex items-center space-x-1 text-[#D4AF37] font-bold">
            <span className="w-2 h-2 rounded-full bg-[#008744] animate-pulse inline-block mr-1" />
            POSITIONING:
          </span>
          <span className="text-white font-medium">ONE PARTNER. MULTIPLE SOLUTIONS. COMPLETE PROJECT EXECUTION.</span>
          <span className="hidden md:inline text-slate-500">•</span>
          <span className="hidden md:inline text-slate-300">Serving Government, Public & Private Sector</span>
        </div>
        <div className="hidden lg:flex items-center space-x-6 text-slate-400">
          <a href="#sectors" className="hover:text-emerald-400 transition-colors">12 Sectors</a>
          <a href="#floorplan" className="hover:text-emerald-400 transition-colors">Interactive Floorplan</a>
          <a href="#hospital-flagship" className="hover:text-emerald-400 transition-colors">Hospital Flagship</a>
          <span className="text-[#D4AF37] font-bold">YOUR PLANS, OUR GOALS</span>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-2.5" 
          : "bg-white border-b border-slate-100 py-3.5"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <img 
              src="/logo.png" 
              alt="HS ONE STEP SOLUTIONS" 
              className="h-12 sm:h-14 object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-6 text-xs font-semibold uppercase tracking-wider text-slate-700">
            <a href="#" className="hover:text-[#008744] transition-colors py-2">HOME</a>
            
            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setSolutionsDropdown(true)}
              onMouseLeave={() => setSolutionsDropdown(false)}
            >
              <button className="flex items-center space-x-1 hover:text-[#008744] transition-colors py-2">
                <span>SECTORS & SOLUTIONS</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {solutionsDropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[740px] bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 grid grid-cols-2 gap-3.5 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="col-span-2 pb-2 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-mono text-[#008744] font-bold uppercase tracking-wider">
                      12 Integrated Specialized Sectors
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">ONE PARTNER EXECUTION</span>
                  </div>
                  {SECTORS.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#sector-${sec.id}`}
                      onClick={() => setSolutionsDropdown(false)}
                      className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all group"
                    >
                      <div className="p-2 rounded-lg bg-emerald-50 text-[#008744] group-hover:bg-[#008744] group-hover:text-white transition-colors">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-slate-900 text-xs font-bold group-hover:text-[#008744] flex items-center space-x-1.5">
                          <span>{sec.title}</span>
                          {sec.isFlagship && (
                            <span className="text-[9px] bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded font-mono font-bold">FLAGSHIP</span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5 font-normal">
                          {sec.shortDesc}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#floorplan" className="hover:text-[#008744] transition-colors py-2 flex items-center space-x-1 text-[#008744] font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>FLOORPLAN EXPLORER</span>
            </a>
            <a href="#one-step-model" className="hover:text-[#008744] transition-colors py-2">ONE STEP MODEL</a>
            <a href="#hospital-flagship" className="hover:text-[#008744] transition-colors py-2">HOSPITAL ECOSYSTEM</a>
            <a href="#procurement" className="hover:text-[#008744] transition-colors py-2">PROCUREMENT</a>
            <a href="#project-builder" className="hover:text-[#008744] transition-colors py-2 flex items-center space-x-1 text-slate-800">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#008744]" />
              <span>PROJECT BUILDER</span>
            </a>
            <a href="#about" className="hover:text-[#008744] transition-colors py-2">ABOUT</a>
            <a href="#contact" className="hover:text-[#008744] transition-colors py-2">CONTACT</a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => onOpenRFQ()}
              className="px-4 py-2 border-2 border-[#D4AF37] hover:bg-[#FEFCE8] text-[#9A741E] rounded-xl text-xs font-mono font-bold tracking-wider transition-all shadow-sm"
            >
              REQUEST RFQ
            </button>
            <button
              onClick={onOpenProjectBuilder}
              className="px-5 py-2.5 bg-gradient-to-r from-[#008744] to-[#065F38] hover:from-[#065F38] hover:to-[#008744] text-white font-bold rounded-xl text-xs tracking-wider shadow-md shadow-emerald-600/20 transition-all flex items-center space-x-1.5"
            >
              <span>START A PROJECT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-slate-700 hover:text-slate-900 rounded-xl bg-slate-100 border border-slate-200"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Full Screen Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="space-y-3 pb-4 border-b border-slate-100 text-sm font-semibold tracking-wide">
              <a href="#" onClick={() => setMobileMenuOpen(false)} className="block text-slate-800 hover:text-[#008744] py-1">HOME</a>
              <a href="#sectors" onClick={() => setMobileMenuOpen(false)} className="block text-slate-800 hover:text-[#008744] py-1">SECTORS & SOLUTIONS (12 Verticals)</a>
              <a href="#floorplan" onClick={() => setMobileMenuOpen(false)} className="block text-[#008744] font-bold py-1">INTERACTIVE FLOORPLAN EXPLORER</a>
              <a href="#one-step-model" onClick={() => setMobileMenuOpen(false)} className="block text-slate-800 hover:text-[#008744] py-1">THE ONE STEP MODEL</a>
              <a href="#hospital-flagship" onClick={() => setMobileMenuOpen(false)} className="block text-slate-800 hover:text-[#008744] py-1">FLAGSHIP HOSPITAL ECOSYSTEM</a>
              <a href="#procurement" onClick={() => setMobileMenuOpen(false)} className="block text-slate-800 hover:text-[#008744] py-1">B2B PROCUREMENT CATALOG</a>
              <a href="#project-builder" onClick={() => setMobileMenuOpen(false)} className="block text-slate-800 hover:text-[#008744] py-1">PROJECT BUILDER</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-slate-800 hover:text-[#008744] py-1">ABOUT US</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-slate-800 hover:text-[#008744] py-1">CONTACT & INQUIRIES</a>
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenProjectBuilder();
                }}
                className="w-full py-3 bg-gradient-to-r from-[#008744] to-[#065F38] text-white font-bold rounded-xl text-xs tracking-wider shadow-md"
              >
                START A PROJECT
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRFQ();
                }}
                className="w-full py-3 bg-white border-2 border-[#D4AF37] text-[#9A741E] font-bold rounded-xl text-xs font-mono"
              >
                REQUEST RFQ / BOQ QUOTE
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
