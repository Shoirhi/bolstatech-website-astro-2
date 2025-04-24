// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://bolstatech.com",
  integrations: [sitemap(), react()],

  experimental: {
    fonts: [{
      provider: fontProviders.google(),
      name: "Noto Sans JP",
      cssVariable: "--font-noto-sans-jp",
    }]
  },

  vite: {
    plugins: [tailwindcss()]
  }
});