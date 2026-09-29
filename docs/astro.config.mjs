import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'n8n Instagram API',
      logo: {
        src: './src/assets/logo.svg',
      },
      sidebar: [
        {
          label: 'Getting Started',
          autogenerate: { directory: 'getting-started' },
        },
        {
          label: 'Node Operations',
          autogenerate: { directory: 'operations' },
        },
        {
          label: 'AI & Automations',
          autogenerate: { directory: 'ai' },
        },
        {
          label: 'Reference & Help',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
});
