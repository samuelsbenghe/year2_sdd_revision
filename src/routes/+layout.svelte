<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.png';
	import { BookOpen, ChevronDown, HomeIcon } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	import { page } from '$app/state';
	import type { Snippet } from 'svelte';
	import { lastUpdated } from '$lib';
	import { dynamicWebLectureHref, dynamicWebLectures } from '$lib/dynamic-web';
	import { modules } from '$lib/modules';

	let { children } = $props();

	type ResourceLink = { href: Pathname; label: string };

	const sddLinks = [
		{ href: '/sdd/lectures', label: 'Lectures' },
		{ href: '/sdd/quizzes', label: 'Quizzes' },
		{ href: '/sdd/tools', label: 'Tools' }
	] as const;

	const dynamicWebLinks = [{ href: '/dynamic-web/quizzes', label: 'Quizzes' }] as const;

	const weeks = [
		'Introduction',
		'Module Coupling and Cohesion',
		'Software Testing',
		'Web Testing with JavaScript',
		'User Testing',
		'Version Control Systems',
		'Robust and Secure Programming',
		'Usability Testing',
		'Comprehensive Revision',
		'Final Lecture & Exam Prep'
	].map((title, index) => ({
		href: `/sdd/lectures/week${index + 1}` as Pathname,
		label: `Week ${index + 1}: ${title}`
	}));

	const dynamicWebWeekLinks = dynamicWebLectures.map(({ week, title }) => ({
		href: dynamicWebLectureHref(week),
		label: `Week ${week}: ${title}`
	}));

	function isWithin(href: string) {
		return page.url.pathname === href || page.url.pathname.startsWith(href + '/');
	}
</script>

{#snippet resourceLinks(links: readonly ResourceLink[])}
	{#each links as { href, label } (href)}
		<li>
			<a
				href={resolve(href)}
				aria-current={page.url.pathname === href ? 'page' : undefined}
				class="block rounded-lg px-2 py-1 text-sm hover:bg-slate-800 hover:text-white data-[active=true]:bg-indigo-500/15 data-[active=true]:text-indigo-200 md:px-3 md:py-2"
				data-active={isWithin(href)}
			>
				{label}
			</a>
		</li>
	{/each}
{/snippet}

{#snippet resourceDropdown(label: string, open: boolean, content: Snippet)}
	<li>
		<details class="[&[open]>summary>svg]:rotate-180" {open}>
			<summary class="flex cursor-pointer list-none items-center justify-between rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-800 hover:text-white">
				{label}
				<ChevronDown class="size-4 shrink-0" />
			</summary>
			<ul class="ml-3 border-l border-slate-800 pl-2">
				{@render content()}
			</ul>
		</details>
	</li>
{/snippet}

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex h-dvh w-full flex-col md:flex-row">
	<div class="bg-linear-to-b flex shrink-0 flex-col from-slate-900 to-slate-950 text-slate-300 md:w-72 md:border-r md:border-slate-800/50">
		<a href={resolve('/')} class="flex items-center gap-3 border-b border-slate-800/50 px-4 py-3 md:h-16 md:px-6">
			<span class="bg-linear-to-br grid size-8 place-items-center rounded-lg from-indigo-500 to-purple-600 text-white">
				<BookOpen class="size-4" />
			</span>
			<span class="font-bold tracking-wide text-white">University Revision</span>
		</a>

		<nav aria-label="Main navigation" class="min-h-0 flex-1 overflow-y-auto px-3 py-2 md:py-6">
			<ul class="flex flex-wrap gap-1 md:flex-col">
				<li>
					<a
						href={resolve('/')}
						aria-current={page.url.pathname === '/' ? 'page' : undefined}
						class="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-medium hover:bg-slate-800 hover:text-white aria-[current=page]:bg-indigo-600 aria-[current=page]:text-white md:px-3 md:py-2.5"
					>
						<HomeIcon class="hidden size-5 md:block" />
						Home
					</a>
				</li>
				{#each Object.values(modules) as module (module.href)}
					<li>
						<a
							href={resolve(module.href)}
							aria-current={page.url.pathname === module.href ? 'page' : undefined}
							class="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-medium hover:bg-slate-800 hover:text-white data-[active=true]:bg-indigo-600 data-[active=true]:text-white md:px-3 md:py-2.5"
							data-active={isWithin(module.href)}
						>
							<module.icon class="hidden size-5 md:block" />
							{module.label}
						</a>
					</li>
				{/each}
			</ul>

			<hr class="my-3 hidden border-slate-800 md:block" />

			<ul aria-label="Module resources" class="hidden space-y-1 md:block">
				{#snippet sddResources()}
					{@render resourceLinks(sddLinks)}
					{@render resourceDropdown('Lecture weeks', isWithin('/sdd/lectures'), sddLectureWeeks)}
				{/snippet}
				{#snippet sddLectureWeeks()}
					{@render resourceLinks(weeks)}
				{/snippet}
				{#snippet dynamicWebResources()}
					{@render resourceLinks(dynamicWebLinks)}
					{@render resourceLinks(dynamicWebWeekLinks)}
				{/snippet}
				{#snippet sysnetResources()}
					<li class="px-3 py-2 text-sm text-slate-400">{modules.sysnetSecurity.description}</li>
				{/snippet}

				{@render resourceDropdown(modules.sdd.label, isWithin(modules.sdd.href), sddResources)}
				{@render resourceDropdown(modules.dynamicWeb.label, isWithin(modules.dynamicWeb.href), dynamicWebResources)}
				{@render resourceDropdown(modules.sysnetSecurity.label, isWithin(modules.sysnetSecurity.href), sysnetResources)}
			</ul>

			{#if isWithin(modules.sdd.href)}
				<ul aria-label="SDD resources" class="mt-2 flex flex-wrap gap-1 border-t border-slate-800 pt-2 md:hidden">
					{@render resourceLinks(sddLinks)}
				</ul>
			{:else if isWithin(modules.dynamicWeb.href)}
				<ul aria-label="Dynamic Web resources" class="mt-2 flex flex-wrap gap-1 border-t border-slate-800 pt-2 md:hidden">
					{@render resourceLinks(dynamicWebLinks)}
				</ul>
			{/if}
		</nav>

		<div class="hidden border-t border-slate-800/50 p-4 text-xs text-slate-400 md:block">
			<p>Work in progress</p>
			<p>Updated {lastUpdated.toLocaleDateString()}</p>
		</div>
	</div>

	{@render children()}
</div>
