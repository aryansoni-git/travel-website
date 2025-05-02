// src/components/SEOJsonLD.tsx
import React from "react";

export default function SEOJsonLD() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Expert Holidays and Tours",
    legalName: "Expert Holidays and Tours Pvt. Ltd.",
    url: "https://www.expertholidays.com",
    logo: "/images/symbol.png",
    foundingDate: "2016-01-01",
    address: {
      "@type": "PostalAddress",
      addressLocality: "New Delhi",
      addressCountry: "India",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-79875-25225",
        contactType: "customer service",
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-88891-12555",
        contactType: "customer service",
      },
    ],
    sameAs: [
      "https://www.facebook.com/expertholidays", // Replace or remove if not available
      "https://www.instagram.com/expertholidays",
      "https://www.linkedin.com/company/expertholidays"
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
