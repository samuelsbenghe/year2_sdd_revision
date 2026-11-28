import { appliedAiQuizQuestions, appliedAiQuizTopics } from '$lib/quizzes/applied-ai';
import { loadQuiz } from '$lib/server/quizzes';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = (event) => loadQuiz(event, appliedAiQuizTopics, appliedAiQuizQuestions);
