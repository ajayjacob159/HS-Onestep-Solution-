import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ShieldCheck, Mail, Phone, MapPin, Building2, Newspaper, BookOpen, Images, Users } from "lucide-react";

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
              <Link to="/">
                <img 
                  src="/logo.png" 
                  alt="HS ONE STEP SOLUTIONS" 
                  className="h-12 object-contain" 
                />
              </Link>
            </div>
            
            <p className="text-slate-600 leading-relaxed">
              HS ONE STEP SOLUTIONS is an integrated B2B, government, and institutional solutions company enabling clients to work with ONE trusted master execution partner.
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

          {/* Column 2: Core Capabilities */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-slate-600">
              <li><Link to="/hospital-development" className="hover:text-[#008744] transition-colors font-medium">Hospital Development (Turnkey)</Link></li>
              <li><a href="/#sector-construction-infrastructure" className="hover:text-[#008744] transition-colors font-medium text-slate-900">Heavy Civil & Structural Steel</a></li>
              <li><a href="/#sector-medical-surgical" className="hover:text-[#008744] transition-colors">Medical & Surgical Equipment</a></li>
              <li><a href="/#sector-ai-automations" className="hover:text-[#008744] transition-colors">AI Robotic Process Automation</a></li>
              <li><a href="/#sector-energy" className="hover:text-[#008744] transition-colors">Energy & Critical Power</a></li>
              <li><a href="/#sector-commercial-kitchens" className="hover:text-[#008744] transition-colors">Commercial & Dietary Kitchens</a></li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation & Media */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2">
              Corporate & Platforms
            </h4>
            <ul className="space-y-2 text-slate-600">
              <li><Link to="/about" className="hover:text-[#008744] transition-colors font-medium">Company Profile</Link></li>
              <li><Link to="/team" className="hover:text-[#008744] transition-colors font-medium">Our Team & Leadership</Link></li>
              <li><Link to="/cad-floorplan" className="hover:text-[#008744] transition-colors">CAD Floorplan Explorer</Link></li>
              <li><Link to="/execution-highway" className="hover:text-[#008744] transition-colors">Execution Highway (365 Days)</Link></li>
              <li><Link to="/procurement" className="hover:text-[#008744] transition-colors">B2B Procurement Catalog</Link></li>
              <li><Link to="/gallery" className="hover:text-[#008744] transition-colors">Project & Facility Gallery</Link></li>
              <li><Link to="/news-media" className="hover:text-[#008744] transition-colors text-[#008744] font-semibold">News & Media Center</Link></li>
              <li><Link to="/blogs" className="hover:text-[#008744] transition-colors text-indigo-600 font-semibold">Industry Perspectives & Blogs</Link></li>
            </ul>
          </div>

          {/* Column 4: Multi-State Presence & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2">
              National Presence & Contact
            </h4>
            <div className="space-y-2 text-slate-600 font-mono text-[11px]">
              <div>
                <strong className="text-slate-900 font-bold block">Pune (Headquarters):</strong>
                <span>Gandharv Nagari, Moshi, Bhosari - 411039</span>
              </div>
              <div className="pt-1">
                <strong className="text-slate-900 font-bold block">Hyderabad • Bihar • Delhi:</strong>
                <span>Regional Desks & State Operations</span>
              </div>
              <div className="pt-2 flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#008744] flex-shrink-0" />
                <span><a href="tel:+919130322864" className="hover:text-[#008744] font-bold">+91 9130322864</a> / <a href="tel:+917739322864" className="hover:text-[#008744] font-bold">7739322864</a></span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#008744] flex-shrink-0" />
                <a href="mailto:info@hsonestepsolutions.com" className="hover:text-[#008744] font-bold">info@hsonestepsolutions.com</a>
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
            © {new Date().getFullYear()} <strong className="text-slate-800 font-bold">HS ONE STEP SOLUTIONS</strong>. All rights reserved. • Multi-State Presence: Pune • Hyderabad • Bihar • Delhi.
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
