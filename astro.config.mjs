import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import sanity from "@sanity/astro";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  site: "https://www.iconeht.com/",
  integrations: [
    sanity({
      projectId: "aa8j5crs",
      dataset: "production",
      useCdn: false,
      apiVersion: "2025-04-20",
      studioBasePath: "/studio",
    }),
    react(),
  ],
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Inter",
        cssVariable: "--font-inter",
      },
       {
        provider: fontProviders.google(),
        name: "Anton",
        cssVariable: "--font-display",
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: netlify(),
});
