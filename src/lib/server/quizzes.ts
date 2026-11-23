import type { ServerLoadEvent } from '@sveltejs/kit';
import type { QuizQuestion, QuizTopic } from '$lib/quizzes/types';

export function loadQuiz({ url, depends }: Pick<ServerLoadEvent, 'url' | 'depends'>, topics: readonly QuizTopic[], questionBank: readonly QuizQuestion[]) {
	depends('quiz:questions');

	const name = url.searchParams.get('name') || 'mixed';
	const topic = topics.find((topic) => topic.id === name);
	const quizTitle = topic?.title ?? 'Quiz';
	const shuffled = topic?.mixedQuestionCount !== undefined ? [...questionBank] : questionBank.filter((question) => question.area === name);
	const count = Math.min(topic?.mixedQuestionCount ?? 10, shuffled.length);
	for (let index = 0; index < count; index++) {
		const pick = index + Math.floor(Math.random() * (shuffled.length - index));
		[shuffled[index], shuffled[pick]] = [shuffled[pick], shuffled[index]];
	}

	return { quizTitle, questions: shuffled.slice(0, count) };
}
