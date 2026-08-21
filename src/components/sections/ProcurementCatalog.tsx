import React, { useState } from "react";
import { 
  Search, 
  Filter, 
  ShoppingCart, 
  ArrowRight, 
  Download, 
  Check, 
  Trash2, 
  FileText,
  Sparkles,
  Package
} from "lucide-react";
import { PROCUREMENT_CATEGORIES, PROCUREMENT_PRODUCTS } from "../../data/procurementData";
import { ProcurementProduct } from "../../types";
import { triggerHaptic } from "../../utils/haptics";

interface ProcurementCatalogProps {
  onOpenRFQ: (sectorId?: string, productName?: string) => void;
}

export const ProcurementCatalog: React.FC<ProcurementCatalogProps> = ({ onOpenRFQ }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [showBoqTray, setShowBoqTray] = useState(false);

  const filteredProducts = PROCUREMENT_PRODUCTS.filter((prod) => {
    const matchesCategory = 
      selectedCategory === "All Categories" || prod.category === selectedCategory;
    const matchesSearch = 
      prod.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (prod.subCategory || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      prod.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItemSelection = (productName: string) => {
    triggerHaptic(15);
    setSelectedItems((prev) => 
      prev.includes(productName)
        ? prev.filter((item) => item !== productName)
        : [...prev, productName]
    );
    if (!showBoqTray) setShowBoqTray(true);
  };

  const clearSelection = () => {
    triggerHaptic(10);
    setSelectedItems([]);
  };

  return (
    <section id="procurement" className="py-24 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-[#008744] uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block">
              Institutional Sourcing Desk
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              B2B PROCUREMENT CATALOG
            </h2>
            <p className="text-sm text-slate-600">
              Direct OEM sourcing with consolidated Bill of Quantities (BOQ) staging.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => onOpenRFQ()}
              className="px-5 py-3 bg-[#008744] hover:bg-[#065F38] text-white font-bold rounded-2xl text-xs font-mono tracking-wider shadow-sm flex items-center space-x-2"
            >
              <span>SUBMIT CUSTOM BOQ</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-4 sm:p-5 mb-10 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by equipment, materials, software, or compliance standards (e.g. Laminar OT, MRI, ERP, Steel)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#008744] shadow-sm font-sans"
            />
          </div>

          <div className="flex items-center space-x-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
            {PROCUREMENT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  triggerHaptic(10);
                  setSelectedCategory(cat);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-[#008744] text-white font-bold shadow-sm"
                    : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid with Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const isSelected = selectedItems.includes(product.name);
            return (
              <div
                key={product.id}
                className={`bg-white border rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                  isSelected
                    ? "border-[#008744] shadow-xl ring-2 ring-emerald-200 scale-[1.01]"
                    : "border-slate-200 hover:border-slate-400 shadow-sm hover:shadow-lg"
                }`}
              >
                <div>
                  {/* Product Visual Photo */}
                  <div className="relative h-44 overflow-hidden bg-slate-100">
                    <img
                      src={product.image || "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    
                    <span className="absolute top-3 left-3 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-[#008744] border border-emerald-200 font-bold uppercase shadow-sm">
                      {product.category}
                    </span>

                    <span className="absolute bottom-2.5 left-3 text-[11px] font-mono text-white font-medium">
                      {product.subCategory}
                    </span>
                  </div>

                  <div className="p-5 space-y-3">
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {product.name}
                    </h3>
                    
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {product.description}
                    </p>

                    <div className="bg-slate-50 border border-slate-100 p-2.5 rounded-xl space-y-1 text-xs">
                      <div className="text-[9px] font-mono text-slate-400 uppercase font-bold">SPEC HIGHLIGHTS:</div>
                      <p className="text-slate-800 text-[11px] font-mono leading-relaxed truncate">
                        {product.specs}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {product.standards.map((std, i) => (
                        <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-700 font-semibold">
                          ✓ {std}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 mt-2 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => toggleItemSelection(product.name)}
                    className={`px-3.5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center space-x-1.5 ${
                      isSelected
                        ? "bg-emerald-100 text-[#008744] border border-emerald-300"
                        : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    <Check className={`w-3.5 h-3.5 ${isSelected ? "text-[#008744]" : "text-transparent"}`} />
                    <span>{isSelected ? "ADDED TO BOQ" : "+ ADD TO BOQ"}</span>
                  </button>

                  <button
                    onClick={() => onOpenRFQ(undefined, product.name)}
                    className="px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-[#008744] text-white text-xs font-mono font-bold transition-colors flex items-center space-x-1"
                  >
                    <span>RFQ</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating BOQ Tray */}
        {selectedItems.length > 0 && (
          <div className="fixed bottom-20 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-8 z-40 bg-slate-900 text-white rounded-3xl p-4 sm:p-5 border-2 border-emerald-400 shadow-2xl animate-in slide-in-from-bottom duration-300 max-w-md w-full">
            <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
              <div className="flex items-center space-x-2">
                <ShoppingCart className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono font-bold text-white uppercase">
                  CUSTOM BOQ SELECTION ({selectedItems.length})
                </span>
              </div>
              <button onClick={clearSelection} className="text-slate-400 hover:text-red-400 text-xs flex items-center space-x-1">
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear</span>
              </button>
            </div>

            <div className="space-y-1.5 max-h-28 overflow-y-auto mb-3 text-xs font-mono text-slate-300">
              {selectedItems.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between bg-slate-800/80 px-2.5 py-1 rounded-lg">
                  <span className="truncate">{item}</span>
                  <span className="text-emerald-400 text-[10px] ml-2">SELECTED</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onOpenRFQ(undefined, selectedItems.join(", "))}
              className="w-full py-3 bg-gradient-to-r from-[#008744] to-[#065F38] text-white font-bold rounded-xl text-xs font-mono tracking-wider shadow-lg flex items-center justify-center space-x-2"
            >
              <span>SUBMIT {selectedItems.length} ITEMS FOR RFQ / BOQ</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
