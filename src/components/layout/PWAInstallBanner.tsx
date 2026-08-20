import React, { useState, useEffect } from "react";
import { Download, X, Smartphone, Sparkles, CheckCircle2 } from "lucide-react";
import { triggerHaptic } from "../../utils/haptics";

export const PWAInstallBanner: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if already installed as standalone PWA
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
      return;
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // Show install prompt banner on mobile / Android
      if (window.innerWidth <= 768) {
        setShowBanner(true);
      }
    };

    window.addEventListener("beforeinstallprompt", handler);

    window.addEventListener("appinstalled", () => {
      setIsInstalled(true);
      setShowBanner(false);
      setDeferredPrompt(null);
    });

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstall = async () => {
    triggerHaptic(25);
    if (!deferredPrompt) {
      // Fallback guide if browser doesn't support beforeinstallprompt
      alert("To install: Tap the browser menu (⋮) in Android Chrome and select 'Add to Home Screen'.");
      return;
    }

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setIsInstalled(true);
      setShowBanner(false);
    }
    setDeferredPrompt(null);
  };

  if (!showBanner || isInstalled) return null;

  return (
    <div className="fixed top-3 left-3 right-3 z-50 sm:hidden animate-in slide-in-from-top duration-300">
      <div className="bg-slate-900 text-white rounded-2xl p-3.5 border-2 border-[#008744] shadow-2xl flex items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-white p-1 flex-shrink-0 flex items-center justify-center border border-slate-700">
            <img src="/logo.png" alt="HS" className="h-8 object-contain" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="text-xs font-bold text-white font-mono">HS ONE STEP APP</span>
              <span className="text-[9px] font-mono px-1.5 py-0.2 bg-[#008744] text-white rounded font-bold">ANDROID</span>
            </div>
            <p className="text-[10px] text-slate-300">Install for 1-tap RFQ & offline access</p>
          </div>
        </div>

        <div className="flex items-center space-x-1.5 flex-shrink-0">
          <button
            onClick={handleInstall}
            className="px-3 py-1.5 bg-gradient-to-r from-[#008744] to-[#065F38] text-white font-bold rounded-xl text-[11px] font-mono tracking-wider flex items-center space-x-1 shadow-md"
          >
            <Download className="w-3 h-3" />
            <span>INSTALL</span>
          </button>
          <button
            onClick={() => {
              triggerHaptic(10);
              setShowBanner(false);
            }}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
