// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import partytown from "@astrojs/partytown";

import mdx from "@astrojs/mdx";

import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
export default defineConfig({
  site: "https://bolstatech.com",
  integrations: [sitemap(), react(), partytown({
    config: {
      forward: ["dataLayer.push"],
    },
  }), mdx()],

  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          title: "新しいタブで開く",
          target: "_blank",
          rel: ["noopener", "noreferrer"],
          content: { type: "text", value: " ↗︎"},
          contentProperties: { "aria-hidden": true, class: "select-none" },
        },
      ],
    ]
  },

  vite: {
    plugins: [tailwindcss()]
  }
});