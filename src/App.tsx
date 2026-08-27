import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { ModalRFQ } from "./components/layout/ModalRFQ";
import { MobileBottomBar } from "./components/layout/MobileBottomBar";
import { PWAInstallBanner } from "./components/layout/PWAInstallBanner";

// Dedicated Pages
import { HomePage } from "./pages/HomePage";
import { HospitalDevelopmentPage } from "./pages/HospitalDevelopmentPage";
import { CadFloorplanPage } from "./pages/CadFloorplanPage";
import { ExecutionHighwayPage } from "./pages/ExecutionHighwayPage";
import { ProcurementPage } from "./pages/ProcurementPage";

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
    <BrowserRouter>
      <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-emerald-500 selection:text-white">
        {/* Android PWA Install Banner */}
        <PWAInstallBanner />

        {/* Clean Corporate Navbar */}
        <Navbar
          onOpenRFQ={handleOpenRFQ}
          onOpenProjectBuilder={handleOpenProjectBuilder}
        />

        <main className="flex-1">
          <Routes>
            {/* 1. Main Home Page */}
            <Route
              path="/"
              element={
                <HomePage
                  onOpenRFQ={handleOpenRFQ}
                  onOpenProjectBuilder={handleOpenProjectBuilder}
                  onSelectSectorFromCarousel={handleSelectSectorFromCarousel}
                />
              }
            />

            {/* 2. Standalone Hospital Development Page */}
            <Route
              path="/hospital-development"
              element={
                <HospitalDevelopmentPage
                  onOpenRFQ={handleOpenRFQ}
                />
              }
            />

            {/* 3. Standalone Interactive CAD Floorplan Page */}
            <Route
              path="/cad-floorplan"
              element={
                <CadFloorplanPage
                  onOpenRFQ={handleOpenRFQ}
                />
              }
            />

            {/* 4. Standalone 365-Day Execution Highway Page */}
            <Route
              path="/execution-highway"
              element={
                <ExecutionHighwayPage
                  onOpenRFQ={handleOpenRFQ}
                />
              }
            />

            {/* 5. Standalone B2B Procurement Catalog Page */}
            <Route
              path="/procurement"
              element={
                <ProcurementPage
                  onOpenRFQ={handleOpenRFQ}
                />
              }
            />

            {/* Catch-all redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
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
    </BrowserRouter>
  );
};

export default App;
