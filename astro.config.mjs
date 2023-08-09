import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(), 
    tailwind(), 
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    })
  ],
  output: "hybrid",
  adapter: vercel({
    analytics: true
  })
});