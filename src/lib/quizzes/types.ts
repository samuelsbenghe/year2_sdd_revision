import type { ClipboardCheck } from '@lucide/svelte';

export type QuizQuestion = {
	area: string;
	question: string;
	type: string;
	options: string[];
	answer: string;
};

export type QuizTopic = {
	id: string;
	mixedQuestionCount?: number;
	title: string;
	description: string;
	icon: typeof ClipboardCheck;
	iconClass: string;
};
