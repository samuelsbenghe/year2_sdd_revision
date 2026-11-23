import { AlertTriangle, Brain, Code, FileCode, GitBranch, Shield, Users } from '@lucide/svelte';
import { mixedReviewTopic } from './topics';
import type { QuizTopic } from './types';

export const sddQuizTopics: QuizTopic[] = [
	{ id: 'design-principles', title: 'Design Principles', description: 'SOLID, DRY, Coupling & Cohesion', icon: Brain, iconClass: 'bg-indigo-100 text-indigo-600' },
	{ id: 'testing', title: 'Software Testing', description: 'Unit testing, Integration testing, TDD, ATDD', icon: Code, iconClass: 'bg-green-100 text-green-600' },
	{
		id: 'user-testing',
		title: 'User & Usability Testing',
		description: "Nielsen's heuristics, SUS, Think-aloud protocols",
		icon: Users,
		iconClass: 'bg-purple-100 text-purple-600'
	},
	{ id: 'version-control', title: 'Version Control & CI/CD', description: 'Git commands, branching strategies, pipelines', icon: GitBranch, iconClass: 'bg-orange-100 text-orange-600' },
	{ id: 'security', title: 'Secure Programming', description: 'Input validation, authentication, concurrency', icon: Shield, iconClass: 'bg-red-100 text-red-600' },
	{ id: 'anti-patterns', title: 'Anti-Patterns & Code Quality', description: 'God Object, Spaghetti Code, refactoring, linters', icon: AlertTriangle, iconClass: 'bg-yellow-100 text-yellow-600' },
	{
		id: 'api-design',
		title: 'API Design & Documentation',
		description: 'RESTful APIs, code reviews, profiling, documentation',
		icon: FileCode,
		iconClass: 'bg-cyan-100 text-cyan-600'
	},
	mixedReviewTopic
];
