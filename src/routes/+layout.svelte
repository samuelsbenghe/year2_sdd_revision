<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.png';
	import { BookOpen, ClipboardCheck, Layers, LayoutGrid } from '@lucide/svelte';
	import { page } from '$app/state';

	let { children } = $props();

	let openCategory: string = 'lectures'; // default open

	const categories = [
		{ href: '/lectures', label: 'Lectures', icon: BookOpen, id: 'lectures' },
		{ href: '/quizzes', label: 'Quizzes', icon: ClipboardCheck, id: 'quizzes' },
		{ href: '/topics', label: 'Topics', icon: Layers, id: 'topics' },
		{ href: '/tools', label: 'Tools', icon: LayoutGrid, id: 'tools' }
	];

	const weeks = [
		{ href: '/lectures/week1', label: 'Week 1: Introduction' },
		{ href: '/lectures/week2', label: 'Week 2: Algorithms' },
		{ href: '/lectures/week3', label: 'Week 3: Data Structures' },
		{ href: '/lectures/week4', label: 'Week 4: UX/UI Design' }
	];

	function toggleCategory(id: string) {
		openCategory = openCategory === id ? '' : id;
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex h-screen w-full">
	<aside class="hidden w-64 shrink-0 flex-col border-r border-slate-800 bg-slate-900 text-slate-300 md:flex">
		<div class="flex h-16 items-center border-b border-slate-800 px-6 font-bold tracking-wider text-white">Samuel's SDD Revision</div>

		<nav class="flex-1 space-y-1 overflow-y-auto px-3 py-6">
			<p class="mb-2 mt-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Main Menu</p>

			<!-- Lectures -->
			<details class="group" open={openCategory === 'lectures'}>
				<summary
					onclick={() => toggleCategory('lectures')}
					class={`flex cursor-pointer list-none items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors
		${page.url.pathname.startsWith('/lectures') ? 'bg-slate-800 text-white' : 'bg-transparent text-slate-300 hover:bg-slate-800 hover:text-white'}`}
				>
					<BookOpen class={page.url.pathname.startsWith('/lectures') ? 'text-indigo-400' : 'text-slate-400'} />
					<span class="flex-1">Lectures</span>

					<svg class="ml-2 h-4 w-4 transform text-slate-400 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
					</svg>
				</summary>

				<div class="mt-1 space-y-1 pl-11">
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
					onclick={() => toggleCategory(cat.id)}
					class={`group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors
			${page.url.pathname.startsWith(cat.href) ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}
				>
					<svelte:component this={cat.icon} class="mr-3 h-6 w-6 shrink-0 text-slate-400 group-hover:text-indigo-400" />
					{cat.label}
				</a>
			{/each}
		</nav>

		<div class="border-t border-slate-800 p-4">
			<div class="flex items-center">
				<div class="ml-3">
					<p class="text-sm font-medium text-white">Work in Progress</p>
					<p class="text-xs font-medium text-slate-500">Last Updated 28/11/2025</p>
				</div>
			</div>
		</div>
	</aside>
	{@render children()}
</div>
