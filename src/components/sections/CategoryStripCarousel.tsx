import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { SECTORS } from "../../data/sectorsData";

interface CategoryStripCarouselProps {
  onSelectSector: (sectorId: string) => void;
}

export const CategoryStripCarousel: React.FC<CategoryStripCarouselProps> = ({ onSelectSector }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-14 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-xs font-mono text-[#008744] uppercase font-bold tracking-wider">
              DIRECT SECTOR BROWSER
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5">
              Explore Our Core Capabilities
            </h2>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => scroll("left")}
              className="p-2.5 rounded-full border border-slate-300 hover:border-slate-800 text-slate-700 hover:text-slate-900 transition-colors shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2.5 rounded-full border border-slate-300 hover:border-slate-800 text-slate-700 hover:text-slate-900 transition-colors shadow-sm"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Track */}
        <div
          ref={scrollRef}
          className="flex space-x-5 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {SECTORS.map((sector) => (
            <a
              key={sector.id}
              href={`#sector-${sector.id}`}
              onClick={() => onSelectSector(sector.id)}
              className="flex-shrink-0 w-64 group bg-slate-50 border border-slate-200 hover:border-[#008744] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-40 overflow-hidden bg-slate-100">
                <img
                  src={sector.representativeVisual}
                  alt={sector.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-2.5 left-3 text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/90 font-bold text-slate-800 shadow-sm">
                  {sector.badge}
                </span>
              </div>
              <div className="p-4 space-y-1">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#008744] transition-colors leading-tight">
                  {sector.title}
                </h3>
                <p className="text-[11px] text-slate-500 line-clamp-1">
                  {sector.subtitle}
                </p>
                <div className="pt-2 text-xs font-semibold text-[#008744] flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                  <span>Explore Sector</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
