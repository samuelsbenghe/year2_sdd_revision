import { dynamicWebQuizQuestions, dynamicWebQuizTopics } from '$lib/quizzes/dynamic-web';
import { loadQuiz } from '$lib/server/quizzes';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = (event) => loadQuiz(event, dynamicWebQuizTopics, dynamicWebQuizQuestions);
