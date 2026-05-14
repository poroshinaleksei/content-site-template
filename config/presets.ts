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
        book: {
          title: "Boktittel kommer her",
          subtitle: "Undertittel eller kort løfte",
          author: "Forfatternavn",
          illustrator: "Illustratørnavn",
          publisher: "Forlag",
          isbn: "978-82-000-0000-0",
          ageRange: "3 til 7 år",
          language: "Norsk",
          format: "Innbundet",
          pageCount: "32 sider",
          coverImage: "/images/book-cover-placeholder.svg",
          illustrationImages: [
            {
              src: "/images/illustration-placeholder.svg",
              alt: "Illustrasjon fra boken",
              caption: "Kort bildetekst",
            },
          ],
          shortDescription:
            "En kort beskrivelse av historien, temaene og hvem boken passer for.",
          themes: ["vennskap", "følelser", "nysgjerrighet"],
          retailerLinks: [
            {
              label: "Norli",
              href: "https://example.com",
              description: "Bytt ut med direkte kjøpslenke.",
            },
            {
              label: "Ark",
              href: "https://example.com",
              description: "Bytt ut med direkte kjøpslenke.",
            },
          ],
          pressLinks: [
            {
              label: "Presseomtale",
              href: "https://example.com",
              description: "Legg inn presse, anmeldelse eller intervju.",
            },
          ],
          contactLinks: [{ label: "Kontakt", href: "/contact" }],
        },
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
          { label: "Tittel", value: "Boktittel kommer her" },
          { label: "Forfatter", value: "Forfatternavn" },
          { label: "Illustratør", value: "Illustratørnavn" },
          { label: "Forlag", value: "Forlag" },
          { label: "ISBN", value: "978-82-000-0000-0" },
          { label: "Alder", value: "3 til 7 år" },
          { label: "Format", value: "Innbundet" },
          { label: "Språk", value: "Norsk" },
          { label: "Omfang", value: "32 sider" },
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
            label: "Norli",
            href: "https://example.com",
            description: "Bytt ut med direkte kjøpslenke.",
          },
          {
            label: "Ark",
            href: "https://example.com",
            description: "Bytt ut med direkte kjøpslenke.",
          },
          {
            label: "Lokal bokhandel",
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
        id: "for-kindergarten",
        type: "for-kindergarten",
        title: "For barnehage og høytlesning",
        body: "Vis hvordan boken kan brukes i samlingsstund, temaarbeid eller lesestund.",
        points: [
          {
            title: "Tema for samtale",
            description: "Knytt boken til følelser, vennskap eller nysgjerrighet.",
          },
          {
            title: "Praktisk bruk",
            description:
              "Legg inn alder, varighet og forslag til aktivitet etter lesing.",
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
        id: "illustrator",
        type: "illustrator-bio",
        title: "Om illustratøren",
        body: "Kort illustratørbio. Deaktiver denne seksjonen hvis boken ikke har egen illustratørpresentasjon.",
        enabled: false,
      },
      {
        id: "press",
        type: "press-links",
        title: "Presse og omtale",
        body: "Legg inn anmeldelser, intervjuer eller nedlastbare pressebilder når de finnes.",
        enabled: false,
        links: [
          {
            label: "Presseomtale",
            href: "https://example.com",
            description: "Bytt ut med relevant lenke.",
          },
        ],
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
        book: {
          title: "Book title goes here",
          subtitle: "Subtitle or short promise",
          author: "Author name",
          illustrator: "Illustrator name",
          publisher: "Publisher",
          isbn: "978-82-000-0000-0",
          ageRange: "3 to 7 years",
          language: "Norwegian",
          format: "Hardcover",
          pageCount: "32 pages",
          coverImage: "/images/book-cover-placeholder.svg",
          illustrationImages: [
            {
              src: "/images/illustration-placeholder.svg",
              alt: "Illustration from the book",
              caption: "Short image caption",
            },
          ],
          shortDescription:
            "A short description of the story, themes, and intended readers.",
          themes: ["friendship", "feelings", "curiosity"],
          retailerLinks: [
            {
              label: "Norli",
              href: "https://example.com",
              description: "Replace with a direct purchase link.",
            },
            {
              label: "Ark",
              href: "https://example.com",
              description: "Replace with a direct purchase link.",
            },
          ],
          pressLinks: [
            {
              label: "Press mention",
              href: "https://example.com",
              description: "Add press, review, or interview links.",
            },
          ],
          contactLinks: [{ label: "Contact", href: "/contact" }],
        },
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
          { label: "Title", value: "Book title goes here" },
          { label: "Author", value: "Author name" },
          { label: "Illustrator", value: "Illustrator name" },
          { label: "Publisher", value: "Publisher" },
          { label: "ISBN", value: "978-82-000-0000-0" },
          { label: "Age", value: "3 to 7 years" },
          { label: "Format", value: "Hardcover" },
          { label: "Language", value: "Norwegian" },
          { label: "Length", value: "32 pages" },
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
            label: "Norli",
            href: "https://example.com",
            description: "Replace with a direct purchase link.",
          },
          {
            label: "Ark",
            href: "https://example.com",
            description: "Replace with a direct purchase link.",
          },
          {
            label: "Local bookshop",
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
        id: "for-kindergarten",
        type: "for-kindergarten",
        title: "For kindergarten and reading aloud",
        body: "Show how the book can be used for group reading, theme work, or quiet reading moments.",
        points: [
          {
            title: "Conversation theme",
            description: "Connect the book to feelings, friendship, or curiosity.",
          },
          {
            title: "Practical use",
            description: "Add age, reading time, and a suggested activity after reading.",
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
        id: "illustrator",
        type: "illustrator-bio",
        title: "About the illustrator",
        body: "Short illustrator bio. Disable this section if the book does not need a separate illustrator presentation.",
        enabled: false,
      },
      {
        id: "press",
        type: "press-links",
        title: "Press and reviews",
        body: "Add reviews, interviews, or downloadable press images when available.",
        enabled: false,
        links: [
          {
            label: "Press mention",
            href: "https://example.com",
            description: "Replace with a relevant link.",
          },
        ],
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
      "ForKindergarten",
      "AuthorBio",
      "IllustratorBio",
      "PressLinks",
      "Contact",
    ],
    expectedData: [
      "Book title",
      "Subtitle",
      "Book description",
      "Author",
      "Illustrator",
      "Publisher",
      "ISBN",
      "Cover image",
      "Illustrations",
      "Purchase links",
      "Press or review links",
      "Age range",
      "Language",
      "Format",
      "Page count",
      "Themes",
      "Author bio",
      "Illustrator bio",
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
