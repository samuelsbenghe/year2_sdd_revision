<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.png';
	import { BookOpen, ClipboardCheck, Layers, LayoutGrid, HomeIcon } from '@lucide/svelte';
	import { page } from '$app/state';
	import { lastUpdated } from '$lib';
	import { goto } from '$app/navigation';

	let { children } = $props();

	let lecturesToggle = $state(false);
	let manualOverride = $state(null as null | boolean);

	function toggleLectures() {
		manualOverride = !lecturesToggle;
		lecturesToggle = !lecturesToggle;
		// navigate to lectures if not already there
		if (manualOverride && !page.url.pathname.startsWith('/lectures')) {
			goto('/lectures');
		}
	}

	const categories = [
		{ href: '/lectures', label: 'Lectures', icon: BookOpen, id: 'lectures' },
		{ href: '/quizzes', label: 'Quizzes', icon: ClipboardCheck, id: 'quizzes' },
		{ href: '/topics', label: 'Topics', icon: Layers, id: 'topics' },
		{ href: '/tools', label: 'Tools', icon: LayoutGrid, id: 'tools' }
	];

	const weeks = [
		{ href: '/lectures/week1', label: 'Week 1: Introduction' },
		{ href: '/lectures/week2', label: 'Week 2: Module Coupling and Cohesion' },
		{ href: '/lectures/week3', label: 'Week 3: Software Testing' },
		{ href: '/lectures/week4', label: 'Week 4: Web Testing with JavaScript' },
		{ href: '/lectures/week5', label: 'Week 5: User Testing' },
		{ href: '/lectures/week6', label: 'Week 6: Version Control Systems' },
		{ href: '/lectures/week7', label: 'Week 7: Robust and Secure Programming' },
		{ href: '/lectures/week8', label: 'Week 8: Usability Testing' },
		{ href: '/lectures/week9', label: 'Week 9: Comprehensive Revision' },
		{ href: '/lectures/week10', label: 'Week 10: Final Lecture & Exam Prep' }
	];

	$effect(() => {
		const isLectureWeek = weeks.some((w) => page.url.pathname.startsWith(w.href)) || page.url.pathname === '/lectures';

		if (isLectureWeek) {
			if (manualOverride === null) {
				lecturesToggle = true;
			} else {
				lecturesToggle = manualOverride;
			}
		} else {
			lecturesToggle = false;
			manualOverride = null;
		}
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex h-screen w-full">
	<aside class="hidden w-64 shrink-0 flex-col border-r border-slate-800 bg-slate-900 text-slate-300 md:flex">
		<div class="flex h-16 items-center border-b border-slate-800 px-6 font-bold tracking-wider text-white">Samuel's SDD Revision</div>

		<nav class="flex-1 space-y-1 overflow-y-auto px-3 py-6">
			<!-- Homepage -->
			<a
				href="/"
				class={`group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors
			${page.url.pathname === '/' ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}
			>
				<HomeIcon class="mr-3 h-6 w-6 shrink-0 text-slate-400 group-hover:text-indigo-400" />
				<span>Home</span>
			</a>
			<p class="mb-2 mt-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Main Menu</p>

			<!-- Lectures -->
			<details class="group" open={lecturesToggle}>
				<summary
					onclick={(e) => {
						e.preventDefault(); // stop native <details> toggle
						toggleLectures();
					}}
					class={`${page.url.pathname.startsWith('/lectures') ? 'bg-slate-800 text-white' : 'bg-transparent hover:text-white'} flex cursor-pointer list-none items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800`}
				>
					<BookOpen class={page.url.pathname.startsWith('/lectures') ? 'text-indigo-400' : 'text-slate-400'} />
					<span class="flex-1">Lectures</span>

					<svg class="ml-2 h-4 w-4 transform text-slate-400 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
					</svg>
				</summary>

				<div class="mt-1 space-y-1 pl-4">
					{#each weeks as week}
						<a
							href={week.href}
							class={page.url.pathname === week.href
								? 'block rounded-md border-l-2 border-indigo-500 bg-indigo-900/50 px-3 py-2 text-sm font-medium text-white'
								: 'block rounded-md border-l-2 border-transparent px-3 py-2 text-sm font-medium text-slate-400 transition-colors hover:bg-slate-800 hover:text-white'}
						>
							{week.label}
						</a>
					{/each}
				</div>
			</details>

			<!-- Other categories -->
			{#each categories.slice(1) as cat}
				<a
					href={cat.href}
					class={`group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors
			${page.url.pathname.startsWith(cat.href) ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}
				>
					<cat.icon class="mr-3 h-6 w-6 shrink-0 text-slate-400 group-hover:text-indigo-400" />
					{cat.label}
				</a>
			{/each}
		</nav>

		<div class="border-t border-slate-800 p-4">
			<div class="flex items-center">
				<div class="ml-3">
					<p class="text-sm font-medium text-white">Work in Progress</p>
					<p class="text-xs font-medium text-slate-500">Last Updated: {lastUpdated.toLocaleDateString()}</p>
				</div>
			</div>
		</div>
	</aside>
	{@render children()}
</div>
