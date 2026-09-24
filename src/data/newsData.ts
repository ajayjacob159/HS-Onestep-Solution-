export interface NewsArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  source: string;
  summary: string;
  image: string;
  badge: string;
  linkText: string;
  fullStory?: string;
}

export const NEWS_DATA: NewsArticle[] = [
  {
    id: "news-01",
    title: "HS ONE STEP SOLUTIONS Expands Multi-State Operations Across Pune, Hyderabad, Bihar & Delhi",
    category: "Corporate Expansion",
    date: "September 2026",
    source: "HS Corporate Press Desk",
    summary: "Strengthening operational footprints to deliver seamless turnkey healthcare, civil infrastructure, and institutional procurement projects across West, South, North, and East India.",
    image: "/corporate-building.jpg",
    badge: "EXPANSION",
    linkText: "Read Press Release",
    fullStory: "HS ONE STEP SOLUTIONS has announced the formal expansion of its multi-state operational hubs across Pune (Headquarters), Hyderabad (South Tech & Operations), Bihar (State Projects Desk), and Delhi (Institutional Liaison). This expansion allows the company to deploy multidisciplinary engineering and medical sourcing teams rapidly to client project sites nationwide."
  },
  {
    id: "news-02",
    title: "Successful Delivery of National Health Mission (NHM) Healthcare Support Programs",
    category: "Public Sector & NHM",
    date: "August 2026",
    source: "Public Health Bulletin",
    summary: "High-impact execution across district medical cold chains, critical healthcare logistics, and public hospital infrastructure upgrades completed on schedule.",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80",
    badge: "PUBLIC HEALTH",
    linkText: "View Impact Report",
    fullStory: "Under the leadership of Mr. Pratyaksh Pandey, HS ONE STEP SOLUTIONS successfully collaborated with public health bodies to deploy ultra-low temperature cold-chain systems, medical gas manifold upgrades, and diagnostic equipment staging for NHM programs."
  },
  {
    id: "news-03",
    title: "Corporate CSR Healthcare Initiative Reaches 50,000+ Beneficiaries in Rural Regions",
    category: "CSR & Social Impact",
    date: "July 2026",
    source: "Social Impact Review",
    summary: "Partnering with leading corporate foundations to establish solar-powered primary healthcare centers and mobile diagnostic clinics.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    badge: "CSR IMPACT",
    linkText: "Read Case Study",
    fullStory: "Bridging the gap between corporate CSR commitments and ground-level healthcare delivery, the program established turnkey medical dispensaries equipped with solar power backups, diagnostic testing kits, and telemetry monitoring."
  },
  {
    id: "news-04",
    title: "Advocate Aarati Sah Strengthens Institutional Legal & Statutory Advisory Board",
    category: "Leadership & Governance",
    date: "June 2026",
    source: "Legal Governance Wire",
    summary: "Supreme Court advocate appointed to oversee contract integrity, sovereign tender compliances, and multi-tier public-private governance.",
    image: "/aarati-sah.jpg",
    badge: "LEGAL COUNSEL",
    linkText: "Read Announcement",
    fullStory: "HS ONE STEP SOLUTIONS onboarded Advocate Aarati Sah (Advocate at Supreme Court of India) as Legal Advisor to provide apex judicial oversight, EPC tender risk auditing, and statutory healthcare clearance governance."
  }
];
