export const appliedAiLectures = [
	{
		week: 1,
		title: 'Introduction and History of AI',
		description: 'Definitions of AI and learning, AI history and winters, subfields, modern developments, industry applications, and ethical issues.'
	},
	{
		week: 2,
		title: 'Search',
		description: 'Tree and graph search, states vs. nodes, Big-O complexity, uninformed strategies (BFS, DFS, DLS, IDS), and informed heuristics (Greedy and A*).'
	},
	{
		week: 3,
		title: 'Adversarial Games',
		description: 'Adversarial search in zero-sum games, Minimax, alpha-beta pruning, depth-limited evaluation functions, Expectiminimax, and imperfect information.'
	},
	{
		week: 4,
		title: 'Agents and Environments',
		description: 'Intelligent agents, rationality, PEAS task environments, environment taxonomies, classical architectures, and modern LLM agent harnesses.'
	},
	{
		week: 5,
		title: 'Knowledge Representation, Logic & Prolog',
		description: 'Knowledge representation paradigms, propositional logic, entailment, forward and backward chaining, CNF and resolution, first-order logic, and Prolog.'
	},
	{
		week: 7,
		title: 'Machine Learning Fundamentals',
		description: 'ML paradigms, the end-to-end data pipeline and scaling, linear regression with gradient descent, decision trees, k-means, RL basics, and evaluation metrics.'
	},
	{
		week: 8,
		title: 'Neural Networks',
		description: 'Perceptrons and the perceptron learning rule, multi-layer networks solving XOR, non-linear activations, backpropagation, regularisation, and class imbalance.'
	},
	{
		week: 9,
		title: 'Deep Learning and Computer Vision',
		description: 'Images as numeric arrays, CNN mechanics (convolution, local receptive fields, weight sharing, ReLU, pooling), transfer learning, and landmark architectures.'
	},
	{
		week: 10,
		title: 'Generative AI and Large Language Models (LLMs)',
		description: 'Transformer LLMs (tokenisation, embeddings, positional vectors, self-attention, training stages), image generators (VAEs, GANs, diffusion), and AI risks.'
	}
] as const;

export type AppliedAiWeek = (typeof appliedAiLectures)[number]['week'];

export function appliedAiLectureHref(week: AppliedAiWeek) {
	return `/applied-ai/lectures/week${week}` as const;
}
