import { appliedAiQuizQuestions } from '$lib/quizzes/applied-ai';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => ({ comingSoon: appliedAiQuizQuestions.length === 0 });
