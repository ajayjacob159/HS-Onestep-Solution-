import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Newspaper, 
  Calendar, 
  ArrowRight, 
  Building2, 
  Eye, 
  X, 
  Download, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight,
  Sparkles,
  Share2,
  Mail,
  Phone
} from "lucide-react";
import { NEWS_DATA, NewsArticle } from "../data/newsData";
import { triggerHaptic } from "../utils/haptics";

interface NewsMediaPageProps {
  onOpenRFQ: (sectorId?: string) => void;
}

const CATEGORIES = [
  "All Updates",
  "Corporate Expansion",
  "Public Sector & NHM",
  "CSR & Social Impact",
  "Leadership & Governance"
];

export const NewsMediaPage: React.FC<NewsMediaPageProps> = ({ onOpenRFQ }) => {
  const [selectedCategory, setSelectedCategory] = useState("All Updates");
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);

  const filteredNews = NEWS_DATA.filter((item) => {
    if (selectedCategory === "All Updates") return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="pt-8 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Header */}
        <div className="space-y-4 max-w-4xl mb-10">
          <div className="flex items-center space-x-2 text-xs font-mono text-slate-500">
            <Link to="/" className="hover:text-[#008744]">Home</Link>
            <span>/</span>
            <span className="text-[#008744] font-bold">News & Media</span>
          </div>

          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-[#008744] text-xs font-mono font-bold tracking-wider uppercase shadow-sm">
            <Newspaper className="w-3.5 h-3.5" />
            <span>Corporate News, Press Releases & Announcements</span>
          </div>

          <h1 className="text-3xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            NEWS & MEDIA CENTER
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Latest press releases, National Health Mission (NHM) program milestones, CSR initiative reports, and nationwide corporate updates from HS ONE STEP SOLUTIONS.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  triggerHaptic(10);
                  setSelectedCategory(cat);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all ${
                  isSelected
                    ? "bg-[#008744] text-white shadow-md shadow-emerald-700/20"
                    : "bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredNews.map((article) => (
            <div
              key={article.id}
              onClick={() => {
                triggerHaptic(15);
                setActiveArticle(article);
              }}
              className="bg-white border border-slate-200 hover:border-[#008744] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Image & Badges */}
                <div className="relative h-60 overflow-hidden bg-slate-900">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-white/95 text-[#008744] font-extrabold uppercase shadow-sm">
                      {article.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 text-white flex items-center justify-between text-xs font-mono">
                    <span className="flex items-center space-x-1.5 text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{article.date}</span>
                    </span>
                    <span className="text-[#D4AF37] font-semibold">{article.source}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <span className="text-[11px] font-mono text-[#008744] font-bold uppercase tracking-wider block">
                    {article.category}
                  </span>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug group-hover:text-[#008744] transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </div>

              {/* Action footer */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#008744] flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                  <span>{article.linkText}</span>
                  <ChevronRight className="w-4 h-4" />
                </span>
                
                <span className="text-[11px] font-mono text-slate-400">
                  PRESS RELEASE
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Media Kit & Media Contact Card */}
        <div className="mt-16 p-8 sm:p-10 bg-white border border-slate-200 rounded-3xl shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-xs font-mono text-[#008744] font-bold uppercase tracking-wider block">
              MEDIA & PRESS RELATIONS DESK
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Official Media Inquiries & Press Materials
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              For press inquiries, editorial interviews with leadership, high-resolution branding assets, or official statements, contact our corporate communications desk at <strong>info@hsonestepsolutions.com</strong>.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-slate-600">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#008744]" />
                <a href="mailto:info@hsonestepsolutions.com" className="hover:text-[#008744]">info@hsonestepsolutions.com</a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#008744]" />
                <a href="tel:+919130322864" className="hover:text-[#008744]">+91 9130322864</a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <button
              onClick={() => {
                triggerHaptic(20);
                onOpenRFQ();
              }}
              className="w-full py-3.5 bg-gradient-to-r from-[#008744] to-[#065F38] text-white font-bold rounded-xl text-xs font-mono tracking-wider shadow-md flex items-center justify-center space-x-2"
            >
              <span>CONTACT PRESS DESK</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Full-Screen Article Modal */}
        {activeArticle && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
            onClick={() => setActiveArticle(null)}
          >
            <div
              className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 sm:h-72 bg-slate-900">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                
                <button
                  onClick={() => setActiveArticle(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-white hover:bg-red-600 transition-colors shadow-lg"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="text-xs font-mono text-[#D4AF37] font-bold uppercase block mb-1">
                    {activeArticle.category} • {activeArticle.date}
                  </span>
                  <h2 className="text-lg sm:text-2xl font-extrabold leading-snug">
                    {activeArticle.title}
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 text-xs font-mono text-slate-500">
                  <span>Source: <strong>{activeArticle.source}</strong></span>
                  <span className="px-2.5 py-1 rounded bg-emerald-50 text-[#008744] font-bold">OFFICIAL RELEASE</span>
                </div>

                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p className="font-semibold text-slate-900">
                    {activeArticle.summary}
                  </p>
                  <p>
                    {activeArticle.fullStory || activeArticle.summary}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs font-mono text-slate-500">
                    HS ONE STEP SOLUTIONS Media Desk
                  </div>

                  <button
                    onClick={() => {
                      setActiveArticle(null);
                      onOpenRFQ();
                    }}
                    className="w-full sm:w-auto px-6 py-2.5 bg-[#008744] text-white font-bold rounded-xl text-xs font-mono tracking-wider shadow-md"
                  >
                    INQUIRE ABOUT THIS INITIATIVE
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
