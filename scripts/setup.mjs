#!/usr/bin/env node

import fs from "node:fs/promises";
import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = createInterface({ input, output });

async function ask(question, fallback = "") {
  const suffix = fallback ? ` (${fallback})` : "";
  const answer = await rl.question(`${question}${suffix}: `);

  return answer.trim() || fallback;
}

function normalizeUrl(value) {
  if (!value) {
    return "https://example.com";
  }

  return /^https?:\/\//.test(value) ? value : `https://${value}`;
}

function quote(value) {
  return JSON.stringify(value);
}

function renderTemplate(content, replacements) {
  return Object.entries(replacements).reduce((result, [key, value]) => {
    return result.replaceAll(`{{${key}}}`, String(value));
  }, content);
}

function choice(value, allowed, fallback) {
  return allowed.includes(value) ? value : fallback;
}

function languageLabel(value) {
  return (
    {
      russian: "Russian",
      english: "English",
      norwegian: "Norwegian",
    }[value] || "English"
  );
}

function linkObject(link) {
  const lines = [
    "  {",
    `    id: ${quote(link.id)},`,
    `    label: ${quote(link.label)},`,
    `    href: ${quote(link.href)},`,
    `    icon: ${quote(link.icon)},`,
  ];

  if (link.description) {
    lines.push(`    description: ${quote(link.description)},`);
  }

  lines.push("  }");

  return lines.join("\n");
}

async function writeSiteConfig(answers) {
  const content = `import type { SiteConfig } from "./types";

export const siteConfig = {
  name: ${quote(answers.siteName)},
  owner: ${quote(answers.owner)},
  url: ${quote(answers.url)},
  siteType: ${quote(answers.siteType)},
  defaultLocale: "nb",
  locales: ["nb", "en"],
  localeLabels: {
    nb: "Norsk",
    en: "English",
  },
  description: {
    nb: ${quote(answers.descriptionNb)},
    en: ${quote(answers.descriptionEn)},
  },
  defaultSeo: {
    nb: {
      title: ${quote(answers.siteName)},
      description: ${quote(answers.descriptionNb)},
      image: "/images/og-default.jpg",
    },
    en: {
      title: ${quote(answers.siteName)},
      description: ${quote(answers.descriptionEn)},
      image: "/images/og-default.jpg",
    },
  },
} satisfies SiteConfig;
`;

  await fs.writeFile("config/site.ts", content);
}

async function writeThemeConfig(answers) {
  const themePath = "config/theme.ts";
  const content = await fs.readFile(themePath, "utf8");
  const nextContent = content.replace(
    /themePreset:\s*"[^"]+"/,
    `themePreset: ${quote(answers.themePreset)}`,
  );

  await fs.writeFile(themePath, nextContent);
}

async function writeLinksConfig(answers) {
  const contactLinks = [
    {
      id: "email",
      label: answers.email,
      href: `mailto:${answers.email}`,
      icon: "mail",
      description: "Primary contact email",
    },
  ];

  if (answers.phone) {
    contactLinks.push({
      id: "phone",
      label: answers.phone,
      href: `tel:${answers.phone.replace(/[^\d+]/g, "")}`,
      icon: "phone",
      description: "Primary contact phone",
    });
  }

  const socialLinks = [
    answers.linkedin && {
      id: "linkedin",
      label: "LinkedIn",
      href: answers.linkedin,
      icon: "linkedin",
    },
    answers.instagram && {
      id: "instagram",
      label: "Instagram",
      href: answers.instagram,
      icon: "instagram",
    },
    answers.facebook && {
      id: "facebook",
      label: "Facebook",
      href: answers.facebook,
      icon: "facebook",
    },
  ].filter(Boolean);

  const content = `import type { ExternalLink } from "./types";

export const contactLinks = [
${contactLinks.map(linkObject).join(",\n")}
] satisfies ExternalLink[];

export const socialLinks = [
${socialLinks.map(linkObject).join(",\n")}
] satisfies ExternalLink[];

export const externalLinks = [] satisfies ExternalLink[];
`;

  await fs.writeFile("config/links.ts", content);
}

