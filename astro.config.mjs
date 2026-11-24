// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
import starlightThemeFlexoki from 'starlight-theme-flexoki';
import { SITE_TITLE, SITE_SUBTITLE } from './src/site.config.mjs';
import baseLinks from './src/integrations/base-links.mjs';

// The sidebar order is the reading order; prev/next links follow it.
// Page kinds (Concept, Hands-on, Act) come from each page's frontmatter badge.
export default defineConfig({
	site: 'https://so0k.github.io',
	base: '/agent-in-a-box',
	server: { port: 4321, host: '127.0.0.1' },
	// WATCH_POLL=1 polls for file changes, for machines where the dev server does not reload on save.
	vite: process.env.WATCH_POLL ? { server: { watch: { usePolling: true, interval: 300 } } } : {},
	integrations: [
		baseLinks(),
		starlight({
			title: SITE_TITLE,
			description: SITE_SUBTITLE,
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/so0k/agent-in-a-box' }],
			editLink: { baseUrl: 'https://github.com/so0k/agent-in-a-box/edit/main/' },
			favicon: '/favicon.svg',
			customCss: ['./src/styles/custom.css'],
			plugins: [
				starlightThemeFlexoki({ accentColor: 'blue' }),
				starlightLinksValidator({ errorOnLocalLinks: true }),
			],
			// Adds the side-menu toggle in front of the site title.
			components: { SiteTitle: './src/components/overrides/SiteTitle.astro' },
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
			pagination: true,
			// Code colours, sizes and frames come from the Flexoki theme.
			sidebar: [
				{
					label: 'Start',
					items: ['index', 'start/story', 'start/the-sample-app', 'start/requirements', 'start/setup'],
				},
				{
					label: 'Part 1, An agent with a broad token',
					items: ['part-1/mcp-and-code-mode', 'part-1/token-scope'],
				},
				{
					label: 'Part 2, Put the agent in a box',
					items: [
						'part-2/what-box-contains',
						'part-2/first-profile',
						'part-2/inside-the-pack',
						'part-2/secrets-and-egress',
						'part-2/mcp-through-the-broker',
						'part-2/opaque-execute',
					],
				},
				{
					label: 'Part 3, Write the policy',
					items: ['part-3/policy-basics', 'part-3/deny-execute'],
				},
				{
					label: 'Part 4, One tool per operation',
					items: [
						'part-4/per-endpoint-catalog',
						'part-4/tool-allowlist',
						'part-4/policy-on-arguments',
						'part-4/argument-rules',
					],
				},
				{
					label: 'Part 5, Bring code mode into the box',
					items: ['part-5/local-execute', 'part-5/egress-policy', 'part-5/request-rules'],
				},
				{
					label: 'Results',
					items: [
						'results/the-whole-picture',
						'results/measurements',
						'results/builds-and-gaps',
						'results/further-reading',
					],
				},
			],
		}),
	],
});
