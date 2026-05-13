"use client";

type AnalyticsEvent = {
  name: string;
  params?: Record<string, string | number | boolean | null>;
};

declare global {
  interface Window {
    gtag?: (command: "event", name: string, params?: AnalyticsEvent["params"]) => void;
  }
}

export function trackEvent({ name, params }: AnalyticsEvent) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", name, params);
}
