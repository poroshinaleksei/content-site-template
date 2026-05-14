import type { CSSProperties } from "react";

import { activeTheme, themeConfig } from "@/config/theme";

type ThemeStyle = CSSProperties & Record<`--${string}`, string>;

const radiusValues = {
  sm: "0.25rem",
  md: "0.5rem",
  lg: "0.75rem",
};

const spacingValues = {
  compact: {
    section: "4rem",
    container: "1.25rem",
  },
  comfortable: {
    section: "5rem",
    container: "1.5rem",
  },
  spacious: {
    section: "6.5rem",
    container: "1.75rem",
  },
};

export function getThemeStyle(): ThemeStyle {
  const spacing = spacingValues[activeTheme.spacingDensity];

  return {
    "--background": activeTheme.palette.background,
    "--foreground": activeTheme.palette.foreground,
    "--muted": activeTheme.palette.muted,
    "--muted-foreground": "color-mix(in srgb, var(--foreground) 62%, transparent)",
    "--border": activeTheme.palette.border,
    "--primary": activeTheme.palette.primary,
    "--primary-foreground": activeTheme.palette.surface,
    "--accent": activeTheme.palette.accent,
    "--accent-foreground": activeTheme.palette.foreground,
    "--surface": activeTheme.palette.surface,
    "--surface-contrast": activeTheme.palette.surfaceContrast,
    "--radius": radiusValues[activeTheme.radius],
    "--button-radius": radiusValues[activeTheme.radius],
    "--section-spacing-y": spacing.section,
    "--container-padding-x": spacing.container,
  };
}

export function getThemeAttributes() {
  return {
    "data-theme-preset": themeConfig.themePreset,
    "data-background-style": activeTheme.backgroundStyle,
    "data-button-style": activeTheme.buttonStyle,
    "data-spacing-density": activeTheme.spacingDensity,
  };
}
