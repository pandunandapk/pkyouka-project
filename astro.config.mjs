import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";

export default defineConfig({
  site: "https://pkyouka.my.id",
  integrations: [
    tailwind(),
    mdx({
      shikiConfig: {
        theme: "github-dark",
      },
    }),
    react(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    sitemap({
      filter: (page) => page !== "https://pkyouka.my.id/_image/",
    }),
  ],
  output: "server", // This should work for Vercel Serverless
  adapter: vercel(),
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
