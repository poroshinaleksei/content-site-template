import type { ThemeConfig } from "./types";

export const themeConfig = {
  radius: "md",
  palette: {
    background: "#f8f7f2",
    foreground: "#171512",
    primary: "#1f4f46",
    accent: "#b56b3d",
    muted: "#eeeae1",
  },
  typography: {
    heading: "Fraunces",
    body: "Source Sans 3",
  },
} satisfies ThemeConfig;
