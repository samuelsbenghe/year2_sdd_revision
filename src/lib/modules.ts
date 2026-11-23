import { BookOpen, CodeXml, ShieldCheck } from '@lucide/svelte';

export const modules = {
	sdd: {
		href: '/sdd',
		label: 'SDD',
		title: 'Software Development & Design (SDD)',
		description: 'Weekly lectures, lab materials, quizzes, and tools.',
		icon: BookOpen
	},
	dynamicWeb: {
		href: '/dynamic-web',
		label: 'Dynamic Web',
		title: 'Dynamic Web',
		description: 'Weekly lectures, slides, and revision notes for Dynamic Web Applications.',
		icon: CodeXml
	},
	sysnetSecurity: {
		href: '/sysnet-security',
		label: 'SysNet Security',
		title: 'SysNet Security',
		description: 'Revision materials coming soon.',
		icon: ShieldCheck
	}
} as const;
