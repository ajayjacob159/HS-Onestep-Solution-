import React from "react";
import { Landmark, Building2, Briefcase, CheckCircle2, ArrowRight } from "lucide-react";

interface GovernmentPublicPrivateProps {
  onOpenRFQ: (sectorId?: string) => void;
}

export const GovernmentPublicPrivate: React.FC<GovernmentPublicPrivateProps> = ({ onOpenRFQ }) => {
  const pillars = [
    {
      title: "Government Sector",
      icon: <Landmark className="w-6 h-6 text-[#008744]" />,
      desc: "Structured for high-volume tender compliance, GeM procurement benchmarks, CPWD standards, and transparent public accountability.",
      points: [
        "Full BOQ & technical specification compliance",
        "Public health mission & hospital turnkey tenders",
        "State infrastructure & departmental works",
        "Statutory documentation & audit-ready traceability"
      ],
      cta: "Government Procurement Desk"
    },
    {
      title: "Public Sector",
      icon: <Building2 className="w-6 h-6 text-[#D4AF37]" />,
      desc: "Supporting public sector undertakings, municipal authorities, state universities, and community health networks with single-source execution.",
      points: [
        "Medical college & hospital turnkey fit-outs",
        "Institutional furniture & surface infrastructure",
        "Heavy dietary kitchen & utility plants",
        "Staged milestone delivery under master supervision"
      ],
      cta: "Public Sector Inquiries"
    },
    {
      title: "Private Sector",
      icon: <Briefcase className="w-6 h-6 text-blue-700]" />,
      desc: "Empowering private healthcare networks, commercial real estate developers, hotel chains, and industrial corporations with accelerated time-to-market.",
      points: [
        "Rapid greenfield hospital & clinic development",
        "Premium commercial interior & marble surfaces",
        "Modular cleanroom & advanced MedTech deployment",
        "Predictable CAPEX with zero vendor dispute delays"
      ],
      cta: "Private Enterprise Solutions"
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#008744] text-xs font-mono font-bold tracking-wider uppercase">
            <span>Institutional Governance</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            SERVING GOVERNMENT, PUBLIC & PRIVATE SECTOR
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Tailored commercial models, compliance frameworks, and execution protocols designed specifically for the unique operational demands of each sector.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-5">
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl w-fit">
                  {p.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{p.title}</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">{p.desc}</p>
                </div>
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {p.points.map((pt, j) => (
                    <div key={j} className="flex items-start space-x-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#008744] flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => onOpenRFQ()}
                  className="w-full py-3 bg-slate-50 hover:bg-[#008744] text-slate-800 hover:text-white border border-slate-200 font-bold rounded-xl text-xs font-mono tracking-wider transition-all flex items-center justify-center space-x-1.5"
                >
                  <span>{p.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
