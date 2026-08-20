export interface Sector {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  category: "healthcare" | "infrastructure" | "commercial" | "institutional";
  badge: string;
  isFlagship?: boolean;
  capabilities: string[];
  keyDeliverables: string[];
  specifications: { label: string; value: string }[];
  representativeVisual: string;
  ctaText: string;
}

export interface EcosystemStage {
  id: number;
  stageNum: string;
  title: string;
  shortTitle: string;
  category: "civil" | "engineering" | "medical" | "interior" | "commercial" | "safety" | "commissioning";
  description: string;
  deliverables: string[];
  equipmentList: string[];
  specs: string;
  iconName: string;
}

export interface ProcurementProduct {
  id: string;
  name: string;
  category: string;
  subCategory: string;
  specs: string;
  typicalUnit: string;
  standards: string[];
  leadTimePlaceholder: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientType: "Government Entity" | "Public Healthcare Trust" | "Private Hospital Chain" | "Commercial Developer" | "Educational Institution" | "Industrial Enterprise";
  sector: string;
  location: string;
  projectScope: string;
  keyRequirements: string[];
  solutionsDelivered: string[];
  projectTimeline: string;
  outcome: string;
  badge: string;
  status: "COMING_SOON" | "ARCHIVED_CONCEPT";
}

export interface ProjectBuilderState {
  sector: string;
  requirementType: string;
  services: string[];
  estimatedTimeline: string;
  projectScale: string;
  location: string;
  organization: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  notes: string;
}
