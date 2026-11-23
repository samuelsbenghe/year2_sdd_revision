import type { ParamMatcher } from '@sveltejs/kit';

export const match: ParamMatcher = (section) => section === 'lectures' || section === 'quizzes' || section === 'tools';
