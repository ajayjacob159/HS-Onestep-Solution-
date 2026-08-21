export interface BuilderSectorOption {
  id: string;
  name: string;
  category: string;
  desc?: string;
  defaultArea: number;
  unitLabel: string;
  defaultUnits: number;
}

export const BUILDER_SECTORS: BuilderSectorOption[] = [
  { id: "it-technology-ai", name: "IT Technology & AI Automations", category: "Technology", desc: "Custom software, ERPs, RPA workflow automation & mobile applications", defaultArea: 10000, unitLabel: "Users / Workflows", defaultUnits: 100 },
  { id: "digital-marketing", name: "Digital Marketing & Global Scaling", category: "Commercial", desc: "Omnichannel growth campaigns, corporate branding & B2B lead engines", defaultArea: 5000, unitLabel: "Campaigns / Target Markets", defaultUnits: 5 },
  { id: "healthcare-hospital", name: "Multi-Specialty Hospital (Turnkey)", category: "Healthcare", desc: "Turnkey healthcare development from civil works to NABH commissioning", defaultArea: 65000, unitLabel: "Beds", defaultUnits: 120 },
  { id: "diagnostic-imaging", name: "Advanced Diagnostic Center", category: "Healthcare", desc: "1.5T/3.0T MRI suites, multi-slice CT and digital radiography setups", defaultArea: 15000, unitLabel: "Modalities", defaultUnits: 6 },
  { id: "commercial-kitchen", name: "Commercial Dietary / Central Kitchen", category: "Hospitality", desc: "Food-grade SS 304 prep lines, walk-in cold rooms and exhaust hoods", defaultArea: 12000, unitLabel: "Meals / Day Capacity", defaultUnits: 2000 },
  { id: "civil-infrastructure", name: "Civil Construction & PEB Facility", category: "Infrastructure", desc: "Heavy civil framing, structural steel PEB and institutional complexes", defaultArea: 80000, unitLabel: "Floors / Blocks", defaultUnits: 4 },
  { id: "critical-power", name: "Substation & Critical Energy Plant", category: "Energy", desc: "33kV substations, DG auto-synchronization and medical online UPS", defaultArea: 8000, unitLabel: "Substation kVA", defaultUnits: 2500 },
  { id: "institutional-campus", name: "Corporate / Institutional Campus", category: "Institutional", desc: "Multi-disciplinary academic, research and executive complex fit-outs", defaultArea: 120000, unitLabel: "Staff / Student Capacity", defaultUnits: 1500 }
];

export const REQUIREMENT_TYPES = [
  { id: "full-turnkey", label: "Full Turnkey Master Contract", desc: "Single contract covering engineering, civil, MEP, equipment & commissioning" },
  { id: "equipment-procurement", label: "Specialized Equipment & BOQ Sourcing", desc: "Tier-1 OEM direct procurement, calibration and installation delivery" },
  { id: "software-ai-automation", label: "Custom Software & AI Process Automation", desc: "Enterprise cloud platforms, HMIS, mobile apps and robotic process bots" },
  { id: "digital-growth-scaling", label: "Global Digital Marketing & Scaling", desc: "High-intent B2B lead generation, SEO/AEO and global market expansion" },
  { id: "mep-civil-fitout", label: "MEP, Cleanroom & Civil Interior Fit-Out", desc: "Modular OT suites, MGPS pipelines, SS dietary lines and electrical plants" },
  { id: "retrofit-upgrade", label: "Facility Retrofit & Modernization", desc: "Upgrades, capacity expansion and regulatory compliance re-engineering" }
];

export const SERVICE_DISCIPLINES = [
  { id: "it-software-cloud", label: "Custom Software, Web/Mobile Apps & Cloud ERP", sector: "technology", desc: "Full-stack enterprise application engineering and HMIS platforms" },
  { id: "ai-rpa-automation", label: "AI Process Automations & RPA Workflow Bots", sector: "technology", desc: "Eliminate manual tasks with 24/7 intelligent automated workflows" },
  { id: "digital-marketing-growth", label: "Digital Marketing, SEO/AEO & Global Lead Gen", sector: "commercial", desc: "Full-funnel B2B marketing to outcompete and scale globally" },
  { id: "modular-ot-cleanroom", label: "Modular Operation Theatres & Cleanroom HVAC", sector: "healthcare", desc: "Class 100 sterile surgical suites with HEPA H14 laminar flow" },
  { id: "medical-gas-mgps", label: "Medical Gas Pipeline Systems (MGPS)", sector: "healthcare", desc: "Liquid oxygen storage manifolds and degreased medical copper piping" },
  { id: "radiology-mri-ct", label: "Diagnostic Imaging (1.5T MRI / Multi-Slice CT)", sector: "healthcare", desc: "RF shielded MRI cages and low-dose high-definition CT scanners" },
  { id: "heavy-civil-peb", label: "Heavy Civil Structural & PEB Framing", sector: "infrastructure", desc: "Seismic foundations, high-yield RCC and structural steel framing" },
  { id: "power-substations-dg", label: "Substations, Generators & Critical UPS", sector: "infrastructure", desc: "HT/LT primary power distribution, DG synchronizers and 0ms UPS" },
  { id: "commercial-kitchens-ss", label: "Commercial SS 304 Kitchens & Cold Rooms", sector: "commercial", desc: "HACCP compliant stainless steel cooking, cold storage and dishwashing" },
  { id: "fire-hydrant-suppression", label: "Active Fire Sprinklers & FM-200 Gas Systems", sector: "infrastructure", desc: "NBC compliant hydrants, addressable detection and clean agent gas" },
  { id: "blood-bank-cold-chain", label: "Blood Bank & -86°C Cryogenic Freezers", sector: "healthcare", desc: "Component separation centrifuges and IoT continuous cold loggers" },
  { id: "b2b-furniture-ward", label: "Institutional Furniture & Motorized ICU Beds", sector: "commercial", desc: "Ergonomic 5-function ICU patient beds and heavy-duty workstations" }
];
