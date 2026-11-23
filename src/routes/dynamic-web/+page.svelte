<script lang="ts">
	import { ArrowRight, ClipboardCheck } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import Header from '$lib/components/Header.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import HorizontalBreak from '$lib/components/HorizontalBreak.svelte';
	import Page from '$lib/components/Page.svelte';
	import PageContent from '$lib/components/PageContent.svelte';
	import Section from '$lib/components/Section.svelte';
	import { dynamicWebLectureHref, dynamicWebLectures } from '$lib/dynamic-web';
	import { modules } from '$lib/modules';
</script>

<svelte:head>
	<title>Dynamic Web | University Revision</title>
	<meta name="description" content={modules.dynamicWeb.description} />
</svelte:head>

<Page>
	<PageContent>
		<Section>
			<Header title="Dynamic Web Applications" description="Weekly lecture slides, lab materials, revision notes, and practice questions." />
		</Section>

		<HorizontalBreak />

		<Section>
			<a href={resolve('/dynamic-web/quizzes')} class="group flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-5 transition-all hover:border-green-300 hover:shadow-md">
				<span class="grid size-10 shrink-0 place-items-center rounded-lg bg-green-100 text-green-600">
					<ClipboardCheck class="size-5" />
				</span>
				<span class="min-w-0 flex-1">
					<span class="block font-semibold text-slate-800 group-hover:text-green-600">Quizzes</span>
					<span class="block text-sm text-slate-500">Test your knowledge by lecture week.</span>
				</span>
				<ArrowRight class="size-5 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-green-600" />
			</a>
		</Section>

		<Section>
			<Heading>Available Lectures</Heading>

			<ol class="space-y-3">
				{#each dynamicWebLectures as lecture (lecture.week)}
					<li>
						<a
							href={resolve(dynamicWebLectureHref(lecture.week))}
							class="group flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-indigo-300 hover:shadow-md md:p-5"
						>
							<span class="grid size-10 shrink-0 place-items-center rounded-lg bg-indigo-50 text-sm font-bold text-indigo-600">
								<span class="sr-only">Week </span>{lecture.week}
							</span>
							<span class="min-w-0 flex-1">
								<span class="block font-semibold text-slate-800 group-hover:text-indigo-600">{lecture.title}</span>
								<span class="block text-sm text-slate-500">{lecture.description}</span>
							</span>
							<ArrowRight class="size-5 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-indigo-600" />
						</a>
					</li>
				{/each}
			</ol>
		</Section>
	</PageContent>
</Page>
