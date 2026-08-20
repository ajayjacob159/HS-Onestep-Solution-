import React, { useState } from "react";
import { X, Upload, CheckCircle2, ShieldCheck, ArrowRight, Building, Mail, Phone, User, MapPin } from "lucide-react";
import { SECTORS } from "../../data/sectorsData";

interface ModalRFQProps {
  isOpen: boolean;
  onClose: () => void;
  initialSector?: string;
  initialProduct?: string;
}

export const ModalRFQ: React.FC<ModalRFQProps> = ({
  isOpen,
  onClose,
  initialSector,
  initialProduct
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    projectName: "",
    organization: "",
    designation: "",
    email: "",
    phone: "",
    sector: initialSector || "hospital-development",
    location: "",
    requirementType: "Turnkey Project Execution",
    budgetRange: "₹50 Lakhs - ₹5 Crores",
    timeline: "3 - 6 Months",
    boqFileName: initialProduct ? `BOQ-Spec-${initialProduct}.pdf` : "",
    message: initialProduct ? `Inquiry regarding institutional procurement for: ${initialProduct}` : ""
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/70 backdrop-blur-md">
      <div 
        className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="HS" className="h-9 object-contain" />
            <div>
              <h3 className="text-base font-bold text-slate-900 tracking-wide">REQUEST FOR QUOTATION (RFQ)</h3>
              <p className="text-xs text-slate-500 font-mono">INSTITUTIONAL PROCUREMENT & TURNKEY DESK</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 sm:p-12 text-center">
            <div className="w-16 h-16 bg-emerald-100 border border-emerald-300 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-[#008744]" />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-2">YOUR REQUIREMENT HAS BEEN RECEIVED.</h4>
            <p className="text-slate-600 max-w-lg mx-auto text-sm mb-6 leading-relaxed">
              Your institutional specification package has been logged under reference identifier <span className="font-mono text-[#008744] font-bold">HS-RFQ-{Math.floor(100000 + Math.random() * 900000)}</span>. Our technical procurement & engineering team will review the BOQ parameters and reach out.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-md mx-auto mb-8 text-left text-xs text-slate-600 space-y-1.5 font-mono">
              <div><span className="text-slate-400">Project:</span> <span className="text-slate-900 font-bold">{formData.projectName || "General Inquiry"}</span></div>
              <div><span className="text-slate-400">Organization:</span> <span className="text-slate-900 font-bold">{formData.organization || "Direct Client"}</span></div>
              <div><span className="text-slate-400">Sector:</span> <span className="text-[#008744] font-bold">{formData.sector}</span></div>
            </div>
            <button
              onClick={handleReset}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-[#008744] hover:bg-[#065F38] text-white font-semibold rounded-xl text-sm transition-all"
            >
              <span>Close Window</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5 max-h-[80vh] overflow-y-auto">
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-start space-x-3 text-xs text-emerald-900">
              <ShieldCheck className="w-5 h-5 text-[#008744] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block mb-0.5">Enterprise & Institutional Procurement Gate</strong>
                We review full BOQ schedules, tender specifications, and custom facility development requirements across Government, Public & Private Sectors.
              </div>
            </div>

            {/* Grid fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-bold">Project / Facility Name *</label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. 200-Bed Multi-Specialty Hospital"
                    value={formData.projectName}
                    onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-[#008744] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-bold">Organization / Entity *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Hospital Trust / Gov Dept / Corp"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-[#008744] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-bold">Sector Vertical *</label>
                <select
                  value={formData.sector}
                  onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-[#008744] transition-colors"
                >
                  {SECTORS.map((sec) => (
                    <option key={sec.id} value={sec.id}>{sec.title}</option>
                  ))}
                  <option value="multi-sector">Multi-Sector Turnkey Project</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-bold">Project Location / City *</label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mumbai, New Delhi, Dubai"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-[#008744] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-bold">Contact Email *</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    type="email"
                    required
                    placeholder="official@organization.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-[#008744] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-bold">Contact Phone *</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    type="tel"
                    required
                    placeholder="+91 / +971 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-[#008744] transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Scope and upload */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-bold">Estimated Scale / Value</label>
                <select
                  value={formData.budgetRange}
                  onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-[#008744]"
                >
                  <option>₹10 Lakhs - ₹50 Lakhs</option>
                  <option>₹50 Lakhs - ₹5 Crores</option>
                  <option>₹5 Crores - ₹25 Crores</option>
                  <option>₹25 Crores - ₹100+ Crores</option>
                  <option>Large Institutional Tender / Program</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-bold">Project Timeline</label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-[#008744]"
                >
                  <option>Immediate (Within 30 Days)</option>
                  <option>1 - 3 Months</option>
                  <option>3 - 6 Months</option>
                  <option>6 - 12 Months</option>
                  <option>Turnkey Multi-Year Phase</option>
                </select>
              </div>
            </div>

            {/* BOQ File Upload */}
            <div>
              <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-bold">Upload BOQ / Specification Document (Optional)</label>
              <label className="border-2 border-dashed border-slate-300 hover:border-[#008744] rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer transition-colors bg-slate-50">
                <Upload className="w-6 h-6 text-[#008744] mb-1.5" />
                <span className="text-xs text-slate-700 font-medium">
                  {formData.boqFileName ? `Attached: ${formData.boqFileName}` : "Drop BOQ / Tender document (.pdf, .xlsx, .zip) or click to browse"}
                </span>
                <span className="text-[11px] text-slate-400 font-mono mt-0.5">Max size 25MB • Secure encrypted transmission</span>
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setFormData({ ...formData, boqFileName: e.target.files[0].name });
                    }
                  }}
                />
              </label>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-1.5 font-bold">Project Scope & Custom Specifications</label>
              <textarea
                rows={3}
                placeholder="Outline specific deliverables, room configurations, technical certifications or equipment brand preferences..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-[#008744] transition-colors"
              />
            </div>

            {/* Submit */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-100">
              <span className="text-xs text-slate-500 font-mono">Confidentiality & NDA protocols assured</span>
              <button
                type="submit"
                className="px-8 py-3.5 bg-gradient-to-r from-[#008744] to-[#065F38] hover:from-[#065F38] hover:to-[#008744] text-white font-bold rounded-xl text-sm shadow-lg shadow-emerald-600/20 transition-all flex items-center space-x-2"
              >
                <span>SUBMIT PROJECT REQUIREMENT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
