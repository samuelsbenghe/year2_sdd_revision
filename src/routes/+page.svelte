<script lang="ts">
	import Page from '$lib/components/Page.svelte';
	import PageNav from '$lib/components/PageNav.svelte';
	import PageContent from '$lib/components/PageContent.svelte';
	import Section from '$lib/components/Section.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Text from '$lib/components/Text.svelte';
	import HorizontalBreak from '$lib/components/HorizontalBreak.svelte';
	import Notice from '$lib/components/Notice.svelte';
	import { BookOpen, ClipboardCheck, LayoutGrid, ArrowRight } from '@lucide/svelte';
</script>

<svelte:head>
	<title>SDD Revision - Home</title>
	<meta name="description" content="Software Development and Design revision resources for Year 2 students. Covering lectures, quizzes, topics, and tools." />
</svelte:head>

<Page>
	<PageNav title="Software Development & Design" />

	<PageContent>
		<Section>
			<div class="text-center">
				<h1 class="text-4xl font-bold text-slate-800">Welcome to SDD Revision</h1>
				<p class="mt-4 text-lg text-slate-600">Your comprehensive resource for Year 2 Software Development and Design</p>
			</div>
		</Section>

		<HorizontalBreak />

		<Section>
			<Heading>Quick Navigation</Heading>
			<Text>Jump straight into the content you need. All materials are organized by week and topic for easy access.</Text>

			<div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
				<a href="/lectures" class="group flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-indigo-300 hover:shadow-md">
					<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
						<BookOpen class="h-6 w-6" />
					</div>
					<div class="flex-1">
						<h3 class="font-semibold text-slate-800 group-hover:text-indigo-600">Lectures</h3>
						<p class="text-sm text-slate-500">Weekly lecture materials and PDFs</p>
					</div>
					<ArrowRight class="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-indigo-600" />
				</a>

				<a href="/quizzes" class="group flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-indigo-300 hover:shadow-md">
					<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600">
						<ClipboardCheck class="h-6 w-6" />
					</div>
					<div class="flex-1">
						<h3 class="font-semibold text-slate-800 group-hover:text-indigo-600">Quizzes</h3>
						<p class="text-sm text-slate-500">Test your knowledge</p>
					</div>
					<ArrowRight class="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-indigo-600" />
				</a>

				<a href="/tools" class="group flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-indigo-300 hover:shadow-md">
					<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
						<LayoutGrid class="h-6 w-6" />
					</div>
					<div class="flex-1">
						<h3 class="font-semibold text-slate-800 group-hover:text-indigo-600">Tools</h3>
						<p class="text-sm text-slate-500">Useful development tools</p>
					</div>
					<ArrowRight class="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-indigo-600" />
				</a>
			</div>
		</Section>

		<HorizontalBreak />

		<Notice type="info" lead="Exam Tip" message="Focus on understanding the principles rather than memorizing definitions. Be able to identify examples of good and bad design in code snippets." />
	</PageContent>
</Page>
