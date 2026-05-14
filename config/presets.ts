import type { Localized, PageConfig, SitePreset, SitePresetConfig } from "./types";

const singleChildrensBookHome = {
  nb: {
    title: "Hjem",
    slug: "/",
    description: "En enkel nettside for en barnebok.",
    sections: [
      {
        id: "book-hero",
        type: "book-hero",
        eyebrow: "Ny barnebok",
        badge: "For høytlesning",
        title: "Boktittel kommer her",
        body: "En varm introduksjon til boken, temaet og hvorfor historien passer for barn og voksne som leser sammen.",
        coverImage: "/images/book-cover-placeholder.svg",
        primaryAction: { label: "Hvor kan den kjøpes", href: "#where-to-buy" },
        secondaryAction: { label: "Om forfatteren", href: "#author" },
      },
      {
        id: "book-intro",
        type: "book-intro",
        title: "En kort inngang til fortellingen.",
        body: "Bruk denne seksjonen til å beskrive stemningen, hovedpersonen og hva leseren kan forvente uten å røpe hele historien.",
        quote: "En liten bok om store følelser, nysgjerrighet og trygghet.",
      },
      {
        id: "book-details",
        type: "book-details",
        title: "Bokdetaljer",
        details: [
          { label: "Alder", value: "3 til 7 år" },
          { label: "Format", value: "Innbundet eller digital" },
          { label: "Språk", value: "Norsk og engelsk" },
        ],
      },
      {
        id: "illustrations",
        type: "illustration-gallery",
        title: "Illustrasjoner",
        body: "Legg inn utvalgte illustrasjoner eller stemningsbilder fra boken.",
        images: [
          {
            src: "/images/illustration-placeholder.svg",
            alt: "Illustration placeholder",
            caption: "Illustrasjonstekst",
          },
        ],
      },
      {
        id: "where-to-buy",
        type: "where-to-buy",
        title: "Hvor kan boken kjøpes",
        body: "Bruk strukturerte kjøpslenker i stedet for hardkodede knapper i komponentene.",
        links: [
          {
            label: "Bokhandel",
            href: "https://example.com",
            description: "Legg inn lenke til valgt forhandler.",
          },
        ],
      },
      {
        id: "for-parents",
        type: "for-parents",
        title: "For foreldre og voksne",
        points: [
          {
            title: "Samtalestarter",
            description: "Knytt bokens tema til en enkel samtale etter lesing.",
          },
          {
            title: "Høytlesning",
            description: "Beskriv hvor lang lesestunden er og hvordan boken passer.",
          },
        ],
      },
      {
        id: "author",
        type: "author-bio",
        title: "Om forfatteren",
        body: "Kort forfatterbio med plass til bakgrunn, motivasjon og relevante lenker.",
        links: [{ label: "Kontakt", href: "/contact" }],
      },
      {
        id: "contact",
        type: "cta",
        title: "Kontakt for opplesning, presse eller samarbeid.",
        action: { label: "Ta kontakt", href: "/contact" },
      },
    ],
  },
  en: {
    title: "Home",
    slug: "/",
    description: "A simple website for one children's book.",
    sections: [
      {
        id: "book-hero",
        type: "book-hero",
        eyebrow: "New children's book",
        badge: "For reading aloud",
        title: "Book title goes here",
        body: "A warm introduction to the book, its theme, and why the story works for children and adults reading together.",
        coverImage: "/images/book-cover-placeholder.svg",
        primaryAction: { label: "Where to buy", href: "#where-to-buy" },
        secondaryAction: { label: "About the author", href: "#author" },
      },
      {
        id: "book-intro",
        type: "book-intro",
        title: "A short entry point into the story.",
        body: "Use this section to describe the mood, main character, and what the reader can expect without retelling the whole story.",
        quote: "A small book about big feelings, curiosity, and safety.",
      },
      {
        id: "book-details",
        type: "book-details",
        title: "Book details",
        details: [
          { label: "Age", value: "3 to 7 years" },
          { label: "Format", value: "Hardcover or digital" },
          { label: "Languages", value: "Norwegian and English" },
        ],
      },
      {
        id: "illustrations",
        type: "illustration-gallery",
        title: "Illustrations",
        body: "Add selected illustrations or mood images from the book.",
        images: [
          {
            src: "/images/illustration-placeholder.svg",
            alt: "Illustration placeholder",
            caption: "Illustration caption",
          },
        ],
      },
      {
        id: "where-to-buy",
        type: "where-to-buy",
        title: "Where to buy",
        body: "Use structured purchase links instead of hardcoded buttons in components.",
        links: [
          {
            label: "Bookshop",
            href: "https://example.com",
            description: "Add a link to the preferred retailer.",
          },
        ],
      },
      {
        id: "for-parents",
        type: "for-parents",
        title: "For parents and grownups",
        points: [
          {
            title: "Conversation starter",
            description: "Connect the book theme to a simple conversation after reading.",
          },
          {
            title: "Reading aloud",
            description: "Describe reading time and how the book fits the moment.",
          },
        ],
      },
      {
        id: "author",
        type: "author-bio",
        title: "About the author",
        body: "Short author bio with room for background, motivation, and relevant links.",
        links: [{ label: "Contact", href: "/contact" }],
      },
      {
        id: "contact",
        type: "cta",
        title: "Contact for readings, press, or collaboration.",
        action: { label: "Get in touch", href: "/contact" },
      },
    ],
  },
} satisfies Localized<PageConfig>;

export const presetRegistry: Record<SitePreset, SitePresetConfig> = {
  "single-childrens-book": {
    label: "Single children's book",
    description: "A focused site for one illustrated children's book.",
    pages: ["home", "about", "articles", "contact"],
    sections: [
      "BookHero",
      "BookIntro",
      "BookDetails",
      "IllustrationGallery",
      "WhereToBuy",
      "ForParents",
      "AuthorBio",
      "Contact",
    ],
    expectedData: [
      "Book title",
      "Book description",
      "Cover image",
      "Illustrations",
      "Purchase links",
      "Age range",
      "Author bio",
      "Contact details",
    ],
    pageOverrides: {
      home: singleChildrensBookHome,
    },
  },
  "writer-author": {
    label: "Writer or author",
    description: "A site for an author profile, articles, and published work.",
    pages: ["home", "about", "articles", "contact"],
    sections: ["Hero", "About", "Articles", "CTA", "ContactForm"],
    expectedData: ["Author bio", "Books or works", "Articles", "Social links"],
  },
  psychologist: {
    label: "Psychologist",
    description: "A quiet informational site for a professional practice.",
    pages: ["home", "about", "articles", "contact"],
    sections: ["Hero", "About", "Services", "FAQ", "CTA", "ContactForm"],
    expectedData: ["Practice description", "Services", "Credentials", "Contact details"],
  },
  "small-business": {
    label: "Small business",
    description: "A generic site for a small service business.",
    pages: ["home", "about", "articles", "contact"],
    sections: ["Hero", "About", "Services", "Articles", "CTA", "ContactForm"],
    expectedData: [
      "Business description",
      "Services",
      "External links",
      "Contact details",
    ],
  },
};
