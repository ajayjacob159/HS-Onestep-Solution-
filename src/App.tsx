import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { ModalRFQ } from "./components/layout/ModalRFQ";
import { MobileBottomBar } from "./components/layout/MobileBottomBar";
import { PWAInstallBanner } from "./components/layout/PWAInstallBanner";

// Dedicated Standalone Pages
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { TeamPage } from "./pages/TeamPage";
import { HospitalDevelopmentPage } from "./pages/HospitalDevelopmentPage";
import { CadFloorplanPage } from "./pages/CadFloorplanPage";
import { ExecutionHighwayPage } from "./pages/ExecutionHighwayPage";
import { ProcurementPage } from "./pages/ProcurementPage";
import { GalleryPage } from "./pages/GalleryPage";
import { NewsMediaPage } from "./pages/NewsMediaPage";
import { BlogsPage } from "./pages/BlogsPage";

import { triggerHaptic } from "./utils/haptics";

const ROUTE_SEO: Record<string, { title: string; description: string }> = {
  "/": {
    title: "HS ONE STEP SOLUTIONS | One Partner. Multiple Solutions. Complete Project Execution.",
    description: "HS ONE STEP SOLUTIONS is an integrated B2B, government, and institutional solutions company serving Government, Public & Private sectors across turnkey healthcare, civil infrastructure, and procurement."
  },
  "/about": {
    title: "About Us & Multi-State Operations | HS ONE STEP SOLUTIONS",
    description: "Learn about HS ONE STEP SOLUTIONS, our operational hubs in Pune (HQ), Hyderabad, Bihar, Delhi, Uttar Pradesh, and Gujarat, and our single-vendor execution model."
  },
  "/team": {
    title: "Executive Leadership Team & Governance Board | HS ONE STEP SOLUTIONS",
    description: "Meet the leadership of HS ONE STEP SOLUTIONS: Mr. Pratyaksh Pandey (Founder & CEO), Mr. Ritu Raj Pandey (Vice President), Mr. Akhtar Zamal (CMO), Rocky Jacob (CTO), and Aarati Sah (Legal Advisor)."
  },
  "/hospital-development": {
    title: "Turnkey Hospital Development & Cleanroom Engineering | HS ONE STEP SOLUTIONS",
    description: "End-to-end turnkey hospital infrastructure from empty site to NABH operational handover: Modular OTs, MGPS pipelines, ICU suites, and diagnostic staging."
  },
  "/cad-floorplan": {
    title: "Interactive BIM & CAD Healthcare Architecture | HS ONE STEP SOLUTIONS",
    description: "Explore interactive 2D/3D BIM CAD floorplans, sterile cleanroom workflows, and hospital zoning layouts engineered by HS ONE STEP SOLUTIONS."
  },
  "/execution-highway": {
    title: "365-Day Turnkey Project Execution Highway | HS ONE STEP SOLUTIONS",
    description: "Review our standardized 15-stage 365-day execution roadmap ensuring on-time project completion and single-point accountability."
  },
  "/procurement": {
    title: "Institutional B2B Procurement & Direct OEM Catalog | HS ONE STEP SOLUTIONS",
    description: "Browse 1,200+ certified medical, surgical, civil, energy, and commercial kitchen products with direct OEM sourcing and institutional BOQ fulfillment."
  },
  "/gallery": {
    title: "Turnkey Project & Facility Gallery | HS ONE STEP SOLUTIONS",
    description: "High-definition photo and video documentation of completed modular operation theatres, civil framing, and healthcare facilities across India."
  },
  "/news-media": {
    title: "Press Releases & Media Center | HS ONE STEP SOLUTIONS",
    description: "Official press releases, corporate announcements, state expansions, and institutional milestone updates from HS ONE STEP SOLUTIONS."
  },
  "/blogs": {
    title: "Engineering & Healthcare Industry Perspectives Blog | HS ONE STEP SOLUTIONS",
    description: "Insights, whitepapers, and guides on turnkey hospital development, NABH compliance, greenfield construction, and institutional procurement."
  }
};

const RouteMetadataHandler: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change if not targeting an anchor hash
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }

    const currentSeo = ROUTE_SEO[location.pathname] || ROUTE_SEO["/"];
    document.title = currentSeo.title;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", currentSeo.description);
    }

    // Update OpenGraph Title & Description
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", currentSeo.title);
    }
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute("content", currentSeo.description);
    }
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute("content", `https://www.hsonestepsolutions.com${location.pathname === "/" ? "" : location.pathname}`);
    }

    // Update Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", `https://www.hsonestepsolutions.com${location.pathname === "/" ? "" : location.pathname}`);
    }
  }, [location.pathname, location.hash]);

  return null;
};

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
      <RouteMetadataHandler />
      <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-emerald-500 selection:text-white">
        {/* Android PWA Install Banner */}
        <PWAInstallBanner />

        {/* Clean Corporate Navbar with Top Utility Bar */}
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

            {/* 2. Standalone Company Profile Page */}
            <Route
              path="/about"
              element={
                <AboutPage
                  onOpenRFQ={handleOpenRFQ}
                />
              }
            />

            {/* 3. Standalone Our Team Page */}
            <Route
              path="/team"
              element={
                <TeamPage
                  onOpenRFQ={handleOpenRFQ}
                />
              }
            />

            {/* 4. Standalone Hospital Development Page */}
            <Route
              path="/hospital-development"
              element={
                <HospitalDevelopmentPage
                  onOpenRFQ={handleOpenRFQ}
                />
              }
            />

            {/* 5. Standalone Interactive CAD Floorplan Page */}
            <Route
              path="/cad-floorplan"
              element={
                <CadFloorplanPage
                  onOpenRFQ={handleOpenRFQ}
                />
              }
            />

            {/* 6. Standalone 365-Day Execution Highway Page */}
            <Route
              path="/execution-highway"
              element={
                <ExecutionHighwayPage
                  onOpenRFQ={handleOpenRFQ}
                />
              }
            />

            {/* 7. Standalone B2B Procurement Catalog Page */}
            <Route
              path="/procurement"
              element={
                <ProcurementPage
                  onOpenRFQ={handleOpenRFQ}
                />
              }
            />

            {/* 8. Standalone Project & Facility Gallery Page */}
            <Route
              path="/gallery"
              element={
                <GalleryPage
                  onOpenRFQ={handleOpenRFQ}
                />
              }
            />

            {/* 9. Standalone News & Media Center Page */}
            <Route
              path="/news-media"
              element={
                <NewsMediaPage
                  onOpenRFQ={handleOpenRFQ}
                />
              }
            />

            {/* 10. Standalone Industry Blogs & Perspectives Page */}
            <Route
              path="/blogs"
              element={
                <BlogsPage
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
