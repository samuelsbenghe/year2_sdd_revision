<script lang="ts">
	import { ArrowRight, ClipboardCheck } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	import type { QuizTopic } from '$lib/quizzes/types';
	import Page from './Page.svelte';
	import PageNav from './PageNav.svelte';
	import PageContent from './PageContent.svelte';
	import Section from './Section.svelte';
	import Heading from './Heading.svelte';
	import Text from './Text.svelte';
	import HorizontalBreak from './HorizontalBreak.svelte';
	import Notice from './Notice.svelte';

	type QuizTestPath = Extract<Pathname, `/${string}/quizzes/test`>;

	let { subject, testPath, topics, comingSoon = false }: { subject: string; testPath: QuizTestPath; topics: readonly QuizTopic[]; comingSoon?: boolean } = $props();
</script>

<Page>
	<PageNav title="Quizzes" />

	<PageContent>
		<Section>
			<div class="flex items-center gap-4">
				<div class="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100">
					<ClipboardCheck class="h-8 w-8 text-green-600" />
				</div>
				<div>
					<h1 class="text-2xl font-bold text-slate-800">Knowledge Quizzes</h1>
					<p class="text-slate-600">Test your understanding of key {subject} concepts</p>
				</div>
			</div>
		</Section>

		<HorizontalBreak />

		<Section>
			<Heading>Available Quizzes</Heading>
			{#if comingSoon}
				<Text>Questions are coming soon for these quizzes.</Text>
			{:else}
				<Text>Select a topic to test your knowledge. Each quiz covers key concepts from the corresponding lecture materials.</Text>
			{/if}

			<div class="mt-6 space-y-3">
				{#each topics as topic (topic.id)}
					<a
						href={resolve(`${testPath}?name=${encodeURIComponent(topic.id)}`)}
						class="group block rounded-lg border border-slate-200 bg-white p-5 transition-all hover:border-green-300 hover:shadow-md"
					>
						<div class="flex items-center justify-between gap-2">
							<div class="flex items-center gap-4">
								<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg {topic.iconClass}">
									<topic.icon class="h-5 w-5" />
								</div>
								<div>
									<h3 class="font-semibold text-slate-800 group-hover:text-green-600">{topic.title}</h3>
									<p class="text-sm text-slate-500">{topic.description}</p>
								</div>
							</div>
							<ArrowRight class="h-5 w-5 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-green-600" />
						</div>
					</a>
				{/each}
			</div>
		</Section>

		<HorizontalBreak />

		<Notice type="info" lead="Study Tip" message="Take quizzes after reviewing the corresponding lecture material. Focus on understanding concepts rather than memorizing answers." />
	</PageContent>
</Page>
