import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";
import { OgImageMarkup, ogImageSize } from "@/lib/og-image";

export const runtime = "edge";
export const size = ogImageSize;
export const contentType = "image/png";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;

export default function TwitterImage() {
  return new ImageResponse(<OgImageMarkup />, size);
}
