export function getGaMeasurementId() {
  return process.env.NEXT_PUBLIC_GA_ID?.trim() || null;
}

export function isAnalyticsEnabled() {
  return Boolean(getGaMeasurementId());
}
