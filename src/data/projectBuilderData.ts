export interface WizardSector {
  id: string;
  name: string;
  desc: string;
  icon: string;
}

export const BUILDER_SECTORS: WizardSector[] = [
  { id: "healthcare", name: "Healthcare & Hospitals", desc: "Turnkey hospitals, medical centers, clinics & specialized labs", icon: "Building2" },
  { id: "construction", name: "Construction & Infrastructure", desc: "Civil works, institutional buildings & campus structures", icon: "HardHat" },
  { id: "energy", name: "Energy & Critical Power", desc: "Substations, industrial power, backup DG & clean energy", icon: "Zap" },
  { id: "hospitality", name: "Hospitality & Food Service", desc: "Hotels, commercial dietary facilities & mega-cafeterias", icon: "UtensilsCrossed" },
  { id: "government", name: "Government & Public Sector", desc: "Civic facilities, public health & administrative infrastructure", icon: "Landmark" },
  { id: "education", name: "Education & Research", desc: "Universities, research campuses, labs & smart classrooms", icon: "GraduationCap" },
  { id: "industrial", name: "Industrial & Manufacturing", desc: "Factories, warehousing, cleanrooms & process facilities", icon: "Factory" },
  { id: "corporate", name: "Corporate & Commercial", desc: "Office headquarters, business parks & commercial interiors", icon: "Briefcase" }
];

export const REQUIREMENT_TYPES = [
  { id: "new-turnkey", label: "Greenfield / Turnkey Facility", desc: "Complete development from ground up to operational handover" },
  { id: "expansion", label: "Facility Expansion / Wing Addition", desc: "Adding new specialized departments, wings or capacity" },
  { id: "renovation", label: "Retrofit & Modernization", desc: "Upgrading existing civil, MEP or medical/commercial infrastructure" },
  { id: "procurement", label: "Large-Scale Equipment Procurement", desc: "Consolidated Bill of Quantities (BOQ) equipment sourcing" },
  { id: "fitout", label: "Specialized Interiors & Fit-Out", desc: "Modular cleanrooms, commercial kitchens or corporate desking" },
  { id: "compliance", label: "Safety & Systems Infrastructure", desc: "Fire safety, medical gas (MGPS) or electrical substation works" }
];

export const SERVICE_DISCIPLINES = [
  { id: "civil", label: "Civil Construction & Structural Works", sector: "infrastructure" },
  { id: "mep", label: "MEP, HVAC & Cleanroom Air Conditioning", sector: "infrastructure" },
  { id: "medical-equip", label: "Medical, Diagnostic & OT Equipment", sector: "healthcare" },
  { id: "mgps", label: "Medical Gas Pipeline Systems (MGPS)", sector: "healthcare" },
  { id: "blood-bank", label: "Blood Bank & Cold Chain Infrastructure", sector: "healthcare" },
  { id: "furniture", label: "Institutional & Healthcare Furniture", sector: "commercial" },
  { id: "kitchen", label: "Commercial & Industrial Dietary Kitchens", sector: "commercial" },
  { id: "surfaces", label: "Tiles, Granite & Architectural Surfaces", sector: "commercial" },
  { id: "fire-safety", label: "Fire Detection, Sprinklers & Gas Suppression", sector: "infrastructure" },
  { id: "energy-power", label: "Electrical Substations, Panels & DG Power", sector: "infrastructure" },
  { id: "lab-systems", label: "Pathology & Research Laboratory Benching", sector: "institutional" },
  { id: "commissioning", label: "Turnkey Integration & Final Commissioning", sector: "infrastructure" }
];
