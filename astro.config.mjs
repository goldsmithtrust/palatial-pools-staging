// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://staging.palatialpools.com.au",
  integrations: [mdx(), sitemap()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
