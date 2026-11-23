import { Wrench } from '@lucide/svelte';
import type { QuizTopic } from './types';

export const mixedReviewTopic: QuizTopic = {
	id: 'mixed',
	mixedQuestionCount: 10,
	title: 'Mixed Review',
	description: 'Random questions from all topics',
	icon: Wrench,
	iconClass: 'bg-slate-100 text-slate-600'
};
