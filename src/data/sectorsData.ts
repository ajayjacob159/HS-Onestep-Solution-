import { Sector } from "../types";

export const SECTORS: Sector[] = [
  {
    id: "hospital-development",
    title: "Hospital Development",
    slug: "hospital-development",
    subtitle: "Turnkey Healthcare Facility Development",
    shortDesc: "Complete hospital development from greenfield site planning, civil works, MEP, and cleanroom interiors to medical gas, OT/ICU suites, equipment deployment, and final commissioning.",
    fullDesc: "Positioned as our flagship turnkey execution capability: we coordinate the complete lifecycle from architectural layouts and civil engineering to specialized hospital infrastructure, cleanrooms, medical equipment deployment, and statutory commissioning.",
    iconName: "Building2",
    category: "healthcare",
    badge: "Flagship Capability",
    isFlagship: true,
    capabilities: [
      "Facility Master Planning & Architectural Layouts",
      "Hospital-Grade Civil & Structural Construction",
      "Specialized MEP, Cleanroom & Medical HVAC",
      "Medical Gas Pipeline Systems (MGPS)",
      "Modular Operation Theatres (OT) & ICU Suites",
      "B2B Healthcare Furniture & Ergonomic Fit-Outs",
      "Complete Diagnostic & Medical Equipment Deployment",
      "Statutory Compliance, Testing & Commissioning"
    ],
    keyDeliverables: [
      "Civil & Structural Works",
      "Modular OT & Cleanroom Infrastructure",
      "Medical Gas Systems (MGPS)",
      "High-Acuity ICU/CCU Setups",
      "Complete Diagnostics & Imaging",
      "Dietary & CSSD Facility Integration"
    ],
    specifications: [
      { label: "Deployment Scope", value: "Greenfield & Brownfield" },
      { label: "Execution Model", value: "Single-Vendor Turnkey" },
      { label: "Compliance Focus", value: "Hospital & Institutional Standards" },
      { label: "Integration Tier", value: "End-to-End Civil + Tech + Med" }
    ],
    representativeVisual: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    ctaText: "EXPLORE HOSPITAL SOLUTIONS"
  },
  {
    id: "medical-surgical",
    title: "Medical & Surgical",
    slug: "medical-surgical",
    subtitle: "Advanced Medical Equipment & Surgical Infrastructure",
    shortDesc: "End-to-end procurement and installation of diagnostic equipment, surgical suites, modular OT infrastructure, ICU life support, and patient-care technology.",
    fullDesc: "Integrated procurement and deployment of precision medical devices, diagnostic radiology systems, operating theater equipment, intensive care monitoring, and surgical instrumentation for institutional healthcare providers.",
    iconName: "Stethoscope",
    category: "healthcare",
    badge: "Healthcare Tech",
    capabilities: [
      "Medical Equipment Procurement & Deployment",
      "Surgical Suites & Electrosurgical Units",
      "Modular OT Integration & Surgical Pendants",
      "Diagnostic Imaging & Radiology Systems",
      "ICU Multi-Parameter Patient Monitors & Ventilators",
      "Patient-Care Beds, Stretchers & Crash Carts",
      "Medical Consumables & Sterile Processing Units",
      "Institutional Healthcare Procurement Coordination"
    ],
    keyDeliverables: [
      "Operation Theatre (OT) Workstations",
      "Diagnostic Imaging (CT/X-Ray/Ultrasound)",
      "ICU Critical Care Infrastructure",
      "Surgical Instrument Sets & Autoclaves",
      "Centralized Patient Monitoring Stations"
    ],
    specifications: [
      { label: "Procurement Tier", value: "Institutional & Enterprise" },
      { label: "Equipment Grade", value: "Hospital Standard" },
      { label: "Lifecycle Support", value: "Installation & Calibration" },
      { label: "Supply Model", value: "Consolidated Procurement" }
    ],
    representativeVisual: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=1200&q=80",
    ctaText: "EXPLORE MEDICAL SOLUTIONS"
  },
  {
    id: "construction-infrastructure",
    title: "Construction & Infrastructure",
    slug: "construction-infrastructure",
    subtitle: "Institutional Civil Engineering & Turnkey Works",
    shortDesc: "Turnkey institutional construction, civil engineering, MEP systems, building materials, commercial interiors, and large-scale structural development.",
    fullDesc: "Comprehensive infrastructure execution managing civil construction, reinforced structural works, mechanical, electrical, and plumbing (MEP) engineering, interior fit-outs, and heavy construction material logistics.",
    iconName: "HardHat",
    category: "infrastructure",
    badge: "Civil Engineering",
    capabilities: [
      "Institutional Civil Construction & Structural Works",
      "Turnkey Building & Campus Infrastructure",
      "Core MEP (Mechanical, Electrical, Plumbing) Systems",
      "Commercial & Institutional Interior Fit-Outs",
      "Bulk Construction Materials Supply & Logistics",
      "Specialized Industrial Flooring & Wall Systems",
      "Project Management & Site Engineering Oversight"
    ],
    keyDeliverables: [
      "Turnkey Institutional Buildings",
      "Integrated MEP Infrastructure",
      "Structural Steel & RCC Framing",
      "Architectural Finishes & Fit-Outs",
      "Site Civil & Utility Engineering"
    ],
    specifications: [
      { label: "Project Types", value: "Institutional, Commercial & Public" },
      { label: "Procurement", value: "Turnkey Material + Execution" },
      { label: "Engineering", value: "Full-Cycle MEP & Civil" },
      { label: "Oversight", value: "Dedicated Project Management" }
    ],
    representativeVisual: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80",
    ctaText: "EXPLORE CONSTRUCTION SOLUTIONS"
  },
  {
    id: "energy",
    title: "Energy & Power Solutions",
    slug: "energy",
    subtitle: "Critical Power Infrastructure & Backup Systems",
    shortDesc: "Heavy-duty electrical infrastructure, continuous power solutions, industrial backup systems, distribution panels, and power equipment procurement.",
    fullDesc: "Modular energy and electrical systems designed for zero-interruption institutional environments. Sourcing and installation of transformers, high-capacity generators, UPS networks, and smart energy distribution boards.",
    iconName: "Zap",
    category: "infrastructure",
    badge: "Power & Utilities",
    capabilities: [
      "Institutional Energy Infrastructure Engineering",
      "Industrial Electrical Distribution & Substations",
      "Critical Backup Systems & DG Synchronization",
      "Online UPS & Battery Storage Banks",
      "HT/LT Switchgears & Power Panels",
      "Energy Efficiency Audits & Monitoring Systems",
      "Modular Power Equipment Procurement"
    ],
    keyDeliverables: [
      "HT/LT Electrical Distribution Panels",
      "Industrial Diesel Generators & Auto-Mains Failure",
      "High-Capacity Online Medical/Industrial UPS",
      "Substation Infrastructure & Transformers",
      "Harmonic Filters & Power Factor Correction"
    ],
    specifications: [
      { label: "System Redundancy", value: "N+1 / Tier-Grade Ready" },
      { label: "Application", value: "Hospitals, Plants & Institutions" },
      { label: "Scope", value: "Design, Sourcing & Integration" },
      { label: "Modularity", value: "Expandable Architectures" }
    ],
    representativeVisual: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    ctaText: "EXPLORE ENERGY SOLUTIONS"
  },
  {
    id: "blood-bank-solutions",
    title: "Blood Bank Solutions",
    slug: "blood-bank-solutions",
    subtitle: "Specialized Cold Chain & Blood Processing Infrastructure",
    shortDesc: "Dedicated medical-technology solutions for institutional blood banks: ultra-low refrigeration, plasma freezers, component separators, and sterile storage environments.",
    fullDesc: "Specialized vertical delivering end-to-end blood bank facility setups. From automated blood collection monitors and component centrifuges to -80°C deep freezers, platelet agitators, and temperature-controlled cold-chain management.",
    iconName: "Droplet",
    category: "healthcare",
    badge: "Specialized Medical Tech",
    capabilities: [
      "Complete Blood Bank Facility Planning & Layout",
      "Ultra-Low Temperature (-80°C & -40°C) Storage",
      "Blood Component Centrifuges & Separators",
      "Platelet Agitators & Temperature Incubators",
      "Blood Collection Monitors & Donor Lounges",
      "Continuous Cold Chain Monitoring & Alarms",
      "Sterile Cryogenic Storage & Testing Systems"
    ],
    keyDeliverables: [
      "Ultra-Low Plasma Freezers & Blood Refrigerators",
      "Automated Component Extractors",
      "Sterile Tube Sealers & Agitators",
      "Ergonomic Blood Donor Stations",
      "Telemetry Cold-Chain Monitoring Hub"
    ],
    specifications: [
      { label: "Temperature Control", value: "Down to -86°C Precision" },
      { label: "Monitoring", value: "24/7 Redundant Telemetry" },
      { label: "Standard", value: "Medical Cold-Chain Protocol" },
      { label: "Deployment", value: "Turnkey Clean Laboratory Room" }
    ],
    representativeVisual: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80",
    ctaText: "EXPLORE BLOOD BANK SOLUTIONS"
  },
  {
    id: "tiles-granite-marble",
    title: "Tiles, Granite & Marble",
    slug: "tiles-granite-marble",
    subtitle: "Architectural Surfaces & Institutional Stone",
    shortDesc: "Large-scale procurement and installation of hospital-grade anti-bacterial tiles, high-traffic commercial flooring, premium natural granite, and architectural marble.",
    fullDesc: "Institutional surface solutions providing heavy-duty vitrified tiles, specialized seamless antibacterial flooring for healthcare, premium architectural stone for facades, and bulk supply coordination for mega projects.",
    iconName: "Grid",
    category: "commercial",
    badge: "Architectural Surfaces",
    capabilities: [
      "Institutional Flooring & Anti-Bacterial Healthcare Surfaces",
      "High-Traffic Commercial & Industrial Vitrified Tiles",
      "Premium Natural Granite & Architectural Marble",
      "Exterior Cladding & Heavy-Duty Paving Systems",
      "Large-Format Slabs & Precision Edge Finishes",
      "Direct Mill & Quarry Sourcing at Scale",
      "Supply Coordination & Installation Logistics"
    ],
    keyDeliverables: [
      "Hospital-Grade Anti-Microbial Flooring",
      "Heavy-Duty Vitrified Commercial Tiles",
      "Premium Polished Granite & Marble Slabs",
      "Acoustic & Slip-Resistant Surface Systems",
      "Bulk Material Container Logistics"
    ],
    specifications: [
      { label: "Material Range", value: "Full-Body, Marble, Granite & Vinyl" },
      { label: "Quality Grade", value: "Heavy Institutional Duty" },
      { label: "Logistics", value: "Direct Bulk Quarry/Factory Supply" },
      { label: "Applications", value: "Hospitals, Airports & Campuses" }
    ],
    representativeVisual: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    ctaText: "EXPLORE SURFACES & STONE"
  },
  {
    id: "fire-safety",
    title: "Fire & Safety",
    slug: "fire-safety",
    subtitle: "Integrated Fire Protection & Life Safety Systems",
    shortDesc: "End-to-end fire safety infrastructure: addressable fire alarm systems, sprinkler networks, hydrant systems, clean-agent suppression, and emergency egress planning.",
    fullDesc: "Comprehensive life safety solutions designed to protect critical assets and human life in hospitals, commercial towers, industrial plants, and government facilities.",
    iconName: "ShieldAlert",
    category: "infrastructure",
    badge: "Life Safety",
    capabilities: [
      "Addressable Fire Detection & Alarm Systems",
      "Automatic Fire Sprinkler & Wet Riser Hydrants",
      "Clean Agent (FM-200 / Novec 1230) Gas Suppression",
      "Fire Pumps, Valves & Pressure Regulators",
      "Passive Fire Stopping & Fire Doors",
      "Smoke Extraction & Pressurization Fans",
      "Audits, Testing & Statutory Commissioning"
    ],
    keyDeliverables: [
      "Multi-Loop Addressable Fire Alarm Panels",
      "Automatic Sprinkler Piping & Hydrant Networks",
      "Clean Agent Gas Flooding for Server/OT Rooms",
      "Certified Fire-Rated Doors & Emergency Hardware",
      "Integrated Fire Water Pump Stations"
    ],
    specifications: [
      { label: "Coverage Scope", value: "Industrial, Commercial & Healthcare" },
      { label: "System Types", value: "Active & Passive Fire Safety" },
      { label: "Integration", value: "BMS & Emergency Automation" },
      { label: "Verification", value: "Pressure Testing & Sign-Off" }
    ],
    representativeVisual: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    ctaText: "EXPLORE FIRE & SAFETY"
  },
  {
    id: "b2b-furniture",
    title: "B2B Furniture",
    slug: "b2b-furniture",
    subtitle: "Institutional, Healthcare & Commercial Workspaces",
    shortDesc: "Heavy-duty hospital beds, patient room furniture, executive corporate offices, educational seating, and high-density institutional workstations.",
    fullDesc: "Large-scale institutional furniture procurement and installation. We furnish complete multi-story facilities including hospital wards, consultation rooms, corporate headquarters, auditoriums, and administrative offices.",
    iconName: "Armchair",
    category: "commercial",
    badge: "Institutional Fit-Out",
    capabilities: [
      "Specialized Hospital & Ward Bed Systems",
      "Executive Corporate Office & Boardroom Furniture",
      "High-Density Workstations & Acoustic Partitions",
      "Educational Campus Classrooms & Lecture Halls",
      "Government Institutional Desking & Seating",
      "Heavy-Duty Reception, Lounge & Waiting Area Sets",
      "Turnkey Ergonomic Layout & Installation"
    ],
    keyDeliverables: [
      "ICU & Motorized Hospital Beds",
      "Modular Open-Plan Workstation Clusters",
      "Auditorium & Tiered Lecture Hall Seating",
      "Ergonomic Task Chairs & Storage Credenzas",
      "Custom Reception Counters & Wall Paneling"
    ],
    specifications: [
      { label: "Volume Capacity", value: "100 to 10,000+ Seating Units" },
      { label: "Durability Tier", value: "Commercial Grade BIFMA/ISO Ready" },
      { label: "Customization", value: "Bespoke Architectural Finishes" },
      { label: "Deployment", value: "Direct Site Assembly & Staging" }
    ],
    representativeVisual: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    ctaText: "EXPLORE B2B FURNITURE"
  },
  {
    id: "commercial-kitchens",
    title: "Commercial & Industrial Kitchens",
    slug: "commercial-kitchens",
    subtitle: "Heavy-Duty Food Service & Dietary Facilities",
    shortDesc: "Turnkey commercial kitchens for hospitals, hotels, industrial cafeterias, and institutional dining halls: stainless steel fabrication, cooking ranges, refrigeration, and exhaust systems.",
    fullDesc: "Engineering high-volume, hygienically certified food production environments. We coordinate commercial kitchen design, stainless steel AISI 304 fabrication, combi-ovens, cold rooms, dishwashing automation, and fire-safe ventilation.",
    iconName: "UtensilsCrossed",
    category: "commercial",
    badge: "Food Service Tech",
    capabilities: [
      "Hospital Dietary Kitchen & Tray Assembly Setup",
      "Industrial & Corporate Mega-Cafeteria Systems",
      "Heavy-Duty Stainless Steel (SS 304) Fabrication",
      "Commercial Cooking Ranges, Steamers & Combi-Ovens",
      "Walk-In Cold Rooms & Blast Freezers",
      "Commercial Warewashing & Conveyor Dishwashers",
      "Kitchen Ventilation, Ecology Units & Fire Suppression"
    ],
    keyDeliverables: [
      "Walk-In Chiller & Freezer Rooms",
      "Industrial Combi Steamers & Tilting Pans",
      "Custom Stainless Steel Prep Tables & Sinks",
      "Automated Flight-Type Dishwashing Systems",
      "Exhaust Hoods with Wet Chemical Fire Protection"
    ],
    specifications: [
      { label: "Grade Standard", value: "AISI 304 Food-Grade Stainless Steel" },
      { label: "Capacity Scope", value: "500 to 15,000+ Meals/Day" },
      { label: "Utility Integration", value: "Gas, Electric, Steam & Water" },
      { label: "Safety System", value: "Kitchen-Guard Ansul Fire Ready" }
    ],
    representativeVisual: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80",
    ctaText: "EXPLORE KITCHEN SOLUTIONS"
  },
  {
    id: "institutional-equipment",
    title: "Institutional Equipment",
    slug: "institutional-equipment",
    subtitle: "Specialized Systems for Civic & Educational Facilities",
    shortDesc: "End-to-end equipment provisioning for laboratories, research centers, universities, municipal facilities, sports complexes, and administrative headquarters.",
    fullDesc: "Integrated procurement of specialized non-medical equipment required across large government, civic, and academic institutions.",
    iconName: "Layers",
    category: "institutional",
    badge: "Civic & Educational",
    capabilities: [
      "Academic & Scientific Laboratory Workbenches",
      "Audio-Visual & Smart Classroom Telemetry",
      "Campus Security & Access Control Infrastructure",
      "Public Address & Mass Notification Systems",
      "Waste Management & Industrial Compactor Units",
      "Facilities Maintenance & Utility Machinery",
      "Large-Scale Procurement Standardization"
    ],
    keyDeliverables: [
      "Chemical-Resistant Lab Bench Systems",
      "Campus-Wide Integrated IP-CCTV & Access Control",
      "Smart Interactive Display Hubs",
      "Water Purification & Treatment Plants",
      "Industrial Facility Maintenance Equipment"
    ],
    specifications: [
      { label: "Target Sectors", value: "Universities, Labs, Civic Complexes" },
      { label: "Procurement Model", value: "Centralized Supply & Staging" },
      { label: "Compliance", value: "Institutional Specification Standards" },
      { label: "Warranty", value: "Comprehensive Equipment SLA" }
    ],
    representativeVisual: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&q=80",
    ctaText: "EXPLORE INSTITUTIONAL EQUIPMENT"
  },
  {
    id: "government-procurement",
    title: "Government Procurement",
    slug: "government-procurement",
    subtitle: "Structured Public Sector Supply & Execution",
    shortDesc: "Structured supply coordination for government tenders, state healthcare missions, civic infrastructure development, and defense/public utilities.",
    fullDesc: "Specialized execution division structured around institutional compliance, documentation rigor, BOQ alignment, and transparent supply-chain logistics for public sector entities.",
    iconName: "Landmark",
    category: "institutional",
    badge: "Public Sector Ready",
    capabilities: [
      "Tender & BOQ Requirement Mapping",
      "Consolidated Multi-Category Bill of Quantities",
      "Strict Quality Control & Factory Pre-Inspections",
      "Timely Logistics & Multi-Location Staging",
      "Comprehensive Milestone Documentation & Testing",
      "Turnkey Deployment with Localized Engineering Support",
      "Full Statutory & Specification Alignment"
    ],
    keyDeliverables: [
      "Multi-Vertical Tender Fulfillment",
      "Public Health Infrastructure Packages",
      "Civic Administration Facility Packages",
      "Inspection-Ready Pre-Shipment Audits",
      "Dedicated Project Liaison Management"
    ],
    specifications: [
      { label: "Entity Focus", value: "State, Central & Municipal Bodies" },
      { label: "Documentation", value: "Full Audit Trail & Specification Sheets" },
      { label: "Logistics", value: "Nationwide & Remote Site Delivery" },
      { label: "Quality Assurance", value: "Third-Party & Internal Sign-Offs" }
    ],
    representativeVisual: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80",
    ctaText: "EXPLORE GOV PROCUREMENT"
  },
  {
    id: "turnkey-project-solutions",
    title: "Turnkey Project Solutions",
    slug: "turnkey-project-solutions",
    subtitle: "Complete Lifecycle Engineering from Concept to Handover",
    shortDesc: "One single partner taking unified responsibility: design, engineering, procurement, construction, installation, and final commissioning for complex institutional projects.",
    fullDesc: "The pinnacle of our business model. Eliminating the friction, delays, and budget leaks of managing dozens of isolated vendors by executing the entire project as a singular, synchronized master contractor.",
    iconName: "Cpu",
    category: "infrastructure",
    badge: "Master Execution",
    capabilities: [
      "Unified Program & Project Management (PMO)",
      "Single-Source Financial & Contractual Accountability",
      "Synchronized Cross-Sector Engineering Schedules",
      "Pre-Engineered Systems Integration & Staging",
      "Risk Mitigation & Single Point of Responsibility",
      "Rapid Facility Commissioning & Operational Handover",
      "Post-Handover Warranty & Service Support"
    ],
    keyDeliverables: [
      "Master Project Schedule & Milestone Gantt",
      "Integrated Multi-Sector Execution Plan",
      "Zero-Overlap Coordinated Site Deployment",
      "Complete Room-by-Room Handover Documentation",
      "Operational Readiness Certification"
    ],
    specifications: [
      { label: "Execution Model", value: "Single-Vendor Turnkey Responsibility" },
      { label: "Scale Scope", value: "Multi-Disciplinary Capital Projects" },
      { label: "Coordination", value: "100% Internal Division Synchronization" },
      { label: "Deliverable", value: "Fully Operational Handover" }
    ],
    representativeVisual: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    ctaText: "EXPLORE TURNKEY SOLUTIONS"
  }
];
