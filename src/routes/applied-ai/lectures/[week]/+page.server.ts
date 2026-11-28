import { error } from '@sveltejs/kit';
import { appliedAiLectures } from '$lib/applied-ai';
import type { PageServerLoad } from './$types';
import { lectureNotes } from './notes';

export const load: PageServerLoad = ({ params }) => {
	const index = appliedAiLectures.findIndex(({ week }) => params.week === `week${week}`);
	if (index === -1) error(404, 'Applied AI lecture not found');

	const lecture = appliedAiLectures[index];
	const previous = appliedAiLectures[index - 1];
	const next = appliedAiLectures[index + 1];

	return {
		lecture,
		notes: lectureNotes[lecture.week],
		pdf: `/assets/applied-ai/week${lecture.week}.pdf`,
		previous,
		next
	};
};
