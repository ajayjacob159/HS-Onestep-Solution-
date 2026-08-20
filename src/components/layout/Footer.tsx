import React from "react";
import { ArrowUpRight, ShieldCheck, Mail, Phone, MapPin, Linkedin, Instagram, Youtube } from "lucide-react";

interface FooterProps {
  onOpenRFQ: (sectorId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRFQ }) => {
  return (
    <footer className="bg-white text-slate-800 pt-16 pb-12 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 4-Column Corporate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-200 text-xs">
          
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="HS ONE STEP SOLUTIONS" 
                className="h-12 object-contain" 
              />
            </div>
            
            <p className="text-slate-600 leading-relaxed">
              HS One Step Solutions is an integrated B2B, government, and institutional solutions company. Enabling clients to work with ONE trusted master execution partner.
            </p>

            <div className="pt-1">
              <span className="text-[11px] font-mono text-[#D4AF37] font-bold block">
                “YOUR PLANS, OUR GOALS”
              </span>
              <span className="text-[10px] font-mono text-slate-500 block">
                Serving Government, Public & Private Sector
              </span>
            </div>
          </div>

          {/* Column 2: Core Sectors */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#hospital-flagship" className="hover:text-[#008744] transition-colors">Hospital Development (Turnkey)</a></li>
              <li><a href="#sector-medical-surgical" className="hover:text-[#008744] transition-colors">Medical & Surgical Equipment</a></li>
              <li><a href="#sector-construction-infrastructure" className="hover:text-[#008744] transition-colors">Construction & Infrastructure</a></li>
              <li><a href="#sector-energy" className="hover:text-[#008744] transition-colors">Energy & Critical Power</a></li>
              <li><a href="#sector-commercial-kitchens" className="hover:text-[#008744] transition-colors">Commercial & Dietary Kitchens</a></li>
              <li><a href="#sector-fire-safety" className="hover:text-[#008744] transition-colors">Fire & Life Safety</a></li>
            </ul>
          </div>

          {/* Column 3: Platform Tools */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2">
              Interactive Tools
            </h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#floorplan" className="hover:text-[#008744] transition-colors font-medium">CAD Floorplan Explorer</a></li>
              <li><a href="#project-builder" className="hover:text-[#008744] transition-colors">4-Step Project Builder</a></li>
              <li><a href="#procurement" className="hover:text-[#008744] transition-colors">B2B Procurement Catalog</a></li>
              <li><a href="#dashboard-concept" className="hover:text-[#008744] transition-colors">Project Telemetry (Demo)</a></li>
              <li><a href="#one-step-model" className="hover:text-[#008744] transition-colors">The 8-Stage Process</a></li>
              <li><a href="#about" className="hover:text-[#008744] transition-colors">About Corporate Mission</a></li>
            </ul>
          </div>

          {/* Column 4: Institutional Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2">
              Institutional Contact
            </h4>
            <div className="space-y-2 text-slate-600 font-mono">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#008744] flex-shrink-0 mt-0.5" />
                <span>[Corporate Headquarters & Registered Address]</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#008744] flex-shrink-0" />
                <span>rfq@hsonestep.com</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenRFQ()}
                className="w-full py-2.5 bg-gradient-to-r from-[#008744] to-[#065F38] text-white font-bold rounded-xl text-xs font-mono tracking-wider shadow-md transition-all flex items-center justify-center space-x-1.5"
              >
                <span>REQUEST RFQ / BOQ</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Clean Legal Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-500 space-y-3 md:space-y-0 font-mono">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-800 font-bold">HS ONE STEP SOLUTIONS</strong>. All rights reserved. • ONE PARTNER. MULTIPLE SOLUTIONS. COMPLETE PROJECT EXECUTION.
          </div>
          <div className="flex items-center space-x-5">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Execution</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Disclaimers</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
