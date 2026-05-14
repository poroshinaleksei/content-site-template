import fs from "node:fs/promises";
import path from "node:path";
import { createInterface } from "node:readline/promises";

const sitePresetOptions = [
  "single-childrens-book",
  "writer-author",
  "psychologist",
  "small-business",
];

const themePresetOptions = ["nordic-warm", "minimal", "playful", "editorial"];
const languageOptions = ["russian", "english", "norwegian"];

export function normalizeUrl(value) {
  if (!value) {
    return "https://example.com";
  }

  return /^https?:\/\//.test(value) ? value : `https://${value}`;
}

function normalizeOptionalUrl(value) {
  if (!value) {
    return "";
  }

  return normalizeUrl(value);
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

function projectPath(cwd, filePath) {
  return path.join(cwd, filePath);
}

async function readStreamLines(input) {
  const chunks = [];

  for await (const chunk of input) {
    chunks.push(Buffer.from(chunk));
  }

  return Buffer.concat(chunks).toString("utf8").split(/\r?\n/);
}

export async function createQuestioner({ input, output }) {
  if (!input.isTTY) {
    const lines = await readStreamLines(input);

    return {
      ask(question, fallback = "") {
        const suffix = fallback ? ` (${fallback})` : "";
        const answer = lines.shift()?.trim() || fallback;

        output.write(`${question}${suffix}: ${answer}\n`);

        return answer;
      },
      close() {},
    };
  }

  const rl = createInterface({ input, output });

  return {
    async ask(question, fallback = "") {
      const suffix = fallback ? ` (${fallback})` : "";
      const answer = await rl.question(`${question}${suffix}: `);

      return answer.trim() || fallback;
    },
    close() {
      rl.close();
    },
  };
}

export async function collectSetupAnswers(ask) {
  return {
    siteName: await ask("Site name", "Website template"),
    owner: await ask("Owner or brand name", "Site owner"),
    communicationLanguage: choice(
      await ask("User communication language (russian, english, norwegian)", "russian"),
      languageOptions,
      "russian",
    ),
    documentationLanguage: choice(
      await ask("Documentation language (english, russian, norwegian)", "english"),
      languageOptions,
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
      await ask(`Site preset (${sitePresetOptions.join(", ")})`, "small-business"),
      sitePresetOptions,
      "small-business",
    ),
    themePreset: choice(
      await ask(`Theme preset (${themePresetOptions.join(", ")})`, "nordic-warm"),
      themePresetOptions,
      "nordic-warm",
    ),
    email: await ask("Contact email", "hello@example.com"),
    phone: await ask("Contact phone"),
    linkedin: normalizeOptionalUrl(await ask("LinkedIn URL")),
    instagram: normalizeOptionalUrl(await ask("Instagram URL")),
    facebook: normalizeOptionalUrl(await ask("Facebook URL")),
    gaId: await ask("GA4 measurement ID"),
  };
}

async function writeSiteConfig(answers, cwd) {
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

  await fs.writeFile(projectPath(cwd, "config/site.ts"), content);
}

async function writeThemeConfig(answers, cwd) {
  const themePath = projectPath(cwd, "config/theme.ts");
  const content = await fs.readFile(themePath, "utf8");
  const nextContent = content.replace(
    /themePreset:\s*"[^"]+"/,
    `themePreset: ${quote(answers.themePreset)}`,
  );

  await fs.writeFile(themePath, nextContent);
}

async function writeLinksConfig(answers, cwd) {
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

  await fs.writeFile(projectPath(cwd, "config/links.ts"), content);
}

async function writeFeaturesConfig(answers, cwd) {
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

  await fs.writeFile(projectPath(cwd, "config/features.ts"), content);
}

async function writeBrief(answers, cwd) {
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

  await fs.writeFile(projectPath(cwd, "brief.md"), content);
}

async function writeAgentsFile(answers, cwd) {
  const template = await fs.readFile(projectPath(cwd, "AGENTS.template.md"), "utf8");
  const content = renderTemplate(template, {
    siteName: answers.siteName,
    owner: answers.owner,
    url: answers.url,
    siteType: answers.siteType,
    themePreset: answers.themePreset,
    communicationLanguage: languageLabel(answers.communicationLanguage),
    documentationLanguage: languageLabel(answers.documentationLanguage),
  });

  await fs.writeFile(projectPath(cwd, "AGENTS.md"), content);
}

async function writeEnvLocal(answers, cwd) {
  if (!answers.gaId) {
    return;
  }

  await fs.writeFile(
    projectPath(cwd, ".env.local"),
    `NEXT_PUBLIC_GA_ID=${answers.gaId}\n`,
  );
}

export async function applySetupAnswers(answers, options = {}) {
  const cwd = options.cwd || process.cwd();

  await writeSiteConfig(answers, cwd);
  await writeThemeConfig(answers, cwd);
  await writeLinksConfig(answers, cwd);
  await writeFeaturesConfig(answers, cwd);
  await writeBrief(answers, cwd);
  await writeAgentsFile(answers, cwd);
  await writeEnvLocal(answers, cwd);
}
