import { GoogleAnalytics } from "@next/third-parties/google";

import { getGaMeasurementId } from "@/lib/analytics/config";

export function Analytics() {
  const gaId = getGaMeasurementId();

  if (!gaId) {
    return null;
  }

  return <GoogleAnalytics gaId={gaId} />;
}
