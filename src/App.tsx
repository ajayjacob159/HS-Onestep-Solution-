import React, { useState } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { ModalRFQ } from "./components/layout/ModalRFQ";
import { MobileBottomBar } from "./components/layout/MobileBottomBar";
import { HeroExperience } from "./components/hero/HeroExperience";
import { CategoryStripCarousel } from "./components/sections/CategoryStripCarousel";
import { HospitalFloorplanExplorer } from "./components/sections/HospitalFloorplanExplorer";
import { VendorComparison } from "./components/sections/VendorComparison";
import { OneStepModel } from "./components/sections/OneStepModel";
import { SectorsGrid } from "./components/sections/SectorsGrid";
import { HospitalEcosystem } from "./components/sections/HospitalEcosystem";
import { ProjectDashboardConcept } from "./components/sections/ProjectDashboardConcept";
import { ProcurementCatalog } from "./components/sections/ProcurementCatalog";
import { ProjectBuilder } from "./components/sections/ProjectBuilder";
import { GovernmentPublicPrivate } from "./components/sections/GovernmentPublicPrivate";
import { GlobalSupplyMap } from "./components/sections/GlobalSupplyMap";
import { TrustPillars } from "./components/sections/TrustPillars";
import { CaseStudies } from "./components/sections/CaseStudies";
import { TechIntelligence } from "./components/sections/TechIntelligence";
import { AboutMission } from "./components/sections/AboutMission";
import { ContactLeadGen } from "./components/sections/ContactLeadGen";

export const App: React.FC = () => {
  const [rfqModalOpen, setRfqModalOpen] = useState(false);
  const [selectedRfqSector, setSelectedRfqSector] = useState<string | undefined>(undefined);
  const [selectedRfqProduct, setSelectedRfqProduct] = useState<string | undefined>(undefined);

  const handleOpenRFQ = (sectorId?: string, productName?: string) => {
    setSelectedRfqSector(sectorId);
    setSelectedRfqProduct(productName);
    setRfqModalOpen(true);
  };

  const handleOpenProjectBuilder = () => {
    const el = document.getElementById("project-builder");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectSectorFromCarousel = (sectorId: string) => {
    const el = document.getElementById(`sector-${sectorId}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-emerald-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        onOpenRFQ={handleOpenRFQ}
        onOpenProjectBuilder={handleOpenProjectBuilder}
      />

      <main className="flex-1">
        {/* Hero Experience */}
        <HeroExperience
          onOpenRFQ={() => handleOpenRFQ()}
          onOpenProjectBuilder={handleOpenProjectBuilder}
        />

        {/* Skanvi-Style Category Strip Carousel */}
        <CategoryStripCarousel
          onSelectSector={handleSelectSectorFromCarousel}
        />

        {/* Interactive CAD Hospital Floorplan Explorer */}
        <HospitalFloorplanExplorer
          onOpenRFQ={handleOpenRFQ}
        />

        {/* Execution Model Comparison */}
        <VendorComparison />

        {/* The One Step Model (8 Stages) */}
        <OneStepModel />

        {/* 12 Sectors Grid with Skanvi-Style Cards & Deep-Dive Modals */}
        <SectorsGrid
          onOpenRFQ={handleOpenRFQ}
        />

        {/* Flagship Turnkey Hospital Ecosystem (15 Stages) */}
        <HospitalEcosystem
          onOpenRFQ={handleOpenRFQ}
        />

        {/* Simulated Central Project Telemetry Dashboard */}
        <ProjectDashboardConcept />

        {/* Institutional Procurement Catalog & BOQ Selector */}
        <ProcurementCatalog
          onOpenRFQ={handleOpenRFQ}
        />

        {/* Interactive Project Builder (4-Step Wizard) */}
        <ProjectBuilder
          onOpenRFQ={() => handleOpenRFQ()}
        />

        {/* Tri-Pillar: Government, Public & Private Sector */}
        <GovernmentPublicPrivate
          onOpenRFQ={handleOpenRFQ}
        />

        {/* Global Sourcing Network Map */}
        <GlobalSupplyMap />

        {/* Corporate Trust Pillars & Metrics */}
        <TrustPillars />

        {/* Case Studies */}
        <CaseStudies />

        {/* AI Digital Layer Preview */}
        <TechIntelligence />

        {/* Corporate Mission & Story */}
        <AboutMission
          onOpenRFQ={() => handleOpenRFQ()}
        />

        {/* Institutional Contact & Lead Desk */}
        <ContactLeadGen />
      </main>

      {/* Corporate Footer with Official Logo & Sitemap */}
      <Footer
        onOpenRFQ={handleOpenRFQ}
      />

      {/* Android & Mobile Quick-Action Navigation Bar */}
      <MobileBottomBar
        onOpenRFQ={handleOpenRFQ}
        onOpenProjectBuilder={handleOpenProjectBuilder}
      />

      {/* Global RFQ / BOQ Modal */}
      <ModalRFQ
        isOpen={rfqModalOpen}
        onClose={() => setRfqModalOpen(false)}
        initialSector={selectedRfqSector}
        initialProduct={selectedRfqProduct}
      />
    </div>
  );
};

export default App;
