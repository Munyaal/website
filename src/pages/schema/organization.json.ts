import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://munyaal.com.mx/#organization",
        "name": "Munyaal",
        "url": "https://munyaal.com.mx",
        "logo": "https://munyaal.com.mx/logo.svg",
        "description": "Desarrollo de software a la medida en Playa del Carmen, Península de Yucatán. Expertos en soluciones digitales para negocios.",
        "telephone": "+529841309862",
        "email": "developers@munyaal.app",
        "foundingDate": "2018",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Mundo Hábitat",
          "addressLocality": "Playa del Carmen",
          "addressRegion": "Quintana Roo",
          "postalCode": "77714",
          "addressCountry": "MX"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "20.6296",
          "longitude": "-87.0739"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Península de Yucatán, México"
        },
        "sameAs": [
          "https://www.facebook.com/profile.php?id=100064030270572"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://munyaal.com.mx/#website",
        "url": "https://munyaal.com.mx",
        "name": "Munyaal",
        "publisher": {
          "@id": "https://munyaal.com.mx/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://munyaal.com.mx/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://munyaal.com.mx/#localbusiness",
        "name": "Munyaal",
        "description": "Desarrollo de software a la medida en Playa del Carmen, Quintana Roo.",
        "url": "https://munyaal.com.mx",
        "priceRange": "$$",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        ]
      }
    ]
  };

  return new Response(JSON.stringify(schema, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/ld+json",
      "Cache-Control": "public, max-age=3600"
    }
  });
};