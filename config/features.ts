import type { FeatureConfig } from "./types";

export const featureConfig = {
  analytics: {
    provider: "none",
  },
  content: {
    source: "local-mdx",
  },
  contactForm: {
    adapter: "disabled",
  },
} satisfies FeatureConfig;
