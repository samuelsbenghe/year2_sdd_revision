import { error } from '@sveltejs/kit';
import { dynamicWebLectures } from '$lib/dynamic-web';
import type { PageServerLoad } from './$types';
import { lectureNotes } from './notes';

export const load: PageServerLoad = ({ params }) => {
	const lecture = dynamicWebLectures.find(({ week }) => params.week === `week${week}`);
	if (!lecture) error(404, 'Dynamic Web lecture not found');

	const previous = dynamicWebLectures.find(({ week }) => week === lecture.week - 1);
	const next = dynamicWebLectures.find(({ week }) => week === lecture.week + 1);

	return {
		lecture,
		notes: lectureNotes[lecture.week],
		pdf: `/assets/dynamic-web/week_${lecture.week}.pdf`,
		lab: `/assets/dynamic-web/lab_${lecture.week}.${lecture.labFormat}` as const,
		previous,
		next
	};
};
