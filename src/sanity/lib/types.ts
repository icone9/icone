import type { SanityAsset } from "@sanity/image-url/lib/types/types";

export type Post = {
  title: string;
  slug: string | { current: string };
  mainImage?: { asset: SanityAsset };
  overview: string;
  body?: any; // PortableTextBlock[]
  author?: { name: string; role?: string; image?: SanityAsset };
  category?: string;
  readTime?: number;
  publishedAt?: string;
};

export type ProjectFeature = {
  title: string;
  description: string;
};

export type Project = {
  title: string;
  subtitle?: string;
  slug: { current: string };
  overview: string;
  client?: string;
  industry?: string;
  services?: string[];
  websiteUrl?: string;
  logo?: { asset: SanityAsset };
  mainImage?: { asset: SanityAsset };
  thumbnail?: { asset: SanityAsset };
  challenge?: string;
  features?: ProjectFeature[];
  gallery?: { asset: SanityAsset }[];
  status?: string;
  technologies?: string[];
  publishedAt?: string;
};
