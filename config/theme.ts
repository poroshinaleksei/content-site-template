import type { ThemeConfig, ThemePreset, ThemePresetConfig } from "./types";

export const themeConfig = {
  themePreset: "nordic-warm",
} satisfies ThemeConfig;

export const themePresets = {
  "nordic-warm": {
    label: "Nordic warm",
    radius: "md",
    palette: {
      background: "#f8f7f2",
      foreground: "#171512",
      primary: "#1f4f46",
      accent: "#b56b3d",
      muted: "#eeeae1",
      border: "#d9d1c2",
      surface: "#fffdf7",
      surfaceContrast: "#171512",
    },
    typography: {
      heading: "Fraunces",
      body: "Source Sans 3",
    },
    backgroundStyle: "grid",
    spacingDensity: "comfortable",
    buttonStyle: "solid",
  },
  minimal: {
    label: "Minimal",
    radius: "sm",
    palette: {
      background: "#fbfbf8",
      foreground: "#181816",
      primary: "#20201d",
      accent: "#6f7d6a",
      muted: "#efeee8",
      border: "#d8d7ce",
      surface: "#ffffff",
      surfaceContrast: "#181816",
    },
    typography: {
      heading: "Fraunces",
      body: "Source Sans 3",
    },
    backgroundStyle: "plain",
    spacingDensity: "compact",
    buttonStyle: "outline",
  },
  playful: {
    label: "Playful",
    radius: "lg",
    palette: {
      background: "#fff7df",
      foreground: "#1f1a13",
      primary: "#0d6b6c",
      accent: "#e05f3e",
      muted: "#f8e8ba",
      border: "#e3c77f",
      surface: "#fffaf0",
      surfaceContrast: "#1f1a13",
    },
    typography: {
      heading: "Fraunces",
      body: "Source Sans 3",
    },
    backgroundStyle: "blocks",
    spacingDensity: "spacious",
    buttonStyle: "soft",
  },
  editorial: {
    label: "Editorial",
    radius: "sm",
    palette: {
      background: "#f4f1ec",
      foreground: "#141414",
      primary: "#8f2f1f",
      accent: "#1d5f79",
      muted: "#e7dfd4",
      border: "#c9bbaa",
      surface: "#fffaf3",
      surfaceContrast: "#141414",
    },
    typography: {
      heading: "Fraunces",
      body: "Source Sans 3",
    },
    backgroundStyle: "paper",
    spacingDensity: "comfortable",
    buttonStyle: "ink",
  },
} satisfies Record<ThemePreset, ThemePresetConfig>;

export const activeTheme = themePresets[themeConfig.themePreset];
