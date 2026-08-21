import { ProcurementProduct } from "../types";

export const PROCUREMENT_CATEGORIES = [
  "All Categories",
  "Medical & Surgical",
  "IT & AI Automations",
  "Construction & Materials",
  "Institutional Furniture",
  "Fire & Life Safety",
  "Commercial Kitchens",
  "Energy & Power",
  "Architectural Surfaces",
  "Blood Bank & Cold Chain"
];

export const PROCUREMENT_PRODUCTS: ProcurementProduct[] = [
  // IT & AI Automations
  {
    id: "it-01",
    name: "Enterprise Cloud ERP & HMIS Hospital Platform",
    category: "IT & AI Automations",
    subCategory: "Software Systems",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    specs: "Multi-tenant cloud architecture, HL7/FHIR compliant, automated EMR, billing, pharmacy and laboratory modules",
    typicalUnit: "Enterprise License",
    standards: ["SOC 2 Type II", "HIPAA Ready", "ISO 27001"],
    leadTimePlaceholder: "Rapid Cloud Deployment",
    description: "End-to-end digital hospital operating system synchronizing clinical, administrative, and inventory workflows."
  },
  {
    id: "ai-01",
    name: "AI Robotic Process Automation (RPA) Orchestration Engine",
    category: "IT & AI Automations",
    subCategory: "Intelligent Automation",
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80",
    specs: "Autonomous document parsing (IDP), multi-system API integration, 24/7 self-healing execution bots",
    typicalUnit: "Platform Subscription",
    standards: ["Enterprise RPA", "Zero-Data-Leakage", "99.9% Uptime"],
    leadTimePlaceholder: "Immediate Staging",
    description: "Eliminates manual data entry and repetitive administrative tasks, scaling operations at 10x speed with zero defects."
  },
  // Medical
  {
    id: "med-01",
    name: "Modular Operation Theatre Workstation",
    category: "Medical & Surgical",
    subCategory: "Surgical Suites",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
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
    subCategory: "Active Fire Alarms",
    image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=800&q=80",
    specs: "8-Loop intelligent addressable panel, optical smoke sensors, multi-criteria thermal detectors",
    typicalUnit: "Networked System",
    standards: ["EN54-2/4", "UL-Listed"],
    leadTimePlaceholder: "Direct Procurement",
    description: "Comprehensive facility fire safety monitoring with pinpoint loop localization and automatic suppression trigger."
  },
  // Kitchens
  {
    id: "kit-01",
    name: "Commercial SS 304 High-Volume Induction Range",
    category: "Commercial Kitchens",
    subCategory: "Cooking Equipment",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
    specs: "Heavy-duty food grade AISI 304 construction, 5kW per zone high-efficiency induction generators",
    typicalUnit: "Units",
    standards: ["NSF Standard", "CE"],
    leadTimePlaceholder: "Fabrication Staging",
    description: "Energy-efficient institutional cooking block designed for continuous commercial kitchen operations."
  },
  // Energy
  {
    id: "pwr-01",
    name: "Redundant Modular Medical Grade Online UPS",
    category: "Energy & Power",
    subCategory: "Critical Power",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
    specs: "True online double conversion, N+1 power module redundancy, zero millisecond transfer switch",
    typicalUnit: "kVA Configurations",
    standards: ["IEC 62040-3", "Class 1 Uptime"],
    leadTimePlaceholder: "Staged Deployment",
    description: "Clean uninterruptible power supply for operation theatres, ICUs, and critical data infrastructure."
  },
  // Surfaces
  {
    id: "surf-01",
    name: "Antimicrobial Conductive Homogeneous OT Vinyl",
    category: "Architectural Surfaces",
    subCategory: "Healthcare Flooring",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    specs: "2.0mm thickness, electrical resistance 10^4 - 10^6 ohms, hot-welded seamless joint installation",
    typicalUnit: "Rolls / Sq. Meters",
    standards: ["EN 1081", "Cleanroom Class A"],
    leadTimePlaceholder: "Direct Procurement",
    description: "Static-dissipative vinyl flooring providing infection control and electrostatic protection in surgical environments."
  },
  // Cold Chain
  {
    id: "cold-01",
    name: "Ultra-Low Temperature Plasma Storage Freezer",
    category: "Blood Bank & Cold Chain",
    subCategory: "Biological Cold Chain",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
    specs: "-86°C capability, dual cascade refrigeration compressors, automated IoT temperature telemetry logger",
    typicalUnit: "Units",
    standards: ["ISO 13485", "CE Medical"],
    leadTimePlaceholder: "Standard Project Staging",
    description: "Validated biological cold storage for blood components, vaccines, and high-value pharmaceuticals."
  }
];
