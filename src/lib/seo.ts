export const SITE_URL = "https://innewgen.com";
const SOCIAL_IMAGE = `${SITE_URL}/favicon.png`;

type PageSeo = {
  title: string;
  description: string;
  path: string;
};

export function createPageSeo({ title, description, path }: PageSeo) {
  const canonicalUrl = new URL(path, SITE_URL).toString();

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Innewgen" },
      { property: "og:locale", content: "en_US" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: canonicalUrl },
      { property: "og:image", content: SOCIAL_IMAGE },
      { property: "og:image:alt", content: "Innewgen brand mark" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: SOCIAL_IMAGE },
      { name: "twitter:image:alt", content: "Innewgen brand mark" },
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
  };
}

export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Innewgen",
      url: `${SITE_URL}/`,
      logo: SOCIAL_IMAGE,
      email: "business@innewgen.com",
      description:
        "Innewgen builds websites, custom business systems, AI software, and mobile apps for businesses.",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Innewgen",
      url: `${SITE_URL}/`,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en",
    },
  ],
};
