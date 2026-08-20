import { ProcurementProduct } from "../types";

export const PROCUREMENT_CATEGORIES = [
  "All Categories",
  "Medical & Surgical",
  "Construction & Materials",
  "Institutional Furniture",
  "Fire & Life Safety",
  "Commercial Kitchens",
  "Energy & Power",
  "Architectural Surfaces",
  "Blood Bank & Cold Chain",
  "Institutional Equipment"
];

export const PROCUREMENT_PRODUCTS: ProcurementProduct[] = [
  // Medical
  {
    id: "med-01",
    name: "Modular Operation Theatre Workstation",
    category: "Medical & Surgical",
    subCategory: "Surgical Suites",
    specs: "Class 100 laminar plenum, surgeon touchscreen panel, integrated LED surgical lighting interface",
    typicalUnit: "Per OT Suite",
    standards: ["ISO Class 5", "NABH Ready", "CE Marked"],
    leadTimePlaceholder: "Standard Project Staging",
    description: "Engineered surgical environment with antimicrobial wall systems, laminar air flow, and digital telemetry."
  },
  {
    id: "med-02",
    name: "High-Acuity ICU Multi-Parameter Monitor System",
    category: "Medical & Surgical",
    subCategory: "Critical Care",
    specs: "15-inch capacitive display, ECG, SpO2, NIBP, Dual IBP, EtCO2, centralized telemetry networking",
    typicalUnit: "Units / Bay Sets",
    standards: ["Medical Device Standard", "EMC Tested"],
    leadTimePlaceholder: "Standard Project Staging",
    description: "Centralized vital parameter monitoring with arrhythmia analysis and real-time bedside telemetry."
  },
  {
    id: "med-03",
    name: "Digital Radiography (DR) X-Ray System",
    category: "Medical & Surgical",
    subCategory: "Diagnostic Imaging",
    specs: "50kW High-frequency generator, wireless flat panel detector, motorized ceiling suspended tube stand",
    typicalUnit: "Complete Suite",
    standards: ["Radiation Safety Compliant", "DICOM 3.0"],
    leadTimePlaceholder: "Standard Project Staging",
    description: "High-resolution low-dose digital diagnostic imaging with automated positioning and PACS connectivity."
  },
  // Construction
  {
    id: "con-01",
    name: "Institutional Grade Structural Steel & Rebar",
    category: "Construction & Materials",
    subCategory: "Structural Materials",
    specs: "Fe-550D TMT bars with high ductility and corrosion-resistant alloy formulation",
    typicalUnit: "Metric Tonnes",
    standards: ["IS 1786", "BIS Certified"],
    leadTimePlaceholder: "Bulk Staged Delivery",
    description: "High-strength certified reinforcement steel for hospital, commercial, and civic structural foundations."
  },
  {
    id: "con-02",
    name: "Cleanroom Modular Wall & Ceiling Panel System",
    category: "Construction & Materials",
    subCategory: "Specialized Interiors",
    specs: "50mm Progressive HPL / Powder-coated galvanized steel with PIR fire-retardant core",
    typicalUnit: "Square Meters",
    standards: ["Fire Rated", "Antimicrobial"],
    leadTimePlaceholder: "Fabrication Staging",
    description: "Flush-joint partition walls designed for sterile surgical environments and pharmaceutical cleanrooms."
  },
  // Furniture
  {
    id: "furn-01",
    name: "Motorized 5-Function ICU Hospital Bed",
    category: "Institutional Furniture",
    subCategory: "Healthcare Seating & Beds",
    specs: "Electric Trendelenburg, reverse Trendelenburg, cardiac chair position, integrated weighing scale",
    typicalUnit: "Sets / Lot",
    standards: ["IEC 60601-2-52", "CE"],
    leadTimePlaceholder: "Bulk Staged Delivery",
    description: "Heavy-duty critical care bed with emergency CPR quick release and central dual-brake castors."
  },
  {
    id: "furn-02",
    name: "High-Density Modular Corporate Workstation Grid",
    category: "Institutional Furniture",
    subCategory: "Commercial Office",
    specs: "Powder-coated steel understructure, acoustic felt screens, integrated wire raceways",
    typicalUnit: "100+ Seater Clusters",
    standards: ["BIFMA X5.5", "GreenGuard"],
    leadTimePlaceholder: "Staged Deployment",
    description: "Scalable commercial office desking systems with ergonomic wire management and privacy partitions."
  },
  // Fire Safety
  {
    id: "fire-01",
    name: "Addressable Multi-Loop Fire Detection Hub",
    category: "Fire & Life Safety",
    subCategory: "Detection & Alarms",
    specs: "4 to 8 Loop networkable panel, 250 devices per loop, color graphic LCD, BMS Modbus gateway",
    typicalUnit: "Panel & System Kit",
    standards: ["UL Listed", "FM Approved", "EN54"],
    leadTimePlaceholder: "Project Staging",
    description: "Intelligent life-safety management system supporting multi-floor zoning and automated suppression trigger."
  },
  {
    id: "fire-02",
    name: "Clean Agent Total Flooding Suppression System",
    category: "Fire & Life Safety",
    subCategory: "Gas Suppression",
    specs: "FM-200 / Novec 1230 agent cylinders, electric/pneumatic actuator valves, discharge nozzles",
    typicalUnit: "Room Protected System",
    standards: ["NFPA 2001", "UL/FM"],
    leadTimePlaceholder: "Project Staging",
    description: "Zero-residue gaseous extinguishing system for hospital data centers, electrical rooms, and OT suites."
  },
  // Commercial Kitchen
  {
    id: "kit-01",
    name: "Commercial Heavy-Duty Combi-Steamer Oven",
    category: "Commercial Kitchens",
    subCategory: "Cooking & Thermal",
    specs: "20-Pan GN 1/1 capacity, automated boiler injection, touchscreen multi-cook recipes",
    typicalUnit: "Unit / Commercial Skid",
    standards: ["NSF Food Grade", "CE"],
    leadTimePlaceholder: "Staged Delivery",
    description: "High-volume programmable steam and convection oven for institutional cafeterias and hospital dietary wings."
  },
  {
    id: "kit-02",
    name: "Walk-In Modular Cold Storage & Freezer Rooms",
    category: "Commercial Kitchens",
    subCategory: "Refrigeration",
    specs: "100mm PUF panels, hermetic compressor skid, digital micro-controller, heated door gaskets",
    typicalUnit: "Custom Room Dimensions",
    standards: ["HACCP Compliant", "Energy Star"],
    leadTimePlaceholder: "Site Assembly Staging",
    description: "Heavy-duty commercial cold preservation facilities with dual condensing units for zero-downtime food security."
  },
  // Energy
  {
    id: "eng-01",
    name: "Institutional HT/LT Power Distribution Substation",
    category: "Energy & Power",
    subCategory: "Electrical Distribution",
    specs: "Dry-type Cast Resin Transformer (1000 kVA), Air Circuit Breakers (ACB), PLC-based auto synchronizing",
    typicalUnit: "Substation Package",
    standards: ["IEC 61439", "IS Standards"],
    leadTimePlaceholder: "Custom Engineered Staging",
    description: "High-reliability electrical distribution switchgear engineered for zero-failure continuous hospital loads."
  },
  // Surfaces
  {
    id: "surf-01",
    name: "Hospital-Grade Antimicrobial Vitrified Flooring",
    category: "Architectural Surfaces",
    subCategory: "Commercial Stone & Tile",
    specs: "600x1200mm / 800x1600mm Full-body vitrified porcelain with anti-slip and stain-resistant glaze",
    typicalUnit: "Square Feet / Metric Pallets",
    standards: ["ISO 13006", "Antibacterial Certified"],
    leadTimePlaceholder: "Bulk Container Logistics",
    description: "Heavy-traffic architectural stone and porcelain tiles engineered for high chemical and abrasion resistance."
  },
  // Blood Bank
  {
    id: "bb-01",
    name: "Ultra-Low Temperature Plasma Storage Freezer (-86°C)",
    category: "Blood Bank & Cold Chain",
    subCategory: "Cold Chain Preservation",
    specs: "700L capacity, dual cascade compressors, VIP vacuum insulation panels, 72-hour battery backup logger",
    typicalUnit: "Units / Laboratory Sets",
    standards: ["Medical Cold-Chain Approved", "DIN 58375"],
    leadTimePlaceholder: "Specialized Staging",
    description: "Critical cryogenic preservation freezer with automated hot-gas defrost and remote cloud temperature alerts."
  },
  // Institutional Equipment
  {
    id: "inst-01",
    name: "Integrated Campus IP-CCTV & Telemetry Hub",
    category: "Institutional Equipment",
    subCategory: "Security & Automation",
    specs: "4K AI analytics cameras, centralized enterprise NVR array with 90-day RAID6 redundancy",
    typicalUnit: "Turnkey Campus Package",
    standards: ["ONVIF Profile S/G/T", "UL"],
    leadTimePlaceholder: "Project Staging",
    description: "Enterprise surveillance and access control network for sprawling government, educational, and medical campuses."
  }
];
