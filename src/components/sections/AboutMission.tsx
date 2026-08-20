import React from "react";
import { ShieldCheck, Target, Award, ArrowRight } from "lucide-react";

interface AboutMissionProps {
  onOpenRFQ: () => void;
}

export const AboutMission: React.FC<AboutMissionProps> = ({ onOpenRFQ }) => {
  return (
    <section id="about" className="py-24 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-[#008744] text-xs font-mono font-bold tracking-wider uppercase">
              <span>Corporate Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              BUILT AROUND ONE SIMPLE IDEA.
            </h2>

            <p className="text-base text-slate-700 leading-relaxed">
              Complex capital projects fail not from a lack of equipment, but from the friction of coordinating dozens of disconnected suppliers, contractors, and installers.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              <strong className="text-slate-900 font-semibold">HS One Step Solutions</strong> was created to eliminate this structural friction. We combine civil construction, medical engineering, life safety, commercial kitchens, stone surfaces, and energy solutions under a single, highly accountable master execution partner.
            </p>

            <div className="pt-2 flex items-center space-x-4">
              <button
                onClick={onOpenRFQ}
                className="px-6 py-3.5 bg-gradient-to-r from-[#008744] to-[#065F38] text-white font-bold rounded-xl text-xs tracking-wider shadow-md shadow-emerald-700/20 flex items-center space-x-2"
              >
                <span>INITIATE PROJECT CONSULTATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-8 shadow-xl space-y-6 text-center">
            <img src="/logo.png" alt="HS ONE STEP SOLUTIONS" className="h-20 mx-auto object-contain" />
            <h3 className="text-xl font-bold text-slate-900">“YOUR PLANS, OUR GOALS”</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-mono max-w-md mx-auto">
              Our core promise is seamless execution: whether developing a 200-bed hospital from raw earth or executing an institutional procurement tender, we make your vision an operational reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
