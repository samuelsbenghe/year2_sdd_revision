<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.png';
	import { BookOpen, ClipboardCheck, LayoutGrid, HomeIcon } from '@lucide/svelte';
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
	<aside class="bg-linear-to-b hidden w-72 shrink-0 flex-col border-r border-slate-800/50 from-slate-900 via-slate-900 to-slate-950 text-slate-300 md:flex">
		<!-- Logo/Brand Header -->
		<div class="flex h-16 items-center gap-3 border-b border-slate-800/50 bg-slate-900/50 px-6 backdrop-blur-sm">
			<div class="bg-linear-to-br flex h-8 w-8 items-center justify-center rounded-lg from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/25">
				<BookOpen class="h-4 w-4 text-white" />
			</div>
			<span class="bg-linear-to-r from-white to-slate-300 bg-clip-text font-bold tracking-wide text-transparent">SDD Revision</span>
		</div>

		<nav class="flex-1 space-y-1 overflow-y-auto px-3 py-6">
			<!-- Homepage -->
			<a
				href="/"
				class={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200
			${page.url.pathname === '/' ? 'bg-linear-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-500/25' : 'text-slate-300 hover:bg-slate-800/70 hover:text-white'}`}
			>
				<HomeIcon class={`h-5 w-5 shrink-0 transition-colors ${page.url.pathname === '/' ? 'text-white' : 'text-slate-400 group-hover:text-indigo-400'}`} />
				<span>Home</span>
			</a>

			<p class="mb-2 mt-4 px-3 text-[11px] font-semibold uppercase tracking-widest text-slate-500">Main Menu</p>

			<!-- Lectures -->
			<details class="group" open={lecturesToggle}>
				<summary
					onclick={(e) => {
						e.preventDefault(); // stop native <details> toggle
						toggleLectures();
					}}
					class={`${page.url.pathname.startsWith('/lectures') ? 'bg-linear-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-500/25' : 'bg-transparent text-slate-300 hover:bg-slate-800/70 hover:text-white'} flex cursor-pointer list-none items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200`}
				>
					<BookOpen class={`h-5 w-5 shrink-0 transition-colors ${page.url.pathname.startsWith('/lectures') ? 'text-white' : 'text-slate-400 group-hover:text-indigo-400'}`} />
					<span class="flex-1">Lectures</span>

					<svg class="h-4 w-4 transform text-current opacity-60 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
					</svg>
				</summary>

				<div class="ml-5 mt-2 space-y-0.5 border-l border-slate-700/50 pl-4">
					{#each weeks as week}
						<a
							href={week.href}
							class={`block rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
								page.url.pathname === week.href
									? '-ml-px border-l-2 border-indigo-400 bg-indigo-500/10 text-indigo-300'
									: 'text-slate-400 hover:translate-x-1 hover:bg-slate-800/50 hover:text-slate-200'
							}`}
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
					class={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200
			${page.url.pathname.startsWith(cat.href) ? 'bg-linear-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-500/25' : 'text-slate-300 hover:bg-slate-800/70 hover:text-white'}`}
				>
					<cat.icon class={`h-5 w-5 shrink-0 transition-colors ${page.url.pathname.startsWith(cat.href) ? 'text-white' : 'text-slate-400 group-hover:text-indigo-400'}`} />
					{cat.label}
				</a>
			{/each}
		</nav>

		<!-- Footer -->
		<div class="border-t border-slate-800/50 bg-slate-900/50 p-4 backdrop-blur-sm">
			<div class="flex items-center gap-3 rounded-lg bg-slate-800/50 p-3">
				<div class="bg-linear-to-br flex h-9 w-9 items-center justify-center rounded-full from-amber-400 to-orange-500 shadow-md">
					<span class="text-xs font-bold text-white">WIP</span>
				</div>
				<div>
					<p class="text-sm font-semibold text-white">Work in Progress</p>
					<p class="text-xs text-slate-400">Updated {lastUpdated.toLocaleDateString()}</p>
				</div>
			</div>
		</div>
	</aside>
	{@render children()}
</div>
