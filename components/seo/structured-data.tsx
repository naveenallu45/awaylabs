import { services } from "@/lib/site-data";

const baseUrl = "https://awaylabs.in";

export function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: "AwayLabs",
        url: baseUrl,
        logo: `${baseUrl}/favicon.png`,
        image: `${baseUrl}/opengraph-image`,
        description:
          "AwayLabs is a Hyderabad and remote digital agency for website development, app development, SEO optimization, Google Ads, and Meta Ads campaigns.",
        email: "connect@awaylabs.in",
        telephone: "+91-9908463421",
        foundingDate: "2024",
        slogan: "Build. Rank. Grow.",
        knowsAbout: [
          "Website Development",
          "App Development",
          "SEO Optimization",
          "Google Ads",
          "Meta Ads",
          "Landing Pages",
          "Digital Marketing",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+91-9908463421",
            contactType: "customer support",
            areaServed: ["IN", "Worldwide"],
            availableLanguage: ["English", "Hindi", "Telugu"],
            email: "connect@awaylabs.in",
          },
        ],
        sameAs: ["https://linkedin.com", "https://github.com", "https://instagram.com", "https://x.com"],
        address: [
          {
            "@type": "PostalAddress",
            name: "Hyderabad Office",
            addressLocality: "Hyderabad",
            addressRegion: "Telangana",
            addressCountry: "IN",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "AwayLabs",
        description: "AwayLabs website for website development, app development, SEO optimization, Google Ads, and Meta Ads services.",
        publisher: { "@id": `${baseUrl}/#organization` },
        inLanguage: "en",
      },
      {
        "@type": "ProfessionalService",
        "@id": `${baseUrl}/#services`,
        name: "AwayLabs Software Agency",
        url: baseUrl,
        description:
          "Website development, app development, SEO optimization, Google Ads, and Meta Ads services for growing businesses.",
        image: `${baseUrl}/opengraph-image`,
        telephone: "+91-9908463421",
        email: "connect@awaylabs.in",
        priceRange: "$$",
        provider: { "@id": `${baseUrl}/#organization` },
        areaServed: ["Hyderabad", "India", "Worldwide"],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
          addressCountry: "IN",
        },
        serviceType: services.map((service) => service.title),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "AwayLabs Services",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.description,
              provider: { "@id": `${baseUrl}/#organization` },
              areaServed: ["Hyderabad", "India", "Worldwide"],
            },
          })),
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD must be emitted as raw text for search crawlers.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
