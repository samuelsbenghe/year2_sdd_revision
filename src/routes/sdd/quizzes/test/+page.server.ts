import { QuizQuestions } from '$lib';
import { sddQuizTopics } from '$lib/quizzes/sdd';
import { loadQuiz } from '$lib/server/quizzes';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = (event) => loadQuiz(event, sddQuizTopics, QuizQuestions);
