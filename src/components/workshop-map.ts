// The five parts and six acts, in reading order. Keep in step with the sidebar
// in astro.config.mjs (used by <PartProgress> and <Pieces>).
export type ActId = 'token-scope' | 'opaque-execute' | 'deny-execute' | 'tool-allowlist' | 'argument-rules' | 'request-rules';

export interface Part {
	n: number;
	short: string;
	title: string;
	/** Every page of the part, in sidebar order. The first is the part's entry link. */
	pages: string[];
	acts: { id: ActId; slug: string }[];
}

export const PARTS: Part[] = [
	{
		n: 1,
		short: 'A broad token',
		title: 'An agent with a broad token',
		pages: ['part-1/mcp-and-code-mode', 'part-1/token-scope'],
		acts: [{ id: 'token-scope', slug: 'part-1/token-scope' }],
	},
	{
		n: 2,
		short: 'In a box',
		title: 'Put the agent in a box',
		pages: [
			'part-2/what-box-contains',
			'part-2/first-profile',
			'part-2/inside-the-pack',
			'part-2/secrets-and-egress',
			'part-2/mcp-through-the-broker',
			'part-2/opaque-execute',
		],
		acts: [{ id: 'opaque-execute', slug: 'part-2/opaque-execute' }],
	},
	{
		n: 3,
		short: 'The policy',
		title: 'Write the policy',
		pages: ['part-3/policy-basics', 'part-3/deny-execute'],
		acts: [{ id: 'deny-execute', slug: 'part-3/deny-execute' }],
	},
	{
		n: 4,
		short: 'One tool per operation',
		title: 'One tool per operation',
		pages: ['part-4/per-endpoint-catalog', 'part-4/tool-allowlist', 'part-4/policy-on-arguments', 'part-4/argument-rules'],
		acts: [
			{ id: 'tool-allowlist', slug: 'part-4/tool-allowlist' },
			{ id: 'argument-rules', slug: 'part-4/argument-rules' },
		],
	},
	{
		n: 5,
		short: 'Code mode in the box',
		title: 'Bring code mode into the box',
		pages: ['part-5/local-execute', 'part-5/egress-policy', 'part-5/request-rules'],
		acts: [{ id: 'request-rules', slug: 'part-5/request-rules' }],
	},
];
