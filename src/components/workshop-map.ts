// The five parts and six acts, in reading order. Keep in step with the sidebar
// in astro.config.mjs (used by <PartProgress> and <Pieces>).
export type ActId = 'a' | 'b1' | 'b2' | 'b3' | 'b3-args' | 'c';

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
		pages: ['part-1/mcp-and-code-mode', 'part-1/act-a'],
		acts: [{ id: 'a', slug: 'part-1/act-a' }],
	},
	{
		n: 2,
		short: 'In a box',
		title: 'Put the agent in a box',
		pages: [
			'part-2/what-box-contains',
			'part-2/first-profile',
			'part-2/secrets-and-egress',
			'part-2/mcp-through-the-broker',
			'part-2/act-b1',
		],
		acts: [{ id: 'b1', slug: 'part-2/act-b1' }],
	},
	{
		n: 3,
		short: 'The policy',
		title: 'Write the policy',
		pages: ['part-3/policy-basics', 'part-3/act-b2'],
		acts: [{ id: 'b2', slug: 'part-3/act-b2' }],
	},
	{
		n: 4,
		short: 'One tool per operation',
		title: 'One tool per operation',
		pages: ['part-4/per-endpoint-catalog', 'part-4/act-b3', 'part-4/policy-on-arguments', 'part-4/act-b3-args'],
		acts: [
			{ id: 'b3', slug: 'part-4/act-b3' },
			{ id: 'b3-args', slug: 'part-4/act-b3-args' },
		],
	},
	{
		n: 5,
		short: 'Code mode in the box',
		title: 'Bring code mode into the box',
		pages: ['part-5/local-execute', 'part-5/egress-policy', 'part-5/act-c'],
		acts: [{ id: 'c', slug: 'part-5/act-c' }],
	},
];
