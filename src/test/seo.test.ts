import { describe, expect, it } from "vitest";

import { createPageSeo, organizationStructuredData, SITE_URL } from "@/lib/seo";

describe("SEO metadata", () => {
  it("uses the production domain for canonical and social URLs", () => {
    const seo = createPageSeo({
      title: "Services | Innewgen",
      description: "Web and software development services for businesses.",
      path: "/services",
    });

    expect(seo.links).toContainEqual({
      rel: "canonical",
      href: `${SITE_URL}/services`,
    });
    expect(seo.meta).toContainEqual({
      property: "og:url",
      content: `${SITE_URL}/services`,
    });
    expect(seo.meta).toContainEqual({
      name: "description",
      content: "Web and software development services for businesses.",
    });
  });

  it("publishes organization and website structured data for Innewgen", () => {
    expect(organizationStructuredData["@graph"]).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          "@type": "Organization",
          name: "Innewgen",
          url: `${SITE_URL}/`,
        }),
        expect.objectContaining({
          "@type": "WebSite",
          name: "Innewgen",
          url: `${SITE_URL}/`,
        }),
      ]),
    );
  });
});
