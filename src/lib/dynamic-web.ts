export const dynamicWebLectures = [
	{
		week: 1,
		title: 'Web, HTTP & Unix Foundations',
		description: 'Client-server architecture, TCP/IP, HTTP, URLs, Unix permissions, and SSH.',
		labFormat: 'html'
	},
	{
		week: 2,
		title: 'From Static Files to Dynamic Backends',
		description: 'Rendering models, WSGI and ASGI, FastAPI, API contracts, and browser integration.',
		labFormat: 'html'
	},
	{
		week: 3,
		title: 'Relational Databases & SQL Fundamentals',
		description: 'Relational modelling, keys, normalisation, SQL queries, joins, and SQLite.',
		labFormat: 'html'
	},
	{
		week: 4,
		title: 'Let’s Build the Internet',
		description: 'Physical signals, Ethernet, IP routing, TCP, and browser DevTools.',
		labFormat: 'html'
	},
	{
		week: 5,
		title: 'JavaScript on the Server & Architectural Reflection',
		description: 'Node.js, Express, EJS, data persistence, and the formative review.',
		labFormat: 'pdf'
	},
	{
		week: 6,
		title: 'Full-Stack Systems',
		description: 'Flask and WSGI, signed sessions, network boundaries, SQLite, and SVG mapping.',
		labFormat: 'html'
	},
	{
		week: 7,
		title: 'PHP 8.3 & the Developer Toolbox',
		description: 'PHP request handling, built-in utilities, secure forms, and a single-file dashboard.',
		labFormat: 'html'
	}
] as const;

export type DynamicWebWeek = (typeof dynamicWebLectures)[number]['week'];

export function dynamicWebLectureHref(week: DynamicWebWeek) {
	return `/dynamic-web/lectures/week${week}` as const;
}
