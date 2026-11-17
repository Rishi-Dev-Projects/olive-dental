import { MetadataRoute } from "next";
import { TREATMENTS } from "@/data/treatments";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://olivedentalcarebardoli.com";
  const currentDate = new Date().toISOString();

  const staticPages = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/treatments`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/dentist`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
  ];

  const treatmentPages = TREATMENTS.map((treatment) => ({
    url: `${baseUrl}/treatments/${treatment.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: treatment.isFeatured ? 0.9 : 0.8,
  }));

  return [...staticPages, ...treatmentPages];
}
