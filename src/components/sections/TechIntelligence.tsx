import React, { useState } from "react";
import { 
  Cpu, 
  Code2, 
  TrendingUp, 
  Zap, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  ShieldCheck,
  Bot
} from "lucide-react";
import { triggerHaptic } from "../../utils/haptics";

interface TechIntelligenceProps {
  onOpenRFQ?: (sectorId?: string) => void;
}

export const TechIntelligence: React.FC<TechIntelligenceProps> = ({ onOpenRFQ }) => {
  const [activeTab, setActiveTab] = useState<"software" | "ai" | "marketing">("ai");

  return (
    <section className="py-20 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Subtle Matrix / Circuit Line Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,135,68,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,135,68,0.06)_1px,transparent_1px)] bg-[size:32px_32px] opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Digital Transformation & AI Automation Engine</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            SCALE UP QUICK. COMPETE GLOBALLY.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Eliminate manual bottlenecks with custom enterprise software, AI-driven autonomous workflows, and global growth marketing engines.
          </p>
        </div>

        {/* 3 Interactive Tab Selectors */}
        <div className="flex justify-center mb-10">
          <div className="bg-slate-800/90 backdrop-blur-md p-1.5 rounded-2xl border border-slate-700 inline-flex space-x-2">
            {[
              { id: "ai", label: "AI Process Automations", icon: Bot },
              { id: "software", label: "Enterprise Software & Apps", icon: Code2 },
              { id: "marketing", label: "Digital Marketing & Growth", icon: TrendingUp }
            ].map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    triggerHaptic(15);
                    setActiveTab(tab.id as any);
                  }}
                  className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-mono transition-all flex items-center space-x-2 ${
                    isSelected
                      ? "bg-[#008744] text-white shadow-lg shadow-emerald-700/40"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display Card */}
        <div className="bg-slate-950/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          {activeTab === "ai" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>AUTONOMOUS OPERATIONS ENGINE</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Automate Any Manual Operation to Scale Rapidly
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  Replace repetitive human data entry, manual document validation, procurement calculations, and customer routing with 24/7 intelligent AI agents and Robotic Process Automation (RPA).
                </p>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
                    <span className="text-emerald-400 font-extrabold font-mono text-xl block">10x Speed</span>
                    <span className="text-[11px] text-slate-400">Zero-Delay Execution</span>
                  </div>
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
                    <span className="text-[#D4AF37] font-extrabold font-mono text-xl block">99.9% Defect-Free</span>
                    <span className="text-[11px] text-slate-400">Automated Audit Trail</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onOpenRFQ && onOpenRFQ("ai-automations")}
                    className="px-6 py-3 bg-[#008744] hover:bg-[#065F38] text-white font-bold rounded-xl text-xs font-mono tracking-wider shadow-lg flex items-center space-x-2"
                  >
                    <span>DEPLOY AI AUTOMATIONS</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-3">
                <div className="p-4 bg-slate-900/90 border border-slate-800 rounded-2xl flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold font-mono flex-shrink-0">
                    01
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Intelligent Document & Invoice Processing</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Automated parsing of vendor BOQs, tax invoices, purchase orders, and compliance certificates in seconds.</p>
                  </div>
                </div>

                <div className="p-4 bg-slate-900/90 border border-slate-800 rounded-2xl flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold font-mono flex-shrink-0">
                    02
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Computer Vision for Site & Quality Inspection</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Real-time camera analytics checking civil construction milestones, MEP alignment, and cleanroom sterile protocols.</p>
                  </div>
                </div>

                <div className="p-4 bg-slate-900/90 border border-slate-800 rounded-2xl flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold font-mono flex-shrink-0">
                    03
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Autonomous 24/7 AI Institutional Desk</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Instant RFP/RFQ inquiry routing, technical spec lookup, and client communication workflows.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "software" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>ENTERPRISE SOFTWARE SUITE</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Custom Platforms, Web/Mobile Apps & Cloud ERP
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  From custom Hospital Management Information Systems (HMIS) and project telemetry portals to high-traffic iOS/Android apps and microservice backends built for world-class scale.
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {["React / Next.js", "Node & Python", "PostgreSQL / Redis", "Docker & Kubernetes", "AWS & GCP", "SOC 2 Encrypted"].map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 rounded-lg">
                      ✓ {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onOpenRFQ && onOpenRFQ("it-software-development")}
                    className="px-6 py-3 bg-[#008744] hover:bg-[#065F38] text-white font-bold rounded-xl text-xs font-mono tracking-wider shadow-lg flex items-center space-x-2"
                  >
                    <span>COMMISSION SOFTWARE PROJECT</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-900 p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-mono text-emerald-400 font-bold">CUSTOM SOFTWARE ARCHITECTURE</span>
                  <span className="text-[10px] font-mono text-slate-400">SOC-2 / HIPAA READY</span>
                </div>
                <div className="space-y-2.5 text-xs text-slate-300 font-mono">
                  <div className="flex justify-between p-2 rounded-lg bg-slate-950 border border-slate-800/80">
                    <span>Cloud HMIS / ERP Portal</span>
                    <span className="text-emerald-400 font-bold">DEPLOYED</span>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-slate-950 border border-slate-800/80">
                    <span>Cross-Platform iOS & Android Apps</span>
                    <span className="text-emerald-400 font-bold">NATIVE</span>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-slate-950 border border-slate-800/80">
                    <span>Real-Time Project PMO Telemetry</span>
                    <span className="text-[#D4AF37] font-bold">LIVE TELEMETRY</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "marketing" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>GLOBAL GROWTH ENGINE</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Digital Marketing & Omnichannel Global Expansion
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  Targeted institutional B2B customer acquisition, corporate brand authority, search & answer engine optimization (SEO & AEO), and global multi-channel campaigns to outcompete worldwide.
                </p>

                <div className="grid grid-cols-3 gap-2 pt-1 font-mono text-center">
                  <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl">
                    <span className="text-sm font-bold text-white block">SEO & AEO</span>
                    <span className="text-[10px] text-slate-400">AI Search Ready</span>
                  </div>
                  <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl">
                    <span className="text-sm font-bold text-emerald-400 block">Omnichannel</span>
                    <span className="text-[10px] text-slate-400">Global Reach</span>
                  </div>
                  <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl">
                    <span className="text-sm font-bold text-[#D4AF37] block">B2B Leads</span>
                    <span className="text-[10px] text-slate-400">High-Intent</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onOpenRFQ && onOpenRFQ("digital-growth-marketing")}
                    className="px-6 py-3 bg-[#008744] hover:bg-[#065F38] text-white font-bold rounded-xl text-xs font-mono tracking-wider shadow-lg flex items-center space-x-2"
                  >
                    <span>LAUNCH GROWTH CAMPAIGN</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                <h4 className="text-xs font-mono text-white font-bold uppercase border-b border-slate-800 pb-2">
                  FULL-FUNNEL GROWTH CAPABILITIES
                </h4>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center space-x-2 bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Global B2B Paid Search & Social Media Performance Advertising</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Answer Engine Optimization (AEO) for ChatGPT, Perplexity & Google AI</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>High-Authority Executive PR & Global Corporate Branding</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
