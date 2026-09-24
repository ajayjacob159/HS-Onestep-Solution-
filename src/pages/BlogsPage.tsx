import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Clock, 
  User, 
  Tag, 
  ArrowRight, 
  ChevronRight, 
  X, 
  Search, 
  Sparkles,
  Share2,
  Calendar,
  Building2,
  CheckCircle2
} from "lucide-react";
import { BLOGS_DATA, BlogPost } from "../data/blogsData";
import { triggerHaptic } from "../utils/haptics";

interface BlogsPageProps {
  onOpenRFQ: (sectorId?: string) => void;
}

const CATEGORIES = [
  "All Insights",
  "Healthcare Infrastructure",
  "Cleanroom Engineering",
  "Technology & AI",
  "Legal & Governance"
];

export const BlogsPage: React.FC<BlogsPageProps> = ({ onOpenRFQ }) => {
  const [selectedCategory, setSelectedCategory] = useState("All Insights");
  const [searchQuery, setSearchQuery] = useState("");
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const filteredBlogs = BLOGS_DATA.filter((post) => {
    const matchesCategory = selectedCategory === "All Insights" || post.category === selectedCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-8 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Header */}
        <div className="space-y-4 max-w-4xl mb-10">
          <div className="flex items-center space-x-2 text-xs font-mono text-slate-500">
            <Link to="/" className="hover:text-[#008744]">Home</Link>
            <span>/</span>
            <span className="text-[#008744] font-bold">Blogs & Technical Insights</span>
          </div>

          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-[#008744] text-xs font-mono font-bold tracking-wider uppercase shadow-sm">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Technical Articles & Industry Perspectives</span>
          </div>

          <h1 className="text-3xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            INDUSTRY PERSPECTIVES & BLOGS
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            In-depth analysis, engineering guidelines, cleanroom standards, AI automation blueprints, and legal governance insights curated by our master execution leaders.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          {/* Category Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 no-scrollbar">
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

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:border-[#008744] shadow-sm"
            />
          </div>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredBlogs.map((post) => (
            <div
              key={post.id}
              onClick={() => {
                triggerHaptic(15);
                setActivePost(post);
              }}
              className="bg-white border border-slate-200 hover:border-[#008744] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative h-60 overflow-hidden bg-slate-900">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-white/95 text-[#008744] font-extrabold uppercase shadow-sm">
                      {post.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 text-white flex items-center justify-between text-xs font-mono">
                    <span className="flex items-center space-x-1.5 text-slate-300">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{post.readTime}</span>
                    </span>
                    <span className="text-[#D4AF37] font-semibold">{post.date}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug group-hover:text-[#008744] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>

                  <div className="pt-2 flex items-center space-x-2 text-xs text-slate-500 font-mono">
                    <User className="w-3.5 h-3.5 text-[#008744]" />
                    <span>By <strong>{post.author}</strong></span>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#008744] flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                  <span>READ FULL ARTICLE</span>
                  <ChevronRight className="w-4 h-4" />
                </span>

                <div className="flex flex-wrap gap-1">
                  {post.tags.slice(0, 2).map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-mono">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full-Screen Article Modal */}
        {activePost && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
            onClick={() => setActivePost(null)}
          >
            <div
              className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 sm:h-72 bg-slate-900">
                <img
                  src={activePost.image}
                  alt={activePost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                
                <button
                  onClick={() => setActivePost(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-white hover:bg-red-600 transition-colors shadow-lg"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="text-xs font-mono text-[#D4AF37] font-bold uppercase block mb-1">
                    {activePost.category} • {activePost.readTime}
                  </span>
                  <h2 className="text-lg sm:text-2xl font-extrabold leading-snug">
                    {activePost.title}
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex flex-wrap items-center justify-between pb-4 border-b border-slate-100 text-xs font-mono text-slate-500 gap-2">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-[#008744]" />
                    <span>Written by <strong>{postAuthor(activePost)}</strong></span>
                  </div>
                  <span>Published on {activePost.date}</span>
                </div>

                <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-2xl text-xs sm:text-sm text-[#008744] font-medium leading-relaxed">
                  <strong>Key Takeaway:</strong> {activePost.summary}
                </div>

                <div className="space-y-4 text-slate-800 text-sm sm:text-base leading-relaxed">
                  {activePost.content.map((para, i) => (
                    <p key={i} className="leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {activePost.tags.map((t, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-mono">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      setActivePost(null);
                      onOpenRFQ();
                    }}
                    className="w-full sm:w-auto px-6 py-2.5 bg-[#008744] text-white font-bold rounded-xl text-xs font-mono tracking-wider shadow-md"
                  >
                    CONSULT WITH OUR EXPERTS
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

function postAuthor(post: BlogPost): string {
  return `${post.author} (${post.authorRole})`;
}
