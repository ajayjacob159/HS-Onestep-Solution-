import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Images, 
  Filter, 
  ArrowRight, 
  Sparkles, 
  Building2, 
  Eye, 
  X, 
  CheckCircle2, 
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import { triggerHaptic } from "../utils/haptics";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  image: string;
  badge: string;
  specs: string;
  location?: string;
}

const GALLERY_CATEGORIES = [
  "All Capabilities",
  "Healthcare & Cleanrooms",
  "Heavy Civil & Steel",
  "IT & AI Automations",
  "Critical Power & Energy",
  "Kitchens & Cold Chain",
  "Corporate Campus"
];

const GALLERY_ITEMS: GalleryItem[] = [
  // Healthcare
  {
    id: "gal-01",
    title: "Class 100 Modular Operation Theatre Suite",
    category: "Healthcare & Cleanrooms",
    categoryLabel: "Healthcare Infrastructure",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    badge: "NABH / ISO 5 READY",
    specs: "Laminar air flow plenum, antimicrobial HPL wall panels, surgeon touchscreen console & LED lighting.",
    location: "Metropolitan Super-Specialty Hospital"
  },
  {
    id: "gal-02",
    title: "High-Acuity ICU Telemetry Bay",
    category: "Healthcare & Cleanrooms",
    categoryLabel: "Critical Care",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    badge: "CRITICAL CARE",
    specs: "Centralized multi-para telemetry networking, motorized 5-function ICU beds & bedhead pendants.",
    location: "Multi-Specialty Facility"
  },
  {
    id: "gal-03",
    title: "Advanced Diagnostic Radiology Suite",
    category: "Healthcare & Cleanrooms",
    categoryLabel: "Diagnostic Imaging",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    badge: "AERB COMPLIANT",
    specs: "High-frequency digital radiography system with motorized ceiling suspended tube & lead shielding.",
    location: "Regional Diagnostic Center"
  },
  // Heavy Civil & Steel
  {
    id: "gal-04",
    title: "Heavy Structural Steel Framing & PEB Erection",
    category: "Heavy Civil & Steel",
    categoryLabel: "Structural Engineering",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80",
    badge: "HEAVY INDUSTRIAL",
    specs: "High-yield structural steel beams, certified crane staging, and high-tolerance industrial framing.",
    location: "Major Institutional Project"
  },
  {
    id: "gal-05",
    title: "RCC Civil Foundation & Reinforcement Framing",
    category: "Heavy Civil & Steel",
    categoryLabel: "Civil Works",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    badge: "SEISMIC GRADE",
    specs: "Deep foundation piling, Fe-550D TMT reinforcement, and M40 high-strength concrete framing.",
    location: "Civic Hospital Campus"
  },
  {
    id: "gal-06",
    title: "High-Rise Commercial Facade & Structural Fit-Out",
    category: "Heavy Civil & Steel",
    categoryLabel: "Commercial Infrastructure",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    badge: "COMMERCIAL",
    specs: "Architectural glazing, structural steel core, and integrated life safety grid.",
    location: "CBD Commercial Hub"
  },
  // IT & AI
  {
    id: "gal-07",
    title: "AI Robotic Process Automation (RPA) Orchestration",
    category: "IT & AI Automations",
    categoryLabel: "Artificial Intelligence",
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80",
    badge: "AI AUTOMATION",
    specs: "Autonomous document parsing (IDP), real-time site vision analytics, and 24/7 intelligent workflow agents.",
    location: "Enterprise Cloud Environment"
  },
  {
    id: "gal-08",
    title: "Enterprise Cloud ERP & Hospital HMIS Platform",
    category: "IT & AI Automations",
    categoryLabel: "Software Engineering",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    badge: "SOC-2 READY",
    specs: "Multi-tenant cloud architecture, automated EMR, billing, pharmacy, and laboratory telemetry.",
    location: "Multi-Facility Network"
  },
  {
    id: "gal-09",
    title: "Digital Growth Marketing & Global Expansion Analytics",
    category: "IT & AI Automations",
    categoryLabel: "Growth Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    badge: "GLOBAL EXPANSION",
    specs: "Full-funnel B2B lead acquisition, search & answer engine optimization (SEO & AEO) telemetry.",
    location: "International Campaign Desk"
  },
  // Power & Energy
  {
    id: "gal-10",
    title: "33kV / 11kV HT Substation & AMF DG Sync Grid",
    category: "Critical Power & Energy",
    categoryLabel: "Electrical Infrastructure",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    badge: "99.999% UPTIME",
    specs: "Primary transformers, HT switchgear panels, automated DG synchronization, and 0ms medical UPS.",
    location: "Critical Facility Substation"
  },
  // Kitchens & Cold Chain
  {
    id: "gal-11",
    title: "Commercial SS 304 High-Volume Institutional Kitchen",
    category: "Kitchens & Cold Chain",
    categoryLabel: "Commercial Kitchens",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80",
    badge: "NSF / SS 304",
    specs: "High-efficiency induction cooking blocks, commercial cold storage rooms & automated warewashing.",
    location: "Institutional Cafeteria"
  },
  {
    id: "gal-12",
    title: "Ultra-Low Temperature Biological Cold Chain Storage",
    category: "Kitchens & Cold Chain",
    categoryLabel: "Medical Cold Chain",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80",
    badge: "-86°C CRYOGENIC",
    specs: "Automated blood bank component freezers, dual cascade refrigeration, and IoT temperature telemetry.",
    location: "State Blood Bank Network"
  },
  // Corporate Campus
  {
    id: "gal-13",
    title: "HS ONE STEP SOLUTIONS Headquarters & Corporate Campus",
    category: "Corporate Campus",
    categoryLabel: "Corporate Facility",
    image: "/corporate-building.jpg",
    badge: "HEADQUARTERS",
    specs: "Central executive offices, project governance desk, engineering review suites, and registered office.",
    location: "Gandharv Nagari, Moshi, Bhosari, Pune"
  }
];

