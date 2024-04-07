import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";
import swup from '@swup/astro';

// https://astro.build/config
export default defineConfig({
  site: "https://gleaming-entremet-2df9e2.netlify.app/",
  integrations: [preact(), swup()]
});