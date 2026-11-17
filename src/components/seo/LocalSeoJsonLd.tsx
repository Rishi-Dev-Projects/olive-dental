import React from "react";
import { CLINIC_INFO } from "@/data/clinic";
import { TREATMENTS } from "@/data/treatments";

interface LocalSeoJsonLdProps {
  pageUrl?: string;
  pageTitle?: string;
  description?: string;
}

export const LocalSeoJsonLd: React.FC<LocalSeoJsonLdProps> = ({
  pageUrl = "https://olivedentalcarebardoli.com",
  pageTitle = "Olive Dental Care Bardoli | Dentist & Dental Clinic in Bardoli",
  description = "Looking for dental care in Bardoli? Visit Olive Dental Care for personalized dental consultations, full mouth rehabilitation, root canal treatment, and gentle oral healthcare at Platinum Plaza, Sardar Patel Marg.",
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Dentist", "DentalClinic", "MedicalBusiness"],
        "@id": `${pageUrl}/#clinic`,
        name: CLINIC_INFO.name,
        description: description,
        url: pageUrl,
        telephone: CLINIC_INFO.phone,
        priceRange: "$$",
        image: `${pageUrl}/logo.svg`,
        address: {
          "@type": "PostalAddress",
          streetAddress: `${CLINIC_INFO.address.line1}, ${CLINIC_INFO.address.landmark}`,
          addressLocality: CLINIC_INFO.address.city,
          addressRegion: CLINIC_INFO.address.state,
          postalCode: CLINIC_INFO.address.postalCode,
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: CLINIC_INFO.geo.latitude,
          longitude: CLINIC_INFO.geo.longitude,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "09:00",
            closes: "20:00",
          },
        ],
        areaServed: [
          {
            "@type": "City",
            name: "Bardoli",
          },
          {
            "@type": "AdministrativeArea",
            name: "Surat District",
          },
          {
            "@type": "City",
            name: "Vyara",
          },
        ],
        sameAs: [
          CLINIC_INFO.social.instagram,
          CLINIC_INFO.social.googleMaps,
        ],
        makesOffer: TREATMENTS.map((treatment) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: treatment.title,
            description: treatment.shortDescription,
          },
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${pageUrl}/#website`,
        url: pageUrl,
        name: CLINIC_INFO.name,
        description: CLINIC_INFO.tagline,
        inLanguage: "en-IN",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
