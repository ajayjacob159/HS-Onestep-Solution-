import { Sector } from "../types";

export const SECTORS: Sector[] = [
  {
    id: "it-software-development",
    title: "IT Technology & Software Engineering",
    subtitle: "Enterprise Platforms, Custom Web/Mobile Apps & Cloud ERPs",
    category: "technology",
    badge: "DIGITAL TRANSFORMATION",
    tagline: "High-Performance Software Engineering Built to Scale Global Operations",
    overview: "We architect and engineer robust, enterprise-grade software solutions, custom web and mobile platforms, cloud-native ERPs, and Hospital Management Information Systems (HMIS). Designed with bank-grade security and frictionless scalability to accelerate modern institutional operations.",
    representativeVisual: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
    iconName: "Code2",
    specifications: [
      { label: "Architecture", value: "Cloud-Native Microservices" },
      { label: "Security", value: "SOC 2 Type II & ISO 27001" },
      { label: "Platforms", value: "Web, iOS, Android & ERP" }
    ],
    capabilities: [
      "Custom Enterprise SaaS & Web Application Development",
      "Native iOS & Android Mobile Apps",
      "Integrated Hospital Management & ERP Systems (HMIS)",
      "High-Volume API Pipelines & Cloud Infrastructure",
      "Legacy Code Modernization & Migration"
    ],
    procurementItems: [
      "Enterprise Cloud Server Licenses",
      "HMIS Hospital Information Systems",
      "Custom PMO Project Portals",
      "Secure Payment & Identity Gateways"
    ]
  },
  {
    id: "ai-automations",
    title: "AI Automations & Process Scaling",
    subtitle: "Eliminating Manual Bottlenecks to Scale Up Rapidly Worldwide",
    category: "technology",
    badge: "NEXT-GEN AI ENGINE",
    tagline: "Autonomous Agentic Workflows & Robotic Process Automation (RPA)",
    overview: "Transform manual, repetitive operations into autonomous, zero-error digital workflows. From automated invoice processing and inventory replenishment to computer vision quality inspection and AI agent assistants, we empower organizations to scale up at global velocity with reduced overhead.",
    representativeVisual: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1000&q=80",
    iconName: "Cpu",
    specifications: [
      { label: "Efficiency", value: "Up to 10x Speed" },
      { label: "Error Rate", value: "99.9% Zero-Defect" },
      { label: "Deployment", value: "On-Prem / Private Cloud" }
    ],
    capabilities: [
      "AI Robotic Process Automation (RPA) for Operations",
      "Intelligent Document Processing (IDP) & Automated Invoicing",
      "Computer Vision for Construction & Manufacturing QA",
      "Autonomous 24/7 AI Customer & Support Agents",
      "Predictive Supply Chain & Procurement Forecasting"
    ],
    procurementItems: [
      "Private LLM & AI Automation Licenses",
      "Computer Vision Edge Processing Hardware",
      "Automated Workflow Orchestrators",
      "Real-Time Telemetry Bots"
    ]
  },
  {
    id: "digital-growth-marketing",
    title: "Digital Marketing & Global Scaling",
    subtitle: "Omnichannel Acquisition, Corporate Branding & Market Expansion",
    category: "commercial",
    badge: "GLOBAL EXPANSION",
    tagline: "Data-Driven Digital Growth to Dominate Markets Globally",
    overview: "We engineer full-funnel digital marketing strategies, AI-driven performance advertising, corporate brand authority, and global search/answer engine optimization (SEO & AEO) to position your enterprise as an undisputed industry leader across domestic and international markets.",
    representativeVisual: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    iconName: "TrendingUp",
    specifications: [
      { label: "Reach", value: "Global Omnichannel" },
      { label: "Strategy", value: "Performance & AEO / SEO" },
      { label: "Analytics", value: "Real-Time ROI Tracking" }
    ],
    capabilities: [
      "Corporate Brand Identity & Visual Positioning",
      "Search Engine & Answer Engine Optimization (SEO / AEO)",
      "High-Conversion B2B & Institutional Lead Generation",
      "Targeted Multi-Platform Performance Ad Campaigns",
      "Global PR & Reputation Management"
    ],
    procurementItems: [
      "Growth Marketing Suites",
      "Omnichannel CRM & Lead Capture Engines",
      "Content & Visual Asset Production",
      "Global PR Distribution Packages"
    ]
  },
  {
    id: "hospital-development",
    title: "Hospital Development (Turnkey)",
    subtitle: "Complete Healthcare Infrastructure from Greenfield to NABH Handover",
    category: "healthcare",
    isFlagship: true,
    badge: "FLAGSHIP EXECUTION",
    tagline: "The Master One Step Healthcare Lifecycle",
    overview: "Our flagship discipline delivers complete multi-specialty healthcare facilities from empty site to operational opening under a single contract. Synchronizing architectural design, heavy civil framing, cleanroom modular OTs, medical gas pipelines (MGPS), advanced radiology suites, and statutory commissioning.",
    representativeVisual: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80",
    iconName: "Building2",
    specifications: [
      { label: "Capacity Scale", value: "20 to 500+ Beds" },
      { label: "Standards", value: "NABH, HTM-0201, ISO 5" },
      { label: "Delivery", value: "Turnkey Key-In-Hand" }
    ],
    capabilities: [
      "Integrated Architectural, Structural & BIM Planning",
      "Class 100 Modular Operation Theatres with HEPA H14",
      "Medical Gas Pipeline Systems (MGPS) with Liquid Oxygen",
      "Diagnostic Imaging Suites (1.5T MRI / 128-Slice CT)",
      "Statutory Clinical Commissioning & Staff Training"
    ],
    procurementItems: [
      "Modular OT Wall Panels & Hermetic Doors",
      "Ceiling Surgical Pendants & LED OT Lights",
      "Liquid Oxygen Manifolds & Degreased Copper Lines",
      "Motorized Intensive Care Beds & Central Telemetry"
    ]
  },
  {
    id: "medical-surgical",
    title: "Medical & Surgical Equipment",
    subtitle: "Tier-1 Diagnostic Imaging, Critical Care & Surgical Suites",
    category: "healthcare",
    badge: "MEDTECH SOURCING",
    tagline: "Direct Sourcing and Precision Calibration of Critical Medical Devices",
    overview: "Procurement, delivery, installation, and calibration of clinical equipment across major hospital departments, with manufacturer-certified warranties and comprehensive service level agreements.",
    representativeVisual: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80",
    iconName: "HeartPulse",
    specifications: [
      { label: "Compliance", value: "CE, US-FDA, AERB" },
      { label: "Warranty", value: "5-Year SLA Backed" },
      { label: "Sourcing", value: "Global Tier-1 OEMs" }
    ],
    capabilities: [
      "1.5T / 3.0T MRI Systems & Multi-Slice CT Scanners",
      "Digital C-Arm, Mammography & Flat-Panel X-Ray",
      "Advanced ICU Ventilators & Multi-Para Monitors",
      "High-Frequency Electrosurgical Units & Laparoscopy",
      "Complete Central Sterile Supply Department (CSSD)"
    ],
    procurementItems: [
      "1.5T MRI Superconducting System",
      "128-Slice Low-Dose CT Scanner",
      "ICU Invasive / Non-Invasive Ventilators",
      "High-Pressure Steam Sterilizers (CSSD)"
    ]
  },
  {
    id: "construction-infrastructure",
    title: "Construction & Infrastructure",
    subtitle: "Heavy Civil Engineering, Industrial Facilities & Turnkey Fit-Outs",
    category: "infrastructure",
    badge: "CIVIL & STRUCTURAL",
    tagline: "High-Tolerance Civil Execution Built for Decades of Heavy Operation",
    overview: "Full-scope civil engineering, reinforced concrete framing, heavy structural steel fabrication, specialized radiation shielding, seismic foundations, and institutional facility construction.",
    representativeVisual: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1000&q=80",
    iconName: "Hammer",
    specifications: [
      { label: "Engineering", value: "Heavy Civil & Structural Steel" },
      { label: "Safety", value: "Zero-Lost-Time Standards" },
      { label: "BIM", value: "Level 3 Clashing-Free" }
    ],
    capabilities: [
      "Earthwork, Deep Foundation Piling & RCC Framing",
      "Prefabricated Structural Steel PEB Structures",
      "Radiation Shielded Bunkers for Linear Accelerators",
      "Industrial Grade Flooring & Cleanroom Partitions",
      "Statutory Fire, Municipal & Environmental Clearances"
    ],
    procurementItems: [
      "High-Yield TMT Steel & Structural Beams",
      "Ready-Mix High-Strength Concrete (M40+)",
      "High-Density Lead & Barite Radiation Shielding",
      "Industrial Heavy-Duty Epoxy Floor Systems"
    ]
  },
  {
    id: "energy",
    title: "Energy & Critical Power Solutions",
    subtitle: "Substations, Redundant DG Synchronizers, Solar & High-Capacity UPS",
    category: "infrastructure",
    badge: "CRITICAL POWER",
    tagline: "Uninterrupted Power Architecture with Zero Millisecond Transfer",
    overview: "Engineering, installation, and commissioning of primary grid connections, HT/LT substations, diesel generator auto-synchronization systems, modular online UPS networks, and commercial solar microgrids.",
    representativeVisual: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=80",
    iconName: "Zap",
    specifications: [
      { label: "Uptime", value: "99.999% Redundancy" },
      { label: "Transfer Time", value: "0ms Seamless" },
      { label: "Scale", value: "Up to 5MVA Substations" }
    ],
    capabilities: [
      "33kV / 11kV HT Substation Engineering & Transformers",
      "Auto-Mains Failure (AMF) DG Synchronizing Panels",
      "Online Double-Conversion Modular Medical UPS Systems",
      "Rooftop & Ground-Mounted Commercial Solar PV",
      "Harmonic Filtration & Automated Power Factor Correction"
    ],
    procurementItems: [
      "Dry-Type Cast Resin Power Transformers",
      "Acoustic Silent Diesel Generators (500kVA+)",
      "Modular True Online UPS (N+1 Config)",
      "Tier-1 Bifacial Solar PV Panels"
    ]
  },
  {
    id: "commercial-kitchens",
    title: "Commercial & Dietary Kitchens",
    subtitle: "Food-Grade SS 304 Prep Lines, Cold Rooms & Commercial Ventilation",
    category: "commercial",
    badge: "HOSPITALITY & DIETARY",
    tagline: "HACCP-Compliant High-Capacity Culinary & Institutional Food Service Lines",
    overview: "Turnkey planning, supply, and installation of commercial kitchens for hospitals, hotels, universities, and industrial cafeterias. Fabricated with food-grade SS 304 stainless steel, walk-in cold rooms, dishwashing automation, and fire suppression hoods.",
    representativeVisual: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80",
    iconName: "UtensilsCrossed",
    specifications: [
      { label: "Material", value: "Food-Grade AISI 304" },
      { label: "Standards", value: "HACCP & NSF Certified" },
      { label: "Capacity", value: "200 to 5,000 Meals/Day" }
    ],
    capabilities: [
      "Heavy-Duty Stainless Steel Cooking Ranges & Combi-Ovens",
      "Walk-In Chillers, Deep Freezers & Cold Prep Stations",
      "Commercial Exhaust Hoods with Ansul Fire Suppression",
      "Conveyorized Automated Dishwashing Systems",
      "Insulated Thermal Meal Delivery Trolleys"
    ],
    procurementItems: [
      "Custom SS 304 Fabrication Worktables & Sinks",
      "Electric / Gas 4-Burner Ranges with Ovens",
      "Walk-In Modular Cold Storage Rooms",
      "Thermal Patient Tray Delivery Carts"
    ]
  },
  {
    id: "fire-safety",
    title: "Fire & Life Safety Systems",
    subtitle: "Hydrants, Automatic Sprinklers, Clean Agent Suppression & Addressable Detection",
    category: "infrastructure",
    badge: "LIFE SAFETY",
    tagline: "Integrated NBC-Compliant Fire Protection & High-Sensitivity Detection",
    overview: "End-to-end design, installation, and statutory commissioning of active and passive fire protection systems. Including internal hydrants, wet riser sprinklers, addressable smoke detection, and FM-200 clean agent gas suppression for data centers and server rooms.",
    representativeVisual: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=1000&q=80",
    iconName: "Flame",
    specifications: [
      { label: "Code Compliance", value: "NBC 2016, NFPA 13/72" },
      { label: "Pumps", value: "UL-Listed / FM-Approved" },
      { label: "Suppression", value: "Water, Foam & FM-200 Gas" }
    ],
    capabilities: [
      "Main Electric, Standby Diesel & Jockey Fire Pump Sets",
      "Automatic High-Density Sprinkler Piping Networks",
      "Intelligent Addressable Fire Alarm Panels & Multi-Sensors",
      "FM-200 / Novec 1230 Clean Agent Gas Flooding",
      "Fire Rated Steel Doors (2-Hour Integrity) & Dampers"
    ],
    procurementItems: [
      "UL-Listed Fire Pump Skid Assemblies",
      "Addressable Smoke & Heat Sensor Arrays",
      "FM-200 Engineered Gas Cylinder Banks",
      "2-Hour Certified Fire Doors & Panic Bars"
    ]
  },
  {
    id: "blood-bank",
    title: "Blood Bank & Cryogenic Cold Chain",
    subtitle: "Plasma Freezers, Centrifuges, Platelet Agitators & 24/7 Redundant Telemetry",
    category: "healthcare",
    badge: "COLD CHAIN",
    tagline: "Ultra-Low Temperature Biological Storage and Component Separation",
    overview: "Specialized turnkey blood bank solutions meeting stringent drug authority standards. Supply of -86°C ultra-low freezers, blood bag centrifuges, automated platelet agitators, and continuous IoT cloud temperature loggers.",
    representativeVisual: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1000&q=80",
    iconName: "Droplet",
    specifications: [
      { label: "Freezer Range", value: "-40°C down to -86°C" },
      { label: "Redundancy", value: "Dual Compressor Systems" },
      { label: "Monitoring", value: "Real-Time 24/7 Cloud Alerts" }
    ],
    capabilities: [
      "Automated Refrigerated Blood Bag Centrifuges",
      "-86°C Ultra-Low Temperature Plasma Freezers",
      "Platelet Incubators with Constant Agitation Trays",
      "Blood Collection Monitors & Dielectric Tube Sealers",
      "Fully Validated Cold Chain Transportation Boxes"
    ],
    procurementItems: [
      "-86°C Cascade Ultra-Low Freezers",
      "Refrigerated High-Speed Centrifuges",
      "Flatbed Platelet Agitators with Chamber",
      "Cold-Chain Data Loggers with GSM Alert"
    ]
  },
  {
    id: "b2b-furniture",
    title: "B2B & Institutional Furniture",
    subtitle: "Hospital Ward Beds, Cleanroom SS Stations & Corporate Executive Desks",
    category: "commercial",
    badge: "MODULAR INTERIORS",
    tagline: "Ergonomic, Heavy-Duty Institutional Furnishings for High-Traffic Environments",
    overview: "Large-scale supply of high-grade furniture for medical institutions, universities, corporate offices, and government complexes. From motorized ICU patient beds to antimicrobial lab benches and executive boardroom suites.",
    representativeVisual: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80",
    iconName: "Armchair",
    specifications: [
      { label: "Durability", value: "Heavy-Duty Commercial Grade" },
      { label: "Hygiene", value: "Antimicrobial Seamless Coating" },
      { label: "Warranty", value: "5-Year Structural Guarantee" }
    ],
    capabilities: [
      "Motorized 5-Function ICU Beds with CPR Release",
      "Antimicrobial Examination Couches & Patient Screens",
      "Modular Modular Lab Workbenches & Chemical Storage",
      "Ergonomic Corporate Workstations & Executive Suites",
      "Auditorium & Lecture Hall Fixed Seating Systems"
    ],
    procurementItems: [
      "5-Function Motorized ICU Beds",
      "Stainless Steel 304 Instrument Trolleys",
      "Acoustic Modular Workstation Clusters",
      "Heavy-Duty Auditorium Tip-Up Chairs"
    ]
  },
  {
    id: "tiles-granite-marble",
    title: "Tiles, Granite & Architectural Stone",
    subtitle: "Antimicrobial Vinyl, Heavy Vitrified Tiles & Sourced Natural Marble",
    category: "commercial",
    badge: "ARCHITECTURAL SURFACES",
    tagline: "High-Traffic Architectural Flooring, Cleanroom Vinyl and Exterior Cladding",
    overview: "Direct procurement, cutting, and installation of premium floor and wall surfaces. Specialized anti-static conductive vinyl for surgical suites, heavy vitrified floor tiles for high-traffic public corridors, and imported natural granite/marble for executive facades.",
    representativeVisual: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    iconName: "Layers",
    specifications: [
      { label: "Conductive Vinyl", value: "10^4 to 10^6 Ohms (OT Safe)" },
      { label: "Tile Strength", value: "High Breaking Strength Vitrified" },
      { label: "Surfaces", value: "Italian Marble, Granite, Quartz" }
    ],
    capabilities: [
      "Seamless Copper-Grounded Conductive OT Vinyl Flooring",
      "Coving Wall-to-Floor Bacteria-Free Transition Profiles",
      "High-Traffic 800x1600mm Vitrified Glazed Porcelain",
      "Precision Factory Cut & Polished Granite Countertops",
      "Dry Cladding Ventilated Natural Stone Facades"
    ],
    procurementItems: [
      "Conductive Homogeneous Vinyl Flooring Rolls",
      "800x1600mm Polished Vitrified Floor Tiles",
      "Imported Italian Botticino / Statuario Slabs",
      "Pre-Cut Jet Black Granite Cladding Slabs"
    ]
  }
];
