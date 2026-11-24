// Page sources write internal links from the site root ("/part-2/opaque-execute/").
// This integration adds the configured base to those links when Markdown and
// MDX are compiled, before starlight-links-validator checks them.

const ATTRS = new Set(['href', 'src']);

/** "/x" becomes "<base>/x"; external, protocol-relative, relative and anchor links are kept. */
function withBase(base, value) {
	if (typeof value !== 'string' || !value.startsWith('/') || value.startsWith('//')) return value;
	if (base === '' || value === base || value.startsWith(`${base}/`)) return value;
	return `${base}${value}`;
}

function satteriPlugin(base) {
	const rewriteElement = (node, ctx) => {
		for (const key of ATTRS) {
			const next = withBase(base, node.properties?.[key]);
			if (next !== node.properties?.[key]) ctx.setProperty(node, key, next);
		}
	};
	// MDX components (LinkCard, LinkButton, ReadMore, ...): rebuild the attribute list.
	const rewriteJsx = (node) => {
		let changed = false;
		const attributes = node.attributes.map((a) => {
			if (a.type !== 'mdxJsxAttribute' || !ATTRS.has(a.name)) return a;
			const value = withBase(base, a.value);
			if (value === a.value) return a;
			changed = true;
			return { ...a, value };
		});
		if (changed) return { ...node, attributes };
	};
	return {
		name: 'base-links',
		element: { filter: ['a', 'img'], visit: rewriteElement },
		mdxJsxFlowElement: { filter: [], visit: rewriteJsx },
		mdxJsxTextElement: { filter: [], visit: rewriteJsx },
	};
}

/** List this before starlight() so it runs ahead of the links validator. */
export default function baseLinks() {
	return {
		name: 'base-links',
		hooks: {
			'astro:config:setup': ({ config }) => {
				const base = config.base.replace(/\/$/, '');
				const processor = config.markdown.processor;
				if (!Array.isArray(processor?.options?.hastPlugins)) {
					throw new Error(`base-links: expected the satteri markdown processor, got "${processor?.name}"`);
				}
				processor.options.hastPlugins.push(satteriPlugin(base));
			},
		},
	};
}
