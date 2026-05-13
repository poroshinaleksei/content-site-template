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
  description: ${quote(answers.description)},
  url: ${quote(answers.url)},
  locale: "en",
  defaultSeo: {
    title: ${quote(answers.siteName)},
    description: ${quote(answers.description)},
    image: "/images/og-default.jpg",
  },
} satisfies SiteConfig;
`;

  await fs.writeFile("config/site.ts", content);
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
- Description: ${answers.description}
- Domain: ${answers.url}

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
- Add articles in \`content/articles/\`.
- Keep client specific details in config and content before changing components.
`;

  await fs.writeFile("brief.md", content);
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
  description: await ask(
    "Short site description",
    "A starter template for small informational websites.",
  ),
  url: normalizeUrl(await ask("Expected domain", "https://example.com")),
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
await writeLinksConfig(answers);
await writeFeaturesConfig(answers);
await writeBrief(answers);
await writeEnvLocal(answers);

rl.close();

console.log("Setup complete. Review config/, brief.md, and content/ before launch.");
