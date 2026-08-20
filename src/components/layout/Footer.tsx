import React from "react";
import { ArrowUpRight, ShieldCheck, Mail, Phone, MapPin, Linkedin, Instagram, Youtube, Building2, CheckCircle2 } from "lucide-react";
import { SECTORS } from "../../data/sectorsData";

interface FooterProps {
  onOpenRFQ: (sectorId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRFQ }) => {
  return (
    <footer className="bg-white text-slate-800 pt-20 pb-12 border-t-2 border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Prominent Brand Banner */}
        <div className="bg-gradient-to-r from-emerald-50 via-slate-50 to-amber-50 border-2 border-emerald-100 rounded-3xl p-8 sm:p-12 mb-16 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
            <div className="bg-white p-4 rounded-2xl shadow-md border border-slate-200 flex-shrink-0">
              <img 
                src="/logo.png" 
                alt="HS ONE STEP SOLUTIONS" 
                className="h-20 object-contain" 
              />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-[#008744] uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-emerald-200 inline-block shadow-sm">
                MASTER PROJECT EXECUTION PARTNER
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                HS ONE STEP SOLUTIONS
              </h2>
              <p className="text-sm font-bold text-[#D4AF37] font-mono">
                YOUR PLANS, OUR GOALS • ONE PARTNER. MULTIPLE SOLUTIONS. COMPLETE PROJECT EXECUTION.
              </p>
              <p className="text-xs text-slate-600 max-w-xl">
                Serving Government, Public & Private Sector across 12 integrated engineering & procurement disciplines.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto flex-shrink-0">
            <button
              onClick={() => onOpenRFQ()}
              className="px-8 py-4 bg-gradient-to-r from-[#008744] to-[#065F38] hover:from-[#065F38] hover:to-[#008744] text-white font-bold rounded-2xl text-xs sm:text-sm tracking-wider shadow-lg shadow-emerald-700/20 transition-all flex items-center justify-center space-x-2"
            >
              <span>SUBMIT RFQ / BOQ</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 5 Column Sitemap Grid on White */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-200 text-xs">
          {/* Col 1: About HS One Step Solutions */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-extrabold text-slate-900 font-mono tracking-wider">
              HS ONE STEP SOLUTIONS
            </h4>
            <p className="text-slate-600 leading-relaxed">
              HS One Step Solutions is an integrated B2B, government, and institutional solutions company. Enabling clients to work with ONE trusted master vendor instead of coordinating dozens of fragmented suppliers, contractors, and installers.
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center space-x-2 text-slate-900 font-bold">
                <ShieldCheck className="w-4 h-4 text-[#008744]" />
                <span>Single Accountability Guarantee</span>
              </div>
              <p className="text-[11px] text-slate-500 font-mono">
                From empty site and civil infrastructure to specialized medical tech, cleanrooms, commercial dietary kitchens, and statutory commissioning.
              </p>
            </div>

            <div className="flex items-center space-x-3 pt-1">
              <span className="text-xs text-slate-500 font-mono font-bold">CONNECT:</span>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 hover:text-[#008744] hover:border-[#008744] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 hover:text-[#008744] hover:border-[#008744] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 hover:text-[#008744] hover:border-[#008744] transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Healthcare & Flagship */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2">
              Healthcare & Turnkey
            </h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#hospital-flagship" className="hover:text-[#008744] transition-colors font-medium">Hospital Development (Turnkey)</a></li>
              <li><a href="#floorplan" className="hover:text-[#008744] transition-colors font-medium">CAD Floorplan Explorer</a></li>
              <li><a href="#sector-medical-surgical" className="hover:text-[#008744] transition-colors">Medical & Surgical Equipment</a></li>
              <li><a href="#sector-blood-bank-solutions" className="hover:text-[#008744] transition-colors">Blood Bank & Cold Chain</a></li>
              <li><a href="#dashboard-concept" className="hover:text-[#008744] transition-colors">Live Project Telemetry</a></li>
              <li><a href="#procurement" className="hover:text-[#008744] transition-colors">BOQ Medical Sourcing</a></li>
            </ul>
          </div>

          {/* Col 3: Infrastructure & Commercial */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2">
              Civil & Commercial
            </h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#sector-construction-infrastructure" className="hover:text-[#008744] transition-colors">Construction & Infrastructure</a></li>
              <li><a href="#sector-energy" className="hover:text-[#008744] transition-colors">Energy & Power Systems</a></li>
              <li><a href="#sector-fire-safety" className="hover:text-[#008744] transition-colors">Fire & Life Safety</a></li>
              <li><a href="#sector-commercial-kitchens" className="hover:text-[#008744] transition-colors">Commercial & Dietary Kitchens</a></li>
              <li><a href="#sector-b2b-furniture" className="hover:text-[#008744] transition-colors">B2B & Hospital Furniture</a></li>
              <li><a href="#sector-tiles-granite-marble" className="hover:text-[#008744] transition-colors">Tiles, Granite & Marble</a></li>
            </ul>
          </div>

          {/* Col 4: Institutional & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2">
              Institutional Desk
            </h4>
            <div className="space-y-2.5 text-slate-600 font-mono">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#008744] flex-shrink-0 mt-0.5" />
                <span>[Corporate Office & Registered Address]</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#008744] flex-shrink-0" />
                <span>[Support: +91 / +971 XXXXX]</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#008744] flex-shrink-0" />
                <span>rfq@hsonestep.com</span>
              </div>
            </div>

            <div className="pt-3">
              <span className="text-[10px] font-mono text-[#D4AF37] uppercase font-bold block mb-1">
                ONE PARTNER. MULTIPLE SOLUTIONS.
              </span>
              <span className="text-[11px] text-slate-500 block">
                Serving Government, Public & Private Sector
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 space-y-4 md:space-y-0 font-mono">
          <div className="font-semibold text-slate-700">
            © {new Date().getFullYear()} <strong className="text-slate-900 font-extrabold">HS ONE STEP SOLUTIONS</strong>. All rights reserved. • YOUR PLANS, OUR GOALS.
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Execution</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Statutory Disclaimers</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
