import { readdirSync } from 'node:fs';
import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// Cloudflare Pages redirects HTML files to extensionless URLs.
const labRoutes = readdirSync(new URL('./static/assets/dynamic-web/', import.meta.url))
	.filter((file) => file.endsWith('.html'))
	.map((file) => `/assets/dynamic-web/${file.slice(0, -'.html'.length)}`);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({ routes: { exclude: [...labRoutes, '<all>'] } })
	}
};

export default config;
