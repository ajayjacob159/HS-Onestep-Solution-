import { EcosystemStage } from "../types";

export const HOSPITAL_ECOSYSTEM_STAGES: EcosystemStage[] = [
  {
    id: 1,
    stageNum: "01",
    title: "Site Development & Master Planning",
    shortTitle: "Site Development",
    category: "civil",
    description: "Topographical surveying, geo-technical soil analysis, master zoning, facility flow mapping, and statutory structural blueprints.",
    deliverables: [
      "Geo-Technical Soil Investigation",
      "Hospital Circulation & Clean/Dirty Flow Masterplan",
      "Structural Engineering Load Calculations",
      "Environmental & Zoning Regulatory Clearances"
    ],
    equipmentList: ["Surveying Total Stations", "Earthmoving Equipment", "Piling & Shoring Machinery"],
    specs: "Full site survey and geotechnical compliance prior to foundation laying",
    iconName: "Compass"
  },
  {
    id: 2,
    stageNum: "02",
    title: "Civil Works & Structural Construction",
    shortTitle: "Civil Construction",
    category: "civil",
    description: "RCC framing, earthquake-resistant foundation engineering, specialized radiation shielding walls for radiology, and reinforced slabs.",
    deliverables: [
      "Heavy RCC Core Structural Framing",
      "Radiation Shielded Bunker Walls (Barium Plaster / Lead)",
      "Vibration-Isolated Slabs for MRI/CT Suites",
      "Waterproofing & Basement Utility Substructures"
    ],
    equipmentList: ["Batching Plants", "Concrete Pumps", "High-Strength Rebar", "Lead Lining Materials"],
    specs: "Meets institutional structural codes and radiology shielding regulations",
    iconName: "Building"
  },
  {
    id: 3,
    stageNum: "03",
    title: "Specialized MEP & Cleanroom HVAC",
    shortTitle: "MEP & Cleanroom",
    category: "engineering",
    description: "Multi-zone AHUs with HEPA filtration for laminar air flow in surgical theaters, dedicated pressure cascades, and power utility distribution.",
    deliverables: [
      "Laminar Air Flow (LAF) Ceiling Systems with HEPA Filters",
      "Positive/Negative Pressure Cascade Ventilation",
      "Medical Grade Electrical Distribution Panels & Isolation Transformers",
      "Sanitary Drainage, Effluent Treatment (ETP) & RO Water Plants"
    ],
    equipmentList: ["AHU Chillers", "HEPA Filtration Modules", "Medical Isolation Panels", "ETP Plant"],
    specs: "ISO Class 5 (Class 100) OT air cleanliness & NABH compliance",
    iconName: "Wind"
  },
  {
    id: 4,
    stageNum: "04",
    title: "Architectural Cleanroom Interiors",
    shortTitle: "Interiors & Finishes",
    category: "interior",
    description: "Antibacterial seamless vinyl flooring with coved skirting, modular hermetic wall panels, flush cleanroom glazing, and acoustic ceilings.",
    deliverables: [
      "Seamless Antibacterial Anti-Static Vinyl Flooring",
      "Modular Cleanroom Wall Panels & Flush Windows",
      "Acoustic Suspended Ceilings in Wards & Corridors",
      "Heavy-Duty Wall Crash Guards & Corner Protectors"
    ],
    equipmentList: ["Conductive Flooring", "HPL Cleanroom Panels", "Hermetic Automatic Sliding Doors"],
    specs: "Zero-dust accumulation seamless finish with chemical resistance",
    iconName: "LayoutTemplate"
  },
  {
    id: 5,
    stageNum: "05",
    title: "Medical Gas Pipeline System (MGPS)",
    shortTitle: "Medical Gas (MGPS)",
    category: "medical",
    description: "Centralized medical oxygen, vacuum, nitrous oxide, and compressed air manifold banks with digital alarm telemetry and copper distribution.",
    deliverables: [
      "Central Liquid Medical Oxygen (LMO) Storage & Manifolds",
      "Medical Grade Degreased Copper Pipe Network (BS EN 13348)",
      "Area Valve Service Units (AVSU) with Digital Pressure Sensors",
      "Bed Head Units (BHU) with Integrated Gas Terminal Outlets"
    ],
    equipmentList: ["LMO Tank", "Medical Air Compressors", "Vacuum Pump Skid", "Gas Manifold & AVSU"],
    specs: "HTM 02-01 / NFPA 99 medical gas pipeline standard",
    iconName: "Activity"
  },
  {
    id: 6,
    stageNum: "06",
    title: "Modular Operation Theatres (OT)",
    shortTitle: "Operation Theatres",
    category: "medical",
    description: "Turnkey modular surgical suites: stainless steel/HPL wall systems, surgical control panels, laminar flow plenums, and surgical scrub stations.",
    deliverables: [
      "Stainless Steel / Prefabricated HPL Modular OT Enclosure",
      "Laminar Air Flow Ceiling Plenum with Central Light Interface",
      "Surgeon Control Panel with Digital Timers & Gas Monitors",
      "Touchless Sensor Surgical Scrub Sink Stations"
    ],
    equipmentList: ["Modular OT Plenums", "Surgeon Panels", "Motorized Surgical Pendants", "X-Ray Viewers"],
    specs: "Seamless airtight enclosure with integrated environmental controls",
    iconName: "Crosshair"
  },
  {
    id: 7,
    stageNum: "07",
    title: "Intensive Care Units (ICU/CCU/NICU)",
    shortTitle: "ICU & Critical Care",
    category: "medical",
    description: "High-acuity patient monitoring bays, ceiling-mounted bridge pendants, isolation cubicles, and central nursing telemetry hubs.",
    deliverables: [
      "Ceiling-Mounted Multi-Movement Intensive Care Pendants",
      "Central Nursing Telemetry Station & Remote Alarm System",
      "Negative Pressure Infectious Disease Isolation Cubicles",
      "Motorized High-Dependency Patient Bed Stations"
    ],
    equipmentList: ["ICU Pendants", "Central Monitoring Servers", "Negative Air Machines", "Infusion Pumps"],
    specs: "24/7 Redundant power, telemetry, and gas delivery infrastructure",
    iconName: "HeartPulse"
  },
  {
    id: 8,
    stageNum: "08",
    title: "B2B Hospital & Patient Furniture",
    shortTitle: "Hospital Furniture",
    category: "interior",
    description: "Motorized 5-function ICU beds, semi-fowler ward beds, patient transfer stretchers, ergonomic doctor desks, and heavy-duty waiting lounges.",
    deliverables: [
      "Motorized Multi-Function ICU & Recovery Beds",
      "Overbed Tables, Bedside Lockers & IV Stands",
      "Emergency Crash Carts & Medicine Storage Cabinets",
      "Public Waiting Lounge Seating & Reception Desks"
    ],
    equipmentList: ["ICU Electric Beds", "Emergency Crash Carts", "Patient Stretchers", "Ergonomic Chairs"],
    specs: "Medical-grade antimicrobial coatings and BIFMA institutional durability",
    iconName: "Armchair"
  },
  {
    id: 9,
    stageNum: "09",
    title: "Diagnostic Imaging & Radiology",
    shortTitle: "Diagnostic Equipment",
    category: "medical",
    description: "Turnkey room preparation, RF shielding cages, and deployment of MRI, CT Scanners, Digital Radiography (DR), and Ultrasound suites.",
    deliverables: [
      "RF Cage Shielding for Magnetic Resonance Imaging (MRI)",
      "High-Tonnage Heavy Equipment Rigging & Floor Staging",
      "PACS Server Network & Diagnostic High-Res Displays",
      "Lead-Lined Control Rooms & Lead Glass Viewing Windows"
    ],
    equipmentList: ["MRI RF Shielding", "Digital Radiography Systems", "Ultrasound Workstations", "PACS Servers"],
    specs: "AERB / Radiation Safety clearance compliant room engineering",
    iconName: "Cpu"
  },
  {
    id: 10,
    stageNum: "10",
    title: "Surgical Instrumentation & CSSD",
    shortTitle: "Surgical & CSSD",
    category: "medical",
    description: "Central Sterile Supply Department (CSSD) workflow, autoclaves, ultrasonic cleaners, and comprehensive surgical specialty instrument sets.",
    deliverables: [
      "High-Pressure Double-Door Pass-Through Autoclaves",
      "Ultrasonic Cleaners & Automated Instrument Washers",
      "General, Orthopedic, Laparoscopic & Neuro Surgical Sets",
      "Clean-to-Dirty CSSD Zoning & Packaging Stations"
    ],
    equipmentList: ["Steam Sterilizers", "Ultrasonic Washers", "Laparoscopy Towers", "Electrosurgical Cautery"],
    specs: "Strict CSSD three-zone dirty-clean-sterile workflow separation",
    iconName: "Scissors"
  },
  {
    id: 11,
    stageNum: "11",
    title: "Pathology & Diagnostic Laboratory",
    shortTitle: "Laboratory",
    category: "medical",
    description: "Turnkey diagnostic laboratory fit-out: automated biochemistry analyzers, hematology counters, biosafety cabinets, and clean benching.",
    deliverables: [
      "Chemical-Resistant Epoxy Resin Modular Lab Benching",
      "Biosafety Cabinets (Class II Type A2) & Fume Hoods",
      "Automated Clinical Chemistry & Hematology Analyzers",
      "Specimen Refrigeration & Cold Storage Archive"
    ],
    equipmentList: ["Biosafety Hoods", "Centrifuges", "Hematology Analyzers", "Lab Refrigerators"],
    specs: "NABL ready laboratory facility design and drainage infrastructure",
    iconName: "Microscope"
  },
  {
    id: 12,
    stageNum: "12",
    title: "Blood Bank & Cold Chain Infrastructure",
    shortTitle: "Blood Bank",
    category: "medical",
    description: "Specialized cold chain: -80°C deep freezers, blood bank refrigerators, automated platelet agitators, and component separation suites.",
    deliverables: [
      "Ultra-Low Temperature (-80°C / -40°C) Plasma Freezers",
      "Automated Blood Bank Centrifuges & Plasma Expressors",
      "Platelet Agitators with Controlled Temperature Incubators",
      "Continuous Telemetry Temperature Logging & SMS Alerts"
    ],
    equipmentList: ["Plasma Freezers", "Blood Storage Cabinets", "Platelet Agitators", "Tube Sealers"],
    specs: "Drug Controller General / National Blood Policy compliant setup",
    iconName: "Droplet"
  },
  {
    id: 13,
    stageNum: "13",
    title: "Commercial Dietary Kitchen & Cafeteria",
    shortTitle: "Dietary Kitchen",
    category: "commercial",
    description: "High-capacity hospital dietary cooking facility, stainless steel prep lines, meal tray distribution trolleys, and conveyor dishwashers.",
    deliverables: [
      "Food-Grade Stainless Steel (SS 304) Cooking Ranges & Steamers",
      "Walk-In Cold Storage & Deep Freeze Walk-Ins",
      "Insulated Thermal Meal Delivery Trolleys",
      "Ventilation Hoods with Fire Suppression & Grease Filters"
    ],
    equipmentList: ["Combi Steamers", "Walk-In Freezers", "SS Prep Tables", "Conveyor Dishwashers"],
    specs: "HACCP compliant dietary workflow and fire-safe exhaust",
    iconName: "UtensilsCrossed"
  },
  {
    id: 14,
    stageNum: "14",
    title: "Fire Protection & Life Safety",
    shortTitle: "Fire & Safety",
    category: "safety",
    description: "Hospital-wide addressable smoke detection, wet sprinkler grid, clean-agent suppression in server/OT rooms, and fire-rated doors.",
    deliverables: [
      "Addressable Multi-Criteria Smoke & Heat Detection System",
      "Clean Agent (FM-200 / Novec) Gas Suppression in Data & OT Hubs",
      "Dedicated Fire Hydrant Ring Mains & Automated Pump Skids",
      "2-Hour Fire-Rated Escape Doors & Emergency Public Address"
    ],
    equipmentList: ["Fire Alarm Panels", "FM-200 Cylinders", "Fire Water Pumps", "Emergency Sounders"],
    specs: "National Building Code (NBC) Life Safety & Fire Norms",
    iconName: "ShieldAlert"
  },
  {
    id: 15,
    stageNum: "15",
    title: "Testing, Commissioning & Turnkey Handover",
    shortTitle: "Commissioning",
    category: "commissioning",
    description: "System integration testing, calibration, air balancing certification, staff operational training, and final turnkey hospital handover.",
    deliverables: [
      "HVAC Air Balancing & Particle Count Validation Reports",
      "Medical Gas Purity & Pressure Decay Testing",
      "Comprehensive Equipment Calibration & Asset Tagging",
      "Turnkey Operational Handover & As-Built Documentation"
    ],
    equipmentList: ["Air Particle Counters", "Gas Pressure Testers", "Electrical Safety Analyzers"],
    specs: "Complete documentation package with verified operational sign-off",
    iconName: "CheckCircle2"
  }
];
