import React, { useState, useEffect } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { ModalRFQ } from "./components/layout/ModalRFQ";
import { MobileBottomBar } from "./components/layout/MobileBottomBar";
import { PWAInstallBanner } from "./components/layout/PWAInstallBanner";
import { HeroExperience } from "./components/hero/HeroExperience";
import { PictorialMarquee } from "./components/sections/PictorialMarquee";
import { CorporateCampusShowcase } from "./components/sections/CorporateCampusShowcase";
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
import { AboutMission } from "./components/sections/AboutMission";
import { ContactLeadGen } from "./components/sections/ContactLeadGen";
import { triggerHaptic } from "./utils/haptics";

export const App: React.FC = () => {
  const [rfqModalOpen, setRfqModalOpen] = useState(false);
  const [selectedRfqSector, setSelectedRfqSector] = useState<string | undefined>(undefined);
  const [selectedRfqProduct, setSelectedRfqProduct] = useState<string | undefined>(undefined);

  useEffect(() => {
    if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js").catch(() => {});
      });
    }

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("action") === "rfq") {
      setRfqModalOpen(true);
    }
  }, []);

  const handleOpenRFQ = (sectorId?: string, productName?: string) => {
    triggerHaptic(20);
    setSelectedRfqSector(sectorId);
    setSelectedRfqProduct(productName);
    setRfqModalOpen(true);
  };

  const handleOpenProjectBuilder = () => {
    triggerHaptic(15);
    const el = document.getElementById("project-builder");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectSectorFromCarousel = (sectorId: string) => {
    triggerHaptic(10);
    const el = document.getElementById(`sector-${sectorId}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-emerald-500 selection:text-white">
      {/* Android PWA Install Banner */}
      <PWAInstallBanner />

      {/* Clean Corporate Navbar */}
      <Navbar
        onOpenRFQ={handleOpenRFQ}
        onOpenProjectBuilder={handleOpenProjectBuilder}
      />

      <main className="flex-1">
        {/* Visual Hero Experience with Corporate HQ Background (Vivid & Highly Visible) */}
        <HeroExperience
          onOpenRFQ={() => handleOpenRFQ()}
          onOpenProjectBuilder={handleOpenProjectBuilder}
        />

        {/* Continuous Horizontal Pictorial Marquee Scroller */}
        <PictorialMarquee />

        {/* Full-Bleed Corporate Campus & Headquarters Showcase */}
        <CorporateCampusShowcase
          onOpenRFQ={() => handleOpenRFQ()}
        />

        {/* Skanvi-Style Sector Carousel */}
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

        {/* Pictorial 12-Sectors Grid */}
        <SectorsGrid
          onOpenRFQ={handleOpenRFQ}
        />

        {/* Flagship Turnkey Hospital Ecosystem */}
        <HospitalEcosystem
          onOpenRFQ={handleOpenRFQ}
        />

        {/* Simulated Central Project Telemetry Dashboard */}
        <ProjectDashboardConcept />

        {/* Institutional Procurement Catalog */}
        <ProcurementCatalog
          onOpenRFQ={handleOpenRFQ}
        />

        {/* Interactive Project Builder */}
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

        {/* Corporate Mission & Story */}
        <AboutMission
          onOpenRFQ={() => handleOpenRFQ()}
        />

        {/* Institutional Contact & Lead Desk */}
        <ContactLeadGen />
      </main>

      {/* Streamlined Corporate Footer */}
      <Footer
        onOpenRFQ={handleOpenRFQ}
      />

      {/* Mobile Floating Quick-Action Bar */}
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
