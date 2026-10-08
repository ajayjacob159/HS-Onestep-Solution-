import React from "react";
import { 
  ShieldCheck, 
  Award, 
  HeartHandshake, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  Quote,
  Activity,
  Briefcase,
  Landmark,
  Target,
  Users,
  Layers,
  Clock,
  ThumbsUp,
  Scale,
  Gavel,
  Cpu,
  Code2,
  TrendingUp,
  Megaphone
} from "lucide-react";
import { triggerHaptic } from "../../utils/haptics";

const CORE_EXPERTISE = [
  {
    title: "Unified Vendor & Resource Network",
    desc: "Brought together multiple vendors & service providers under one organization for seamless execution.",
    icon: Layers
  },
  {
    title: "On-Time Commitment Delivery",
    desc: "Mobilizing diverse resources and completing project commitments strictly within the stipulated timeline.",
    icon: Clock
  },
  {
    title: "Healthcare & Turnkey Projects",
    desc: "End-to-end hospital infrastructure, medical equipment staging & NABH-ready execution.",
    icon: Activity
  },
  {
    title: "CSR & Foundation Partnerships",
    desc: "High-impact CSR initiatives and large-scale NGO programs delivering measurable social impact.",
    icon: HeartHandshake
  },
  {
    title: "NHM & Public Health Programs",
    desc: "National Health Mission projects, district medical cold-chains & public health modernization.",
    icon: Landmark
  },
  {
    title: "Client Trust & Quality Assurance",
    desc: "Strong focus on quality and client satisfaction, building long-term, trusted relationships.",
    icon: ThumbsUp
  }
];

