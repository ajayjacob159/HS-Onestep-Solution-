export interface Sector {
  id: string;
  title: string;
  subtitle: string;
  category: "healthcare" | "infrastructure" | "commercial" | "institutional" | "technology";
  isFlagship?: boolean;
  badge: string;
  tagline?: string;
  overview: string;
  fullDesc?: string;
  representativeVisual: string;
  iconName: string;
  specifications: { label: string; value: string }[];
  capabilities: string[];
  keyDeliverables?: string[];
  procurementItems: string[];
  [key: string]: any;
}

export interface RFQPayload {
  organizationName: string;
  contactPerson: string;
  email: string;
  phone: string;
  sector: string;
  projectScope: string;
  estimatedTimeline: string;
  boqAttached: boolean;
  notes?: string;
  [key: string]: any;
}

export interface ProcurementProduct {
  id: string;
  name: string;
  category: string;
  subCategory?: string;
  sectorId?: string;
  badge?: string;
  typicalUnit?: string;
  leadTimePlaceholder?: string;
  description: string;
  image?: string;
  standards: string[];
  specs: any;
  [key: string]: any;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientType: string;
  sector: string;
  location?: string;
  badge?: string;
  projectScope?: string;
  projectTimeline?: string;
  keyRequirements?: string[];
  solutionsDelivered?: string[];
  outcome?: string;
  status?: string;
  timeline?: string;
  scope?: string;
  metrics?: { label: string; value: string }[];
  image?: string;
  description?: string;
  [key: string]: any;
}

export interface EcosystemStage {
  id: number;
  stageNum: string;
  title: string;
  shortTitle: string;
  category: string;
  description?: string;
  iconName?: string;
  specs: string;
  deliverables: string[];
  equipmentList: string[];
  duration?: string;
  riskFactor?: string;
  [key: string]: any;
}

export interface ProjectBuilderState {
  sector: string;
  sectorId?: string;
  facilityArea?: number;
  capacityUnits?: number;
  requirementType: string;
  services: string[];
  disciplines?: string[];
  timelineMonths?: number;
  estimatedTimeline?: string;
  projectScale?: string;
  location?: string;
  organization: string;
  organizationType?: string;
  contactName?: string;
  contactEmail: string;
  contactPhone?: string;
  notes?: string;
  [key: string]: any;
}
