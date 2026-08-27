import React, { useState } from "react";
import { X, Upload, CheckCircle2, ShieldCheck, ArrowRight, Building, Mail, Phone, User, MapPin, Loader2 } from "lucide-react";
import { SECTORS } from "../../data/sectorsData";
import { submitInquiryToEmail } from "../../utils/formSubmit";
import { triggerHaptic } from "../../utils/haptics";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    triggerHaptic(15);
    setIsSubmitting(true);

    await submitInquiryToEmail("RFQ_MODAL", formData);

    setIsSubmitting(false);
    setSubmitted(true);
    triggerHaptic(30);
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
              <p className="text-xs text-slate-500 font-mono">ALL SUBMISSIONS DELIVERED TO: INFO@HSONESTEPSOLUTIONS.COM</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-200 text-slate-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#008744] flex items-center justify-center mx-auto mb-2 shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                RFQ TRANSMITTED TO DESK
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.organization || "Client"}</strong>. Your project specifications have been sent directly to <strong>info@hsonestepsolutions.com</strong>.
              </p>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 max-w-md mx-auto text-xs font-mono text-slate-600 space-y-1 text-left">
                <div><strong>Sector:</strong> {formData.sector}</div>
                <div><strong>Timeline:</strong> {formData.timeline}</div>
                <div><strong>Delivery Target:</strong> info@hsonestepsolutions.com</div>
              </div>
              <button
                onClick={handleReset}
                className="mt-6 px-8 py-3 bg-[#008744] text-white font-bold rounded-xl text-xs font-mono tracking-wider shadow-lg"
              >
                RETURN TO WEBSITE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Client & Organization Details */}
              <div className="space-y-3">
                <span className="text-xs font-mono text-[#008744] font-bold uppercase tracking-wider block">
                  1. Institutional Contact Profile
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-700 font-bold mb-1">Organization / Trust Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apollo / State Health Mission"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:border-[#008744]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 font-bold mb-1">Contact Person Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. / Er. / Mr. Name"
                      value={formData.projectName}
                      onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:border-[#008744]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-700 font-bold mb-1">Official Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:border-[#008744]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 font-bold mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:border-[#008744]"
                    />
                  </div>
                </div>
              </div>

              {/* Project Scope & Sector */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <span className="text-xs font-mono text-[#008744] font-bold uppercase tracking-wider block">
                  2. Project Scope & Timeline
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-700 font-bold mb-1">Sector Discipline *</label>
                    <select
                      value={formData.sector}
                      onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:border-[#008744]"
                    >
                      {SECTORS.map((sec) => (
                        <option key={sec.id} value={sec.id}>{sec.title}</option>
                      ))}
                      <option value="multi-discipline">Multi-Discipline Turnkey Project</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 font-bold mb-1">Target Timeline</label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:border-[#008744]"
                    >
                      <option value="Immediate (1-3 Months)">Immediate (1 - 3 Months)</option>
                      <option value="3 - 6 Months">3 - 6 Months</option>
                      <option value="6 - 12 Months (Turnkey)">6 - 12 Months (Turnkey)</option>
                      <option value="Tender / Budgetary Stage">Tender / Budgetary Planning</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 font-bold mb-1">Specific Requirements / Items</label>
                  <textarea
                    rows={3}
                    placeholder="List required equipment, square footage, cleanroom class, software scope, or procurement line items..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:border-[#008744]"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                <div className="text-[11px] font-mono text-slate-500 hidden sm:block">
                  🔒 Direct routing to info@hsonestepsolutions.com
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#008744] to-[#065F38] text-white font-bold rounded-xl text-xs font-mono tracking-wider shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>TRANSMITTING RFQ...</span>
                    </>
                  ) : (
                    <>
                      <span>TRANSMIT RFQ / BOQ</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
