import React from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";

const SCROLL_IMAGES = [
  {
    title: "Modular Operation Theatres",
    category: "SURGICAL HEALTHCARE",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Diagnostic Imaging (MRI & CT)",
    category: "ADVANCED MEDTECH",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Heavy Civil & Structural Steel",
    category: "INFRASTRUCTURE",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Critical Energy Substations",
    category: "POWER & UTILITIES",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Commercial Dietary Kitchens",
    category: "FOOD SERVICE",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Medical Gas Pipelines (MGPS)",
    category: "LIFE SUPPORT",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Cryogenic Blood Bank Storage",
    category: "COLD CHAIN",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Healthcare & B2B Furniture",
    category: "INTERIORS & WARD",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80"
  }
];

export const PictorialMarquee: React.FC = () => {
  return (
    <section className="py-10 bg-slate-50 border-b border-slate-200 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[#008744] animate-ping" />
          <span className="text-xs font-mono font-bold text-slate-800 uppercase tracking-widest">
            LIVE PROJECT & CAPABILITY GALLERY
          </span>
        </div>
        <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
          CONTINUOUS MULTI-SECTOR FEED
        </span>
      </div>

      {/* Infinite Horizontal Pictorial Ribbon */}
      <div className="flex space-x-4 animate-marquee hover:[animation-play-state:paused] overflow-x-auto no-scrollbar py-2">
        {[...SCROLL_IMAGES, ...SCROLL_IMAGES].map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-72 sm:w-80 group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 relative cursor-pointer"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
              <span className="absolute top-3 left-3 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/90 font-bold text-[#008744] shadow-sm">
                {item.category}
              </span>
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h3 className="text-sm font-bold leading-tight">{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
