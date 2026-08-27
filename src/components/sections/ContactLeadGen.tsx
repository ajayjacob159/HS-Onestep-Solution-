import React, { useState } from "react";
import { Send, CheckCircle2, ArrowRight, ShieldCheck, Mail, Phone, MapPin, Building2 } from "lucide-react";
import { SECTORS } from "../../data/sectorsData";

export const ContactLeadGen: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    sector: "hospital-development",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#008744] text-xs font-mono font-bold tracking-wider uppercase">
              <span>Direct Institutional Channel</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              TELL US WHAT YOU NEED.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Connect with our master project execution desk to review your tender documents, engineering BOQs, or custom facility development scope.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-100 text-xs font-mono text-slate-600">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#008744]" />
                <a href="mailto:info@hsonestepsolutions.com" className="hover:text-[#008744] transition-colors">info@hsonestepsolutions.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#008744]" />
                <span><a href="tel:+919130322864" className="hover:text-[#008744] transition-colors">+91 9130322864</a> / <a href="tel:+917739322864" className="hover:text-[#008744] transition-colors">+91 7739322864</a></span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-[#008744]" />
                <span>Gandharv Nagari, Moshi, Bhosari - 411039, Pune, Maharashtra</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#008744] mx-auto mb-2" />
                <h3 className="text-xl font-bold text-slate-900">INQUIRY RECEIVED</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Thank you. Our institutional project desk has logged your request and will contact you within 24 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 bg-[#008744] text-white font-bold rounded-xl text-xs"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-700 font-bold mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. / Er. / Mr. Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:border-[#008744]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-700 font-bold mb-1">Organization *</label>
                    <input
                      type="text"
                      required
                      placeholder="Hospital Trust / Enterprise"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:border-[#008744]"
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
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:border-[#008744]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-700 font-bold mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 / +971 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:border-[#008744]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 font-bold mb-1">Sector of Interest *</label>
                  <select
                    value={formData.sector}
                    onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:border-[#008744]"
                  >
                    {SECTORS.map((sec) => (
                      <option key={sec.id} value={sec.id}>{sec.title}</option>
                    ))}
                    <option value="multi-sector">Multi-Sector Turnkey Project</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 font-bold mb-1">Project Scope & Specifications</label>
                  <textarea
                    rows={3}
                    placeholder="Provide overview of scope, capacity requirements, or tender reference..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:border-[#008744]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-[#008744] to-[#065F38] text-white font-bold rounded-xl text-xs tracking-wider shadow-md shadow-emerald-700/20 flex items-center justify-center space-x-2"
                  >
                    <span>TRANSMIT INQUIRY</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
