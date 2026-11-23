import { dynamicWebQuizQuestions } from '$lib/quizzes/dynamic-web';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => ({ comingSoon: dynamicWebQuizQuestions.length === 0 });
