// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://bolstatech.com",
  integrations: [sitemap(), react(), partytown({
    config: {
      forward: ["dataLayer.push"],
    },
  })],

  vite: {
    plugins: [tailwindcss()]
  }
});