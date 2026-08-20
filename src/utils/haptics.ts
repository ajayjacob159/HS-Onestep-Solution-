// Android Native Vibration & Haptic Feedback Helper
export const triggerHaptic = (duration: number = 15) => {
  if (typeof window !== "undefined" && "navigator" in window && navigator.vibrate) {
    try {
      navigator.vibrate(duration);
    } catch {
      // Ignore vibration errors if unsupported
    }
  }
};
