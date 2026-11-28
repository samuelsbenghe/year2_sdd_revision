import type { AppliedAiWeek } from '$lib/applied-ai';

type LectureNotes = {
	overview: string;
	sections: {
		title: string;
		concepts: { title: string; description: string }[];
	}[];
	practice: { title: string; description: string; tasks: string[] };
};

export const lectureNotes: Record<AppliedAiWeek, LectureNotes> = {
	1: {
		overview:
			'This opening lecture introduces the aims of Applied AI, core definitions of intelligence and machine learning, and the broad hierarchy from symbolic AI through machine learning and deep learning to LLMs. It traces AI history from McCulloch & Pitts and the 1956 Dartmouth workshop through the AI Winters to today’s compute- and data-driven wave, concluding with modern applications, hype cycles, and ethical and societal challenges.',
		sections: [
			{
				title: 'Foundations & Definitions of AI',
				concepts: [
					{
						title: 'Broad AI Hierarchy',
						description: 'Artificial Intelligence spans symbolic approaches as well as stochastic machine learning, with deep learning and Large Language Models (LLMs) nested inside machine learning.'
					},
					{
						title: 'Definitions of Intelligence & AI',
						description:
							'John McCarthy coined “Artificial Intelligence” in 1955 as the science and engineering of making intelligent machines, while Chris Manning frames intelligence as learning and applying suitable techniques to solve problems in an uncertain, ever-varying world.'
					},
					{
						title: 'Tom Mitchell’s Learning Definition',
						description: 'A computer program learns from experience E with respect to tasks T and performance measure P if its performance at tasks in T, as measured by P, improves with experience E.'
					},
					{
						title: 'Core AI Subfields',
						description:
							'AI encompasses problem solving and search, knowledge representation and reasoning, machine learning, NLP, robotics and perception, planning and decision making, probabilistic models, ethics and safety, and philosophy of AI.'
					}
				]
			},
			{
				title: 'History of AI & Hype Cycles',
				concepts: [
					{
						title: 'Early Days & Symbolic Pioneers (1940–1970)',
						description:
							'Key milestones include McCulloch & Pitts’ Boolean circuit brain model (1943), Turing’s “Computing Machinery and Intelligence” (1950), early programs like Samuel’s checkers and Newell & Simon’s Logic Theorist, the 1956 Dartmouth meeting, and Robinson’s 1965 resolution algorithm.'
					},
					{
						title: 'Knowledge-Based Era & AI Winters (1970–1993)',
						description: 'Expert systems boomed from 1980–1988 before busting during the 1988–1993 AI Winter, echoing earlier disillusionment after inflated expectations and the Lighthill report.'
					},
					{
						title: 'Statistical Resurgence to Modern Deep Learning (1990–Present)',
						description:
							'From 1990–2012 probability, uncertainty, and learning agents drove an AI Spring, followed since 2012 by big data, big compute, and neural networks delivering non-toy-domain results.'
					},
					{
						title: 'Gartner Hype Cycle & AI Promises',
						description:
							'Technologies move through the Innovation Trigger, Peak of Inflated Expectations, Trough of Disillusionment, Slope of Enlightenment, and Plateau of Productivity—highlighting the tension between marketing hype and scientific reality.'
					}
				]
			},
			{
				title: 'Modern Developments, Benefits & Concerns',
				concepts: [
					{
						title: 'Recent Breakthroughs Across Domains',
						description:
							'Modern AI spans multimodal LLMs (ChatGPT, Gemini, open-source models), AI coding tools (Copilot, Codex, Claude Code), generative art and video (DALL-E 3, Stable Diffusion, Veo), superhuman game agents (AlphaZero, Atari, StarCraft II), and robotics (Spot, Stretch, Unitree G1).'
					},
					{
						title: 'AI Across Industry',
						description:
							'Organisations apply AI in healthcare (computer vision diagnosis), services (chatbots), energy (demand prediction), financial services (fraud detection, algorithmic trading), life sciences (drug discovery), and telecommunications (network optimisation, predictive maintenance).'
					},
					{
						title: 'Benefits vs. Ethical & Societal Concerns',
						description:
							'AI offers 24/7 productivity, transferable knowledge, and “bicycles for the mind” for human creativity, yet raises serious questions over legal responsibility, job displacement, historical data bias (e.g., hiring bias), consciousness, and the singularity.'
					}
				]
			}
		],
		practice: {
			title: 'AI Foundations & Critical Reflection Practice',
			description: 'Review the lecture’s core definitions, historical eras, and current debates in preparation for the module.',
			tasks: [
				'Map three AI systems from the lecture (e.g., Logic Theorist, AlphaZero, and an LLM) onto the nested AI → Machine Learning → Deep Learning → LLMs diagram and state whether each is symbolic or stochastic.',
				'Compare the drivers of the 1970s and late-1980s AI Winters with the 2023 and 2025 Gartner Hype Cycles for AI, noting which technologies moved toward the Trough of Disillusionment or Slope of Enlightenment.',
				'Choose one industry domain from the slides (healthcare, finance, energy, or telecommunications) and outline both its practical AI benefits and two ethical or legal concerns such as historical data bias or accountability.'
			]
		}
	},
	2: {
		overview:
			'This lecture introduces state-space problem solving via tree and graph search, distinguishing physical states from search-tree nodes and evaluating algorithms by completeness, optimality, time, and space complexity. It compares uninformed strategies—Breadth-First, Uniform-Cost, Depth-First, Depth-Limited, and Iterative Deepening Search—before showing how domain-specific heuristics guide Greedy Best-First Search and optimal A* search on the Romania route-finding map.',
		sections: [
			{
				title: 'State Spaces, Tree Search & Graph Search',
				concepts: [
					{
						title: 'States vs. Search-Tree Nodes',
						description: 'A state represents a physical configuration, whereas a node is a search-tree data structure storing state, parent, action, depth, and path cost g(x).'
					},
					{
						title: 'Evaluation Dimensions & Parameters',
						description:
							'Search strategies differ by node expansion order and are evaluated on completeness, optimality, time complexity, and space complexity using branching factor b, shallowest goal depth d, maximum depth m, depth limit l, and optimal cost C*.'
					},
					{
						title: 'Big-O Complexity Growth',
						description:
							'As problem size grows, complexity classes separate sharply from O(1), O(log n), and O(n) through O(n log n) and O(n²) to infeasible exponential O(2^n) and factorial O(n!) growth.'
					},
					{
						title: 'Repeated States & Graph Search',
						description:
							'Failing to detect repeated states can turn a linear problem into an exponential search tree; Graph-Search avoids loops by recording expanded states in a CLOSED set before expanding them.'
					}
				]
			},
			{
				title: 'Uninformed Search Strategies',
				concepts: [
					{
						title: 'Breadth-First Search (BFS)',
						description:
							'BFS expands the shallowest unexpanded node using a FIFO fringe queue; it is complete (for finite b) and optimal for uniform step cost, but suffers exponential O(b^(d+1)) time and space complexity.'
					},
					{
						title: 'Depth-First Search (DFS)',
						description:
							'DFS expands the deepest unexpanded node using a LIFO stack; it uses only O(bm) linear space, but is incomplete in infinite or cyclic spaces, non-optimal, and takes O(b^m) worst-case time.'
					},
					{
						title: 'Depth-Limited Search (DLS)',
						description: 'DLS bounds DFS at a fixed depth limit l so nodes at depth l have no successors, returning solution, failure, or cutoff; it is complete only if l ≥ d and is non-optimal.'
					},
					{
						title: 'Iterative Deepening Search (IDS)',
						description:
							'IDS repeatedly runs Depth-Limited Search with increasing limits 0, 1, 2, … until a non-cutoff result is returned, combining BFS’s completeness and optimality (for unit step costs) with DFS’s O(bd) linear space and O(b^d) time.'
					}
				]
			},
			{
				title: 'Informed (Heuristic) Search: Greedy & A*',
				concepts: [
					{
						title: 'Heuristics & Best-First Search',
						description:
							'Best-first search orders its priority queue by an evaluation function estimating desirability, using domain-specific heuristics h(n) (such as straight-line distance h_SLD(n) to Bucharest) to estimate remaining cost to a goal.'
					},
					{
						title: 'Greedy Best-First Search',
						description:
							'Greedy search expands the node with lowest h(n) that appears closest to the goal; while often fast with a good heuristic, it is incomplete without repeated-state checking, non-optimal, and O(b^m) in worst-case time and space.'
					},
					{
						title: 'A* Evaluation Function',
						description:
							'A* avoids expanding already expensive paths by ordering nodes on f(n) = g(n) + h(n), combining path cost so far g(n) with estimated remaining cost h(n) to estimate total path cost through n.'
					},
					{
						title: 'Admissible Heuristics & A* Optimality',
						description:
							'A heuristic is admissible if it never overestimates true cost to the goal (0 ≤ h(n) ≤ h*(n), with h(G) = 0). With an admissible heuristic, A* expands nodes in increasing f-contours and is complete (barring infinitely many nodes with f ≤ f(G)) and optimal, though it keeps all nodes in memory.'
					}
				]
			}
		],
		practice: {
			title: 'Uninformed & Informed Search Tracing Practice',
			description: 'Trace fringe queues and evaluation functions on the lecture’s binary tree and Romania map examples.',
			tasks: [
				'Trace the fringe contents step-by-step for both DFS (LIFO) and BFS (FIFO) on the binary tree rooted at A (children B, C; grandchildren D, E, F, G), then compare the expansion order of Iterative Deepening Search for limits l = 0, 1, and 2.',
				'Compare Greedy Best-First Search and A* Search from Arad to Bucharest on the Romania map using the straight-line distance table, verifying why Greedy picks Arad → Sibiu → Fagaras → Bucharest (cost 450) while A* finds Arad → Sibiu → Rimnicu Vilcea → Pitesti → Bucharest (cost 418).',
				'Complete the comparison table (completeness, time, space, optimality) for BFS, Uniform-Cost, DFS, Depth-Limited, Iterative Deepening, Greedy, and A*, noting the conditions under which each is complete or optimal.'
			]
		}
	},
	3: {
		overview:
			'This lecture introduces adversarial search for competitive games where an unpredictable opponent means solutions must be strategies rather than single paths. It builds from the exact Minimax algorithm for deterministic, perfect-information zero-sum games to alpha-beta pruning and depth-limited heuristic evaluation for intractable games like chess. Finally, it extends game-tree search to stochastic games via Expectiminimax, imperfect-information card games, and landmark AI game-playing systems.',
		sections: [
			{
				title: 'Adversarial Search & The Minimax Algorithm',
				concepts: [
					{
						title: 'Game Taxonomy & Zero-Sum Games',
						description:
							'Games are classified by determinism (deterministic vs. chance) and observability (perfect vs. imperfect information), with AI most commonly studying two-player, turn-taking, deterministic, perfect-information zero-sum games like Tic-Tac-Toe, Chess, and Go. Zero-sum means what is good for one player (Max) is equally bad for the opponent (Min).'
					},
					{
						title: 'Formal Game Formulation',
						description:
							'A game is formally defined by an initial state (S0), PLAYER(s), ACTIONS(s), a transition model RESULT(s, a), a TERMINAL-TEST(s), and a UTILITY(s, p) payoff function for terminal states. Because opponents are unpredictable, a solution is a strategy specifying a move for every possible opponent reply.'
					},
					{
						title: 'Minimax Decision & Value Propagation',
						description:
							'Minimax achieves perfect play in deterministic, perfect-information games by choosing the move leading to the highest minimax value—the best achievable payoff assuming optimal opponent play. Max nodes maximize over successor values while Min nodes minimize over them recursively up from terminal utilities.'
					},
					{
						title: 'Minimax Properties & Complexity',
						description:
							'Minimax is complete for finite game trees and optimal against an optimal opponent, using depth-first exploration with O(bm) space complexity. However, its O(b^m) time complexity makes exact solutions completely infeasible for games like chess (b ≈ 35, m ≈ 100).'
					}
				]
			},
			{
				title: 'Alpha-Beta Pruning & Depth-Limited Evaluation',
				concepts: [
					{
						title: 'Alpha-Beta Bounds & Pruning',
						description:
							'Alpha-beta pruning tracks α (Max’s best alternative value on the path to the root) and β (Min’s best alternative value on the path to the root) to discard entire subtrees that cannot influence the final decision. Pruning never changes the minimax value computed for the root.'
					},
					{
						title: 'Move Ordering & Metareasoning',
						description:
							'Good move ordering dramatically increases pruning effectiveness, reducing time complexity with perfect ordering from O(b^m) to O(b^(m/2)) and effectively doubling solvable search depth. Deciding which computations are relevant to skip is a simple example of metareasoning.'
					},
					{
						title: 'Cutoff Tests & Resource Limits',
						description:
							'Because even O(b^(m/2)) is infeasible for full chess trees (35^50), practical game engines enforce time and depth limits by replacing TERMINAL-TEST with a CUTOFF-TEST and UTILITY with a heuristic evaluation function Eval(s).'
					},
					{
						title: 'Linear Evaluation Functions',
						description:
							'An evaluation function estimates the desirability of a non-terminal position, typically formulated in chess as a linear weighted sum of features: Eval(s) = w1·f1(s) + w2·f2(s) + … + wn·fn(s) (for example, weighting queen advantage by w1 = 9).'
					}
				]
			},
			{
				title: 'Chance, Imperfect Information & Games in Practice',
				concepts: [
					{
						title: 'Expectiminimax for Stochastic Games',
						description:
							'In nondeterministic games where dice or card-shuffling introduce chance (such as backgammon), Expectiminimax extends Minimax with chance nodes that compute the probability-weighted average (expected value) of their successors.'
					},
					{
						title: 'Imperfect-Information Games',
						description:
							'When hidden state exists—such as an opponent’s cards in Bridge or Poker—optimal decisions depend on the information state rather than the real state. A standard approximation computes minimax values across sampled deals consistent with known information (e.g., 100 deals in Bridge) and picks the action with the highest average payoff.'
					},
					{
						title: 'Deterministic & Modern Game AI Milestones',
						description:
							'Landmark systems include Chinook (1994 Checkers, using an 8-piece endgame database), Deep Blue (1997 Chess, 200M positions/sec, up to 40 ply), TDGammon (depth-2 search + strong Eval in Backgammon), QUACKLE (Scrabble), Libratus/Pluribus (Texas Hold’em Poker), and DeepMind’s AlphaStar (2019 StarCraft II via deep RL).'
					}
				]
			}
		],
		practice: {
			title: 'Adversarial Search Revision Tasks',
			description: 'Consolidate Minimax, alpha-beta pruning, and Expectiminimax by hand-tracing trees and comparing game properties from the lecture.',
			tasks: [
				'Hand-trace alpha-beta pruning on the 2-ply tree from the slides (leaves: [3, 12, 8], [2, 4, 6], [14, 5, 2]), explicitly recording α, β, and v at each node to verify why leaves 4 and 6 are pruned while 14, 5, and 2 are not.',
				'Recompute the Expectiminimax example tree (chance probabilities 0.5/0.5 over MIN nodes with leaves [2, 4], [7, 4], [6, 0], [5, -2]) and test how changing the chance probabilities alters MAX’s optimal branch.',
				'Classify Chess, Backgammon, Battleships, and Poker along the deterministic/chance and perfect/imperfect information axes, and match each game to the appropriate search or approximation technique from the slides.'
			]
		}
	},
	4: {
		overview:
			'This lecture introduces the core concept of an intelligent agent that perceives its environment via sensors and acts via actuators to maximize expected performance. It covers rationality, PEAS specifications, environment dimensions, problem formulation, and classical agent architectures (reflex, goal-based, utility-based, and learning agents). Updated for 2026, it connects these foundations to modern LLM agents (“model + harness”), multi-agent systems, hybrid human-AI leadership, and agentic failure controls.',
		sections: [
			{
				title: 'Agent Foundations, Rationality & PEAS',
				concepts: [
					{
						title: 'Agents, Functions & Programs',
						description:
							'An agent perceives its environment through sensors (percepts) and acts upon it through actuators (actions), defined as Agent = Architecture + Program. The abstract agent function maps percept histories to actions (f : P* → A), while the agent program runs on physical architecture to implement f.'
					},
					{
						title: 'Rationality vs. Omniscience',
						description:
							'A rational agent selects the action expected to maximize its performance measure given its percept sequence to date, prior knowledge, and available actions. Rationality is neither omniscience nor clairvoyance (so rational does not guarantee success), and it drives exploration, learning, and autonomy.'
					},
					{
						title: 'PEAS Task Environment Specification',
						description:
							'Designing a rational agent starts by defining PEAS: Performance measure, Environment, Actuators, and Sensors. The same framework applies across physical systems (automated taxi), web software (internet shopping agent), and modern assistants (ChatGPT).'
					},
					{
						title: 'Environment Dimensions & Problem Types',
						description:
							'Environments are categorized along six axes: fully/partially observable, deterministic/stochastic, episodic/sequential, static/dynamic (or semi-dynamic), discrete/continuous, and single/multi-agent—with the real world and coding agents sitting at the hardest end. These properties produce single-state, sensorless, contingency, and online exploration problems.'
					}
				]
			},
			{
				title: 'Agent Architectures & Problem Formulation',
				concepts: [
					{
						title: 'Simple Reflex & Goal-Based Agents',
						description:
							'Simple reflex agents map only the current percept to an action using condition-action rules (e.g., Reflex-Vacuum-Agent). Goal-based agents track internal state and how actions change the world, selecting actions that achieve explicit goals such as navigating from Arad to Bucharest.'
					},
					{
						title: 'Formal Problem Formulation',
						description:
							'A search problem for a goal-based agent is defined by four items: an initial state, a successor function S(x) returning action-state pairs, an explicit or implicit goal test, and an additive path cost built from non-negative step costs c(x, a, y) ≥ 0.'
					},
					{
						title: 'Utility-Based Agents',
						description:
							'When goals alone are insufficient to resolve trade-offs, utility-based agents score states with a utility function (“how happy I will be in such a state”). Applications include autonomous driving (balancing safety, travel time, fuel efficiency, comfort), financial trading, recommendation systems, and healthcare management.'
					},
					{
						title: 'Learning Agents & Multi-Agent Systems',
						description:
							'Learning agents consist of four components: a Performance element (selects actions), a Critic (evaluates against a performance standard), a Learning element (makes improvements from feedback), and a Problem generator (suggests exploratory actions). Multi-agent systems coordinate multiple interacting agents in domains like traffic management and smart grids.'
					}
				]
			},
			{
				title: 'Modern Agentic AI, Harnesses & Industry Practice',
				concepts: [
					{
						title: 'From Chatbots to Copilots to Agentic AI',
						description:
							'Delegation has progressed from chatbots (2022: human does the work) to copilots (2023–24: AI suggests and guides while human executes) to agentic AI (2025+: human states a goal and the agent plans, calls tools, executes, checks its work, and reports back).'
					},
					{
						title: 'Model + Harness Architecture',
						description:
							'The LLM alone is only the reasoning brain, not the full agent; an AI system is model + harness + environment. The harness supplies instructions, tools & APIs, memory & context, execution runtime, observations, and controls & approvals.'
					},
					{
						title: 'Hybrid Leadership & The Agent Boss',
						description:
							'In human + AI workstations, the Agent Boss orchestrates specialized agents (e.g., planning, engineering, testing, audit) across six readiness dimensions, retaining accountability even when delegating authority. Tasks divide by risk/irreversibility into Agent Alone, Hybrid, and Human Alone to avoid review bottlenecks and approval storms.'
					},
					{
						title: 'Agentic Failure Modes & Harness Controls',
						description:
							'Modern agent environments are adversarial and introduce new failure modes that must be mitigated in the harness: guarded instructions and input sanitising against prompt injection, structured scoped briefs against context overload/hallucination, representative test suites against edge-case blind spots, and least-privilege tools with staged approvals against data leakage and approval fatigue.'
					}
				]
			}
		],
		practice: {
			title: 'Agents & Environments Revision Tasks',
			description: 'Apply classical agent design frameworks and modern harness thinking to concrete scenarios from the lecture.',
			tasks: [
				'Write a complete PEAS specification and classify all six environment dimensions for (a) an automated taxi, (b) a ChatGPT assistant agent, and (c) an agentic coding assistant working in a shared Git repository.',
				'Diagram the four components of a Learning Agent (Performance element, Critic, Learning element, Problem generator) and map each component to both an Amazon recommendation system and AlphaGo.',
				'Map the four modern agentic threats (prompt injection, context overload, edge-case blind spots, sensitive-data leakage/approval fatigue) to their corresponding harness controls and decide which software tasks belong in Agent Alone, Hybrid, or Human Alone.'
			]
		}
	},
	5: {
		overview:
			'This lecture introduces formal knowledge representation and logical reasoning, showing how agents derive new truths from a knowledge base through sound and complete inference. It begins with propositional logic—syntax, models, entailment, equivalence, forward/backward chaining, and resolution over CNF—before motivating First-Order Logic (FOL) to overcome propositional logic’s limited expressive power. The lecture concludes with logic programming and Prolog, illustrating Horn-clause backward chaining, unification, negation as failure, and declarative search and list processing.',
		sections: [
			{
				title: 'Knowledge Representation & Propositional Logic',
				concepts: [
					{
						title: 'Knowledge Representation Paradigms',
						description:
							'Knowledge can be encoded via four main paradigms: Logical (propositional and first-order logic), Rule-Based (if-then production rules and CSPs), Graphical (semantic, Bayesian, and Markov networks), and Structured (frames with slots/values and formal ontologies).'
					},
					{
						title: 'Syntax, Semantics & Entailment',
						description:
							'Syntax defines the legal sentences of a logic, while semantics define their truth with respect to models (interpretations). A knowledge base entails a sentence (KB ⊨ α) if and only if α is true in all models where KB is true.'
					},
					{
						title: 'Equivalence, Validity & Satisfiability',
						description:
							'Two sentences are logically equivalent (α ≡ β) when true in the same models, enabling identities such as contraposition, implication elimination (α ⇒ β ≡ ¬α ∨ β), and De Morgan’s laws. A sentence is valid if true in all models, satisfiable if true in some model, and unsatisfiable if true in no models.'
					},
					{
						title: 'Deduction, Contradiction & Model Checking',
						description:
							'Entailment connects to validity via the Deduction Theorem (KB ⊨ α iff KB ⇒ α is valid) and to satisfiability via proof by contradiction / reductio ad absurdum (KB ⊨ α iff KB ∧ ¬α is unsatisfiable). Truth-table model checking is complete but exponential (2^n models for n symbols).'
					}
				]
			},
			{
				title: 'Logical Inference: Chaining & Resolution',
				concepts: [
					{
						title: 'Forward Chaining (Data-Driven)',
						description:
							'Forward chaining fires any Horn rule whose premises are satisfied in the KB and adds its conclusion to the KB until the query is derived. It is linear-time and complete for Horn clauses, but as a data-driven process it may perform work irrelevant to the goal.'
					},
					{
						title: 'Backward Chaining (Goal-Driven)',
						description:
							'Backward chaining works backwards from a query q by checking if q is already known or recursively proving all premises of a rule concluding q. It prevents infinite loops via a goal stack, avoids repeated work by tracking proved/failed subgoals, and can run in much less than linear time in KB size.'
					},
					{
						title: 'Conjunctive Normal Form (CNF)',
						description:
							'CNF represents any propositional sentence as a conjunction of clauses (disjunctions of literals). Conversion follows four steps: eliminate ⇔, eliminate ⇒, move ¬ inwards using De Morgan’s laws and double-negation, and distribute ∨ over ∧.'
					},
					{
						title: 'The Resolution Algorithm',
						description:
							'Resolution combines two clauses containing complementary literals (e.g., α ∨ β and ¬β ∨ γ yielding α ∨ γ) and is both sound and complete for propositional logic. To prove KB ⊨ α, the algorithm adds ¬α to the KB in CNF and resolves pairs until deriving a contradiction (empty clause/false) or exhausting all new resolvents.'
					}
				]
			},
			{
				title: 'First-Order Logic & Prolog Systems',
				concepts: [
					{
						title: 'First-Order Logic Expressiveness',
						description:
							'Unlike propositional logic (which commits only to facts and lacks expressive power), First-Order Logic models a world of objects, relations, and functions using constants, predicates, functions, variables, connectives, equality, and quantifiers.'
					},
					{
						title: 'Universal & Existential Quantifiers',
						description:
							'Universal quantification (∀x P) holds iff P is true for every object in the model (roughly a conjunction of instantiations, typically paired with ⇒). Existential quantification (∃x P) holds iff P is true for at least one object (roughly a disjunction of instantiations, typically paired with ∧).'
					},
					{
						title: 'Quantifier Order, Duality & Equality',
						description:
							'Adjacent identical quantifiers commute, but mixing ∀ and ∃ changes meaning (∃x ∀y Loves(x,y) ≠ ∀y ∃x Loves(x,y)). Quantifiers satisfy duality (∀x P ≡ ¬∃x ¬P), and equality (term1 = term2) holds iff both terms refer to the same object under an interpretation.'
					},
					{
						title: 'Logic Programming & Prolog',
						description:
							'Prolog performs computation as depth-first, left-to-right backward chaining over Horn clauses (head :- literal1, ..., literaln.), using unification to match variables and a closed-world assumption (“negation as failure”). Declarative relations like dfs/1 and append/3 can be queried flexibly to enumerate multiple solutions.'
					}
				]
			}
		],
		practice: {
			title: 'Logic & Prolog Revision Tasks',
			description: 'Practice propositional proofs, CNF conversion, FOL translation, and Prolog query tracing using the exact examples from Lecture 5.',
			tasks: [
				'Trace both Forward Chaining and Backward Chaining on the Horn KB {P ⇒ Q, L ∧ M ⇒ P, B ∧ L ⇒ M, A ∧ P ⇒ L, A ∧ B ⇒ L, A, B} to prove Q, noting which rules fire and how BC avoids the A ∧ P ⇒ L cycle.',
				'Convert B1 ⇔ (P1 ∨ P2) to CNF step-by-step and run the full Resolution proof by contradiction on KB = {A ∨ B, A ⇒ C, B ⇒ C} to show KB ⊨ C.',
				'Translate the English statements from the slides (“Everyone at Berkeley is smart”, “Someone at Stanford is smart”, and the two quantifier-order Loves(x, y) sentences) into FOL, then hand-trace the Prolog query append(A, B, [1,2]) to produce all three variable bindings.'
			]
		}
	},
	7: {
		overview:
			'This lecture introduces machine learning fundamentals through the 150-flower Iris dataset, contrasting rule-based programming with algorithms that learn models from data across supervised, unsupervised, and reinforcement learning. It walks through the complete eight-step ML pipeline—including cleaning, splitting, feature engineering, and leakage-free scaling—before explaining linear regression, gradient descent, decision trees, k-means clustering, Q-learning, and evaluation metrics for regression and classification.',
		sections: [
			{
				title: 'ML Foundations & the Data Pipeline',
				concepts: [
					{
						title: 'Formal Definition & Types of ML',
						description:
							'Following Tom Mitchell (1997), a program learns from experience (E) on a task (T) if its performance measure (P) improves with E. Learning falls into three families: supervised learning uses labelled data (X, y) for classification or regression, unsupervised learning discovers structure from unlabelled features (X), and reinforcement learning learns a reward-maximising policy via states, actions, and delayed rewards.'
					},
					{
						title: 'Features, Targets & the 8-Step Pipeline',
						description:
							'Independent variables (features X, e.g., Iris sepal and petal measurements) are the measurable inputs fed into a model f to predict the dependent variable (target/label y) in y = f(X) + ε. A complete workflow progresses through eight stages: define problem, collect data, explore (EDA), clean data, engineer features, split and scale, train and tune, and evaluate and deploy.'
					},
					{
						title: 'Cleaning, Splitting & Preventing Data Leakage',
						description:
							'Pre-processing handles missing values (dropping or imputing with mean, median, or mode), duplicate rows that can bias training or leak into tests, outliers (via IQR or z-scores), and encoding text categories as numbers. Data is split into training (parameter learning), validation (model comparison and hyperparameter tuning), and test sets (held out until the end), with scalers fitted strictly on training data (ideally inside a Pipeline) to prevent test statistics from leaking into training.'
					},
					{
						title: 'Feature Engineering & Scaling',
						description:
							'Feature engineering improves inputs by creating combined attributes (such as petal area = petal length × petal width), applying mathematical transforms, encoding categories, and selecting informative features. Distance- and gradient-based algorithms (KNN, k-means, SVM, gradient descent, neural networks, PCA) require scaling via standardisation (z = (x − μ)/σ, mean 0, std 1, less sensitive to outliers) or min–max normalisation (mapping to [0, 1]), whereas tree-based models and Naive Bayes do not.'
					}
				]
			},
			{
				title: 'Supervised Learning: Linear Regression & Decision Trees',
				concepts: [
					{
						title: 'Linear Regression, Residuals & MSE Loss',
						description:
							'Linear regression predicts a continuous target with ŷ = β₀ + β₁x (or β₀ + β₁x₁ + … + βₙxₙ for multiple features), where β₁ is the slope and β₀ is the intercept. Each point’s residual eᵢ = yᵢ − ŷᵢ is positive for under-predictions and negative for over-predictions; the Mean Squared Error (MSE = (1/n) Σ(yᵢ − ŷᵢ)²) squares residuals so signs do not cancel, penalises large errors heavily, and forms a smooth bowl with a single minimum.'
					},
					{
						title: 'Ordinary Least Squares vs. Gradient Descent',
						description:
							'Setting MSE derivatives to zero yields the closed-form OLS solution β₁ = Σ(xᵢ − x̄)(yᵢ − ȳ) / Σ(xᵢ − x̄)² and β₀ = ȳ − β₁x̄, which always passes through (x̄, ȳ) and is solved directly by scikit-learn’s LinearRegression. Alternatively, gradient descent iteratively updates β₀ and β₁ in the opposite direction of the loss gradient scaled by a learning rate α: too small slows convergence, while too large overshoots the minimum and causes the loss to explode.'
					},
					{
						title: 'Decision Trees & the Gini Index',
						description:
							'A decision tree recursively partitions training data from a root node through internal feature-threshold tests and yes/no branches to leaf nodes predicting the majority class. At every node, it evaluates every feature and threshold to minimise the weighted Gini impurity of the child nodes, where Gini = 1 − Σpₖ² equals 0 for a pure node and reaches 0.667 for three equal classes.'
					},
					{
						title: 'Controlling Overfitting in Decision Trees',
						description:
							'Unconstrained trees grow deep enough to memorise the training set (reaching 100% training accuracy on Iris at depth 5 while test accuracy falls from 0.967 at depth 3 to 0.933). Tree complexity is controlled via hyperparameters including max_depth, min_samples_split, min_samples_leaf, and split criterion (“gini” by default or “entropy”).'
					}
				]
			},
			{
				title: 'Unsupervised Learning, Reinforcement Learning & Evaluation',
				concepts: [
					{
						title: 'K-Means Clustering & the Elbow Method',
						description:
							'Unsupervised learning spans clustering, dimensionality reduction (PCA, t-SNE), and anomaly detection without labels. K-means chooses K, initialises K centroids, and alternates assigning points to their nearest centroid by Euclidean distance and updating centroids to cluster means to minimise inertia (WCSS); the elbow method plots inertia against K and picks the bend where extra clusters add little improvement (K = 3 on Iris).'
					},
					{
						title: 'Reinforcement Learning & Q-Learning',
						description:
							'In reinforcement learning, an agent observes state s, takes action a, receives numerical reward r and next state s′, and learns a policy π maximising total reward over time. Q-learning updates expected action values via Q(s, a) ← Q(s, a) + α[r + γ·maxₐ′ Q(s′, a′) − Q(s, a)] (with learning rate α and discount factor γ), while an ε-greedy strategy balances exploration (random action with probability ε) and exploitation.'
					},
					{
						title: 'Regression Evaluation Metrics',
						description:
							'Regression models are assessed using MAE (average absolute error), MSE (penalising large errors), RMSE (√MSE, expressing error in the original units), and R² = 1 − SSres/SStot. R² measures the share of target variance explained by the model, where 1 indicates a perfect fit and 0 is no better than predicting the mean.'
					},
					{
						title: 'Confusion Matrix & Classification Metrics',
						description:
							'A confusion matrix tabulates actual classes (rows) against predicted classes (columns), decomposing one-class-at-a-time outcomes into TP, FP, FN, and TN. Choose accuracy ((TP + TN)/total) for balanced classes with equal error costs, precision (TP/(TP + FP)) when false positives are costly (e.g., spam filtering), recall (TP/(TP + FN)) when false negatives are costly (e.g., disease screening), and F1-score (2PR/(P + R)) when classes are imbalanced and both matter.'
					}
				]
			}
		],
		practice: {
			title: 'Hands-On ML Fundamentals Exercises',
			description: 'Apply the formulas and workflows from the Iris dataset lecture to verify your understanding by hand and in code.',
			tasks: [
				'Compute the OLS slope β₁ and intercept β₀ by hand for a 5-point (petal length, petal width) table, check that the fitted line passes through (x̄, ȳ), and compute each point’s residual eᵢ = yᵢ − ŷᵢ and overall MSE.',
				'Calculate the parent Gini impurity (0.667) and weighted Gini gain for two candidate root splits on the 150 Iris flowers (petal length ≤ 2.45 vs. sepal length ≤ 5.45) to verify why the tree chooses the petal-length split.',
				'Given a 3×3 confusion matrix on 30 Iris test flowers (10 Setosa, 10 Versicolor, 8 Virginica correct, and 2 Virginica predicted as Versicolor), construct the one-vs-rest TP/FP/FN/TN table for Versicolor and compute accuracy, precision, recall, and F1-score.'
			]
		}
	},
	8: {
		overview:
			'This lecture situates neural networks and deep learning within machine learning and AI, building up from a single perceptron (weighted sum, bias, activation, and the perceptron learning rule) to multi-layer networks capable of learning non-linear boundaries such as XOR. It then covers network design, non-linear activations, loss optimisation via gradient descent and backpropagation, diagnosing learning-rate and overfitting issues on learning curves, and critically evaluating models under class imbalance.',
		sections: [
			{
				title: 'Perceptrons & Learning from Mistakes',
				concepts: [
					{
						title: 'Perceptron Anatomy & Forward Propagation',
						description:
							'Inspired by biological neurons (the human brain has roughly 86 billion), a perceptron is a single artificial neuron that multiplies each input xᵢ by its weight wᵢ, adds a bias term to shift the decision threshold (z = Σxᵢwᵢ + b), and passes z through an activation function f(z) to produce an output y. Weights indicate how much each input matters and start randomly before training.'
					},
					{
						title: 'The Perceptron Learning Rule',
						description:
							'When a perceptron’s prediction y disagrees with the true label t, it automatically updates its parameters using new_w ← w + η(t − y)x and new_b ← b + η(t − y), where η is the learning rate. If it predicts 1 when t = 0, t − y = −1 lowers z; if it predicts 0 when t = 1, t − y = +1 raises z; if correct, t − y = 0 leaves parameters unchanged, and training iterates across the dataset because fixing one example can break another.'
					},
					{
						title: 'Limits of a Single-Layer Perceptron',
						description:
							'A single perceptron can only solve linearly separable problems by drawing one straight line (2 features), plane (3 features), or hyperplane (3+ features). Consequently, it fails on XOR, circular or spiral patterns, and any dataset requiring a curved or disjoint decision boundary.'
					},
					{
						title: 'Solving XOR with a Hidden Layer',
						description:
							'Adding a hidden layer lets multiple neurons draw multiple lines and combine them at the output layer. In the lecture’s XOR example, two hidden neurons compute OR (weights 1, 1; bias −0.5) and AND (weights 1, 1; bias −1.5), and an output neuron combines them with weights 1 and −1 (bias −0.5) to produce the exact XOR truth table.'
					}
				]
			},
			{
				title: 'Multi-Layer Architectures, Activations & Backpropagation',
				concepts: [
					{
						title: 'Network Architecture & Input/Output Sizing',
						description:
							'A multi-layer neural network stacks an input layer, one or more hidden layers (also called dense or fully connected layers when every unit connects to the next layer), and an output layer. Input and output sizes are set by the problem (e.g., 4 inputs and 1 species output for Iris, or 15 × 12 = 180 input units for a 15×12 image), while the number of hidden layers and units scales with problem complexity without a strict rule.'
					},
					{
						title: 'Non-Linear Activation Functions',
						description:
							'While a linear activation φ(z) = z suits simple linear regression, multi-layer neural networks rely on non-linear activations—such as Logistic/Sigmoid, Hyperbolic Tangent (Tanh), and ReLU (max(0, z))—to learn complex non-linear mappings. Typical output pairings are sigmoid for binary classification (yes/no), softmax for multiclass classification, and linear/none for regression.'
					},
					{
						title: 'Loss Functions, Gradient Descent & Backpropagation',
						description:
							'Training loops forward propagation (computing predictions and differentiable loss such as Cross Entropy for classification or MSE for regression) with backward propagation of errors to update weights across epochs. Backpropagation applies the chain rule of partial derivatives (e.g., ∂J/∂w₁ = (∂J/∂ŷ)(∂ŷ/∂z₁)(∂z₁/∂w₁)) to measure how each weight affects total loss J(W), guiding gradient descent updates.'
					},
					{
						title: 'Softmax & Closed-World Inference',
						description:
							'The softmax function softmax(z)ᵢ = e^(zᵢ) / Σⱼ e^(zⱼ) converts output scores into probabilities that always sum to 1 across the trained classes. Because a network can only output among its fixed classes, a cat-vs-dog classifier shown a cow must still predict cat or dog (e.g., 0.55 cat, 0.45 dog) rather than refusing or inventing a new class.'
					}
				]
			},
			{
				title: 'Training Diagnostics, Regularisation & Evaluation',
				concepts: [
					{
						title: 'Data Splits & Neural Network Workflow',
						description:
							'Datasets are typically split 80/10/10 (train/validation/test) for larger datasets or 60/20/20 for smaller datasets, keeping the test set untouched for final evaluation while using the validation set to tune hyperparameters. During inference, the trained model simply runs forward propagation on new unseen data—user inputs are not immediately added to the model.'
					},
					{
						title: 'Diagnosing Learning Rates',
						description:
							'The learning rate controls the step size taken along the gradient during optimisation. If the learning rate is too high, loss and accuracy oscillate wildly or diverge; if it is too small, progress is extremely slow and training can get stuck.'
					},
					{
						title: 'Overfitting, Dropout & Early Stopping',
						description:
							'Overfitting occurs when the network memorises training data—visible on learning curves when training accuracy keeps climbing while validation accuracy peaks and then falls—proving that more epochs or more layers do not always help. Two key regularisation techniques are dropout (setting a fraction of activations, commonly 0.5, to 0 during training) and early stopping (halting training before validation performance degrades).'
					},
					{
						title: 'Class Imbalance & Confusion Matrices',
						description:
							'On imbalanced datasets, high accuracy can come from a useless model: with 99 non-spam and 1 spam email, always predicting “no spam” yields 99% accuracy while catching zero spam. Inspecting a confusion matrix exposes caught spam, missed spam, flagged good emails, and passed good emails, letting you evaluate error trade-offs beyond raw accuracy.'
					}
				]
			}
		],
		practice: {
			title: 'Neural Network Calculation & Diagnostic Practice',
			description: 'Practise forward passes, perceptron updates, architecture sizing, and learning-curve diagnosis using the lecture’s examples.',
			tasks: [
				'Hand-trace two iterations of the perceptron learning rule on Email B (x = (0, 1, 0), t = 0, η = 0.25) starting from w = (−0.1, 0.2, 0.8) and b = 0.6, verifying that z drops from 0.8 to 0.30 and then −0.20 (not spam).',
				'Verify all four input combinations (0,0), (0,1), (1,0), and (1,1) through the lecture’s 2-hidden-neuron XOR network (OR bias −0.5, AND bias −1.5, output weights 1 and −1 with bias −0.5) using the step function f(z) = 1 if z > 0 else 0.',
				'Design a 6-step neural network plan (problem definition, data split, architecture, hidden/output activations, loss/optimiser, and baseline/metrics) for an imbalanced classification problem, explaining why you would monitor validation curves and a confusion matrix instead of accuracy alone.'
			]
		}
	},
	9: {
		overview:
			'This lecture introduces how modern deep learning systems interpret visual data, contrasting traditional pipelines built on hand-crafted filters with end-to-end Convolutional Neural Networks (CNNs). It explains the core mechanics of CNNs—local receptive fields, weight sharing, feature maps, non-linear activations, and pooling—and traces how architectural milestones from LeNet and AlexNet to ResNet, MobileNet, and EfficientNet improved accuracy and computational efficiency.',
		sections: [
			{
				title: 'Visual Information, Tasks & Traditional Pipelines',
				concepts: [
					{
						title: 'Images as Numeric Arrays',
						description:
							'Computers perceive images as grids of pixel intensity values (numeric arrays) rather than visual shapes directly. Image classification maps these pixel arrays to class probabilities and selects the highest-probability label.'
					},
					{
						title: 'Four Core Computer Vision Tasks',
						description:
							'Vision problems increase in difficulty from classification (labelling the main object) to localisation (drawing a bounding box around one object), detection (identifying and locating multiple objects), and segmentation (labelling every pixel region).'
					},
					{
						title: 'Hand-Crafted Features vs End-to-End Learning',
						description:
							'Traditional pipelines rely on human-designed feature extractors (such as edge detectors, HOG, SIFT, and SURF) paired with classifiers like SVMs, decision trees, random forests, or k-NN. Deep learning replaces manual feature engineering by learning both the filters and the classifier end-to-end from data.'
					},
					{
						title: 'Real-World Visual Challenges',
						description:
							'Robust vision systems must handle viewpoint variation, scale variation, lighting conditions, deformation, occlusion, background clutter, and within-class variation simultaneously—conditions where hand-crafted features quickly plateau.'
					}
				]
			},
			{
				title: 'CNN Mechanics & Training Fundamentals',
				concepts: [
					{
						title: 'Convolution, Filters & Feature Maps',
						description:
							'A convolutional filter is a small matrix (e.g., 3×3) that slides across an image, computing element-wise products and summing them to produce a feature map. Higher response values indicate stronger matches to the filter pattern, and K distinct filters produce an output volume of depth K.'
					},
					{
						title: 'Local Receptive Fields & Weight Sharing',
						description:
							'Unlike fully connected layers—which flatten 2D images, lose spatial layout, and require millions of parameters—each CNN unit connects only to a local image patch. Reusing the same filter weights and bias across all locations dramatically reduces trainable parameters and detects the same feature anywhere in the image.'
					},
					{
						title: 'ReLU Activation & Pooling',
						description:
							'Applied pixel-by-pixel after convolutions, ReLU (max(0, x)) introduces non-linearity, avoids saturation in the positive region, and converges roughly 6× faster than tanh/sigmoid. Pooling (max or average) downsamples local regions independently per channel with no learned weights, shrinking height and width while keeping channel count unchanged.'
					},
					{
						title: 'Feature Hierarchy, Training & Transfer Learning',
						description:
							'Stacked CNN layers learn a hierarchy from low-level edges and colour, to mid-level textures and object parts, to high-level object patterns, trained via backpropagation (summing gradients across shared filter locations), SGD, dropout, and data augmentation. Transfer learning reuses ImageNet-pretrained convolutional layers by freezing early layers and fine-tuning later layers with a smaller learning rate (e.g., 1/10 of the original).'
					}
				]
			},
			{
				title: 'Landmark CNN Architectures & Efficiency',
				concepts: [
					{
						title: 'Early Milestones: LeNet & AlexNet',
						description:
							'Following Fukushima’s Neocognitron (1980) and backpropagation (1986), LeCun’s LeNet (1989–1998) demonstrated end-to-end CNN handwritten digit recognition. AlexNet (2012) became the first CNN-based ImageNet winner (16.4% top-5 error) using 5 convolutional layers, 3 fully connected layers, ReLU, max-pooling, dropout, and GPU training.'
					},
					{
						title: 'Deeper & Multi-Scale Designs: VGGNet & GoogLeNet',
						description:
							'VGGNet (2014) deepened CNNs to 16–19 layers using repeated 3×3 convolutions—where three stacked 3×3 layers match a 7×7 effective receptive field with fewer parameters (proportional to 27 vs 49). GoogLeNet/Inception (2014, 22 layers) captured multi-scale features in parallel branches and used 1×1 convolutions to reduce channel counts and computation alongside global average pooling.'
					},
					{
						title: 'Residual Connections: ResNet',
						description:
							'Plain very deep CNNs suffer higher training and test error because optimisation becomes harder (e.g., 56-layer performing worse than 20-layer). ResNet (2015, 152 layers, 3.57% top-5 error) solved this with skip connections that add the identity input x to a learned residual correction F(x), computing F(x) + x.'
					},
					{
						title: 'Efficient Architectures: MobileNet & EfficientNet',
						description:
							'MobileNet (2017) cuts computation for mobile deployment via depthwise separable convolutions—filtering each channel independently with a 3×3 depthwise pass followed by a 1×1 pointwise pass (e.g., 7.9× fewer multiply-adds). EfficientNet (2019) uses neural architecture search for baseline B0 and compound scaling (d = α^φ, w = β^φ, r = γ^φ with αβ²γ² ≈ 2) to scale depth, width, and resolution together into B1–B7.'
					}
				]
			}
		],
		practice: {
			title: 'CNN Operations & Architecture Revision Tasks',
			description: 'Work through these calculation and comparison exercises directly grounded in the Week 9 slides.',
			tasks: [
				'Hand-compute the 3×3 feature map produced by convolving the lecture’s 5×5 binary X-image with the 3×3 X-shaped filter (stride 1, no padding), then verify why the centre response equals 5 and apply 2×2 max pooling and average pooling (stride 2) to the 4×4 pooling matrix from the slides.',
				'Calculate the number of trainable parameters (including biases) for the first convolutional layer taking 50×50×3 RGB inputs with 8 filters of size 5×5, and compare the parameter count of a standard 3×3 convolution against MobileNet’s depthwise + pointwise decomposition for 32 input and 64 output channels.',
				'Build a comparison table of AlexNet, VGGNet, GoogLeNet, ResNet, MobileNet, and EfficientNet listing each architecture’s year, headline innovation, parameter/efficiency strategy, and problem solved (such as effective receptive fields, channel reduction, or optimisation degradation).'
			]
		}
	},
	10: {
		overview:
			'This lecture introduces Generative AI as models that create new synthetic content across text, images, audio, code, and video by learning data distributions rather than only decision boundaries. It walks step-by-step through how Large Language Models (LLMs) generate text via tokenisation, learned embeddings, positional vectors, self-attention, Transformer blocks, softmax sampling, and multi-stage training, before examining image generation families (VAEs, GANs, diffusion models), prompt engineering, hallucinations, grounding, and ethical/sustainability risks.',
		sections: [
			{
				title: 'Generative AI Foundations & LLM Text Mechanics',
				concepts: [
					{
						title: 'Generative vs Discriminative AI',
						description:
							'Generative AI refers to any model that creates new synthetic content (text, images, audio, code, video, or molecules) by learning the shape of a data distribution, whereas discriminative models focus on finding boundaries to label or predict properties of an input.'
					},
					{
						title: 'Next-Token Prediction & Probabilistic Sampling',
						description:
							'An LLM does not look up answers in a database; its core job is to estimate P(next token | text so far) using softmax over its entire vocabulary in an autoregressive loop. Because models randomly sample from this distribution rather than always picking the single top token, outputs are less flat and repetitive—and the same prompt can yield different answers.'
					},
					{
						title: 'Tokenisation, Embeddings & Positional Information',
						description:
							'LLMs split text into subword pieces called tokens (balancing vocabulary size, sequence length, and unseen words/typos) and map token IDs to learned numerical vectors via an embedding table where similar contexts lie nearby and similarity is measured via dot product. Because attention alone treats tokens as an unordered set, positional vectors are added to embeddings so word order (e.g., “dog bites man” vs “man bites dog”) is preserved.'
					},
					{
						title: 'Self-Attention, Transformers & Training Stages',
						description:
							'Self-attention relates every token in a sequence to every other token so each pulls in relevant context across stacked Transformer layers. LLMs are built in three stages: self-supervised pretraining on huge text (next-token prediction), supervised instruction tuning (instruction–response pairs), and preference tuning (e.g., RLHF) to align responses with human preferences.'
					}
				]
			},
			{
				title: 'Generative Image Model Families',
				concepts: [
					{
						title: 'Variational Auto-Encoders (VAEs, 2013)',
						description:
							'VAEs use an encoder to compress input data into a compact probabilistic latent space (Gaussian distribution) and a decoder to reconstruct the input. At inference time, new synthetic data is generated by sampling from the Gaussian distribution and passing it through the decoder.'
					},
					{
						title: 'Generative Adversarial Networks (GANs, 2014)',
						description:
							'GANs consist of two competing networks in a zero-sum game: a generator that turns random noise into synthetic images and a discriminator that tries to distinguish real images from fake ones. Training continues until the discriminator can no longer tell real and generated samples apart.'
					},
					{
						title: 'Diffusion Models (2020, State of the Art)',
						description:
							'Diffusion models learn generation in two directions: a forward (noising) process progressively adds Gaussian noise to a real image until only noise remains, and a reverse (denoising) process starts from random noise and removes noise step by step to form a clear image.'
					}
				]
			},
			{
				title: 'Verification, Prompt Engineering & Ethical Risks',
				concepts: [
					{
						title: 'Hallucinations, Grounding & Verification',
						description:
							'LLMs produce plausible but wrong outputs (such as fabricated biographies) because they are trained for fluent continuation, fill gaps in rare facts with style, and do not check claims against the world. Grounding retrieves external documents into context so the model cites sources, and users should verify claims via primary and independent sources, dates, feasibility, and accountability.'
					},
					{
						title: 'Mechanism-Driven Limitations',
						description:
							'Key LLM weaknesses stem directly from their architecture and training: knowledge cut-offs (frozen weights), bias (training data statistics), prompt sensitivity, finite context limits (middle details used less reliably), reasoning and letter-counting limits (fixed compute per token and hidden letters inside token IDs), and sycophancy (preference training rewarding agreement over correction).'
					},
					{
						title: 'Prompt Engineering & Human-AI Teaming',
						description:
							'Effective prompting avoids mixing topics in one chat (open a new session), avoids packing too many instructions into a single prompt (give instructions step by step), and supplies explicit context. Viewing AI through Human-AI Teaming (HAIT) treats it as a collaborative partner whose outputs still require human judgment.'
					},
					{
						title: 'Bias, Integrity, Privacy & Sustainability',
						description:
							'Deploying generative AI raises six major risks: social bias (e.g., gender stereotypes and facial recognition disparities highlighted by Buolamwini & Gebru and “Stochastic Parrots”), privacy, contested copyright, academic integrity (plagiarism and fake research data), over-reliance on fluent text, and environmental impact—including both energy use and freshwater evaporation (e.g., an estimated 700,000 litres to train GPT-3).'
					}
				]
			}
		],
		practice: {
			title: 'LLM Mechanics, Verification & Critical Evaluation Tasks',
			description: 'Apply the Week 10 concepts to trace Transformer processing, compare generative families, and audit real outputs.',
			tasks: [
				'Trace the full LLM pipeline from prompt to output (Tokenisation → Embedding → Position → Transformer blocks → Probabilities → Next token loop), explaining with a concrete example why “dog bites man” and “man bites dog” need positional vectors and why tokenisation makes letter-counting difficult.',
				'Compare VAEs, GANs, Transformers, and Diffusion models in a structured revision table covering year introduced, core mechanism, typical outputs, and how new data is generated at inference time.',
				'Take an LLM-generated biography or factual summary of a non-famous topic and audit it using the lecture’s 5-step verification checklist (primary source, second independent source, date check, whether the model could know it, and accountability), noting any mechanism-driven limitations observed.'
			]
		}
	}
};
