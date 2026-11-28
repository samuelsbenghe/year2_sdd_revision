<script lang="ts">
	import { ArrowLeft, ArrowRight } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import GridList from '$lib/components/GridList.svelte';
	import GridListItem from '$lib/components/GridListItem.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import HorizontalBreak from '$lib/components/HorizontalBreak.svelte';
	import Page from '$lib/components/Page.svelte';
	import PageContent from '$lib/components/PageContent.svelte';
	import PageNav from '$lib/components/PageNav.svelte';
	import PageNavLink from '$lib/components/PageNavLink.svelte';
	import PDF from '$lib/components/PDF.svelte';
	import Section from '$lib/components/Section.svelte';
	import Text from '$lib/components/Text.svelte';
	import { appliedAiLectureHref } from '$lib/applied-ai';
	import { modules } from '$lib/modules';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const pageTitle = $derived(`Lecture ${data.lecture.week}: ${data.lecture.title}`);
</script>

<svelte:head>
	<title>{pageTitle} | Applied AI | University Revision</title>
	<meta name="description" content={data.lecture.description} />
</svelte:head>

{#key data.lecture.week}
	<Page>
		<PageNav title={pageTitle}>
			<PageNavLink href="#overview" label="Overview" />
			<PageNavLink href="#lecture-viewer" label="Lecture PDF" />
			<PageNavLink href="#revision-notes" label="Notes" />
			<PageNavLink href="#practice" label="Practice" />
		</PageNav>

		<PageContent>
			<Section id="overview">
				<a href={resolve(modules.appliedAi.href)} class="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:underline">
					<ArrowLeft class="size-4" />
					All Applied AI lectures
				</a>
				<Heading>Overview</Heading>
				<Text>{data.notes.overview}</Text>
			</Section>

			<HorizontalBreak />

			<Section id="lecture-viewer">
				<Heading>Lecture Material (PDF)</Heading>
				<PDF title={`Applied AI Week ${data.lecture.week} lecture PDF`} src={data.pdf} />
			</Section>

			<HorizontalBreak />

			<div id="revision-notes" class="space-y-12">
				{#each data.notes.sections as section (section.title)}
					<Section>
						<Heading>{section.title}</Heading>
						<GridList>
							{#each section.concepts as concept (concept.title)}
								<GridListItem title={concept.title} description={concept.description} />
							{/each}
						</GridList>
					</Section>
				{/each}
			</div>

			<HorizontalBreak />

			<Section id="practice">
				<Heading>{data.notes.practice.title}</Heading>
				<Text>{data.notes.practice.description}</Text>
				<ol class="list-decimal space-y-2 pl-5 text-slate-600">
					{#each data.notes.practice.tasks as task (task)}
						<li>{task}</li>
					{/each}
				</ol>
			</Section>

			<nav aria-label="Adjacent lectures" class="flex flex-wrap items-center justify-between gap-3">
				{#if data.previous}
					<a href={resolve(appliedAiLectureHref(data.previous.week))} class="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:underline">
						<ArrowLeft class="size-4" />
						Week {data.previous.week}
					</a>
				{/if}
				{#if data.next}
					<a href={resolve(appliedAiLectureHref(data.next.week))} class="ml-auto inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:underline">
						Week {data.next.week}
						<ArrowRight class="size-4" />
					</a>
				{/if}
			</nav>
		</PageContent>
	</Page>
{/key}