interface GalleryPageProps {
  onOpenRFQ: (sectorId?: string, productName?: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenRFQ }) => {
  const [selectedCategory, setSelectedCategory] = useState("All Capabilities");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedCategory === "All Capabilities") return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="pt-8 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Breadcrumb & Title */}
        <div className="space-y-4 max-w-4xl mb-12">
          <div className="flex items-center space-x-2 text-xs font-mono text-slate-500">
            <Link to="/" className="hover:text-[#008744]">Home</Link>
            <span>/</span>
            <span className="text-[#008744] font-bold">Project & Capability Gallery</span>
          </div>

          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-[#008744] text-xs font-mono font-bold tracking-wider uppercase shadow-sm">
            <Images className="w-3.5 h-3.5" />
            <span>Visual Project Showcase</span>
          </div>

          <h1 className="text-3xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            PROJECT & CAPABILITY GALLERY
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            High-resolution visual showcase of our turnkey execution across Healthcare Cleanrooms, Heavy Civil & Structural Steel, IT & AI Automations, Critical Power, Commercial Kitchens, and Corporate Infrastructure.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {GALLERY_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  triggerHaptic(10);
                  setSelectedCategory(cat);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                  isSelected
                    ? "bg-[#008744] text-white shadow-md shadow-emerald-700/20"
                    : "bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300"
                }`}
              >
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Photographic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                triggerHaptic(15);
                setActiveItem(item);
              }}
              className="bg-white border border-slate-200 hover:border-[#008744] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Photo with Overlay */}
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/95 text-[#008744] font-extrabold uppercase shadow-sm">
                      {item.badge}
                    </span>

                    <span className="w-8 h-8 rounded-full bg-slate-900/80 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Bottom Category Tag on Image */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[10px] font-mono text-[#D4AF37] font-bold uppercase block">
                      {item.categoryLabel}
                    </span>
                    <h3 className="text-base font-bold leading-snug tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 space-y-3">
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {item.specs}
                  </p>

                  {item.location && (
                    <div className="text-[11px] font-mono text-slate-400">
                      📍 {item.location}
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#008744] group-hover:translate-x-1 transition-transform flex items-center space-x-1">
                  <span>VIEW SPECIFICATION</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    triggerHaptic(20);
                    onOpenRFQ(undefined, item.title);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-[#008744] text-slate-700 hover:text-white text-[11px] font-mono font-bold transition-colors"
                >
                  RFQ
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Full-Screen Lightbox Zoom Modal */}
        {activeItem && (
          <div 
            className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
            onClick={() => setActiveItem(null)}
          >
            <div 
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Preview */}
              <div className="relative h-80 sm:h-[440px] bg-slate-900">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                
                <button
                  onClick={() => setActiveItem(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-white hover:bg-red-600 transition-colors shadow-lg"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="text-xs font-mono text-[#D4AF37] font-bold uppercase block mb-1">
                    {activeItem.badge} • {activeItem.categoryLabel}
                  </span>
                  <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight">
                    {activeItem.title}
                  </h2>
                </div>
              </div>

              {/* Specification Details & Consultation CTA */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-1">
                    ENGINEERING & EXECUTION SPECIFICATIONS:
                  </h4>
                  <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                    {activeItem.specs}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
                  <div className="text-xs font-mono text-slate-500">
                    📍 {activeItem.location || "HS ONE STEP Turnkey Execution Project"}
                  </div>

                  <div className="flex items-center space-x-3 w-full sm:w-auto">
                    <button
                      onClick={() => {
                        triggerHaptic(20);
                        const itemTitle = activeItem.title;
                        setActiveItem(null);
                        onOpenRFQ(undefined, itemTitle);
                      }}
                      className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#008744] to-[#065F38] text-white font-bold rounded-xl text-xs font-mono tracking-wider shadow-md flex items-center justify-center space-x-2"
                    >
                      <span>REQUEST RFQ FOR THIS SPEC</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
