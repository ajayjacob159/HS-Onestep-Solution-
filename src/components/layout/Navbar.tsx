import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
  Mail,
  Clock,
  Package,
  Activity,
  Images,
  User
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
  const [aboutOpen, setAboutOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [platformsOpen, setPlatformsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setAboutOpen(false);
    setSolutionsOpen(false);
    setPlatformsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.06)] py-2.5" 
        : "bg-white border-b border-slate-100 py-3.5"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Official Brand Logo */}
        <Link 
          to="/" 
          className="flex items-center space-x-3 group flex-shrink-0"
          onClick={() => triggerHaptic(10)}
        >
          <img 
            src="/logo.png" 
            alt="HS ONE STEP SOLUTIONS" 
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Clean, Ordered Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 text-[13px] font-bold text-slate-700 tracking-wide">
          
          {/* 1. Home (FIRST) */}
          <Link 
            to="/" 
            className={`hover:text-[#008744] transition-colors ${location.pathname === "/" ? "text-[#008744] font-extrabold" : ""}`}
            onClick={() => triggerHaptic(10)}
          >
            Home
          </Link>

          {/* 2. About Us (NEXT - Company Profile FIRST, Founder Profile SECOND) */}
          <div 
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button className="flex items-center space-x-1.5 hover:text-[#008744] transition-colors py-2">
              <span>About Us</span>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${aboutOpen ? "rotate-180 text-[#008744]" : ""}`} />
            </button>

            {aboutOpen && (
              <div className="absolute top-full left-0 w-72 bg-white border border-slate-200 rounded-2xl shadow-2xl p-3 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                {/* 1. About Company (FIRST) */}
                <a
                  href="/#about"
                  onClick={() => {
                    triggerHaptic(10);
                    setAboutOpen(false);
                  }}
                  className="block p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all text-xs"
                >
                  <div className="font-bold text-slate-900 hover:text-[#008744] flex items-center space-x-2">
                    <Building2 className="w-4 h-4 text-[#008744]" />
                    <span>Company Profile</span>
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono mt-0.5">HS ONE STEP Overview & Track Record</div>
                </a>

                {/* 2. Founder Profile (SECOND) */}
                <a
                  href="/#founder"
                  onClick={() => {
                    triggerHaptic(10);
                    setAboutOpen(false);
                  }}
                  className="block p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all text-xs"
                >
                  <div className="font-bold text-slate-900 hover:text-[#008744] flex items-center space-x-2">
                    <Award className="w-4 h-4 text-[#D4AF37]" />
                    <span>Founder Profile</span>
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono mt-0.5">Mr. Pratyaksh Pandey (Founder & CEO)</div>
                </a>

                {/* 3. Institutional Contact */}
                <a
                  href="/#contact"
                  onClick={() => {
                    triggerHaptic(10);
                    setAboutOpen(false);
                  }}
                  className="block p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all text-xs"
                >
                  <div className="font-bold text-slate-900 hover:text-[#008744] flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-[#008744]" />
                    <span>Institutional Contact</span>
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono mt-0.5">info@hsonestepsolutions.com</div>
                </a>
              </div>
            )}
          </div>

          {/* 3. Sectors & Solutions */}
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
                    href={`/#sector-${sec.id}`}
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

          {/* 4. Specialized Dedicated Platforms Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setPlatformsOpen(true)}
            onMouseLeave={() => setPlatformsOpen(false)}
          >
            <button className="flex items-center space-x-1.5 hover:text-[#008744] transition-colors py-2">
              <span>Platforms & Tools</span>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${platformsOpen ? "rotate-180 text-[#008744]" : ""}`} />
            </button>

            {platformsOpen && (
              <div className="absolute top-full left-0 w-72 bg-white border border-slate-200 rounded-2xl shadow-2xl p-3 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                <Link
                  to="/hospital-development"
                  onClick={() => setPlatformsOpen(false)}
                  className="block p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all text-xs"
                >
                  <div className="font-bold text-slate-900 hover:text-[#008744] flex items-center space-x-2">
                    <Activity className="w-4 h-4 text-[#008744]" />
                    <span>Hospital Development</span>
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono mt-0.5">Turnkey Healthcare Ecosystem</div>
                </Link>

                <Link
                  to="/cad-floorplan"
                  onClick={() => setPlatformsOpen(false)}
                  className="block p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all text-xs"
                >
                  <div className="font-bold text-slate-900 hover:text-[#008744] flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                    <span>CAD Floorplan Explorer</span>
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono mt-0.5">Interactive Room Hotspots & BOQ</div>
                </Link>

                <Link
                  to="/execution-highway"
                  onClick={() => setPlatformsOpen(false)}
                  className="block p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all text-xs"
                >
                  <div className="font-bold text-slate-900 hover:text-[#008744] flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    <span>Execution Highway</span>
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono mt-0.5">365-Day Milestone Timeline</div>
                </Link>

                <Link
                  to="/procurement"
                  onClick={() => setPlatformsOpen(false)}
                  className="block p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all text-xs"
                >
                  <div className="font-bold text-slate-900 hover:text-[#008744] flex items-center space-x-2">
                    <Package className="w-4 h-4 text-slate-700" />
                    <span>Procurement Catalog</span>
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono mt-0.5">Direct Sourcing & Custom BOQ</div>
                </Link>
              </div>
            )}
          </div>

          {/* 5. Gallery (IN LAST BEFORE CTA) */}
          <Link 
            to="/gallery" 
            className={`hover:text-[#008744] transition-colors ${location.pathname === "/gallery" ? "text-[#008744] font-extrabold" : ""}`}
            onClick={() => triggerHaptic(10)}
          >
            Gallery
          </Link>

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
          className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded-xl bg-slate-100 border border-slate-200 active:scale-95"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
        </button>
      </div>

      {/* Clean & Neat Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 max-h-[85vh] overflow-y-auto shadow-2xl animate-in slide-in-from-top-2 duration-300">
          
          <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-slate-500 uppercase">QUICK NAVIGATION</span>
            <span className="text-[10px] font-mono text-[#008744] font-bold">HS ONE STEP</span>
          </div>

          <div className="space-y-2 text-sm font-semibold text-slate-800">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-[#008744]">Home</Link>
            
            <div className="pt-2 pb-1 text-[11px] font-mono font-bold text-slate-400 uppercase">About Us</div>
            <a href="/#about" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-[#008744] flex items-center space-x-2">
              <Building2 className="w-4 h-4 text-[#008744]" />
              <span>Company Profile</span>
            </a>
            <a href="/#founder" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-[#008744] font-bold flex items-center space-x-2">
              <Award className="w-4 h-4 text-[#D4AF37]" />
              <span>Founder Profile (Mr. Pratyaksh Pandey)</span>
            </a>
            <a href="/#contact" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-[#008744] flex items-center space-x-2">
              <Phone className="w-4 h-4 text-[#008744]" />
              <span>Institutional Contact</span>
            </a>

            <div className="pt-2 pb-1 text-[11px] font-mono font-bold text-slate-400 uppercase">Dedicated Platforms</div>
            <Link to="/hospital-development" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-slate-800 hover:text-[#008744] flex items-center space-x-2">
              <Activity className="w-4 h-4 text-[#008744]" />
              <span>Hospital Development</span>
            </Link>
            <Link to="/cad-floorplan" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-[#008744] font-bold flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Interactive CAD Floorplan</span>
            </Link>
            <Link to="/execution-highway" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-slate-800 hover:text-[#008744] flex items-center space-x-2">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>Execution Highway (365 Days)</span>
            </Link>
            <Link to="/procurement" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-slate-800 hover:text-[#008744] flex items-center space-x-2">
              <Package className="w-4 h-4 text-slate-700" />
              <span>B2B Procurement Catalog</span>
            </Link>

            <div className="pt-2 pb-1 text-[11px] font-mono font-bold text-slate-400 uppercase">Gallery</div>
            <Link to="/gallery" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-[#008744] font-bold flex items-center space-x-2">
              <Images className="w-4 h-4 text-[#008744]" />
              <span>Project & Facility Gallery</span>
            </Link>
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
