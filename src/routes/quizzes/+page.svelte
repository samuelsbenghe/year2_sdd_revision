<script lang="ts">
	import Page from '$lib/components/Page.svelte';
	import PageNav from '$lib/components/PageNav.svelte';
	import PageContent from '$lib/components/PageContent.svelte';
	import Section from '$lib/components/Section.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Text from '$lib/components/Text.svelte';
	import HorizontalBreak from '$lib/components/HorizontalBreak.svelte';
	import Notice from '$lib/components/Notice.svelte';
	import { ArrowRight, ClipboardCheck, Brain, BookOpen, Code, Shield, GitBranch, Users, Wrench } from '@lucide/svelte';
</script>

<svelte:head>
	<title>Quizzes - SDD Revision</title>
	<meta name="description" content="Test your Software Development and Design knowledge with interactive quizzes covering all lecture topics." />
</svelte:head>

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
					<p class="text-slate-600">Test your understanding of key SDD concepts</p>
				</div>
			</div>
		</Section>

		<HorizontalBreak />

		<Section>
			<Heading>Available Quizzes</Heading>
			<Text>Select a topic to test your knowledge. Each quiz covers key concepts from the corresponding lecture materials.</Text>

			<div class="mt-6 space-y-3">
				<a href="/quizzes/design-principles" class="group block rounded-lg border border-slate-200 bg-white p-5 transition-all hover:border-green-300 hover:shadow-md">
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-4">
							<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
								<Brain class="h-5 w-5 text-indigo-600" />
							</div>
							<div>
								<h3 class="font-semibold text-slate-800 group-hover:text-green-600">Design Principles</h3>
								<p class="text-sm text-slate-500">SOLID, DRY, Coupling & Cohesion</p>
							</div>
						</div>
						<ArrowRight class="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-green-600" />
					</div>
				</a>

				<a href="/quizzes/testing" class="group block rounded-lg border border-slate-200 bg-white p-5 transition-all hover:border-green-300 hover:shadow-md">
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-4">
							<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
								<Code class="h-5 w-5 text-green-600" />
							</div>
							<div>
								<h3 class="font-semibold text-slate-800 group-hover:text-green-600">Software Testing</h3>
								<p class="text-sm text-slate-500">Unit testing, Integration testing, TDD, ATDD</p>
							</div>
						</div>
						<ArrowRight class="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-green-600" />
					</div>
				</a>

				<a href="/quizzes/user-testing" class="group block rounded-lg border border-slate-200 bg-white p-5 transition-all hover:border-green-300 hover:shadow-md">
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-4">
							<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
								<Users class="h-5 w-5 text-purple-600" />
							</div>
							<div>
								<h3 class="font-semibold text-slate-800 group-hover:text-green-600">User & Usability Testing</h3>
								<p class="text-sm text-slate-500">Nielsen's heuristics, SUS, Think-aloud protocols</p>
							</div>
						</div>
						<ArrowRight class="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-green-600" />
					</div>
				</a>

				<a href="/quizzes/version-control" class="group block rounded-lg border border-slate-200 bg-white p-5 transition-all hover:border-green-300 hover:shadow-md">
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-4">
							<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
								<GitBranch class="h-5 w-5 text-orange-600" />
							</div>
							<div>
								<h3 class="font-semibold text-slate-800 group-hover:text-green-600">Version Control & CI/CD</h3>
								<p class="text-sm text-slate-500">Git commands, branching strategies, pipelines</p>
							</div>
						</div>
						<ArrowRight class="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-green-600" />
					</div>
				</a>

				<a href="/quizzes/security" class="group block rounded-lg border border-slate-200 bg-white p-5 transition-all hover:border-green-300 hover:shadow-md">
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-4">
							<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100">
								<Shield class="h-5 w-5 text-red-600" />
							</div>
							<div>
								<h3 class="font-semibold text-slate-800 group-hover:text-green-600">Secure Programming</h3>
								<p class="text-sm text-slate-500">Input validation, authentication, concurrency</p>
							</div>
						</div>
						<ArrowRight class="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-green-600" />
					</div>
				</a>

				<a href="/quizzes/mixed" class="group block rounded-lg border border-slate-200 bg-white p-5 transition-all hover:border-green-300 hover:shadow-md">
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-4">
							<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
								<Wrench class="h-5 w-5 text-slate-600" />
							</div>
							<div>
								<h3 class="font-semibold text-slate-800 group-hover:text-green-600">Mixed Review</h3>
								<p class="text-sm text-slate-500">Random questions from all topics</p>
							</div>
						</div>
						<ArrowRight class="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-green-600" />
					</div>
				</a>
			</div>
		</Section>

		<HorizontalBreak />

		<Notice type="info" lead="Study Tip" message="Take quizzes after reviewing the corresponding lecture material. Focus on understanding concepts rather than memorizing answers." />
	</PageContent>
</Page>
