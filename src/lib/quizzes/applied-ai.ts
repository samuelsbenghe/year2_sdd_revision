import { BrainCircuit } from '@lucide/svelte';
import { appliedAiLectures } from '$lib/applied-ai';
import { mixedReviewTopic } from './topics';
import type { QuizQuestion, QuizTopic } from './types';

export const appliedAiQuizTopics: QuizTopic[] = [
	...appliedAiLectures.map(({ week, title, description }) => ({
		id: `week${week}`,
		title: `Week ${week}: ${title}`,
		description,
		icon: BrainCircuit,
		iconClass: 'bg-green-100 text-green-600'
	})),
	mixedReviewTopic,
	{
		...mixedReviewTopic,
		id: 'mixed-long',
		title: 'Mixed Review (Long)',
		description: '30 random questions from across all nine lectures',
		mixedQuestionCount: 30
	}
];

export const appliedAiQuizQuestions: QuizQuestion[] = [
	// Week 1: Introduction and History of AI
	{
		area: 'week1',
		question: 'Who coined the term "Artificial Intelligence" in 1955 as "the science and engineering of making intelligent machines"?',
		type: 'multiple-choice',
		options: ['Alan Turing', 'John McCarthy', 'Tom Mitchell', 'Chris Manning'],
		answer: 'John McCarthy'
	},
	{
		area: 'week1',
		question: 'How are Artificial Intelligence, Machine Learning, Deep Learning, and LLMs arranged in the lecture’s broad overview diagram?',
		type: 'multiple-choice',
		options: [
			'AI ⊃ Machine Learning ⊃ Deep Learning ⊃ LLMs',
			'Machine Learning ⊃ AI ⊃ Deep Learning ⊃ LLMs',
			'AI ⊃ Deep Learning ⊃ Machine Learning ⊃ LLMs',
			'Symbolic AI ⊃ Machine Learning ⊃ LLMs ⊃ Deep Learning'
		],
		answer: 'AI ⊃ Machine Learning ⊃ Deep Learning ⊃ LLMs'
	},
	{
		area: 'week1',
		question: 'In Tom Mitchell’s formal definition of machine learning, what are the three components E, T, and P?',
		type: 'multiple-choice',
		options: ['Environment, Training, and Parameters', 'Epochs, Thresholds, and Predictions', 'Experience, Tasks, and Performance measure', 'Evaluation, Trees, and Probabilities'],
		answer: 'Experience, Tasks, and Performance measure'
	},
	{
		area: 'week1',
		question: 'How does Chris Manning define intelligence in Lecture 1?',
		type: 'multiple-choice',
		options: [
			'Passing an open-ended conversation test while appearing indistinguishable from a human',
			'Executing deterministic Boolean logic circuits faster than a human brain can compute',
			'Storing and retrieving all world facts inside a formal symbolic ontology database',
			'Learning and applying suitable techniques to solve problems in an uncertain world'
		],
		answer: 'Learning and applying suitable techniques to solve problems in an uncertain world'
	},
	{
		area: 'week1',
		question: 'What was the main textbook recommended as the primary resource for the Applied AI module?',
		type: 'multiple-choice',
		options: [
			'Artificial Intelligence: A Modern Approach (Russell & Norvig)',
			'Deep Learning: Foundations and Architectures (Goodfellow et al.)',
			'Pattern Recognition and Statistical Machine Learning (C. Bishop)',
			'Reinforcement Learning: An Introduction to Control (Sutton & Barto)'
		],
		answer: 'Artificial Intelligence: A Modern Approach (Russell & Norvig)'
	},
	{
		area: 'week1',
		question: 'Which 1943 milestone from the history of AI introduced a Boolean circuit model of the brain?',
		type: 'multiple-choice',
		options: ['Turing’s "Computing Machinery and Intelligence"', 'The Dartmouth workshop', 'McCulloch & Pitts', 'Robinson’s resolution algorithm'],
		answer: 'McCulloch & Pitts'
	},
	{
		area: 'week1',
		question: 'From the Lecture 1 PollEverywhere check: which early AI program demonstrated logical reasoning?',
		type: 'multiple-choice',
		options: ['ELIZA', 'Logic Theorist', 'General Problem Solver', 'Expert systems'],
		answer: 'Logic Theorist'
	},
	{
		area: 'week1',
		question: 'Which event in 1956 formally adopted the name "Artificial Intelligence"?',
		type: 'multiple-choice',
		options: ['The Lighthill report', 'Deep Blue vs Kasparov', 'Robinson’s resolution proof', 'The Dartmouth meeting'],
		answer: 'The Dartmouth meeting'
	},
	{
		area: 'week1',
		question: 'What characterised the 1988–1993 period in the Lecture 1 history of AI?',
		type: 'multiple-choice',
		options: ['Expert systems industry bust ("AI Winter")', 'Boolean circuit models of the brain', 'Launch of conversational language models', 'Merger of Google Brain and DeepMind'],
		answer: 'Expert systems industry bust ("AI Winter")'
	},
	{
		area: 'week1',
		question: 'Which shift defined AI research during the 1990–2012 period?',
		type: 'multiple-choice',
		options: [
			'Replacing probability with hand-coded deterministic expert rule systems',
			'Statistical methods, probability, uncertainty, and learning agents',
			'Building purely symbolic Prolog programs with zero statistical data',
			'Replacing specialised subfields with one universal logic theorem prover'
		],
		answer: 'Statistical methods, probability, uncertainty, and learning agents'
	},
	{
		area: 'week1',
		question: 'According to Lecture 1, what explains most of the rapid post-2012 success in AI?',
		type: 'multiple-choice',
		options: [
			'Inventing brand-new mathematical foundations unavailable before 2012',
			'Replacing neural networks with large hand-coded expert rule systems',
			'Greater compute capability and big data applied to existing methods',
			'Switching from probability models to exact deterministic tree search'
		],
		answer: 'Greater compute capability and big data applied to existing methods'
	},
	{
		area: 'week1',
		question: 'In the Lecture 1 subfield breakdown, which techniques belong to Knowledge Representation and Reasoning?',
		type: 'multiple-choice',
		options: [
			'Logic, ontologies, semantic networks, and probabilistic reasoning',
			'Motion planning, multi-sensor integration, and robotic control theory',
			'Syntactic parsing, neural machine translation, and speech recognition',
			'Uninformed tree search, heuristic informed search, and adversarial games'
		],
		answer: 'Logic, ontologies, semantic networks, and probabilistic reasoning'
	},
	{
		area: 'week1',
		question: 'Which techniques and applications are grouped under Uncertainty and Probabilistic Models in Lecture 1?',
		type: 'multiple-choice',
		options: [
			'Classical planning and game theory for automated scheduling and logistics',
			'Computer vision and control theory for autonomous vehicles and robotics',
			'Bayesian networks, Markov models, and decision theory for diagnostics and risk',
			'Parsing, translation, and sentiment analysis for virtual assistants and chatbots'
		],
		answer: 'Bayesian networks, Markov models, and decision theory for diagnostics and risk'
	},
	{
		area: 'week1',
		question: 'In April 2023, which two AI research groups did Google merge into a single unit?',
		type: 'multiple-choice',
		options: ['OpenAI and Anthropic', 'Google Brain and DeepMind', 'Meta AI and Hugging Face', 'IBM Watson and Deep Blue'],
		answer: 'Google Brain and DeepMind'
	},
	{
		area: 'week1',
		question: 'How does Lecture 1 describe the role of natural-language-to-code tools such as GitHub Copilot, OpenAI Codex, and Claude Code?',
		type: 'multiple-choice',
		options: [
			'Boosting developer productivity rather than replacing engineers',
			'Eliminating human software engineers across all production codebases',
			'Writing standalone Python scripts without IDE integration',
			'Translating formal specs exclusively into declarative Prolog'
		],
		answer: 'Boosting developer productivity rather than replacing engineers'
	},
	{
		area: 'week1',
		question: 'Which game-playing milestones are highlighted under Recent Developments in Lecture 1?',
		type: 'multiple-choice',
		options: [
			'Perfect play in Tic-Tac-Toe, Connect Four, and Minesweeper',
			'Endgame databases for Checkers, Othello, and Backgammon',
			'Constraint solvers for Sudoku, Crosswords, and Battleship',
			'AlphaZero in Chess/Go, 57 Atari games, and StarCraft II'
		],
		answer: 'AlphaZero in Chess/Go, 57 Atari games, and StarCraft II'
	},
	{
		area: 'week1',
		question: 'Which industry pairing matches the examples on the "AI in Industry" slide?',
		type: 'multiple-choice',
		options: [
			'Healthcare: algorithmic trading; Telecoms: drug discovery',
			'Energy: virtual bookings; Life Sciences: network optimisation',
			'Financial Services: fraud detection and trading; Life Sciences: drug discovery',
			'Services: computer vision diagnosis; Healthcare: customer chatbots'
		],
		answer: 'Financial Services: fraud detection and trading; Life Sciences: drug discovery'
	},
	{
		area: 'week1',
		question: 'What are the five stages of Gartner’s Hype Cycle for Artificial Intelligence in order?',
		type: 'multiple-choice',
		options: [
			'Innovation Trigger → Peak of Inflated Expectations → Trough of Disillusionment → Slope of Enlightenment → Plateau of Productivity',
			'AI Winter → Innovation Trigger → Plateau of Productivity → Peak of Inflated Expectations → Slope of Enlightenment',
			'Initial Birth → Trough of Disillusionment → Peak of Inflated Expectations → AI Winter → Plateau of Productivity',
			'Innovation Trigger → Slope of Enlightenment → Peak of Inflated Expectations → Trough of Disillusionment → Plateau of Productivity'
		],
		answer: 'Innovation Trigger → Peak of Inflated Expectations → Trough of Disillusionment → Slope of Enlightenment → Plateau of Productivity'
	},
	{
		area: 'week1',
		question: 'Which example of inherent data bias is cited on the "Issues and concerns with AI" slide?',
		type: 'multiple-choice',
		options: [
			'Factory robots consuming excessive electrical power',
			'Hiring AI favouring men due to historical training data',
			'Graph search looping infinitely on cyclic road maps',
			'Game engines failing to reach endgame states in Go'
		],
		answer: 'Hiring AI favouring men due to historical training data'
	},
	{
		area: 'week1',
		question: 'Which benefit of AI is captured by the phrase "Copy/paste knowledge" on the Advantages slide?',
		type: 'multiple-choice',
		options: [
			'Rapid transfer of skills across machines',
			'Copying copyrighted text directly from digital books',
			'Duplicating training datasets to prevent overfitting',
			'Running compiled binaries across operating systems'
		],
		answer: 'Rapid transfer of skills across machines'
	},

	// Week 2: Search
	{
		area: 'week2',
		question: 'What is the distinction between a state and a node in tree search?',
		type: 'multiple-choice',
		options: [
			'A state stores parent, depth, and path cost; a node is only a physical board layout',
			'States and nodes are interchangeable terms for the same structure in search trees',
			'A state is a physical configuration; a node is a tree structure with parent, depth, and path cost',
			'A node exists exclusively at the initial root while every expanded successor is a raw state'
		],
		answer: 'A state is a physical configuration; a node is a tree structure with parent, depth, and path cost'
	},
	{
		area: 'week2',
		question: 'How is a search strategy defined in Lecture 2?',
		type: 'multiple-choice',
		options: [
			'By the order of node expansion',
			'By the programming language chosen to implement the agent',
			'By capping the tree branching factor at two successors',
			'By removing all non-uniform step costs from the problem graph'
		],
		answer: 'By the order of node expansion'
	},
	{
		area: 'week2',
		question: 'What are the four dimensions along which search strategies are evaluated?',
		type: 'multiple-choice',
		options: [
			'Accuracy, precision, recall, and harmonic F1-score',
			'Completeness, time complexity, space complexity, and optimality',
			'Branching factor, depth limit, heuristic estimate, and step cost',
			'Observability, determinism, continuity, and environmental dynamism'
		],
		answer: 'Completeness, time complexity, space complexity, and optimality'
	},
	{
		area: 'week2',
		question: 'In search complexity analysis, what do the symbols b, d, and m denote?',
		type: 'multiple-choice',
		options: [
			'b = best heuristic score, d = distance to goal, m = maximum memory in gigabytes',
			'b = backtracking operations, d = fixed depth limit, m = minimum action step cost',
			'b = binary tree height, d = number of dead-end leaves, m = moves remaining to goal',
			'b = branching factor, d = shallowest solution depth, m = maximum state-space depth'
		],
		answer: 'b = branching factor, d = shallowest solution depth, m = maximum state-space depth'
	},
	{
		area: 'week2',
		question: 'Which fringe data structure implements Depth-First Search (DFS) versus Breadth-First Search (BFS)?',
		type: 'multiple-choice',
		options: [
			'DFS uses a LIFO queue; BFS uses a FIFO queue',
			'DFS uses a FIFO queue; BFS uses a LIFO stack',
			'Both DFS and BFS use a priority queue ordered by h(n)',
			'DFS uses an unordered hash set; BFS uses a LIFO stack'
		],
		answer: 'DFS uses a LIFO queue; BFS uses a FIFO queue'
	},
	{
		area: 'week2',
		question: 'In the binary tree DFS trace where root A has children B, C and B has children D, E (and D has children H, I), what is the fringe immediately after expanding B?',
		type: 'multiple-choice',
		options: ['[B, C]', '[C, D, E]', '[D, E, C]', '[H, I, E, C]'],
		answer: '[D, E, C]'
	},
	{
		area: 'week2',
		question: 'In the binary tree BFS trace where root A has children B, C and B has children D, E, what is the fringe immediately after expanding B?',
		type: 'multiple-choice',
		options: ['[D, E, C]', '[C, D, E]', '[B, C]', '[D, E, F, G]'],
		answer: '[C, D, E]'
	},
	{
		area: 'week2',
		question: 'What are the time and space complexities of Breadth-First Search (BFS)?',
		type: 'multiple-choice',
		options: ['Time O(b^(d+1)) and Space O(bd)', 'Time O(b^m) and Space O(bm)', 'Time O(b^d) and Space O(bm)', 'Time O(b^(d+1)) and Space O(b^(d+1))'],
		answer: 'Time O(b^(d+1)) and Space O(b^(d+1))'
	},
	{
		area: 'week2',
		question: 'What is highlighted as the biggest practical problem with Breadth-First Search (BFS)?',
		type: 'multiple-choice',
		options: [
			'Space complexity from storing every node',
			'Incompleteness whenever the branching factor is finite',
			'Getting stuck in infinite branches before exploring shallow nodes',
			'Failing to return the shallowest solution when step costs equal 1'
		],
		answer: 'Space complexity from storing every node'
	},
	{
		area: 'week2',
		question: 'What are the completeness, optimality, time, and space properties of standard Depth-First Search (DFS)?',
		type: 'multiple-choice',
		options: [
			'Complete: Yes; Optimal: Yes; Time: O(b^d); Space: O(b^d)',
			'Complete: No; Optimal: No; Time: O(b^m); Space: O(bm)',
			'Complete: Yes; Optimal: No; Time: O(bm); Space: O(b^m)',
			'Complete: No; Optimal: Yes; Time: O(b^l); Space: O(bl)'
		],
		answer: 'Complete: No; Optimal: No; Time: O(b^m); Space: O(bm)'
	},
	{
		area: 'week2',
		question: 'What three possible outcomes can Recursive Depth-Limited Search (DLS) return?',
		type: 'multiple-choice',
		options: ['solution, failure, or cutoff', 'goal, cycle, or optimal path', 'matched, missed, or pruned branch', 'shallow, deep, or heuristic cutoff'],
		answer: 'solution, failure, or cutoff'
	},
	{
		area: 'week2',
		question: 'Under what condition is Depth-Limited Search (with depth limit l) complete?',
		type: 'multiple-choice',
		options: ['Always, regardless of the chosen limit l ≥ 0', 'Only when the limit l is strictly less than d', 'When l ≥ d', 'Never, even in finite acyclic search trees'],
		answer: 'When l ≥ d'
	},
	{
		area: 'week2',
		question: 'Why is Iterative Deepening Search (IDS) often preferred among uninformed search algorithms?',
		type: 'multiple-choice',
		options: [
			'It never expands any node more than once across iterations',
			'It uses a domain heuristic h(n) to prune suboptimal branches early',
			'It guarantees linear O(bm) worst-case time regardless of branching factor',
			'It is complete and optimal with O(bd) linear space and O(b^d) time'
		],
		answer: 'It is complete and optimal with O(bd) linear space and O(b^d) time'
	},
	{
		area: 'week2',
		question: 'How does Graph-Search prevent repeated states from turning a linear problem into an exponential search?',
		type: 'multiple-choice',
		options: [
			'It skips expanding any state already in a CLOSED set',
			'It caps tree depth at a fixed limit l = 3',
			'It switches the fringe queue from FIFO to LIFO',
			'It discards heuristics whenever a city repeats'
		],
		answer: 'It skips expanding any state already in a CLOSED set'
	},
	{
		area: 'week2',
		question: 'What distinguishes informed search strategies from uninformed search strategies?',
		type: 'multiple-choice',
		options: [
			'Informed search uses domain heuristics about goal locations',
			'Informed search avoids storing frontier nodes in memory',
			'Uninformed search requires straight-line distance tables',
			'Uninformed search is optimal while informed search is not'
		],
		answer: 'Informed search uses domain heuristics about goal locations'
	},
	{
		area: 'week2',
		question: 'In Greedy Best-First Search on the Romania map from Arad to Bucharest using straight-line distance h_SLD(n), which path does it find?',
		type: 'multiple-choice',
		options: [
			'Arad → Zerind → Oradea → Sibiu → Bucharest',
			'Arad → Sibiu → Rimnicu Vilcea → Pitesti → Bucharest',
			'Arad → Sibiu → Fagaras → Bucharest (cost 450)',
			'Arad → Timisoara → Lugoj → Mehadia → Bucharest'
		],
		answer: 'Arad → Sibiu → Fagaras → Bucharest (cost 450)'
	},
	{
		area: 'week2',
		question: 'Why is Greedy Best-First Search incomplete without repeated-state checking?',
		type: 'multiple-choice',
		options: [
			'Heuristic values h(n) are negative for non-goal nodes',
			'It can loop indefinitely (e.g., Iasi ↔ Neamt)',
			'It drops the root node before generating successors',
			'It enforces a hard depth cutoff smaller than d'
		],
		answer: 'It can loop indefinitely (e.g., Iasi ↔ Neamt)'
	},
	{
		area: 'week2',
		question: 'What is the evaluation function f(n) used by A* search?',
		type: 'multiple-choice',
		options: ['f(n) = h(n)', 'f(n) = g(n)', 'f(n) = g(n) − h(n)', 'f(n) = g(n) + h(n)'],
		answer: 'f(n) = g(n) + h(n)'
	},
	{
		area: 'week2',
		question: 'What makes a heuristic h(n) admissible for A* search?',
		type: 'multiple-choice',
		options: [
			'It never overestimates true cost to the goal: 0 ≤ h(n) ≤ h*(n)',
			'It always overestimates true cost to expand fewer nodes',
			'It equals the exact path cost g(n) from start to n',
			'It assigns a constant value of 1 to every state'
		],
		answer: 'It never overestimates true cost to the goal: 0 ≤ h(n) ≤ h*(n)'
	},
	{
		area: 'week2',
		question: 'Which statement accurately describes which nodes A* expands relative to the optimal path cost C*?',
		type: 'multiple-choice',
		options: [
			'A* expands only nodes with f(n) > C* to guarantee completeness on large graphs',
			'A* expands all nodes with f(n) < C*, some with f(n) = C*, and none with f(n) > C*',
			'A* expands every reachable node in the state space before terminating at a goal',
			'A* expands nodes along a single depth-first branch while using only O(bm) memory'
		],
		answer: 'A* expands all nodes with f(n) < C*, some with f(n) = C*, and none with f(n) > C*'
	},

	// Week 3: Adversarial Games
	{
		area: 'week3',
		question: 'Why is the solution to an adversarial game a strategy rather than a fixed sequence of moves?',
		type: 'multiple-choice',
		options: [
			'Because two-player game trees always have an infinite branching factor at every ply',
			'Because it must specify a move for every possible opponent reply',
			'Because terminal utility functions can only be computed at the initial root state',
			'Because adversarial games never terminate in finite win, loss, or draw states'
		],
		answer: 'Because it must specify a move for every possible opponent reply'
	},
	{
		area: 'week3',
		question: 'According to the game classification table in Lecture 3, which pair of games are deterministic with imperfect information?',
		type: 'multiple-choice',
		options: ['Chess and Othello (Reversi)', 'Backgammon and Monopoly', 'Battleships and blind tic-tac-toe', 'Contract Bridge and Texas Hold’em Poker'],
		answer: 'Battleships and blind tic-tac-toe'
	},
	{
		area: 'week3',
		question: 'How is Backgammon classified in the two-by-two game taxonomy presented in Lecture 3?',
		type: 'multiple-choice',
		options: ['Perfect information and chance', 'Imperfect information and chance', 'Perfect information and deterministic', 'Imperfect information and deterministic'],
		answer: 'Perfect information and chance'
	},
	{
		area: 'week3',
		question: 'What does it mean for a two-player game to be "zero-sum"?',
		type: 'multiple-choice',
		options: [
			'The game always finishes in a draw with a terminal utility of zero',
			'No move incurs any step cost along branches of the game tree',
			'Both players cooperate to keep the combined utility score equal to zero',
			'What is good for one player is bad for the other'
		],
		answer: 'What is good for one player is bad for the other'
	},
	{
		area: 'week3',
		question: 'In the formal specification of a game for Minimax, what does RESULT(s, a) define?',
		type: 'multiple-choice',
		options: [
			'The final numeric payoff assigned to a terminal game state',
			'The transition model returning the next state after move a',
			'The complete set of legal actions available in game state s',
			'Which player holds the turn to make a move in game state s'
		],
		answer: 'The transition model returning the next state after move a'
	},
	{
		area: 'week3',
		question: 'In the 2-ply Minimax example where MAX chooses between three MIN nodes with leaf utilities [3, 12, 8], [2, 4, 6], and [14, 5, 2], what is the minimax value at the root?',
		type: 'multiple-choice',
		options: ['3', '14', '2', '8'],
		answer: '3'
	},
	{
		area: 'week3',
		question: 'In the Minimax algorithm pseudocode, how is the variable v initialized inside Max-Value(state) and Min-Value(state) respectively?',
		type: 'multiple-choice',
		options: ['0 in Max-Value and 0 in Min-Value', '+∞ in Max-Value and -∞ in Min-Value', '-∞ in Max-Value and +∞ in Min-Value', '-1 in Max-Value and +1 in Min-Value'],
		answer: '-∞ in Max-Value and +∞ in Min-Value'
	},
	{
		area: 'week3',
		question: 'What are the time and space complexities of standard Minimax search (with branching factor b and maximum depth m)?',
		type: 'multiple-choice',
		options: ['Time O(bm) and Space O(b^m)', 'Time O(b^(m/2)) and Space O(bm)', 'Time O(b^m) and Space O(b^m)', 'Time O(b^m) and Space O(bm)'],
		answer: 'Time O(b^m) and Space O(bm)'
	},
	{
		area: 'week3',
		question: 'Under what condition is Minimax guaranteed to be complete?',
		type: 'multiple-choice',
		options: ['Only when the branching factor equals 2', 'If the game tree is finite', 'Only when alpha-beta pruning is enabled', 'Always, even for infinite game trees'],
		answer: 'If the game tree is finite'
	},
	{
		area: 'week3',
		question: 'In alpha-beta pruning, what do α and β represent along the path to the root?',
		type: 'multiple-choice',
		options: [
			'α is the current depth limit and β is the branching factor',
			'α is Min’s best value and β is Max’s best value',
			'α is Max’s best value and β is Min’s best value',
			'α is the terminal utility and β is the heuristic evaluation'
		],
		answer: 'α is Max’s best value and β is Min’s best value'
	},
	{
		area: 'week3',
		question: 'In the Max-Value(state, α, β) function of the alpha-beta algorithm, which condition triggers pruning?',
		type: 'multiple-choice',
		options: ['if v ≥ β then return v', 'if v ≤ α then return v', 'if v ≥ α then return v', 'if α ≥ v then return β'],
		answer: 'if v ≥ β then return v'
	},
	{
		area: 'week3',
		question: 'How does alpha-beta pruning affect the minimax value computed at the root of the game tree?',
		type: 'multiple-choice',
		options: [
			'It approximates the root value within a small heuristic tolerance margin',
			'It lowers the final root value whenever a MIN branch is pruned early',
			'It preserves the exact root value only when move ordering is optimal',
			'It does not change the minimax value at the root'
		],
		answer: 'It does not change the minimax value at the root'
	},
	{
		area: 'week3',
		question: 'In the alpha-beta pruning worked example with leaves [3, 12, 8], [2, 4, 6], and [14, 5, 2] explored left-to-right, which leaves are pruned?',
		type: 'multiple-choice',
		options: ['12 and 8', '5 and 2', '4 and 6', '14, 5, and 2'],
		answer: '4 and 6'
	},
	{
		area: 'week3',
		question: 'With "perfect ordering" of moves, what is the time complexity of alpha-beta pruning and its effect on solvable depth?',
		type: 'multiple-choice',
		options: [
			'O(bm), eliminating exponential growth in the search tree',
			'O(b^(m/2)), doubling the solvable search depth',
			'O(b^(m-1)), extending the solvable depth by one ply',
			'O((b/2)^m), halving the branching factor at every ply'
		],
		answer: 'O(b^(m/2)), doubling the solvable search depth'
	},
	{
		area: 'week3',
		question: 'Alpha-beta pruning is described in the lecture as a simple example of reasoning about which computations are relevant. What term is used for this?',
		type: 'multiple-choice',
		options: ['Metareasoning', 'Iterative deepening', 'Reinforcement learning', 'Propositional satisfiability'],
		answer: 'Metareasoning'
	},
	{
		area: 'week3',
		question: 'To handle resource limits by limiting search depth, what two replacements are made to standard Minimax/alpha-beta?',
		type: 'multiple-choice',
		options: [
			'Replace ACTIONS with RESULT and PLAYER with CHANCE nodes',
			'Replace Max-Value with Average-Value and Min-Value with Cutoff-Value',
			'Replace depth-first search with breadth-first search and drop α–β bounds',
			'Replace Terminal-Test with Cutoff-Test and Utility with Eval'
		],
		answer: 'Replace Terminal-Test with Cutoff-Test and Utility with Eval'
	},
	{
		area: 'week3',
		question: 'How does Expectiminimax evaluate a chance node in a nondeterministic game tree?',
		type: 'multiple-choice',
		options: [
			'Returning the minimum ExpectiMinimax value among its successor states',
			'Returning the expected (probability-weighted) value of its successors',
			'Returning the maximum ExpectiMinimax value among its successor states',
			'Pruning every successor outcome whose probability falls below 0.5'
		],
		answer: 'Returning the expected (probability-weighted) value of its successors'
	},
	{
		area: 'week3',
		question:
			'In the Expectiminimax example with two equally likely chance outcomes (0.5 each) leading to MIN nodes of values 2 and 4 on the left, and 0 and -2 on the right, what are the values of the left and right chance nodes?',
		type: 'multiple-choice',
		options: ['Left = 2, Right = -2', 'Left = 4, Right = 0', 'Left = 3, Right = -1', 'Left = 6, Right = -2'],
		answer: 'Left = 3, Right = -1'
	},
	{
		area: 'week3',
		question: 'How do Bridge programs approximate optimal play in imperfect-information card games according to Lecture 3?',
		type: 'multiple-choice',
		options: [
			'Running exact Minimax over every possible card distribution from the opening deal',
			'Treating hidden hands as deterministic and assuming opponents hold worst-case cards',
			'Querying a complete 8-card endgame tablebase covering every legal trick sequence',
			'Sampling ~100 consistent deals and picking the action with highest average tricks'
		],
		answer: 'Sampling ~100 consistent deals and picking the action with highest average tricks'
	},
	{
		area: 'week3',
		question: 'Which historical AI system defeated world chess champion Garry Kasparov in May 1997 by searching 200 million positions per second and extending some lines up to 40 ply?',
		type: 'multiple-choice',
		options: ['Deep Blue', 'Chinook', 'TDGammon', 'AlphaStar'],
		answer: 'Deep Blue'
	},

	// Week 4: Agents and Environments
	{
		area: 'week4',
		question: 'What does the mathematical notation f : P* → A represent for an intelligent agent?',
		type: 'multiple-choice',
		options: [
			'A mapping from a single current action to a successor state',
			'A mapping from external performance measures to physical actuators',
			'The agent function mapping percept histories to actions',
			'The utility function mapping explicit goals to numeric rewards'
		],
		answer: 'The agent function mapping percept histories to actions'
	},
	{
		area: 'week4',
		question: 'According to Lecture 4, how is an intelligent agent defined in terms of its implementation components?',
		type: 'multiple-choice',
		options: ['Agent = Architecture + Program', 'Agent = Sensors + Goals', 'Agent = Utility + Environment', 'Agent = Critic + Problem Generator'],
		answer: 'Agent = Architecture + Program'
	},
	{
		area: 'week4',
		question: 'Which four factors determine what is rational for an agent at any given time?',
		type: 'multiple-choice',
		options: [
			'Physical sensors, physical actuators, total memory capacity, and processor clock speed',
			'Explicit goals, reflex rules, utility function weights, and training dataset size',
			'Hardware architecture, implementation language, network latency, and runtime cost',
			'Performance measure, prior knowledge, possible actions, and percept sequence'
		],
		answer: 'Performance measure, prior knowledge, possible actions, and percept sequence'
	},
	{
		area: 'week4',
		question: 'Why does Lecture 4 state that "rational ≠ successful"?',
		type: 'multiple-choice',
		options: [
			'Because rational agents intentionally ignore their external performance measure during execution',
			'Because rationality is neither omniscience nor clairvoyance when outcomes are uncertain',
			'Because rational agents are forbidden from performing information gathering or learning',
			'Because performance measures can only evaluate single actions, never environment sequences'
		],
		answer: 'Because rationality is neither omniscience nor clairvoyance when outcomes are uncertain'
	},
	{
		area: 'week4',
		question: 'What does the PEAS acronym stand for when specifying a task environment?',
		type: 'multiple-choice',
		options: [
			'Performance measure, Environment, Actuators, Sensors',
			'Percept histories, Execution runtime, Actions, States',
			'Planning horizon, Evaluation metrics, Autonomy, Safety',
			'Program logic, Environment model, Architecture, Strategy'
		],
		answer: 'Performance measure, Environment, Actuators, Sensors'
	},
	{
		area: 'week4',
		question: 'In the PEAS specification of the ChatGPT assistant agent from Lecture 4, which of the following are listed as its Actuators?',
		type: 'multiple-choice',
		options: [
			'User text prompts, uploaded graphics, and voice audio input',
			'Response accuracy, relevance, latency, and overall user satisfaction',
			'Display to user and plugins interacting with databases or web',
			'Current and future World Wide Web sites and public APIs'
		],
		answer: 'Display to user and plugins interacting with databases or web'
	},
	{
		area: 'week4',
		question: 'In the environment taxonomy table, how is "Chess with a clock" classified along the Static/Dynamic dimension?',
		type: 'multiple-choice',
		options: ['Static', 'Semi-dynamic', 'Dynamic', 'Episodic'],
		answer: 'Semi-dynamic'
	},
	{
		area: 'week4',
		question: 'How does Lecture 4 characterize the real world across all six environment dimensions?',
		type: 'multiple-choice',
		options: [
			'Fully observable, deterministic, episodic, static, discrete, single-agent',
			'Partially observable, deterministic, sequential, static, continuous, multi-agent',
			'Fully observable, stochastic, sequential, dynamic, discrete, multi-agent',
			'Partially observable, stochastic, sequential, dynamic, continuous, multi-agent'
		],
		answer: 'Partially observable, stochastic, sequential, dynamic, continuous, multi-agent'
	},
	{
		area: 'week4',
		question: 'Why is an agentic coding assistant working in a repository classified as operating in a dynamic environment?',
		type: 'multiple-choice',
		options: [
			'Because individual tool calls are discrete operations rather than continuous signals',
			'Because running the same prompt twice can generate two different code patches',
			'Because CI runs, commits, and tickets change while it thinks',
			'Because the agent only perceives the files, diffs, and logs exposed to it'
		],
		answer: 'Because CI runs, commits, and tickets change while it thinks'
	},
	{
		area: 'week4',
		question: 'Which agent architecture selects actions solely based on the current percept using condition-action rules?',
		type: 'multiple-choice',
		options: ['Simple reflex agent', 'Goal-based agent', 'Utility-based agent', 'Learning agent'],
		answer: 'Simple reflex agent'
	},
	{
		area: 'week4',
		question: 'In the formal problem formulation for a goal-based agent (such as the Romania route problem), what are the four defining items?',
		type: 'multiple-choice',
		options: [
			'Physical sensors, actuators, utility function, and external critic',
			'Initial state, successor function, goal test, and path cost',
			'Percept history, reflex rules, memory buffer, and execution runtime',
			'Game states, chance probabilities, chance nodes, and terminal payoffs'
		],
		answer: 'Initial state, successor function, goal test, and path cost'
	},
	{
		area: 'week4',
		question: 'What additional capability does a utility-based agent have compared to a goal-based agent?',
		type: 'multiple-choice',
		options: [
			'It removes the need for sensors or an internal state model of the world',
			'It operates exclusively inside deterministic, fully observable, episodic environments',
			'It replaces planned actions with uniform random exploration at every time step',
			'It scores state desirability via a utility function to balance trade-offs'
		],
		answer: 'It scores state desirability via a utility function to balance trade-offs'
	},
	{
		area: 'week4',
		question: 'In a Learning Agent architecture, what is the role of the Problem Generator?',
		type: 'multiple-choice',
		options: [
			'Suggesting exploratory actions that yield informative new experiences',
			'Evaluating agent performance against a fixed external performance standard',
			'Selecting the immediate external actions sent directly to the actuators',
			'Enforcing least-privilege access controls and approval gates on tools'
		],
		answer: 'Suggesting exploratory actions that yield informative new experiences'
	},
	{
		area: 'week4',
		question: 'In the AlphaGo learning agent example from Lecture 4, which component compares moves against winning strategies and evaluates performance based on game outcomes?',
		type: 'multiple-choice',
		options: ['Performance element', 'Problem generator', 'Critic', 'Actuator'],
		answer: 'Critic'
	},
	{
		area: 'week4',
		question: 'According to the Problem Types slide, what kind of problem arises when an environment is nondeterministic and/or partially observable?',
		type: 'multiple-choice',
		options: ['Single-state problem', 'Sensorless problem', 'Offline search problem', 'Contingency problem'],
		answer: 'Contingency problem'
	},
	{
		area: 'week4',
		question: 'How does Lecture 4 contrast a Copilot (2023–24) with Agentic AI (2025+)?',
		type: 'multiple-choice',
		options: [
			'A copilot requires structured SQL inputs whereas agentic AI accepts only binary reflex rules',
			'A copilot guides while you execute; agentic AI plans, uses tools, executes, and verifies',
			'A copilot operates with full autonomy whereas agentic AI requires manual line-by-line typing',
			'A copilot learns via reinforcement learning whereas agentic AI uses static lookup tables'
		],
		answer: 'A copilot guides while you execute; agentic AI plans, uses tools, executes, and verifies'
	},
	{
		area: 'week4',
		question: 'Why does Lecture 4 call "the LLM is the agent" a misconception?',
		type: 'multiple-choice',
		options: [
			'Because large language models cannot parse unstructured natural-language instructions',
			'Because modern enterprise agents no longer use language models for reasoning',
			'Because the LLM is only the brain and needs a harness (tools, memory, runtime, controls)',
			'Because language models can operate only inside fully observable, static environments'
		],
		answer: 'Because the LLM is only the brain and needs a harness (tools, memory, runtime, controls)'
	},
	{
		area: 'week4',
		question: 'In the "Agent Boss" archetype presented in Lecture 4, what key principle governs delegation to AI agents?',
		type: 'multiple-choice',
		options: [
			'Delegate authority, never responsibility—accountability stays human',
			'Manually inspect every single low-risk agent output to maintain operational safety',
			'Transfer both execution authority and legal accountability directly to the autonomous agent',
			'Technical software engineering skill accounts for all six leadership readiness dimensions'
		],
		answer: 'Delegate authority, never responsibility—accountability stays human'
	},
	{
		area: 'week4',
		question: 'Under the Hybrid Leadership risk/irreversibility spectrum, which set of tasks should remain "Human Alone"?',
		type: 'multiple-choice',
		options: [
			'Automated regression tests, boilerplate scaffolding, and documentation drafts',
			'New product features, multi-file code refactors, and profile/CV generation',
			'Unit test execution, build log parsing, and routine dependency updates',
			'Release decisions, sensitive data handling, and stakeholder communications'
		],
		answer: 'Release decisions, sensitive data handling, and stakeholder communications'
	},
	{
		area: 'week4',
		question: 'In the "New failure modes, new controls" mapping, which harness control specifically mitigates "Context overload may lead to hallucination"?',
		type: 'multiple-choice',
		options: [
			'Guarded instructions and strict input sanitising',
			'Structured briefs and scoped context',
			'Representative test data and edge-case suites',
			'Least-privilege tools and staged human approvals'
		],
		answer: 'Structured briefs and scoped context'
	},

	// Week 5: Knowledge Representation, Logic & Prolog
	{
		area: 'week5',
		question: 'In the four categories of knowledge representation presented in Lecture 5, which category includes Semantic Networks, Bayesian Networks, and Markov Networks?',
		type: 'multiple-choice',
		options: ['Graphical Representation', 'Rule-Based Representation', 'Structured Representation', 'Logical Representation'],
		answer: 'Graphical Representation'
	},
	{
		area: 'week5',
		question: 'Which knowledge representation technique uses data structures with slots and values to represent stereotypical situations?',
		type: 'multiple-choice',
		options: ['Markov Networks', 'Constraint Satisfaction Problems', 'Propositional Logic', 'Frames'],
		answer: 'Frames'
	},
	{
		area: 'week5',
		question: 'What is the distinction between syntax and semantics in a formal logic?',
		type: 'multiple-choice',
		options: [
			'Syntax defines truth values in a world; semantics defines the grammar of sentences',
			'Syntax defines legal sentences; semantics defines their truth in a world',
			'Syntax applies only to propositional logic; semantics applies only to first-order logic',
			'Syntax determines logical completeness; semantics determines computational complexity'
		],
		answer: 'Syntax defines legal sentences; semantics defines their truth in a world'
	},
	{
		area: 'week5',
		question: 'What does it mean for a knowledge base KB to entail a sentence α (written KB ⊨ α)?',
		type: 'multiple-choice',
		options: [
			'α is true in at least one interpretation where KB is false',
			'KB and α share identical parse trees and propositional symbols',
			'α is true in every model where KB is true',
			'α is logically valid across all models regardless of KB'
		],
		answer: 'α is true in every model where KB is true'
	},
	{
		area: 'week5',
		question: 'In propositional logic, under which exact truth assignment is the implication S1 ⇒ S2 false?',
		type: 'multiple-choice',
		options: ['When S1 is false and S2 is true', 'When both S1 and S2 are false', 'When S1 and S2 have equal truth values', 'When S1 is true and S2 is false'],
		answer: 'When S1 is true and S2 is false'
	},
	{
		area: 'week5',
		question: 'For a propositional knowledge base with 3 proposition symbols (P1, P2, P3), how many possible models exist for inference by enumeration?',
		type: 'multiple-choice',
		options: ['6', '8', '9', '16'],
		answer: '8'
	},
	{
		area: 'week5',
		question: 'Which logical equivalence expresses implication elimination for (α ⇒ β)?',
		type: 'multiple-choice',
		options: ['(¬α ∨ β)', '(¬α ∧ β)', '(α ∨ ¬β)', '(¬α ⇒ ¬β)'],
		answer: '(¬α ∨ β)'
	},
	{
		area: 'week5',
		question: 'Which statement correctly expresses the Deduction Theorem connecting entailment and validity?',
		type: 'multiple-choice',
		options: ['KB ⊨ α iff (KB ∧ α) is valid', 'KB ⊨ α iff (KB ∨ ¬α) is unsatisfiable', 'KB ⊨ α iff (KB ⇒ α) is valid', 'KB ⊨ α iff (α ⇒ KB) is satisfiable'],
		answer: 'KB ⊨ α iff (KB ⇒ α) is valid'
	},
	{
		area: 'week5',
		question: 'How does proof by contradiction (reductio ad absurdum) prove that KB ⊨ α?',
		type: 'multiple-choice',
		options: [
			'By showing that (KB ∨ α) is satisfiable in at least one model',
			'By showing that (KB ∧ ¬α) is unsatisfiable',
			'By showing that ¬KB is valid across every possible model',
			'By showing that α is a tautology independent of KB'
		],
		answer: 'By showing that (KB ∧ ¬α) is unsatisfiable'
	},
	{
		area: 'week5',
		question: 'What is the difference between soundness and completeness of an inference procedure?',
		type: 'multiple-choice',
		options: [
			'Sound: derives only entailed sentences; complete: derives all entailed sentences',
			'Sound: runs in linear time on Horn clauses; complete: never loops on cyclic rules',
			'Sound: derives every entailed sentence; complete: derives only true ground facts',
			'Sound: applies strictly to model checking; complete: applies strictly to CNF rules'
		],
		answer: 'Sound: derives only entailed sentences; complete: derives all entailed sentences'
	},
	{
		area: 'week5',
		question: 'How do Forward Chaining (FC) and Backward Chaining (BC) primarily differ?',
		type: 'multiple-choice',
		options: [
			'FC is incomplete for Horn clauses, whereas BC is complete for full first-order logic',
			'FC requires arbitrary CNF clauses, whereas BC requires full truth-table enumeration',
			'FC is goal-driven from the query, whereas BC is data-driven from known ground facts',
			'FC is data-driven from known facts, whereas BC is goal-driven from the query'
		],
		answer: 'FC is data-driven from known facts, whereas BC is goal-driven from the query'
	},
	{
		area: 'week5',
		question: 'In Backward Chaining, how does the algorithm prevent infinite loops during subgoal expansion?',
		type: 'multiple-choice',
		options: [
			'By converting all Horn clauses into truth tables before running inference',
			'By imposing a fixed depth cutoff of 2 on all recursive rules',
			'By checking if a new subgoal is already on the goal stack',
			'By deleting every rule from the KB immediately after inspecting it once'
		],
		answer: 'By checking if a new subgoal is already on the goal stack'
	},
	{
		area: 'week5',
		question: 'What is the structure of a sentence in Conjunctive Normal Form (CNF)?',
		type: 'multiple-choice',
		options: [
			'A disjunction of conjunctions of logical implications',
			'A conjunction of disjunctions of literals (clauses)',
			'A single implication with one positive literal in the head',
			'A nested chain of biconditionals with outer negations'
		],
		answer: 'A conjunction of disjunctions of literals (clauses)'
	},
	{
		area: 'week5',
		question: 'When converting a propositional sentence such as B1 ⇔ (P1 ∨ P2) to CNF, what are the first two steps?',
		type: 'multiple-choice',
		options: [
			'Distribute ∨ over ∧, then apply De Morgan’s laws',
			'Move ¬ inwards, then eliminate biconditionals (⇔)',
			'Negate the query, then resolve complementary literals',
			'Eliminate biconditionals (⇔), then eliminate implications (⇒)'
		],
		answer: 'Eliminate biconditionals (⇔), then eliminate implications (⇒)'
	},
	{
		area: 'week5',
		question: 'What is the Conjunctive Normal Form (CNF) of the sentence B1 ⇔ (P1 ∨ P2) derived in Lecture 5?',
		type: 'multiple-choice',
		options: ['(¬B1 ∨ P1 ∨ P2) ∧ (¬P1 ∨ B1) ∧ (¬P2 ∨ B1)', '(B1 ∨ P1 ∨ P2) ∧ (¬B1 ∨ ¬P1 ∨ ¬P2) ∧ (B1 ∨ P2)', '(¬B1 ∧ P1 ∧ P2) ∨ (B1 ∧ ¬P1) ∨ (B1 ∧ ¬P2)', '(B1 ⇒ P1) ∧ (B1 ⇒ P2) ∧ (P1 ∨ P2 ⇒ B1)'],
		answer: '(¬B1 ∨ P1 ∨ P2) ∧ (¬P1 ∨ B1) ∧ (¬P2 ∨ B1)'
	},
	{
		area: 'week5',
		question: 'What conclusion does the propositional Resolution inference rule derive from the two clauses (α ∨ β) and (¬β ∨ γ)?',
		type: 'multiple-choice',
		options: ['α ∨ γ', 'α ∧ γ', 'β ∨ ¬β', '¬α ∨ ¬γ'],
		answer: 'α ∨ γ'
	},
	{
		area: 'week5',
		question: 'What is the primary limitation of propositional logic that motivates First-Order Logic (FOL)?',
		type: 'multiple-choice',
		options: [
			'Propositional logic is context-dependent and cannot compose compound sentences',
			'Propositional logic commits only to facts and lacks expressive power for objects and relations',
			'Propositional logic cannot represent logical negation, conjunction, or disjunction cleanly',
			'Propositional logic has no sound and complete automated inference procedure'
		],
		answer: 'Propositional logic commits only to facts and lacks expressive power for objects and relations'
	},
	{
		area: 'week5',
		question: 'Which statement about First-Order Logic quantifiers is true?',
		type: 'multiple-choice',
		options: [
			'∃x ∀y Loves(x, y) is logically equivalent to ∀y ∃x Loves(x, y)',
			'∀x ∀y P(x, y) is never logically equivalent to ∀y ∀x P(x, y)',
			'Universal quantification acts like a disjunction and existential acts like a conjunction',
			'∃x ∀y Loves(x, y) ≠ ∀y ∃x Loves(x, y), and ∀x P(x) ≡ ¬∃x ¬P(x)'
		],
		answer: '∃x ∀y Loves(x, y) ≠ ∀y ∃x Loves(x, y), and ∀x P(x) ≡ ¬∃x ¬P(x)'
	},
	{
		area: 'week5',
		question: 'Which inference strategy forms the core execution basis of Prolog systems?',
		type: 'multiple-choice',
		options: [
			'Depth-first, left-to-right backward chaining with unification',
			'Breadth-first truth-table enumeration over arbitrary CNF clauses',
			'Data-driven forward chaining over undirected Markov networks',
			'Stochastic hill-climbing heuristic search in propositional model space'
		],
		answer: 'Depth-first, left-to-right backward chaining with unification'
	},
	{
		area: 'week5',
		question: 'In Prolog, how does the closed-world assumption ("negation as failure") evaluate alive(joe) given the rule alive(X) :- not dead(X).?',
		type: 'multiple-choice',
		options: [
			'It succeeds only if alive(joe) is explicitly stored as a ground fact',
			'It fails unless ¬dead(joe) is proved through full CNF resolution',
			'It succeeds if proving dead(joe) fails',
			'It loops infinitely unless dead(joe) is pushed onto the goal stack'
		],
		answer: 'It succeeds if proving dead(joe) fails'
	},

	// Week 7: Machine Learning Fundamentals
	{
		area: 'week7',
		question: 'How does machine learning fundamentally differ from traditional programming as presented in the lecture?',
		type: 'multiple-choice',
		options: [
			'Machine learning uses fixed rules and data without training',
			'Machine learning takes data and answers to discover the rules',
			'Machine learning generates synthetic rules without any data',
			'Traditional programming learns rules while ML uses if-else trees'
		],
		answer: 'Machine learning takes data and answers to discover the rules'
	},
	{
		area: 'week7',
		question: 'In Tom Mitchell’s (1997) formal definition of machine learning applied to classifying Iris flowers, what corresponds to Experience (E), Task (T), and Performance (P)?',
		type: 'multiple-choice',
		options: [
			'E = unseen accuracy, T = 150 flowers, P = predicting species',
			'E = predicting species, T = accuracy, P = four measurements',
			'E = 150 labelled flowers, T = predicting species, P = unseen accuracy',
			'E = gradient steps, T = scaling, P = minimising features'
		],
		answer: 'E = 150 labelled flowers, T = predicting species, P = unseen accuracy'
	},
	{
		area: 'week7',
		question: 'In the model notation y = f(X) + ε for the Iris dataset, what do X and y represent?',
		type: 'multiple-choice',
		options: [
			'X is the input features matrix; y is the target label',
			'X is the target label; y is the input features matrix',
			'X is the learned slope and intercept; y is the residual',
			'X is the test split; y is the validation split'
		],
		answer: 'X is the input features matrix; y is the target label'
	},
	{
		area: 'week7',
		question: 'According to the lecture’s comparison of the three machine learning families, which pairing of training data and feedback describes reinforcement learning?',
		type: 'multiple-choice',
		options: [
			'Features plus labels (X, y) with the exact answer given for every example',
			'Unlabelled features only (X) with no external feedback signal at all',
			'Labelled target values (y) only with immediate classification accuracy feedback',
			'States, actions, and rewards with delayed feedback via trial and error'
		],
		answer: 'States, actions, and rewards with delayed feedback via trial and error'
	},
	{
		area: 'week7',
		question: 'What key pattern does exploratory data analysis (EDA) of petal length vs. petal width reveal in the Iris dataset?',
		type: 'multiple-choice',
		options: [
			'All three Iris species overlap heavily across every single measurement',
			'Setosa separates cleanly (< 2 cm), while Versicolor and Virginica overlap',
			'Virginica stands apart while Setosa and Versicolor overlap completely across features',
			'Sepal width alone separates all three Iris species with 100% classification accuracy'
		],
		answer: 'Setosa separates cleanly (< 2 cm), while Versicolor and Virginica overlap'
	},
	{
		area: 'week7',
		question: 'Why must a feature scaler (such as StandardScaler) be fitted on the training set only and then applied to the test set with transform()?',
		type: 'multiple-choice',
		options: [
			'To prevent test statistics from leaking into training',
			'Because StandardScaler throws errors on datasets over 100 rows',
			'Because transform() automatically imputes missing values and duplicates',
			'To ensure the test set has a different mean from training data'
		],
		answer: 'To prevent test statistics from leaking into training'
	},
	{
		area: 'week7',
		question: 'Which group of algorithms does NOT require feature scaling because their decisions are unaffected by differing feature ranges?',
		type: 'multiple-choice',
		options: [
			'KNN, k-means clustering, and Support Vector Machines',
			'Neural networks, PCA, and gradient-descent regression',
			'Decision trees, random forests, and Naive Bayes',
			'Gradient-descent regression, KNN, and PCA models'
		],
		answer: 'Decision trees, random forests, and Naive Bayes'
	},
	{
		area: 'week7',
		question: 'How does standardisation (StandardScaler) compare to min–max normalisation (MinMaxScaler)?',
		type: 'multiple-choice',
		options: [
			'Standardisation scales values into [0, 1] and is very sensitive to extreme outliers',
			'Min–max produces mean 0, std 1 and resists extreme outliers across skewed features',
			'Both scalers guarantee every transformed value lies strictly inside the interval [−1, 1]',
			'Standardisation gives mean 0, std 1 (outlier-tolerant); min–max maps to [0, 1]'
		],
		answer: 'Standardisation gives mean 0, std 1 (outlier-tolerant); min–max maps to [0, 1]'
	},
	{
		area: 'week7',
		question: 'In a stratified 60 / 20 / 20 split of the 150 Iris flowers (90 training, 30 validation, 30 test), what is the specific role of the validation set?',
		type: 'multiple-choice',
		options: [
			'Learning model parameters like slopes, splits, and centroids',
			'Comparing candidate models and tuning hyperparameters',
			'Remaining locked away until the end for a final unbiased score',
			'Computing the mean and std used to scale training data'
		],
		answer: 'Comparing candidate models and tuning hyperparameters'
	},
	{
		area: 'week7',
		question: 'In linear regression, the residual for observation i is defined as eᵢ = yᵢ − ŷᵢ. What does a positive residual indicate?',
		type: 'multiple-choice',
		options: [
			'The point lies above the line (under-prediction)',
			'The point lies below the line (over-prediction)',
			'The prediction ŷᵢ equals yᵢ with zero error',
			'The fitted slope β₁ must be negative'
		],
		answer: 'The point lies above the line (under-prediction)'
	},
	{
		area: 'week7',
		question: 'Why does the Mean Squared Error (MSE) loss function square each residual (yᵢ − ŷᵢ)² instead of simply averaging raw residuals?',
		type: 'multiple-choice',
		options: [
			'Squaring converts the error metric back into the original measurement units (cm)',
			'Squaring reduces the penalty applied to large outliers compared with small errors',
			'Squaring prevents sign cancellation, penalises large errors, and gives one smooth minimum',
			'Squaring eliminates the need to estimate an intercept term β₀ in linear regression'
		],
		answer: 'Squaring prevents sign cancellation, penalises large errors, and gives one smooth minimum'
	},
	{
		area: 'week7',
		question: 'Which statement accurately describes the closed-form Ordinary Least Squares (OLS) regression line β₀ = ȳ − β₁x̄?',
		type: 'multiple-choice',
		options: [
			'The fitted line always passes through the origin (0, 0)',
			'It requires a learning rate α before LinearRegression fits',
			'Its slope β₁ equals variance of x over covariance of x, y',
			'The fitted line always passes through the mean point (x̄, ȳ)'
		],
		answer: 'The fitted line always passes through the mean point (x̄, ȳ)'
	},
	{
		area: 'week7',
		question: 'When running gradient descent for linear regression on the Iris dataset, what happens if the learning rate α is chosen too large (such as α = 0.07 in the slides)?',
		type: 'multiple-choice',
		options: [
			'Parameters converge to the OLS solution in five steps',
			'Updates overshoot the minimum and the loss explodes',
			'MSE decreases very slowly and stalls far from the minimum',
			'The gradient shrinks to zero and freezes all parameters'
		],
		answer: 'Updates overshoot the minimum and the loss explodes'
	},
	{
		area: 'week7',
		question: 'The Iris linear regression model achieves R² = 0.928 on 30 unseen test flowers. How should this R² value be interpreted?',
		type: 'multiple-choice',
		options: [
			'The model explains ~93% of petal-width variance on the test set',
			'The average prediction error on unseen flowers is 0.928 cm',
			'92.8% of test flowers lie on the line with zero residual',
			'The model misclassified 7.2% of species on the test set'
		],
		answer: 'The model explains ~93% of petal-width variance on the test set'
	},
	{
		area: 'week7',
		question: 'Using Gini = 1 − Σpₖ², what is the Gini impurity of the root node containing all 150 Iris flowers (50 Setosa, 50 Versicolor, 50 Virginica)?',
		type: 'multiple-choice',
		options: ['0.000', '0.500', '0.667', '1.000'],
		answer: '0.667'
	},
	{
		area: 'week7',
		question: 'When evaluating candidate root splits on all 150 Iris flowers, why is "petal length ≤ 2.45" preferred over "sepal length ≤ 5.45"?',
		type: 'multiple-choice',
		options: [
			'It partitions the 150 flowers into two equal-sized child nodes of 75 each',
			'It yields a higher weighted child Gini impurity (0.439 vs. 0.333)',
			'Continuous sepal-length measurements cannot be used in decision tree thresholds',
			'It gives lower weighted Gini (0.333 vs. 0.439), cleanly isolating Setosa'
		],
		answer: 'It gives lower weighted Gini (0.333 vs. 0.439), cleanly isolating Setosa'
	},
	{
		area: 'week7',
		question: 'In the Iris decision tree experiment plotting accuracy against max_depth, what demonstrates overfitting as depth increases from 3 to 5?',
		type: 'multiple-choice',
		options: [
			'Both training accuracy and test accuracy drop steadily toward 0.67 together',
			'Training accuracy hits 100% while test accuracy falls from 0.967 to 0.933',
			'Test accuracy climbs to 100% while training accuracy falls below 0.90',
			'The Gini impurity of every terminal leaf node rises back up to 0.667'
		],
		answer: 'Training accuracy hits 100% while test accuracy falls from 0.967 to 0.933'
	},
	{
		area: 'week7',
		question: 'In k-means clustering, how does the elbow method use inertia (WCSS) to choose the number of clusters K?',
		type: 'multiple-choice',
		options: [
			'Picks K at the bend where extra clusters give little inertia drop',
			'Picks K where within-cluster inertia reaches its peak',
			'Picks the largest K so inertia drops straight to zero',
			'Picks K that maximises point-to-centroid Euclidean distance'
		],
		answer: 'Picks K at the bend where extra clusters give little inertia drop'
	},
	{
		area: 'week7',
		question: 'In reinforcement learning, what does an ε-greedy agent do at each step?',
		type: 'multiple-choice',
		options: [
			'Always picks the highest Q(s, a) and never explores',
			'Discounts future rewards by ε and ignores step rewards',
			'Explores randomly with probability ε; exploits best action otherwise',
			'Updates the Q-table only when reward r is negative'
		],
		answer: 'Explores randomly with probability ε; exploits best action otherwise'
	},
	{
		area: 'week7',
		question:
			'According to the lecture’s guide on "Which metric when?", which classification metric should you prioritise when false negatives are especially costly (such as missing a disease during screening)?',
		type: 'multiple-choice',
		options: ['Accuracy = (TP + TN) / total', 'Precision = TP / (TP + FP)', 'Adjusted Rand index (ARI)', 'Recall = TP / (TP + FN)'],
		answer: 'Recall = TP / (TP + FN)'
	},

	// Week 8: Neural Networks
	{
		area: 'week8',
		question: 'In a single perceptron computing z = x₁w₁ + x₂w₂ + … + xₙwₙ + b followed by y = f(z), what is the role of the bias term b?',
		type: 'multiple-choice',
		options: [
			'It normalises all input features so they sum to 1 before multiplication',
			'It controls the total number of epochs the perceptron trains for',
			'It shifts the decision threshold',
			'It replaces the activation function so no non-linearity is needed'
		],
		answer: 'It shifts the decision threshold'
	},
	{
		area: 'week8',
		question: 'From the lecture’s PollEverywhere check: how many inputs can a single perceptron have?',
		type: 'multiple-choice',
		options: ['Exactly 2 inputs', 'Exactly 3 inputs', 'At most 1 input', 'Any number n'],
		answer: 'Any number n'
	},
	{
		area: 'week8',
		question: 'From the lecture’s PollEverywhere check: how many weights does each input have in a single perceptron?',
		type: 'multiple-choice',
		options: ['0', '1', '2', 'n'],
		answer: '1'
	},
	{
		area: 'week8',
		question:
			'In the worked spam-filter perceptron with weights w₁ = −0.1 (exclamation marks), w₂ = 0.2 (links), w₃ = 0.8 ("free" count), bias b = 0.6, and step activation y = 1 if z > 0 else 0, what does the untrained perceptron compute for Email B with x = (0, 1, 0)?',
		type: 'multiple-choice',
		options: ['z = 0.8, predicting y = 1 (wrong)', 'z = −0.3, predicting y = 0 (correct)', 'z = 2.9, predicting y = 1 (correct)', 'z = 0.0, predicting y = 0 (correct)'],
		answer: 'z = 0.8, predicting y = 1 (wrong)'
	},
	{
		area: 'week8',
		question:
			'Using the perceptron learning rule new_w ← w + η(t − y)x and new_b ← b + η(t − y), what happens when the perceptron predicts spam (y = 1) for an email whose true label is not spam (t = 0)?',
		type: 'multiple-choice',
		options: [
			't − y = 0, leaving all weights and the bias term completely unchanged',
			't − y = +1, adding η·x to the weights and η to bias to raise z',
			't − y = −1, subtracting η·x from weights and η from bias to lower z',
			'All weights are reinitialised to random values and training restarts from scratch'
		],
		answer: 't − y = −1, subtracting η·x from weights and η from bias to lower z'
	},
	{
		area: 'week8',
		question: 'Why can a single-layer perceptron NOT solve the XOR problem?',
		type: 'multiple-choice',
		options: [
			'Because a single perceptron cannot accept binary 0 and 1 feature inputs',
			'Because it forms only one linear boundary and XOR is not linearly separable',
			'Because the perceptron learning rule requires at least 100 labelled training examples',
			'Because a single perceptron cannot be assigned a negative bias threshold'
		],
		answer: 'Because it forms only one linear boundary and XOR is not linearly separable'
	},
	{
		area: 'week8',
		question: 'In the lecture’s multi-layer solution to XOR, how do the two hidden neurons and the output neuron work together?',
		type: 'multiple-choice',
		options: [
			'Both hidden neurons fit linear regressions and average outputs',
			'The hidden layer drops one input to classify a single feature',
			'Each hidden neuron memorises one row without weights or bias',
			'Hidden neurons compute OR and AND, which the output neuron combines'
		],
		answer: 'Hidden neurons compute OR and AND, which the output neuron combines'
	},
	{
		area: 'week8',
		question: 'From the lecture’s PollEverywhere check: how many hidden layers can a neural network have?',
		type: 'multiple-choice',
		options: ['Any number n', 'Strictly 1', 'Exactly 2', 'At most 4'],
		answer: 'Any number n'
	},
	{
		area: 'week8',
		question: 'In the multi-layer neural network slides, what is another name for a "Dense layer"?',
		type: 'multiple-choice',
		options: ['Convolutional layer', 'Dropout layer', 'Fully connected layer', 'Input flattening layer'],
		answer: 'Fully connected layer'
	},
	{
		area: 'week8',
		question:
			'In the lecture’s image classification example (dog vs. no dog) using a 15 × 12 pixel grid fed into a standard artificial neural network, how many input units and output units are needed?',
		type: 'multiple-choice',
		options: ['27 input units and 2 output units', '180 input units and 1 output unit', '15 input units and 12 output units', '4 input units and 1 output unit'],
		answer: '180 input units and 1 output unit'
	},
	{
		area: 'week8',
		question: 'Why do hidden layers in multi-layer neural networks use non-linear activation functions such as ReLU, Sigmoid, or Tanh?',
		type: 'multiple-choice',
		options: ['To learn complex non-linear mappings', 'To remove the need for any loss function', 'To eliminate weights between hidden layers', 'Because linear functions are non-differentiable'],
		answer: 'To learn complex non-linear mappings'
	},
	{
		area: 'week8',
		question: 'According to the lecture’s loss-optimisation and network-design tables, which output activation and loss function pair is standard for multiclass classification?',
		type: 'multiple-choice',
		options: ['Linear activation with Mean Absolute Error', 'ReLU activation with Mean Squared Error', 'Step activation with Gini impurity loss', 'Softmax activation with Cross Entropy loss'],
		answer: 'Softmax activation with Cross Entropy loss'
	},
	{
		area: 'week8',
		question: 'What is the purpose of backpropagation during the neural network training loop?',
		type: 'multiple-choice',
		options: [
			'Passing new unlabelled images forward through layers during inference',
			'Computing loss gradients per weight via the chain rule',
			'Randomly deleting half of the training dataset before each epoch',
			'Partitioning the dataset into training, validation, and test sets'
		],
		answer: 'Computing loss gradients per weight via the chain rule'
	},
	{
		area: 'week8',
		question: 'What train / validation / test split proportions does the lecture recommend for larger datasets versus small datasets?',
		type: 'multiple-choice',
		options: [
			'50/25/25 for larger datasets; 90/5/5 for small datasets',
			'95/5/0 for larger datasets; 70/30/0 for small datasets',
			'80/10/10 for larger datasets; 60/20/20 for small datasets',
			'60/20/20 for larger datasets; 80/10/10 for small datasets'
		],
		answer: '80/10/10 for larger datasets; 60/20/20 for small datasets'
	},
	{
		area: 'week8',
		question: 'When diagnosing learning curves across different learning rates, what happens if the learning rate is too high versus too small?',
		type: 'multiple-choice',
		options: [
			'Too high: loss oscillates or diverges; too small: progress stalls',
			'Too high: training halts at epoch 1; too small: loss diverges immediately',
			'Too high: model underfits cleanly; too small: dropout triggers automatically',
			'Learning rate changes inference latency rather than training loss curves'
		],
		answer: 'Too high: loss oscillates or diverges; too small: progress stalls'
	},
	{
		area: 'week8',
		question: 'How do Dropout and Early Stopping help prevent overfitting in a neural network?',
		type: 'multiple-choice',
		options: [
			'Dropout drops features from test data; Early Stopping raises the learning rate every epoch',
			'Dropout doubles the hidden layer count; Early Stopping trains until training accuracy hits 100%',
			'Dropout swaps Cross Entropy for MSE; Early Stopping merges validation and test sets together',
			'Dropout zeroes random activations; Early Stopping halts before validation drops'
		],
		answer: 'Dropout zeroes random activations; Early Stopping halts before validation drops'
	},
	{
		area: 'week8',
		question: 'From the lecture’s PollEverywhere check: a neural network trained only to classify cats and dogs is given a photo of a cow at inference time. What will it do?',
		type: 'multiple-choice',
		options: ['Recognise and predict "cow"', 'Predict either "cat" or "dog"', 'Refuse and return empty output', 'Retrain itself to add a cow class'],
		answer: 'Predict either "cat" or "dog"'
	},
	{
		area: 'week8',
		question: 'In the "Softmax and the cow" slide, what key mathematical property of softmax(z)ᵢ = e^(zᵢ) / Σⱼ e^(zⱼ) forces the network to output probabilities like 0.55 cat and 0.45 dog for a cow?',
		type: 'multiple-choice',
		options: [
			'Softmax clamps all negative input logits directly to zero',
			'Softmax restricts every class output strictly to 0 or 1',
			'Softmax outputs across all classes sum to 1',
			'Softmax forces the top predicted probability above 0.95'
		],
		answer: 'Softmax outputs across all classes sum to 1'
	},
	{
		area: 'week8',
		question: 'A spam detector is tested on 100 unseen emails (99 not spam, 1 spam) and simply predicts "No spam" every time. Why can we NOT trust its 99% accuracy?',
		type: 'multiple-choice',
		options: [
			'Class imbalance gives 99% accuracy while catching zero spam',
			'100 unseen emails is mathematically too small to measure accuracy',
			'Valid neural networks can never exceed 95% accuracy on email text',
			'Always predicting "No spam" produces 99 false positives in testing'
		],
		answer: 'Class imbalance gives 99% accuracy while catching zero spam'
	},
	{
		area: 'week8',
		question: 'According to the lecture’s "Myth or reality" review slide, which of the following statements is REALITY rather than a myth?',
		type: 'multiple-choice',
		options: [
			'More hidden layers always make a better neural network',
			'More epochs always improve unseen validation accuracy',
			'Text typed into an AI is added to weights straight away',
			'Different random initial weights can give different trained results'
		],
		answer: 'Different random initial weights can give different trained results'
	},

	// Week 9: Deep Learning and Computer Vision
	{
		area: 'week9',
		question: 'In the lecture’s overview of computer vision problems, which ordering lists the four tasks from lowest to highest difficulty?',
		type: 'multiple-choice',
		options: [
			'Localisation, classification, segmentation, detection',
			'Segmentation, detection, localisation, classification',
			'Classification, detection, localisation, segmentation',
			'Classification, localisation, detection, segmentation'
		],
		answer: 'Classification, localisation, detection, segmentation'
	},
	{
		area: 'week9',
		question: 'What is the core difference between a traditional computer vision recognition pipeline and a deep learning approach?',
		type: 'multiple-choice',
		options: [
			'Traditional pipelines train filters on GPUs, while deep learning uses hand-crafted HOG and SIFT',
			'Traditional pipelines use hand-crafted features; deep learning learns features end-to-end',
			'Traditional pipelines never use SVMs, while deep learning always finishes with a k-NN classifier',
			'Traditional pipelines handle binary images only, while deep learning handles grayscale only'
		],
		answer: 'Traditional pipelines use hand-crafted features; deep learning learns features end-to-end'
	},
	{
		area: 'week9',
		question: 'What is the primary purpose of a convolutional filter?',
		type: 'multiple-choice',
		options: ['Detect visual patterns in an image', 'Reduce spatial image dimensions only', 'Store ground-truth labels for training images', 'Upsample and increase raw image resolution'],
		answer: 'Detect visual patterns in an image'
	},
	{
		area: 'week9',
		question: 'What does the output of a convolution operation represent?',
		type: 'multiple-choice',
		options: ['A predicted class label', 'A labelled training set', 'A feature map', 'An RGB colour image'],
		answer: 'A feature map'
	},
	{
		area: 'week9',
		question: 'What does a 3×3 filter mean in a convolutional neural network?',
		type: 'multiple-choice',
		options: [
			'The input image must have height and width 3×3',
			'The filter examines a 3×3 pixel neighbourhood',
			'The output feature map always has dimensions 3×3',
			'The input image is restricted to 3 colour channels'
		],
		answer: 'The filter examines a 3×3 pixel neighbourhood'
	},
	{
		area: 'week9',
		question: 'In the lecture’s example of convolving a 5×5 X-image with a 3×3 X-shaped filter, what does the central value of 5 in the resulting 3×3 feature map indicate?',
		type: 'multiple-choice',
		options: ['The filter slid with a stride of 5', 'Five channels merged into one pixel', 'The image contained five objects', 'Strongest match to the X pattern at that position'],
		answer: 'Strongest match to the X pattern at that position'
	},
	{
		area: 'week9',
		question: 'Why are fully connected networks poorly suited for large images compared with CNNs?',
		type: 'multiple-choice',
		options: [
			'Flattening loses 2D spatial structure and needs millions of parameters',
			'Fully connected layers cannot train using backpropagation',
			'Fully connected networks cannot read numeric pixel arrays',
			'Fully connected networks cannot output softmax probabilities'
		],
		answer: 'Flattening loses 2D spatial structure and needs millions of parameters'
	},
	{
		area: 'week9',
		question: 'Which statement about local receptive fields in CNNs is correct?',
		type: 'multiple-choice',
		options: ['Every neuron sees the whole image at once', 'They remove the need for network training', 'Each neuron sees only a local image region', 'They appear only inside max-pooling layers'],
		answer: 'Each neuron sees only a local image region'
	},
	{
		area: 'week9',
		question: 'What is weight sharing in a CNN, and what are its main advantages?',
		type: 'multiple-choice',
		options: [
			'Sharing identical weights across every layer so all depths extract identical visual edges',
			'Reusing filter weights across locations, cutting parameters and finding features anywhere',
			'Sharing weights between pooling and fully connected layers to normalise pixel brightness',
			'Copying weights directly from training labels so backpropagation is never required'
		],
		answer: 'Reusing filter weights across locations, cutting parameters and finding features anywhere'
	},
	{
		area: 'week9',
		question: 'What does a convolutional layer with 32 filters produce, and why do CNNs use multiple filters in a layer?',
		type: 'multiple-choice',
		options: [
			'32 output classes, eliminating the need for a final classifier head',
			'32 input channels, increasing the spatial resolution of the image',
			'32 pixels, removing the need for intermediate pooling layers',
			'32 feature maps, letting the layer learn diverse visual features'
		],
		answer: '32 feature maps, letting the layer learn diverse visual features'
	},
	{
		area: 'week9',
		question: 'How many trainable parameters are in the first convolutional layer of a network trained on 50×50 RGB images using 8 filters of size 5×5 (including one bias per filter)?',
		type: 'multiple-choice',
		options: ['608 parameters', '200 parameters', '75 parameters', '2,500 parameters'],
		answer: '608 parameters'
	},
	{
		area: 'week9',
		question: 'What is the main purpose of max pooling in a CNN?',
		type: 'multiple-choice',
		options: [
			'Increase spatial image resolution while adding extra learned weights',
			'Increase the number of feature channels in the output volume',
			'Downsample height and width while keeping channels unchanged',
			'Compute partial derivative gradients during backpropagation'
		],
		answer: 'Downsample height and width while keeping channels unchanged'
	},
	{
		area: 'week9',
		question: 'How does the visual feature hierarchy progress from early layers to deeper layers in a CNN?',
		type: 'multiple-choice',
		options: [
			'From whole objects in early layers to raw pixels in deep layers',
			'From edges and colour, to textures and parts, to complex object patterns',
			'From hand-crafted SIFT descriptors to HOG descriptors in deep layers',
			'Every layer extracts identical edges at different brightness levels'
		],
		answer: 'From edges and colour, to textures and parts, to complex object patterns'
	},
	{
		area: 'week9',
		question: 'Why is ReLU (max(0, x)) widely preferred over sigmoid and tanh after convolutional layers?',
		type: 'multiple-choice',
		options: [
			'It is zero-centered and squashes values into [-1, 1]',
			'It removes the need for backpropagation updates',
			'It zeroes all positive activations to curb overfitting',
			'It avoids positive saturation and converges much faster'
		],
		answer: 'It avoids positive saturation and converges much faster'
	},
	{
		area: 'week9',
		question: 'Which architecture first demonstrated successful end-to-end CNN learning for handwritten digit recognition?',
		type: 'multiple-choice',
		options: ['AlexNet', 'VGGNet', 'LeNet', 'ResNet'],
		answer: 'LeNet'
	},
	{
		area: 'week9',
		question: 'Which architecture triggered the modern deep learning revolution by becoming the first CNN-based winner of ImageNet in 2012?',
		type: 'multiple-choice',
		options: ['AlexNet', 'ResNet', 'MobileNet', 'VGGNet'],
		answer: 'AlexNet'
	},
	{
		area: 'week9',
		question: 'In VGGNet, why is a stack of three 3×3 convolutional layers (stride 1) preferred over a single 7×7 convolutional layer?',
		type: 'multiple-choice',
		options: [
			'It removes max-pooling layers from the entire network',
			'It matches a 7×7 receptive field with fewer parameters (27 vs 49)',
			'It expands the receptive field to 21×21 for the same cost',
			'It removes all non-linear activations between layers'
		],
		answer: 'It matches a 7×7 receptive field with fewer parameters (27 vs 49)'
	},
	{
		area: 'week9',
		question: 'How do 1×1 convolutions reduce computation inside GoogLeNet’s Inception modules?',
		type: 'multiple-choice',
		options: [
			'By halving spatial height and width of every feature map prior to pooling',
			'By replacing all 3×3 and 5×5 filters with dense fully connected layers',
			'By discarding half of the training images randomly during each training epoch',
			'By reducing channel count before larger filters without changing height/width'
		],
		answer: 'By reducing channel count before larger filters without changing height/width'
	},
	{
		area: 'week9',
		question: 'Which architecture introduced residual skip connections (computing F(x) + x) so that very deep networks such as 152-layer models could be trained effectively?',
		type: 'multiple-choice',
		options: ['ResNet', 'AlexNet', 'VGGNet', 'MobileNet'],
		answer: 'ResNet'
	},
	{
		area: 'week9',
		question: 'Which pairing accurately matches MobileNet and EfficientNet to their primary efficiency innovations?',
		type: 'multiple-choice',
		options: [
			'MobileNet: residual skip connections; EfficientNet: removing all max-pooling layers',
			'MobileNet: large 11×11 kernels; EfficientNet: increasing network depth exclusively',
			'MobileNet: depthwise separable convolutions; EfficientNet: compound scaling',
			'MobileNet: global average pooling only; EfficientNet: scaling image resolution only'
		],
		answer: 'MobileNet: depthwise separable convolutions; EfficientNet: compound scaling'
	},

	// Week 10: Generative AI and Large Language Models (LLMs)
	{
		area: 'week10',
		question: 'How do generative AI models fundamentally differ from discriminative models?',
		type: 'multiple-choice',
		options: [
			'Generative models handle text inputs exclusively, while discriminative models handle images only',
			'Generative models rely on hand-coded rule trees, while discriminative models train neural weights',
			'Discriminative models learn class boundaries; generative models learn data distributions to create content',
			'Discriminative models synthesise new images, while generative models only output class labels'
		],
		answer: 'Discriminative models learn class boundaries; generative models learn data distributions to create content'
	},
	{
		area: 'week10',
		question: 'When you ask a Large Language Model a question, where does its answer come from?',
		type: 'multiple-choice',
		options: [
			'Looked up inside a stored database of pre-written answers',
			'Always retrieved by running a live search across the web',
			'Produced directly by fixed if-then rules written by programmers',
			'Generated token by token from learned patterns'
		],
		answer: 'Generated token by token from learned patterns'
	},
	{
		area: 'week10',
		question: 'How does an LLM use softmax when predicting the next token in a sequence?',
		type: 'multiple-choice',
		options: [
			'It classifies over its vocabulary, assigning probabilities to each token',
			'It compresses the input prompt into two binary outputs: true or false',
			'It removes Gaussian noise from token embeddings before self-attention runs',
			'It sorts vocabulary entries alphabetically to pick the first valid word'
		],
		answer: 'It classifies over its vocabulary, assigning probabilities to each token'
	},
	{
		area: 'week10',
		question: 'Why can entering the exact same prompt into an LLM produce different answers each time?',
		type: 'multiple-choice',
		options: [
			'The model retrains its weights on every single turn',
			'It samples randomly from the next-token probability distribution',
			'The tokeniser picks different random IDs on each run',
			'It switches randomly between a VAE and a GAN'
		],
		answer: 'It samples randomly from the next-token probability distribution'
	},
	{
		area: 'week10',
		question: 'Why do modern LLMs tokenise text into pieces of words (subword tokens) instead of individual characters or whole words?',
		type: 'multiple-choice',
		options: [
			'Subwords need no splitting rule and map one char per token',
			'Whole-word vocabularies are tiny while char inputs are short',
			'Subwords balance vocabulary size and sequence length while handling new words',
			'Subword IDs let Transformers read individual letters directly'
		],
		answer: 'Subwords balance vocabulary size and sequence length while handling new words'
	},
	{
		area: 'week10',
		question: 'Because an LLM operates on token IDs rather than directly seeing individual letters, which consequence follows?',
		type: 'multiple-choice',
		options: [
			'Letter-counting and chunked arithmetic are hard; context counts tokens',
			'Numeric token IDs directly encode dictionary meanings',
			'Rare words are always stored as a single token',
			'Leading spaces are stripped away before tokenisation'
		],
		answer: 'Letter-counting and chunked arithmetic are hard; context counts tokens'
	},
	{
		area: 'week10',
		question: 'What is an embedding in a Large Language Model?',
		type: 'multiple-choice',
		options: [
			'A fixed alphabetical index assigned to each word',
			'A compressed latent image from a VAE encoder',
			'A list of verified external web links in a prompt',
			'A learned numerical vector looked up by token ID'
		],
		answer: 'A learned numerical vector looked up by token ID'
	},
	{
		area: 'week10',
		question: 'After training, how do embeddings represent meaning and how is similarity between two token vectors computed?',
		type: 'multiple-choice',
		options: [
			'Unrelated tokens cluster; similarity subtracts IDs',
			'Similar-context tokens get nearby vectors; similarity uses the dot product',
			'Each token gets one probability; similarity compares length',
			'Tokens sort alphabetically; similarity counts shared letters'
		],
		answer: 'Similar-context tokens get nearby vectors; similarity uses the dot product'
	},
	{
		area: 'week10',
		question: 'Why must positional vectors be added to token embeddings before entering the Transformer blocks?',
		type: 'multiple-choice',
		options: [
			'To shrink the size of the vocabulary lookup table during pretraining',
			'To convert output probability distributions back into discrete text characters',
			'Because attention alone ignores word order (e.g., "dog bites man" vs "man bites dog")',
			'To stop the model from attending to earlier tokens inside the same prompt'
		],
		answer: 'Because attention alone ignores word order (e.g., "dog bites man" vs "man bites dog")'
	},
	{
		area: 'week10',
		question: 'What is the core role of the self-attention mechanism in a Transformer?',
		type: 'multiple-choice',
		options: [
			'Relating every token to every other token to pull in context',
			'Checking generated claims against a live factual database',
			'Splitting raw text strings into vocabulary token IDs',
			'Deleting rare words from training data before backprop'
		],
		answer: 'Relating every token to every other token to pull in context'
	},
	{
		area: 'week10',
		question: 'Why does the pretraining loop of an LLM not require human hand-labelling of the text dataset?',
		type: 'multiple-choice',
		options: [
			'Pretraining skips loss functions and gradient descent',
			'An adversarial discriminator writes every label',
			'It trains only on pre-labelled dictionary entries',
			'The next token in the text serves as the target'
		],
		answer: 'The next token in the text serves as the target'
	},
	{
		area: 'week10',
		question: 'Which sequence accurately describes the three LLM training stages presented in the lecture?',
		type: 'multiple-choice',
		options: [
			'Preference tuning → Subword tokenisation → Next-token pretraining',
			'Pretraining → Instruction tuning → Preference tuning (e.g., RLHF)',
			'Instruction tuning → Forward Gaussian noising → Reverse denoising',
			'Pretraining → Discriminator competition → Zero-sum equilibrium tuning'
		],
		answer: 'Pretraining → Instruction tuning → Preference tuning (e.g., RLHF)'
	},
	{
		area: 'week10',
		question: 'Why can an LLM produce a fluent, detailed biography of a real person (such as Dr David C. Gaze in the lecture) that is largely false?',
		type: 'multiple-choice',
		options: [
			'Because its internal database entry for that person was corrupted during chat',
			'Because the model deliberately selects the lowest-probability tokens for people',
			'Because it continues plausibly using style without checking real-world facts',
			'Because instruction tuning erases all factual knowledge acquired during pretraining'
		],
		answer: 'Because it continues plausibly using style without checking real-world facts'
	},
	{
		area: 'week10',
		question: 'How does grounding improve the reliability of an LLM’s response?',
		type: 'multiple-choice',
		options: [
			'It retrieves documents into context so answers cite verifiable sources',
			'It permanently rewrites the model’s frozen weights with every user prompt',
			'It forces greedy decoding to pick only the single highest-probability token',
			'It replaces Transformer attention layers with a traditional SVM classifier'
		],
		answer: 'It retrieves documents into context so answers cite verifiable sources'
	},
	{
		area: 'week10',
		question: 'According to the lecture’s "Myth or reality?" review, which of the following statements is REALITY?',
		type: 'multiple-choice',
		options: [
			'Text typed into a chat is added directly to the model’s weights',
			'A confident, fluent answer is more likely to be factually correct',
			'Asking an LLM for sources guarantees that those cited sources exist',
			'Earlier text in the chat session changes later answers'
		],
		answer: 'Earlier text in the chat session changes later answers'
	},
	{
		area: 'week10',
		question: 'According to the lecture’s "Myth or reality?" review, which of the following statements is a MYTH?',
		type: 'multiple-choice',
		options: [
			'Pretraining teaches the model to predict the next token',
			'Text typed into a chat is added to the model’s weights',
			'The exact same prompt can produce different answers',
			'Earlier text in the chat session changes later answers'
		],
		answer: 'Text typed into a chat is added to the model’s weights'
	},
	{
		area: 'week10',
		question: 'Among the mechanism-driven limitations of LLMs discussed in the lecture, what is sycophancy?',
		type: 'multiple-choice',
		options: [
			'Missing details buried in the middle of a very long context window',
			'Not knowing recent events because model weights remain frozen after training',
			'Agreeing with the user instead of correcting them (from preference tuning)',
			'Chunking long numbers into separate subword tokens during arithmetic'
		],
		answer: 'Agreeing with the user instead of correcting them (from preference tuning)'
	},
	{
		area: 'week10',
		question: 'Which description accurately matches the three image-generation model families covered in Week 10?',
		type: 'multiple-choice',
		options: [
			'VAE: latent encode/decode; GAN: generator vs discriminator; Diffusion: reverse denoising',
			'VAE: zero-sum game; GAN: iterative denoising; Diffusion: single-pass latent decoding',
			'VAE: text self-attention; GAN: 1×1 convolutions only; Diffusion: image database retrieval',
			'All three families generate images by predicting subword tokens via vocabulary softmax'
		],
		answer: 'VAE: latent encode/decode; GAN: generator vs discriminator; Diffusion: reverse denoising'
	},
	{
		area: 'week10',
		question: 'Which of the following reflects good prompt engineering practice highlighted in the lecture?',
		type: 'multiple-choice',
		options: [
			'Mix unrelated topics in one chat session so the model stays warmed up',
			'Pack as many complex instructions as possible into one single prompt',
			'Leave out background context so the model answers as broadly as possible',
			'Use a new chat per topic, step-by-step instructions, and context'
		],
		answer: 'Use a new chat per topic, step-by-step instructions, and context'
	},
	{
		area: 'week10',
		question: 'Which statement accurately reflects the ethical and sustainability concerns discussed in Week 10?',
		type: 'multiple-choice',
		options: [
			'Humans can eliminate bias completely by manually reading and cleaning all LLM corpora',
			'Massive corpora pass on stereotypes and AI carries major energy and water costs',
			'Copyright rules for generative AI are uniform and fully settled across all jurisdictions',
			'Submitting AI-generated text or fake research data is acceptable if it reads fluently'
		],
		answer: 'Massive corpora pass on stereotypes and AI carries major energy and water costs'
	}
];