interface FounderSectionProps {
  onOpenRFQ?: () => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ onOpenRFQ }) => {
  return (
    <section id="founder" className="py-20 bg-white border-b border-slate-200 relative overflow-hidden">
      
      {/* Background Subtle CAD Grid */}
      <div className="absolute inset-0 bg-blueprint-light opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Pill & Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-[#008744] text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
            <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Executive Leadership & Advisory Board</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            OUR LEADERSHIP & GOVERNANCE TEAM
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Backed by a decade of cross-sectoral operational mastery and highest-echelon legal governance at the Supreme Court of India.
          </p>
        </div>

        {/* ============================================================ */}
        {/* TIER 1: TOP EXECUTIVE LEADERSHIP (FOUNDER & CEO + VICE PRESIDENT SIDE BY SIDE) */}
        {/* ============================================================ */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#008744] animate-pulse" />
              <h3 className="text-xs sm:text-sm font-mono font-extrabold uppercase tracking-widest text-slate-900">
                Principal Executive Leadership
              </h3>
            </div>
            <span className="text-[10px] font-mono text-[#D4AF37] font-bold uppercase">
              CO-LEADERSHIP DESK
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            
            {/* 1. FOUNDER & CEO: MR. PRATYAKSH PANDEY */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-[#008744]/50 transition-all">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                
                {/* Left: Founder Portrait */}
                <div className="sm:col-span-5 flex flex-col items-center">
                  <div className="relative w-44 sm:w-full max-w-[200px] rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-slate-100">
                    <img
                      src="/founder.jpg"
                      alt="Mr. Pratyaksh Pandey - Founder & CEO, HS ONE STEP SOLUTIONS"
                      className="w-full h-auto object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    
                    <div className="absolute top-2.5 right-2.5">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-900/90 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/50 text-[9px] font-mono font-extrabold uppercase shadow-sm flex items-center space-x-1">
                        <ShieldCheck className="w-3 h-3 text-emerald-400" />
                        <span>FOUNDER & CEO</span>
                      </span>
                    </div>

                    <div className="absolute bottom-2.5 left-3 right-3 text-white">
                      <h4 className="text-sm font-bold tracking-tight">Mr. Pratyaksh Pandey</h4>
                      <p className="text-[10px] text-[#D4AF37] font-mono font-medium">Founder & CEO</p>
                    </div>
                  </div>

                  <div className="w-full max-w-[200px] mt-3 bg-white border border-slate-200 p-2.5 rounded-xl shadow-sm flex items-center justify-between text-[10px] font-mono">
                    <div className="flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#008744]" />
                      <span className="font-bold text-slate-900">10+ YRS EXP</span>
                    </div>
                    <span className="text-[#008744] font-bold">GOV • PVT</span>
                  </div>
                </div>

                {/* Right: Founder Narrative */}
                <div className="sm:col-span-7 space-y-3 text-left">
                  <div>
                    <span className="text-[11px] font-mono text-[#008744] font-extrabold uppercase tracking-widest block mb-0.5">
                      STRATEGIC LEADERSHIP
                    </span>
                    <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                      Mr. Pratyaksh Pandey
                    </h4>
                    <p className="text-xs font-mono text-[#D4AF37] font-bold">
                      Founder & CEO, HS ONE STEP SOLUTIONS
                    </p>
                  </div>

                  <div className="text-slate-700 text-xs sm:text-sm leading-relaxed space-y-2">
                    <p>
                      <span className="font-extrabold text-slate-900 bg-emerald-50 border border-emerald-200 text-[#008744] px-2 py-0.5 rounded-lg inline-block mr-1 mb-1">
                        Mr. Pratyaksh Pandey is the Founder and CEO
                      </span>
                      of HS ONE STEP SOLUTIONS, backed by over 10 years of diversified experience across the private, public, and government sectors.
                    </p>
                    <p>
                      With a commitment to delivering turnkey solutions, he has united multiple vendors and service providers under one organization to ensure seamless project execution strictly within stipulated timelines.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* 2. VICE PRESIDENT: MR. RITU RAJ PANDEY */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-[#008744]/50 transition-all">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                
                {/* Left: VP Portrait */}
                <div className="sm:col-span-5 flex flex-col items-center">
                  <div className="relative w-44 sm:w-full max-w-[200px] rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-slate-100">
                    <img
                      src="/ritu-raj-pandey.jpg"
                      alt="Mr. Ritu Raj Pandey - Vice President, HS ONE STEP SOLUTIONS"
                      className="w-full h-auto object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    
                    <div className="absolute top-2.5 right-2.5">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-900/90 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/50 text-[9px] font-mono font-extrabold uppercase shadow-sm flex items-center space-x-1">
                        <Award className="w-3 h-3 text-[#D4AF37]" />
                        <span>VICE PRESIDENT</span>
                      </span>
                    </div>

                    <div className="absolute bottom-2.5 left-3 right-3 text-white">
                      <h4 className="text-sm font-bold tracking-tight">Mr. Ritu Raj Pandey</h4>
                      <p className="text-[10px] text-[#D4AF37] font-mono font-medium">Vice President</p>
                    </div>
                  </div>

                  <div className="w-full max-w-[200px] mt-3 bg-white border border-slate-200 p-2.5 rounded-xl shadow-sm flex items-center justify-between text-[10px] font-mono">
                    <div className="flex items-center space-x-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-[#008744]" />
                      <span className="font-bold text-slate-900">STRATEGIC GROWTH</span>
                    </div>
                    <span className="text-[#008744] font-bold">VP</span>
                  </div>
                </div>

                {/* Right: VP Narrative */}
                <div className="sm:col-span-7 space-y-3 text-left">
                  <div>
                    <span className="text-[11px] font-mono text-[#008744] font-extrabold uppercase tracking-widest block mb-0.5">
                      EXECUTIVE LEADERSHIP
                    </span>
                    <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                      Mr. Ritu Raj Pandey
                    </h4>
                    <p className="text-xs font-mono text-[#D4AF37] font-bold">
                      Vice President, HS ONE STEP SOLUTIONS
                    </p>
                  </div>

                  <div className="text-slate-700 text-xs sm:text-sm leading-relaxed space-y-2">
                    <p>
                      <span className="font-extrabold text-slate-900 bg-emerald-50 border border-emerald-200 text-[#008744] px-2 py-0.5 rounded-lg inline-block mr-1 mb-1">
                        Mr. Ritu Raj Pandey serves as Vice President
                      </span>
                      of HS ONE STEP SOLUTIONS, adding tremendous value and strategic leadership in building the organization.
                    </p>
                    <p>
                      He spearheads corporate operations, strategic business expansion, key client relationships, and nationwide turnkey delivery frameworks across healthcare, infrastructure, and institutional sectors.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* ============================================================ */}
        {/* TIER 2: EXECUTIVE DIRECTORS & LEGAL GOVERNANCE (3 COLUMNS SIDE BY SIDE) */}
        {/* ============================================================ */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#008744]" />
              <h3 className="text-xs sm:text-sm font-mono font-extrabold uppercase tracking-widest text-slate-900">
                Executive Officers & Legal Governance Board
              </h3>
            </div>
            <span className="text-[10px] font-mono text-[#008744] font-bold uppercase">
              FUNCTIONAL LEADERSHIP
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            
            {/* 3. CHIEF MARKETING OFFICER: MR. AKHTAR ZAMAL */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-lg flex flex-col justify-between relative overflow-hidden group hover:border-[#008744]/50 transition-all">
              <div className="space-y-5 text-left">
                
                {/* Centered / Aligned Photo Container */}
                <div className="flex flex-col items-center">
                  <div className="relative w-44 sm:w-48 max-w-[200px] rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-slate-100">
                    <img
                      src="/akhtar-zamal.jpg"
                      alt="Mr. Akhtar Zamal - Chief Marketing Officer (CMO), HS ONE STEP SOLUTIONS"
                      className="w-full h-auto object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    
                    <div className="absolute top-2.5 right-2.5">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-900/90 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/50 text-[9px] font-mono font-extrabold uppercase shadow-sm flex items-center space-x-1">
                        <Megaphone className="w-3 h-3 text-[#D4AF37]" />
                        <span>CMO</span>
                      </span>
                    </div>

                    <div className="absolute bottom-2.5 left-3 right-3 text-white">
                      <h4 className="text-sm font-bold tracking-tight">Mr. Akhtar Zamal</h4>
                      <p className="text-[10px] text-[#D4AF37] font-mono font-medium">Chief Marketing Officer</p>
                    </div>
                  </div>

                  <div className="w-full max-w-[200px] mt-3 bg-white border border-slate-200 p-2 rounded-xl shadow-sm flex items-center justify-between text-[10px] font-mono">
                    <div className="flex items-center space-x-1.5">
                      <Megaphone className="w-3 h-3 text-[#008744]" />
                      <span className="font-bold text-slate-900 text-[9px]">MARKETING & SALES</span>
                    </div>
                    <span className="text-[#008744] font-bold text-[9px]">CMO</span>
                  </div>
                </div>

                {/* Narrative Details */}
                <div className="space-y-2">
                  <div>
                    <span className="text-[10px] font-mono text-[#008744] font-extrabold uppercase tracking-widest block mb-0.5">
                      MARKETING STRATEGY
                    </span>
                    <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                      Mr. Akhtar Zamal
                    </h4>
                    <p className="text-xs font-mono text-[#D4AF37] font-bold">
                      Chief Marketing Officer (CMO)
                    </p>
                  </div>

                  <p className="text-slate-700 text-xs leading-relaxed">
                    <span className="font-extrabold text-slate-900 bg-emerald-50 border border-emerald-200 text-[#008744] px-1.5 py-0.5 rounded-md inline-block mr-1 mb-1 text-[11px]">
                      Mr. Akhtar Zamal serves as Chief Marketing Officer
                    </span>
                    , overseeing marketing, business development, and sales strategies. Bringing extensive real-time market experience into marketing and sales strategies to the board, he leads institutional outreach programs, client engagement pipelines, and market growth initiatives across turnkey sectors.
                  </p>
                </div>

              </div>
            </div>

            {/* 4. CHIEF TECHNOLOGY OFFICER: ROCKY JACOB */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-lg flex flex-col justify-between relative overflow-hidden group hover:border-[#008744]/50 transition-all">
              <div className="space-y-5 text-left">
                
                {/* Centered / Aligned Photo Container */}
                <div className="flex flex-col items-center">
                  <div className="relative w-44 sm:w-48 max-w-[200px] rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-slate-100">
                    <img
                      src="/rocky-jacob.jpg"
                      alt="Rocky Jacob - Chief Technology Officer (CTO), HS ONE STEP SOLUTIONS"
                      className="w-full h-auto object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    
                    <div className="absolute top-2.5 right-2.5">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-900/90 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/50 text-[9px] font-mono font-extrabold uppercase shadow-sm flex items-center space-x-1">
                        <Cpu className="w-3 h-3 text-emerald-400" />
                        <span>CTO</span>
                      </span>
                    </div>

                    <div className="absolute bottom-2.5 left-3 right-3 text-white">
                      <h4 className="text-sm font-bold tracking-tight">Rocky Jacob</h4>
                      <p className="text-[10px] text-emerald-400 font-mono font-medium">Chief Technology Officer</p>
                    </div>
                  </div>

                  <div className="w-full max-w-[200px] mt-3 bg-white border border-slate-200 p-2 rounded-xl shadow-sm flex items-center justify-between text-[10px] font-mono">
                    <div className="flex items-center space-x-1.5">
                      <Code2 className="w-3 h-3 text-[#008744]" />
                      <span className="font-bold text-slate-900 text-[9px]">ENTERPRISE ARCHITECTURE</span>
                    </div>
                    <span className="text-[#008744] font-bold text-[9px]">CTO</span>
                  </div>
                </div>

                {/* Narrative Details */}
                <div className="space-y-2">
                  <div>
                    <span className="text-[10px] font-mono text-[#008744] font-extrabold uppercase tracking-widest block mb-0.5">
                      DIGITAL ARCHITECTURE
                    </span>
                    <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                      Rocky Jacob
                    </h4>
                    <p className="text-xs font-mono text-[#008744] font-bold">
                      Chief Technology Officer (CTO)
                    </p>
                  </div>

                  <p className="text-slate-700 text-xs leading-relaxed">
                    <span className="font-extrabold text-slate-900 bg-emerald-50 border border-emerald-200 text-[#008744] px-1.5 py-0.5 rounded-md inline-block mr-1 mb-1 text-[11px]">
                      Rocky Jacob serves as Chief Technology Officer
                    </span>
                    , leading the organization's enterprise digital architectures, AI Robotic Process Automation (RPA) engines, HMIS/ERP cloud platforms, and institutional technological modernization across multi-sector turnkey projects.
                  </p>
                </div>

              </div>
            </div>

            {/* 5. LEGAL ADVISOR: AARATI SAH */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-lg flex flex-col justify-between relative overflow-hidden group hover:border-[#008744]/50 transition-all">
              <div className="space-y-5 text-left">
                
                {/* Centered / Aligned Photo Container */}
                <div className="flex flex-col items-center">
                  <div className="relative w-44 sm:w-48 max-w-[200px] rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-slate-100">
                    <img
                      src="/aarati-sah.jpg"
                      alt="Aarati Sah - Legal Advisor, Advocate at Supreme Court of India"
                      className="w-full h-auto object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    
                    <div className="absolute top-2.5 right-2.5">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-900/90 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/50 text-[9px] font-mono font-extrabold uppercase shadow-sm flex items-center space-x-1">
                        <Scale className="w-3 h-3 text-[#D4AF37]" />
                        <span>LEGAL ADVISOR</span>
                      </span>
                    </div>

                    <div className="absolute bottom-2.5 left-3 right-3 text-white">
                      <h4 className="text-sm font-bold tracking-tight">Aarati Sah</h4>
                      <p className="text-[10px] text-emerald-400 font-mono font-medium">Supreme Court of India</p>
                    </div>
                  </div>

                  <div className="w-full max-w-[200px] mt-3 bg-white border border-slate-200 p-2 rounded-xl shadow-sm flex items-center justify-between text-[10px] font-mono">
                    <div className="flex items-center space-x-1.5">
                      <Gavel className="w-3 h-3 text-[#D4AF37]" />
                      <span className="font-bold text-slate-900 text-[9px]">SUPREME COURT</span>
                    </div>
                    <span className="text-[#008744] font-bold text-[9px]">ADVOCATE</span>
                  </div>
                </div>

                {/* Narrative Details */}
                <div className="space-y-2">
                  <div>
                    <span className="text-[10px] font-mono text-[#008744] font-extrabold uppercase tracking-widest block mb-0.5">
                      STATUTORY GOVERNANCE
                    </span>
                    <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                      Aarati Sah
                    </h4>
                    <p className="text-xs font-mono text-[#008744] font-bold">
                      Legal Advisor | Supreme Court of India
                    </p>
                  </div>

                  <p className="text-slate-700 text-xs leading-relaxed">
                    <span className="font-extrabold text-slate-900 bg-emerald-50 border border-emerald-200 text-[#008744] px-1.5 py-0.5 rounded-md inline-block mr-1 mb-1 text-[11px]">
                      Aarati Sah serves as Legal Advisor
                    </span>
                    , guiding the organization with strategic legal oversight, statutory regulatory compliance, public tender governance, and contractual integrity as an Advocate at the Supreme Court of India.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* ============================================================ */}
        {/* TIER 3: CORE STRENGTHS & VALUE CAPABILITIES */}
        {/* ============================================================ */}
        <div className="pt-6 border-t border-slate-200">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200">
            <span className="text-xs font-mono text-slate-900 font-extrabold uppercase tracking-wider flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#008744]" />
              <span>ORGANIZATIONAL CORE STRENGTHS & COMPETENCIES</span>
            </span>
            <span className="text-[10px] font-mono text-[#D4AF37] font-bold uppercase">
              END-TO-END EXECUTION
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CORE_EXPERTISE.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="p-4 bg-slate-50 border border-slate-200 hover:border-[#008744] rounded-2xl flex items-start space-x-3.5 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#008744] group-hover:bg-[#008744] group-hover:text-white flex items-center justify-center font-bold flex-shrink-0 border border-emerald-200 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#008744] transition-colors leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Executive Consultation CTA Bar */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 to-slate-950 rounded-3xl text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2 text-xs font-mono text-[#D4AF37]">
              <Quote className="w-4 h-4" />
              <span className="italic font-bold">“YOUR PLANS, OUR GOALS”</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold">
              Connect With Our Executive Leadership Desk
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Discuss tender partnerships, turnkey development, and institutional procurement scopes directly with our board.
            </p>
          </div>

          {onOpenRFQ && (
            <button
              onClick={() => {
                triggerHaptic(20);
                onOpenRFQ();
              }}
              className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-[#008744] to-[#065F38] hover:from-[#065F38] hover:to-[#008744] text-white font-bold rounded-xl text-xs font-mono tracking-wider shadow-lg flex items-center justify-center space-x-2 flex-shrink-0"
            >
              <span>INITIATE EXECUTIVE CONSULTATION</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>
    </section>
  );
};
