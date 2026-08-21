import React, { useState } from "react";
import { 
  Search, 
  ShoppingCart, 
  FileText, 
  ArrowRight, 
  Plus, 
  Check, 
  Package,
  Sparkles
} from "lucide-react";
import { PROCUREMENT_CATEGORIES, PROCUREMENT_PRODUCTS } from "../../data/procurementData";
import { ProcurementProduct } from "../../types";

interface ProcurementCatalogProps {
  onOpenRFQ: (sectorId?: string, productName?: string) => void;
}

export const ProcurementCatalog: React.FC<ProcurementCatalogProps> = ({ onOpenRFQ }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Categories");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const filteredProducts = PROCUREMENT_PRODUCTS.filter((prod) => {
    const matchesCategory = selectedCategory === "All Categories" || prod.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (prod.subCategory || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.specs.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItemSelection = (prodName: string) => {
    if (selectedItems.includes(prodName)) {
      setSelectedItems(selectedItems.filter(item => item !== prodName));
    } else {
      setSelectedItems([...selectedItems, prodName]);
    }
  };

  return (
    <section id="procurement" className="py-24 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#008744] text-xs font-mono font-bold tracking-wider uppercase">
            <Package className="w-3.5 h-3.5" />
            <span>Institutional Procurement Platform</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            ONE REQUIREMENT. MULTIPLE CATEGORIES. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008744] to-[#D4AF37]">
              ONE COORDINATED PARTNER.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Direct institutional sourcing across medical technology, civil construction materials, B2B furniture, life safety, and commercial kitchen infrastructure. Built for enterprise BOQs and government tenders.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 mb-8 space-y-4 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search equipment, specs or standard..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-[#008744] font-sans shadow-inner"
              />
            </div>

            <div className="flex items-center space-x-3 w-full md:w-auto justify-between md:justify-end">
              <span className="text-xs font-mono text-slate-500">
                {filteredProducts.length} Product Families Available
              </span>
              {selectedItems.length > 0 && (
                <button
                  onClick={() => onOpenRFQ(undefined, selectedItems.join(", "))}
                  className="px-4 py-2 bg-gradient-to-r from-[#008744] to-[#065F38] text-white font-bold rounded-xl text-xs font-mono tracking-wider flex items-center space-x-2 shadow-md shadow-emerald-700/20"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>SUBMIT BOQ ({selectedItems.length})</span>
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-2 overflow-x-auto pb-1 pt-2 border-t border-slate-200">
            {PROCUREMENT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const isSelected = selectedItems.includes(product.name);
            return (
              <div
                key={product.id}
                className={`bg-white border rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 ${
                  isSelected
                    ? "border-[#008744] shadow-md ring-2 ring-emerald-100"
                    : "border-slate-200 hover:border-slate-300 shadow-sm"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#008744] border border-emerald-200 font-bold uppercase">
                      {product.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 font-medium">
                      {product.subCategory}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-600 font-normal mt-1.5 line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl space-y-1 text-xs">
                    <div className="text-[10px] font-mono text-slate-500 uppercase font-bold">SPECIFICATION HIGHLIGHTS:</div>
                    <p className="text-slate-800 text-[11px] font-mono leading-relaxed">
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

                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => toggleItemSelection(product.name)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center space-x-1.5 ${
                      isSelected
                        ? "bg-emerald-100 text-[#008744] border border-emerald-300"
                        : "bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900"
                    }`}
                  >
                    {isSelected ? <Check className="w-3.5 h-3.5 text-[#008744]" /> : <Plus className="w-3.5 h-3.5" />}
                    <span>{isSelected ? "IN BOQ LIST" : "ADD TO BOQ"}</span>
                  </button>

                  <button
                    onClick={() => onOpenRFQ(undefined, product.name)}
                    className="px-4 py-2 bg-gradient-to-r from-[#008744] to-[#065F38] hover:from-[#065F38] hover:to-[#008744] text-white font-bold rounded-xl text-xs font-mono tracking-wider transition-all flex items-center space-x-1 shadow-sm"
                  >
                    <span>RFQ</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-slate-900 text-white rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold">HAVE A CUSTOM BOQ OR TENDER SPECIFICATION?</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl font-light">
              Our institutional procurement division coordinates direct volume pricing, manufacturer warranties, and staged site delivery across all 12 operational sectors.
            </p>
          </div>
          <button
            onClick={() => onOpenRFQ()}
            className="px-8 py-3.5 bg-gradient-to-r from-[#008744] to-[#065F38] hover:from-[#065F38] hover:to-[#008744] text-white font-bold rounded-xl text-xs font-mono tracking-wider transition-all flex-shrink-0 shadow-lg shadow-emerald-700/20 flex items-center space-x-2"
          >
            <FileText className="w-4 h-4" />
            <span>SUBMIT CUSTOM BOQ</span>
          </button>
        </div>
      </div>
    </section>
  );
};
