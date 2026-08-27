import React from "react";
import { HeroExperience } from "../components/hero/HeroExperience";
import { PictorialMarquee } from "../components/sections/PictorialMarquee";
import { FounderSection } from "../components/sections/FounderSection";
import { TechIntelligence } from "../components/sections/TechIntelligence";
import { CorporateCampusShowcase } from "../components/sections/CorporateCampusShowcase";
import { CategoryStripCarousel } from "../components/sections/CategoryStripCarousel";
import { SectorsGrid } from "../components/sections/SectorsGrid";
import { VendorComparison } from "../components/sections/VendorComparison";
import { OneStepModel } from "../components/sections/OneStepModel";
import { ProjectBuilder } from "../components/sections/ProjectBuilder";
import { GovernmentPublicPrivate } from "../components/sections/GovernmentPublicPrivate";
import { GlobalSupplyMap } from "../components/sections/GlobalSupplyMap";
import { TrustPillars } from "../components/sections/TrustPillars";
import { CaseStudies } from "../components/sections/CaseStudies";
import { AboutMission } from "../components/sections/AboutMission";
import { ContactLeadGen } from "../components/sections/ContactLeadGen";

interface HomePageProps {
  onOpenRFQ: (sectorId?: string, productName?: string) => void;
  onOpenProjectBuilder: () => void;
  onSelectSectorFromCarousel: (sectorId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenRFQ,
  onOpenProjectBuilder,
  onSelectSectorFromCarousel
}) => {
  return (
    <>
      {/* Visual Hero Experience */}
      <HeroExperience
        onOpenRFQ={() => onOpenRFQ()}
        onOpenProjectBuilder={onOpenProjectBuilder}
      />

      {/* Marquee Scroller */}
      <PictorialMarquee />

      {/* Leadership: Mr. Pratyaksh Pandey (Founder & CEO) */}
      <FounderSection
        onOpenRFQ={() => onOpenRFQ()}
      />

      {/* IT Technology, Software & AI Automations Engine */}
      <TechIntelligence
        onOpenRFQ={onOpenRFQ}
      />

      {/* Corporate Campus & Headquarters Showcase */}
      <CorporateCampusShowcase
        onOpenRFQ={() => onOpenRFQ()}
      />

      {/* Skanvi-Style Sector Carousel */}
      <CategoryStripCarousel
        onSelectSector={onSelectSectorFromCarousel}
      />

      {/* Pictorial 12-Sectors Grid */}
      <SectorsGrid
        onOpenRFQ={onOpenRFQ}
      />

      {/* Execution Model Comparison */}
      <VendorComparison />

      {/* The One Step Model (8 Stages) */}
      <OneStepModel />

      {/* Interactive Project Builder */}
      <ProjectBuilder
        onOpenRFQ={() => onOpenRFQ()}
      />

      {/* Tri-Pillar: Government, Public & Private Sector */}
      <GovernmentPublicPrivate
        onOpenRFQ={onOpenRFQ}
      />

      {/* Global Sourcing Network Map */}
      <GlobalSupplyMap />

      {/* Corporate Trust Pillars & Metrics */}
      <TrustPillars />

      {/* Case Studies */}
      <CaseStudies />

      {/* About Us (Company Profile) */}
      <AboutMission
        onOpenRFQ={() => onOpenRFQ()}
      />

      {/* Institutional Contact & Lead Desk */}
      <ContactLeadGen />
    </>
  );
};
