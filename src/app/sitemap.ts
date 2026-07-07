import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const routes = [
  { path: "", priority: 1, frequency: "daily" as const },
  { path: "/about", priority: 0.7, frequency: "monthly" as const },
  { path: "/games", priority: 0.9, frequency: "daily" as const },
  { path: "/rewards", priority: 0.8, frequency: "weekly" as const },
  { path: "/vip-club", priority: 0.7, frequency: "weekly" as const },
  { path: "/promotions", priority: 0.8, frequency: "daily" as const },
  { path: "/faq", priority: 0.5, frequency: "monthly" as const },
  { path: "/contact", priority: 0.5, frequency: "monthly" as const },
  { path: "/privacy-policy", priority: 0.3, frequency: "yearly" as const },
  { path: "/terms", priority: 0.3, frequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: now,
    changeFrequency: route.frequency,
    priority: route.priority,
  }));
}