async function writeFeaturesConfig(answers) {
  const provider = answers.gaId ? "ga4" : "none";
  const content = `import type { FeatureConfig } from "./types";

export const featureConfig = {
  analytics: {
    provider: ${quote(provider)},
  },
  content: {
    source: "local-mdx",
  },
  contactForm: {
    adapter: "disabled",
  },
} satisfies FeatureConfig;
`;

  await fs.writeFile("config/features.ts", content);
}

async function writeBrief(answers) {
  const content = `# Client brief

## Project

- Site name: ${answers.siteName}
- Owner or brand: ${answers.owner}
- Domain: ${answers.url}
- Site preset: ${answers.siteType}
- Theme preset: ${answers.themePreset}

## Localized description

- Norwegian: ${answers.descriptionNb}
- English: ${answers.descriptionEn}

## Contact

- Email: ${answers.email}
- Phone: ${answers.phone || "Not provided"}

## Social profiles

- LinkedIn: ${answers.linkedin || "Not provided"}
- Instagram: ${answers.instagram || "Not provided"}
- Facebook: ${answers.facebook || "Not provided"}

## Notes for customization

- Update page composition in \`config/pages/\`.
- Update reusable site data in \`config/\`.
- Add localized articles in \`content/articles/nb/\` and \`content/articles/en/\`.
- Keep client specific details in config and content before changing components.
`;

  await fs.writeFile("brief.md", content);
}

async function writeAgentsFile(answers) {
  const template = await fs.readFile("AGENTS.template.md", "utf8");
  const content = renderTemplate(template, {
    siteName: answers.siteName,
    owner: answers.owner,
    url: answers.url,
    siteType: answers.siteType,
    themePreset: answers.themePreset,
    communicationLanguage: languageLabel(answers.communicationLanguage),
    documentationLanguage: languageLabel(answers.documentationLanguage),
  });

  await fs.writeFile("AGENTS.md", content);
}

async function writeEnvLocal(answers) {
  if (!answers.gaId) {
    return;
  }

  await fs.writeFile(".env.local", `NEXT_PUBLIC_GA_ID=${answers.gaId}\n`);
}

console.log("Initialize this website template for a new client project.");

const answers = {
  siteName: await ask("Site name", "Website template"),
  owner: await ask("Owner or brand name", "Site owner"),
  communicationLanguage: choice(
    await ask("User communication language (russian, english, norwegian)", "russian"),
    ["russian", "english", "norwegian"],
    "russian",
  ),
  documentationLanguage: choice(
    await ask("Documentation language (english, russian, norwegian)", "english"),
    ["english", "russian", "norwegian"],
    "english",
  ),
  descriptionNb: await ask(
    "Short site description in Norwegian",
    "En startmal for små innholdsbaserte nettsider.",
  ),
  descriptionEn: await ask(
    "Short site description in English",
    "A starter template for small informational websites.",
  ),
  url: normalizeUrl(await ask("Expected domain", "https://example.com")),
  siteType: choice(
    await ask(
      "Site preset (single-childrens-book, writer-author, psychologist, small-business)",
      "small-business",
    ),
    ["single-childrens-book", "writer-author", "psychologist", "small-business"],
    "small-business",
  ),
  themePreset: choice(
    await ask("Theme preset (nordic-warm, minimal, playful, editorial)", "nordic-warm"),
    ["nordic-warm", "minimal", "playful", "editorial"],
    "nordic-warm",
  ),
  email: await ask("Contact email", "hello@example.com"),
  phone: await ask("Contact phone"),
  linkedin: normalizeUrl(await ask("LinkedIn URL")),
  instagram: normalizeUrl(await ask("Instagram URL")),
  facebook: normalizeUrl(await ask("Facebook URL")),
  gaId: await ask("GA4 measurement ID"),
};

if (answers.linkedin === "https://example.com") {
  answers.linkedin = "";
}

if (answers.instagram === "https://example.com") {
  answers.instagram = "";
}

if (answers.facebook === "https://example.com") {
  answers.facebook = "";
}

await writeSiteConfig(answers);
await writeThemeConfig(answers);
await writeLinksConfig(answers);
await writeFeaturesConfig(answers);
await writeBrief(answers);
await writeAgentsFile(answers);
await writeEnvLocal(answers);

rl.close();

console.log("Setup complete. Review AGENTS.md, config/, brief.md, and content/ before launch.");
